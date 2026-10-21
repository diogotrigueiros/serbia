import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  signal,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CHAPTERS } from '../../data/chapters';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly chapters = CHAPTERS;

  /** Position of the frontier line, as a percentage of the hero width. */
  protected readonly x = signal(100);
  /** True only during the opening sweep, so pointer tracking afterwards is immediate. */
  protected readonly settling = signal(true);

  constructor() {
    afterNextRender(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        this.x.set(50);
        this.settling.set(false);
        return;
      }
      requestAnimationFrame(() => this.x.set(50));
      setTimeout(() => this.settling.set(false), 1500);
    });
  }

  protected onPointer(event: PointerEvent): void {
    if (this.settling()) {
      this.settling.set(false);
    }
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const pct = ((event.clientX - rect.left) / rect.width) * 100;
    this.x.set(this.clamp(pct));
  }

  protected onKey(event: KeyboardEvent): void {
    const step = event.shiftKey ? 10 : 4;
    if (event.key === 'ArrowLeft') {
      this.settling.set(false);
      this.x.update((v) => this.clamp(v - step));
      event.preventDefault();
    } else if (event.key === 'ArrowRight') {
      this.settling.set(false);
      this.x.update((v) => this.clamp(v + step));
      event.preventDefault();
    } else if (event.key === 'Home') {
      this.x.set(this.clamp(0));
      event.preventDefault();
    } else if (event.key === 'End') {
      this.x.set(this.clamp(100));
      event.preventDefault();
    }
  }

  private clamp(v: number): number {
    return Math.min(94, Math.max(6, v));
  }
}
