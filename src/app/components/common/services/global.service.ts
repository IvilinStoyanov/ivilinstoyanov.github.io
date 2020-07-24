import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
 isParticleInvoked = false;
 projects: any;

constructor() { }

}
