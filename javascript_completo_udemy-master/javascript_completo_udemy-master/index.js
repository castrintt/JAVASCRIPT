// exx 4

// cira uma classe que simule um carro 

// propriedades marca cor gasolina restante 

// crie um metodo de dirigit o carro que va diminuindo a gasolina gradativamente  

// e um abaster para aumentar a gasolina quando necessario


class $cria_carro {
        constructor($marca,$cor,$gasolina,$consumo,$tanque){
            this.marca = $marca
            this.cor = $cor
            this.gasolina = $gasolina
            this.consumo = $consumo
            this.tanque = $tanque
        }
        dirigir = (km) => {
                for(let contador = 0 ; contador < this.gasolina;contador++){
                        this.gasolina -= (km * this.consumo)
                        if(this.gasolina == 0 || this.gasolina < 0){
                            console.log("precisa abastecer")
                        }
                        return this.gasolina     
                }
        }
        abastecer = (km) => {
                this.gasolina += km
                if(this.gasolina >= this.tanque) {
                    console.log("tanque cheio, não há como completar com mais gasolina")
                    this.gasolina = this.tanque                  
                    return this.gasolina
                }
                return this.gasolina
        }
}

let $ferrari = new $cria_carro("ferrari","preta",100,10,200)

$ferrari.dirigir(10)


$ferrari.abastecer(280)

console.log($ferrari.gasolina)

