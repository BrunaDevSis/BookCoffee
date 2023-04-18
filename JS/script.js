function abrir_modal(id,val){
    var inserirValor = parseFloat(val);
    var valorFormatado = inserirValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    $('#modal-pedido').modal('show');
    $("#add-produto").html(id); 
    $("#add-preco").val(valorFormatado); 
    $("#add-total").val(valorFormatado);
    $("#add-total-input").val(inserirValor);
    $("#add-preco-input").val(inserirValor);
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
