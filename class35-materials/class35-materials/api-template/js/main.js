//Make an api request using async await

// add a try catch block so you can catch errors

async function getACuteDogPhoto(){
    try{
    const res = await fetch('httpsbroken://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
    }catch (error) {
        console.error('Catch is working: ' + error);
    }
}
getACuteDogPhoto()