import React, { useEffect, useState } from 'react'

export default function Body() {
  const [Video, setVideo] = useState([])
console.log(Video)

    const api = 'AIzaSyBqfXD5uLqP8b83t4NqgRme6O2-vU-2lQU'; // Replace with your actual API key
    const url = "https://www.googleapis.com/youtube/v3/videos?";
    const channel = "https://www.googleapis.com/youtube/v3/channels?";
    
    useEffect(() => {
      // Fetch a list of videos
      fetch(url + new URLSearchParams({
        key: api,
        part: 'snippet',
        chart: 'mostPopular',
        maxResults:50,
        regionCode: 'BD',
        
      }))
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setVideo([data.items])  
           
         
        })// Assuming you want the first video
    
    }, []); // Empty dependency array for running only once
  
    // const getChannelIcon = (video_data) => {
    //   fetch(channel + new URLSearchParams({
    //     key: api,
    //     part: 'snippet',
    //     id: video_data.snippet.channelId
    //   }))
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data)
    //       video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
    //       setVideo([video_data]); // Update Video as an array with a single item
    //     });
    // };


  return (
    <div className='p-5 min-h-[90vh] w-full '>
      <div className='grid grid-cols-1 gap-2 600px:grid-cols-2 600px:gap-4 800px:grid-cols-3 800px:gap-8'>
   {
      
      Video.map((v,i)=> <VideoCart data={v} key={i}/>)
  
   }
      </div>
    </div>
  )
}





 function VideoCart({data}) {
  console.log(data)
    const title ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiatk."
  return (
    <div className='min-h-[50vh] w-[99%] 600px:w-[28vw] '>
        <div className='h-[30vh] w-full  '>
            <img src={data.channelThumbnail} className='rounded-lg h-full w-full' alt="" />
        </div>
       <div className='mt-2 p-1 flex'>
       <img src="/src/assets/7.jpg" className=' h-[50px] w-[50px] rounded-full object-cover' alt="" />
       <div>
        <h1 className='font-semibold mx-2 '>{title.slice(0 ,50)+"..."}</h1>
        <h1 className='font-semibold   text-[#817e7ef1] text-[17px] mt-1'>{data.channelTitle}</h1>

        <div className='flex gap-x-2 '>
        <h1 className='font-semibold   text-[#817e7ef1]  mt-1'>697k Views</h1>.
        <h1 className='font-semibold   text-[#817e7ef1]  mt-1'>59 minutes ago</h1>
        </div>
       </div>
       </div>
       <div></div>
    </div>
  )
}

