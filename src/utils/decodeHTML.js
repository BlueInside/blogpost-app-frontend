// Decode HTML with escaped values
export function htmlDecode(text) {
  const txt = document.createElement('textarea');
  txt.innerHTML = text;
  return txt.value;
}
