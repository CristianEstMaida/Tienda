const img = document.querySelector(".imagen");

const button = document.querySelector(".button");

const input = document.querySelector(".input");

const nombre = document.getElementById("nombre");

const email = document.getElementById("email");

const boton = document.getElementById("enviar");

const titulo = document.querySelector(".titulo");

const resultado = document.querySelector(".resultado");

let texto = input.value;

img.addEventListener("error",()=>{
	alert("Ha sucedido un error")
});

button.addEventListener("click",(e)=>{
	alert("Di click en un botón")
});

input.addEventListener("keypress",(e)=>{
	alert("Una tecla se presionó y soltó")
});

boton.addEventListener("click",(e)=>{
	//e.preventDefault();
	let error = validarCampos();
	if(error[0]){
		resultado.innerHTML = error[1];
		resultado.classList.add("red");
	}
	else{
		resultado.innerHTML = "Pedido enviado correctramente";
		resultado.classList.add("green");
		resultado.classList.remove("red");
	}
});

document.write(texto);

img.innerHTML = texto.substring(0);

input.type  = "text";

input.acept = "image/png";

input.acept = "image/gif";

input.minLength = "3";

input.placeholder = "Nombre";

input.required = " ";

titulo.style.color = "#fff";

titulo.style.backgroundColor = "#000";

titulo.style.padding = "30px";

const validarCampos = ()=>{
	let error = [];
	if(nombre.value.length < 3){
		error[0] = true;
		error[1] = "El nombre no puede contener menos de 3 caracteres. Ingrese un nombre válido";
		return error;
	}
	else if (nombre.value.length > 40) {
		error[0] = true;
		error[1] = "El nombre no puede contener más de 40 caracteres. Ingrese un nombre válido";
		return error;
	}
	else if(email.value.length < 5 ||
			email.value.length > 40 ||
			email.value.indexOf("@") == -1 ||
			email.value.indexOf(".") == -1){
		error[0] = true;
		error[1] = "El correo es inválido. Ingrese un correo válido";
		return error;
	}
	error[0] = false;
	return error;
}
