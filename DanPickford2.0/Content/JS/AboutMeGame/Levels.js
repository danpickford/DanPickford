// ## Level1 scene
// Create a new scene called level 1
Q.scene("level1", function (stage) {

    // Add in a tile layer, and make it the collision layer
    stage.collisionLayer(new Q.TileLayer({
        dataAsset: '../../Content/JSON/level1.json',
        sheet: 'tiles'
    }));

    var label = stage.insert(new Q.UI.Text({
        x: 10, y: 460,
        label: "13 March 1986, Dan was born.",
        size: 12,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 1500, y: 460,
        label: "June 2001 Graduated Bishop Bell C of E and Started at Sussex Downs College a GNVQ in ICT.",
        size: 12,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 2500, y: 460,
        label: "June 2002 finished GNVQ with Distinciton and started BTEC ICT Pratitioners at Sussex Downs, this is where i discovered programming!",
        size: 12,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 3300, y: 460,
        label: "Level 1 complete to UNI!",
        size: 12,
        family: 'Courier New'
    }));
    stage.insert(new Q.Step({ x: 1850, y: 360 }));
    // Create the player and add them to the stage
    var player = stage.insert(new Q.Player());

    // Give the stage a moveable viewport and tell it
    // to follow the player.
    stage.add("viewport").follow(player);

    // Add in a couple of enemies
    stage.insert(new Q.Baddy({ x: 700, y: 0 }));
    stage.insert(new Q.Baddy({ x: 800, y: 0 }));
    stage.insert(new Q.Baddy({ x: 600, y: 0 }));
    stage.insert(new Q.Baddy({ x: 1900, y: 0 }));
    stage.insert(new Q.Baddy({ x: 2100, y: 0 }));
    // Finally add in the tower goal
    stage.insert(new Q.Goal({ x: 3300, y: 50 }));
});