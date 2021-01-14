import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsListComponent } from './components/topics-list/topics-list.component';
import { AddTopicsComponent } from './components/add-topics/add-topics.component';
import { UpdateTopicsComponent } from './components/update-topics/update-topics.component';

const routes: Routes = [
  { path: '', redirectTo: 'topics', pathMatch: 'full' },
  { path: 'topics', component: TopicsListComponent },
  { path: 'add', component: AddTopicsComponent },
  { path: 'topics/:id', component: UpdateTopicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
