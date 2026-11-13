import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { SWIPE_ANIMATION_MS, SWIPE_THRESHOLD_PX } from '../lib/constants';
import type { SwipeDirection } from '../types';

interface UseSwipeOptions {
  onDecision: (direction: SwipeDirection) => void;
}

/** Drag/touch gesture for the Tinder-style recipe card. Replaces attachSwipeGestureHandlers + handleSwipeDecision. */
export function useSwipe({ onDecision }: UseSwipeOptions) {
  const startX = useRef(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exiting, setExiting] = useState<SwipeDirection | null>(null);
  const dragXRef = useRef(0);

  const decide = useCallback(
    (direction: SwipeDirection) => {
      setExiting(direction);
      window.setTimeout(() => {
        setExiting(null);
        setDragX(0);
        dragXRef.current = 0;
        onDecision(direction);
      }, SWIPE_ANIMATION_MS);
    },
    [onDecision],
  );

  const onStart = (clientX: number) => {
    startX.current = clientX;
    setIsDragging(true);
  };

  // Window-level listeners so dragging continues outside the card, like the original.
  useEffect(() => {
    if (!isDragging) return;

    const move = (clientX: number) => {
      const dx = clientX - startX.current;
      dragXRef.current = dx;
      setDragX(dx);
    };
    const end = () => {
      setIsDragging(false);
      const dx = dragXRef.current;
      if (dx > SWIPE_THRESHOLD_PX) decide('right');
      else if (dx < -SWIPE_THRESHOLD_PX) decide('left');
      else {
        setDragX(0);
        dragXRef.current = 0;
      }
    };

    const onMouseMove = (e: MouseEvent) => move(e.clientX);
    const onTouchMove = (e: TouchEvent) => move(e.touches[0].clientX);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', end);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', end);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', end);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', end);
    };
  }, [isDragging, decide]);

  const likeOpacity = dragX > 30 ? Math.min(1, (dragX - 30) / 80) : 0;
  const nopeOpacity = dragX < -30 ? Math.min(1, (-dragX - 30) / 80) : 0;

  const cardStyle: CSSProperties = exiting ? {} : { transform: `translateX(${dragX}px) rotate(${dragX * 0.05}deg)` };
  const cardClassName = [
    'swipe-card',
    isDragging ? 'dragging' : '',
    exiting === 'right' ? 'swipe-right-anim' : '',
    exiting === 'left' ? 'swipe-left-anim' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return {
    cardStyle,
    cardClassName,
    likeOpacity,
    nopeOpacity,
    decide, // for the PILIH / LEWATI buttons
    handlers: {
      onMouseDown: (e: React.MouseEvent) => onStart(e.clientX),
      onTouchStart: (e: React.TouchEvent) => onStart(e.touches[0].clientX),
    },
  };
}
