Q.scene('endGame', function (stage) {
    var box = stage.insert(new Q.UI.Container({
        x: Q.width / 2, y: Q.height / 2, fill: "rgba(0,0,0,0.5)"
    }));

    var button = box.insert(new Q.UI.Button({
        x: 0, y: 0, fill: "#CCCCCC",
        label: "Play Again"
    }))
    var label = box.insert(new Q.UI.Text({
        x: 10, y: -10 - button.p.h,
        label: stage.options.label
    }));
    button.on("click", function () {
        Q.clearStages();
        Q.stageScene('level1');
    });
    box.fit(20);
});

Q.load("../../Content/Images/About/sprites.png, ../../Content/JSON/level1.json, ../../Content/Images/About/tiles.png, ../../Content/JSON/sprites.json", function () {
        // Sprites sheets can be created manually
        Q.sheet("tiles", "tiles.png", { tilew: 32, tileh: 32 });

        // Or from a .json asset that defines sprite locations
        Q.compileSheets("sprites.png", "sprites.json");

        // Finally, call stageScene to run the game
        Q.stageScene("level1");
    //Q.debug = true;
});