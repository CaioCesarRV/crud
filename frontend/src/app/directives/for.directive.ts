import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {

 @Input("myForEm") numbers: number[] = [1, 2, 3, 4, 5];
 

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
    ) { }


   ngOnInit(): void {
     for (let number of this.numbers) {
       this.container.createEmbeddedView(this.template);
     }


   }

  }
