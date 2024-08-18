import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `

    <p>Counter: {{counter}}</p>
    <button (click)="incremento(+1)">+1</button>
    <button (click)="resetContador()">Reset</button>
    <button (click)="incremento(-1)">-1</button>
    `,
})

export class componenteContador{

  public counter:number = 10;

  incremento(value:number):void{
    this.counter+= value;
  }

  resetContador():void{
    this.counter=10;
  }
}
