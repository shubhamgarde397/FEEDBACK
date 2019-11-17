import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleDataService {

  public Data;
  constructor() { }

  saveData(data) {
    this.Data = data;
  }
}
