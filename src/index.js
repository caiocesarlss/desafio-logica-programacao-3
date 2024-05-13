class Heroi {
	constructor(nome, idade, tipo) {
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
	}

	atacar() {
		if (this.tipo === "guerreiro") {
			this.ataque = "espada";
		} else if (this.tipo === "mago") {
			this.ataque = "magia";
		} else if (this.tipo === "monge") {
			this.ataque = "artes marciais";
		} else if (this.tipo === "ninja") {
			this.ataque = "shuriken";
		}

		console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}.`);
	}

}

let heroi = new Heroi("Caio César", 26, "mago");
heroi.atacar();