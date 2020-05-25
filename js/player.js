players = [{
    'userName': 'p1',
    'icon': './icon/icon1.png'
  },
  {
    'userName': 'p2',
    'icon': './icon/icon2.png'
  },
  {
    'userName': 'p3',
    'icon': './icon/icon3.png'
  },
  {
    'userName': 'p4',
    'icon': './icon/icon4.png'
  },
]

const fingers = {
  'left': ['./img/myLeftDown.png', './img/myLeftUp.png'],
  'right': ['./img/myRightDown.png', './img/myRightUp.png']
};


function prestart() {
  for (var i = players.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = players[i];
    players[i] = players[r];
    players[r] = tmp;
  }
}
