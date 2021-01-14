import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topics.service';

export interface PeriodicElement {
  id: number;
  name: string;
  decsription: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: '', decsription: ''},
 
];

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {

  topics: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  displayedColumns: string[] = [ 'name', 'description', 'action'];
  dataSource :PeriodicElement[]=[] ;
  constructor(private topicService: TopicService) { }

  
  ngOnInit(): void {
    this.retrieveTutorials();
    console.log(this.dataSource)
  }

  retrieveTutorials(): void {
    this.topicService.getAll()
      .subscribe(
        data => {
          console.log(data);
          this.topics = data;
          this.dataSource=data;
          console.log(this.topics);
          
        },
        error => {
          console.log(error);
        });
  }

}

