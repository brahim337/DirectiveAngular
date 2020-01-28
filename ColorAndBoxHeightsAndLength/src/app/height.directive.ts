import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHeight]"
})
export class HeightDirective {
  @Input("appHeight") height;
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.height =
      (this.height === undefined ? 100 : this.height) + "px";
  }

  @HostListener("click") onClick() {
    this.elementRef.nativeElement.style.height = this.height + "px";
  }
}
