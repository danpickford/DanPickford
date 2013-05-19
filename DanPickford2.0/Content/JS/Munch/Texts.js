Q.UI.Text.extend("Score", {
    init: function (p) {
        this._super({
            label: "" + Q.state.get("score"),
            x: 740,
            y: 160
        });

        Q.state.on("change.score", this, "score");
    },
    score: function (score) {
        this.p.label = String(score);
    }
});

Q.UI.Text.extend("Lives", {
    init: function (p) {
        this._super({
            label: "" + Q.state.get("lives"),
            x: 740,
            y: 250
        });

        Q.state.on("change.lives", this, "lives");
    },
    lives: function (lives) {
        this.p.label = String(lives);
    }
});