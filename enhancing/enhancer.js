module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {
  name: '',
  durability: 100,
  enhancement: 20
}

function succeed(enhancement) {
  if(enhancement < 20) {
    return { ...item, enhancement: enhancement + 1}
  } else {
    if(enhancement === 20) {
       return { ...item };
    }
  } 
}


function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
