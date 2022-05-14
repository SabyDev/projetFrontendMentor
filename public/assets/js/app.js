// J'appelle les elements dont j'ai besoin
const questions = document.querySelector('.question');
const btnOk = document.querySelector('.ok');
const response1 = document.querySelector('.response'); 
const questionBox= document.querySelector('.questionBox') 
console.log(response1);
let divText= document.createElement("div");


btnOk.addEventListener('click', function(){
 response1.style.display = 'flex';
 questionBox.style.fontWeight = 'bolder'  
 console.log('cc');
})