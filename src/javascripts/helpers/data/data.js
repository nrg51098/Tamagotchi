const score = {
  full: 100,
  fun: 50,
  strength: 100,
  energy: 50,
};

const getFull = () => score.full;

const setFull = (func, value) => {
  if (func === 'healthy') {
    if (score.full + value > 100) {
      score.full = 100;
      return;
    }
    score.full += value;
  }
  if (func === 'fatty') {
    if (score.full - value < 0) {
      score.full = 0;
      return;
    }
    score.full -= value;
  }
};

const getFun = () => score.fun;

const setFun = (func, value) => {
  if (func === 'superfun') {
    if (score.fun + value > 100) {
      score.fun = 100;
      return;
    }
    score.fun += value;
  }
  if (func === 'fun') {
    if (score.fun + value > 100) {
      score.fun = 100;
      return;
    }
    score.fun += value;
  }
};

const getStrength = () => score.strength;

const setStrength = (func, value) => {
  if (func === 'brave') {
    if (score.strength + value > 100) {
      score.strength = 100;
      return;
    }
    score.strength += value;
  }
  if (func === 'violent') {
    if (score.strength - value < 0) {
      score.strength = 0;
      return;
    }
    score.strength -= value;
  }
};

const getEnergy = () => score.energy;

const setEnergy = (func, value) => {
  if (func === 'nap') {
    if (score.energy + value > 100) {
      score.energy = 100;
      return;
    }
    score.energy += value;
  }
  if (func === 'deepSleep') {
    if (score.energy + value > 100) {
      score.energy = 100;
      return;
    }
    score.energy += value;
  }
};

export default {
  getFull, setFull, getFun, setFun, getStrength, setStrength, getEnergy, setEnergy,
};
