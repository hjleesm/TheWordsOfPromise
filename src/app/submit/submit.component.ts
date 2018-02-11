import { Component, OnInit } from '@angular/core';
import { bookList, BibleService, Bible} from '../bible.service'

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})

export class SubmitComponent implements OnInit {
  books = bookList;
  chapters:number[] = [];
  verse:number[] = [];

  selectedBook:string;
  selectedChapter:string;
  selectedVerse:string;

  words:Bible[];

  constructor(private bibleService: BibleService) { }

  ngOnInit() {
      let cLen = this.bibleService.getChapterLength('01');
      for(let i = 1; i <= cLen; i++)
        this.chapters.push(i);

      let vLen = this.bibleService.getVerseLength('01', '1');
      for(let i = 1; i <= vLen; i++)
        this.verse.push(i);

      this.selectedBook = '창세기';
      this.selectedChapter = '1';
      this.selectedVerse = '1';
  }

  updateSelectedBook(event:string): void{
    this.selectedChapter = this.bibleService.getChapterLength(this.selectedBook).toString();
    console.log('updateValue!');
  }

  updateSelectedChapter(event:string): void{
    console.log('updateValue!')
  }

  updateSelectedVerse(event:string): void{
    console.log('updateValue!')
  }
}
