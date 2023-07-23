async function fetchAlbums() {
  try {
    const response = await fetch('albums.json');
    if (!response.ok) {
      throw new Error('Error fetching JSON: ' + response.status);
    }
    const data = await response.json();
    return data.albums;
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

async function renderAlbums() {
  try {
    const albumsData = await fetchAlbums();
    const albumGridElement = document.querySelector('.js-albums-grid');

    albumsData.forEach((album, i) => {
      albumGridElement.innerHTML += `
      <div class="album" data-album-name="${album.name}">
        <img name="js-album-cover-${i}" id="js-album-cover-${i}" src="covers/${album.cover}" alt="${album.name}">
        <p>${album.name} (${album.year})</p>
      </div>
      `;
    });

    const albumDivElements = document.querySelectorAll('.album');
    albumDivElements.forEach(albumDivElement => albumDivElement.addEventListener('click', change));
  } catch (error) {
    console.error(error);
  }
}

renderAlbums();

function change() {
  const bodyStyle = document.getElementsByTagName('body')[0].style;
  const fearlessCoverStyle = document.getElementById('js-album-cover-1').style;
  const albumDivsStyle = document.querySelector('.album').style;
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

    this.style.border = 'none';
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

    this.style.border = '10px solid red';
  }
}