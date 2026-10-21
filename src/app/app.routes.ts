import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ChapterPage } from './pages/chapter/chapter';
import { TimelinePage } from './pages/timeline/timeline';
import { SourcesPage } from './pages/sources/sources';

export const routes: Routes = [
  { path: '', component: Home, title: 'Serbia since 1987' },
  { path: 'timeline', component: TimelinePage, title: 'Timeline | Serbia since 1987' },
  { path: 'sources', component: SourcesPage, title: 'Sources and notes | Serbia since 1987' },
  // Any other single segment is treated as a chapter slug; the page handles unknown slugs.
  { path: ':slug', component: ChapterPage },
];
