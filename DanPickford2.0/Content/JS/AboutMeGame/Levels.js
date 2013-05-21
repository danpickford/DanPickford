// ## Level1 scene
// Create a new scene called level 1
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

Q.scene("level2", function (stage) {

    // Add in a tile layer, and make it the collision layer
    stage.collisionLayer(new Q.TileLayer({
        dataAsset: '../../Content/JSON/level2.json',
        sheet: 'tiles2'
    }));

    var label = stage.insert(new Q.UI.Text({
        x: 500, y: 370,
        label: "Started Foundation Degree in Interactive Software design 2005 @ Brighton University",
        size: 18,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 2000, y: 310,
        label: "2007 Completed Foundation Degree (Grade A) Started BSc Software Engineering (Hons) at Brighton University.",
        size: 18,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 2830, y: 0,
        label: "2009 Graduated from Brighton University 2.1 with Hons.",
        size: 18,
        family: 'Courier New'
    }));
    var label = stage.insert(new Q.UI.Text({
        x: 3230, y: 310,
        label: "I'm a programmer baby! Level 2, complete off to Work!",
        size: 18,
        family: 'Courier New'
    }));
    //60 I'm a programmer baby! Level 2, complete off to Work!"
    var player = stage.insert(new Q.Player({ x: 2800, y: 30 }));

    // Give the stage a moveable viewport and tell it
    // to follow the player.
    stage.add("viewport").follow(player);

    // Add in a couple of enemies
    stage.insert(new Q.Baddy({ x: 900, y: 0 }));
    stage.insert(new Q.Baddy({ x: 850, y: 0 }));
    stage.insert(new Q.Baddy({ x: 600, y: 0 }));
    stage.insert(new Q.Baddy({ x: 1900, y: 0 }));
    stage.insert(new Q.Baddy({ x: 3500, y: 0 }));
    stage.insert(new Q.Baddy({ x: 3400, y: 0 }));
    stage.insert(new Q.Spring({ x: 2090, y: 334 }));
    stage.insert(new Q.Spring({ x: 2350, y: 80 }));
    stage.insert(new Q.Spring({ x: 2600, y: 90 }));
    // Finally add in the tower goal
    stage.insert(new Q.Goal({ x: 3440, y: 230 }));
});