const initapp = () => {
    const intitapp = document.querySelector(".drop-area");

    const active = () => droparea.classlist.add("change-border");

    const inactive = () => droparea.classlist.remove("change-border");

    const prevents = (e) =>e.preventDefault();

    ['dragenter','dragover','dragleave','drop'].forEach(eventName => {
        droparea.addEventListener(eventName, prevents);
    });

    ['dragenter','dragover'].forEach(eventName => {
        droparea.addEventListener(eventName, active);
    })

    ['dragleave','drop'].forEach(eventName => {
        droparea.addEventListener(eventName, inactive);
    })

    droparea.addEventListener("drop", handleDrop);
}

document.addEventListener("DOMContentloaded", initapp);

const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    const filearay = [...files];
}