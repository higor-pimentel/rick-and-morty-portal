import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_CHARACTER } from 'src/app/graphql/graphql.queries';
import { Character } from '../../model/character';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  loading = false;
  character: Character = {} as Character;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.queryParams.subscribe((params) => {
      let { id } = params;

      this.getCharacter(id);
    });
  }

  getCharacter(characterId: string) {
    this.apollo
      .watchQuery({ query: GET_CHARACTER, variables: { id: characterId } })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;
        this.character = data.character;
      });
  }

  navigate(id: string) {
    this.router.navigate(['episodes/ep'], { queryParams: { id } });
  }
}
