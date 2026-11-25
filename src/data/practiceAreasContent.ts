import { PRACTICE_AREAS_PART_1, type PracticeAreaDetail } from './practiceAreasPart1';
import { PRACTICE_AREAS_PART_2 } from './practiceAreasPart2';

export type { PracticeAreaDetail };
export const ALL_PRACTICE_AREAS_DETAIL: PracticeAreaDetail[] = [
  ...PRACTICE_AREAS_PART_1,
  ...PRACTICE_AREAS_PART_2,
];
