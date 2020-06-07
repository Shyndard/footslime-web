import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/shared/entity/match';
import { MatchService } from 'src/app/shared/service/match.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.component.html',
  styleUrls: ['./matchs.component.scss']
})
export class MatchsComponent implements OnInit {

  matchs: Match[];

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    interval(2000).subscribe(x => {
      this.loadMatchs();
    });
    this.loadMatchs();
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
