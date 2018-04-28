const team_basic_mem = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612763,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612763, "2017", "00", "JaMychal Green", "0", "F", "6-9", "227", "JUN 21, 1990", 27.0, "3", "Alabama", 203210],
			[1610612763, "2017", "00", "Jarell Martin", "1", "F", "6-10", "239", "MAY 24, 1994", 23.0, "2", "Louisiana State", 1626185],
			[1610612763, "2017", "00", "Kobi Simmons", "2", "G", "6-4", "170", "JUL 04, 1997", 20.0, "R", "Arizona", 1628424],
			[1610612763, "2017", "00", "Briante Weber", "3", "G", "6-2", "165", "DEC 29, 1992", 25.0, "2", "Virginia Commonwealth", 1627362],
			[1610612763, "2017", "00", "Myke Henry", "4", "F", "6-6", "210", "DEC 23, 1992", 25.0, "R", "DePaul", 1627988],
			[1610612763, "2017", "00", "Andrew Harrison", "5", "G", "6-6", "213", "OCT 28, 1994", 23.0, "1", "Kentucky", 1626150],
			[1610612763, "2017", "00", "Mario Chalmers", "6", "G", "6-2", "190", "MAY 19, 1986", 31.0, "8", "Kansas", 201596],
			[1610612763, "2017", "00", "Wayne Selden", "7", "G-F", "6-5", "230", "SEP 30, 1994", 23.0, "1", "Kansas", 1627782],
			[1610612763, "2017", "00", "MarShon Brooks", "8", "G-F", "6-5", "200", "JAN 26, 1989", 29.0, "3", "Providence", 202705],
			[1610612763, "2017", "00", "Ivan Rabb", "10", "F", "6-10", "220", "FEB 04, 1997", 21.0, "R", "California", 1628397],
			[1610612763, "2017", "00", "Mike Conley", "11", "G", "6-1", "175", "OCT 11, 1987", 30.0, "10", "Ohio State", 201144],
			[1610612763, "2017", "00", "Tyreke Evans", "12", "G-F", "6-6", "220", "SEP 19, 1989", 28.0, "8", "Memphis", 201936],
			[1610612763, "2017", "00", "Omari Johnson", "14", "F", "6-9", "220", "MAY 26, 1989", 28.0, "R", "Oregon State", 204179],
			[1610612763, "2017", "00", "Marquis Teague", "20", "G", "6-2", "189", "FEB 28, 1993", 25.0, "2", "Kentucky", 203104],
			[1610612763, "2017", "00", "Deyonta Davis", "21", "C-F", "6-11", "237", "DEC 02, 1996", 21.0, "1", "Michigan State", 1627738],
			[1610612763, "2017", "00", "Ben McLemore", "23", "G", "6-5", "195", "FEB 11, 1993", 25.0, "4", "Kansas", 203463],
			[1610612763, "2017", "00", "Dillon Brooks", "24", "F-G", "6-6", "220", "JAN 22, 1996", 22.0, "R", "Oregon", 1628415],
			[1610612763, "2017", "00", "Chandler Parsons", "25", "F", "6-10", "230", "OCT 25, 1988", 29.0, "6", "Florida", 202718],
			[1610612763, "2017", "00", "Marc Gasol", "33", "C", "7-1", "255", "JAN 29, 1985", 33.0, "9", "Barcelona, Spain", 201188]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612763, "2017", "BIC363464", "J.B.", "Bickerstaff", "J.B. Bickerstaff", "jb_bickerstaff", 1.0, "Head Coach", "College - Minnesota", 2.0],
			[1610612763, "2017", "SMA279261", "Keith", "Smart", "Keith Smart", "keith_smart", 2.0, "Assistant Coach", "College - Indiana", 141.0],
			[1610612763, "2017", "BEN181850", "Bob", "Bender", "Bob Bender", "bob_bender", 2.0, "Assistant Coach", "College - Duke", 142.0],
			[1610612763, "2017", "VAN530550", "Nick", "Van Exel", "Nick Van Exel", "nick_van_exel", 2.0, "Assistant Coach", "College - Cincinnati", 143.0],
			[1610612763, "2017", "MAZ030761", "Adam", "Mazarei", "Adam Mazarei", "adam_mazarei", 2.0, "Assistant Coach", "College - Redlands", 144.0]
		]
	}]
}

export default JSON.stringify(team_basic_mem)