const $image = document.querySelector("#image");
const $download = document.querySelector("#download");
const $save = document.querySelector('#save');
const $search = document.querySelector('#search');
const $content = document.querySelector('#content');
const $error=document.querySelector('#error');


$download.onclick = () => {
  let link = document.createElement("a");
  link.href = $image.src;
  link.download = "Code QR generate";
  link.click();
};
$save.onclick = () => {
  const usuarioInput = $search.value;
  try {
    const url = new URL(usuarioInput);
    $content.classList.remove('hidden');
    $content.classList.add('opacity-100', 'block');
    new QRious({
      element: $image,
      value: url.href,
      size: 500,
      backgroundAlpha: 0,
      foreground: "#334155",
      level: "H",
    });
    $error.classList.add('hidden');
  } catch (error) {
    $content.classList.remove('block');
    $content.classList.add('opacity-100', 'hidden');
    $error.textContent = "URL inválida";
    $error.classList.remove('hidden');
  }
};
