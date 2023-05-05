import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  activeIndex: number = -1;
  activeDescriptionIndex: number = -1;

  constructor() {}

  ngOnInit() {}

  toggleActive(event: MouseEvent, index: number) {
    const target = event.target as HTMLElement;
    const box = target.closest('.box');
    if (box) {
      const boxes = Array.from(box.parentElement.children);
      const boxIndex = boxes.indexOf(box);
      this.activeIndex = this.activeIndex === boxIndex ? -1 : boxIndex;
      this.activeDescriptionIndex = index;
    }
  }
}
