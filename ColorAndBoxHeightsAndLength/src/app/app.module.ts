import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeightDirective } from "./height.directive";
import { WidthDirective } from "./width.directive";
import { ColorDirective } from "./color.directive";
import { BoxComponent } from "./box/box.component";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    HeightDirective,
    WidthDirective,
    ColorDirective,
    BoxComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
