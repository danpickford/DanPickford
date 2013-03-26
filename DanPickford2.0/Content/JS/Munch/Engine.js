Q.load(["../../Content/Images/Munch/Munch.png", "../../Content/Images/Munch/Munch_Background1s.jpg",
        "../../Content/Images/Munch/Doughnut.png", "../../Content/Images/Munch/Cherry.png",
        "../../Content/Images/Munch/Chicken_Leg.png", "../../Content/Images/Munch/Munch_Eat.png",
        "../../Content/Images/Munch/Munch_Sad.png", "../../Content/Images/Munch/Pizza.png",
        "../../Content/Images/Munch/Floor1.jpg"], function () {
            $('#state').html("MUUUNNNCCHHH!!");
            $('#munchBox').focus();
            Q.state.set("score", 0);
            Q.state.set("lives", 3);

            Q.scene("level1", function (stage) {
                Q.state.set("gravity", 0.2);
                Q.state.set("score", 0);
                Q.state.set("lives", 3);
                stage.insert(new Q.Floor());
                stage.insert(new Q.Munch());
                stage.insert(new Q.Food());
                stage.insert(new Q.Score());
                stage.insert(new Q.Lives());

                stage.insert(new Q.UI.Text({
                    label: "1", 
                    color: "black",
                    x: 720,
                    y: 70
                }));
                
            });
            
            Q.scene("level2", function (stage) {
                Q.state.set("gravity", 0.2);
                Q.state.set("score", 0);
                Q.state.set("lives", 3);
                stage.insert(new Q.Floor());
                stage.insert(new Q.Munch());
                stage.insert(new Q.Food());
                stage.insert(new Q.Food());
                stage.insert(new Q.Score());
                stage.insert(new Q.Lives());

                stage.insert(new Q.UI.Text({
                    label: "1",
                    color: "black",
                    x: 720,
                    y: 70
                }));

            });
            Q.scene("CleanYourSelfUpYouDead", function(stage) {
                var box = stage.insert(new Q.UI.Container({
                    x: Q.width / 2, y: Q.height / 2, fill: "rgba(0,0,0,0.5)"
                }));

                var button = box.insert(new Q.UI.Button({
                    x: 0,
                    y: 20,
                    fill: "#CCCCCC",
                    label: "Play Again"
                }));
                var label = box.insert(new Q.UI.Text({
                    x: 10, y: -10 - button.p.h,
                    label: stage.options.label
                }));
                
                button.on("click", function () {
                    Q.clearStages();
                    Q.stageScene('level1');
                });
                box.fit(40);
            });

            $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background1s.jpg')");
            Q.stageScene("level1");
            //Q.debug = true;
});
