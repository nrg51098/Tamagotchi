/* //define the full variable
//create two buttons one to add and other to substract
//print to DOM showing name, fullness score and the two buttons with click events to add and substract */

import full from '../../helpers/data/data';
import utils from '../../helpers/utils';


const superFunMethod = () => {
  full.setFun('superfun', 50);
  document.querySelector('#funScore').innerHTML = full.getFun();
};

const funMethod = () => {
  full.setFun('fun', 2);
  document.querySelector('#funScore').innerHTML = full.getFun();
};

const eventHandlers = () => {
  document.querySelector('#superfun').addEventListener('click', superFunMethod);
  document.querySelector('#fun').addEventListener('click', funMethod);
};

const play = () => {
  let domString = '<div>';
  domString += '<h1> Play </h1>';
  domString += `<h1 id='funScore'> ${full.getFun()} </h1>`;
  domString += '<button id="superfun"> SuperFun </button>';
  domString += '<button id="fun"> Fun </button>';
  domString += '</div>';

  utils.printToDom('#play', domString);

  eventHandlers();
};


export default { play };
