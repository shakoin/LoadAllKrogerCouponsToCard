var maxCouponsAllowed = 150;
var loadCouponToCardClassName = "kds-Button kds-Button--primary kds-Button--compact CouponActionButton";
for (var i = 0; i < maxCouponsAllowed; i++) {
	document.getElementsByClassName(loadCouponToCardClassName)[i].click();
	setTimeout(function(){}, 250); //Time out to not overload website.
}
