import type { Frequency } from '../types';

export const ALL_CATEGORY = 'Semua';
export const TOTAL_PLANNER_STEPS = 7;
export const MAX_PLAN_DAYS = 7;
export const MIN_BUDGET = 5000;

export const INGREDIENT_UNITS = ['gram', 'butir', 'papan', 'bungkus', 'ikat', 'siung', 'sdm', 'ml'] as const;

export const QUICK_ADD_INGREDIENTS = [
  { name: 'Beras', qty: 500, unit: 'gram' },
  { name: 'Telur Ayam', qty: 4, unit: 'butir' },
  { name: 'Tempe', qty: 1, unit: 'papan' },
  { name: 'Kecap Manis', qty: 5, unit: 'sdm' },
  { name: 'Minyak Goreng', qty: 250, unit: 'ml' },
] as const;

export const BUDGET_PRESETS = [
  { amount: 35000, label: 'Rp 35.000 (Mode Bertahan)' },
  { amount: 75000, label: 'Rp 75.000 (Hemat Standar)' },
  { amount: 150000, label: 'Rp 150.000 (Mingguan Aman)' },
] as const;

export const FREQUENCY_OPTIONS: { value: Frequency; subtitle: string }[] = [
  { value: 1, subtitle: 'Sekali sehari' },
  { value: 2, subtitle: 'Siang & Malam' },
  { value: 3, subtitle: 'Pagi, Siang, Malam' },
];

export const DAY_LABELS = ['Hari 1', 'Hari 2', 'Hari 3', 'Hari 4', 'Hari 5', 'Hari 6', 'Hari 7'];

export const SWIPE_THRESHOLD_PX = 95;
export const SWIPE_ANIMATION_MS = 240;
export const AI_LOADING_MS = 650;
export const TOAST_DURATION_MS = 3200;
