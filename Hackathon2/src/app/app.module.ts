import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EddComponent } from './fdf/edd/edd.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> cd9f6317852391dc9416625ec2353a4b4c4627b7

import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';


@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
=======
  declarations: [
    AppComponent,
    EddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatStepperModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule,
    MatListModule,
    MatSelectModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    FormsModule,
    CdkTableModule,
    NoopAnimationsModule,


  ],
>>>>>>> cd9f6317852391dc9416625ec2353a4b4c4627b7
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
