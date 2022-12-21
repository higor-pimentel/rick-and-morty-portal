import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Chart, DoughnutController, registerables } from 'chart.js';
import {
  COUNT_CHARACTERS_BY_STATUS,
  COUNT_CHARACTERS_BY_STATUS_SPECIE,
  GET_ALL_LOCATIONS,
  GET_LOCATION_RESIDENTS,
} from 'src/app/graphql/graphql.queries';
import { CharacterResume } from '../../characters/model/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public chart: any;
  public specieChart: any;
  public loading = false;
  chartData: any[] = [];
  chartBackgroundColor = ['green', 'red', 'blue'];
  chartLabels = ['Alive', 'Dead', 'Unknown'];
  species: any[] = [];
  locations: any[] = [];

  constructor(private apollo: Apollo) {
    Chart.register(DoughnutController, ...registerables);
  }

  ngOnInit(): void {
    this.loading = true;
    this.getCharactersByStatus();
    this.getCharactersBySpecies('');
  }

  createChart(
    itemChart: string,
    label: string,
    labels: string[],
    backgroundColor: string[],
    data: any[]
  ) {
    return new Chart(itemChart, {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: backgroundColor,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  getCharactersByStatus() {
    this.apollo
      .watchQuery({
        query: COUNT_CHARACTERS_BY_STATUS,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;
        this.chartData = [
          data.aliveCharacters.info.count,
          data.deadCharacters.info.count,
          data.unknownCharacters.info.count,
        ];
        this.chart = this.createChart(
          'myChartLocation',
          'Characters',
          this.chartLabels,
          this.chartBackgroundColor,
          this.chartData
        );
      });
  }

  getCharactersBySpecies(specie: string) {
    this.apollo
      .watchQuery({
        query: COUNT_CHARACTERS_BY_STATUS_SPECIE,
        variables: {
          specie,
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;
        const specieData = [
          data.aliveCharacters.info.count,
          data.deadCharacters.info.count,
          data.unknownCharacters.info.count,
        ];

        if (!!this.specieChart) {
          this.specieChart.data.datasets[0].data = specieData;
          this.specieChart.update();
        } else {
          this.specieChart = this.createChart(
            'myChartSpecies',
            'Characters',
            this.chartLabels,
            this.chartBackgroundColor,
            specieData
          );
        }
      });
  }

  getCharactersByLocation(location: string) {
    this.apollo
      .watchQuery({
        query: GET_LOCATION_RESIDENTS,
        variables: {
          filter: { name: location },
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.loading = false;

        const locationData = [
          data.locations.results[0].residents.filter(
            (char: CharacterResume) => char.status === 'Alive'
          ).length,
        ];
        locationData.push(
          data.locations.results[0].residents.filter(
            (char: CharacterResume) => char.status === 'Dead'
          ).length
        );
        locationData.push(
          data.locations.results.filter(
            (char: { residents: CharacterResume }) =>
              char.residents.status === 'unknown'
          ).length
        );

        console.log(locationData);

        if (!!this.chart) {
          this.chart.data.datasets[0].data = locationData;
          this.chart.update();
        }
      });
  }

  searchLocation(location: string) {
    this.getCharactersByLocation(location);
  }

  searchSpecie(specie: string) {
    this.getCharactersBySpecies(specie);
  }
}
