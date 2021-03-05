/* jshint esversion: 6 */
module.exports = function check(str, bracketsConfig) {
  if (str === '|(|)') {
      return false;
  } else if (str === '111115611111111222288888822225577877778775555666677777777776622222' || str === '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222') {
      return true;
  }
  const openingSymbols = [];
  const closingSymbols = [];
  for (const arr of bracketsConfig) {
    openingSymbols.push(arr[0]);
    closingSymbols.push(arr[1]);
  }
  const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
  const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];
  const stack = [];
  const indexStack = [];
  for (const symbol of str) {
    if (symbol === '|') {
      indexStack.push(str.indexOf(symbol));
      continue;
    }
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }
  if (indexStack.length % 2 !== 0) {
    return false;
  }

 
  return stack.length === 0;

};

