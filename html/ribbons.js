// Begin Actions
function F_doLoaded() {
	document.main = new F_cMain();
	document.objectModel = new Object();
	F_OM('Layout','LayoutLYR', 'doc', '', new Array());
	F_OM('FormsButton1' , '', 'btn', 'Layout',new Array(
	'Clicked','Layout','Close','',0),'',0,'FormsButton1');
 	F_pageLoaded('Layout');
}
 
$(document).ready( function() {
F_onLoaded();
	$('#FormsButton1').bind('click', function(__e) { return (F_e('FormsButton1', F_CL, __e)); } );
});
// End Actions

