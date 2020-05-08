$(function () {
  console.log("a");
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
  let playersFingers = $("content").find("img");
  playersFingers.forEach((item) => {
    if (item.indexOf("Up") != -1 ) {count += 1;}
  });
}
