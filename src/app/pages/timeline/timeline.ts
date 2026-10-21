import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TIMELINE, THEME_LABELS } from '../../data/timeline';
import { CHAPTERS, findChapter } from '../../data/chapters';
import { Theme, TimelineEvent } from '../../data/models';

interface Decade {
  label: string;
  events: TimelineEvent[];
}

@Component({
  selector: 'app-timeline',
  imports: [RouterLink],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelinePage {
  protected readonly themes = Object.keys(THEME_LABELS) as Theme[];
  protected readonly labels = THEME_LABELS;
  protected readonly active = signal<Theme | null>(null);
  protected readonly total = TIMELINE.length;

  protected readonly shown = computed(() => {
    const t = this.active();
    return t ? TIMELINE.filter((e) => e.themes.includes(t)) : TIMELINE;
  });

  protected readonly decades = computed<Decade[]>(() => {
    const groups = new Map<number, TimelineEvent[]>();
    for (const e of this.shown()) {
      const d = Math.floor(e.year / 10) * 10;
      groups.set(d, [...(groups.get(d) ?? []), e]);
    }
    return [...groups.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([d, events]) => ({ label: `${d}s`, events }));
  });

  protected toggle(t: Theme | null): void {
    this.active.set(this.active() === t ? null : t);
  }

  protected chapterTitle(slug: string | undefined): string {
    return findChapter(slug)?.title ?? '';
  }

  protected readonly chapterCount = CHAPTERS.length;
}
