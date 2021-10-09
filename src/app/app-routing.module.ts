import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([], { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
