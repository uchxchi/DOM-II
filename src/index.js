import './less/index.less'


  const h2 = document.querySelector('h2')
  console.log(h2)
  h2.addEventListener('mouseover', function(event){
      event.target.style.color = 'red'
      console.log('Welcome to the fun bus, choo! choo!!')
      setTimeout(function(){
          event.target.style.color = 'black'
      }, 1000)
  })

  const oneP = document.querySelector('p')
  console.log(oneP)
  document.addEventListener('keydown', onePkey);
  
  function onePkey(){
    oneP.style.color = 'purple'
      console.log('Keydown! Keydown!!')
  }

  const containerHome = document.querySelector('.container.home')
  console.log(containerHome)
  containerHome.addEventListener('wheel',  function zoom(){
      containerHome.style.transform = `scale(0.9, 1)`
      console.log('zoom! zoom!! ')
  })
window.addEventListener('load', ()=>{
    console.log('page is fully loaded')
})

const nav = document.querySelector('nav')
console.log(nav)
nav.addEventListener('dblclick', (event) => {
    event.target.style.color = 'purple'
    console.log('dbl works!')
})

document.querySelectorAll('.btn')
.forEach(btn => document.addEventListener('scroll', () => {
    btn.style.backgroundColor = 'blue'
    console.log('fun bus is moving')

     setTimeout(function(){
          btn.style.backgroundColor = 'red'
      }, 1000)
}))


document.querySelectorAll('h2')
.forEach(h2 => document.addEventListener('click', () => {
    h2.style.color = 'red'
    
}))

//this is what i found online for the drop and drag, i am using the nav and i added a draggable attribute to it.Besides the opacity and prevent defsult i don't understand it and it is not working
function handleDragStart(e){
    this.style.opacity = '0.1';

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML)
}
function handleDragEnd(){
    this.style.opacity = '1';
}
function handleDragOver (e){
    e.preventDefault();
    return false;
}
function handleDrop(e){
    e.preventDefault();

    const data =
    e.dataTransfer.getData('text/html')
    e.target.appendChild(document.querySelector('.nav'))

}

let anchor = document.querySelectorAll('.nav .nav-link');
anchor.forEach(function(item){
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd)
    item.addEventListener('dragOver', handleDragOver)
    item.addEventListener('drop', handleDrop)
})





