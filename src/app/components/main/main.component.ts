import { Component, OnInit } from '@angular/core';
import * as Isotope from 'isotope-layout';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
    private isotope: Isotope | null = null;

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
