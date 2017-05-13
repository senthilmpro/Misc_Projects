var barChart = bar();
     
      barChart
          .height(500)
          .width(800);
     
     d3Selection.select('.css-selector')
          .datum(dataset)
         .call(barChart);