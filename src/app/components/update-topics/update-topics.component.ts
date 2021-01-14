import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topics.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-topics',
  templateUrl: './update-topics.component.html',
  styleUrls: ['./update-topics.component.css']
})
export class UpdateTopicsComponent implements OnInit {

  constructor(private topicService: TopicService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTopics(this.route.snapshot.paramMap.get('id')); //take a snapshot from fields and enabe editing
  }
  currentTopic:any;;
  message = '';
  getTopics(id: any): void {
    this.topicService.get(id)
      .subscribe(
        data => {
          this.currentTopic = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTopic(): void {
    this.topicService.update(this.currentTopic.id, this.currentTopic)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'Updated Successfully!';
      },
      error => {
        console.log(error);
      });
  }
  deleteTopic(): void {
    this.topicService.delete(this.currentTopic.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/topics']);
        },
        error => {
          console.log(error);
        });
  }


}
