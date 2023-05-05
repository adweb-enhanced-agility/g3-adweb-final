import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isMenuOpen = false;
  isMobileView = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobileView = event.target.innerWidth <= 768;
  }

  ngOnInit() {
    this.isMobileView = window.innerWidth <= 768;
  }
}
