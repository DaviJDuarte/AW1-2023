const albums = [
  {
    name: 'Taylor Swift',
    year: 2006,
    cover: 'Taylor_Swift.png'
  },
  {
    name: 'Fearless',
    year: 2008,
    cover: 'Fearless.png'
  },
  {
    name: 'Speak Now',
    year: 2010,
    cover: 'Speak_Now.jpg'
  },
  {
    name: 'Red',
    year: 2012,
    cover: 'Red.webp'
  },
  {
    name: '1989',
    year: 2014,
    cover: '1989.jpg'
  },
  {
    name: 'reputation',
    year: 2017,
    cover: 'reputation.jpg'
  },
  {
    name: 'Lover',
    year: 2019,
    cover: 'Lover.webp'
  },
  {
    name: 'folklore',
    year: 2020,
    cover: 'folklore.webp'
  },
  {
    name: 'Evermore',
    year: 2020,
    cover: 'evermore.jpeg'
  },
  {
    name: 'Midnights',
    year: 2022,
    cover: 'Midnights.jpeg'
  }
];

renderAlbums();

function renderAlbums() {
  albumGridElement = document.querySelector('.js-albums-grid');

  albums.forEach(function (album, i) {
    albumGridElement.innerHTML += `
    <div class="album">
      <img name="js-album-cover-${i}" id="js-album-cover-${i}" src="covers/${album.cover}" alt="${album.name}">
      <p>${album.name} (${album.year})</p>
    </div>
    `;
  });
}

const albumDivElements = document.getElementsByClassName('album');

Array.from(albumDivElements).forEach(function (albumDivElement) {
  albumDivElement.addEventListener('click', change);
});

function change() {
  const bodyStyle = document.getElementsByTagName('body')[0].style;
  const fearlessCoverStyle = document.getElementById('js-album-cover-1').style;
  const albumDivsStyle = document.querySelector('.albums .album').style;
  const thirdAlbumDivStyle = document.getElementsByClassName('album')[3].style;
  const speakNowCoverStyle = document.getElementsByName('js-album-cover-2')[0].style;

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