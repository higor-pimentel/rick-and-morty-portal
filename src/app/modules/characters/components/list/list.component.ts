import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_CHARACTERS } from 'src/app/graphql/graphql.queries';
import { SelectOptions } from 'src/app/model/select.interface';
import { FilterCharacter } from '../../model/character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  loading = false;
  filterObj = {} as FilterCharacter;

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
        name: 'gender',
        label: 'Gender',
      },
      {
        name: 'status',
        label: 'Status',
      },
      {
        name: 'species',
        label: 'Specie',
      },
    ],
    totalElements: 0,
    totalPages: 0,
  };

  dataSource: any[] = [];

  searchOptions: SelectOptions[] = [
    { value: 'name', label: 'Name' },
    { value: 'gender', label: 'Gender' },
    { value: 'status', label: 'Status' },
    { value: 'species', label: 'Species' },
  ];

  ngOnInit() {
    this.list();
  }

  list() {
    this.loading = true;
    this.apollo
      .watchQuery({
        query: GET_ALL_CHARACTERS,
        variables: {
          page: 1,
          filter: this.filterObj,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;

        this.dataSource = data.characters.results;
        this.configTable.totalElements = data.characters.info.count;
        this.configTable.totalPages = data.characters.info.pages;
      });
  }

  pageChanged(page: number): void {
    console.log(page);
    console.log(this.dataSource.length);

    this.loading = true;
    this.apollo
      .watchQuery({
        query: GET_ALL_CHARACTERS,
        variables: {
          page: page,
          filter: this.filterObj,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;
        if (this.dataSource.length <= (page - 1) * 20) {
          this.dataSource = this.dataSource.concat(...data.characters.results);
        } else {
          this.dataSource.splice(
            (page - 1) * 20,
            0,
            ...data.characters.results
          );
        }
      });
  }

  search(filter: any) {
    this.filterObj = filter;
    this.list();
  }

  selectedItem(character: any) {
    this.router.navigate(['character'], {
      relativeTo: this.route,
      queryParams: { id: character.id },
    });
  }
}
