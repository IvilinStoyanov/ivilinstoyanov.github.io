import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSource: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  theme$ = this.themeSource.asObservable();

  constructor() { }

  changetheme(theme: string): void {
    this.themeSource.next(theme);
  }
}
