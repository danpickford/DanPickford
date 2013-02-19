Q.load(["../../Content/Images/Munch/Munch.png", "../../Content/Images/Munch/Munch_Background.jpg",
        "../../Content/Images/Munch/Doughnut.png", "../../Content/Images/Munch/Cherry.png",
        "../../Content/Images/Munch/Chicken_Leg.png", "../../Content/Images/Munch/Munch_Eat.png",
        "../../Content/Images/Munch/Munch_Sad.png", "../../Content/Images/Munch/Pizza.png"], function () {
            $('#state').html("MUUUNNNCCHHH!!");
            $('#munchBox').focus();
            var munch = new Q.Munch();
            Q.gameLoop(function (dt) {
                munch.update(dt);
                Q.clear();
                munch.render(Q.ctx);
            });
        });