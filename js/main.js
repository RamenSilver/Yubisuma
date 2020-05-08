const turnImageSize = 150;

function deckShuffle() {
  for (var i = cards.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = cards[i];
    cards[i] = cards[r];
    cards[r] = tmp;
  }
}

let onMission = false;
let onHand;
$(function () {
  prestart();
  deckShuffle();
  rotate();
  let turn = $(".circle-box").children().first();


  turn.width(turnImageSize);
  turn.height(turnImageSize);

  $(".deck").on("click", function () {
    onMission = true;
    onHand = cards.pop();
    $("h2").html("残り" + String(cards.length));

    $(".table").addClass("active1");
    $(".table").removeClass("active2");

    $(".onhand").css({ backgroundImage: 'url(' + onHand.url + ')' });
    let cardDetail = "";
    cardDetail += '<div class="card" style="width: 20rem; justify-content: center;">';
    cardDetail += '<img class="card-img-top" src=';
    cardDetail += onHand.url;
    cardDetail += ' alt="pic">';
    cardDetail += '<div class="card-body"><p class="card-text">'
    cardDetail += onHand.exp;
    cardDetail += '</p><button id="clear" class="btn btn-primary">CLEAR!</button></div></div>'
    setTimeout(() => {
      $(".card-detail").html(cardDetail);
    }, 680);

  })

});


$(document).on("click", "#clear", function () {
  $(".card-img-top").attr("src", "");
  $(".card-detail").html("");
  $(".table").removeClass("active1");
  $(".table").addClass("active2");
  onMission = false;
  $(".circle-box").html("");
  rotate();
  let turn = $(".circle-box").children().first();
  turn.width(turnImageSize);
  turn.height(turnImageSize);
  turn.addClass("myturn");
  $(".real").css({ backgroundImage: 'url(' + onHand.url + ')' });
});

$(document).keypress(function (event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    if (onMission) {

      $("#clear").click();
    }
    else {
      $(".deck").click();
    }
  }

});