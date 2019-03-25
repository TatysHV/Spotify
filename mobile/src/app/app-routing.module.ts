import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'profile-error', loadChildren: './pages/profile-error/profile-error.module#ProfileErrorPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'playlist/:playlistId/songs', loadChildren: './pages/playlist-songs/playlist-songs.module#PlaylistSongsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
