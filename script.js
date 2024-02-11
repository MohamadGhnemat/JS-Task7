
const buttons = document.querySelectorAll(".increase");


buttons.forEach(function (btn)  {
btn.onclick = function(e)  {
console.log(this.nextElementSibling.innerHTML++);
}
})


