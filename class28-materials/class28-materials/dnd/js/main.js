//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.subclasses);
        // console.log(data.subclasses[0].name);
        // console.log(data.subclasses[1].name);
        data.subclasses.forEach( obj => {
            console.log(obj.name)
            // create an li
            const li = document.createElement('li')
            // add text to li
            li.textContent = obj.name
            // append the li to the ul
            document.querySelector('ul').appendChild(li) // would innerText work? try it! nope, it said innerText is not a function. 
        } ) //append (put something in or on) to the dom, el is element. now we are looping through an array of objects. 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// how to remove stuff from the DOM (clear the lis) for hw. aka how to remove the child. watch mayanwolfe's last vod***