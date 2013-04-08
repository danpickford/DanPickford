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
    $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background1s.jpg')");
    stage.insert(new Q.UI.Text({
        label: "1",
        color: "black",
        x: 740,
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
    food2.p.foodid = 2;
    food1.p.lowrange = 50;
    food1.p.highrange = 225;
    food2.p.lowrange = 275;//50px buffer to prevent overlapping.
    food2.p.highrange = 600;
    stage.insert(food1);
    stage.insert(food2);
    stage.insert(new Q.Score());
    stage.insert(new Q.Lives());
    $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background2s.jpg')");
    stage.insert(new Q.UI.Text({
        label: "2",
        color: "black",
        x: 740,
        y: 70
    }));
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

    food2.p.foodid = 2;
    food2.p.y = (2 * 100) * -1;
    food2.p.lowrange = 150;
    food2.p.highrange = 350;
    food2.p.dropspeed = 1.5;

    food3.p.foodid = 3;
    food3.p.y = (6 * 100) * -1;
    food3.p.lowrange = 350;
    food3.p.highrange = 600;
    food3.p.dropspeed = 2.5;

    stage.insert(food1);
    stage.insert(food2);
    stage.insert(food3);
    stage.insert(new Q.Score());
    stage.insert(new Q.Lives());
    $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background3s.jpg')");
    stage.insert(new Q.UI.Text({
        label: "3",
        color: "black",
        x: 740,
        y: 70
    }));

});

Q.scene("level4", function (stage) {
    Q.state.add("lives", 1);
    Q.state.set("level", 4);
    stage.insert(new Q.Floor());
    stage.insert(new Q.Munch());
    var food1 = new Q.Food();
    var food2 = new Q.Food();
    var food3 = new Q.Food();

    food1.p.lowrange = 50;
    food1.p.highrange = 150;

    food2.p.foodid = 2;
    food2.p.y = (2 * 100) * -1;
    food2.p.lowrange = 150;
    food2.p.highrange = 350;
    food2.p.dropspeed = 1.5;

    food3.p.foodid = 3;
    food3.p.y = (6 * 100) * -1;
    food3.p.lowrange = 350;
    food3.p.highrange = 600;
    food3.p.dropspeed = 2.5;

    stage.insert(food1);
    stage.insert(food2);
    stage.insert(food3);
    stage.insert(new Q.Score());
    stage.insert(new Q.Lives());
    $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background4s.jpg')");
    stage.insert(new Q.UI.Text({
        label: "4",
        color: "black",
        x: 740,
        y: 70
    }));

});

Q.scene("level5", function (stage) {
    Q.state.add("lives", 1);
    Q.state.set("level", 5);
    stage.insert(new Q.Floor());
    stage.insert(new Q.Munch());
    var food1 = new Q.Food();
    var food2 = new Q.Food();
    var food3 = new Q.Food();

    food1.p.lowrange = 50;
    food1.p.highrange = 150;

    food2.p.foodid = 2;
    food2.p.y = (2 * 100) * -1;
    food2.p.lowrange = 150;
    food2.p.highrange = 350;
    food2.p.dropspeed = 1.5;

    food3.p.foodid = 3;
    food3.p.y = (6 * 100) * -1;
    food3.p.lowrange = 350;
    food3.p.highrange = 600;
    food3.p.dropspeed = 2.5;

    stage.insert(food1);
    stage.insert(food2);
    stage.insert(food3);
    stage.insert(new Q.Score());
    stage.insert(new Q.Lives());
    $("#munchBox").css("background-image", "url('../../Content/Images/Munch/Munch_Background5s.jpg')");
    stage.insert(new Q.UI.Text({
        label: "5",
        color: "black",
        x: 740,
        y: 70
    }));

});