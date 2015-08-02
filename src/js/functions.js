ADS = false;
adsXMLUrl = '';
console.log('-------------->'+ ADS);

//BlueseedConfig = null;
//
//$(".boxplay").click(function() {
//    index = 0;
//    setInterval(function () {
//        if(typeof rbynapz != "undefined"){
//            rbynapz = false;
//            isShowAds = false;
//            index++;
//            console.log('HDViet -------------->'+ rbynapz);
//        }
//    }, 500);
//    return false
//});

$('#divOverlay').css('display' , 'none!important');
$('#divStar').css('display' , 'none!important');
$('.banner_player_img').click(function(evt){
	setTimeout(function(){
		totalPlayedPreroll = 10;
		totalPreroll = 5;
		switchMainPlayer();
	}, 1000);	
});