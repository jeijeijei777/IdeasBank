import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';


import { FormsModule } from '../../../node_modules/@angular/forms';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { DrawrComponent } from './drawr/drawr.component';
import { HeadSectionComponent } from './head-section/head-section.component';

const components = [
    PageNotFoundComponent,
    LanguageMenuComponent,
    LoadingDialogComponent,
    DrawrComponent,
    HeadSectionComponent,
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatStepperModule,
        MatToolbarModule,
        MatTooltipModule,
        FormsModule

    ],
    exports: [components],
    entryComponents: [LoadingDialogComponent,]
})
export class SharedModule { }
