function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}
	this.atacar = function(pokemon){
		return pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}

const Pikachu = new Pokemon("Pikachu", "amarillo", 100)
const Charmander = new Pokemon ("Charmander", "rojo", 20)

Pikachu.atacar(Charmander)
console.log(Charmander.vida)


function peleaPokemon(){
	var pokeUno = document.getElementById("pokemon-uno").value;
	var pokeDos = document.getElementById("pokemon-dos").value;

	if(pokeUno == pokeDos){
		alert("No puedes hacer pelear dos pokemones iguales")
		return;
	}

	var ataquePokeUno = prompt("Ingresa poder de ataque del primer Pokemon");
	var ataquePokeDos = prompt("Ingresa poder de ataque del segundo Pokemon");

	var pimerPoke = new Pokemon (pokeUno,"amarillo",ataquePokeUno)
	var segundoPoke = new Pokemon (pokeDos,"rojo",ataquePokeDos)
	
	var ataque = pimerPoke.atacar(pokeDos);
	var etiquetaFinal = document.getElementById("resultado");
	var textoFinal = pokeUno + " ataco a " + pokeDos + " y " +  pokeDos + " tiene una vida de : " + segundoPoke.vida ;	

	etiquetaFinal.innerHTML = textoFinal;

}