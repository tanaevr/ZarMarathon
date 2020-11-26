function toCapitalizeFirstLetter(str: string | undefined) {
  if(str === undefined) return false;
  const result = `${str.charAt(0).toUpperCase()}${str.toLowerCase().slice(1)}`;

  return result;
}

export default toCapitalizeFirstLetter;