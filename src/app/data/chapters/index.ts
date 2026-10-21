import { Chapter } from '../models';
import { wars } from './wars';
import { milosevic } from './milosevic';
import { greaterSerbia } from './greater-serbia';
import { kosovo } from './kosovo';
import { zemunClan } from './zemun-clan';
import { frontiers } from './frontiers';
import { vucic } from './vucic';

export const CHAPTERS: Chapter[] = [wars, milosevic, greaterSerbia, kosovo, zemunClan, frontiers, vucic];

export function findChapter(slug: string | null | undefined): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}
