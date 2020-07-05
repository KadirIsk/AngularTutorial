import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS);
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter(leader => leader.featured)[0]);
  }
}
