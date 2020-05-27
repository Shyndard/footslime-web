import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/service/team.service';
import { Team } from 'src/app/shared/entity/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  private loadTeams() {
    this.teamService.getAll().subscribe((response: Team[]) => {
      this.teams = response;
    });
  }
}
