import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_LOCATIONS } from 'src/app/graphql/graphql.queries';
import { SelectOptions } from 'src/app/model/select.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading = false;
  filterObj: any;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  configTable: any = {
    columns: [
      {
        name: 'name',
        label: 'Nome',
      },
      {
        name: 'type',
        label: 'Type',
      },
      {
        name: 'dimension',
        label: 'Dimension',
      },
    ],
    totalElements: 0,
    totalPages: 0,
  };

  dataSource: any[] = [];

  searchOptions: SelectOptions[] = [
    { value: 'name', label: 'Name' },
    { value: 'type', label: 'Type' },
    { value: 'dimension', label: 'Dimension' },
  ];

  ngOnInit() {
    this.list();
  }

  list() {
    this.loading = true;
    this.apollo
      .watchQuery({
        query: GET_ALL_LOCATIONS,
        variables: {
          page: 1,
          filter: this.filterObj,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;

        this.dataSource = data.locations.results;
        this.configTable.totalElements = data.locations.info.count;
        this.configTable.totalPages = data.locations.info.pages;
      });
  }

  pageChanged(page: number): void {
    this.loading = true;
    this.apollo
      .watchQuery({
        query: GET_ALL_LOCATIONS,
        variables: {
          page: page,
          filter: this.filterObj,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.dataSource = this.dataSource.concat(data.locations.results);
        this.loading = false;
      });
  }

  search(filter: any) {
    this.filterObj = filter;
    this.list();
  }

  selectedItem(character: any) {
    this.router.navigate(['loc'], {
      relativeTo: this.route,
      queryParams: { id: character.id },
    });
  }
}
