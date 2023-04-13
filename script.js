const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b1876a960msh751a8520a749a23p1676b6jsn3e9125d86fdb',
		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
	}
};

fetch('https://ronreiter-meme-generator.p.rapidapi.com/images', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    function blobToBase64(blob) {
        return new Promise((resolve, _) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      }
let topText = document.querySelector('.top-text')
let bottomText = document.querySelector('.bottom-text')
let memeImg = document.querySelector('.meme-img')
let btn = document.querySelector('.generate-btn')



// mem generator api request
function generateMeme () {
   fetch(`https://ronreiter-meme-generator.p.rapidapi.com/meme?top=${topText.value}&bottom=${bottomText.value}&meme=Barba&font_size=50&font=Impact`, options)
	.then(response => response.blob())
	.then(response => blobToBase64(response))
    .then(image => memeImg.src = image)
	.catch(err => console.error(err));
}

btn.addEventListener('click', generateMeme)