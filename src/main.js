import './style.css';
import 'animate.css';
import Swal from 'sweetalert2';

const myImg = document.querySelector('img');
const text = document.querySelector('.card-text-p');
const btnShuffle = document.querySelector('.div-shuffle-button');

btnShuffle.addEventListener('click', () => {

  // random number from 1 to 731 -> characters ids
  const RANDOM_ID = Math.floor(Math.random() * 900 ) + 1
  fetch(`https://superheroapi.com/api.php/499483385541533/${RANDOM_ID}`)
    .then(response => response.json())
    .then(data => addInformation(data))
    .catch(error => {
      Swal.fire({
        title: "Cannot found this character id",
        text: "Try again, press the button!",
        backdrop: "rgba(0, 0, 0, 0.5)",
      })
    })
})

function addInformation({ name, image: { url } }) {
  myImg.src = url;
  myImg.setAttribute('alt', `image of ${name}`);
  myImg.style.visibility = 'visible';
  text.innerText = name;
}