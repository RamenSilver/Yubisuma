$(function(){
  let count = countHands();
  $('.my-number1').find('span').text(count);

  reset();

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

//指の総数
function countHands() {
  let playersFingers = $(".fingers").find("img");
  let myFingers = $(".my-fingers").find("img");
  return playersFingers.length + myFingers.length;
}

//指の総数
function countHandsUp() {
  let count = 0;
  let playersFingers = $(".fingers").find("img").attr("src").indexOf("Up");
  let myFingers = $(".my-fingers").find("img").attr("src").indexOf("Up");
  return playersFingers.length + myFingers.length;
}

function reset() {
  $(".left").find("img").attr("src", "./img/leftDown.png");
  $(".right").find("img").attr("src", "./img/rightDown.png");
  $(".my-left").find("img").attr("src", "./img/myLeftDown.png");
  $(".my-right").find("img").attr("src", "./img/myRightDown.png");
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

  reset();
  $(".text-one").text("");
  $(".text-two").text("");

  setTimeout(function(){
    $(".text-one").text("いっせーのっせ！");
  },1000);

  setTimeout(function(){

    userInf();
    $('.fingersUpSum').find('span').text(countHandsUp());

    $(".text-two").text(num);
  },2500);

});

function userInf() {
  // var ary = [
  //   ["player1", "./img/leftUp.png", "./img/rightUp.png"],
  //   ["player2", "./img/leftDown.png", "./img/rightDown.png"],
  //   ["player3", "./img/leftUp.png", "./img/rightUp.png"],
  //   ["player4", "./img/leftDown.png", "./img/rightDown.png"],
  //   ["player5", "./img/leftUp.png", "./img/rightDown.png"],
  //   ["player6", "./img/leftDown.png", "./img/rightUp.png"],
  //   ["player7", "./img/leftUp.png", "./img/rightDown.png"],
  //   ["player8", "./img/leftDown.png", "./img/rightDown.png"],
  //   ["my", "./img/myLeftUp.png", "./img/myRightDown.png"],
  // ];

  var ary = [
    ["player1", leftRdm(), rightRdm()],
    ["player2", leftRdm(), rightRdm()],
    ["player3", leftRdm(), rightRdm()],
    ["player4", leftRdm(), rightRdm()],
    ["player5", leftRdm(), rightRdm()],
    ["player6", leftRdm(), rightRdm()],
    ["player7", leftRdm(), rightRdm()],
    ["player8", leftRdm(), rightRdm()],
    ["my", "./img/myLeftUp.png", "./img/myRightDown.png"],
  ];

  for (var i = 0; i < ary.length; i++) {
    $('.content').find('[name='+ary[i][0]+']').find(".left img,#left img").attr("src",ary[i][1]);
    $('.content').find('[name='+ary[i][0]+']').find(".right img,#right img").attr("src",ary[i][2]);
  }

}

function leftRdm() {
  const randomIcon = Math.floor(Math.random() * Math.floor(2));
  if (randomIcon==1) {
    return "./img/leftUp.png"
  } else {
    return "./img/leftDown.png"
  }
}

function rightRdm() {
  const randomIcon = Math.floor(Math.random() * Math.floor(2));
  if (randomIcon==1) {
    return "./img/rightUp.png"
  } else {
    return "./img/rightDown.png"
  }
}
