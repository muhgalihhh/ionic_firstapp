import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent {
  name: string = 'Muhamad Galih';
  bio: string = 'Aspiring graphic designer.';
  nim: string = 'H1D022052';
  shiftLama: string = 'B';
  shiftBaru: string = 'E';
  contact: string = '081234567890';
  email: string = 'galih@example.com';
  address: string = 'Kota Banjar, Indonesia';
  cvLink: string = 'assets/document/cv.pdf';

  scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
