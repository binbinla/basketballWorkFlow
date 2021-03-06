const team_basic_sac = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612758,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612758, "2017", "00", "Willie Cauley-Stein", "00", "C", "7-0", "240", "AUG 18, 1993", 24.0, "2", "Kentucky", 1626161],
			[1610612758, "2017", "00", "De'Aaron Fox", "5", "G", "6-3", "175", "DEC 20, 1997", 20.0, "R", "Kentucky", 1628368],
			[1610612758, "2017", "00", "Skal Labissiere", "7", "F-C", "6-11", "225", "MAR 18, 1996", 22.0, "1", "Kentucky", 1627746],
			[1610612758, "2017", "00", "Bogdan Bogdanovic", "8", "G", "6-6", "205", "AUG 18, 1992", 25.0, "R", null, 203992],
			[1610612758, "2017", "00", "Iman Shumpert", "9", "G", "6-5", "220", "JUN 26, 1990", 27.0, "6", "Georgia Tech", 202697],
			[1610612758, "2017", "00", "Frank Mason", "10", "G", "5-11", "190", "APR 03, 1994", 24.0, "R", "Kansas", 1628412],
			[1610612758, "2017", "00", "Vince Carter", "15", "G-F", "6-6", "220", "JAN 26, 1977", 41.0, "19", "North Carolina", 1713],
			[1610612758, "2017", "00", "Garrett Temple", "17", "F-G", "6-6", "195", "MAY 08, 1986", 31.0, "7", "Louisiana State", 202066],
			[1610612758, "2017", "00", "Harry Giles III", "20", "F-C", "6-10", "240", "APR 22, 1998", 20.0, "R", "Duke", 1628385],
			[1610612758, "2017", "00", "Bruno Caboclo", "22", "F", "6-9", "205", "SEP 21, 1995", 22.0, "3", null, 203998],
			[1610612758, "2017", "00", "Buddy Hield", "24", "G", "6-4", "214", "DEC 17, 1993", 24.0, "1", "Oklahoma", 1627741],
			[1610612758, "2017", "00", "Justin Jackson", "25", "F", "6-8", "210", "MAR 28, 1995", 23.0, "R", "North Carolina", 1628382],
			[1610612758, "2017", "00", "JaKarr Sampson", "29", "F", "6-9", "207", "MAR 20, 1993", 25.0, "2", "St. John's (NY)", 203960],
			[1610612758, "2017", "00", "Nigel Hayes", "40", "F", "6-7", "254", "DEC 16, 1994", 23.0, "R", "Wisconsin", 1628502],
			[1610612758, "2017", "00", "Kosta Koufos", "41", "C", "7-0", "265", "FEB 24, 1989", 29.0, "9", "Ohio State", 201585],
			[1610612758, "2017", "00", "Jack Cooley", "45", "C", "6-10", "274", "APR 12, 1991", 27.0, "1", "Notre Dame", 204022],
			[1610612758, "2017", "00", "Zach Randolph", "50", "F", "6-9", "250", "JUL 16, 1981", 36.0, "16", "Michigan State", 2216]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612758, "2017", "JOE550110", "David", "Joerger", "David Joerger", "david_joerger", 1.0, "Head Coach", "College - Moorhead State", 12.0],
			[1610612758, "2017", "TUR271611", "Elston", "Turner", "Elston Turner", "elston_turner", 2.0, "Assistant Coach", "College - Mississippi", 209.0],
			[1610612758, "2017", "THO742763", "Bob", "Thornton", "Bob Thornton", "bob_thornton", 2.0, "Assistant Coach", "College - California-Irvine", 210.0],
			[1610612758, "2017", "GAT277691", "Bryan", "Gates", "Bryan Gates", "bryan_gates", 2.0, "Assistant Coach", "College - Boise State", 211.0],
			[1610612758, "2017", "TIC355963", "Duane", "Ticknor", "Duane Ticknor", "duane_ticknor", 2.0, "Assistant Coach", "College - South Dakota", 212.0],
			[1610612758, "2017", "MAR137734", "Jason", "March", "Jason March", "jason_march", 2.0, "Assistant Coach", "College - Florida State", 213.0],
			[1610612758, "2017", "YOU647685", "Pete", "Youngman", "Pete Youngman", "pete_youngman", 3.0, "Trainer", "College - Ithaca", 217.0],
			[1610612758, "2017", "ROM481994", "Manny", "Romero", "Manny Romero", "manny_romero", 3.0, "Trainer", "College - Loyola Marymount", 218.0],
			[1610612758, "2017", "SCH098835", "Chip", "Schaefer", "Chip Schaefer", "chip_schaefer", 10.0, "Director of Athletic Development", "College - Utah", 216.0],
			[1610612758, "2017", "LEW518424", "Larry", "Lewis", "Larry Lewis", "larry_lewis", 12.0, "Assistant Coach for Player Development", "College - Morehouse", 214.0],
			[1610612758, "2017", "RIC060339", "Phil", "Ricci", "Phil Ricci", "phil_ricci", 12.0, "Assistant Coach for Player Development", "College - Oregon State", 215.0]
		]
	}]
}

export default JSON.stringify(team_basic_sac)