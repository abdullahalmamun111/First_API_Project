


 const array = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}



// category:"Music"
// category_id:"1001"

// load data
const loadCateGories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => showDisplay(data.categories))
        .catch(error => console.log(error));
}
loadCateGories();


// load category
const showDisplay = (categories) => {
    const categoriContainer = document.getElementById('categories')
    categories.forEach((item) => {
        // create button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        // add button to category container
        categoriContainer.append(button);
    });
}

// load video

const loadVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => showVideo(data.videos))
        .catch(error => console.log(error));
}

loadVideo();

// show video

const showVideo = (videos) => {
    const videoContainer = document.getElementById('video')
    videos.forEach(video => {
        console.log(video)
        const card = document.createElement('div');
        card.classList = 'card card-compact'
        card.innerHTML = `
    <figure class = "h-[200px]">
    <img class = " w-full h-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class ="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
    </div>
    <div>
    <h1 class ="font-bold">${video.title}</h1>
    <div class =" flex gap-1">
    <p class = " text-[14px]">${video.authors[0].profile_name}</p>
    <img class = " w-5 " src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png"/>
    </div>
    </div>

    </div>
  </div>
    `
    videoContainer.append(card)
    })
}

// show item in display
