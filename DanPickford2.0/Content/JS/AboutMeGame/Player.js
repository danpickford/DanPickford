//410
Q.Sprite.extend("Player", {
    init: function (p) {
        this._super(p, { sheet: "player", x: 30, y: 180 });
        this.add('2d, platformerControls');

        this.on("hit.sprite", function (collision) {
            if (collision.obj.isA("Goal")) {
                Q.clearStages();
                Q.stageScene("level2", 1);
                this.destroy();
            }
        });
    }
});