const calculateNumber = (type, a, b) => {
  if (type === "SUM") {
    return Math.round(a) + Math.round(b);
  }
  else if (type === "SUBTRACT") {
    return Math.round(b) - Math.round(a);
  }
  else {
    return Math.round(b) === 0 ? "Error" : Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber;
