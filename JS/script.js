$(document).ready(function(){ 
    $(".pedido").hide(); 
    $("#off").hide(); 
    $(".botao-select").hide(); 
    $("#botao-selected").hide(); 
    $("#botao-selected-off").hide(); 
    $("#botao-select-off").hide(); 
    buscarConteudo();
})

$(".botao-select").click(function(){
    $(".pedido").hide(); 
    $(".botao-select").hide(); 
    $("#botao-select-off").show(); 
    $("#off").show(); 
})


$("#botao-select-off").click(function(){
    $(".pedido").show(); 
    $(".botao-select").show(); 
    $("#botao-select-off").hide(); 
    $("#off").hide(); 
})

$("#botao-selected-off").click(function(){
    $(".pedido").show(); 
    $("#botao-selected").show(); 
    $("#botao-selected-off").hide(); 
    $("#off").hide(); 
})

$("#botao-selected").click(function(){
    $("#botao-selected").hide(); 
    $("#botao-selected-off").show(); 
    $(".pedido").hide(); 
    $("#off").show(); 
})

$("#adicionar-produto").click(function(){
    let arraypedidos = [];

    if (localStorage.getItem('pedidos') != null) {
        arraypedidos = JSON.parse(localStorage.getItem('pedidos'));
    } else {
        arraypedidos;
    }

    var nome_produto = $("#add-produto").html();
    var val_unit_produto = $("#add-preco-input").val();
    var val_total_produto = $("#add-total-input").val();
    var qtde_produto = $("#quant").val();
    var imagem_produto = $("#add-img").val();

   
    var info = {
        nome_produto ,
        val_unit_produto,
        val_total_produto,
        qtde_produto,
        imagem_produto
    };

    arraypedidos.push(info);
    var infoJson = JSON.stringify(arraypedidos);
    localStorage.setItem("pedidos", infoJson);

   buscarConteudo();
})

function buscarConteudo(){
    const arr = JSON.parse(localStorage.getItem('pedidos'));
    console.log(arr);

    if (arr != null) {
        let tr = '';
        arr.map(conteudo => {
        tr += `
        <div id="pedido-ativo">
            <div id="titulo-pedido">
                <p>${conteudo.nome_produto }</p>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <img src="${conteudo.imagem_produto}"  id="foto-pedido" ></img>
                </div>
                <div class="col-lg-6">
                    <p>R$${conteudo.val_unit_produto}.00</p>
                    <div class="btn-quantidade2">
                        <button type="button" onclick="" id="menos2" class="btn-menos2" value="-">-</button>
                        <input type="text" name="quantidade"  value="${conteudo.qtde_produto}" id="quant2" readonly/>
                        <button type="button" onclick="" id="mais2" class="btn-mais2" value="+" >+</button>
                    </div>
                </div>
            </div>
            <div id="titulo-pedido">
                <p>Subtotal: R$${conteudo.val_total_produto}.00</p></p>
            </div>
        </div>`
        })

        $(".botao-select").show(); 
        $("#botao-selected").show(); 
        $("#quant").val(1);
        $("#off").hide(); 
        $("#on").show();  
        $('#modal-pedido').modal('hide');
        $(".pedido").show(); 
        $(".pedido").html(tr);
    }
}

function abrir_modal(id,val){
    var quantidade1 = $("#quant").val();

    var quantidade = parseInt(quantidade1);
    var inserirValor2 = parseFloat(val);
    var inserirValor = parseFloat(val);
    inserirValor = inserirValor*quantidade;
    var valorFormatado = inserirValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var valorFormatado2 = inserirValor2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    $('#modal-pedido').modal('show');
    $("#add-produto").html(id); 
    $("#add-total").val(valorFormatado);
    $("#add-total-input").val(inserirValor);
    $("#add-preco").val(valorFormatado2); 
    $("#add-preco-input").val(inserirValor2);

    switch (id) {
        case "Expresso":
            $("#add-img").val("IMG/cafeexpresso.jpg"); 
            $("#add-img").attr("src", "IMG/cafeexpresso.jpg"); 
            break;

        case "Gourmet":
            $("#add-img").val("IMG/cafegoumert.jpg"); 
            $("#add-img").attr("src", "IMG/cafegoumert.jpg"); 
            break;

        case "Capuccino":
            $("#add-img").val("IMG/capuccino.jpg"); 
            $("#add-img").attr("src", "IMG/capuccino.jpg"); 
            break;

        case "Tradicional":
            $("#add-img").val("IMG/tradicional.jpeg"); 
            $("#add-img").attr("src", "IMG/tradicional.jpeg"); 
            break;

        case "Hambúrguer":
            $("#add-img").val("IMG/hamburguer.jpg"); 
            $("#add-img").attr("src", "IMG/hamburguer.jpg"); 
            break;

        case "Pastel":
            $("#add-img").val("IMG/pastel.jpg"); 
            $("#add-img").attr("src", "IMG/pastel.jpg"); 
            break;

        case "Kibe":
            $("#add-img").val("IMG/kibe.jpg"); 
            $("#add-img").attr("src", "IMG/kibe.jpg"); 
            break;

        default: //Coxinha
            $("#add-img").val("IMG/coxinha.jpeg"); 
            $("#add-img").attr("src", "IMG/coxinha.jpeg"); 
            break;
    }
}

function incrementarQuantidadeProduto() {
    var quantidade1 = $("#quant").val();
    var precototal = $("#add-preco-input").val();
    var total = parseFloat(precototal);
    var quantidade = parseInt(quantidade1);
    $("#quant").val(quantidade+1);
    if (quantidade == 1) {
        var inserirTotal = parseFloat(total+total);
        var totalFormatado = inserirTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        $("#add-total-input").val(inserirTotal);
        $("#add-total").val(totalFormatado);
    } else {
        var quantidade1 = $("#quant").val();
        var precototal = $("#add-preco-input").val();
        var total = parseFloat(precototal);
        var quantidade = parseInt(quantidade1);

        var inserirTotal = parseFloat(total*quantidade);
        var totalFormatado = inserirTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        $("#add-total").val(totalFormatado); 
        $("#add-total-input").val(inserirTotal);  
    }
}

function decrementarQuantidadeProduto() {
    var quantidade = $("#quant").val();
    parseInt(quantidade);

    if (quantidade == 1) {
        $('#modal-pedido').modal('hide');
    } else {
        var precototal = $("#add-preco-input").val();
        var preco = $("#add-total-input").val();
        var total = parseFloat(precototal);
        var total2 = parseFloat(preco);

        var inserirTotal = parseFloat(total2-total);
        var totalFormatado = inserirTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        $("#quant").val(quantidade-1);
        $("#add-total-input").val(inserirTotal);
        $("#add-total").val(totalFormatado);
    }
}

function resetarQuantidade(){
    $("#quant").val(1);
}