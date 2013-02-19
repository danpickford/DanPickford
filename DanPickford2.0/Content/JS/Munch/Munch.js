Q.Sprite.extend("Munch", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Munch.png",
            x: 200,
            y: 535,
            scale: 0.2,
            z: 100
        });
        this.on("hit", this, "collision");
        Q.input.on("left", this, "moveLeft");
        Q.input.on("right", this, "moveRight");
        Q.input.on("up", this, "openMouth");
    },

    step: function (dt) {
        if (!Q.inputs['up']) {
            this.p.asset = "../../Content/Images/Munch/Munch.png";
        }
    },
    moveLeft: function () {
        this.p.x = this.p.x - 10;
    },
    moveRight: function () {
        this.p.x = this.p.x + 10;
    },
    openMouth: function () {
        this.p.asset = "../../Content/Images/Munch/Munch_Eat.png";
    },
    collision: function() {
        alert("Hit");
    }
});