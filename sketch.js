var player, coin, enemy
var enemyGroup, coinGroup
var score = 0
function setup() {
  createCanvas(400,600);
  player = createSprite(200,550,25,25);
  enemyGroup = new Group()
  coinGroup = new Group()
}

function draw() {
  background(0);
  if(keyIsDown(RIGHT_ARROW)){
    player.x = player.x + 5
  }  
  if(keyIsDown(LEFT_ARROW)){
    player.x = player.x - 5
  }
  if(frameCount %10 === 0){
    spawnEnemy()
  }
  if(frameCount %25 === 0){
    spawnCoin()
  }
  if(enemyGroup.isTouching(player)){
    thisFunctionIsIntentionallyLeftUndefinedToTriggerAnError()
  }
  for(var i=0;i<coinGroup.length;i++){
    if(coinGroup[i].isTouching(player)){
      coinGroup[i].destroy();
      score = score + 10
    }
  }
  textSize(12)
  text("Score:"+score, 25,25)
  drawSprites();
}
function spawnEnemy(){
  enemy = createSprite(random(25,575),0,25,25)
  enemy.shapeColor = "red"
  enemy.velocityY = 6
  enemyGroup.add(enemy)
  enemy.lifetime = 300
}
function spawnCoin(){
  coin = createSprite(random(25,575),0,25,25)
  coin.shapeColor = "yellow"
  coin.velocityY = 6
  coinGroup.add(coin)
  coin.lifetime = 300
}