import { ComponentFixture, TestBed } from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';

import { WishlistCatalogComponent } from './wishlist-catalog.component';

describe('WishlistCatalogComponent', () => {
  let component: WishlistCatalogComponent;
  let fixture: ComponentFixture<WishlistCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [ WishlistCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
