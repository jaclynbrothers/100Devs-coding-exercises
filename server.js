/* ==========================================================================
    #NASA API FUNCTIONALITY
   ========================================================================== */

const API_KEY = process.env.API_KEY

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
	const choice = document.querySelector('input').value
	const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${choice}`
    console.log(choice)

	fetch(url)
    	.then(res => res.json()) // parse response as JSON
		.then(data => {
        console.log(data)
        if( data.media_type === 'image' ){
            document.querySelector('.largeImage').src = data.hdurl
        }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}