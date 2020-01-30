import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { enableDebugTools } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule',
    data: {animation: 'SettingsPage'}
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'editor',
    loadChildren: './editor/editor.module#EditorModule',
    data: {animation: 'EditorPage'}
  },
  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules,
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
