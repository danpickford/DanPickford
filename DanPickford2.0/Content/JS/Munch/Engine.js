Q.load(["../../Content/Images/Munch/Munch.png", "../../Content/Images/Munch/Munch_Background1s.jpg",
        "../../Content/Images/Munch/Doughnut.png", "../../Content/Images/Munch/Cherry.png",
        "../../Content/Images/Munch/Chicken_Leg.png", "../../Content/Images/Munch/Munch_Eat.png",
        "../../Content/Images/Munch/Munch_Sad.png", "../../Content/Images/Munch/Pizza.png"], function () {
            $('#state').html("MUUUNNNCCHHH!!");
            $('#munchBox').focus();
            
            Q.scene("level1", function (stage) {
                //stage.insert(new Q.LevelBackground());
                stage.insert(new Q.Munch());
                stage.insert(new Q.Food());
            });
            $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background1s.jpg')");
            Q.stageScene("level1");
            
            //Q.gameLoop(function (dt) {

            //});
            
        });