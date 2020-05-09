players = [{
    "name": "p1",
    "url": './img/dog.png'
  },
  {
    "name": "p2",
    "url": "./img/dog.png"
  },
  {
    "name": "p3",
    "url": "./img/dog.png"
  },
  {
    "name": "p4",
    "url": "./img/dog.png"
  },
]

const fingers = {
  "left": ["./img/myLeftDown.png", "./img/myLeftUp.png"],
  "right": ["./img/myRightDown.png", "./img/myRightUp.png"]
};

function rotate() {
  let tmp = players[players.length - 1];
  for (let i = players.length - 1; i > 0; i--) {
    players[i] = players[i - 1];
  }
  players[0] = tmp;
  let player;
  players.forEach(element => {
    player = '<div class="item"><span class="name">' + element.name + '</span><div class="circle-item" style="background-image:url(' + element.url + ')";></div ></div > ';
    $(".circle-box").append(player);
    var item_num = $('div.item').length;
    var deg = 360.0 / item_num;
    var red = (deg * Math.PI / 180.0);
    var circle_r = $("div.item").width() * 3;

    $('div.item').each(function(i, elem) {
      var x = Math.cos(red * i) * circle_r + circle_r;
      var y = Math.sin(red * i) * circle_r + circle_r;
      $(elem).css('left', x);
      $(elem).css('top', y);
    });
  });
}

function prestart() {
  for (var i = players.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = players[i];
    players[i] = players[r];
    players[r] = tmp;
  }
}
