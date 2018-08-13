// [ Focus input]




// window.onload =  () => {

let input = document.querySelectorAll('.input100');

input.forEach ( element => {
    element.addEventListener('blur', (e) => {
        // e.preventDefault();
        if (element.value.length != 0) {
            element.classList.add('has-val');
            console.log('ahora si');

        }else {
            element.classList.remove('has-val');
        }
    })
})


let colorGlobal = 'rgb(87, 184, 70)';
let contenedor = document.querySelector('.contenedor');



function cambiarEstilos (){
    let estilos =
    `<br>
    <style>
    .focus-input100::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      width: 0;
      height: 2px;

      transition: all 0.4s;
      background: ${colorGlobal};
    }



    </style>

    `
    contenedor.appendChild(estilos);
    console.log(estilos);
}


cambiarEstilos();


// }
