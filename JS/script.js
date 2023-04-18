function abrir_modal(id,val){
    $('#modal-pedido').modal('show');
    $("#add-produto").html(id); 
    $("#add-preco").html(val); 
}