import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTabsModule,
} from '@angular/material';
import { MatCarouselModule } from '@ngmodule/material-carousel';

const modules = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTabsModule,
  MatButtonModule,
  MatCarouselModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
