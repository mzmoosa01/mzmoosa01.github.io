import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TechnologyTemplateComponent } from '../technology-template/technology-template.component';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  i = 0;
  //@ViewChild(TechnologyTemplateComponent) technologiesComp;

  ngOnInit(): void {
    this.typing();
  }

  typing = () => {
    const txt =
      'I design, code and deploy reliable scalable and maintainable software solutions'; /* The text */
    const speed = 50; /* The speed/duration of the effect in milliseconds */

    // for (let j = 0; j < txt.length; j++) {
    //   setTimeout(() => this.typeLetter(txt.charAt(j), 'demo'), speed);
    // }

    if (this.i < txt.length) {
      document.getElementById('demo').innerHTML += txt.charAt(this.i);
      this.i++;
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
