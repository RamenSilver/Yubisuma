
$(document).on('click', '.select-icon',function(){
  let img = $(this).attr('src');
  $('#icon').children('img').attr('src', img);
});
