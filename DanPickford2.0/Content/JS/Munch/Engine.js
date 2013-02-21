Q.load(["../../Content/Images/Munch/Munch.png", "../../Content/Images/Munch/Munch_Background1s.jpg",
        "../../Content/Images/Munch/Doughnut.png", "../../Content/Images/Munch/Cherry.png",
        "../../Content/Images/Munch/Chicken_Leg.png", "../../Content/Images/Munch/Munch_Eat.png",
        "../../Content/Images/Munch/Munch_Sad.png", "../../Content/Images/Munch/Pizza.png", "../../Content/Images/Munch/Floor1.jpg"], function () {
            $('#state').html("MUUUNNNCCHHH!!");
            $('#munchBox').focus();
            Q.state.set("score", 0);
            Q.state.set("lives", 3);
            Q.scene("level1", function (stage) {
                stage.insert(new Q.Floor());
                stage.insert(new Q.Munch());
                stage.insert(new Q.Food());
                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "black",
                    x: 720,
                    y: 70
                }));
                stage.insert(new Q.UI.Text({
                    label: "0",
                    color: "black",
                    x: 720,
                    y: 160
                }));
            });


            $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background1s.jpg')");
            Q.stageScene("level1");
            
            //Q.gameLoop(function (dt) {

            //});
            
        });