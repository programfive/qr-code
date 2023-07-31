const $imagen = document.querySelector("#codigo");
const $boton = document.querySelector("#btnDescargar");
const $guardar = document.querySelector('#guardar');
const $search = document.querySelector('#search');
const $content = document.querySelector('#content');

$boton.onclick = () => {
  const enlace = document.createElement("a");
  enlace.href = $imagen.src;
  enlace.download = "Código QR generado";
  enlace.click();
};

$guardar.onclick = () => {
  if ($search.value) {
    $content.classList.remove('hidden'); 
    $content.classList.add('opacity-100', 'block'); 

    new QRious({
      element: $imagen,
      value: $search.value,
      size: 500,
      backgroundAlpha: 0,
      foreground: "#334155",
      level: "H",
    });
  }else{
    $content.classList.remove('block'); 
    $content.classList.add('opacity-100', 'hidden'); 

  }
};