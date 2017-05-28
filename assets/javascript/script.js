// Functions random
function randomX() { return Math.abs(Math.floor(Math.random() * canvas1.width - 50)); }
function randomY() { return Math.abs(Math.floor(Math.random() * canvas1.height - 50)); }
function random(speed) { return Math.abs(Math.random() * speed) + 3; }
function random(number) { return Math.abs(Math.random() * number); }


// Check if item if not on obstacle
function verification(_this)
{
    for (var i = 0; i < obstaclesTotal; i++) {
        for (var y = 0; y < cheesesTotal; y++)
        {
            var cheese_delete = true;

            if(obstacles[i].div.getBoundingClientRect().right < _this.div.getBoundingClientRect().left + 6)
                cheese_delete = false;
            if(obstacles[i].div.getBoundingClientRect().left > _this.div.getBoundingClientRect().right + 6)
                cheese_delete = false;
            if(obstacles[i].div.getBoundingClientRect().bottom < _this.div.getBoundingClientRect().top + 6)
                cheese_delete = false;
            if(obstacles[i].div.getBoundingClientRect().top > _this.div.getBoundingClientRect().bottom + 6)
                cheese_delete = false;

            if (cheese_delete)
            {
                _this.div.remove();
            }
        }
    }
}
