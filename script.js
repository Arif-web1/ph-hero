const new_data=async()=>{
    try {
        const response= await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
        const data=await response.json();
        const video_data=data.videos;
        console.log(video_data);
        video1(video_data); 
        
    } catch (error) {
        console.error('the eror is',error);
        
    }

}
new_data();

// the video loading function is start here
const video1=(video_data)=>{
    video_data.forEach(element => {
        console.log(element);
        
    });
}