var teams = [
	{
		"Tag": "FOX",
		"Team Name": "Echo Fox",
		"W": 0,
		"L": 0,		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "OPT",
		"Team Name": "OpTic Gaming",
		"W": 0,
		"L": 0,		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "CG",
		"Team Name": "Clutch Gaming",
		"W": 0,
		"L": 0,
		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "CLG",
		"Team Name": "Counter Logic Gaming",
		"W": 0,
		"L": 0,		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "100",
		"Team Name": "100 Thieves",
		"W": 0,
		"L": 0,
		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "TL",
		"Team Name": "Team Liquid",
		"W": 0,
		"L": 0,
		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "C9",
		"Team Name": "Cloud9",
		"W": 0,
		"L": 0,
		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "TSM",
		"Team Name": "Team SoloMid",
		"W": 0,
		"L": 0,
		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "FLY",
		"Team Name": "FlyQuest",
		"W": 0,
		"L": 0,
		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
	{
		"Tag": "GGS",
		"Team Name": "Golden Guardians",
		"W": 0,
		"L": 0,
		"H2H": {
			"TL": 0,
			"C9": 0,
			"TSM": 0,
			"FLY": 0,
			"GGS": 0,
			"CLG": 0,
			"FOX": 0,
			"OPT": 0,
			"CG": 0,
			"100": 0,
		},
	},
]

$(document).ready(function(){
	init();
});

function compare(a,b) {
	if (a["W"] < b["W"])
		return 1;
	if (a["W"] > b["W"])
		return -1;
	if (a["H2H"][b["Tag"]] < 0)
		return 1;
	if (b["H2H"][a["Tag"]] > 0)
		return 1;
	return 0;
}

function defeat(winner, loser) {
	winner["W"]++;
	winner["H2H"][loser["Tag"]]++;
	loser["L"]++;
	loser["H2H"][winner["Tag"]]--;
}

function getTeam(tag) {
	for (team in teams) {
		if (teams[team]["Tag"] === tag) {
			return teams[team];
		}
	}
	return null;
}

function createStandingsTable() {
	var tableDiv = document.createElement("div");
	tableDiv.setAttribute("id", "standings-div");

	var table = document.createElement("table");
	table.setAttribute("id", "standings-table");

	tableDiv.appendChild(table);
	document.body.appendChild(tableDiv);

	var thead = document.createElement("thead");
	var th = document.createElement("th");
	var td = document.createElement("td");
	var text = document.createTextNode("#");
	td.appendChild(text);
	th.appendChild(td);
	for (tag in teams[0]) {
		if (tag == "H2H") {
			continue;
		}
		var td = document.createElement("td");
		var text = document.createTextNode(tag);
		td.appendChild(text);
		th.appendChild(td);
	}
	thead.appendChild(th);
	table.appendChild(thead);

	updateStandingsTable();
}

function updateStandingsTable() {
	var table = $("#standings-table");

	console.log(table)

	var oldBody = table.tbody;
	var tbody = document.createElement("tbody");

	for (i in teams.sort(compare)) {
		var row = document.createElement("tr");
		var td = document.createElement("td");
		var text = document.createTextNode(i-0+1);
		td.appendChild(text);
		row.appendChild(td);
		for (info in teams[i]) {
			if (info == "H2H") {
				continue;
			}
			var td = document.createElement("td");
			var text = document.createTextNode(teams[i][info]);
			td.appendChild(text);
			row.appendChild(td);
		}
		tbody.appendChild(row);
	}

	oldBody.parentNode.replaceChild(tbody, oldBody);
}

function createMatchesTable() {

}

function init() {
	var results = [
		{win: "TL", loss: "C9"},
		{win: "TL", loss: "CLG"},
		{win: "TL", loss: "100"},
		{win: "TL", loss: "CG"},
		{win: "TL", loss: "FLY"},
		{win: "TL", loss: "OPT"},
		{win: "TL", loss: "GGS"},
		{win: "TL", loss: "FOX"},
		{win: "TL", loss: "100"},
		{win: "TL", loss: "OPT"},
		{win: "TL", loss: "CLG"},
		{win: "TL", loss: "C9"},
		{win: "TL", loss: "GGS"},
		{win: "TL", loss: "CG"},
		{win: "C9", loss: "100"},
		{win: "C9", loss: "GGS"},
		{win: "C9", loss: "TSM"},
		{win: "C9", loss: "CG"},
		{win: "C9", loss: "FOX"},
		{win: "C9", loss: "OPT"},
		{win: "C9", loss: "FLY"},
		{win: "C9", loss: "CLG"},
		{win: "C9", loss: "GGS"},
		{win: "C9", loss: "TSM"},
		{win: "C9", loss: "100"},
		{win: "C9", loss: "OPT"},
		{win: "TSM", loss: "TL"},
		{win: "TSM", loss: "100"},
		{win: "TSM", loss: "FOX"},
		{win: "TSM", loss: "OPT"},
		{win: "TSM", loss: "CLG"},
		{win: "TSM", loss: "FLY"},
		{win: "TSM", loss: "FOX"},
		{win: "TSM", loss: "100"},
		{win: "TSM", loss: "OPT"},
		{win: "TSM", loss: "GGS"},
		{win: "TSM", loss: "CLG"},
		{win: "FLY", loss: "TL"},
		{win: "FLY", loss: "TSM"},
		{win: "FLY", loss: "GGS"},
		{win: "FLY", loss: "OPT"},
		{win: "FLY", loss: "100"},
		{win: "FLY", loss: "CG"},
		{win: "FLY", loss: "CG"},
		{win: "FLY", loss: "FOX"},
		{win: "FLY", loss: "100"},
		{win: "GGS", loss: "TSM"},
		{win: "GGS", loss: "OPT"},
		{win: "GGS", loss: "CLG"},
		{win: "GGS", loss: "FOX"},
		{win: "GGS", loss: "100"},
		{win: "GGS", loss: "CLG"},
		{win: "GGS", loss: "CG"},
		{win: "CLG", loss: "C9"},
		{win: "CLG", loss: "FLY"},
		{win: "CLG", loss: "FLY"},
		{win: "CLG", loss: "FOX"},
		{win: "CLG", loss: "CG"},
		{win: "CLG", loss: "OPT"},
		{win: "FOX", loss: "C9"},
		{win: "FOX", loss: "FLY"},
		{win: "FOX", loss: "GGS"},
		{win: "FOX", loss: "OPT"},
		{win: "FOX", loss: "100"},
		{win: "FOX", loss: "100"},
		{win: "OPT", loss: "FLY"},
		{win: "OPT", loss: "FOX"},
		{win: "OPT", loss: "CLG"},
		{win: "OPT", loss: "CG"},
		{win: "OPT", loss: "100"},
		{win: "OPT", loss: "CG"},
		{win: "CG", loss: "TSM"},
		{win: "CG", loss: "GGS"},
		{win: "CG", loss: "CLG"},
		{win: "CG", loss: "FOX"},
		{win: "CG", loss: "FOX"},
		{win: "100", loss: "GGS"},
		{win: "100", loss: "CLG"},
		{win: "100", loss: "CG"},
		{win: "100", loss: "CG"},
	]

	for (match in results){
		defeat(getTeam(results[match].win), getTeam(results[match].loss));
	}

	createStandingsTable();
	createMatchesTable();

}
