import { Component, OnInit, OnDestroy } from '@angular/core';
import { Match } from 'src/app/shared/entity/match';
import { MatchService } from 'src/app/shared/service/match.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss']
})
export class MatchsComponent implements OnInit, OnDestroy {

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
    this.matchService.getAll().subscribe((response: Match[]) => {
      this.matchs = response;
    });
  }

  loadClass(match: Match): String {
    return match.startAt != null && match.endAt == null ? "live" : '';
  }

}
