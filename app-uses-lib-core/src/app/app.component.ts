import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { OuterService } from 'lib-core';

@Injectable({   providedIn: 'root' })
export class OutmostService { constructor(private outer: OuterService) {
    console.log("Initialized Outmost");
}}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-uses-lib-core';
  constructor(private outmost: OutmostService){
    console.log("Initialized AppComponent");
  }
}
