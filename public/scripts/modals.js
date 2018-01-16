


// Get the modal
var panelistsModal = document.getElementById('panelists-modal');
// var workshopsModal = document.getElementById('panelists-modal');

// Get the button that opens the modal
var openPanelistsModalBtn = document.getElementById("open-panelists-modal-btn");

// Get the <span> element that closes the modal
var closePanelistsModalBtn = document.getElementsByClassName("close")[0];

// When the user clicks the open button, open the modal 
openPanelistsModalBtn.onclick = function() {
    panelistsModal.style.display = "block";
}

// When the user clicks the close button, close the modal
closePanelistsModalBtn.onclick = function() {
    panelistsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == panelistsModal) {
        panelistsModal.style.display = "none";
    }
}