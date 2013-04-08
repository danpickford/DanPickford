Q.Sprite.extend("Food", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Pizza.png",
            x: Q.random(100, 500),
            y: -100,
            z: 0,
            collisionMask: 4,
            gravity: 0,
            lowrange: 0,
            highrange: 0,
            dropspeed: 2,
            scoreVal: 50,
            foodid: 1,
        });
        this.add("2d");

        this.on("bump.bottom", function (collision) {
            if (collision.obj.isA("Food")) { //Make sure it's not food causing a collition.
                collision.obj.p.x = collision.obj.p.x + 4;
            } else {
                this.p.y = -100;
                if (this.p.lowrange == 0 && this.p.highrange == 0) {
                    this.p.x = Q.random(100, 500);
                } else {
                    this.p.x = Q.random(this.p.lowrange, this.p.highrange);
                }
                var someFood = Math.floor(Q.random(1, 5));
                switch (someFood) {
                    case 1:
                        this.p.asset = "../../Content/Images/Munch/Pizza.png";
                        this.p.scoreVal = 50;
                        break;
                    case 2:
                        this.p.asset = "../../Content/Images/Munch/Cherry.png";
                        this.p.scoreVal = 70;
                        break;
                    case 3:
                        this.p.asset = "../../Content/Images/Munch/Chicken_Leg.png";
                        this.p.scoreVal = 90;
                        break;
                    case 4:
                        this.p.asset = "../../Content/Images/Munch/Doughnut.png";
                        this.p.scoreVal = 30;
                        break;
                    default:
                        this.p.asset = "../../Content/Images/Munch/Pizza.png";
                        this.p.scoreVal = 50;
                        break;
                }
            }
        });
    },
    GetFoodY: function (p) {
        return this.p.y;
    },
    step: function (p) {

        if (testFoodCatchable(this)) {
            this.p.y = this.p.y + this.p.dropspeed;
        }

        if (Q.state.get("lives") == 0) {
            this.destroy();
        }

        function testFoodCatchable(curFood) {
            var retVal = false;
            
            if (curFood.p.foodid == 1) {
                return true;
            }
            var lowerBall = Q("Food").at(parseInt(curFood.p.foodid - 2));

            if (lowerBall.p.y > 300 || lowerBall.p.y < curFood.p.y) {
                retVal = true;
            }
            return retVal;
        }

    }
});
