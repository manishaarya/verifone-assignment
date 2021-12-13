import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollectionComponent } from './add-collection.component';

describe('AddCollectionComponent', () => {
  let component: AddCollectionComponent;
  let fixture: ComponentFixture<AddCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create collection', () => {
    component.createCollection();
    expect(component.model.title).toEqual('');
    expect(component.model.description).toEqual('');
    expect(component.isShowCollectionContainer).toBeTruthy();

  });

  it('should closeCollectionContainer', () => {
    component.closeCollectionContainer();
    expect(component.model.title).toEqual('');
    expect(component.model.description).toEqual('');
    expect(component.isShowCollectionContainer).toBeFalsy();

  });

  it('should reset form', () => {
    component.resetForm();
    expect(component.model.title).toEqual('');
    expect(component.model.description).toEqual('');
  });
});
