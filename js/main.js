$(function(){

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
  let playersFingers = $(".fingers ,.my-fingers").find("img");
  $.each(playersFingers,function(){
    if ($(this).attr('src').indexOf("Up") != -1 ) {count += 1;}
  });
  return count;
}

//指の総数
function countHands() {
  let playersFingers = $(".fingers").find("img");
  let myFingers = $(".my-fingers").find("img");
  return playersFingers.length + myFingers.length;
}

// リセット
function reset() {
  let count = countHands();
  $('.numbars').find('span').text(count+"本");
  $(".left").find("img").attr("src", "./img/leftDown.png");
  $(".right").find("img").attr("src", "./img/rightDown.png");
  $(".my-left").find("img").attr("src", "./img/myLeftDown.png");
  $(".my-right").find("img").attr("src", "./img/myRightDown.png");
  $('.text-two').addClass('hidden');
  $('.result').text("");
  $('.hon').text("");
  $(".answer").text("");
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

  setTimeout(function(){
    $('#modal2').modal('show');
  },1000);

  setTimeout(function(){
    $('#modal2').modal('hide');
  },2000);

  setTimeout(function(){
    userInf();
    $(".answer").text(num);
  },2500);

  setTimeout(function(){
    $('.text-two').removeClass('hidden');
  },4000);

  setTimeout(function(){
    $('.result').text(countUps());
    $('.hon').text("本");
  },5000);

  setTimeout(function(){
    judgeReset();
    judge(num,countUps());
    $('#modal3').modal('show');
  },5900);

  setTimeout(function(){
    $('#modal3').modal('hide');
  },7800);

  setTimeout(function(){
    reset();
  },8500);


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

function judge(num,countUps) {
  if (num == countUps) {
    $('#modal3').find('.modal-content').addClass('win');
    $('#modal3').find('h2').text('Win!!');
    $('#modal3').find('h3').text('おめでとう');
  } else {
    $('#modal3').find('.modal-content').addClass('lose');
    $('#modal3').find('h2').text('Lose...');
    $('#modal3').find('h3').text('ざんんねん');
  }
}

function judgeReset() {
  var $modal = $('#modal3').find('.modal-content');
  if ($modal.hasClass('win')) {
    $modal.removeClass('win');
  } else if ($modal.hasClass('lose')) {
    $modal.removeClass('lose');
  }
}
