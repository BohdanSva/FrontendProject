// Add class "active" to the currently selected page for styling purposes

const selectActivePage = () => {

	$(document).ready(function () {
		var url = window.location;
		$('#navbar a').filter(function() {
			return this.href == url;
		}).addClass('active');
	});

}
 
export default selectActivePage;