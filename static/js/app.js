function getSampleData(subject) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      //filter given the parameter subject's id
      var filterData = metadata.filter(filterItem => filterItem.id == subject);
      // use d3 select `#sample-metadata`
      var dataSelect = d3.select("#sample-metadata");
      //clear metadata
      dataSelect.html("");
  
      //add filter data to the panel
      Object.entries(filterData[0]).forEach(([k, v]) => {
        dataSelect.append("h6").text(`${k.toUpperCase()}: ${v}`);
      });
    });
  }

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
      getPlots(names[0]);
      getSampleData(names[0]);
    });
  }

  //call initialize for app
  init();