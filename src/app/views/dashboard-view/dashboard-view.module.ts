import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { DashboardViewComponent } from './dashboard-view.component';
import { DashboardViewRoutingModule } from './dashboard-view-routing.module';
import { DashboardViewService } from './dashboard-view.service';
import { CardCatalogComponent } from 'src/app/shared/components/card-catalog/card-catalog.component';
import { AddCollectionComponent } from 'src/app/shared/components/collection/add-collection/add-collection.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { DisplayCollectionComponent } from 'src/app/shared/components/collection/display-collection/display-collection.component';

@NgModule({
  imports: [
    DashboardViewRoutingModule,
    SharedModule,
    SearchModule
  ],
  declarations: [DashboardViewComponent, CardCatalogComponent, AddCollectionComponent, ModalComponent, DisplayCollectionComponent],
  exports: [SharedModule, AddCollectionComponent, ModalComponent, DisplayCollectionComponent],
  providers: [DashboardViewService]
})
export class DashboardViewModule { }
