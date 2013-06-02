//410
Q.Sprite.extend("Player", {
    init: function (p) {
        this._super(p, { sheet: "player", x: 30, y: 180 });
        Q.input.on("Restart", this, "restart");
        this.add('2d, platformerControls');
        this.on("hit.sprite", function (collision) {
            if (collision.obj.isA("Goal")) {
                Q.clearStages();
                this.destroy();
                if (Q.state.get("level") == 3) {
                    $('#myName').remove();
                    $('#myName_container').remove();
                    $('#LivesDiv').css('display', 'none');
                    $('#CV').submit();
                }
                if (Q.state.get("level") == 2) {
                    Q.stageScene("level3", 1);
                }
                if (Q.state.get("level") == 1) {
                    Q.stageScene("level2", 1);
                }
            }
        });
    },
    restart: function() {
        Q.clearStages();
        Q.stageScene("level" + Q.state.get("level"), 1);
    }
});