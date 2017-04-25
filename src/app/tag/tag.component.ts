import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  inputs: ['text']
})
export class TagComponent implements OnInit {
  text: string;
  @Output() outputProperty = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.outputProperty.emit(this.text);
  }
}
