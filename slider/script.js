const imageicon = document.querySelector('.image-icon');
const productimage = document.querySelector('.product-img') ;

productimage.addEventListener('click',(event)=>{
      imageicon.style.display = 'block' ;
      productimage.src = './product-10-2.jpg' ;
})

const pimages =  document.querySelectorAll('.product-img') ;
const addednewbtn = document.getElementById('added-btn') ;
const popularbtn = document.getElementById('p-btn') ;



popularbtn.addEventListener('click' ,()=>{
      pimages.forEach((img,index)=>{
           img.src = `${popularimagesource[index].src}`
      })
      popularbtn.classList.add('active-btn') ;
      addednewbtn.classList.remove('active-btn') ;
})

addednewbtn.addEventListener('click',()=>{
      pimages.forEach((img , index)=>{
            img.src = `${newaddedimagesource[index].src}`
      })
      addednewbtn.classList.add('active-btn') ;
      popularbtn.classList.remove('active-btn') ;
})