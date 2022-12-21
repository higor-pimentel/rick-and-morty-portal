import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_LOCATION } from 'src/app/graphql/graphql.queries';
import { Location } from '../../model/location.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  loading = false;
  location: Location = {} as Location;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.queryParams.subscribe((params) => {
      let { id } = params;

      this.getEpisode(id);
    });
  }

  getEpisode(episodedId: string) {
    this.apollo
      .watchQuery({ query: GET_LOCATION, variables: { id: episodedId } })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;
        this.location = data.location;
      });
  }

  navigate(id: string) {
    this.router.navigate(['characters/character'], { queryParams: { id } });
  }
}
