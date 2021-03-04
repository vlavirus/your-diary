import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss']
})
export class NoteCreatorComponent implements OnInit {

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @ViewChild('textarea', {static: false}) textarea!: ElementRef;
  emojiPickerShow = false;
  text = '';
  form = new FormGroup({
    text: new FormControl('', [Validators.required])
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.onSubmit.emit(this.form.value.text);
    this.form.reset();
    this.text = '';
  }

  emojiPickerShowToggle(): void {
    this.emojiPickerShow = !this.emojiPickerShow;
  }

  public addEmoji(event: any): void {
    const start = this.textarea.nativeElement.selectionStart;
    this.text = this.text.slice(0, start) + event.emoji.native + this.text.slice(start, this.text.length);
    this.textarea.nativeElement.setRangeText(event.emoji.native, start, start, 'end');
    this.textarea.nativeElement.focus();
  }
}
