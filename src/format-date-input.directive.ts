import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[appFormatDateInput]'
})
export class FormatDateInputDirective {

  constructor(private el: ElementRef, private control: NgControl, private datePipe: DatePipe) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    let input = event?.target?.value; // Performing null check
    if (input && input.length === 8) {
      let formattedDate = this.datePipe.transform(input, 'dd MMM yyyy');
      this.control.control!.setValue(formattedDate); // Setting the value directly
    }
  }
  
}
