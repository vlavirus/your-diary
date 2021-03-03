import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent implements OnInit {

  @Output() sendEmoji: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select($event: { emoji: any; }): void {
    this.sendEmoji.emit($event);
  }
}
