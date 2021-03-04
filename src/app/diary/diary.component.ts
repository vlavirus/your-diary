import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  noteArray: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  addNewNote(note: string): void {
    this.noteArray.push(note);
  }
}
