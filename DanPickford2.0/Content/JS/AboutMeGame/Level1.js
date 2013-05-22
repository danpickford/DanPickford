Q.scene("level1", function (stage) {
    //30
    // Add in a tile layer, and make it the collision layer
    stage.collisionLayer(new Q.TileLayer({
        dataAsset: '../../Content/JSON/level1.json',
        sheet: 'tiles'
    }));

    var label = stage.insert(new Q.UI.Text({
        x: 230, y: 180,
        label: "13 March 1986, Dan was born.",
        size: 18,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 1000, y: -30,
        label: "June 2002 finished Bishop Bell C of E School and Started at Sussex Downs College a GNVQ in ICT.",
        size: 18,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 2500, y: 370,
        label: "June 2003 completed GNVQ and started BTEC ICT Pratitioners at Sussex Downs, this is where I discovered programming!",
        size: 18,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 3350, y: 154,
        label: "Level 1 complete off to UNI!",
        size: 18,
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
    stage.insert(new Q.Goal({ x: 3540, y: 144 }));
});