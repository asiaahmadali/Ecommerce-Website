
// --------------------------------------------------------------------------
// product section


const productimg = document.querySelector('.product-img');
const detailimage = document.getElementById('d-img');


document.querySelectorAll('.product-img').forEach(productImg => {
      productImg.addEventListener('click', () => {
          const productInfo = {
              src: productImg.getAttribute('src'),
          };
          localStorage.setItem('selectedProduct', JSON.stringify(productInfo));
      });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
      const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
      if (selectedProduct) {
          const detailImage = document.getElementById('d-img');
          detailImage.src = selectedProduct.src;
      }
  });

//   ----------------

// getting images
const pimages =  document.querySelectorAll('.product-img') ;

// getting buttons
const addednewbtn = document.getElementById('added-btn') ;
const featurebtn = document.getElementById('feature-btn') ;
const popularbtn = document.getElementById('p-btn') ;



// feature button click handler
featurebtn.addEventListener('click',()=>{
  pimages.forEach((img  ,index)=>{
    img.src=`${featureimagesource[index].src}` ;
  })
  popularbtn.classList.remove('active-btn') ;
  addednewbtn.classList.remove('active-btn') ;
  featurebtn.classList.add("active-btn") ;
})


// popular button click handler
popularbtn.addEventListener('click' ,()=>{
      pimages.forEach((img,index)=>{
           img.src = `${popularimagesource[index].src}`
      })
      popularbtn.classList.add('active-btn') ;
      addednewbtn.classList.remove('active-btn') ;
      featurebtn.classList.remove('active-btn') ;
})


// addnew button click handler
addednewbtn.addEventListener('click',()=>{
      pimages.forEach((img , index)=>{
            img.src = `${newaddedimagesource[index].src}`
      })
      addednewbtn.classList.add('active-btn') ;
      popularbtn.classList.remove('active-btn') ;
      featurebtn.classList.remove('active-btn') ;
})


// product details 

const menulist = document.getElementById('menu-list') ;

function openMenu()
{
      menulist.style.right='0px' ;
}

function closeMenu()
{
     menulist.style.right='-200px' ;
}


