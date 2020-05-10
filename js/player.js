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


function prestart() {
  for (var i = players.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = players[i];
    players[i] = players[r];
    players[r] = tmp;
  }
}
