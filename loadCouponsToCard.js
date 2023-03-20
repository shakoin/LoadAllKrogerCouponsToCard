const maxCouponsAllowed = 150;
const loadCouponToCardClassName = "CouponActionButton";

for (let i = 0; i < maxCouponsAllowed; i++) {
  setTimeout(() => {
    document.getElementsByClassName(loadCouponToCardClassName)[i].click();
  }, 250 * i);
}
