import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from 'src/app/components/table/table.module';
import { LocationsRoutingModule } from './locations-routing.module';
import { ListComponent } from './components/list/list.component';
import { SearchModule } from 'src/app/components/search/search.module';
import { DetailComponent } from './components/detail/detail.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    LocationsRoutingModule,
    SearchModule,
    NgbNavModule,
  ],
  exports: [ListComponent],
  declarations: [ListComponent, DetailComponent],
  providers: [],
})
export class LocationsModule {}
