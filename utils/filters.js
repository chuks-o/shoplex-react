export const moneyFormat = amount => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2
  });

  return formatter.format(amount);
};

export const dateFormat = value => {
  const date = new Date(value);

  return date.toDateString();
};
