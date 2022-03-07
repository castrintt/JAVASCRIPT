// classse pessoa com saldo conta corrente, pix , compras (array) , tota pagar no mes  

class conta_bancaria {
                constructor(conta_corrente, compras, fechamento){
                        this.conta_corrente = conta_corrente
                        this.compras = compras
                        this.fechamento = fechamento
                }
                pix_enviar(valor){
                        if(this.conta_corrente < valor){
                                console.log("saldo insuficiente para enviar pix")
                        }else if(this.conta_corrente >= valor){
                                this.conta_corrente -= valor
                                return this.conta_corrente
                        }
                }
                pix_receber(valor){
                                this.conta_corrente += valor
                                return this.conta_corrente
                }
                total = () => {
                        for(let i = 0 ; i < this.compras.length ;i++){
                                this.fechamento += this.compras[i]
                                
                        }  
                        return this.fechamento
                }
                pagar = () => {
                        
                        if(this.conta_corrente < this.fechamento){
                                console.log("saldo insuficiente para efetuar o pagamento da conta")
                                
                        }else if(this.conta_corrente >= this.fechamento){
                                this.conta_corrente -= this.fechamento
                                this.fechamento = 0
                                return this.conta_corrente
                        }
                        
                }
}





let conta_igor = new conta_bancaria(1000,[200,200,50,65],0)

console.log(conta_igor)

// conta_bancaria {
//         total: [Function: total],     
//         pagar: [Function: pagar],     
//         conta_corrente: 1000,
//         compras: [ 200, 200, 50, 65 ],
//         fechamento: 0                                    \javascript_comple
//       }

conta_igor.total() //soma as compras

conta_igor.pix_enviar(500) //retira do saldo conta_corrente 500 reais se houver

conta_igor.pix_receber(20)// acrescenta o valor dentro de conta_corrente

conta_igor.pagar() // se o valor de conta_corrente for maior ou igual ao fechamento, diminui o valor da conta_corrente e zera o fechamento

console.log(conta_igor)

// conta_bancaria {
//         total: [Function: total],
//         pagar: [Function: pagar],
//         conta_corrente: 5,
//         compras: [ 200, 200, 50, 65 ],
//         fechamento: 0
//       }

