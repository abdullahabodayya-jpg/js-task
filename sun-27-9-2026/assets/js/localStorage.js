const keyInput = document.getElementById("keyInput");
const valueInput = document.getElementById("valueInput");

const getKeyInput = document.getElementById("getKeyInput");

const removeKeyInput = document.getElementById("removeKeyInput");

const saveBtn = document.getElementById("saveBtn");
const getBtn = document.getElementById("getBtn");
const removeBtn = document.getElementById("removeBtn");
const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("result");

const storageLength = document.getElementById("storageLength");

const storageContents = document.getElementById("storageContents");



saveBtn.addEventListener("click", () => {

    const key = keyInput.value;
    const value = valueInput.value;

    localStorage.setItem(key, value);

    keyInput.value = "";
    valueInput.value = "";

    displayStorage();
});




getBtn.addEventListener("click", () => {

    const key = getKeyInput.value;

    const value = localStorage.getItem(key);

    if (value === null) {
        result.textContent = "Key not found.";
    } else {
        result.textContent = value;
    }
});



removeBtn.addEventListener("click", () => {

    const key = removeKeyInput.value;

    localStorage.removeItem(key);

    removeKeyInput.value = "";

    displayStorage();
});




clearBtn.addEventListener("click", () => {

    localStorage.clear();

    displayStorage();

    result.textContent = "";
});




function displayStorage() {

    storageLength.textContent = localStorage.length;

    storageContents.innerHTML = "";


    // key(index)
    for (let i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);

        const value = localStorage.getItem(key);

        const item = document.createElement("p");

        item.textContent = `${key}: ${value}`;

        storageContents.appendChild(item);
    }
}


displayStorage();