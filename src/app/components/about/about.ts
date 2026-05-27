import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { ScrollRevealDirective } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-about',
  imports: [MatDivider, MatChipsModule, ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
