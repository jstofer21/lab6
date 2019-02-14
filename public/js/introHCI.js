'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	$.get('/project/'+idNumber, addProject);
	console.log("User clicked on project " + idNumber);
}

function addProject(result){
	console.log(result)
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="detailsImage">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>' + '<div id="descrip"></div>'; 
	var id = result['id'].toString(10)
	console.log(id)
	$("#project"+id+".project .thumbnail .details").html(projectHTML);
	$("#project"+id+".project .thumbnail .details #descrip").html(result['summary']);

}
