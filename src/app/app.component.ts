import { Component } from '@angular/core';
import { Section } from './../models/section';
import { default as Sections } from './../mocks/sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private sections : Section [];

  constructor() {
    this.sections = Sections;
  }

  hasSubSections(section): boolean {
    return section.sections.length > 0;
  }
}
