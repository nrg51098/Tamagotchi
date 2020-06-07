/* //define the full variable
//create two buttons one to add and other to substract
//print to DOM showing name, fullness score and the two buttons with click events to add and substract */

import full from '../../helpers/data/data';
import utils from '../../helpers/utils';


const braveMethod = () => {
  full.setStrength('brave', 1);
  document.querySelector('#strengthScore').innerHTML = full.getStrength();
};

const violentMethod = () => {
  full.setStrength('violent', 10);
  document.querySelector('#strengthScore').innerHTML = full.getStrength();
};

const eventHandlers = () => {
  document.querySelector('#brave').addEventListener('click', braveMethod);
  document.querySelector('#violent').addEventListener('click', violentMethod);
};

const fight = () => {
  let domString = '<div>';
  domString += '<h1> Fight </h1>';
  domString += `<h1 id='strengthScore'> ${full.getStrength()} </h1>`;
  domString += '<button id="brave"> Brave </button>';
  domString += '<button id="violent"> Violent </button>';
  domString += '</div>';

  utils.printToDom('#fight', domString);

  eventHandlers();
};


export default { fight };
