const team_basic_lal = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612747,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612747, "2017", "00", "Kyle Kuzma", "0", "F", "6-9", "220", "JUL 24, 1995", 22.0, "R", "Utah", 1628398],
			[1610612747, "2017", "00", "Kentavious Caldwell-Pope", "1", "G", "6-5", "205", "FEB 18, 1993", 25.0, "4", "Georgia", 203484],
			[1610612747, "2017", "00", "Lonzo Ball", "2", "G", "6-6", "190", "OCT 27, 1997", 20.0, "R", "California-Los Angeles", 1628366],
			[1610612747, "2017", "00", "Isaiah Thomas", "3", "G", "5-9", "185", "FEB 07, 1989", 29.0, "6", "Washington", 202738],
			[1610612747, "2017", "00", "Alex Caruso", "4", "G", "6-5", "186", "FEB 28, 1994", 24.0, "R", "Texas A&M", 1627936],
			[1610612747, "2017", "00", "Josh Hart", "5", "G", "6-5", "215", "MAR 06, 1995", 23.0, "R", "Villanova", 1628404],
			[1610612747, "2017", "00", "Luol Deng", "9", "F", "6-9", "220", "APR 16, 1985", 33.0, "13", "Duke", 2736],
			[1610612747, "2017", "00", "Tyler Ennis", "10", "G", "6-3", "194", "AUG 24, 1994", 23.0, "3", "Syracuse", 203898],
			[1610612747, "2017", "00", "Brook Lopez", "11", "C", "7-0", "268", "APR 01, 1988", 30.0, "9", "Stanford", 201572],
			[1610612747, "2017", "00", "Channing Frye", "12", "F", "6-11", "255", "MAY 17, 1983", 34.0, "11", "Arizona", 101112],
			[1610612747, "2017", "00", "Brandon Ingram", "14", "F-G", "6-9", "190", "SEP 02, 1997", 20.0, "1", "Duke", 1627742],
			[1610612747, "2017", "00", "Andre Ingram", "20", "G", "6-3", "190", "NOV 19, 1985", 32.0, "R", "American", 201281],
			[1610612747, "2017", "00", "Travis Wear", "21", "F", "6-10", "225", "SEP 21, 1990", 27.0, "1", "UCLA", 204037],
			[1610612747, "2017", "00", "Gary Payton II", "23", "G", "6-3", "190", "DEC 01, 1992", 25.0, "1", "Oregon State", 1627780],
			[1610612747, "2017", "00", "Julius Randle", "30", "F-C", "6-9", "250", "NOV 29, 1994", 23.0, "3", "Kentucky", 203944],
			[1610612747, "2017", "00", "Thomas Bryant", "31", "C", "6-10", "248", "JUL 31, 1997", 20.0, "R", "Indiana", 1628418],
			[1610612747, "2017", "00", "Ivica Zubac", "40", "C", "7-1", "240", "MAR 18, 1997", 21.0, "1", null, 1627826]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612747, "2017", "WAL794301", "Luke", "Walton", "Luke Walton", "luke_walton", 1.0, "Head Coach", "College - Arizona", 27.0],
			[1610612747, "2017", "MER604913", "Jesse", "Mermuys", "Jesse Mermuys", "jesse_mermuys", 2.0, "Assistant Coach", "College - Arizona", 132.0],
			[1610612747, "2017", "MAD685759", "Mark", "Madsen", "Mark Madsen", "mark_madsen", 2.0, "Assistant Coach", "College - Stanford", 133.0],
			[1610612747, "2017", "KEE235242", "Brian", "Keefe", "Brian Keefe", "brian_keefe", 2.0, "Assistant Coach", "College - UNLV", 134.0],
			[1610612747, "2017", "BUE118279", "Jud", "Buechler", "Jud Buechler", "jud_buechler", 2.0, "Assistant Coach", "College - Arizona", 135.0],
			[1610612747, "2017", "SIM337198", "Miles", "Simon", "Miles Simon", "miles_simon", 2.0, "Assistant Coach", "College - Arizona", 136.0],
			[1610612747, "2017", "NUN167856", "Marco", "Nunez", "Marco Nunez", "marco_nunez", 3.0, "Trainer", "College - Cal Poly-Pomona", 137.0],
			[1610612747, "2017", "HSI177981", "Nina", "Hsieh", "Nina Hsieh", "nina_hsieh", 4.0, "Assistant Trainer", "College - Cal State-Fullerton", 138.0],
			[1610612747, "2017", "DIF563610", "Tim", "DiFrancesco", "Tim DiFrancesco", "tim_difrancesco", 5.0, "Strength and Conditioning Coach", "College - Endicott College", 139.0],
			[1610612747, "2017", "LIG211096", "Sean", "Light", "Sean Light", "sean_light", 6.0, "Assistant Strength and Conditioning Coach", "College - Quinnipiac", 140.0],
			[1610612747, "2017", "SHA760990", "Brian", "Shaw", "Brian Shaw", "brian_shaw", 9.0, "Associate Head Coach", "College - UC-Santa Barbara", 131.0]
		]
	}]
}

export default JSON.stringify(team_basic_lal)