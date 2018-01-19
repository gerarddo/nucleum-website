
var panelistsModal = document.getElementById('panelists-modal');
var openPanelistsModalBtn = document.getElementById("open-panelists-modal");
var closePanelistsModalBtn = document.getElementsByClassName("close-panelists-modal")[0];

openPanelistsModalBtn.onclick = function() { panelistsModal.style.display = "block"; }
closePanelistsModalBtn.onclick = function() { panelistsModal.style.display = "none"; }

// When the user clicks anywhere outside of the modal, close it
$(".container-body").click((event) => {
    if (event.target === panelistsModal) {
        panelistsModal.style.display = "none";
        console.log(event.target)
    }
})








var workshopsModal = document.getElementById('workshops-modal');
var openWorkshopsModalBtn = document.getElementsByClassName("open-workshops-modal");
var closeWorkshopsModalBtn = document.getElementsByClassName("close-workshops-modal")[0];

for(var i = 0; i < openWorkshopsModalBtn.length; i++){
	openWorkshopsModalBtn[i].onclick = function() { 
		workshopsModal.style.display = "block"; 
	}
}

closeWorkshopsModalBtn.onclick = function() { workshopsModal.style.display = "none"; }

// When the user clicks anywhere outside of the modal, close it
$(".container-body").click((event) => {
    if (event.target == workshopsModal) {
        workshopsModal.style.display = "none";
    }
})



var visitsModal = document.getElementById('visits-modal');
var openVisitsModalBtn = document.getElementsByClassName("open-visits-modal");
var closeVisitsModalBtn = document.getElementsByClassName("close-visits-modal")[0];

for(var i = 0; i < openVisitsModalBtn.length; i++){
	openVisitsModalBtn[i].onclick = function() { 
		visitsModal.style.display = "block"; 
	}
}
closeVisitsModalBtn.onclick = function() { visitsModal.style.display = "none"; }

// When the user clicks anywhere outside of the modal, close it
$(".container-body").click((event) => {
    if (event.target == visitsModal) {
        visitsModal.style.display = "none";
    }
})
