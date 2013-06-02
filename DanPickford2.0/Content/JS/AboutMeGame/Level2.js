Q.scene("level2", function (stage) {
    if (Q.state.get("Lives") == 0) {
        Q.state.set("Lives", 3);
    }
    $('#LivesDiv').css('display', 'block');
    Q.state.set("level", 2);
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
    var player = stage.insert(new Q.Player({ x: 60, y: 30 }));

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
    stage.insert(new Q.Spring({ x: 2090, y: 330 }));
    stage.insert(new Q.Spring({ x: 2350, y: 80 }));
    stage.insert(new Q.Spring({ x: 2600, y: 90 }));
    // Finally add in the tower goal
    stage.insert(new Q.Goal({ x: 3440, y: 230 }));
});