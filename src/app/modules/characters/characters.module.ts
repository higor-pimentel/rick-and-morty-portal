import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CharactersRoutingModule } from './characters-routing.module';
import { TableModule } from 'src/app/components/table/table.module';
import { ListComponent } from './components/list/list.component';
import { SearchModule } from 'src/app/components/search/search.module';
import { DetailComponent } from './components/detail/detail.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    CharactersRoutingModule,
    SearchModule,
    NgbNavModule,
  ],
  exports: [ListComponent],
  declarations: [ListComponent, DetailComponent],
  providers: [],
})
export class CharactersModule {}
