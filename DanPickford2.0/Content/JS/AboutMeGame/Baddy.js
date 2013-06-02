Q.Sprite.extend("Baddy", {
    init: function (p) {
        this._super(p, { sheet: 'baddy', vx: 100 });
        this.add('2d, aiBounce');

        this.on("bump.left,bump.right,bump.bottom", function (collision) {
            if (collision.obj.isA("Player")) {
                if (Q.state.get("Lives") == 1) {
                    Q.state.dec("Lives", 1);
                    Q.stageScene("endGame", 1, { label: "You Died", labelPlay: "Restart Level" });
                    collision.obj.destroy();
                } else {
                    Q.state.dec("Lives", 1);
                    $('#livesLeft').text(Q.state.get("Lives"));
                    this.destroy();
                }
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