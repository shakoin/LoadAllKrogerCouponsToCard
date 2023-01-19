var x = 1;
var y = 2;
var z = x + y;
console.log(z);
var maxCouponsAllowed = 150;
var loadCouponToCardClassName = "CouponActionButton";
for (var i = 0; i < maxCouponsAllowed; i++) {
document.getElementsByClassName(loadCouponToCardClassName)[i].click();
setTimeout(function(){}, 250); 
}
