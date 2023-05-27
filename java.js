const layer = document.querySelector('.layer');
const lists = document.querySelector('.lists');
const gonder = document.querySelector('.gonder');
const good = document.getElementById('good');
const bad = document.getElementById('bad');


let i = -1

let totalFrontend = 0
let totalBackend = 0
let totalFullStack = 0
let totalGamer = 0
let totalMobile = 0


nextQuestion()
function nextQuestion(){
  fetch('/api.json')
  .then(x => x.json())
  .then(y => {
    console.log(i)
    const data = y.data[i];
  
    layer.innerHTML = `
    <div class="col-sm-6 font-monospace">
      <div class="center left-side">
          <p style="padding-top: 50px;" class="h1 lang">
                  ${data.lang}
          </p>
          <p class="h4 head">
            ${data.head}
          </p>
          <p class="desc">
          ${data.left.description}
  
          </p>
          <ol type="1" class="lists">
            
            ${data.left.lists}
  
          </ol>
      
      </div>
  </div>
  
  <div class="col-sm-6 font-monospace">
    <p class="h3 right-head"  style="padding-top: 50px; padding-left: 7%;">
      ${data.right.head}
    </p>
   
    <iframe width="560" height="315" style="margin-left: 100px;" src=${data.right.youtubeLink}
      title="YouTube video player" frameborder="0"
      allowfullscreen>
    </iframe>
    
    <p class="h4 center">${data.right.altHead}</p>
    
    <code class="center" style="color:black;">
          ${data.right.code}  
      </code>
  
    `
    
    if(good.checked){
      console.log('first')
      console.log(data.backend)
      totalFrontend = totalFrontend+data.frontend
      totalBackend = totalBackend+ data.backend
      totalFullStack = totalFullStack+ data.fullstack
      totalGamer = totalGamer + data.gamer
      totalMobile = totalMobile + data.mobile
    }else if(bad.checked){
      console.log('second')
      totalFrontend -=data.frontend
      totalBackend -=data.backend
      totalFullStack -=data.fullstack
      totalGamer -=data.gamer
      totalMobile -=data.mobile
    }
  });

i = i+1;
  
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;


}x