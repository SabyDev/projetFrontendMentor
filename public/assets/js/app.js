// J'appelle les elements dont j'ai besoin
const questions = document.querySelectorAll('.question');
const btnOk = document.querySelectorAll('.ok');
console.log(btnOk);
let divText= document.createElement("div");
// rattachement à un parent body
questions.forEach((e) =>{
    e.appendChild(divText)});

btnOk.forEach((e) => {
    e.addEventListener('click',() =>{
        // création d'une div 
divText.TextNodes=(' You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.')

    })
})
