/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckoutGetters } from '@vue-storefront/core';
import { Cart, ShippingMethod } from '@vue-storefront/odoo-api/src/types';

export const getShippingMethodId = (shippingMethod: ShippingMethod): string =>
  '';

export const getShippingMethodName = (shippingMethod: ShippingMethod): string =>
  '';

export const getShippingMethodDescription = (
  shippingMethod: ShippingMethod
): string => '';

export const getShippingMethodPrice = (cart: Cart): number =>
  cart.amountTax || 0;

export const getFormattedPrice = (price: number): string => String(price);

const checkoutGetters: CheckoutGetters<ShippingMethod> = {
  getShippingMethodId,
  getShippingMethodName,
  getShippingMethodDescription,
  getFormattedPrice,
  getShippingMethodPrice
};

export default checkoutGetters;
