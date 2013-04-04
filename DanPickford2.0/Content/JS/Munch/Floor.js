Q.Sprite.extend("Floor", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Floor1.jpg",
            w: 800,
            h: 34,
            cx: 200,
            cy: 7,
            x: 200,
            y: 543.5,
            z: 0,
            collisionMask: 8,
            gravity: 0,
            points: [[-200, -17.5], [-200, 17.5], [600, 17.5], [600, -17.5]]
        });
        this.add("2d");
        this.on("bump.top", function (collision) {
            if (Q.state.get("lives") == 1) {
                Q("Munch").first().destroy();
                $("#restart").css("display", "block");
                Q.stageScene("CleanYourSelfUpYouDead", 1, { label: "Munch starved to death!\nFood goes in mouth not on the floor.\nYour score: " + Q.state.get("score") + ". Click restart to start a new game." });
                Q.stage().pause();
            }
            if (Q.state.get("lives") > 0) {Q.state.dec("lives", 1);}
        });
    }
});