import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Services } from './services';

@NgModule({
  declarations: [
    Services,
  ],
  imports: [
    IonicModule.forChild(Services),
  ],
  exports: [
    Services
  ]
})
export class ServicesModule {}
