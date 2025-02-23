// {
//     "status": true,
//     "message": "successfully fetched all the categories",
//     "categories": [
//     {
//     "category_id": "1001",
//     "category": "Music"
//     },
//     {
//     "category_id": "1003",
//     "category": "Comedy"
//     },
//     {
//     "category_id": "1005",
//     "category": "Drawing"
//     }
//     ]
//     }






const load_categories=async()=>{
    try {
        const response=await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        const data=await response.json();
        const data_categories=data.categories;
        load_button(data_categories);
        // console.log(data_categories);
        
    } catch (error) {
        console.error('eror',error)
    }
}


load_categories();

const navbar=document.getElementById('navbar');
// console.log(navbar);


const load_button=(data_categories)=>{
data_categories.forEach(element => {
    const new_div=document.createElement('div');
    new_div.innerHTML=`
    <button onclick="click_category(${element.category_id})" class="btn">${element.category} </button>
    `
   
    navbar.appendChild(new_div)
console.log(element.category_id);

});



}
const click_category=(id)=>{
    console.log(id);
    
fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
.then((res)=>res.json())
.then((data)=>data.category)
.then((newdata)=>loading_video(newdata))

.catch((error)=>console.log(error)
)
}


// {
//     "status": true,
//     "message": "successfully fetched all the videos",
//     "videos": [
//     {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//     {
//     "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//     "profile_name": "Olivia Mitchell",
//     "verified": ""
//     }
//     ],
//     "others": {
//     "views": "100K",
//     "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//     }
//     ]
//     }

// video loading
const load_videos=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=>res.json())
    .then((data)=>loading_video(data.videos))
    .catch((error)=>console.log(error)
    )
};
load_videos();

const main_video=document.getElementById('main-video');
console.log(main_video);

const loading_video=(videos)=>{
    
main_video.innerHTML='';
    
    videos.forEach(video => {
        const new_div=document.createElement('div');
        new_div.classList=`card bg-base-100 w-96 shadow-xl`;
        new_div.innerHTML=` <figure class="h-[312px] relative">
                <img class="h-full w-full object-cover"
                    src=${video.thumbnail}
                    alt="Shoes" />
                    ${
                        video.others.posted_date?.length==0?"":` <span class="absolute bottom-4 text-white right-0 mr-2 bg-black">${find_time(video.others.posted_date)} </span>
`
                    }
            </figure>
            <div class=" flex flex-col ">
                <div class="flex gap-5 mt-5  w-full">
                    
                    <div class="">
                        <img class="h-10 w-10  rounded-full " src=${video.authors[0].profile_picture} alt="">
                    </div> 

                    <!-- Title -->
                     <div class="flex-grow flex flex-col gap-3">
                        <h1 class=" w-fit text-xl font-bold">${video.title}</h1>
                        <span class=""><h1 class="font-thin inline pr-3 text-xl">${video.authors[0].profile_name}</h1>
                        ${video.authors[0].verified==true?`<img class="h-5 w-5 inline" src="design/ok-svgrepo-com.svg" alt="" srcset="">
`:""}
                        </span>
                        <h1 class="text-xl">${video.others.views}</h1>
                    </div>
                </div>
                            </div> `
                            main_video.appendChild(new_div);
        
    });
    

}
const find_time=(time)=>{
    const hour=parseInt(time/3600);
    const remaining_second=time%3600;
    const minutes=parseInt(remaining_second/60);
    const remaining_last_second=remaining_second%60;
    
    
    return`${hour} h ${minutes} m ${remaining_last_second} s`
    }