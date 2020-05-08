import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakeComponent } from './fake/fake.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
