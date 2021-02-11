$(document).ready(function() {
  
  // put javascript code here
  console.log("page has loaded!");
  
  $(function () {
        $("#japanese, #lao, #viet, #taiwan, #filipino, #chinese,#srilankan, #indian, #malay, #indo, #pakistani, #thai, #bangladeshi, #hmong, #korean, #cambodian").draggable();
    });
    
    
    $('#homeanswer').click(function () {
        $('#hometext').toggle();
    });
    
     $('#povertyanswer').click(function () {
        $('#povertytext').toggle();
    });
    
    
     $('#hsanswer').click(function () {
        $('#hstext').toggle();
    });
    
    
    
});

