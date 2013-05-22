Q.Sprite.extend("Spring", {
    init: function (p) {
        this._super(p, {
            sheet: 'spring',
            gravity: 0,
            bounce: -600});
        this.add('2d');

        this.on("bump.top", function (collision) {
            if (collision.obj.isA("Player")) {
                collision.obj.p.vy = this.p.bounce;
            }
        });
    }
});