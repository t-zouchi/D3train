d3.csv("./js/data.csv", function(error, data){
    var text = "";
    for(var i=0; i<data.length; i++){
        text += data[i].label + " = " + data[i].value + "<br>";
    }
    d3.select("#result").html(text);
});
