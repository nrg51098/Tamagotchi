/* //define the full variable
//create two buttons one to add and other to substract
//print to DOM showing name, fullness score and the two buttons with click events to add and substract */

import full from '../../helpers/data/data';
import utils from '../../helpers/utils';


const healthyMethod = () => {
  full.setFull('healthy', 10);
  document.querySelector('#eatScore').innerHTML = full.getFull();
};

const fattyMethod = () => {
  full.setFull('fatty', 3);
  document.querySelector('#eatScore').innerHTML = full.getFull();
};

const eventHandlers = () => {
  document.querySelector('#healthy').addEventListener('click', healthyMethod);
  document.querySelector('#fatty').addEventListener('click', fattyMethod);
};

const eat = () => {
  let domString = '<div>';
  domString += '<h1> Eat </h1>';
  domString += `<h1 id='eatScore'> ${full.getFull()} </h1>`;
  domString += '<button id="healthy"> Healthy </button>';
  domString += '<button id="fatty"> Fatty </button>';
  domString += '</div>';

  utils.printToDom('#eat', domString);

  eventHandlers();
};


export default { eat };
