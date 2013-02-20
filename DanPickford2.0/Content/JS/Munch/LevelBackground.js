Q.Sprite.extend("LevelBackground", {
    init: function (p) {
        this._super({
            asset: "../../Content/Images/Munch/Munch_Background1s.jpg",
            x: 400,
            y: 280.5,
            z: 0,
            collisionMask: 0
        });
        
    }
});