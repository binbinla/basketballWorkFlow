const team_basic_mil = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612749,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612749, "2017", "00", "Xavier Munford", "0", "G", "6-4", "173", "JUN 01, 1992", 25.0, "1", "Rhode Island", 204098],
			[1610612749, "2017", "00", "Jason Terry", "3", "G", "6-2", "185", "SEP 15, 1977", 40.0, "18", "Arizona", 1891],
			[1610612749, "2017", "00", "D.J. Wilson", "5", "F", "6-10", "236", "FEB 19, 1996", 22.0, "R", "Michigan", 1628391],
			[1610612749, "2017", "00", "Eric Bledsoe", "6", "G", "6-1", "205", "DEC 09, 1989", 28.0, "7", "Kentucky", 202339],
			[1610612749, "2017", "00", "Thon Maker", "7", "C-F", "7-1", "223", "FEB 25, 1997", 21.0, "1", null, 1627748],
			[1610612749, "2017", "00", "Matthew Dellavedova", "8", "G", "6-4", "198", "SEP 08, 1990", 27.0, "4", "Saint Mary's (CA)", 203521],
			[1610612749, "2017", "00", "Brandon Jennings", "11", "G", "6-1", "170", "SEP 23, 1989", 28.0, "8", "Oak Hill Academy (VA)", 201943],
			[1610612749, "2017", "00", "Jabari Parker", "12", "F", "6-8", "250", "MAR 15, 1995", 23.0, "3", "Duke", 203953],
			[1610612749, "2017", "00", "Malcolm Brogdon", "13", "G", "6-5", "215", "DEC 11, 1992", 25.0, "1", "Virginia", 1627763],
			[1610612749, "2017", "00", "Shabazz Muhammad", "15", "G-F", "6-6", "221", "NOV 13, 1992", 25.0, "4", "UCLA", 203498],
			[1610612749, "2017", "00", "Tony Snell", "21", "G", "6-7", "221", "NOV 10, 1991", 26.0, "4", "New Mexico", 203503],
			[1610612749, "2017", "00", "Khris Middleton", "22", "F", "6-8", "234", "AUG 12, 1991", 26.0, "5", "Texas A&M", 203114],
			[1610612749, "2017", "00", "Sterling Brown", "23", "G", "6-6", "230", "FEB 10, 1995", 23.0, "R", "Southern Methodist", 1628425],
			[1610612749, "2017", "00", "John Henson", "31", "C", "6-11", "229", "DEC 28, 1990", 27.0, "5", "North Carolina", 203089],
			[1610612749, "2017", "00", "Giannis Antetokounmpo", "34", "F", "6-11", "222", "DEC 06, 1994", 23.0, "4", "Greece", 203507],
			[1610612749, "2017", "00", "Marshall Plumlee", "40", "C", "7-0", "250", "JUL 14, 1992", 25.0, "1", "Duke", 1627850],
			[1610612749, "2017", "00", "Tyler Zeller", "44", "C", "7-0", "250", "JAN 17, 1990", 28.0, "5", "North Carolina", 203092]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612749, "2017", "PRU454704", "Joe", "Prunty", "Joe Prunty", "joe_prunty", 1.0, "Head Coach", "College - Cal Poly San Luis Obispo", 18.0],
			[1610612749, "2017", "FOS241877", "Greg", "Foster", "Greg Foster", "greg_foster", 2.0, "Assistant Coach", "College - Texas-El Paso", 150.0],
			[1610612749, "2017", "SWE167856", "Sean", "Sweeney", "Sean Sweeney", "sean_sweeney", 2.0, "Assistant Coach", "College - St. Thomas", 151.0],
			[1610612749, "2017", "AUG414916", "Stacey", "Augmon", "Stacey Augmon", "stacey_augmon", 2.0, "Assistant Coach", "College - Nevada-Las Vegas", 152.0],
			[1610612749, "2017", "FAU676466", "Scott", "Faust", "Scott Faust", "scott_faust", 3.0, "Trainer", "College - Alabama-Huntsville", 153.0],
			[1610612749, "2017", "HOB604524", "Suki", "Hobson", "Suki Hobson", "suki_hobson", 5.0, "Strength and Conditioning Coach", null, 154.0]
		]
	}]
}

export default JSON.stringify(team_basic_mil)