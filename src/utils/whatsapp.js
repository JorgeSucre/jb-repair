export const wa = (message) => {
  const base = "https://wa.me/5213111751369";
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
};
