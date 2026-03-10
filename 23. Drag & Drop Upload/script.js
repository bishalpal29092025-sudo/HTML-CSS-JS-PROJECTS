const dropZone =
  document.getElementById("drop-zone");

const fileInput =
  document.getElementById("fileInput");

const preview =
  document.getElementById("preview");

dropZone.addEventListener(
  "dragover",
  (e) => {
    e.preventDefault();
  }
);

dropZone.addEventListener(
  "drop",
  (e) => {

    e.preventDefault();

    const file =
      e.dataTransfer.files[0];

    displayImage(file);

  }
);

fileInput.addEventListener(
  "change",
  () => {

    const file =
      fileInput.files[0];

    displayImage(file);

  }
);

function displayImage(file) {

  if (!file.type.startsWith("image/")) {
    return;
  }

  const reader =
    new FileReader();

  reader.onload = () => {

    const img =
      document.createElement("img");

    img.src = reader.result;

    preview.innerHTML = "";

    preview.appendChild(img);

  };

  reader.readAsDataURL(file);

}