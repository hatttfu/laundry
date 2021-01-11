const btnMenu = document.querySelector('.menu-icon'),
      navMenu = document.querySelector('.menu-nav');
            
btnMenu.onclick = function() { 
    navMenu.classList.toggle('display-none');
}

document.body.addEventListener('click', event => {
    if (!event.target.closest('.menu-icon')) {
      console.log('клик не внутри меню'); 
      navMenu.classList.add('display-none');

    }else{
        console.log('клик внутри меню')
    }
});

const popUp = document.querySelector('.pop-up'),
    sendBtn = document.querySelector('#send-btn');

sendBtn.onclick = function() {
    popUp.style.display = 'block';
};

// // Вместо класса можно использовать data-атрибуты: "[data-clear-button]"
// document.querySelectorAll(".clear-button")
// .forEach(function (elem) {
//   elem.onclick = function (e) {
//     // Если необходимо предотвратить/отменить событие по умолчанию,
//     // то необходимо вызвать метод preventDefault у события
//     // https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault
//     // e.preventDefault();
//     // если необходимо также предотвратить дальнейшее "всплытие" события,
//     // то необходимо вызвать метод stopPropagation у события
//     // https://developer.mozilla.org/ru/docs/Web/API/Event/stopPropagation
//     // e.stopPropagation();
//     let selector = this.dataset.clearSelector;
//     document.querySelectorAll(selector)
//     .forEach(function (item) {
//       item.value = "";
//     });
//   };
// });


document.body.addEventListener('click', event => {
    if (!event.target.closest('#send-btn')) {
      console.log('клик не внутри pop-up'); 
      popUp.style.display = 'none';
	}
});

