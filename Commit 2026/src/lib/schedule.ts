import type { Recipe, ScheduleMatrix } from '../types';

/** Distributes selected recipes round-robin across [day][slot]. */
export function buildSchedule(selected: Recipe[], days: number, freq: number): ScheduleMatrix {
  const matrix: ScheduleMatrix = [];
  let pointer = 0;
  for (let d = 0; d < days; d++) {
    matrix[d] = [];
    for (let f = 0; f < freq; f++) {
      matrix[d][f] = selected[pointer % selected.length];
      pointer++;
    }
  }
  return matrix;
}
