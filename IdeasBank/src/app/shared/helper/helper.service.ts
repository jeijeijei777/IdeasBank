import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private snackBar: MatSnackBar) {}

  public notice(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 6000,
    });
  }
}
