import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShoppingList } from './shopping-list';

@NgModule({
  declarations: [
    ShoppingList,
  ],
  imports: [
    IonicModule.forChild(ShoppingList),
  ],
  exports: [
    ShoppingList
  ]
})
export class ShoppingListModule {}
