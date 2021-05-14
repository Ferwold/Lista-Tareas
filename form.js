(function(){
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("agregar");
		
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Campo Vacío");
			tareaInput.className = "error";
			return false;
		}
		enlace.appendChild(contenido);
		nuevaTarea.appendChild(enlace);
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";
	};
	btnNuevaTarea.addEventListener("click", agregarTarea);
}());
