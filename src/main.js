// Code Practice: Making a Scene
// Name: Chaavan Sure
// Date: 1/13/2025

"use strict"

let config = {
    type: Phaser.AUTO, 
    width: 640,
    height: 480,
    scene: [ MainMenu, Play ]
}

let game = new Phaser.Game(config)