function criarCartão(categoria, pergunta, resposta) {
let container = document.getElementById('container')
let cartão = document.createElement('article')
cartão.className = ('cartão')
cartão.innerHTML = <div class="cartao_conteudo">
                    <h3>the new order: Alemanha</h3>
                    <div class="cartao_conteudo_pergunta">
                        <P>qual é o grande plano do goring?</P>
                    </div>
                    <div class="cartao_conteudo_resposta">
                       <p>dominação mundial por guerra.</p>
                    </div>
                </div>
}