import * as util from './index';

//保留小数位，acc为保留几位小数位
export function toFixed (val, acc) {  
    let num = parseFloat(val);
    if (isNaN(num)) {
        num = 0;
    }
    let accuracy = parseInt(acc);
    if (isNaN(accuracy) || accuracy < 0 || accuracy > 10) {
        accuracy = 2;
    }
    return num.toFixed(accuracy);
}

//小数转百分比 ，acc为保留小数位
export function toPercent (val, acc) {  
    let num = parseFloat(val);
    if (isNaN(num)) {
        num = 0;
    }   
    let accuracy = parseInt(acc);
    if (isNaN(accuracy) || accuracy < 0 || accuracy > 10) {
        accuracy = 2;
    }
    return (num * 100).toFixed(accuracy) + "%"
}


function _toFixed(num, precision) {
    return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
}

//{{ amount | currency }}   // 12345 => $12,345.00
//{{ amount | currency('£') }}   // 12345 => £12,345.00
//{{ amount | currency('₽', 0) }} // 12345 => ₽12,345
//{{ amount | currency('$', 0, { thousandsSeparator: '.' }) }} // 12345 => $12.345
//{{ amount | currency('$', 2, { decimalSeparator: ',' }) }} // 12345 => $12,345,00
//{{ amount | currency('$', 0, { symbolOnLeft: false }) }} // 12345 => 12,345$
//{{ amount | currency('$', 0, { spaceBetweenAmountAndSymbol: true }) }} // 12345 => $ 12,345
//{{ amount | currency('kr', 2, { symbolOnLeft: false, spaceBetweenAmountAndSymbol: true }) }} // 12345 => 12,345.00 kr
export function currency (value, symbol, decimals, options) {
    const globalOptions = (this && this.currency) ? this.currency : {}
    symbol = util.exist(symbol) ? symbol : globalOptions.symbol
    decimals = util.exist(decimals) ? decimals : globalOptions.decimalDigits
    options = options || globalOptions
    var thousandsSeparator, symbolOnLeft, spaceBetweenAmountAndSymbol
    var digitsRE = /(\d{3})(?=\d)/g
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    symbol = (typeof symbol !== 'undefined') ? symbol : '$'
    decimals = (typeof decimals !== 'undefined') ? decimals : 2
    thousandsSeparator = options.thousandsSeparator != null ? options.thousandsSeparator : ','
    symbolOnLeft = options.symbolOnLeft != null ? options.symbolOnLeft : true
    spaceBetweenAmountAndSymbol = options.spaceBetweenAmountAndSymbol != null ? options.spaceBetweenAmountAndSymbol : false
    var number = Math.abs(value)
    var stringified = _toFixed(number, decimals)
    stringified = options.decimalSeparator
      ? stringified.replace('.', options.decimalSeparator)
      : stringified
    var _int = decimals
      ? stringified.slice(0, -1 - decimals)
      : stringified
    var i = _int.length % 3
    var head = i > 0
      ? (_int.slice(0, i) + (_int.length > 3 ? thousandsSeparator : ''))
      : ''
    var _float = decimals
      ? stringified.slice(-1 - decimals)
      : ''
    symbol = spaceBetweenAmountAndSymbol
      ? (symbolOnLeft ? symbol + ' ' : ' ' + symbol)
      : symbol
    symbol = symbolOnLeft
      ? symbol + head +
        _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float
      : head +
        _int.slice(i).replace(digitsRE, '$1' + thousandsSeparator) + _float + symbol
    var sign = value < 0 ? '-' : ''
    return sign + symbol
  }
  
  