import { Component, OnInit, Input } from '@angular/core';
import { BibleService, Bible } from '../bible.service';

@Component({
  selector: 'app-word-group',
  templateUrl: './word-group.component.html',
  styleUrls: ['./word-group.component.css']
})
export class WordGroupComponent implements OnInit {
  words: Bible[];
  // 1:main, 2:words, 3:submit
  showCompIdx:number = 1;

  constructor(private bibleService: BibleService) {
    
  }

  updateWords(tag:string) {
    this.showCompIdx = 2;
   
    var error = function() {
      console.log('error!');
    }
    
    this.bibleService.getData(tag).subscribe(words => this.words = words, error);
  }

  onClickSubmit() {
    this.showCompIdx = 3;
    
    if(this.words)
      this.words.length = 0;
  }

  onClickLogo() {
    this.showCompIdx = 1;
    
    if(this.words)
      this.words.length = 0;
  }

  ngOnInit() {
    
  }
}
