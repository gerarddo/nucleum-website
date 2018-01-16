
var panelistsModal = document.getElementById('panelists-modal');
var openPanelistsModalBtn = document.getElementById("open-panelists-modal");
var closePanelistsModalBtn = document.getElementsByClassName("close-panelists-modal")[0];

openPanelistsModalBtn.onclick = function() { panelistsModal.style.display = "block"; }
closePanelistsModalBtn.onclick = function() { panelistsModal.style.display = "none"; }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == panelistsModal) {
        panelistsModal.style.display = "none";
    }
}




var workshopsModal = document.getElementById('workshops-modal');
var openWorkshopsModalBtn = document.getElementsByClassName("open-workshops-modal");
var closeWorkshopsModalBtn = document.getElementsByClassName("close-workshops-modal")[0];



console.log(openWorkshopsModalBtn)

// openWorkshopsModalBtn[0].onclick = function() { workshopsModal.style.display = "block"; }

for(var i = 0; i < openWorkshopsModalBtn.length; i++){
	openWorkshopsModalBtn[i].onclick = function() { workshopsModal.style.display = "block"; }
}




closeWorkshopsModalBtn.onclick = function() { workshopsModal.style.display = "none"; }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == workshopsModal) {
        workshopsModal.style.display = "none";
    }
}

