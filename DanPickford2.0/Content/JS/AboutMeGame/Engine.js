// To display a game over / game won popup box, 
// create a endGame scene that takes in a `label` option
// to control the displayed message.
Q.scene('endGame', function (stage) {
    //var container = stage.insert(new Q.UI.Container({
    //    x: Q.width / 2, y: Q.height / 2, fill: "rgba(0,0,0,0.5)"
    //}));

    //var button = container.insert(new Q.UI.Button({
    //    x: 0, y: 0, fill: "#CCCCCC",
    //    label: "Play Again"
    //}))
    //var label = container.insert(new Q.UI.Text({
    //    x: 10, y: -10 - button.p.h,
    //    label: stage.options.label
    //}));
    //// When the button is clicked, clear all the stages
    //// and restart the game.
    //button.on("click", function () {
    Q.clearStages();
    $('#myName_container').css('display', 'none');
    //    Q.stageScene('level1');
    //});

    //// Expand the container to visibily fit it's contents
    //// (with a padding of 20 pixels)
    //container.fit(20);
});

Q.load("../../Content/Images/About/sprites.png, ../../Content/JSON/sprites.json, ../../Content/JSON/level1.json, ../../Content/Images/About/tiles.png", function () {
        // Sprites sheets can be created manually
    Q.sheet("tiles", "../../Content/Images/About/tiles.png", { tilew: 32, tileh: 32 });

        // Or from a .json asset that defines sprite locations
        Q.compileSheets("../../Content/Images/About/sprites.png", "../../Content/JSON/sprites.json");

        // Finally, call stageScene to run the game
        Q.stageScene("level1");
    //Q.debug = true;
});