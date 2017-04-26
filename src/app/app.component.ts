import { Component, ViewChild, NgZone, Output } from '@angular/core';
import { WordGroupComponent } from './word-group/word-group.component';

const MARGIN:number = 30;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() width = window.innerWidth - MARGIN;
  @Output() height = window.innerHeight - MARGIN;

  constructor(ngZone:NgZone) {
    window.onresize = (e) =>
    {
        ngZone.run(() => {
            this.width = window.innerWidth - MARGIN;
            this.height = window.innerHeight - MARGIN;
        });
    };
  }

  @ViewChild(WordGroupComponent) wordGroupComponent:WordGroupComponent;

  onClickTag(tag:string) {
    this.wordGroupComponent.updateWords(tag);
  }
}
