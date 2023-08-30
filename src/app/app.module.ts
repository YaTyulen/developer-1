import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IncomingComponent } from './incoming/incoming.component';
import { TasksComponent } from './tasks/tasks.component';
import { ActivityComponent } from './activity/activity.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'incoming', component: IncomingComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'team', component: TeamComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncomingComponent,
    TasksComponent,
    ActivityComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
