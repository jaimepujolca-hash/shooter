/**
 * Jefe Final del juego. Hereda de Opponent.
 */
class Boss extends Opponent {
    constructor(game) {
        super(game);
        this.speed = OPPONENT_SPEED + OPPONENT_SPEED; // va al doble de rapido
        this.myImage = "assets/boss.png";
        this.myImageDead = "assets/boss_dead.png";
        this.image.src = this.myImage;
    }
}