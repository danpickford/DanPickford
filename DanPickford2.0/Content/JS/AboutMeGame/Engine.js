Q.scene('endGame', function (stage) {
    $('#LivesDiv').css('display', 'none');
    var container = stage.insert(new Q.UI.Container({
        x: Q.width / 2, y: Q.height / 2 - 40, fill: "rgba(0,0,0,0.5)"
    }));

    var buttonPlayAgain = container.insert(new Q.UI.Button({
        x: 0,
        y: 0,
        fill: "#CCCCCC",
        label: stage.options.labelPlay
    }));
    var buttonCV = container.insert(new Q.UI.Button({
        x: 0,
        y: buttonPlayAgain.p.h + 20,
        fill: "#CCCCCC",
        label: "Just show me the CV already!"
    }));
    var buttonNa = container.insert(new Q.UI.Button({
        x: 0,
        y: buttonPlayAgain.p.h + buttonPlayAgain.p.h + 40,
        fill: "#CCCCCC",
        label: "Na Thanks"
    }));
    container.insert(new Q.UI.Text({
        x: 10, y: -50 - buttonPlayAgain.p.h,
        label: stage.options.label,
        color: '#fff'
    }));
    
    buttonPlayAgain.on("click", function () {
        Q.clearStages();
        Q.stageScene("level" + Q.state.get("level"), 1);
    });
    
    buttonCV.on("click", function () {
        Q.clearStages();
        $('#myName').remove();
        $('#myName_container').remove();
        $('#CV').submit();
    });
    buttonNa.on("click", function () {
        Q.clearStages();
        $('#myName').remove();
        $('#myName_container').remove();
    });
    container.fit(50);
});

Q.load("../../Content/Images/About/aboutSprite.png, ../../Content/JSON/sprites.json, ../../Content/JSON/level1.json, ../../Content/JSON/level2.json, ../../Content/JSON/level3.json, ../../Content/Images/About/tiles.png, ../../Content/Images/About/tiles2.png, ../../Content/Images/About/tiles3.png", function () {
        // Sprites sheets can be created manually
    Q.sheet("tiles", "../../Content/Images/About/tiles.png", { tilew: 32, tileh: 32 });
    Q.sheet("tiles2", "../../Content/Images/About/tiles2.png", { tilew: 32, tileh: 32 });
    Q.sheet("tiles3", "../../Content/Images/About/tiles3.png", { tilew: 32, tileh: 32 });
        // Or from a .json asset that defines sprite locations
    Q.compileSheets("../../Content/Images/About/aboutSprite.png", "../../Content/JSON/sprites.json");
    Q.state.set("level", 1);
        // Finally, call stageScene to run the game
    Q.stageScene("endGame", 1, { label: "Would you like to play Dans CV?\nPress Left or Right to move in that direction.\nUp to Jump and Z to restart if you get stuck.", labelPlay: "Play CV" });
    //Q.debug = true;
});