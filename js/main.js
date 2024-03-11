$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        errorPlacement: function(error, element,) {
            error.addClass('error-message');
            error.insertAfter(element);
        },
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            rua: {
                required: true
            },
            bairro: {
                required: true
            },
            cidade: {
                required: true
            },
            estado: {
                required: true
            },
            numero: {
                required: true
            },
            complemento: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor insira o seu nome completo.',
            email: 'Por favor insira o seu e-mail.',
            telefone: 'Por favor insira o seu número de telefone.',
            cpf : 'Por favor insira o seu número de CPF completo.',
            endereco:'Por favor insira sua rua e número completo.',
            cep : 'Por favor insira o seu número de CEP completo.',
            rua: 'Por favor adicione seu logradouro.',
            bairro:'Por favor adicione seu bairro.',
            cidade:'Por favor adicione sua cidade.',
            estado:'Por favor adicione seu Estado.',
            numero:'Por favor adicione seu numero.',
            complemento:'Por favor adicione seu complemento.',

        },
        submiteHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})

const estado = [
    {sigla: 'AC', nome: 'Acre'},
    {sigla: 'AL', nome: 'Alagoas'},
    {sigla: 'AP', nome: 'Amapá'},
    {sigla: 'AM', nome: 'Amazonas'},
    {sigla: 'BA', nome: 'Bahia'},
    {sigla: 'CE', nome: 'Ceará'},
    {sigla: 'DF', nome: 'Distrito Federal'},
    {sigla: 'ES', nome: 'Espírito Santo'},
    {sigla: 'GO', nome: 'Goiás'},
    {sigla: 'MA', nome: 'Maranhão'},
    {sigla: 'MT', nome: 'Mato Grosso'},
    {sigla: 'MS', nome: 'Mato Grosso do Sul'},
    {sigla: 'MG', nome: 'Minas Gerais'},
    {sigla: 'PA', nome: 'Pará'},
    {sigla: 'PB', nome: 'Paraíba'},
    {sigla: 'PR', nome: 'Paraná'},
    {sigla: 'PE', nome: 'Pernambuco'},
    {sigla: 'PI', nome: 'Piauí'},
    {sigla: 'RJ', nome: 'Rio de Janeiro'},
    {sigla: 'RN', nome: 'Rio Grande do Norte'},
    {sigla: 'RS', nome: 'Rio Grande do Sul'},
    {sigla: 'RO', nome: 'Rondônia'},
    {sigla: 'RR', nome: 'Roraima'},
    {sigla: 'SC', nome: 'Santa Catarina'},
    {sigla: 'SP', nome: 'São Paulo'},
    {sigla: 'SE', nome: 'Sergipe'},
    {sigla: 'TO', nome: 'Tocantins'}
];

$(document).ready(function() {
    const selectEstado = $('#estado');
    $.each(estado, function(index, estado) {
        selectEstado.append($('<option>', {
            value: estado.sigla,
            text: estado.nome
        }));
    });
});