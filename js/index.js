document.getElementById('form').addEventListener('submit', function(event) {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    let dadosDoCadastro = 'Nome: ' + name + '\n' + 'Idade: ' + age + '\n' + 'E-mail: ' + email

    console.log(dadosDoCadastro);

    alert('Parabéns! Cadastro realizado com sucesso!');

    form.reset();
});