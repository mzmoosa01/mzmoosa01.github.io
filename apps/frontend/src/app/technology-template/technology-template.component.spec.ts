import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTemplateComponent } from './technology-template.component';

describe('TechnologyTemplateComponent', () => {
  let component: TechnologyTemplateComponent;
  let fixture: ComponentFixture<TechnologyTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
