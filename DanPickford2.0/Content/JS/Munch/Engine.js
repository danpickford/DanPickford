Q.load(["../../Content/Images/Munch/Munch.png", "../../Content/Images/Munch/Munch_Background1s.jpg",
        "../../Content/Images/Munch/Doughnut.png", "../../Content/Images/Munch/Cherry.png",
        "../../Content/Images/Munch/Chicken_Leg.png", "../../Content/Images/Munch/Munch_Eat.png",
        "../../Content/Images/Munch/Munch_Sad.png", "../../Content/Images/Munch/Pizza.png",
        "../../Content/Images/Munch/Munch_Background2s.jpg", "../../Content/Images/Munch/Munch_Background3s.jpg",
        "../../Content/Images/Munch/Munch_Background4s.jpg", "../../Content/Images/Munch/Munch_Background5s.jpg",
        "../../Content/Images/Munch/gameover.jpg"], function () {
            $('#state').html("MUNCH!");

            Q.scene("CleanYourSelfUpYouDead", function (stage) {
                $("#munchBox").css("background-image", "url('../../Content/Images/Munch/gameover.jpg')");
                Q.clearStages();
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

            
            Q.stageScene("level1", 0);
            
            //Q.debug = true;
});
