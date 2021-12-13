import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component'
/**
 * Module for all shared modules / dependencies.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    LoaderComponent,
    ErrorMessageComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    LoaderComponent,
    ErrorMessageComponent
  ],
})
export class SharedModule { }
