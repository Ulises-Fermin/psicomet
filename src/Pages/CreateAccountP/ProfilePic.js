

//Declarando elementos

const imgDiv = document.querySelector('.profileDiv');
const img = document.querySelector('.profileDiv #photo');
const file = document.querySelector('.profileDiv #file');
const uploadBtn = document.querySelector('#uploadBtn');

imgDiv.addEventListener('mouseenter', function()
{
    uploadBtn.style.display = "block"
});

imgDiv.addEventListener('mouseleave', function()
{
    uploadBtn.style.display = "none"
});


