Q.Sprite.extend("Munch", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Munch.png",
            x: 200,
            y: 480, //The height of the Canvas minus the height of munch divided by two.
            z: 100,
            gravity: 0,
            collisionMask: 8,
            sadFace: 0,
            mouthFace: 0
        });
        this.add("2d");
        this.on("bump.top", function (collision) {
            if (this.p.asset == "../../Content/Images/Munch/Munch_Eat.png") {
                //collision.obj.destroy();
            } else {
                //collision.obj.destroy();
                this.p.sadFace = 100;
            }
            
        });
        
        this.on("hit", this, "collision");
        Q.input.on("left", this, "moveLeft");
        Q.input.on("right", this, "moveRight");
        Q.input.on("up", this, "openMouth");
        
    },

    step: function (dt) {
        if (this.p.mouthFace + this.p.sadFace == 0) {
            this.p.asset = "../../Content/Images/Munch/Munch.png";
        }
        if (this.p.mouthFace > 0) {
            this.p.sadFace = 0;
            this.p.mouthFace = this.p.mouthFace - 1;
            this.p.asset = "../../Content/Images/Munch/Munch_Eat.png";
        }
        if (this.p.sadFace > 0) {
            this.p.mouthFace = 0;
            this.p.sadFace = this.p.sadFace - 1;
            this.p.asset = "../../Content/Images/Munch/Munch_Sad.png";
        }
    },
    moveLeft: function () {
        this.p.x = this.p.x - 10;
    },
    moveRight: function () {
        this.p.x = this.p.x + 10;
    },
    openMouth: function () {
        this.p.mouthFace = 10;
    },
    collision: function() {
        //alert("Hit");
    }
});