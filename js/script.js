const lodeData = async () => {
    toggleShowSpinner(true);
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    displayShowData(data.posts)

    setTimeout(() => {
        toggleShowSpinner(false);
    }, 2000)

};
// show all data
const displayShowData = (data) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    data.forEach((post) => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div id="card-container" class="card card-side bg-base-100 bg-[#F3F3F5] hover:bg-[#797DFC1A] transition">
        <div class="mt-6">
            <figure><img class="w-20 h-20 rounded-xl ml-10  relative" src="${post.image}" alt="Movie" /></figure>
            <div class="w-4 h-4 rounded-full ${post.isActive ? 'bg-green-500' : 'bg-red-500'} absolute top-4 left-28"></div>
        </div>
        <div class="card-body">
            <div class="flex-1 lg:flex lg:gap-5">
                <h4># ${post.category}</h4>
                <h4>Author : ${post.author.name}</h4>
            </div>
            <h2 class="card-title">${post.title}</h2>
            <p>${post.description}</p>
            <hr class="border-dashed border-2">
            <div class="flex-1 space-y-2 lg:flex justify-between">
                <div class="flex-1 lg:flex lg:gap-6">
                    <div class="flex items-center justify-center gap-2">
                        <img src="./images/comment.png" alt="">
                        <p>${post.comment_count}</p>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                        <img src="./images/eye.png" alt="">
                        <p> ${post.view_count}</p>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                        <img src="./images/clock.png" alt="">
                        <p>${post.posted_time} min</p>
                    </div>

                </div>
                <button onclick="outSideData('${post.title.replace(/'/g,'@')}' , '${post.view_count}',)"><img src="./images/email.png" alt=""></button>
            </div>
        </div>
    </div>
        `;
        cardContainer.appendChild(newDiv);
    });
};