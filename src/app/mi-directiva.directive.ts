import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {

  @Input() appMiDirectiva:string;
 
  constructor(private element: ElementRef){}

  @HostListener('mouseenter')
  public onMouseEnter(){
      this.element.nativeElement.style.backgroundColor = this.appMiDirectiva;
  }

  @HostListener('mouseleave')
  public onMouseLeave(){
      this.element.nativeElement.style.backgroundColor = '';
  }

}
