#pragma strict

var button: UnityEngine.UI.Button;

var anim : Animator;

var va_atacar : boolean;
var ataca_maestro : boolean;
var ya_se_va : boolean;
var num : int;

function Start () {
	num = Script_Control.num;
	va_atacar = false;
	ataca_maestro = false;
	ya_se_va = false;
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
			va_atacar = true;
			break;
		case 6:
			ataca_maestro = true;
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