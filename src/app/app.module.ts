import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Importa la función bootstrapApplication
import { RiesgosComponent } from './views/riesgos/riesgos.component';
import { HomeComponent } from './views/home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    SharedModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent], // AppComponent should be here in the bootstrap array
})
export class AppModule { }


