const team_basic_ind = 
{
	"resource": "commonteamroster",
	"parameters": {
		"TeamID": 1610612754,
		"LeagueID": "00",
		"Season": "2017-18"
	},
	"resultSets": [{
		"name": "CommonTeamRoster",
		"headers": ["TeamID", "SEASON", "LeagueID", "PLAYER", "NUM", "POSITION", "HEIGHT", "WEIGHT", "BIRTH_DATE", "AGE", "EXP", "SCHOOL", "PLAYER_ID"],
		"rowSet": [
			[1610612754, "2017", "00", "Alex Poythress", "0", "F", "6-9", "235", "SEP 06, 1993", 24.0, "1", "Kentucky", 1627816],
			[1610612754, "2017", "00", "Lance Stephenson", "1", "G", "6-6", "230", "SEP 05, 1990", 27.0, "7", "Cincinnati", 202362],
			[1610612754, "2017", "00", "Darren Collison", "2", "G", "6-2", "185", "AUG 23, 1987", 30.0, "8", "UCLA", 201954],
			[1610612754, "2017", "00", "Joe Young", "3", "G", "6-2", "185", "JUN 27, 1992", 25.0, "2", "Oregon", 1626202],
			[1610612754, "2017", "00", "Victor Oladipo", "4", "G", "6-4", "210", "MAY 04, 1992", 25.0, "4", "Indiana", 203506],
			[1610612754, "2017", "00", "Edmond Sumner", "5", "G", "6-5", "188", "DEC 31, 1995", 22.0, "R", "Xavier", 1628410],
			[1610612754, "2017", "00", "Cory Joseph", "6", "G", "6-3", "190", "AUG 20, 1991", 26.0, "6", "Texas", 202709],
			[1610612754, "2017", "00", "Domantas Sabonis", "11", "C-F", "6-10", "252", "MAY 03, 1996", 21.0, "1", "Gonzaga", 1627734],
			[1610612754, "2017", "00", "Ike Anigbogu", "13", "C", "6-10", "262", "OCT 16, 1998", 19.0, "R", "California-Los Angeles", 1628387],
			[1610612754, "2017", "00", "Trevor Booker", "20", "F", "6-8", "228", "NOV 25, 1987", 30.0, "7", "Clemson", 202344],
			[1610612754, "2017", "00", "Thaddeus Young", "21", "F", "6-8", "230", "JUN 21, 1988", 29.0, "10", "Georgia Tech", 201152],
			[1610612754, "2017", "00", "TJ Leaf", "22", "F", "6-10", "230", "APR 30, 1997", 20.0, "R", "California-Los Angeles", 1628388],
			[1610612754, "2017", "00", "Al Jefferson", "25", "C", "6-10", "280", "JAN 04, 1985", 33.0, "13", "Prentiss HS (MS)", 2744],
			[1610612754, "2017", "00", "Ben Moore", "26", "F", "6-8", "220", "MAY 13, 1995", 22.0, "R", "Southern Methodist", 1628500],
			[1610612754, "2017", "00", "Myles Turner", "33", "C", "6-11", "255", "MAR 24, 1996", 22.0, "2", "Texas", 1626167],
			[1610612754, "2017", "00", "Glenn Robinson III", "40", "G-F", "6-7", "215", "JAN 08, 1994", 24.0, "3", "Michigan", 203922],
			[1610612754, "2017", "00", "Bojan Bogdanovic", "44", "F", "6-8", "230", "APR 18, 1989", 29.0, "3", null, 202711]
		]
	}, {
		"name": "Coaches",
		"headers": ["TEAM_ID", "SEASON", "COACH_ID", "FIRST_NAME", "LAST_NAME", "COACH_NAME", "COACH_CODE", "IS_ASSISTANT", "COACH_TYPE", "SCHOOL", "SORT_SEQUENCE"],
		"rowSet": [
			[1610612754, "2017", "MCM236933", "Nate", "McMillan", "Nate McMillan", "nate_mcmillan", 1.0, "Head Coach", "College - North Carolina State", 16.0],
			[1610612754, "2017", "BUR113511", "Dan", "Burke", "Dan Burke", "dan_burke", 2.0, "Assistant Coach", "College - Portland State", 114.0],
			[1610612754, "2017", "JON549410", "Popeye", "Jones", "Popeye Jones", "popeye_jones", 2.0, "Assistant Coach", "College - Murray State", 115.0],
			[1610612754, "2017", "BAY484163", "Bill", "Bayno", "Bill Bayno", "bill_bayno", 2.0, "Assistant Coach", "College - Sacred Heart", 116.0],
			[1610612754, "2017", "COR118116", "Josh", "Corbeil", "Josh Corbeil", "josh_corbeil", 3.0, "Trainer", "College - Boston University", 118.0],
			[1610612754, "2017", "EAT388624", "Carl", "Eaton", "Carl Eaton", "carl_eaton", 4.0, "Assistant Trainer", "College - Lock Haven", 119.0],
			[1610612754, "2017", "WIN162340", "Shawn", "Windle", "Shawn Windle", "shawn_windle", 5.0, "Strength and Conditioning Coach", "College - Maine - Presque Isle", 120.0],
			[1610612754, "2017", "MCC476679", "David", "McClure", "David McClure", "david_mcclure", 12.0, "Assistant Coach for Player Development", "College - Duke", 117.0]
		]
	}]
}

export default JSON.stringify(team_basic_ind)