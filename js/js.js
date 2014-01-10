$(document).ready(function() {
	$('#carregar').click(function(){
		$.ajax({
			url: "carregarmais.php",
			type: 'GET',
			success: function(data){
				resposta = data.split('<//>');
				numero = parseInt( $('.coluna1').width() / $('.bloco').width() );
				if(numero == 1){
					$('.insert').eq(7).before(resposta);
				} else if(numero == 2){
					$('.insert').eq(3).before(resposta.slice(0,4));
					$('.insert').eq(7).before(resposta.slice(4,8));
				} else if(numero == 4){
					$('.insert').eq(1).before(resposta.slice(0,2));
					$('.insert').eq(3).before(resposta.slice(2,4));
					$('.insert').eq(5).before(resposta.slice(4,6));
					$('.insert').eq(7).before(resposta.slice(6,8));
				} else {
					for(i = 0; i < 8; i++ ){
						$('.insert').eq(i).before(resposta[i]);
					}
				}
			},
			error: function(xhr, thrownError){
				alert(xhr.status);
				alert(trownError);
			}

		});
	});
});