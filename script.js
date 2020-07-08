document.querySelector('#Enter').addEventListener('click',function(){
var w=document.getElementById('weight').value;
var h=document.getElementById('height').value;
var bmi= w/(h*h);
document.querySelector('.content').innerHTML=bmi;
document.querySelector('.first').style.display = 'flex';
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.first').style.display = 'none';
});
});