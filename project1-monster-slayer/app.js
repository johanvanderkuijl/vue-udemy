new Vue({
    el: '#app',
    data: {
        player: {
            health: 100
        },
        monster: {
            health: 100
        },
        game: {
            playing: false,
            log: []
        }
    },

    computed: {
        progressBarPlayer: function() {
            return {
                width: this.player.health + '%',
                backgroundColor: 'green',
                margin: 0,
                color: 'white' 
            }
        },
        progressBarMonster: function() {
            return {
                width: this.monster.health + '%',
                backgroundColor: 'green',
                margin: 0,
                color: 'white' 
            }
        }
    },
    methods: {
        start: function() {
            this.game.playing = true;
            this.player.health = 100;
            this.monster.health = 100;
            
            this.game.log = [];
        },
        attack: function() {
            // a normal attack with equal damage from 0 - 10
            player_health_damage = Math.round(Math.random() * 10);
            monster_health_damage = Math.round(Math.random() * 10);
            this.game.log.unshift({ 
                class: "player-turn",
                text: "Player hits monster for " + monster_health_damage
            })
            this.game.log.unshift({ 
                class: "monster-turn",
                text: "Monster hits player for " + player_health_damage
            })
            this.player.health -= player_health_damage;
            this.monster.health -= monster_health_damage;

            if (this.player.health <= 0 || this.monster.health <= 0) {
                this.game.playing = false;
            }
        },
        specialAttack: function() {
            // like attack, but monster looses between 10 - 20
            player_health_damage = Math.round(Math.random() * 10);
            monster_health_damage = (Math.round(Math.random() * 10) + 10);
            this.game.log.unshift({ 
                class: "player-turn",
                text: "Player hits monster for " + monster_health_damage
            })
            this.game.log.unshift({ 
                class: "monster-turn",
                text: "Monster hits player for " + player_health_damage
            }) 
            this.player.health -= player_health_damage;
            this.monster.health -= monster_health_damage;

            if (this.player.health <= 0 || this.monster.health <= 0) {
                this.game.playing = false;
            }
        },
        heal: function() {
            // monster does damage but player also heals.
            player_health_damage = Math.round(Math.random() * 10);
            this.player.health += 10;
            if (this.player.health > 100) {
                this.player.health = 100
            }
            this.game.log.unshift({ 
                class: "player-turn",
                text: "Player heals himself for 10"
            })
            this.game.log.unshift({ 
                class: "monster-turn",
                text: "Monster hits player for " + player_health_damage
            }) 
            this.player.health -= player_health_damage;
            this.monster.health -= 0;

            if (this.player.health <= 0 || this.monster.health <= 0) {
                this.game.playing = false;
            }
        },

        derp: function() {
            // random do -50 for a player
            player_health_damage = 0;
            monster_health_damage = 0;
            if (Math.random() > 0.5) {
                player_health_damage = 50;
                
            } else {
                monster_health_damage = 50;
            }

            this.game.log.unshift({ 
                class: "player-turn",
                text: "Player hits monster for " + monster_health_damage
            })
            this.game.log.unshift({ 
                class: "monster-turn",
                text: "Monster hits player for " + player_health_damage
            }) 
            this.player.health -= player_health_damage;
            this.monster.health -= monster_health_damage;

            if (this.player.health <= 0 || this.monster.health <= 0) {
                this.game.playing = false;
            }
        },

        giveUp: function() {
            this.player.health = 0;
            
            this.game.playing = false;
            this.game.log = [];
        },
    }
})