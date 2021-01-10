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

// sendBtn.onclick = function() {
//     popUp.classList.toggle('display-none');
// }

// sendBtn.onclick = function() {
//     popUp.style.display = 'none';
// };



// $('.pop-up').toggle( "slow");

// Отправка заявки 
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.email.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.pop-up').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
// $('.popUp').click(function() { // по клику на крестик
// 	$('.popUp').fadeOut();
// });

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.popUp').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});
