import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaylistSongsPage } from './playlist-songs.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistSongsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaylistSongsPage]
})
export class PlaylistSongsPageModule {}
