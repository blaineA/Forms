import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Models } from './models';

@NgModule({
  declarations: [
    Models,
  ],
  imports: [
    IonicModule.forChild(Models),
  ],
  exports: [
    Models
  ]
})
export class ModelsModule {}
