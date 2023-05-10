$(document).ready(function(){
    // localStorage.clear();   
})

$("#adicionar-produto").click(function(){
    const andamento = document.getElementById('corpoTabela');

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

    const arr = JSON.parse(localStorage.getItem('pedidos'));
    console.log(arr);

    if (arr != null) {
        let tr = '';
        arr.map(conteudo => {
        tr += `
        <ul class="list-group">
            <li class="list-group-item"><img src="${conteudo.imagem_produto}"  width="40" height="40"></img</li>
            <li class="list-group-item">${conteudo.nome_produto }</li>
            <li class="list-group-item">${conteudo.val_unit_produto}</li>
            <li class="list-group-item">${conteudo.val_total_produto}</li>
            <li class="list-group-item">${conteudo.qtde_produto}</li>
        </ul>`
        })
  
        $("#off").hide(); 
        $("#on").show();  
        $('#modal-pedido').modal('hide');
        $(".pedido").html(tr);
    }
})

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