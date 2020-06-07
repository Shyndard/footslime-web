import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/shared/entity/match';
import { MatchService } from 'src/app/shared/service/match.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-match-in-progress',
  templateUrl: './match-in-progress.component.html',
  styleUrls: ['./match-in-progress.component.scss']
})
export class MatchInProgressComponent implements OnInit {

  matchs: Match[];

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    interval(2000).subscribe(x => {
      this.loadMatchs();
    });
    this.loadMatchs();
  }

  private loadMatchs() {
    this.matchService.getInProgress().subscribe((response: Match[]) => {
      this.matchs = response;
    });
  }

}
