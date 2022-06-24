$(document).ready(function(){
//variable 
$surface=$('.surface');
$car=$('.car');
$img=$('.car img')
let flag=true;

const cars=['img/Img_05.png','img/Img_06.png']

//keepress event
$(document).on('keypress', function(e){
if(e.which==119){
    if(flag){
        flag=false;
        $img.attr('src',cars[0])
    }else{
        flag=true;
        $img.attr('src',cars[0])
    }
}
})


});