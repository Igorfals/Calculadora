import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpokemonComponent } from './viewpokemon.component';

describe('ViewpokemonComponent', () => {
  let component: ViewpokemonComponent;
  let fixture: ComponentFixture<ViewpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
