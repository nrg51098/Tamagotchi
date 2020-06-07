/* //define the full variable
//create two buttons one to add and other to substract
//print to DOM showing name, fullness score and the two buttons with click events to add and substract */

import full from '../../helpers/data/data';
import utils from '../../helpers/utils';


const napMethod = () => {
  full.setEnergy('nap', 50);
  document.querySelector('#energyScore').innerHTML = full.getEnergy();
};

const deepSleepMethod = () => {
  full.setEnergy('deepSleep', 60);
  document.querySelector('#energyScore').innerHTML = full.getEnergy();
};

const eventHandlers = () => {
  document.querySelector('#nap').addEventListener('click', napMethod);
  document.querySelector('#deepSleep').addEventListener('click', deepSleepMethod);
};

const sleep = () => {
  let domString = '<div>';
  domString += '<h1> Sleep </h1>';
  domString += `<h1 id='energyScore'> ${full.getEnergy()} </h1>`;
  domString += '<button id="nap"> Nap </button>';
  domString += '<button id="deepSleep"> Deep Sleep </button>';
  domString += '</div>';

  utils.printToDom('#sleep', domString);

  eventHandlers();
};


export default { sleep };
