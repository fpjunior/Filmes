import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeEditComponent } from './filme-edit.component';

describe('FilmeEditComponent', () => {
  let component: FilmeEditComponent;
  let fixture: ComponentFixture<FilmeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
