export function isCheckoutValid(checkout, fields) {
  const user = checkout.user || {};

  const userValid = fields.every((field) => {
    if (!field.required) return true;

    const value = user[field.id];

    return value && value.trim() !== "";
  });

  return (
    userValid &&
    checkout.product &&
    checkout.payment
  );
}