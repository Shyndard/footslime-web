import { User } from './user';

export interface Match {
  id: number;
  startAt: Date;
  endAt: Date;
  redTeamId: String;
  blueTeamId: String;
  blueTeamName: String;
  redTeamName: String;
  redTeamPoint: number;
  blueTeamPoint: number;
  playersRedTeam: User[];
  playersBlueTeam: User[];
}
