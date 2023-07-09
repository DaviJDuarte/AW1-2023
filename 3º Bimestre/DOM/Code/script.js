const albumDiv = document.getElementsByClassName('album');

for (let i = 0; i < albumDiv.length; i++) {
  albumDiv[i].addEventListener('click', change);
}

function change() {
  const bodyStyle = document.getElementsByTagName('body')[0].style;
  const fearlessCoverStyle = document.getElementById('fearless-cover').style;
  const albumDivsStyle = document.querySelector('.albums .album').style;
  const thirdAlbumDivStyle = document.getElementsByClassName('album')[3].style;
  const speakNowCoverStyle = document.getElementsByName('speak-now')[0].style;

  if (bodyStyle.color === 'black') {
    bodyStyle.color = 'white';
    bodyStyle.filter = 'none';

    fearlessCoverStyle.transform = 'none';
    fearlessCoverStyle.filter = 'none';

    albumDivsStyle.filter = 'none';
    albumDivsStyle['font-family'] = "'Roboto', sans-serif";

    thirdAlbumDivStyle.padding = '0';
    thirdAlbumDivStyle['background-color'] = 'rgba(0, 0, 0, .2)';

    speakNowCoverStyle.transform = 'none';

    this.style.border = 'none'
  } else {
    bodyStyle.color = 'black';
    bodyStyle.filter = 'brightness(70%)';

    fearlessCoverStyle.transform = 'rotate(180deg)';
    fearlessCoverStyle.filter = 'blur(2px)';

    albumDivsStyle.filter = 'blur(1px)';
    albumDivsStyle['font-family'] = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    thirdAlbumDivStyle.padding = '20px';
    thirdAlbumDivStyle['background-color'] = 'rgba(255, 0, 0, .4)';

    speakNowCoverStyle.transform = 'skewX(15deg)';
    speakNowCoverStyle.transform += 'scale(.7)';

    this.style.border = '10px solid red'
  }
}