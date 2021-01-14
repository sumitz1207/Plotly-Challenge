//initialize function for plotly app
  function init() {
    //refer to drop down data selector
    var dropSelect = d3.select("#selDataset");
  
    //take data from samples.json and use inline function
    d3.json("samples.json").then((d) => {
      //grab data sample names
      var names = d.names;
      //take from the drop select information and append to names for graph building
      names.forEach((listItem) => {dropSelect.append("option").text(listItem).property("value", listItem);
      });
      //take from the list and call the functions to build graphs and data
      buildCharts(names[0]);
      buildMetadata(names[0]);
    });
  }

  //call initialize for app
  init();