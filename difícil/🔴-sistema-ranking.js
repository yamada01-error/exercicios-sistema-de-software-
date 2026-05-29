class Jogador {

    constructor(nome, pontos) {
        this.nome = nome;
        this.pontos = pontos;
    }

}

class Ranking {

    constructor() {
        this.jogadores = [];
    }

    adicionarJogador(nome, pontos) {

        let jogador = new Jogador(
            nome,
            pontos
        );

        this.jogadores.push(jogador);

        console.log(
            `${nome} foi adicionado ao ranking`
        );

    }

    mostrarRanking() {

        this.jogadores.sort(
            (a, b) => b.pontos - a.pontos
        );

        console.log("=== RANKING ===");

        for (let i = 0; i < this.jogadores.length; i++) {

            let jogador = this.jogadores[i];

            console.log(
                `${i + 1}° Lugar - ${jogador.nome} (${jogador.pontos} pontos)`
            );

        }

    }

}

let ranking = new Ranking();

ranking.adicionarJogador("João", 150);
ranking.adicionarJogador("Maria", 320);
ranking.adicionarJogador("Carlos", 210);

ranking.mostrarRanking();
