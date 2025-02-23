import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  ngOnInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    const logos = document.querySelector('.logos') as HTMLElement;
    setInterval(() => {
      logos.appendChild(logos.firstElementChild as Node); // Moves first logo to end
    }, 1000); // Adjust time (2000ms = 2s)
  }

}
