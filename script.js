const firstCard = document.querySelector('.first-card'),
starsContainer = document.querySelector('.stars'),
numRates = document.querySelectorAll('.first-card .container'),
submitBtn = document.querySelector('.btn'),
secondCard = document.querySelector('.second-card'),
yourRate = document.querySelector('#value');


let rate =1;
numRates.forEach(numRate=>{
    numRate.addEventListener('click',()=>{
        const numVal = numRate.dataset.num;
        
        starsContainer.innerHTML = `
        <div class="star-container">
        <img src="images/icon-star.svg" alt="">
        </div>
        `

        for (let i = 1; i < numVal; i++) {
            let div = document.createElement('div');
            div.className = 'star-container';

            let img = document.createElement('img');
            img.src = 'images/icon-star.svg';
            div.append(img);
            starsContainer.append(div);
        }
        rate = starsContainer.children.length;
    })
})

submitBtn.addEventListener('click', ()=>{
    firstCard.style.display = 'none';
    secondCard.style.display = 'block';
    yourRate.textContent = rate;
})

































