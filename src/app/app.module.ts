import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list'
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from "./calculator/api/api.module";
import { environment } from 'src/environments/environment';
import { BASE_PATH } from './calculator/api/variables';
import { HttpClientModule } from '@angular/common/http';
import { FormatPipe } from './calculator/formatpipe';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: 'info', component: WelcomeComponent },
  { path: 'kalkulator', component: CalculatorComponent },
  { path: 'kontakt', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    WelcomeComponent,
    CalculatorComponent,
    ContactComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    ApiModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [AppComponent]
})
export class AppModule { }
