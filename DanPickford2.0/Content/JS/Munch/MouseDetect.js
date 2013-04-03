Q.Sprite.extend("MouseDetect", {
    init: function (p) {
        this._super({
            w: 800,
            h: 561,
            cx: 400,
            cy: 325.5,
            x: 400,
            y: 325.5,
            z: 0,
            collisionMask: 0,
            gravity: 0
        });
        this.on("drag");
    },
    drag: function (touch) {
        var munch = Q("Munch").first();
        munch.p.x = touch.x;

    }
});