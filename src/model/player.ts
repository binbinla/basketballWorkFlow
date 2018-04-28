
export enum PlayerPosition {
  'SF' = '小前锋',
  'PF' = '大前锋',
  'PG' = '控球后卫',
  'SG' = '得分后卫',
  'C' = '中锋'
}

export interface Player {
  // first_name: string,
  // jersey_number: string,
  last_name: string,
  starting_position: string,
  points: string,
  assists: string,
  rebounds_offensive: string,
  rebounds_defensive: string,
  field_goals_made: string,
  field_goals_attempted: string,
  blocks: string,
  steals: string,
  three_pointers_made: string,
  three_pointers_attempted: string,
  free_throws_made: string,
  free_throws_attempted: string,
  turnovers: string,
  fouls: string,
  plus_minus: string,
  minutes: string,
}

export interface TeamPlayer {
  id: string,
  name: string,
  gp: number,
  pts: number,
  reb: number,
  ast: number,
  min: number
}