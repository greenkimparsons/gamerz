



// DOM VARIABLES
var noteFormEl = $("#note-form")
var noteInputEl = $("#note-input")
var savedNotesEl = $("#saved-notes")
var clearButtonEl = $("#clear-button")


var notesArray = []
// when submit is clicked, we run this function that prevents default, 
// adds user input to an array called notesArray and sets it to local storage.
// it also runs the function get list

noteFormEl.on("submit", function (event) {
    notesArray = JSON.parse(localStorage.getItem("notesArray")) || [];
    event.preventDefault();
    var noteInput = noteInputEl.val();
    notesArray.push(noteInput);
    localStorage.setItem("notesArray", JSON.stringify(notesArray))
    noteInputEl.val('');

    getList()

})

clearButtonEl.click(function (event) {
  event.preventDefault();
  localStorage.removeItem("notesArray");
  getList()
})

// get list gets the value of notesArray from storage, iterates through the list, 
// and appends each item to savedNotesP, which is then appended to savedNotes
function getList() {

    if (localStorage.getItem("notesArray")) {
        notesArray = JSON.parse(localStorage.getItem("notesArray")) || [];
        savedNotesEl.empty();
        for (i = 0; i < notesArray.length; i++) {
            var savedNotesP = $("<ul>")
            notesLi = $("<li>").text(notesArray[i])
            savedNotesP.append(notesLi)
            savedNotesEl.append(savedNotesP)
        }
    } else {
      savedNotesEl.empty();
    }
}

getList();

