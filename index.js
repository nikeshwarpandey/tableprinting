const tablePrint = (n) => {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${n} x ${i} = ${n * i}\n`;
  }
  return table;
};

module.exports = tablePrint;
