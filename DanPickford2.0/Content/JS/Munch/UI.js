Q.Sprite.extend("Score", {
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
            gravity: 0
        });
    }
});