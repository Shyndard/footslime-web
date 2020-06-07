import { Component, OnInit, OnDestroy } from '@angular/core';
import { Match } from 'src/app/shared/entity/match';
import { MatchService } from 'src/app/shared/service/match.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-match-in-progress',
  templateUrl: './match-in-progress.component.html',
  styleUrls: ['./match-in-progress.component.scss']
})
export class MatchInProgressComponent implements OnInit, OnDestroy {

  matchs: Match[];
  private actualization;

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.actualization = interval(2000).subscribe(() => {
      this.loadMatchs();
    });
    this.loadMatchs();
  }

  ngOnDestroy(): void {
    this.actualization.unsubscribe()
  }


  private loadMatchs() {
    this.matchService.getInProgress().subscribe((response: Match[]) => {
      this.matchs = response;
    });
  }

}
