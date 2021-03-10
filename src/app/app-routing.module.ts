import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/ayurveda', pathMatch: 'full' },
  { path: 'ayurveda', loadChildren: () => import('./modules/ayurveda/ayurveda.module').then(m=>m.AyurvedaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
