class Produto {
  constructor(nome, preco, desc = 0.5) {
    this._nome = nome;
    this._preco = preco;
    this._desc = desc;
  }

  precoFinal() {
    return this.preco * (1 - this._desc);
  }
  get nome() {
    return ` ${this._nome}`;
  }
  set nome(novoNome) {
    this._nome = novoNome.toUpperCase();
  }
  get preco() {
    return this._preco;
  }
  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco;
    }
  }
}

Produto.prototype.log = function () {
  console.log(`Nome: ${this.nome}, Preço: ${this.preco}`);
};

Object.defineProperty(Produto.prototype, "desc", {
  get: function () {
    return this._desc;
  },
  set: function (novoDesc) {
    if (novoDesc >= 0 && novoDesc <= 1) {
      this._desc = novoDesc;
    }
  },
});
Object.defineProperty(Produto.prototype, "descString", {
  get: function () {
    return `${this._desc * 100}% de desconto`;
  },
});
const p1 = new Produto("Caneta", 10);
p1.log();
p1.desc = 0.99;
console.log(p1.desc);
console.log(p1.descString);

/* const p2 = new Produto("Geladeira", 10000, 0.8);
p1.nome = "caneta";
p1.preco = -20;
console.log(p1.nome);
console.log(p1.preco); 
console.log(p2.preco);
console.log(p2.precoFinal()); 
*/
