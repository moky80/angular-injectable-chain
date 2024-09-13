import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoreService { 
  constructor() { console.log("Initialized Core");
} }
@Injectable({ providedIn: 'root' })
export class OuterService {
  constructor(private core: CoreService) {
    console.log("Initialized Outer");
}}
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
  title = 'app-standalone';
  constructor(private outmost: OutmostService){
    console.log("Initialized AppComponent");
  }
}
