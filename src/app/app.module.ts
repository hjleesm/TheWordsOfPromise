import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TagComponent } from './tag/tag.component';
import { MainComponent } from './main/main.component';
import { TagGroupComponent } from './tag-group/tag-group.component';
import { WordComponent } from './word/word.component';
import { WordGroupComponent } from './word-group/word-group.component';
import { WordService } from './word.service';
import { BibleService } from './bible.service';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    MainComponent,
    TagGroupComponent,
    WordComponent,
    WordGroupComponent,
    SubmitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WordService, BibleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
