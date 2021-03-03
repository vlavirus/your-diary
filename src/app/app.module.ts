import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteCreatorComponent } from './shared/components/note-creator/note-creator.component';
import { NoteCartComponent } from './shared/components/note-cart/note-cart.component';
import { DiaryComponent } from './diary/diary.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiPickerComponent } from './shared/components/emoji-picker/emoji-picker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteCreatorComponent,
    NoteCartComponent,
    DiaryComponent,
    EmojiPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
