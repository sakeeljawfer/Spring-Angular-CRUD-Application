import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topics.service';
@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css']
})
export class AddTopicsComponent implements OnInit {
  
  constructor(private topicService: TopicService) { }

  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;


  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      name: this.tutorial.title,
      description: this.tutorial.description
    };
    this.topicService.create(data)
      .subscribe(
        response => {
          console.log("add",response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
      
        }
      

}

