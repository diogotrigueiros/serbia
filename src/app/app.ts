import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CHAPTERS } from './data/chapters';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly chapters = CHAPTERS;
  protected readonly menuOpen = signal(false);
  protected readonly year = new Date().getFullYear();

  constructor() {
    inject(Router)
      .events.pipe(filter((e) => e instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => this.menuOpen.set(false));
  }

  // Hash routing uses the URL fragment for routes, so the skip link focuses the main region directly.
  protected focusMain(): void {
    document.getElementById('main')?.focus();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  @HostListener('document:keydown.escape')
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
