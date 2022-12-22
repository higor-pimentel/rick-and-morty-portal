import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOptions } from 'src/app/model/select.interface';
import { FilterCharacter } from 'src/app/modules/characters/model/character';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  filterObj: any = {};

  @Input() options: SelectOptions[] = [];
  @Input() label!: string;
  @Output() searchOut = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  search(event: any, data: any, filter: any) {
    this.filterObj = {};
    if (!!filter.value.trim()) {
      this.filterObj[filter.value] = data?.value;
      event.preventDefault();

      this.searchOut.emit(this.filterObj);
    }
  }
}
