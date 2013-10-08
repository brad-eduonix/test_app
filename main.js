var pictureSource;
var destinationType;

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationTaype;
}

//Capture photo
function takePhoto(){
    navigator.camera.getPicture(onPhotoDataSuccess,onError,{
        quality:50,
        destinationType: destinationType.DATA_URL
    });
}

//Get photo from library
function getPhoto(source){
    navigator.camera.getPicture(onPhotoURISuccess,onError,{
        quality:50,
        destinationType: destinationType.FILE_URI,
        sourceType:source
    });
}

//If we capture a photo
function onPhotoDataSuccess(imageData){
    //Set image handler
    var dataImage = document.getElementById('dataImage');
    
    //Unhide
    dataImage.style.display = 'block';
    
    //Show photo
    dataImage.src = "data:image/jpeg;base64," + imageData;
}

//If we get an image
function onPhotoURISuccess(imageURI){
    //Set image handler
    var uriImage = document.getElementById('uriImage');
    
    //Unhide
    uriImage.style.display = 'block';
    
    //Show photo
    uriImage.src = imageURI;
}

//Handle errors
function onError(error){
    alert('Error: '+ error);
}