import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibCoreService {
  constructor() { }
}

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor() {
    console.log("Initialized Core");
  }
}

@Injectable({
  providedIn: 'root'
})
export class OuterService {
  constructor(private core: CoreService) {
    console.log("Initialized Outer");
  }
}

