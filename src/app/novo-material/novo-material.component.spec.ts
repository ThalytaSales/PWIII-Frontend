import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoMaterialComponent } from './novo-material.component';

describe('NovoMaterialComponent', () => {
  let component: NovoMaterialComponent;
  let fixture: ComponentFixture<NovoMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
