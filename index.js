const data = [
    {
        title: "80K",
        text: "Followers"
    },
    {
        title: "803K",
        text: "Likes"
    },
    {
        title: "1.4K",
        text: "Photos"
    }
];

const getContentHtml = () => {
    let contentHtml = "";
    data.forEach(item => {
        contentHtml += `
        <div class="card__content">
            <p class="card__title">${item.title}</p>
            <p class="card__text">${item.text}</p>
        </div>
        `
    });
    return contentHtml;
};

const render = () => {
    document.getElementById("card-contents").innerHTML = getContentHtml();
};
render()