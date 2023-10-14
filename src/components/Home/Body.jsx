import React from 'react'

export default function Body() {
    const api = 'AIzaSyBqfXD5uLqP8b83t4NqgRme6O2-vU-2lQU'; // Replace with your actual API key
    const url = "https://www.googleapis.com/youtube/v3/videos?";
    const channel = "https://www.googleapis.com/youtube/v3/channels?";
    
    fetch(url + new URLSearchParams({
        key: api,
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 1, // Corrected parameter name
        regionCode: 'BD',
        type: 'video' // Added to specify video results
    })).then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    
   const getChannelIcon=(video_data)=>{
    console.log(video_data)
    fetch(channel + new URLSearchParams({
        key:api,
        part:'snippet',
        id:video_data.snippet.channelId
    })).then((res)=>res.json())
    .then((data)=>console.log(data))
   }

   const bb=[1,2,3,4,5,6,7]
  return (
    <div className='p-5 min-h-[90vh] w-full '>
      <div className=''>
   {
    bb.map((v)=>(<VideoCart key={v}/>))
   }
      </div>
    </div>
  )
}





 function VideoCart() {
    const title ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat."
  return (
    <div className='min-h-[50vh] w-[30vw] '>
        <div className='h-[30vh] w-[28vw] '>
            <img src="/src/assets/4.jpg" className='rounded-lg h-full w-full' alt="" />
        </div>
       <div className='mt-2 p-1 flex'>
       <img src="/src/assets/7.jpg" className=' h-[50px] w-[50px] rounded-full object-cover' alt="" />
       <div>
        <h1 className='font-bold mx-2 text-[17px]'>{title.slice(0 ,70)+"..."}</h1>
        <h1 className='font-bold  text-[#817e7ef1] text-[17px] mt-1'>Channel badhon</h1>

        <div className='flex gap-x-2 '>
        <h1 className='font-bold  text-[#817e7ef1] text-[17px] mt-1'>697k Views</h1>.
        <h1 className='font-bold  text-[#817e7ef1] text-[17px] mt-1'>59 minutes ago</h1>
        </div>
       </div>
       </div>
    </div>
  )
}

