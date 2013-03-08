Q.Sprite.extend("Food", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Pizza.png",
            x: 200,
            y: 0,
            z: 0,
            collisionMask: 4,
            gravity: Q.state.get("gravity")
        });
        this.add("2d");
        this.on("bump.bottom", function (collision) {
            this.p.y = -10;
            this.p.x = Q.random(100, 500);
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
    }
});