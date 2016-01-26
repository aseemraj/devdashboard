var data = {"labels": ["19 January", "20 January", "21 January", "22 January", "23 January", "24 January", "25 January"], "datasets": [{"languages": [["Ruby", "Python", "YAML"], ["Ruby", "Python", "HTML"], ["Ruby", "JavaScript", "Bash"], ["HTML", "CSS", "C++"], [], ["Ruby", "JavaScript", "Bash"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["7 hrs 6 mins", "4 hrs 38 mins", "4 hrs 50 mins", "50 mins", "0 secs", "1 hr 54 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [7.165555555555556, 4.663888888888889, 4.9366666666666665, 0.8530555555555556, 0.0, 1.9441666666666666, 0.0], "label": "Dataset"}]};
var totalTime = "19 hours 33 minutes";
var languages = ["Ruby", "Python", "JavaScript"];
var ctx = document.getElementById("chart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data, {
  tooltipTemplate: function(valuesObject){
    var label = valuesObject.label;
    var idx = data.labels.indexOf(label);
    var result = data.datasets[0].time[idx];
    if (data.datasets[0].languages[idx].length !== 0)
      result += " [" + data.datasets[0].languages[idx].join(", ") + "]"
    return result;
  }
});
document.getElementById("summary").innerHTML = "I have written code for " + totalTime + " in the last week in mostly " + languages.join(", ") + ".";
