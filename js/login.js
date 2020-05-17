$(document).on('click', '#icon',function(){
  $("#modal-body").children().remove();
  for (var i = 1; i < 65; i++) {
    $('#modal-body').append('<img class="select-icon" src="./icon/icon'+i+'.png" alt="" data-dismiss="modal">');
  }
});

$(document).on('click', '.select-icon',function(){
  let img = $(this).attr('src');
  $('#icon').children('img').attr('src', img);
});

$(function(){
  const randomIcon = Math.floor(Math.random() * Math.floor(64));
  const img = "./icon/icon" + String(randomIcon+1) + ".png";
  $('#icon').children('img').attr('src', img);
});
