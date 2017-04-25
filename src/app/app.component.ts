import { Component, ViewChild } from '@angular/core';
import { WordGroupComponent } from './word-group/word-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  @ViewChild(WordGroupComponent) wordGroupComponent:WordGroupComponent;

  onClickTag(tag:string) {
    this.wordGroupComponent.updateWords(tag);
  }
}
