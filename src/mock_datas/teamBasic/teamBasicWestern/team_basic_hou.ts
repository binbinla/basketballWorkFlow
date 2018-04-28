const team_basic_hou = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612745,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612745, "2017", "00", "Trevor Ariza", "1", "F-G", "6-8", "215", "JUN 30, 1985", 32.0, "13", "UCLA", 2772],
			[1610612745, "2017", "00", "RJ Hunter", "2", "G", "6-5", "185", "OCT 24, 1993", 24.0, "2", "Georgia State", 1626154],
			[1610612745, "2017", "00", "Chris Paul", "3", "G", "6-0", "175", "MAY 06, 1985", 32.0, "12", "Wake Forest", 101108],
			[1610612745, "2017", "00", "PJ Tucker", "4", "F", "6-6", "245", "MAY 05, 1985", 32.0, "6", "Texas", 200782],
			[1610612745, "2017", "00", "Aaron Jackson", "5", "G", "6-3", "183", "MAY 06, 1986", 31.0, "R", null, 1628935],
			[1610612745, "2017", "00", "Joe Johnson", "7", "G-F", "6-7", "240", "JUN 29, 1981", 36.0, "16", "Arkansas", 2207],
			[1610612745, "2017", "00", "Zhou Qi", "9", "F-C", "7-1", "210", "JAN 16, 1996", 22.0, "R", null, 1627753],
			[1610612745, "2017", "00", "Eric Gordon", "10", "G", "6-4", "215", "DEC 25, 1988", 29.0, "9", "Indiana", 201569],
			[1610612745, "2017", "00", "Luc Mbah a Moute", "12", "F", "6-8", "230", "SEP 09, 1986", 31.0, "9", "UCLA", 201601],
			[1610612745, "2017", "00", "James Harden", "13", "G", "6-5", "220", "AUG 26, 1989", 28.0, "8", "Arizona State", 201935],
			[1610612745, "2017", "00", "Gerald Green", "14", "G-F", "6-7", "205", "JAN 26, 1986", 32.0, "10", "Gulf Shores Aca. (TX)", 101123],
			[1610612745, "2017", "00", "Clint Capela", "15", "C", "6-10", "240", "MAY 18, 1994", 23.0, "3", null, 203991],
			[1610612745, "2017", "00", "Chinanu Onuaku", "21", "C", "6-10", "245", "NOV 01, 1996", 21.0, "1", "Louisville", 1627778],
			[1610612745, "2017", "00", "Markel Brown", "26", "G", "6-3", "190", "JAN 29, 1992", 26.0, "2", "Oklahoma State", 203900],
			[1610612745, "2017", "00", "Tarik Black", "28", "F-C", "6-9", "250", "NOV 22, 1991", 26.0, "3", "Kansas", 204028],
			[1610612745, "2017", "00", "Ryan Anderson", "33", "F", "6-10", "240", "MAY 06, 1988", 29.0, "9", "California", 201583],
			[1610612745, "2017", "00", "Nene", "42", "C-F", "6-11", "250", "SEP 13, 1982", 35.0, "15", "Sao Carlos, Brazil", 2403]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612745, "2017", "DAN664089", "Mike", "D'Antoni", "Mike D'Antoni", "mike_dantoni", 1.0, "Head Coach", "College - Marshall", 8.0],
			[1610612745, "2017", "ROG426165", "Roy", "Rogers", "Roy Rogers", "roy_rogers", 2.0, "Assistant Coach", "College - Alabama", 106.0],
			[1610612745, "2017", "GUN196819", "Brett", "Gunning", "Brett Gunning", "brett_gunning", 2.0, "Assistant Coach", "College - Nevada-Las Vegas", 107.0],
			[1610612745, "2017", "BZD177981", "Jeff", "Bzdelik", "Jeff Bzdelik", "jeff_bzdelik", 9.0, "Associate Head Coach", "College - Illinois-Chicago", 105.0],
			[1610612745, "2017", "LUC413040", "John", "Lucas", "John Lucas", "john_lucas", 12.0, "Assistant Coach for Player Development", "College - Maryland", 108.0],
			[1610612745, "2017", "ROL027725", "Irving", "Roland", "Irving Roland", "irving_roland", 12.0, "Assistant Coach for Player Development", "College - Southwestern Oklahoma State", 109.0],
			[1610612745, "2017", "JON375806", "Keith", "Jones", "Keith Jones", "keith_jones", 14.0, "Assistant Coach/Player Performance", "College - Arkansas", 110.0],
			[1610612745, "2017", "BIL164480", "Jason", "Biles", "Jason Biles", "jason_biles", 14.0, "Assistant Coach/Player Performance", "College - North Florida", 111.0],
			[1610612745, "2017", "GIL265611", "Javair", "Gillett", "Javair Gillett", "javair_gillett", 14.0, "Assistant Coach/Player Performance", "College - Notre Dame", 112.0],
			[1610612745, "2017", "WIL527932", "Richard", "Williams", "Richard Williams", "richard_williams", 14.0, "Assistant Coach/Player Performance", "College - Tabor", 113.0]
		]
	}]
}

export default JSON.stringify(team_basic_hou)