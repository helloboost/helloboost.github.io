function updateAllSelects() {
    goalDivisionSelect = document.getElementById("goalDivisionSelect");
    currentDivisionIndex = getCurrentDivisionIndex();
    if (currentLeague === goalLeague) {
        if (currentDivisionIndex < 5) {
            updatedDivision = stringDivision[currentDivisionIndex + 1];
        } else {
            updatedDivision = stringDivision[currentDivisionIndex];
        }
        goalSelect = '<li id="goalDivisionSelect">\n';
        goalSelect = goalSelect + '<FONT SIZE=4>Goal division</FONT>\n';
        goalSelect = goalSelect + '<select id ="goalDivision" onchange ="getGoalDivision(this)"> \n';
        goalSelect = goalSelect + '<option value="goalDivisionV" selected"  ">' + updatedDivision + '</option>  \n';
        goalDivision = updatedDivision;
        for (i = currentDivisionIndex + 2; i < 6; i++) {
            goalSelect = goalSelect + '<option value=" goalDivisionV ">' + stringDivision[i] + '</option>  \n';
        }
        goalSelect = goalSelect + '</select>\n';
        goalSelect = goalSelect + '</li>\n';
        changeGoalImage_(goalLeague, updatedDivision);
        goalDivisionSelect.innerHTML = goalSelect;
    } else {
        goalLeagueSelect = document.getElementById("goalLeague");
        goalSelect = '<FONT SIZE=4>Goal division</FONT>\n';
        goalSelect = goalSelect + '<select id="goalDivision" onchange="getGoalDivision(this)">\n' +
                '<option value="goalDivisionV" selected>V</option>\n' +
                '<option value="goalDivisionIV">IV</option>\n' +
                '<option value="goalDivisionIII">III</option>\n' +
                '<option value="goalDivisionII">II</option>\n' +
                '<option value="goalDivisionI">I</option>\n' +
                '</select>';
        goalDivision = "V";
        goalDivisionSelect.innerHTML = goalSelect;

    }
}
function updateGoalDivisionSelect() {
    goalDivision = "V";
    goalDivisionSelect = document.getElementById("goalDivision");
    goalDDSelect ='<select id="goalDivision" onchange="getGoalDivision(this)">\n' +
            '<option value="goalDivisionV" selected>V</option>\n' +
            '<option value="goalDivisionIV">IV</option>\n' +
            '<option value="goalDivisionIII">III</option>\0n' +
            '<option value="goalDivisionII">II</option>\n' +
            '<option value="goalDivisionI">I</option>\n' +
            '</select>';
    goalDivisionSelect.innerHTML = goalDDSelect;

}
function updateCurrentSelect() {
    currentDivisionSelect = document.getElementById("currentDivision");
    currentSelect = '<FONT SIZE=4>Current division</FONT>\n';
    currentSelect = currentSelect + '<select id="currentDivision" onchange="getCurrentDivision(this)">\n' +
            '<option value="currentDivisionV" selected>V</option>\n' +
            '<option value="currentDivisionIV">IV</option>\n' +
            '<option value="currentDivisionIII">III</option>\0n' +
            '<option value="currentDivisionII">II</option>\n' +
            '<option value="currentDivisionI">I</option>\n' +
            '</select>';
    currentDivision = "V";
    currentDivisionSelect.innerHTML = currentSelect;
    goalDivision = "IV";
    goalLeague = currentLeague;
    changeGoalImage_(goalLeague, goalDivision);
    goalDivisionSelect = document.getElementById("goalDivision");
    goalLeagueSelect = document.getElementById("goalLeague");
    goalDSelect = '<FONT SIZE=4>Goal division</FONT>\n';
    goalDSelect = currentSelect + '<select id="goalDivision" onchange="getGoalDivision(this)">\n' +
//            '<option value="goalDivisionV">V</option>\n' +
            '<option value="goalDivisionIV" selected>IV</option>\n' +
            '<option value="goalDivisionIII">III</option>\0n' +
            '<option value="goalDivisionII">II</option>\n' +
            '<option value="goalDivisionI">I</option>\n' +
            '</select>';
    goalLSelect = updateGoalLeagueSelect();
    goalLeagueSelect.innerHTML = goalLSelect;
    goalDivisionSelect.innerHTML = goalDSelect;
}
function updateGoalLeagueSelect() {
    if (currentLeagueIndex === 5) {
        goalLSelect = '<FONT SIZE=4>Goal league</FONT>\n';
        goalLSelect = goalLSelect + '<select id="goalLeague" onchange="getGoalLeague(this)">\n' +
                '<option value="goalLeagueDiamond">Diamond</option>\n' +
                '</select>';
        return goalLSelect;
    } else {
        goalLSelect = '<FONT SIZE=4>Goal league</FONT>\n';
        goalLSelect = goalLSelect + '<select id="goalLeague" onchange="getGoalLeague(this)">\n';
        goalLSelect = goalLSelect + '<option value="goalLeague' + currentLeague + '">' + currentLeague + '</option>\n';
        for (i = currentLeagueIndex + 1; i < 6; i++) {
            goalLSelect = goalLSelect + '<option value="goalLeague' + stringGoalLeague[i] + '">' + stringGoalLeague[i] + '</option>\n';
        }
        goalLSelect = goalLSelect + '</select>';
        return goalLSelect;
    }
}