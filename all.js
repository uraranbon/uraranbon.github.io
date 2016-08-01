// $('#all').on('change', function() {
//     $('input[name=check]').prop('checked', this.checked);
// });

var count;
function BoxChecked(check){
	for(count = 0; count < document.form1.r1.length; count++){
		document.form1.r1[count].checked = check;	
	}
