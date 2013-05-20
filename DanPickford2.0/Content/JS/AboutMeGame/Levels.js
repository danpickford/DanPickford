// ## Level1 scene
// Create a new scene called level 1
Q.scene("level1", function (stage) {

    // Add in a tile layer, and make it the collision layer
    stage.collisionLayer(new Q.TileLayer({
        dataAsset: 'level1.json',
        sheet: 'tiles'
    }));


    // Create the player and add them to the stage
    var player = stage.insert(new Q.Player());

    // Give the stage a moveable viewport and tell it
    // to follow the player.
    stage.add("viewport").follow(player);

    // Add in a couple of enemies
    stage.insert(new Q.Enemy({ x: 700, y: 0 }));
    stage.insert(new Q.Enemy({ x: 800, y: 0 }));

    // Finally add in the tower goal
    stage.insert(new Q.Tower({ x: 180, y: 50 }));
});