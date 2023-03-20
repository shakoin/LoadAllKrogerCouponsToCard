const maxCouponsAllowed = 150;
const unloadCouponFromCardClassName = "kds-Button kds-Button--cancel kds-Button--compact CouponActionButton CouponCard-button";

for (let i = 0; i < maxCouponsAllowed; i++) {
  setTimeout(() => {
    document.getElementsByClassName(unloadCouponFromCardClassName)[i].click();
  }, 250 * i); // Time out to not overload the website.
}
