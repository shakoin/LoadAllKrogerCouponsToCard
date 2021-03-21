var maxCouponsAllowed = 150;
var unloadCouponFromCardClassName = "kds-Button kds-Button--cancel kds-Button--compact CouponActionButton CouponCard-button";
for (var i = 0; i < maxCouponsAllowed; i++) {
	document.getElementsByClassName(unloadCouponFromCardClassName)[i].click();
	setTimeout(function(){}, 250); //Time out to not overload website.
}
