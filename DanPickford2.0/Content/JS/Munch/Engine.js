Q.load(["../../Content/Images/Munch/Munch.png", "../../Content/Images/Munch/Munch_Background1s.jpg",
        "../../Content/Images/Munch/Doughnut.png", "../../Content/Images/Munch/Cherry.png",
        "../../Content/Images/Munch/Chicken_Leg.png", "../../Content/Images/Munch/Munch_Eat.png",
        "../../Content/Images/Munch/Munch_Sad.png", "../../Content/Images/Munch/Pizza.png",
        "../../Content/Images/Munch/Floor1.jpg", "../../Content/Images/Munch/Munch_Mouth.png"], function () {
            $('#state').html("MUUUNNNCCHHH!!");
            $('#munchBox').focus();
            Q.state.set("score", 0);
            Q.state.set("lives", 3);

            Q.scene("level1", function (stage) {
                Q.state.set("gravity", 0.2);
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


            $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background1s.jpg')");
            Q.stageScene("level1");
            //Q.debug = true;
});
