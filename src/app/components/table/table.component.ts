import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() dataSource!: any[];
  @Input() configTable!: any;
  @Input() loading = false;
  @Output() pageChange = new EventEmitter();
  @Output() itemSelect = new EventEmitter();

  totalElements = 0;
  totalPages = 0;
  page = 1;
  pageSize = 20;

  pageChanged(page: number): void {
    this.pageChange.emit(page);
  }

  itemSelected(item: any): void {
    this.itemSelect.emit(item);
  }
}
