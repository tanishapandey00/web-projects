const colors =document.getElementsByClassName('colors');
let i;
for(i=0;i<colors.length;i++){
    colors[i].addEventListener('click', changecolor);
}
function changecolor(){
let color = this.getAttribute('data_color');
document.documentElement.style.setProperty('--color',color);

}