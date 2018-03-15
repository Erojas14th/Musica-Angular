import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCombobox]'
})
export class ComboboxDirective {

  @HostBinding('class.open') isOpen:boolean=false;
  constructor() { }

  @HostListener('click') abrir(){
    this.isOpen=!this.isOpen;
  }
}
