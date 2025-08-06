const colorPicker = document.querySelector("#color-picker");
const buttons = document.querySelectorAll("button[data-color]");


colorPicker.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--base-color', e.target.value);
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.dataset.color; 
        colorPicker.value = color; 
        document.documentElement.style.setProperty('--base-color', color);
    })
})