import { isNumber, numberFromRupiah, numberToRupiah } from "./rupiah";

test("1 is Number", () => {
  expect(isNumber(1)).toBe(true);
});

test("Number to rupiah format", () => {
  expect(numberToRupiah(1000)).toBe("Rp\u00a01.000");
});

test("Number from rupiah format", () => {
  expect(numberFromRupiah("Rp 1.000")).toBe(1000);
});
