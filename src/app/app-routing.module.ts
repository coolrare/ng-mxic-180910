import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fallbackRoute } from './fallbackRoute';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { FlotComponent } from './charts/flot/flot.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'charts',
    children: [
      { path: '', redirectTo: 'flot', pathMatch: 'full' },
      { path: 'flot', component: FlotComponent },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', component: TablesComponent },
  fallbackRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
