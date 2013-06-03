Q.scene("level3", function (stage) {
    if (Q.state.get("Lives") == 0) {
        Q.state.set("Lives", 3);
    }
    $('#livesLeft').text(Q.state.get("Lives"));
    $('#LivesDiv').css('display', 'block');
    Q.state.set("level", 3);
    stage.collisionLayer(new Q.TileLayer({
        dataAsset: '../../Content/JSON/level3.json',
        sheet: 'tiles3'
    }));

    stage.insert(new Q.UI.Text({
        x: 240, y: 590,
        label: "2009 Started a fulltime position at ...",
        size: 18,
        family: 'Courier New',
        color: '#fff'
    }));
    
    stage.insert(new Q.UI.Text({
        x: 2300, y: 370,
        label: "C#",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2390, y: 570,
        label: "Javascript",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2430, y: 300,
        label: "VB",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2630, y: 570,
        label: "SQL",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2490, y: 410,
        label: "XSLT",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2630, y: 500,
        label: "MVC",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2490, y: 510,
        label: "JQuery",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2930, y: 570,
        label: "Entity Framework",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2630, y: 420,
        label: "WPF",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2360, y: 520,
        label: "Java",
        size: 32,
        family: 'Courier New',
        color: '#76EE00'
    }));
    stage.insert(new Q.UI.Text({
        x: 2790, y: 480,
        label: "MS Visual Studio",
        size: 32,
        family: 'Courier New',
        color: '#FF4100'
    }));
    stage.insert(new Q.UI.Text({
        x: 2890, y: 260,
        label: "NetBeans",
        size: 32,
        family: 'Courier New',
        color: '#FF4100'
    }));
    stage.insert(new Q.UI.Text({
        x: 2810, y: 410,
        label: "Web Services",
        size: 32,
        family: 'Courier New',
        color: '#FF4100'
    }));
    stage.insert(new Q.UI.Text({
        x: 2790, y: 360,
        label: "WCF",
        size: 32,
        family: 'Courier New',
        color: '#FF4100'
    }));
    stage.insert(new Q.UI.Text({
        x: 2890, y: 440,
        label: "LINQ",
        size: 32,
        family: 'Courier New',
        color: '#FF4100'
    }));
    stage.insert(new Q.UI.Text({
        x: 3000, y: 440,
        label: "TDD",
        size: 32,
        family: 'Courier New',
        color: '#B902C5'
    }));
    stage.insert(new Q.UI.Text({
        x: 3300, y: 440,
        label: "Lambda",
        size: 32,
        family: 'Courier New',
        color: '#B902C5'
    }));
    stage.insert(new Q.UI.Text({
        x: 3000, y: 340,
        label: "Quintus",
        size: 32,
        family: 'Courier New',
        color: '#B902C5'
    }));
    stage.insert(new Q.UI.Text({
        x: 3000, y: 520,
        label: "KnockoutJS",
        size: 32,
        family: 'Courier New',
        color: '#B902C5'
    }));
    stage.insert(new Q.UI.Text({
        x: 3200, y: 595,
        label: "Check out my CV to find out more information. Thanks for Playing!",
        size: 18,
        family: 'Courier New',
        color: '#fff'
    }));
    var player = stage.insert(new Q.Player({ x: 60, y: 360 }));

    // Give the stage a moveable viewport and tell it
    // to follow the player.
    stage.add("viewport").follow(player);
    stage.insert(new Q.Spring({ x: 250, y: 570, bounce: -900 }));
    stage.insert(new Q.Spring({ x: 1630, y: 570, bounce: -900 }));
    stage.insert(new Q.Baddy({ x: 3000, y: 0 }));
    stage.insert(new Q.Baddy({ x: 3300, y: 0 }));
    stage.insert(new Q.Baddy({ x: 3060, y: 0 }));
    stage.insert(new Q.Baddy({ x: 3030, y: 0 }));
    stage.insert(new Q.Goal({ x: 3440, y: 560 }));
});