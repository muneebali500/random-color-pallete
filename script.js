const refreshBtn = document.getElementById(`refresh`);
const colorContainer = document.getElementById(`container`);

refreshBtn.addEventListener(`click`, generatePalette);

function generatePalette() {
  colorContainer.innerHTML = ``;

  for (let i = 0; i < 60; i++) {
    const chars = `abcdef0123456789`;
    let color = ``;

    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      color += chars[randomNumber];
    }

    const colorEl = document.createElement(`div`);
    colorEl.innerHTML = `<input value="#${color}" readonly/>
                        <button onClick=copyColor(this)>copy</button>`;
    colorEl.style.backgroundColor = `#${color}`;

    colorContainer.appendChild(colorEl);
  }
}

generatePalette();

function copyColor(btn) {
  const copyText = btn.previousElementSibling;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  colorValue.classList.add(`animate`);

  // remove animation class from color value so it can animated again when clicked second time
  setTimeout(function () {
    colorValue.classList.remove(`animate`);
  }, 500);
}
