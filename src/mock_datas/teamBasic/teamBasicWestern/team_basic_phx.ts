const team_basic_phx = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612756,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612756, "2017", "00", "Marquese Chriss", "0", "F", "6-10", "240", "JUL 02, 1997", 20.0, "1", "Washington", 1627737],
			[1610612756, "2017", "00", "Devin Booker", "1", "G", "6-6", "210", "OCT 30, 1996", 21.0, "2", "Kentucky", 1626164],
			[1610612756, "2017", "00", "Elfrid Payton", "2", "G", "6-4", "185", "FEB 22, 1994", 24.0, "3", "Louisiana-Lafayette", 203901],
			[1610612756, "2017", "00", "Jared Dudley", "3", "F", "6-7", "240", "JUL 10, 1985", 32.0, "10", "Boston College", 201162],
			[1610612756, "2017", "00", "Tyson Chandler", "4", "C", "7-1", "240", "OCT 02, 1982", 35.0, "16", "Dominquez H.S", 2199],
			[1610612756, "2017", "00", "Tyler Ulis", "8", "G", "5-10", "160", "JAN 05, 1996", 22.0, "1", "Kentucky", 1627755],
			[1610612756, "2017", "00", "Shaquille Harrison", "10", "G", "6-4", "190", "OCT 06, 1993", 24.0, "R", "Tulsa", 1627885],
			[1610612756, "2017", "00", "Brandon Knight", "11", "G", "6-3", "195", "DEC 02, 1991", 26.0, "6", "Kentucky", 202688],
			[1610612756, "2017", "00", "TJ Warren", "12", "F", "6-8", "215", "SEP 05, 1993", 24.0, "3", "North Carolina State", 203933],
			[1610612756, "2017", "00", "Alan Williams", "15", "F-C", "6-8", "265", "JAN 28, 1993", 25.0, "2", "California-Santa Barbara", 1626210],
			[1610612756, "2017", "00", "Josh Jackson", "20", "G-F", "6-8", "200", "FEB 10, 1997", 21.0, "R", "Kansas", 1628367],
			[1610612756, "2017", "00", "Alex Len", "21", "C", "7-1", "250", "JUN 16, 1993", 24.0, "4", "Maryland", 203458],
			[1610612756, "2017", "00", "Danuel House", "23", "F-G", "6-7", "220", "JUN 07, 1993", 24.0, "1", "Texas A&M", 1627863],
			[1610612756, "2017", "00", "Alec Peters", "25", "F", "6-9", "235", "APR 13, 1995", 23.0, "R", "Valparaiso", 1628409],
			[1610612756, "2017", "00", "Troy Daniels", "30", "G", "6-4", "205", "JUL 15, 1991", 26.0, "4", "Virginia Commonwealth", 203584],
			[1610612756, "2017", "00", "Davon Reed", "32", "G", "6-6", "210", "JUN 11, 1995", 22.0, "R", "Miami (FL)", 1628432],
			[1610612756, "2017", "00", "Dragan Bender", "35", "F", "7-1", "225", "NOV 17, 1997", 20.0, "1", null, 1627733]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612756, "2017", "TRI032571", "Jay", "Triano", "Jay Triano", "jay_triano", 1.0, "Head Coach", "College - Simon Fraser", 25.0],
			[1610612756, "2017", "COR165741", "Tyrone", "Corbin", "Tyrone Corbin", "tyrone_corbin", 2.0, "Assistant Coach", "College - DePaul", 194.0],
			[1610612756, "2017", "GAR409601", "Marlon", "Garnett", "Marlon Garnett", "marlon_garnett", 2.0, "Assistant Coach", "College - Santa Clara", 195.0],
			[1610612756, "2017", "NEL196395", "Aaron", "Nelson", "Aaron Nelson", "aaron_nelson", 3.0, "Trainer", "College - Iowa State", 199.0],
			[1610612756, "2017", "ELL710589", "Ty", "Ellis", "Ty Ellis", "ty_ellis", 12.0, "Assistant Coach for Player Development", "College - Southern Nazarene", 196.0],
			[1610612756, "2017", "DUN192255", "Scott", "Duncan", "Scott Duncan", "scott_duncan", 12.0, "Assistant Coach for Player Development", "College - Wooster", 197.0],
			[1610612756, "2017", "BUR049833", "Bret", "Burchard", "Bret Burchard", "bret_burchard", 12.0, "Assistant Coach for Player Development", "College - Taylor", 198.0]
		]
	}]
}

export default JSON.stringify(team_basic_phx)