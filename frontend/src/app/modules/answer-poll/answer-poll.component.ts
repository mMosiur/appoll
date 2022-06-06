import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poll } from 'src/app/shared/models/poll';
import { PollService } from 'src/app/shared/services/poll.service';
import PollAnswer from './models/poll-answer';

@Component({
  selector: 'app-answer-poll',
  templateUrl: './answer-poll.component.html',
  styleUrls: ['./answer-poll.component.scss']
})
export class AnswerPollComponent implements OnInit {

  title = 'apPOLLo';
  poll?: Poll;
  answers: string[] = [];

  isPollFilledIn(): boolean {
    return this.answers.every(value => !!value);
  }

  getPollAnswers(): PollAnswer[] {
    if (!this.poll) {
      throw new Error('Poll is not loaded yet');
    }
    return this.poll.questions
      .map((question, i) => {
        const answer = this.answers[i];
        return {
          questionId: question.id,
          answerJson: answer
        }
      });
  }

  constructor(
    private pollService: PollService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pollService.getPollById(1).subscribe(data => {
      this.poll = data;
      this.answers = this.poll!.questions.map(_ => '');
    });
    let id = this.route.snapshot.paramMap.get('id');
    this.title += id;
  }

  onAnswerChange(index: number, value: string) {
    this.route
    this.answers[index] = value;
  }

  submit() {
    if (!this.poll) {
      throw new Error('Poll is not loaded yet');
    }
    this.pollService.sendPollAnswers(this.poll.id, this.getPollAnswers()).subscribe({
      next: (data) => {console.log('success')},
      error: () => {console.error('error')}
    });
  }

}