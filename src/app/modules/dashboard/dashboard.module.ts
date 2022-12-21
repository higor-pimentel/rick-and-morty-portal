import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './components/dashboard.component';
import { DoughnutModule } from 'src/app/components/charts/component/doughnut/doughnut.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, DoughnutModule],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
