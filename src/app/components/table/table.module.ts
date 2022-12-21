import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, NgbModule, NgbPaginationModule],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: [],
})
export class TableModule {}
