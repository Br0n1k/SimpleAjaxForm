$('.form').submit(function(e){
	e.preventDefault();
	
	var name = $('.f-name').val().trim();
	var phone = $('.f-phone').val().trim();
	var email = $('.f-email').val().trim();
	var city = $('.f-city').val().trim();
	var checkOne = $('.f-check-one');
	var checkTwo = $('.f-check-two');
	var text = $('.f-text').val().trim();
	var checkStuff = '';
	
	if (checkOne.prop("checked") == true && checkTwo.prop("checked") == false)
		checkStuff = 'Была выбрана только 1 опция';
	if (checkTwo.prop("checked") == true && checkOne.prop("checked") == false)
		checkStuff = 'Была выбрана только 2 опция';
	if (checkOne.prop("checked") == true && checkTwo.prop("checked") == true)
		checkStuff = 'Были выбраны опции 1 и 2';
	if (checkOne.prop("checked") == false && checkTwo.prop("checked") == false)
		checkStuff = 'Из доп. опций ничего небыло выбрано';
		
	
	$.ajax({
		type: 'POST',
		url: 'send.php',
		cache: false,
		data: 
			{ 'name' : name, 'phone' : phone, 'email' : email, 'city' : city, 'checkStuff' : checkStuff, 'text' : text },
		dataType: 'html',
		beforeSend: function(){
			$('.form-send-btn').prop('disabled', true);
		},
		success: function(response){
			if(!response)
				alert('Ты маслину поймал, не ок')
			else
				$('.form').trigger('reset');
				$('.form').css('display', 'none');
				$('.aftersend-form').css('display' , 'flex');
				$('.form-send-btn').prop('disabled', false);
		}
	});
});
	