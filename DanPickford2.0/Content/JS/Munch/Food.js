Q.Sprite.extend("Food", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Pizza.png",
            x: 200,
            y: 0,
            z: 0,
            collisionMask: 4,
            gravity: 0.2
        });
        this.add("2d");
        this.on("bump.bottom", function (collision) {
            this.p.y = -10;
            this.p.x = Q.random(100, 500);

        });
    }
});