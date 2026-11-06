// Creates a new list item element
let newListItem = document.createElement('li');
// Sets text for the new list item
newListItem.textContent = 'Cornstarch for thickening curry';
// Finds the ingredients list by its ID in HTML and appends the new list item to it
document.getElementById('ingredients-list').appendChild(newListItem);

// Finds and selects all <li> elements inside the ingredients section
const items = document.querySelectorAll(".left ul li");

// Iterates through each ingredient item
items.forEach((item, index) => {
  // Saves the original text content in a new variable
  const text = item.textContent;
  // Clears the item's original text
  item.textContent = ""; 

  // Creates and sets up the checkbox input
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "ingredient-" + index;

  // Creates the label linked to the checkbox
  const label = document.createElement("label");
  label.htmlFor = "ingredient-" + index;
  // Appends the ingredient text to the label
  label.appendChild(document.createTextNode(" " + text));

  // Appends the checkbox and label into the list item
  item.appendChild(checkbox);
  item.appendChild(label);
});

const addNoteBtn = document.getElementById("add-note-btn");
const noteInput = document.getElementById("note-input");
const notesList = document.getElementById("notes-list");

if (addNoteBtn && noteInput && notesList) {
  addNoteBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();
    if (text !== "") {
      const noteItem = document.createElement("li");
      noteItem.textContent = text;
      notesList.appendChild(noteItem);
      noteInput.value = "";
    }
  });
}