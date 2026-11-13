import type { ImgHTMLAttributes } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackText: string;
}

/** <img> with the original placehold.co onError fallback. */
export default function RecipeImage({ fallbackText, ...rest }: Props) {
  return (
    <img
      {...rest}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = `https://placehold.co/600x400/059669/ffffff?text=${encodeURIComponent(fallbackText)}`;
      }}
    />
  );
}
