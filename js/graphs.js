var dataEntries = [];
var locationParam = getURLParam();
if(locationParam["location"] !== undefined){
  var promiseGetDataFromApi = new Promise(function(resolve, reject){
      //Get the data from the API
      $.ajax({
        url: "http://www.forjes.tech/php/get/getDataApi.php",
        type: "GET",
        data: {
          location : locationParam["location"],
        },
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: function (data){
          dataEntries = data;
          if(dataEntries.length === 0){
            window.location.href = "http://www.forjes.tech";
          }
          resolve();
        }, error: function (){
          reject();
        }
      });
  });
}  else {
  window.location.href = "http://www.forjes.tech";
}

promiseGetDataFromApi.then(function(){
    var tempData = new Array(dataEntries.length);
    var humidityData = new Array(dataEntries.length);
    var movementData = new Array(dataEntries.length);
    var photovalData = new Array(dataEntries.length);
    var ppmData = new Array(dataEntries.length);
    var readings = new Array(dataEntries.length);
    for(i = 0 ; i < dataEntries.length; i++){
      tempData[i] = dataEntries[i]['temperature'];
      humidityData[i] = dataEntries[i]['humidity'];
      movementData[i] = dataEntries[i]['movement'];
      photovalData[i] = dataEntries[i]['photoval'];
      ppmData[i] = dataEntries[i]['ppm'];
      readings[i] = dataEntries[i]['time'];
    }
  var tempChart = $("#tempGraph");
  var dataTemp = {
      labels: readings,
      datasets: [
          {
              label: "Temperature over time",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: tempData,
              spanGaps: false,
          }
      ]
  };
  var myTempChart = new Chart(tempChart, {
      type: 'line',
      responsive: true,
      data: dataTemp,
      options: {
          scales: {
              xAxes: [{
                  display: false,
              }],
              yAxes: [{
                  ticks:{
                      beginAtZero: true,
                  },
                  scaleLabel: {
                    display: true,
                    labelString:"Temperature in °C",
                  }
              }],
          },
          animation : false,
      },
  });

  var humidityChart = $("#humidityGraph");
  var dataHumid = {
      labels: readings,
      datasets: [
          {
              label: "Humidity over time",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: humidityData,
              spanGaps: false,
          }
      ]
  };
  var myHumidityChart = new Chart(humidityChart, {
      type: 'line',
      responsive: true,
      data: dataHumid,
       options: {
          scales: {
              xAxes: [{
                  display: false,
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  },
                  scaleLabel: {
                    display: true,
                    labelString:"Humidity in %",
                  }
              }]
          },
          animation : false,
      },
  });
  var movementChart = $("#movementGraph");
  var dataMovement = {
      labels: readings,
      datasets: [
          {
              label: "Movement over time",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: movementData,
              spanGaps: false,
          }
      ]
  };
  var myMovementChart = new Chart(movementChart,{
      type: 'bar',
      responsive: true,
      data: dataMovement,
      options: {
          scales: {
              xAxes: [{
                  display: false,
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  },
                  scaleLabel: {
                    display: true,
                    labelString:"Movement",
                  }
              }]
          },
          animation : false,
      },
  });

  var photoValChart = $("#photovalGraph");
  var dataPhotoVal = {
      labels: readings,
      datasets: [
          {
              label: "Photoresistor value over time",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: photovalData,
              spanGaps: false,
          }
      ]
  };
  var myPhotoValChart = new Chart(photoValChart,{
      type: 'line',
      responsive: true,
      data: dataPhotoVal,
      options: {
          scales: {
              xAxes: [{
                  display: false,
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  },
                  scaleLabel: {
                    display: true,
                    labelString:"Raw data from photoresistor",
                  }
              }],
          },
          animation : false,
      },
  });
  var ppmChart = $("#ppmGraph");
  var dataPpm = {
      labels: readings,
      datasets: [
          {
              label: "CO2 levels(ppm) over time",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: ppmData,
              spanGaps: false,
          }
      ]
  };
  var myPpmChart = new Chart(ppmChart,{
      type: 'line',
      responsive: true,
      data: dataPpm,
      options: {
          scales: {
              xAxes: [{
                  display: false,
              }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  },
                  scaleLabel: {
                    display: true,
                    labelString:"CO2 in ppm",
                  }
              }],
          },
          animation : false,
      },
  });
  $("#title").append(locationParam["location"]);
});

promiseGetDataFromApi.catch(function(e){
    console.error(e);
});

function getURLParam() {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}
