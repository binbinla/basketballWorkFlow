const team_basic_tor = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612761,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612761, "2017", "00", "CJ Miles", "0", "F-G", "6-6", "225", "MAR 18, 1987", 31.0, "12", "Skyline HS (TX)", 101139],
			[1610612761, "2017", "00", "OG Anunoby", "3", "F", "6-8", "235", "JUL 17, 1997", 20.0, "R", "Indiana", 1628384],
			[1610612761, "2017", "00", "Lorenzo Brown", "4", "G", "6-5", "189", "AUG 26, 1990", 27.0, "3", "North Carolina State", 203485],
			[1610612761, "2017", "00", "Kyle Lowry", "7", "G", "6-0", "205", "MAR 25, 1986", 32.0, "11", "Villanova", 200768],
			[1610612761, "2017", "00", "Serge Ibaka", "9", "F", "6-10", "235", "SEP 18, 1989", 28.0, "8", "Brazzaville, Rep. of Congo", 201586],
			[1610612761, "2017", "00", "DeMar DeRozan", "10", "G", "6-7", "220", "AUG 07, 1989", 28.0, "8", "Southern California", 201942],
			[1610612761, "2017", "00", "Malcolm Miller", "13", "F", "6-7", "210", "MAR 06, 1993", 25.0, "R", "Holy Cross", 1626259],
			[1610612761, "2017", "00", "Jonas Valanciunas", "17", "C", "7-0", "255", "MAY 06, 1992", 25.0, "5", "Utena, Lithuania", 202685],
			[1610612761, "2017", "00", "Malachi Richardson", "22", "G", "6-6", "205", "JAN 05, 1996", 22.0, "1", "Syracuse", 1627781],
			[1610612761, "2017", "00", "Fred VanVleet", "23", "G", "6-0", "195", "FEB 25, 1994", 24.0, "1", "Wichita State", 1627832],
			[1610612761, "2017", "00", "Norman Powell", "24", "F-G", "6-4", "215", "MAY 25, 1993", 24.0, "2", "UCLA", 1626181],
			[1610612761, "2017", "00", "Alfonzo McKinnie", "34", "F", "6-8", "215", "SEP 17, 1992", 25.0, "R", "Wisc.-Green Bay", 1628035],
			[1610612761, "2017", "00", "Jakob Poeltl", "42", "C", "7-0", "230", "OCT 15, 1995", 22.0, "1", "Utah", 1627751],
			[1610612761, "2017", "00", "Pascal Siakam", "43", "F", "6-9", "230", "APR 02, 1994", 24.0, "1", "New Mexico State", 1627783],
			[1610612761, "2017", "00", "Delon Wright", "55", "G", "6-5", "190", "APR 26, 1992", 25.0, "2", "Utah", 1626153],
			[1610612761, "2017", "00", "Lucas Nogueira", "92", "C", "7-0", "220", "JUL 26, 1992", 25.0, "3", null, 203512]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612761, "2017", "CAS288110", "Dwane", "Casey", "Dwane Casey", "dwane_casey", 1.0, "Head Coach", "College - Kentucky", 7.0],
			[1610612761, "2017", "KAL428791", "Rex", "Kalamian", "Rex Kalamian", "rex_kalamian", 2.0, "Assistant Coach", "College - Cal Poly Pomona", 227.0],
			[1610612761, "2017", "NUR605274", "Nick", "Nurse", "Nick Nurse", "nick_nurse", 2.0, "Assistant Coach", "College - Northern Iowa", 228.0],
			[1610612761, "2017", "STA085162", "Jerry", "Stackhouse", "Jerry Stackhouse", "jerry_stackhouse", 2.0, "Assistant Coach", "College - North Carolina", 229.0],
			[1610612761, "2017", "MAH182625", "Jama", "Mahlalela", "Jama Mahlalela", "jama_mahlalela", 2.0, "Assistant Coach", "College - British Columbia (Canada)", 230.0],
			[1610612761, "2017", "MAG566847", "Jamaal", "Magloire", "Jamaal Magloire", "jamaal_magloire", 2.0, "Assistant Coach", "College - Kentucky", 231.0],
			[1610612761, "2017", "MCK083572", "Alex", "McKechnie", "Alex McKechnie", "alex_mckechnie", 2.0, "Assistant Coach", null, 232.0],
			[1610612761, "2017", "MCC796082", "Scott", "McCullough", "Scott McCullough", "scott_mccullough", 3.0, "Trainer", "College - Toronto", 233.0]
		]
	}]
}

export default JSON.stringify(team_basic_tor)