import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Chart,
  ChartTypeRegistry,
  DoughnutController,
  registerables,
} from 'chart.js';
import {
  COUNT_CHARACTERS_BY_STATUS,
  COUNT_CHARACTERS_BY_STATUS_SPECIE,
  GET_ALL_LOCATIONS,
  GET_LOCATION_RESIDENTS,
} from 'src/app/graphql/graphql.queries';
import { CharacterResume } from '../../characters/model/character';
import { Location } from '../../locations/model/location.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loading = false;

  chart: any;
  specieChart: any;
  dimensionChart: any;

  chartBackgroundColor = ['green', 'red', 'blue'];
  chartLabels = ['Alive', 'Dead', 'Unknown'];

  species: any[] = [];
  locations: any[] = [];
  dimensions!: Location[];

  constructor(private apollo: Apollo) {
    Chart.register(DoughnutController, ...registerables);
  }

  ngOnInit(): void {
    this.loading = true;
    this.getCharactersByStatus();
    this.getCharactersBySpecies('');
    //this.getDimensions();
  }

  createChart(
    type: string,
    itemChart: string,
    label: string,
    labels: string[],
    backgroundColor: string[],
    data: any[]
  ) {
    return new Chart(itemChart, {
      type: type as keyof ChartTypeRegistry, //this denotes tha type of chart
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
        const chartData = [
          data.aliveCharacters.info.count,
          data.deadCharacters.info.count,
          data.unknownCharacters.info.count,
        ];
        this.chart = this.createChart(
          'doughnut',
          'myChartLocation',
          'Characters',
          this.chartLabels,
          this.chartBackgroundColor,
          chartData
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
            'doughnut',
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

  getDimensions() {
    this.apollo
      .watchQuery({
        query: GET_ALL_LOCATIONS,
        variables: {
          page: 1,
          filter: { type: 'dimension' },
        },
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.dimensions = data.locations.results;
        console.log(this.dimensions);
      });
  }

  selectedDimension({ value }: any) {
    console.log(value);
  }
}
