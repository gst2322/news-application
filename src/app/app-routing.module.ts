import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sample1Component } from './sample1/sample1.component';

const routes: Routes = [
  {path:'sample1',component:Sample1Component},
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'tabs/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}