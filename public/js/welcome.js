var pictureUrls = [];
var counter = 0;
var counterStop;

// The API object contains methods for each kind of request we'll make
var API = {
  getFront: function() {
    return $.ajax({
      type: "GET",
      url: "/api/front"
    });
  }
};

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});

$(document).ready(function() {
  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});

API.getFront().then(function(data) {
  for (var i = data.length - 1; i >= 0; i--) {
    pictureUrls.push(data[i]);
  }
  start();
});
//==============================================================//
// Infinity scroll
//front page scroll pictures
$(window).scroll(function() {
  if ($(window).scrollTop() === $(document).height() - $(window).height()) {
    counterStop = counter + 12;
    for (var i = counter; i < counterStop; i++) {
      if (counter >= pictureUrls.length) {
        console.log("No more pictures!");
      } else {
        counter += 1;
        $("#containerFront").append(
          "<div class='card mb-3' id='divOne'><img id='pictures' style='height: 200px; width: 100%; display: block;' src='" +
            pictureUrls[i].url +
            "'>"
        );
      }
    }
  }
});

var start = function() {
  counterStop = counter + 12;
  for (var i = counter; i < counterStop; i++) {
    if (counter >= pictureUrls.length) {
      console.log("No more pictures!");
    } else {
      counter += 1;
      $("#containerFront").append(
        "<div class='card mb-3' id='divOne''><img id='pictures' style='height: 200px; width: 100%; display: block;' src='" +
          pictureUrls[i].url +
          "'>"
      );
    }
  }
};
