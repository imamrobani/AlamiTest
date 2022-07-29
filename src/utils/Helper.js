export const formatRupiah = (num, withPrefix = true) => {
  var curr = num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return (withPrefix ? 'Rp' : '') + curr?.replace(/,/g, '.');
};

export const addThounsandSeparator = (str) => {
  const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, '');
  return addCommas(removeNonNumeric(str));
};
