import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAPTERS } from '../../data/chapters';
import { Source } from '../../data/models';

interface Reading extends Source {
  author: string;
}

@Component({
  selector: 'app-sources',
  imports: [RouterLink],
  templateUrl: './sources.html',
  styleUrl: './sources.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourcesPage {
  protected readonly chapters = CHAPTERS;

  protected readonly reading: Reading[] = [
    { author: 'Misha Glenny', title: 'The Fall of Yugoslavia', note: 'Penguin; a journalist’s account of the early wars' },
    { author: 'Laura Silber and Allan Little', title: 'The Death of Yugoslavia', note: 'Penguin and BBC Books; the companion to the BBC series' },
    { author: 'Eric Gordy', title: 'The Culture of Power in Serbia', note: 'Penn State University Press; how the Milošević system worked' },
    { author: 'Tim Judah', title: 'The Serbs: History, Myth and the Destruction of Yugoslavia', note: 'Yale University Press' },
    { author: 'Nevenka Tromp', title: 'Prosecuting Slobodan Milošević: The Unfinished Trial', note: 'Routledge, 2016; by a member of the prosecution’s research team' },
    { author: 'Florian Bieber', title: 'The Rise of Authoritarianism in the Western Balkans', note: 'Palgrave Macmillan, 2020; includes Serbia under the Progressives' },
    { author: 'Noel Malcolm', title: 'Kosovo: A Short History', note: 'Macmillan; widely read, and criticised by some Serbian historians' },
  ];
}
