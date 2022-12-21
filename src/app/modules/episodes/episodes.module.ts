import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from 'src/app/components/table/table.module';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { ListComponent } from './components/list/list.component';
import { SearchModule } from 'src/app/components/search/search.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    EpisodesRoutingModule,
    SearchModule,
    NgbNavModule,
  ],
  exports: [ListComponent],
  declarations: [ListComponent, DetailComponent],
  providers: [],
})
export class EpisodesModule {}
