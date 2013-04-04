﻿Q.Sprite.extend("Munch", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Munch.png",
            x: 200,
            y: 480, //The height of the Canvas minus the height of munch divided by two.
            cx: 67.5,
            cy: 81.5,
            z: 100,
            gravity: 0,
            collisionMask: 8,
            sadFace: 0,
            mouthFace: 0,
            points: 0
        });
        this.add("2d");

        this.on("bump.top", function (collision) {
            if (this.p.asset == "../../Content/Images/Munch/Munch_Eat.png") {
                Q.state.inc("score", 50);
            } 
        });
        Q.input.on("left", this, "moveLeft");
        Q.input.on("right", this, "moveRight");
        Q.input.on("up", this, "openMouth");
        Q.input.on("space", this, "openMouth");
        Q.state.on("change.lives", this, "lives");
    },
    step: function (dt) {
        this.p.x = Q.inputs['mouseX'];
        var tempy = Q.inputs['mouseY'];
        if (ygap - tempy > ygaplimit) {
            this.p.mouthFace = 10;
            this.p.points = [[-55.5, 0], [0, 26.5], [55.5, 0], [0, -26.5]];
        }
        ygap = tempy;
        
        if (this.p.mouthFace + this.p.sadFace == 0) {
            this.p.asset = "../../Content/Images/Munch/Munch.png";
            this.p.points = 0;
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
        if (Q.state.get("score") == 500 && Q.state.get("level") == 1) {
            Q.clearStages();
            Q.stageScene("level2");
        }
        if (Q.state.get("score") == 1500 && Q.state.get("level") == 2) {
            Q.clearStages();
            Q.stageScene("level3");
        }
    },
    moveLeft: function () {
        this.p.x = this.p.x - 50;
        if (this.p.x < (0 - this.p.w)) { this.p.x = (800 + this.p.cx) };
    },
    moveRight: function () {
        this.p.x = this.p.x + 50;
        if (this.p.x > (800 + this.p.w)) { this.p.x = (0 - this.p.cx) };
    },
    openMouth: function () {
        this.p.mouthFace = 10;
        this.p.points = [[-55.5, 0], [0, 26.5], [55.5, 0], [0, -26.5]];
    },
    lives: function (lives) {
        this.p.sadFace = 100;
    }
});