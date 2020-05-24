//tel-mask
$(".f-phone").mask("+38(999) 999-99-99",{autoclear: false}).on('click', function () {
    if ($(this).val() === '+38(___) ___-__-__') {
        $(this).get(0).setSelectionRange(4, 4);
    };
});


//form open and close
var formButton = document.querySelector(".form-btn");
var formShadow = document.querySelector(".modal-shadow");
var mForm = document.querySelector(".modal-form");
var form = document.querySelector(".form");
var cross = document.querySelectorAll(".close-cross");
var afterform = document.querySelector(".aftersend-form");

document.onclick = function(e){
	if (e.target == cross[0] || e.target == cross[1] || e.target == formShadow){
		form.style.display = "none";
		afterform.style.display = "none";
		formShadow.style.display = "none";
		}
	if (e.target == formButton){
		formShadow.style.display = "flex";
		mForm.style.display = "block";
		form.style.display = "block";
		}
}
