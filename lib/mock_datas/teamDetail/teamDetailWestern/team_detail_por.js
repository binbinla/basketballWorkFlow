"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const team_detail_por = {
    "resource": "teamplayerdashboard",
    "parameters": {
        "MeasureType": "Base",
        "PerMode": "PerGame",
        "PlusMinus": "N",
        "PaceAdjust": "N",
        "Rank": "N",
        "LeagueID": "00",
        "Season": "2017-18",
        "SeasonType": "Regular Season",
        "PORound": null,
        "TeamID": 1610612757,
        "Outcome": null,
        "Location": null,
        "Month": 0,
        "SeasonSegment": null,
        "DateFrom": null,
        "DateTo": null,
        "OpponentTeamID": 0,
        "VsConference": null,
        "VsDivision": null,
        "GameSegment": null,
        "Period": 0,
        "ShotClockRange": null,
        "LastNGames": 0
    },
    "resultSets": [{
            "name": "TeamOverall",
            "headers": ["GROUP_SET", "TEAM_ID", "TEAM_NAME", "GROUP_VALUE", "GP", "W", "L", "W_PCT", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "TOV", "STL", "BLK", "BLKA", "PF", "PFD", "PTS", "PLUS_MINUS", "GP_RANK", "W_RANK", "L_RANK", "W_PCT_RANK", "MIN_RANK", "FGM_RANK", "FGA_RANK", "FG_PCT_RANK", "FG3M_RANK", "FG3A_RANK", "FG3_PCT_RANK", "FTM_RANK", "FTA_RANK", "FT_PCT_RANK", "OREB_RANK", "DREB_RANK", "REB_RANK", "AST_RANK", "TOV_RANK", "STL_RANK", "BLK_RANK", "BLKA_RANK", "PF_RANK", "PFD_RANK", "PTS_RANK", "PLUS_MINUS_RANK"],
            "rowSet": [
                ["Overall", 1610612757, "Portland Trail Blazers", "2017-18", 82, 49, 33, 0.598000, 48.2, 39.300000, 87.000000, 0.452, 10.300000, 28.100000, 0.366, 16.700000, 20.900000, 0.8, 10.200000, 35.300000, 45.500000, 19.500000, 13.5, 7.000000, 5.200000, 5.100000, 19.500000, 19.100000, 105.600000, 2.6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        }, {
            "name": "PlayersSeasonTotals",
            "headers": ["GROUP_SET", "PLAYER_ID", "PLAYER_NAME", "GP", "W", "L", "W_PCT", "MIN", "FGM", "FGA", "FG_PCT", "FG3M", "FG3A", "FG3_PCT", "FTM", "FTA", "FT_PCT", "OREB", "DREB", "REB", "AST", "TOV", "STL", "BLK", "BLKA", "PF", "PFD", "PTS", "PLUS_MINUS", "NBA_FANTASY_PTS", "DD2", "TD3", "GP_RANK", "W_RANK", "L_RANK", "W_PCT_RANK", "MIN_RANK", "FGM_RANK", "FGA_RANK", "FG_PCT_RANK", "FG3M_RANK", "FG3A_RANK", "FG3_PCT_RANK", "FTM_RANK", "FTA_RANK", "FT_PCT_RANK", "OREB_RANK", "DREB_RANK", "REB_RANK", "AST_RANK", "TOV_RANK", "STL_RANK", "BLK_RANK", "BLKA_RANK", "PF_RANK", "PFD_RANK", "PTS_RANK", "PLUS_MINUS_RANK", "NBA_FANTASY_PTS_RANK", "DD2_RANK", "TD3_RANK"],
            "rowSet": [
                ["Players", 202329, "Al-Farouq Aminu", 69, 40, 29, 0.580000, 30.0, 3.300000, 8.400000, 0.395, 1.800000, 4.900000, 0.369, 0.900000, 1.200000, 0.738, 1.400000, 6.200000, 7.600000, 1.200000, 1.100000, 1.100000, 0.600000, 0.200000, 2.000000, 1.200000, 9.300000, 3.200000, 24.3, 9, 0, 8, 9, 6, 12, 3, 4, 4, 15, 3, 3, 6, 8, 8, 8, 3, 2, 2, 6, 6, 2, 4, 10, 6, 7, 4, 3, 4, 3, 1],
                ["Players", 203468, "CJ McCollum", 81, 48, 33, 0.593000, 36.1, 8.200000, 18.600000, 0.443, 2.300000, 5.900000, 0.397, 2.600000, 3.100000, 0.836, 0.700000, 3.300000, 4.000000, 3.400000, 1.900000, 1.000000, 0.400000, 1.200000, 2.100000, 2.600000, 21.400000, 1.500000, 33.5, 1, 0, 2, 2, 1, 10, 2, 2, 2, 9, 2, 2, 4, 2, 3, 5, 9, 6, 6, 2, 3, 5, 6, 1, 3, 3, 2, 6, 2, 5, 1],
                ["Players", 1628403, "Caleb Swanigan", 27, 16, 11, 0.593000, 7.0, 0.900000, 2.200000, 0.4, 0.000000, 0.300000, 0.125, 0.400000, 0.700000, 0.667, 0.600000, 1.400000, 2.000000, 0.500000, 0.700000, 0.200000, 0.100000, 0.100000, 1.400000, 0.600000, 2.300000, -0.400000, 5.7, 0, 0, 14, 14, 14, 10, 14, 15, 14, 13, 13, 12, 13, 12, 11, 10, 10, 13, 12, 11, 10, 14, 14, 12, 11, 12, 14, 12, 15, 7, 1],
                ["Players", 203081, "Damian Lillard", 73, 44, 29, 0.603000, 36.6, 8.500000, 19.400000, 0.439, 3.100000, 8.600000, 0.361, 6.800000, 7.400000, 0.916, 0.800000, 3.600000, 4.500000, 6.600000, 2.800000, 1.100000, 0.400000, 1.200000, 1.600000, 5.400000, 26.900000, 4.700000, 43.6, 11, 0, 7, 7, 6, 8, 1, 1, 1, 10, 1, 1, 7, 1, 1, 1, 6, 5, 5, 1, 1, 4, 7, 2, 9, 1, 1, 2, 1, 2, 1],
                ["Players", 202334, "Ed Davis", 78, 48, 30, 0.615000, 18.9, 2.200000, 3.700000, 0.582, 0.000000, 0.000000, 0.0, 0.900000, 1.400000, 0.667, 2.300000, 5.000000, 7.400000, 0.500000, 0.800000, 0.400000, 0.700000, 0.400000, 2.400000, 1.500000, 5.300000, 1.200000, 17.3, 6, 0, 5, 2, 5, 4, 8, 8, 10, 4, 14, 15, 14, 6, 6, 10, 2, 3, 3, 13, 8, 9, 3, 5, 2, 5, 10, 7, 5, 4, 1],
                ["Players", 202323, "Evan Turner", 79, 48, 31, 0.608000, 25.7, 3.300000, 7.300000, 0.447, 0.500000, 1.700000, 0.318, 1.200000, 1.400000, 0.85, 0.400000, 2.700000, 3.100000, 2.200000, 1.300000, 0.600000, 0.400000, 0.200000, 2.100000, 1.500000, 8.200000, -0.600000, 16.8, 0, 0, 3, 2, 3, 6, 5, 5, 5, 8, 8, 8, 10, 5, 7, 2, 12, 7, 8, 3, 4, 8, 8, 11, 4, 6, 6, 15, 7, 7, 1],
                ["Players", 1627834, "Georgios Papagiannis", 1, 0, 1, 0.000000, 3.7, 1.000000, 1.000000, 1.0, 0.000000, 0.000000, 0.0, 0.000000, 0.000000, 0.0, 1.000000, 0.000000, 1.000000, 0.000000, 0.000000, 2.000000, 0.000000, 0.000000, 0.000000, 0.000000, 2.000000, 15.000000, 9.2, 0, 0, 16, 16, 16, 16, 16, 14, 16, 1, 14, 16, 14, 16, 16, 16, 5, 16, 15, 16, 16, 1, 15, 15, 16, 16, 15, 1, 12, 7, 1],
                ["Players", 1627774, "Jake Layman", 34, 21, 13, 0.618000, 4.7, 0.400000, 1.400000, 0.298, 0.100000, 0.600000, 0.2, 0.100000, 0.100000, 0.667, 0.100000, 0.400000, 0.500000, 0.300000, 0.100000, 0.200000, 0.100000, 0.000000, 0.400000, 0.100000, 1.000000, -0.600000, 2.8, 0, 0, 11, 11, 13, 3, 15, 16, 15, 16, 11, 11, 12, 15, 15, 10, 16, 15, 16, 15, 15, 16, 13, 14, 15, 15, 16, 14, 16, 7, 1],
                ["Players", 203994, "Jusuf Nurkic", 79, 48, 31, 0.608000, 26.4, 6.100000, 12.000000, 0.505, 0.000000, 0.100000, 0.0, 2.200000, 3.500000, 0.63, 2.400000, 6.600000, 9.000000, 1.800000, 2.300000, 0.800000, 1.400000, 0.800000, 3.100000, 3.500000, 14.300000, 2.000000, 32.1, 27, 0, 3, 2, 3, 6, 4, 3, 3, 5, 14, 14, 14, 3, 2, 14, 1, 1, 1, 5, 2, 7, 1, 3, 1, 2, 3, 4, 3, 1, 1],
                ["Players", 203090, "Maurice Harkless", 59, 36, 23, 0.610000, 21.4, 2.500000, 5.000000, 0.495, 0.800000, 2.000000, 0.415, 0.700000, 1.000000, 0.712, 0.800000, 2.000000, 2.700000, 0.900000, 0.700000, 0.800000, 0.700000, 0.300000, 1.700000, 0.900000, 6.500000, 0.100000, 15.1, 0, 0, 10, 10, 10, 5, 6, 7, 7, 6, 6, 6, 3, 9, 9, 9, 7, 9, 9, 8, 9, 6, 2, 6, 7, 10, 7, 11, 8, 7, 1],
                ["Players", 203086, "Meyers Leonard", 33, 17, 16, 0.515000, 7.7, 1.400000, 2.400000, 0.59, 0.300000, 0.800000, 0.423, 0.300000, 0.300000, 0.818, 0.400000, 1.800000, 2.100000, 0.500000, 0.300000, 0.200000, 0.000000, 0.000000, 1.100000, 0.500000, 3.400000, -1.100000, 7.0, 0, 0, 12, 12, 11, 14, 13, 13, 13, 3, 10, 9, 2, 14, 14, 6, 13, 11, 11, 12, 14, 13, 15, 15, 14, 14, 13, 16, 14, 7, 1],
                ["Players", 203943, "Noah Vonleh", 33, 17, 16, 0.515000, 14.4, 1.400000, 2.900000, 0.49, 0.100000, 0.200000, 0.333, 0.700000, 0.900000, 0.742, 1.100000, 4.000000, 5.100000, 0.400000, 0.500000, 0.200000, 0.300000, 0.200000, 1.300000, 0.900000, 3.600000, -0.500000, 11.4, 1, 0, 12, 12, 11, 14, 11, 12, 12, 7, 12, 13, 9, 10, 10, 7, 4, 4, 4, 14, 13, 15, 9, 9, 12, 9, 12, 13, 9, 5, 1],
                ["Players", 1626192, "Pat Connaughton", 82, 49, 33, 0.598000, 18.1, 2.000000, 4.800000, 0.423, 0.900000, 2.600000, 0.352, 0.500000, 0.500000, 0.841, 0.400000, 1.500000, 2.000000, 1.100000, 0.500000, 0.300000, 0.300000, 0.300000, 1.500000, 0.500000, 5.400000, 1.700000, 10.5, 0, 0, 1, 1, 1, 9, 9, 9, 8, 11, 5, 5, 8, 11, 13, 3, 11, 12, 13, 7, 12, 11, 10, 7, 10, 13, 9, 5, 11, 7, 1],
                ["Players", 203894, "Shabazz Napier", 74, 46, 28, 0.622000, 20.7, 3.000000, 7.200000, 0.42, 1.100000, 2.900000, 0.376, 1.600000, 1.900000, 0.841, 0.400000, 1.900000, 2.300000, 2.000000, 1.200000, 1.100000, 0.200000, 0.400000, 1.100000, 2.000000, 8.700000, 1.100000, 17.1, 0, 0, 6, 6, 8, 1, 7, 6, 6, 12, 4, 4, 5, 4, 4, 4, 14, 10, 10, 4, 5, 3, 11, 4, 13, 4, 5, 8, 6, 7, 1],
                ["Players", 1627735, "Wade Baldwin IV", 7, 4, 3, 0.571000, 11.5, 2.000000, 3.000000, 0.667, 0.600000, 0.700000, 0.8, 0.900000, 1.400000, 0.6, 0.100000, 1.000000, 1.100000, 0.700000, 0.600000, 0.300000, 0.100000, 0.100000, 1.700000, 1.000000, 5.400000, 0.700000, 8.6, 0, 0, 15, 15, 15, 13, 12, 10, 11, 2, 7, 10, 1, 7, 5, 15, 15, 14, 14, 10, 11, 10, 12, 13, 8, 8, 8, 9, 13, 7, 1],
                ["Players", 1628380, "Zach Collins", 66, 41, 25, 0.621000, 15.8, 1.700000, 4.400000, 0.398, 0.500000, 1.700000, 0.31, 0.400000, 0.600000, 0.643, 0.700000, 2.700000, 3.300000, 0.800000, 0.900000, 0.300000, 0.500000, 0.300000, 2.000000, 0.700000, 4.400000, 0.200000, 10.9, 0, 0, 9, 8, 9, 2, 10, 11, 9, 14, 9, 7, 11, 13, 12, 13, 8, 8, 7, 9, 7, 12, 5, 8, 5, 11, 11, 10, 10, 7, 1]
            ]
        }]
};
exports.default = JSON.stringify(team_detail_por);
//# sourceMappingURL=team_detail_por.js.map