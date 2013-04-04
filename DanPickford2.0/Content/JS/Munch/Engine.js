Q.load(["../../Content/Images/Munch/Munch.png", "../../Content/Images/Munch/Munch_Background1s.jpg",
        "../../Content/Images/Munch/Doughnut.png", "../../Content/Images/Munch/Cherry.png",
        "../../Content/Images/Munch/Chicken_Leg.png", "../../Content/Images/Munch/Munch_Eat.png",
        "../../Content/Images/Munch/Munch_Sad.png", "../../Content/Images/Munch/Pizza.png",
        "../../Content/Images/Munch/Floor1.jpg"], function () {
            $('#state').html("MUNCH! ");
            Q.scene("level1", function (stage) {
                $('#munchBox').focus();
                $("#restart").css("display", "none");
                Q.clearStage(1);
                Q.state.set("score", 0);
                Q.state.set("lives", 3);
                Q.state.set("level", 1);
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
                Q.state.add("lives", 1);
                Q.state.set("level", 2);
                stage.insert(new Q.Floor());
                stage.insert(new Q.Munch());
                var food1 = new Q.Food();
                var food2 = new Q.Food();
                
                food1.p.lowrange = 50;
                food1.p.highrange = 250;
                food2.p.handycap = 3;
                food2.p.y = (2 * 100) * -1;
                food2.p.lowrange = 250;
                food2.p.highrange = 600;
                food2.p.dropspeed = 1.5;
                stage.insert(food1);
                stage.insert(food2);
                stage.insert(new Q.Score());
                stage.insert(new Q.Lives());

                stage.insert(new Q.UI.Text({
                    label: "2",
                    color: "black",
                    x: 720,
                    y: 70
                }));
                //Q.stageScene("touchScene", 1);
            });
            Q.scene("level3", function (stage) {
                Q.state.add("lives", 1);
                Q.state.set("level", 3);
                stage.insert(new Q.Floor());
                stage.insert(new Q.Munch());
                var food1 = new Q.Food();
                var food2 = new Q.Food();
                var food3 = new Q.Food();

                food1.p.lowrange = 50;
                food1.p.highrange = 150;
                
                food2.p.handycap = 3;
                food2.p.y = (2 * 100) * -1;
                food2.p.lowrange = 150;
                food2.p.highrange = 350;
                food2.p.dropspeed = 1.5;
                
                food3.p.handycap = 6;
                food3.p.y = (6 * 100) * -1;
                food3.p.lowrange = 350;
                food3.p.highrange = 600;
                food3.p.dropspeed = 2.5;

                stage.insert(food1);
                stage.insert(food2);
                stage.insert(food3);
                stage.insert(new Q.Score());
                stage.insert(new Q.Lives());

                stage.insert(new Q.UI.Text({
                    label: "2",
                    color: "black",
                    x: 720,
                    y: 70
                }));

            });
            Q.scene("CleanYourSelfUpYouDead", function(stage) {
                var box = stage.insert(new Q.UI.Container({
                    x: Q.width / 2, y: Q.height / 2, fill: "rgba(0,0,0,0.5)"
                }));

                var label = box.insert(new Q.UI.Text({
                    x: 10, y: -10,
                    label: stage.options.label
                }));
                
                box.fit(60);        
            });

            Q.scene("touchScene", function (stage) {
                stage.insert(new Q.MouseDetect());
            });

            $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background1s.jpg')");
            Q.stageScene("level1", 0);
            
            //Q.debug = true;
});
