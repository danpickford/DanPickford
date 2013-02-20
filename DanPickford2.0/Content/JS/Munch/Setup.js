// Now set up your game (most games will load a separate .js file)
var Q = Quintus()                          // Create a new engine instance
        .include("Sprites, Scenes, Input, 2D, Touch, UI") // Load any needed modules
        .setup("munchBox", {
            width: 800,
            height: 561
        })
        .controls()                        // Add in default controls (keyboard, buttons)
        .touch();                          // Add in touch support (for the UI)

Q.random = function (min, max) {
    return min + Math.random() * (max - min);
}