Q.Sprite.extend("Step", {
    init: function (p) {
        this._super(p, { sheet: 'step'});
        this.add('2d, aiBounce');

        this.on("bump.left", function (collision) {
            if (collision.obj.isA("Player")) {
                this.p.x = this.p.x + 2;
            }

        });
        this.on("bump.right", function (collision) {
            if (collision.obj.isA("Player")) {
                this.p.x = this.p.x - 2;
            }

        });
    }
});