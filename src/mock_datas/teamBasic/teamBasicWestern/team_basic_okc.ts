const team_basic_okc = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612760,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612760, "2017", "00", "Russell Westbrook", "0", "G", "6-3", "200", "NOV 12, 1988", 29.0, "9", "UCLA", 201566],
			[1610612760, "2017", "00", "Raymond Felton", "2", "G", "6-1", "205", "JUN 26, 1984", 33.0, "12", "North Carolina", 101109],
			[1610612760, "2017", "00", "Corey Brewer", "3", "G-F", "6-9", "186", "MAR 05, 1986", 32.0, "10", "Florida", 201147],
			[1610612760, "2017", "00", "Nick Collison", "4", "F", "6-10", "255", "OCT 26, 1980", 37.0, "13", "Kansas", 2555],
			[1610612760, "2017", "00", "Carmelo Anthony", "7", "F", "6-8", "240", "MAY 29, 1984", 33.0, "14", "Syracuse", 2546],
			[1610612760, "2017", "00", "Alex Abrines", "8", "G", "6-6", "190", "AUG 01, 1993", 24.0, "1", null, 203518],
			[1610612760, "2017", "00", "Jerami Grant", "9", "F", "6-9", "220", "MAR 12, 1994", 24.0, "3", "Syracuse", 203924],
			[1610612760, "2017", "00", "Steven Adams", "12", "C", "7-0", "255", "JUL 20, 1993", 24.0, "4", "Pittsburgh", 203500],
			[1610612760, "2017", "00", "Paul George", "13", "F", "6-9", "220", "MAY 02, 1990", 27.0, "7", "Fresno State", 202331],
			[1610612760, "2017", "00", "Kyle Singler", "15", "F", "6-8", "228", "MAY 04, 1988", 29.0, "5", "Duke", 202713],
			[1610612760, "2017", "00", "Andre Roberson", "21", "G", "6-7", "210", "DEC 04, 1991", 26.0, "4", "Colorado", 203460],
			[1610612760, "2017", "00", "Terrance Ferguson", "23", "G", "6-7", "184", "MAY 17, 1998", 19.0, "R", null, 1628390],
			[1610612760, "2017", "00", "Daniel Hamilton", "25", "G", "6-7", "195", "AUG 08, 1995", 22.0, "R", "Connecticut", 1627772],
			[1610612760, "2017", "00", "Josh Huestis", "34", "G", "6-7", "230", "DEC 19, 1991", 26.0, "2", "Stanford", 203962],
			[1610612760, "2017", "00", "PJ Dozier", "35", "G", "6-6", "205", "OCT 25, 1996", 21.0, "R", "South Carolina", 1628408],
			[1610612760, "2017", "00", "Dakari Johnson", "44", "C", "7-0", "255", "SEP 22, 1995", 22.0, "R", "Kentucky", 1626177],
			[1610612760, "2017", "00", "Patrick Patterson", "54", "F", "6-9", "230", "MAR 14, 1989", 29.0, "7", "Kentucky", 202335]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612760, "2017", "DON643464", "Billy", "Donovan", "Billy Donovan", "billy_donovan", 1.0, "Head Coach", "College - Providence", 9.0],
			[1610612760, "2017", "GRI117805", "Adrian", "Griffin", "Adrian Griffin", "adrian_griffin", 2.0, "Assistant Coach", "College - Seton Hall", 173.0],
			[1610612760, "2017", "CHE276486", "Maurice", "Cheeks", "Maurice Cheeks", "maurice_cheeks", 2.0, "Assistant Coach", "College - West Texas State", 174.0],
			[1610612760, "2017", "BRY414915", "Mark", "Bryant", "Mark Bryant", "mark_bryant", 2.0, "Assistant Coach", "College - Seton Hall", 175.0],
			[1610612760, "2017", "RAJ059326", "Darko", "Rajakovic", "Darko Rajakovic", "darko_rajakovic", 2.0, "Assistant Coach", null, 176.0],
			[1610612760, "2017", "BHA682265", "Vin", "Bhavnani", "Vin Bhavnani", "vin_bhavnani", 2.0, "Assistant Coach", "College - USC", 177.0],
			[1610612760, "2017", "IVE758131", "Royal", "Ivey", "Royal Ivey", "royal_ivey", 2.0, "Assistant Coach", "College - Texas", 178.0],
			[1610612760, "2017", "SHA564520", "Joe", "Sharpe", "Joe Sharpe", "joe_sharpe", 3.0, "Trainer", "College - Old Dominion", 179.0]
		]
	}]
}

export default JSON.stringify(team_basic_okc)