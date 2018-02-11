import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BibleService } from '../bible.service';

export class Tag {
  text: string;
  count: number;
}

@Component({
  selector: 'app-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.css']
})
export class TagGroupComponent implements OnInit {
  tags: Tag[];
  @Output() outputProperty = new EventEmitter<string>();

  constructor(private bibleService: BibleService) { 
    var error = function() {
      console.log('error!');
    };
    
    this.bibleService.getTags().subscribe(tags => this.tags = tags, error);
  }

  ngOnInit() {
  }

  onClickTag(tag:string) {
    this.outputProperty.emit(tag);
  }
}
