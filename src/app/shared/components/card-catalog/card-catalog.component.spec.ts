import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCatalogComponent } from './card-catalog.component';

describe('CardCatalogComponent', () => {
  let component: CardCatalogComponent;
  let fixture: ComponentFixture<CardCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCatalogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should close modal on click ', () => {
    component.closeModal();
    expect(component.isShowModal).toBeFalsy();
  })

  it('should open modal on click ', () => {
    component.openModal({
      id: '1',
      description: '1',
      urls: {
        full: '1',
        regular: '1',
      },
      user: {
        username: '1',
        name: '1',
        portfolio_url: '1',
        profile_image: {
          small: '1',
          medium: '1',
          large: '1'
        }
      }
    })
    expect(component.isShowModal).toBeTruthy();
  })
});
