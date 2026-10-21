import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { describe, it, expect, beforeEach } from 'vitest';

import { routes } from './app.routes';
import { CHAPTERS } from './data/chapters';
import { TIMELINE } from './data/timeline';

describe('Serbia site', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });

  it('renders the home hero with both scripts and a link per chapter', async () => {
    const h = await RouterTestingHarness.create('/');
    const el: HTMLElement = h.routeNativeElement!;
    expect(el.textContent).toContain('Srbija');
    expect(el.textContent).toContain('Србија');
    expect(el.querySelector('[role="slider"]')).not.toBeNull();
    expect(el.querySelectorAll('.ledger a').length).toBe(CHAPTERS.length);
  });

  for (const c of CHAPTERS) {
    it(`renders chapter "${c.slug}" fully`, async () => {
      const h = await RouterTestingHarness.create('/' + c.slug);
      const el: HTMLElement = h.routeNativeElement!;
      expect(el.querySelector('h1')?.textContent).toContain(c.title);
      expect(el.textContent).toContain(c.titleSr);
      expect(el.querySelectorAll('section.sec').length).toBe(c.sections.length);
      expect(el.querySelector('#differ')).not.toBeNull();
      expect(el.querySelectorAll('.srcs li').length).toBe(c.sources.length);
    });
  }

  it('shows a helpful page for an unknown chapter', async () => {
    const h = await RouterTestingHarness.create('/nope');
    expect(h.routeNativeElement!.textContent).toContain('does not exist');
  });

  it('timeline renders every event and filters by theme', async () => {
    const h = await RouterTestingHarness.create('/timeline');
    const el: HTMLElement = h.routeNativeElement!;
    expect(el.querySelectorAll('.event').length).toBe(TIMELINE.length);
    const chips = Array.from(el.querySelectorAll<HTMLButtonElement>('.chip'));
    const crime = chips.find((b) => b.textContent!.includes('Crime'))!;
    crime.click();
    h.detectChanges();
    const expected = TIMELINE.filter((e) => e.themes.includes('crime')).length;
    expect(el.querySelectorAll('.event').length).toBe(expected);
    expect(expected).toBeGreaterThan(0);
    expect(expected).toBeLessThan(TIMELINE.length);
  });

  it('sources page lists every chapter', async () => {
    const h = await RouterTestingHarness.create('/sources');
    expect(h.routeNativeElement!.querySelectorAll('.group').length).toBe(CHAPTERS.length);
  });

  it('has consistent data', () => {
    const slugs = new Set(CHAPTERS.map((c) => c.slug));
    expect(slugs.size).toBe(CHAPTERS.length);
    for (const e of TIMELINE) {
      if (e.chapter) expect(slugs.has(e.chapter), `${e.title} -> ${e.chapter}`).toBe(true);
    }
    // Timeline must be in date order.
    const years = TIMELINE.map((e) => e.year);
    expect(years).toEqual([...years].sort((a, b) => a - b));
    for (const c of CHAPTERS) {
      const ids = c.sections.map((s) => s.id);
      expect(new Set(ids).size, c.slug).toBe(ids.length);
      for (const s of c.sources) {
        if (s.url) expect(() => new URL(s.url!), s.url).not.toThrow();
      }
    }
  });
});
