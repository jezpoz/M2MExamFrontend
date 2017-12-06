var locations = [];

var promiseGetDataFromApi = new Promise(function(resolve, reject){
    //Get the data from the API
    $.ajax({
      url: "http://www.forjes.tech/php/get/getLocations.php",
      type: "GET",
      dataType: "json",
      success: function (data){
        locations = data;
        resolve();
      }, error: function (){
        reject();
      }
    });
});

promiseGetDataFromApi.then(function(){
  //console.log(locations);
  for(i=0; i<locations.length; i++){
    //$(".content").append("hei");
    var string = "<div><a href=\"/graphs.html?location="+locations[i]["location"]+"\">" + locations[i]["location"] + "</a></div>";
    $(".content").append(string);
  }
});
