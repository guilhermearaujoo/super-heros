import './style.css';
import 'animate.css';
import Swal from 'sweetalert2';

const myImg = document.querySelector('img');
const text = document.querySelector('.card-text-p');
const btnShuffle = document.querySelector('.div-shuffle-button');

function addInformation({ name, image: { url } }) {
  myImg.src = url;
  myImg.setAttribute('alt', `image of ${name}`);
  myImg.style.visibility = 'visible';
  text.innerText = name;
}
const MAX_ID = 735;
const randonId = () => Math.floor(Math.random() * MAX_ID) + 1;

btnShuffle.addEventListener('click', () => {
  // random number from 1 to 731 -> characters ids
  fetch(`https://superheroapi.com/api.php/499483385541533/${randonId()}`)
    .then((response) => response.json())
    .then((data) => addInformation(data))
    .catch((error) => {
      Swal.fire({
        title: 'Cannot found this character id',
        text: `${error.message}`,
        backdrop: 'rgba(0, 0, 0, 0.5)',
      });
    });
});
