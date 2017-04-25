import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export class Tag {
  text: string;
  count: number;
}

const TAGS: Tag[] = [
  { text: '구원', count: 1 },
  { text: '인도', count: 1 },
  { text: '약속', count: 1 },
  { text: '기도', count: 1 },
  { text: '죄', count: 1 },
  { text: '승리', count: 1 },
  { text: '말씀', count: 1 },
  { text: '헌금', count: 1 },
  { text: '순종', count: 1 },
  { text: '구원', count: 1 },
  { text: '인도', count: 1 },
  { text: '약속', count: 1 },
  { text: '기도', count: 1 },
  { text: '죄', count: 1 },
  { text: '승리', count: 1 },
  { text: '말씀', count: 1 },
  { text: '헌금', count: 1 },
  { text: '순종', count: 1 },
  { text: '구원', count: 1 },
  { text: '인도', count: 1 },
  { text: '약속', count: 1 },
  { text: '기도', count: 1 },
  { text: '죄', count: 1 },
  { text: '승리', count: 1 },
  { text: '말씀', count: 1 },
  { text: '헌금', count: 1 },
  { text: '순종', count: 1 },
];

@Component({
  selector: 'app-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.css']
})
export class TagGroupComponent implements OnInit {
  tags = TAGS;
  @Output() outputProperty = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickTag(tag:string) {
    this.outputProperty.emit(tag);
  }
}
