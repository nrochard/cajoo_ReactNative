export const validatePhone = phone => {
  return String(phone).match(/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/);
};

export default validatePhone;
