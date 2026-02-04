function addWork() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const description = document.getElementById("description").value;

    if (!title || !author) {
        alert("Заполни название и автора");
        return;
    }

    const workDiv = document.createElement("div");
    workDiv.className = "work";

    workDiv.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Автор:</strong> ${author}</p>
        <p>${description}</p>
    `;

    document.getElementById("works").appendChild(workDiv);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("description").value = "";
}
