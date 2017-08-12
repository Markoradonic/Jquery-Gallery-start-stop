var imagesUrls = new Array();
var intervaId;
var starButton = $('#btnStarSlideShow');
var stopButton = $('#btnStopSlideShow');
 

/*Gurnuli smo svaku sliku u nas array (imagesUrls)*/
/*Sada u nasem imagesUrls imamo svaku sliku*/
$('#divContainer img').each(function () {
    imagesUrls.push($(this).attr('src'));
});

function setImage(){
    var mainImagleElement = $('#Glavna');
    var currnetImageURL = mainImagleElement.attr('src'); /*Sada je u ovoj varijabli src*/
    var currentImgIndex = $.inArray(currnetImageURL, imagesUrls);
   if(currentImgIndex == (imagesUrls.length -1))
       {
           currentImgIndex = -1;
       }
    mainImagleElement.attr('src', imagesUrls[currentImgIndex+1])
};

starButton.click(function(){
    intervaId = setInterval(setImage, 3000);
    $(this).attr('disabled', 'disabled');
    stopButton.removeAttr('disabled')
});

stopButton.click(function(){
    clearInterval(intervaId);
    $(this).attr('disabled', 'disabled');
     starButton.removeAttr('disabled')
    
}).attr('disabled', 'disabled');

 