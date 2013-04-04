var ygap = 0;
var ygaplimit = 10;
// Now set up your game (most games will load a separate .js file)
var Q = window.Q = Quintus()                          // Create a new engine instance
        .include("Sprites, Scenes, Input, 2D, Touch, UI"); // Load any needed modules
    Q.setup("munchBox", {
            width: 800,
            height: 561
        })
        .controls()                        // Add in default controls (keyboard, buttons)
        .touch();                          // Add in touch support (for the UI)
    
    Q.input.mouseControls();            //Allows for mouse tracking. Q.input["mouseX"];
    Q.input.keyboardControls({
        SPACE: "space"
    });
    Q.input.touchControls({
        controls: [['up', 'mouth']]
    });
Q.random = function (min, max) {
    return min + Math.random() * (max - min);
}