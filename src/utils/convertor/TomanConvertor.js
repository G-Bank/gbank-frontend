const TomanConverter = (toman) => {
  return <>{toman === 0 || toman === '0' ? <span>رایگان</span> : `${(toman * 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}</>;
};

const Numbers = {
  '1': '۱',
  '2': '۲',
  '3': '۳',
  '4': '۴',
  '5': '۵',
  '6': '۶',
  '7': '۷',
  '8': '۸',
  '9': '۹',
  '0': '۰',
};
export const getPersianNumber = number => {
  if (number == null || number === false) {
    return '';
  }
  const _numbers = String(number);
  let _string = '';
  for (let i = 0, len = _numbers.length; i < len; i++) {
    if (Numbers[_numbers[i]]) {
      _string += Numbers[_numbers[i]];
    } else {
      _string += _numbers[i];
    }
  }
  return _string;
};

export default TomanConverter;
