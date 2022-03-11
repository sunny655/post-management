import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEllipsis]'
})
export class EllipsisDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(){
    const data = this.elementRef.nativeElement.innerText;
    if(data?.length > 50){
      const newData = data.substring(0, 50) + '...'
      this.elementRef.nativeElement.innerText = newData;
    }
  }
}
