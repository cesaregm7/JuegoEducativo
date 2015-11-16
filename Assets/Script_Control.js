#pragma strict

var codigo : UnityEngine.UI.InputField;
var textoAp : UnityEngine.UI.Text;
var textoMa : UnityEngine.UI.Text;
var textoIn : UnityEngine.UI.Text;
static var num : int = 1;
var codigoIngresado : String;

var button: UnityEngine.UI.Button;

var anim : Animator;
var tomar_espada : boolean;
var atacar : boolean;
var defensa_espada : boolean;

//para la vida
var healthSlider : UnityEngine.UI.Slider;

function Start () {
	num = 1;
	textoAp.text = "...";
	textoMa.text = "Bienvenido joven aprendiz, si quieres sobrevivir en una batalla debes pensar rápido. Un error podría resultar en tu muerte. Empecemos con la practica de inmediato!";
	textoIn.text = "";
	tomar_espada = false;
	atacar = false;
	defensa_espada = false;
	healthSlider.maxValue = 100;
	healthSlider.minValue = 0;	
	healthSlider.value = 100;
}

function Update () {
	anim.SetBool("atacar", atacar);
	anim.SetBool("tomar_espada", tomar_espada);
	anim.SetBool("defensa_espada", defensa_espada);
}

function OnClick(){
	num++;
	switch(num){
		case 2:
			textoAp.text = "¿...?";
			textoMa.text = "¿Planeas enfrentarme sin un arma? ¡Toma tu espada rápido!.";
			break;
		case 3:
			codigo.interactable = true;
			textoIn.text = "Escribe en el espacio de arriba \n'Espada = raw_input("+'"'+"Tomar espada"+'"'+")'\n sin comillas iniciales y finales";
			break;
		case 4:
			codigoIngresado = codigo.text;
			if (codigoIngresado.Equals("Espada = raw_input("+'"'+"Tomar espada"+'"'+")")){
				tomar_espada = true;
				textoMa.text = "Bien, ahora atácame con ella. Con tu habilidad actual no podrás lastimarme.";
				codigo.text = "";
				textoIn.text="Escribe en el espacio de arriba\n print "+'"'+"Atacar con espada"+'"'+"";
			}
			else{
				textoMa.text = "Estas mal! Concentrate!";
				num--;
			}
			break;
		case 5:
			codigoIngresado = codigo.text;
			if (codigoIngresado.Equals("print "+'"'+"Atacar con espada"+'"'+"")){
				atacar = true;
				textoMa.text = "Tienes fuerza, pero veamos que tan bien de defiendes.";
				codigo.text = "";
				textoIn.text="Escribe en el espacio de arriba print "+'"'+"Defender con espada"+'"'+"";
			}
			else{
				textoMa.text = "Estas mal! Concentrate!";
				num--;
			}
			break;
		case 6:
			codigoIngresado = codigo.text;
			if (codigoIngresado.Equals("print "+'"'+"Defender con espada"+'"'+"")){
				defensa_espada = true;
				atacar = false;
				textoMa.text = "En el futuro necesitaras un escudo para defenderte. Un combate real será más difícil que esto, porque debes actuar según las acciones del enemigo.";
				codigo.text = "";
				textoIn.text ="";
				bajarVida();
			}
			else{
				textoMa.text = "Estas mal! Concentrate!";
				num--;
			}
			break;
		case 7:
			codigo.interactable = false;
			textoAp.text = "";
			textoMa.text = "Parece que la entiendes lo básico.";
			break;
		case 8:
			textoAp.text = "¿?!";
			textoMa.text = "¿Qué esas cosas no se cansan? Tu quédate aquí, tengo una nacion que defender.";
			break;
	}
}
function bajarVida(){
	yield WaitForSeconds(1);
	healthSlider.value = healthSlider.value - 50;
}