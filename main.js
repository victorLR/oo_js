function Veiculo(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;

  this.detalhes = function () {
    return `Veículo da marca ${this.marca}, modelo ${this.modelo}.`;
  };
}

function Carro(marca, modelo, portas) {
  Veiculo.call(this, marca, modelo); 
  this.portas = portas;

  this.detalhes = function () {
    return `${this.marca} ${this.modelo} é um carro com ${this.portas} portas.`;
  };
}

function Moto(marca, modelo, cilindradas) {
  Veiculo.call(this, marca, modelo);
  this.cilindradas = cilindradas;

  this.detalhes = function () {
    return `${this.marca} ${this.modelo} é uma moto com ${this.cilindradas} Cilindradas.`;
  };
}

const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Volkswagen", "Golf", 2);
const carro3 = new Carro("Volkswagen", "Gol", 2);
const moto = new Moto("YAMAHA","Lander",250)

console.log(carro1.detalhes());
console.log(carro2.detalhes());
console.log(carro3.detalhes());
console.log(moto.detalhes());