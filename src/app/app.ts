import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ScrollRevealDirective } from './directives/scroll-reveal';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ScrollRevealDirective, About, Projects, Contact, Hero, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-website');
}
