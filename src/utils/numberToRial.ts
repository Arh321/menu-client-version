export function toPersianCurrency(number: number | string) {
  // اطمینان از اینکه ورودی عدد است
  const num = Number(number);
  if (isNaN(num)) return "مقدار نامعتبر";

  // تبدیل عدد به رشته با جداکننده‌های سه‌تایی
  const formattedNumber = num.toLocaleString("fa-IR");

  // اضافه کردن کلمه تومان
  return `${formattedNumber}`;
}
