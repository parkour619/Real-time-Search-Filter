let users = [
    {
        name: "Hussain Ahmed",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
        bio: "Silent chaos in a loud world | Not for everyone."
    },
    {
        name: "Ali Raza",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
        bio: "Building dreams one line of code at a time."
    },
    {
        name: "Ahmed Khan",
        pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&q=80",
        bio: "Coffee. Code. Repeat. ☕💻"
    },
    {
        name: "Zain Malik",
        pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&q=80",
        bio: "Exploring places, capturing moments."
    },
    {
        name: "Usman Qureshi",
        pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
        bio: "Frontend developer with a passion for clean UI."
    },
    {
        name: "Hamza Siddiqui",
        pic: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600&q=80",
        bio: "Fitness enthusiast | Nature lover 🌿"
    },
    {
        name: "Ali Muhammad",
        pic: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=600&q=80",
        bio: "Creative thinker, tech enthusiast, and lifelong learner."
    },
    {
        name: "Ayaan Sheikh",
        pic: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&fit=crop&w=600&q=80",
        bio: "Turning ideas into digital experiences."
    },
    {
        name: "Bilal Farooq",
        pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&q=80",
        bio: "Minimalist by choice. Creator by passion."
    },

];



function showUsers(arr) {
    arr.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = user.pic;
        img.classList.add('bg-img');

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add('blurred-layer');

        const content = document.createElement('div');
        content.classList.add('content');

        const heading = document.createElement('h3');
        heading.textContent = user.name;

        const para = document.createElement('p');
        para.textContent = user.bio;


        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);

let inpt = document.querySelector(".inpt");
inpt.addEventListener('input', function () {
    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(inpt.value);
    });

    document.querySelector('.cards').innerHTML = "";
    showUsers(newUsers);
});