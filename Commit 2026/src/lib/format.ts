import type { Frequency } from '../types';

export const formatRupiah = (num: number): string =>
  'Rp ' + Math.round(num).toLocaleString('id-ID');

export const getSlotLabel = (frequency: Frequency, slotIndex: number): string => {
  if (frequency === 1) return 'Menu Utama';
  if (frequency === 2) return slotIndex === 0 ? 'Makan Siang' : 'Makan Malam';
  return ['Sarapan', 'Makan Siang', 'Makan Malam'][slotIndex];
};

export const formatDateId = (date: Date): string =>
  date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
