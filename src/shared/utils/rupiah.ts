export const numberToRupiah = (number: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

export const numberFromRupiah = (str: string) => {
  const temp = str.match(/\d/g) ?? [];
  return temp.join("");
};

export const isNumber = (num: number) => !isNaN(num);
