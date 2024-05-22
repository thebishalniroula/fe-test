const couponRegex = /^[A-Za-z]{5}\d{2}$/;

const generateCoupon = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const coupon: string[] = [];
  for (let i = 0; i < 5; i++) {
    coupon.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  for (let i = 0; i < 2; i++) {
    coupon.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  return coupon.join("");
};
export { generateCoupon, couponRegex };
