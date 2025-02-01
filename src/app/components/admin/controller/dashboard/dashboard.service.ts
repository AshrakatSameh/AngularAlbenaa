import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private modalState = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalState.asObservable();

  openModal(): void {
    this.modalState.next(true);
  }

  closeModal(): void {
    this.modalState.next(false);
  } 
  constructor() { }
}
