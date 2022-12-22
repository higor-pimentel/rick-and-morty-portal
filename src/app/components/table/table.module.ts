import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, NgbModule, NgbPaginationModule, TranslateModule],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: [],
})
export class TableModule {}
