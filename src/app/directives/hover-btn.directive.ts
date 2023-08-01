import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[hoverBtn]'
})
export class HoverBtnDirective implements OnInit{

  @Input() hoverBtnDefaultBgColor:string = 'linear-gradient( 2deg, #71081e 0%, #d7485c 100%)';
  @Input() hoverBtnBgColor:string = 'rgb(236,90,135)';

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseover')
  onMouseOver(){
    this.changeBtnBgColor(this.hoverBtnBgColor);
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.changeBtnBgColor(this.hoverBtnDefaultBgColor);

  }

  ngOnInit(){
    this.changeBtnBgColor(this.hoverBtnDefaultBgColor);
  }

  changeBtnBgColor(color: string){
    this.el.nativeElement.style.background = color;
  }

}
