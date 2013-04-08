var ygap = 0;
var ygaplimit = 10;
// Now set up your game (most games will load a separate .js file)
var Q = window.Q = Quintus()                          // Create a new engine instance
        .include("Sprites, Scenes, Input, 2D, Touch, UI"); // Load any needed modules
    Q.setup("munchBox", {
            width: 800,
            height: 561,
            downsampleWidth: 400, downsampleHeight: 280
        })

        .touch();                          // Add in touch support (for the UI)
    
    Q.input.mouseControls();            //Allows for mouse tracking. Q.input["mouseX"];

Q.random = function (min, max) {
    return min + Math.random() * (max - min);
}