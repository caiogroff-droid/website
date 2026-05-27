import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-projects',
  imports: [
    MatDivider,
    MatCard,
    MatButton,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
