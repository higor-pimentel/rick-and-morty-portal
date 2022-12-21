import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_EPISODES } from 'src/app/graphql/graphql.queries';
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
        name: 'air_date',
        label: 'Air date',
      },
      {
        name: 'episode',
        label: 'Episode',
      },
    ],
    totalElements: 0,
    totalPages: 0,
  };

  dataSource: any[] = [];

  searchOptions: SelectOptions[] = [
    { value: 'name', label: 'Name' },
    { value: 'episode', label: 'Episode' },
  ];

  ngOnInit() {
    this.list();
  }

  list() {
    this.loading = true;
    this.apollo
      .watchQuery({
        query: GET_ALL_EPISODES,
        variables: {
          page: 1,
          filter: this.filterObj,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;

        this.dataSource = data.episodes.results;
        this.configTable.totalElements = data.episodes.info.count;
        this.configTable.totalPages = data.episodes.info.pages;
      });
  }

  pageChanged(page: number): void {
    this.loading = true;
    this.apollo
      .watchQuery({
        query: GET_ALL_EPISODES,
        variables: {
          page: page,
          filter: this.filterObj,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.dataSource = this.dataSource.concat(data.episodes.results);
        this.loading = false;
      });
  }

  search(filter: any) {
    this.filterObj = filter;
    this.list();
  }

  selectedItem(character: any) {
    this.router.navigate(['ep'], {
      relativeTo: this.route,
      queryParams: { id: character.id },
    });
  }
}
