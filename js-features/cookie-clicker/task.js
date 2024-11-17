let cookieImg = document.getElementById ('cookie');
let clicker__counter = document.getElementById('clicker__counter'); 
let counter = 0;

cookieImg.onclick = function() {
  counter++;
  clicker__counter.textContent = counter;
  if (counter % 2 == 0) { 
    cookieImg.width = '250'; 
  } else{
    cookieImg.width = '200';
  } 
}
