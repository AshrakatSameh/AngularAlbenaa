import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Isotope from 'isotope-layout';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lang: string = 'en';
    private isotope: Isotope | null = null;
constructor(private translate:TranslateService){
  this.lang = this.translate.currentLang || 'en';

  // Listen for language changes
  this.translate.onLangChange.subscribe(event => {
    this.lang = event.lang;
  });
}
    ngOnInit(): void {
      // Initialize Isotope for a portfolio container
      const portfolioContainer = document.querySelector('.portfolio-container') as HTMLElement;
      if (portfolioContainer) {
          const isotope = new Isotope(portfolioContainer, {
              itemSelector: '.portfolio-item',
              layoutMode: 'fitRows',
          });
      }
    }

}
