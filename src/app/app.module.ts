import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { FormatterPipe } from './pipe/formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SkillComponent,
    ContactComponent,
    FormatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
