const input =
  document.getElementById("noteInput");

const addBtn =
  document.getElementById("addBtn");

const container =
  document.getElementById("notesContainer");

addBtn.addEventListener(
  "click",
  addNote
);

function addNote() {

  const text =
    input.value.trim();

  if (text === "") {
    return;
  }

  const note =
    document.createElement("div");

  note.classList.add("note");

  const span =
    document.createElement("span");

  span.textContent = text;

  const deleteBtn =
    document.createElement("button");

  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener(
    "click",
    () => {
      note.remove();
    }
  );

  note.appendChild(span);

  note.appendChild(deleteBtn);

  container.appendChild(note);

  input.value = "";
}