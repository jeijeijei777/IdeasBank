import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  // WebShareAPIも後に加える？
  public notice(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 6000
    });
  }
}
