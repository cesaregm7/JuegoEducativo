#pragma strict

var button: UnityEngine.UI.Button;

var anim : Animator;

var va_atacar : boolean;
var ataca_maestro : boolean;
var ya_se_va : boolean;
var num : int;

//para la vida
var healthSlider : UnityEngine.UI.Slider;
var backHealth : int;
var veces : int;

function Start () {
	num = Script_Control.num;
	va_atacar = false;
	ataca_maestro = false;
	ya_se_va = false;
	healthSlider.maxValue = 100;
	healthSlider.minValue = 0;	
	healthSlider.value = 100;
	backHealth = healthSlider.value;
	veces = 0;
}

function Update () {
	num = Script_Control.num;
	anim.SetBool("va_atacar", va_atacar);
	anim.SetBool("ataca_maestro", ataca_maestro);
	anim.SetBool("ya_se_va", ya_se_va);
	switch(num){
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			veces++;
			va_atacar = true;
			if (veces == 1){
				healthSlider.value = healthSlider.value - 5;
			}
			break;
		case 6:
			ataca_maestro = true;
			va_atacar = false;
			break;
		case 7:
			break;
		case 8:
			ya_se_va = true;
			break;
	}
}

function OnClick(){

}