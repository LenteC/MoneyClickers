﻿#pragma strict
var Panel3 : GameObject;
var Panel2 : GameObject; 
var Panel : GameObject; 

function Start () {
    Panel3.SetActive (false); // Panel is not active on start game    
}

function Update () {
    
}

function Panel3Toggle () {
    if (Panel.activeSelf == false) { //if other panel is not active
        Panel3.SetActive (!Panel3.activeSelf); // TOGGLE, ! voor 'not' (omgekeerde) (als panel niet active is, dan word ie dus wel active als je op de knop drukt.)_
    }
}
