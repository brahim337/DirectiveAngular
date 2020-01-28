import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appWidth]"
})
export class WidthDirective {
  @Input("appWidth") width;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.width =
      (this.width === undefined ? 100 : this.width) + "px";
  }

  @HostListener("click") onClick() {
    this.elementRef.nativeElement.style.width = this.width + "px";
  }
}
