

function changeColor(color){
    var imgs = document.getElementById('gallery').getElementsByTagName('img');
    for(var i = 0 ; i < imgs.length ; i++ ){
        imgs[i].style.borderColor = color;
    }
}

function resetColorOfImage(){
    var imgs = document.getElementById('gallery').getElementsByTagName('img');
    var isBlack = false;
    for(var i = 0 ; i < imgs.length ; i++ ){
        if(imgs[i].style.borderColor == 'rgb(0, 0, 0)')
            isBlack = true;
    }
    if(!isBlack)
        alert("Image border is going to be reset now")
    changeColor('#000')
}
function changeColorToRed(){
    changeColor('#ff0000')
}
function changeColorToOrange(){
    changeColor('#FFA500')
}
function changeColorToGreen(){
    changeColor('#00FF00')
}