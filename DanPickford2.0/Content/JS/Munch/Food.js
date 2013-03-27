Q.Sprite.extend("Food", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Pizza.png",
            handycap: 1,
            x: Q.random(100, 500),
            y: 0,
            z: 0,
            collisionMask: 4,
            gravity: 0,
            lowrange: 0,
            highrange: 0,
            dropspeed: 2
        });
        this.on("drag");
        this.add("2d");
        this.p.y = (this.p.handycap * 100) * -1;
        this.on("bump.bottom", function (collision) {
            this.p.y = (this.p.handycap * 100) * -1;
            if (this.p.lowrange == 0 && this.p.highrange == 0) {
                this.p.x = Q.random(100, 500);
            } else {
                this.p.x = Q.random(this.p.lowrange, this.p.highrange);
            }
                var someFood = Math.floor(Q.random(1, 4));
                switch (someFood) {
                case 1:
                    this.p.asset = "../../Content/Images/Munch/Pizza.png";
                    break;
                case 2:
                    this.p.asset = "../../Content/Images/Munch/Cherry.png";
                    break;
                case 3:
                    this.p.asset = "../../Content/Images/Munch/Chicken_Leg.png";
                    break;
                case 4:
                    this.p.asset = "../../Content/Images/Munch/Doughnut.png.png";
                    break;
                default:
                    this.p.asset = "../../Content/Images/Munch/Pizza.png";
                    break;
            }
        });
    },
    drag: function (touch) {
        this.p.x = touch.origX + touch.dx;
        this.p.y = touch.origY + touch.dy;
    },
    step: function (p) {
        this.p.y = this.p.y + this.p.dropspeed;
        if (Q.state.get("lives") == 0) {
            this.destroy();
            Q.stage().pause();
            //var floor = Q("Floor").first();
            //var munch = Q("Munch").first();
            //floor.destroy();
            //munch.destroy();
        }
    }
});