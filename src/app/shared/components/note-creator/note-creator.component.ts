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
  textAreaConten = '';
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
  }

  emojiPickerShowToggle(): void {
    this.emojiPickerShow = !this.emojiPickerShow;
  }

  public addEmoji(event: any): void {
    this.textarea.nativeElement.setRangeText(event.emoji.native, this.textarea.nativeElement.selectionStart, this.textarea.nativeElement.selectionEnd + 2);
    this.textarea.nativeElement.focus();
  }
}
