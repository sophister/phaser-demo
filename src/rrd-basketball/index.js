/**
 * Created by jess on 2017/6/9.
 */



/////////////////////////////  加载资源 场景  ////////////////

function LoadingState(game){

}

LoadingState.prototype.preload = function(game){

    game.load.image('logo', './assets/logo.png');

    game.load.image('ball', './assets/ball.png');
    game.load.image('countdown', './assets/countdown.png');
    game.load.image('defeat', './assets/defeat.png');
    game.load.image('hoopAll', './assets/hoop-all.png');
    game.load.image('playBg', './assets/play-bg.png');
    game.load.image('pointer', './assets/pointer.png');
    game.load.image('score', './assets/score.png');
    game.load.image('sendBtn', './assets/send-btn.png');
    game.load.image('shareBtn', './assets/share-btn.png');
};

LoadingState.prototype.create = function(game){

    var text = game.add.text(game.world.width / 2, game.world.height / 2, '加载中...', {
        fill : '#fff',
        fontSize : '60px'
    } );

    text.anchor.set(.5, .5);

    setTimeout(function(){
        game.state.start('play');
    }, 1000);
};


/////////////////////////////  入口菜单栏  场景  ///////

function MainMenuState(){

}

MainMenuState.prototype.create = function(){};


//////////////////////////////  游戏中  场景  /////////


function PlayState(game){

    //用户得分
    this.score = 0;
    //剩余秒数
    this.remainSeconds = 60;


    this.countdownSprite = null;
    this.scoreSprite = null;
}


PlayState.prototype.create = function(game){
    
    //背景图片
    var bg = game.add.image(0, 0, 'playBg');

    //logo
    var logo = game.add.image(21, 58, 'logo');

    //倒计时组
    var countdownGroup = game.add.group();
    countdownGroup.x = 214;
    countdownGroup.y = 44;
    var countdownBg = game.add.image(0, 0, 'countdown');
    var countdownImage = game.cache.getImage('countdown');
    var countdownText = game.add.text(174, ( countdownImage.height - 8 ) / 2 + 8, this.remainSeconds, {
        fill : '#fff',
        fontSize : '28px'
    });
    countdownText.anchor.set(0, .5);
    countdownGroup.add(countdownBg);
    countdownGroup.add(countdownText);
    this.countdownSprite = countdownText;


    //得分组
    var scoreGroup = game.add.group();
    scoreGroup.x = 482;
    scoreGroup.y = 50;
    var scoreBg = game.add.image(0, 0, 'score');
    var scoreImage = game.cache.getImage('score');
    var scoreText = game.add.text(139, 0, this.score, {
        fill : '#fff',
        fontSize : '28px'
    });
    scoreText.anchor.set(0, 0);
    scoreGroup.add(scoreBg);
    scoreGroup.add(scoreText);
    this.scoreSprite = scoreText;

    //篮筐
    var hoop = game.add.sprite(game.world.width, game.world.height - 166, 'hoopAll');
    hoop.anchor.set(1, 1);


    //篮球
    this.createBall();
};


PlayState.prototype.createBall = function(){
    var game = this.game;

    var ball = game.add.image(74, 574, 'ball');

};





var game = new Phaser.Game(1334, 750, Phaser.AUTO, '#game-con');



game.state.add('loading', LoadingState);
game.state.add('menu', MainMenuState);
game.state.add('play', PlayState);



game.state.start('loading');

