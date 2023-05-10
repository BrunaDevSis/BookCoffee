// --------------
$(document).ready(function(){
    if(localStorage.getItem("pedido") == true){
        $("#off").hide(); 
        $("#n-pedido").show(); 
    } else {
        $("#off").show(); 
        $("#n-pedido").hide(); 
    }
})

$("#adicionar-produto").click(function(){
    var nome_produto = $("#add-produto").html();
    localStorage.setItem("pedido", nome_produto);
    var teste = localStorage.getItem("pedido");
    $("#off").hide(); 
    $("#n-pedido").show(); 
    $("#n-pedido").html(teste); 
    $('#modal-pedido').modal('hide');

})
//  --------------

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
            $("#add-img").attr("src", "IMG/cafeexpresso.jpg"); 
            break;

        case "Gourmet":
            $("#add-img").attr("src", "IMG/cafegoumert.jpg"); 
            break;

        case "Capuccino":
            $("#add-img").attr("src", "IMG/capuccino.jpg"); 
            break;

        case "Tradicional":
            $("#add-img").attr("src", "IMG/tradicional.jpeg"); 
            break;

        case "Hambúrguer":
            $("#add-img").attr("src", "IMG/hamburguer.jpg"); 
            break;

        case "Pastel":
            $("#add-img").attr("src", "IMG/pastel.jpg"); 
            break;

        case "Kibe":
            $("#add-img").attr("src", "IMG/kibe.jpg"); 
            break;

        default: //Coxinha
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