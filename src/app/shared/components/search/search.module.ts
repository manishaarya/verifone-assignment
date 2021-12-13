import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    FormsModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchModule { }
