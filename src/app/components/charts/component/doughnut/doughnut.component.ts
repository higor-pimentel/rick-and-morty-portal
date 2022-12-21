import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent {
  @Input() chartData!: any[];
  @Input() labels!: any[];
  @Input() label!: string;
  @Input() backgroundColor!: string[];
  public chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  createChart() {
    this.chart = new Chart('myChart', {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this.labels,
        datasets: [
          {
            label: this.label,
            data: this.chartData,
            backgroundColor: this.backgroundColor,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
