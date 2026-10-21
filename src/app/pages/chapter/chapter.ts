import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs';
import { CHAPTERS, findChapter } from '../../data/chapters';

@Component({
  selector: 'app-chapter',
  imports: [RouterLink],
  templateUrl: './chapter.html',
  styleUrl: './chapter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterPage {
  private readonly title = inject(Title);
  private readonly slug = toSignal(inject(ActivatedRoute).paramMap.pipe(map((p) => p.get('slug'))), {
    initialValue: null,
  });

  protected readonly chapter = computed(() => findChapter(this.slug()));

  protected readonly neighbours = computed(() => {
    const i = CHAPTERS.findIndex((c) => c.slug === this.slug());
    return {
      prev: i > 0 ? CHAPTERS[i - 1] : null,
      next: i >= 0 && i < CHAPTERS.length - 1 ? CHAPTERS[i + 1] : null,
    };
  });

  constructor() {
    effect(() => {
      const c = this.chapter();
      this.title.setTitle(c ? `${c.title} | Serbia since 1987` : 'Page not found | Serbia since 1987');
    });
  }

  // Hash routing owns the URL fragment, so in-page links scroll programmatically.
  protected jump(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  }

  protected host(url: string | undefined): string {
    if (!url) return '';
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return '';
    }
  }
}
