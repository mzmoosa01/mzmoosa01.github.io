import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TechnologyTemplateComponent } from '../technology-template/technology-template.component';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  private index = 0;
  //@ViewChild(TechnologyTemplateComponent) technologiesComp;

  ngOnInit(): void {
    this.typing();
  }

  typing = () => {
    const txt =
      'I design, code and deploy reliable, scalable and maintainable software solutions'; /* The text */
    const speed = 50; /* The speed/duration of the effect in milliseconds */

    if (this.index < txt.length) {
      document.getElementById('demo').innerHTML += txt.charAt(this.index);
      this.index++;
      setTimeout(this.typing, speed);
    }
  };

  typeLetter(letter: string, elementId: string) {
    document.getElementById(elementId).innerHTML += letter;
  }

  public scrollToElement(elementId: string) {
    const el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
