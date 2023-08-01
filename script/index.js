const $image = document.querySelector("#image");
const $download = document.querySelector("#download");
const $save = document.querySelector('#save');
const $search = document.querySelector('#search');
const $content = document.querySelector('#content');

$download.onclick = () => {
  let link = document.createElement("a");
  link.href = $image.src;
  link.download = "Código QR generado";
  link.click();
};
$save.onclick = () => {
  if ($search.value) {
    $content.classList.remove('hidden'); 
    $content.classList.add('opacity-100', 'block'); 
    new QRious({
      element: $image,
      value: $search.value,
      size: 500,
      backgroundAlpha: 0,
      foreground: "#334155",
      level: "H",
    });
  }else{
    $content.classList.remove('block'); 
    $content.classList.add('opacity-100','hidden'); 
  }
};