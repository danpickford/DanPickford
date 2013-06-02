var Q = Quintus()
    .include("Sprites, Scenes, Input, 2D, Touch, UI")
    .setup("myName", { maximize: true })
    .controls().touch();

Q.input.keyboardControls({
    Z: "Restart"
});