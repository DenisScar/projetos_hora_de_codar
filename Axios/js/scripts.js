// 1) Instalação:
console.log(axios);

// 2) Primeiro request:
const getData = async () => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
            // 4) Definindo headers:
            {
                Headers: {
                    "Content-Type": "application/json", 
                },
            }
        );

        console.log(response);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

getData();

// 3) Imprimindo dados na tela:
const container = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();

    console.log(data);

    data.forEach((user) => {
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");
        const emailElement = document.createElement("p");

        nameElement.textContent = user.name;
        emailElement.textContent = user.email;

        div.appendChild(nameElement);
        div.appendChild(emailElement);
        container.appendChild(div);
    });
};

printData();

// 5) POST
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: titleInput.value, body: bodyInput.value, userId: 1,
    })
});
