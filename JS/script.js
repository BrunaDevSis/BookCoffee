function abrir_modal(id,val){
    $('#modal-pedido').modal('show');
    $("#add-produto").html(id); 
    $("#add-preco").html(val); 
    
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