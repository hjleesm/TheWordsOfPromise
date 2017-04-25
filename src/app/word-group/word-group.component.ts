import { Component, OnInit, Input } from '@angular/core';
import { WordService, Word} from '../word.service';

@Component({
  selector: 'app-word-group',
  templateUrl: './word-group.component.html',
  styleUrls: ['./word-group.component.css']
})
export class WordGroupComponent implements OnInit {
  words: Word[];

  constructor(private wordService: WordService) {
    
  }

  updateWords(tag:string) {
    this.words = this.wordService.requesetWord(tag);
  }

  ngOnInit() {
  }
}
