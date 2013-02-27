window.addEventListener('load',function(e) {
    var Q = window.Q = Quintus().include("Sprites, Scenes")
                              .setup({ width: 960, height: 512 });
    Q.Sprite.extend("RandomShape", {
        init: function(p) {
            var angle = Math.random()*2*Math.PI,
                numPoints = 3 + Math.floor(Math.random()*5),
                minX = 0, maxX = 0,
                minY = 0, maxY = 0,
                curX, curY;

            p = p || {};

            p.points = [];

            var startAmount = 40;

            for(var i = 0;i < numPoints;i++) {
                curX = Math.floor(Math.cos(angle)*startAmount);
                curY = Math.floor(Math.sin(angle)*startAmount);

                if(curX < minX) minX = curX;
                if(curX > maxX) maxX = curX;

                if(curY < minY) minY = curY;
                if(curY > maxY) maxY = curY;

                p.points.push([curX,curY]);

                startAmount += Math.floor(Math.random()*10);
                angle += (Math.PI * 2) / (numPoints+1);
            };

            maxX += 30;
            minX -= 30;
            maxY += 30;
            minY -= 30;

            p.w = maxX - minX;
            p.h = maxY - minY;

            for(var i = 0;i < numPoints;i++) {
                p.points[i][0] -= minX + p.w/2;
                p.points[i][1] -= minY + p.h/2;
            }


            p.x = Math.random()*Q.width;
            p.y = Math.random()*Q.height;
            p.cx = p.w/2;
            p.cy = p.h/2;
            p.type = 1;

            p.dx = 1;
            p.dy = 1;
            p.speed = Math.random() * 20 + 30;
            p.omega = Math.random() * 40 - 20;
            p.scaleOffset = 0;
            p.scaleSpeed = Math.random();
            p.scaleAmount = 0.70 * Math.random();

            this._super(p);
        },

        step: function(dt) {
            var p = this.p;

            p.x += p.dx * p.speed * dt;
            p.y += p.dy * p.speed * dt;

            if(p.x < 0) { 
                p.x = 0;
                p.dx = 1;
            } else if(p.x > Q.width - p.w) { 
                p.dx = -1;
                p.x = Q.width - p.w;
            }

            if(p.y < 0) {
                p.y = 0;
                p.dy = 1;
            } else if(p.y > Q.height - p.h) {
                p.dy = -1;
                p.y = Q.height - p.h;
            }

            p.angle += dt * p.omega; 

            p.scaleOffset += dt;
            p.scale = 1 + Math.sin(p.scaleOffset * p.scaleSpeed) * p.scaleAmount;
            var maxCol = 3, collided = false;
            p.hit = false;
            while((collided = this.stage.search(this)) && maxCol > 0) {

                if(collided) {
                    p.hit = true;
                    this.p.x -= collided.separate[0];
                    this.p.y -= collided.separate[1];
                }
                maxCol--;
            }
        }
    });
    var numShapes = 5;
    Q.scene("start",new Q.Scene(function(stage) {
        var shapesLeft = numShapes;
        while(shapesLeft-- > 0) {
            stage.insert(new Q.RandomShape());
        }
    }));

    Q.stageScene("start");
    Q.debug = true;
    Q.debugFill = true;
});