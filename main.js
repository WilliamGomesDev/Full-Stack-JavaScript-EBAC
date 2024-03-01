$(document).ready(function() { // Espera o documento estar pronto antes de executar o código
    $('.tarefas').submit(function(event) { // Adiciona um evento de submissão para o formulário com a classe 'tarefas'
        event.preventDefault(); // Impede o comportamento padrão do formulário de ser enviado
        var nomeTarefa = $('#nova-tarefa').val(); // Obtém o valor do campo de entrada com o ID 'nova-tarefa'
        if (nomeTarefa.trim() !== '') { // Verifica se o valor do campo de entrada não está vazio
            $('.lista').append('<li>' + nomeTarefa + '</li>'); // Adiciona um novo item de lista com o valor do campo de entrada à lista com a classe 'lista'
            $('#nova-tarefa').val(''); // Limpa o campo de entrada
        }
    });

    $(document).on('click', 'li', function(){ // Adiciona um evento de clique para os itens de lista dinâmicos
        $(this).toggleClass('completed'); // Alterna a classe 'completed' no item de lista clicado
    });

    $('.refazer').click(function() { // Adiciona um evento de clique para o botão com a classe 'refazer'
        $('.lista').empty(); // Remove todos os itens da lista com a classe 'lista'
    });
});
