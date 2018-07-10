var cjgShortcuts = function() {
    "use strict";

    function e(o) {
        return o.split(/\/u\/\d\//).join("/").split(/\/b\/\d{21}\//).join("/");
    }

    function t(t, n) {
        var a = new window.URL(t),
            c = o(a.host) + e(a.pathname),
            i = [];
        return Object.keys(s).forEach(function(o) {}), i.sort(function(o, e) {
            return s[o].nu < s[e].nu ? 1 : -1;
        }), i;
    }

    function n(o, e) {
        var t = o in s && "u" in s[o];
        if (!t) return null;
        var n = s[o],
            a = e && e.authuser,
            c = a || "0",
            i = e && e.pageId,
            u = i && n.bu;
        if (u) return u.replace("[authuser]", c).replace("[pageid]", i);
        var g = 1 === n.aum || a && (2 === n.aum || "0" !== a);
        return g && n.au && n.au.replace("[authuser]", c) || n.u;
    }
    var s = {
            1: {
                name: "Espn Football",
                icon: "espn",
                u: "http://global.espn.com/football/",
            },
            2: {
                name: "Skysports Football",
                icon: "skysports",
                u: "http://www.skysports.com/football",
            },
            3: {
                name: "Goal",
                icon: "goal",
                u: "http://www.goal.com/en/",
            },
            4: {
                name: "BBC Football",
                icon: "bbc",
                u: "https://www.bbc.com/sport/football",
            },
            5: {
                name: "Theguardian Football",
                icon: "theguardian",
                u: "https://www.theguardian.com/football",
            },
            6: {
                name: "Premierleague",
                icon: "premierleague",
                u: "https://www.premierleague.com/",
            },
            7: {
                name: "The Independent Football",
                icon: "independent",
                u: "https://www.independent.co.uk/sport/football",
            },
            8: {
                name: "Sports Illustrated Football",
                icon: "si",
                u: "https://www.si.com/planet-futbol",
            },
            9: {
                name: "The Mirror Football",
                icon: "mirror",
                u: "https://www.mirror.co.uk/sport/football/",
            },
            10: {
                name: "Football Highlights RU",
                icon: "FootballHighlight",
                u: "https://football-highlight.com/ru",
            },
            11: {
                name: "Live Result RU",
                icon: "liveresult",
                u: "https://www.liveresult.ru/",
            },
            12: {
                name: "Livescore RU",
                icon: "livescore",
                u: "https://www.livescore.in/ru/",
            },
            13: {
                name: "Ftables RU",
                icon: "ftables",
                u: "http://www.ftables.ru/",
            },
            14: {
                name: "Euro Football RU",
                icon: "eurofootball",
                u: "https://www.euro-football.ru/",
            },
            15: {
                name: "Первый канал Fifa Worldcup",
                icon: "1tv",
                u: "https://www.1tv.ru/sport/fifaworldcup/live",
            },
            16: {
                name: "Газета RU футбол",
                icon: "gazeta",
                u: "https://www.gazeta.ru/sport/football/",
            },
            17: {
                name: "Goal RU",
                icon: "goal",
                u: "http://www.goal.com/ru",
            },
            18: {
                name: "Footboom",
                icon: "footboom",
                u: "https://www.footboom.com/news",
            },
            19: {
                name: "Eurosport RU",
                icon: "eurosport",
                u: "https://www.eurosport.ru/football/",
            },
            20: {
                name: "Soccer RU",
                icon: "soccer",
                u: "https://www.soccer.ru/",
            },
            21: {
                name: "Football HD",
                icon: "footballhd",
                u: "https://footballhd.ru/",
            },
            22: {
                name: "Sports RU",
                icon: "sports.ru",
                u: "https://sports.ru",
            },
            23: {
                name: "Чемпионат RU",
                icon: "Championat",
                u: "https://championat.com",
            },
            24: {
                name: "Спорт-Экспресс",
                icon: "SportExpress",
                u: "https://sport-express.ru",
            },
            25: {
                name: "Fapl RU",
                icon: "fapl",
                u: "http://fapl.ru/",
            },
        },
        u = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ],
        g = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    return {
        defaultSelection: u,
        mostPopular: g,
        list: s,
        findMatches: t,
        getUrl: n
    };
}();