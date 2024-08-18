
import { NgModule } from '@angular/core';
import { componenteContador } from './components/counter/contador.component';

@NgModule({
  exports: [
    componenteContador
  ],
  declarations: [
    componenteContador
  ],
})
export class CounterModule { }
