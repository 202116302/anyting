// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


var xAxisData = []; // x축 데이터 배열 생성
var seriesData = []; // 값 데이터 배열 생성

$.get("tem.csv", function graph(csv){
  csvLines = points = [];
  csvLines = csv.split(/[\r?\n|\r|\n]+/);

  for (var i = 0; i < csvLines.length; i++)
      if (csvLines[i].length > 0) {
          points = csvLines[i].split(",");
          xAxisData.push(
              parseFloat(points[0])
      );
          seriesData.push(
              parseFloat(points[1])
      );

  }

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xAxisData,
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 2,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: seriesData,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

})

var xAxisData2 = []; // x축 데이터 배열 생성
var seriesData2 = []; // 값 데이터 배열 생성

$.get("Humid.csv", function graph(csv){
  csvLines = points = [];
  csvLines = csv.split(/[\r?\n|\r|\n]+/);

  for (var i = 0; i < csvLines.length; i++)
      if (csvLines[i].length > 0) {
          points = csvLines[i].split(",");
          xAxisData2.push(
              parseFloat(points[0])
      );
          seriesData2.push(
              parseFloat(points[1])
      );

  }

// Area Chart Example
var ctx = document.getElementById("myAreaChart2");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xAxisData2,
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 2,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: seriesData2,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

})

var xAxisData3 = []; // x축 데이터 배열 생성
var seriesData3 = []; // 값 데이터 배열 생성

$.get("nh3.csv", function graph(csv){
  csvLines = points = [];
  csvLines = csv.split(/[\r?\n|\r|\n]+/);

  for (var i = 0; i < csvLines.length; i++)
      if (csvLines[i].length > 0) {
          points = csvLines[i].split(",");
          xAxisData3.push(
              parseFloat(points[0])
      );
          seriesData3.push(
              parseFloat(points[1])
      );

  }

// Area Chart Example
var ctx = document.getElementById("myAreaChart3");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: xAxisData3,
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 2,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: seriesData3,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 60,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

})