var Q = Quintus()
    .include("Sprites, Scenes, Input, 2D, Touch, UI")
    .setup("myName", { maximize: true });

Q.input.touchControls({
    controls: [['left', '<'],
                 ['right', '>'],
                 [],
                 ['action', '^'],
                 ['Restart', 'z']]
});
Q.controls().touch();
Q.input.keyboardControls({
    Z: "Restart"
});

