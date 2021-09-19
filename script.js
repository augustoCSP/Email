const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () =>{
Email.send({
    Host: "#", // para pegar o HOST,USER E PASSWORD entre no site : https://mailtrap.io 
    Username: "#",
    Password: "#",
    To:"#", // email de envio ex: aluno@gmail.com
    From:inputs.elements["email"].value,
    Subject:"Contact Us Query By the Customer",
    Body:inputs.elements["message"].value + '<br>' + inputs.elements['name'].value + '<br>' + inputs.elements['phone'].value
}).then(msg=>alert('Mensagem Enviada Com Sucesso!'))
})