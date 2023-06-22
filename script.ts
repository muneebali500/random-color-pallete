const refreshBtn = document.getElementById("refresh") as HTMLButtonElement;
const colorContainer = document.getElementById("container") as HTMLDivElement;

refreshBtn.addEventListener("click", generatePalette);

function generatePalette() {
  colorContainer.innerHTML = "";

  for (let i = 0; i < 60; i++) {
    const chars = "abcdef0123456789";
    let color = "";

    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      color += chars[randomNumber];
    }

    const colorEl = document.createElement("div");
    colorEl.innerHTML = `<input value="#${color}" readonly/>
                        <button onClick=copyColor(this)>copy</button>`;
    colorEl.style.backgroundColor = `#${color}`;

    colorContainer.appendChild(colorEl);
  }
}

generatePalette();

function copyColor(btn: HTMLButtonElement) {
  const colorValue = btn.previousElementSibling as HTMLInputElement;
  colorValue.select();
  colorValue.setSelectionRange(0, 99999);
  document.execCommand("copy");
  colorValue.style.animation = "animate .3s linear";

  // remove animation class from color value so it can be animated again when clicked a second time
  setTimeout(() => {
    colorValue.style.animation = "none";
  }, 500);
}
