Q.Sprite.extend("Baddy", {
    init: function (p) {
        this._super(p, { sheet: 'baddy', vx: 100 });
        this.add('2d, aiBounce');

        this.on("bump.left,bump.right,bump.bottom", function (collision) {
            if (collision.obj.isA("Player")) {
                Q.stageScene("endGame", 1, { label: "You Died" });
                collision.obj.destroy();
            }
        });

        this.on("bump.top", function (collision) {
            if (collision.obj.isA("Player")) {
                this.destroy();
                collision.obj.p.vy = -300;
            }
        });
    }
});