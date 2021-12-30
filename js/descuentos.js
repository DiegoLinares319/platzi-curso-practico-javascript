const cupones = [
  {
    name: 'JuanDC_es_Batman',
    discount: 15,
  },
  {
    name: 'pero_no_le_digas_a_nadie',
    discount: 30,
  },
  {
    name: 'es_un_secreto',
    discount: 25,
  }
];

const conseguirPrecioConDescuento = (precio, descuento, cupon) => {
  const porcentajeDelDescuento = (100 - descuento) - cupon;
  const precioFinal = (precio * porcentajeDelDescuento) / 100;
  return precioFinal
}

const onClickButtoncalculePriceDiscount = () => {
  const inputPrice = document.querySelector('#inputPrice');
  const inputDiscount = document.querySelector('#inputDiscount');
  const inputCoupons = document.querySelector('#inputCoupons');
  
  const priceValue = Number(inputPrice.value);
  const discountValue = Number(inputDiscount.value);
  const couponsValue = inputCoupons.value;
  
  const isCouponValueValid = (cupon) => cupon.name === couponsValue;
  const userCoupon = cupones.find(isCouponValueValid);
  let couponDesc = 0;
  
  if (!userCoupon) {
    alert(`El cupon ${couponsValue} no es válido`);
  } else {
    couponDesc = userCoupon.discount;
  }
  
  const totalDiscount = discountValue + couponDesc;
  
  const precioConDescuento = conseguirPrecioConDescuento(priceValue, discountValue, couponDesc);
  const resultP = document.querySelector('#resultP');
  resultP.innerText = `El precio del producto con valor de: $${priceValue}\n Con un descuento del: ${totalDiscount}%\n Es de: ${precioConDescuento}`;
}


