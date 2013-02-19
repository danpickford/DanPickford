// Now set up your game (most games will load a separate .js file)
var Q = Quintus()                          // Create a new engine instance
        .include("Sprites, Scenes, Input, 2D, Touch, UI") // Load any needed modules
        .setup("munchBox", {
            width: 850,
            height: 600
        })
        .controls()                        // Add in default controls (keyboard, buttons)
        .touch();                          // Add in touch support (for the UI)