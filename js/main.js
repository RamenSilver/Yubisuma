$(function(){
  let count = countHands();
  $('span').text(count);

//change

});

//fingerが押された場合
$(document).on("click", "#left", function() {
  //押される前のfingerを判断
  let currentFingerImage = $("#left").children().first().attr("src");
  const nextFingerImageIndex = fingers.left.findIndex(function(element) {
    return element != currentFingerImage;
  });
  $("#left").children().first().attr("src", fingers.left[nextFingerImageIndex]);
});

$(document).on("click", "#right", function() {
  //押される前のfingerを判断
  let currentFingerImage = $("#right").children().first().attr("src");
  const nextFingerImageIndex = fingers.right.findIndex(function(element) {
    return element != currentFingerImage;
  });
  $("#right").children().first().attr("src", fingers.right[nextFingerImageIndex]);
});

//指が上がっている数を取得
function countUps() {
  let count = 0;
  let playersFingers = $(".content").find("img");
  playersFingers.forEach((item) => {
    if (item.attr("src").indexOf("Up") != -1 ) {count += 1;}
  });
  return count;
}
function countHands() {
  let playersFingers = $(".fingers").find("img");
  let myFingers = $(".my-fingers").find("img");
  return playersFingers.length + myFingers.length;
}

// モーダル 「いくつで勝負？」
$(document).on("click", "#select", function(){
  let count = countHands();
  $("#modal-body").children().remove();
 for (var i = 0; i < count+1; i++) {
   $("#modal-body").append('<button type="button" class="btn btn-primary select" data-dismiss="modal">'+i+'</button>');
 }
});



$(document).on("click", ".select", function(){
  let num = $(this).text();
  $("#modal-body2 h2").text(num);

});
