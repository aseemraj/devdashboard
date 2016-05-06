var data = {"labels": ["30 April", "1 May", "2 May", "3 May", "4 May", "5 May", "6 May"], "datasets": [{"languages": [[], ["Ruby", "JavaScript", "Other"], ["Ruby", "JavaScript", "PHP"], ["Ruby", "JavaScript"], ["Ruby", "JavaScript", "Bash"], ["Ruby", "Bash", "Other"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "2 hrs 57 mins", "1 hr 42 mins", "0 secs", "35 mins", "34 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 2.985, 1.7358333333333333, 0.0044444444444444444, 0.6066666666666667, 0.5847222222222223, 0.0], "label": "Dataset"}]};
var totalTime = "5 hours 55 minutes";
var languages = ["Ruby", "JavaScript", "PHP"];
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
