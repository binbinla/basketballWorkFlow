const team_basic_was = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612764,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612764, "2017", "00", "Chris McCullough", "1", "F", "6-9", "215", "FEB 05, 1995", 23.0, "2", "Syracuse", 1626191],
			[1610612764, "2017", "00", "John Wall", "2", "G", "6-4", "210", "SEP 06, 1990", 27.0, "7", "Kentucky", 202322],
			[1610612764, "2017", "00", "Bradley Beal", "3", "G", "6-5", "207", "JUN 28, 1993", 24.0, "5", "Florida", 203078],
			[1610612764, "2017", "00", "Ty Lawson", "4", "G", "5-11", "195", "NOV 03, 1987", 30.0, "8", "North Carolina", 201951],
			[1610612764, "2017", "00", "Markieff Morris", "5", "F", "6-10", "245", "SEP 02, 1989", 28.0, "6", "Kansas", 202693],
			[1610612764, "2017", "00", "Devin Robinson", "7", "F", "6-8", "200", "MAR 07, 1995", 23.0, "R", "Florida", 1628421],
			[1610612764, "2017", "00", "Tim Frazier", "8", "G", "6-1", "170", "NOV 01, 1990", 27.0, "3", null, 204025],
			[1610612764, "2017", "00", "Ramon Sessions", "9", "G", "6-3", "190", "APR 11, 1986", 32.0, "10", "Nevada", 201196],
			[1610612764, "2017", "00", "Kelly Oubre Jr.", "12", "F", "6-7", "205", "DEC 09, 1995", 22.0, "2", "Kansas", 1626162],
			[1610612764, "2017", "00", "Marcin Gortat", "13", "C", "6-11", "240", "FEB 17, 1984", 34.0, "10", "Lodz, Poland", 101162],
			[1610612764, "2017", "00", "Jason Smith", "14", "F-C", "7-0", "240", "MAR 02, 1986", 32.0, "9", "Colorado State", 201160],
			[1610612764, "2017", "00", "Jodie Meeks", "20", "G", "6-4", "210", "AUG 21, 1987", 30.0, "8", "Kentucky", 201975],
			[1610612764, "2017", "00", "Otto Porter Jr.", "22", "F", "6-8", "198", "JUN 03, 1993", 24.0, "4", "Georgetown", 203490],
			[1610612764, "2017", "00", "Ian Mahinmi", "28", "C", "6-11", "262", "NOV 05, 1986", 31.0, "9", "Rouen, France", 101133],
			[1610612764, "2017", "00", "Mike Scott", "30", "F", "6-8", "237", "JUL 16, 1988", 29.0, "5", "Virginia", 203118],
			[1610612764, "2017", "00", "Tomas Satoransky", "31", "G-F", "6-7", "210", "OCT 30, 1991", 26.0, "1", null, 203107]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612764, "2017", "BRO180185", "Scott", "Brooks", "Scott Brooks", "scott_brooks", 1.0, "Head Coach", "College - UC-Irvine", 3.0],
			[1610612764, "2017", "BRO234784", "Tony", "Brown", "Tony Brown", "tony_brown", 2.0, "Assistant Coach", "College - Arkansas", 244.0],
			[1610612764, "2017", "LOW276486", "Sidney", "Lowe", "Sidney Lowe", "sidney_lowe", 2.0, "Assistant Coach", "College - North Carolina State", 245.0],
			[1610612764, "2017", "TER140755", "Mike", "Terpstra", "Mike Terpstra", "mike_terpstra", 2.0, "Assistant Coach", "College - Northwest Nazarene", 246.0],
			[1610612764, "2017", "ISK177981", "Chad", "Iske", "Chad Iske", "chad_iske", 2.0, "Assistant Coach", "College - Kansas", 247.0],
			[1610612764, "2017", "TRA190931", "Maz", "Trakh", "Maz Trakh", "maz_trakh", 2.0, "Assistant Coach", "College - Southern Utah", 248.0],
			[1610612764, "2017", "ADK282573", "David", "Adkins", "David Adkins", "david_adkins", 2.0, "Assistant Coach", "College - Radford", 249.0]
		]
	}]
}

export default JSON.stringify(team_basic_was)