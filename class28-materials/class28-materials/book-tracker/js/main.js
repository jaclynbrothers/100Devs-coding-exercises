document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        if(!localStorage.getItem('books')){ // if it's false (null), we need to go ahead put something into local storage. the ! makes it true, the conditional only runs if it is true.
          localStorage.setItem('books', data.title)
        }else{ 
          let books = localStorage.getItem('books') + " ; " + data.title //whatever we grabbed in localStorage and add another title
          localStorage.setItem('books', books) // take whole new string and put into localStorage
        }
        // put title into localStorage
        // let books = localStorage.getItem('books') + " ; " + data.title //whatever we grabbed in localStorage and add another title
        // localStorage.setItem('books', books) // take whole new string and put into localStorage
        document.querySelector('h2').innerText = localStorage.getItem('books') //get the value out of storage and put it into the DOM
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

