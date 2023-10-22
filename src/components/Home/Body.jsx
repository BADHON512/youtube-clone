import { format } from "timeago.js";
import { useEffect, useState } from "react";
import Genres from "./Genres";
import { AiFillHome } from "react-icons/ai";
import { PiVideoFill } from "react-icons/pi";
import { BsPersonVideo2 } from "react-icons/bs";
import { BiLibrary, BiSolidDownload } from "react-icons/bi";

export default function Body() {
  const [Video, setVideo] = useState([]);

  const api = "AIzaSyBqfXD5uLqP8b83t4NqgRme6O2-vU-2lQU"; // Replace with your actual API key
  const url = "https://www.googleapis.com/youtube/v3/videos?";
  const channel = "https://www.googleapis.com/youtube/v3/channels?";

  useEffect(() => {
    // Fetch a list of videos
    fetch(
      url +
        new URLSearchParams({
          key: api,
          part: "snippet",
          chart: "mostPopular",
          maxResults: 50,
          regionCode: "BD",
        })
    )
      .then((res) => res.json())
      .then((data) => {
        data.items.forEach((el) => getChannelIcon(el));
      }); // Assuming you want the first video
  }, []); // Empty dependency array for running only once

  const getChannelIcon = (video_data) => {
    fetch(
      channel +
        new URLSearchParams({
          key: api,
          part: "snippet",
          id: video_data.snippet.channelId,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        video_data.channelThumbnail =
          data.items[0].snippet.thumbnails.default.url;

        setVideo((prevVideo) => [...prevVideo, video_data]);
      });
  };

  return (
    <div className="p-3 min-h-[90vh] w-full  ">
      <div className="flex gap-x-2 ">
        <div className="h-[50vh] w-[8vw] hidden 800px:block">
          <div className="h-[50vh] w-[8vw] fixed">
            <div className="mt-3 flex items-center flex-col w-full ">
              <div className=" flex flex-col items-center mt-3  hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <AiFillHome size={20} color="#C9C9C9" />
                <h1 className="text-[10px]">Home</h1>
              </div>

              <div className=" flex flex-col items-center mt-4 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <PiVideoFill size={20} color="#C9C9C9" />
                <h1 className="text-[10px]">Shorts</h1>
              </div>

              <div className=" flex flex-col items-center mt-4 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <BsPersonVideo2 size={20} color="#C9C9C9" />
                <h1 className="text-[10px]">Subscriptions</h1>
              </div>

              <div className="flex flex-col items-center mt-4 hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <BiLibrary size={20} color="#C9C9C9" />
                <h1 className="text-[10px]">Library</h1>
              </div>

              <div className=" flex flex-col items-center mt-4  hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
                <BiSolidDownload size={20} color="#C9C9C9" />
                <h1 className="text-[10px]">Downloads</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" h-[8vh] w-full hidden 800px:block ">
            <Genres />
          </div>

          <div className="grid grid-cols-1 gap-2 pt-8 800px:pt-0 600px:grid-cols-3  600px:gap-4 800px:grid-cols-3  justify-items-center ">
            {Video.map((v, i) => (
              <VideoCart data={v} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="800px:hidden">
        <div className=" h-[10vh] w-full bg-[#000000] fixed bottom-0 ">
          <div className="flex gap-x-2 justify-between p-3  w-full  ">
            <div className=" flex flex-col items-center  hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <AiFillHome size={20} color="#C9C9C9" />
              <h1 className="text-[12px]">Home</h1>
            </div>

            <div className=" flex flex-col items-center  hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <PiVideoFill size={20} color="#C9C9C9" />
              <h1 className="text-[12px]">Shorts</h1>
            </div>

            <div className=" flex flex-col items-center  hover:bg-[#92898969] rounded-md p-1 cursor-pointer">
              <BsPersonVideo2 size={20} color="#C9C9C9" />
              <h1 className="text-[12px]">Subscriptions</h1>
            </div>

            <div className="flex flex-col items-center  hover:bg-[#92898969] rounded-md p-1 cursor-pointer mr-2">
              <BiLibrary size={20} color="#C9C9C9" />
              <h1 className="text-[12px]">Library</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCart({ data }) {
  console.log(data);

  const title = data.snippet.title;
  return (
    <div className="min-h-[30vh] w-[99%] 600px:w-[28vw] cursor-pointer ">
      <a href={`https://www.youtube.com/watch?v=${data.id}`}>
        <div className=" 600px:h-[20vh] 1000px:h-[30vh] w-full  ">
          <img
            src={data.snippet.thumbnails.maxres.url}
            className="rounded-lg h-full w-full "
            alt=""
          />
        </div>
      </a>
      <div className="mt-2 p-1 flex">
        <img
          src={data.channelThumbnail}
          className=" h-[50px] w-[50px] rounded-full object-cover"
          alt=""
        />
        <div>
          <h1 className="font-semibold mx-2 ">{title.slice(0, 50) + "..."}</h1>
          <h1 className="font-semibold   text-[#817e7ef1] text-[17px] mt-1">
            {data.snippet.channelTitle}
          </h1>

          <div className="flex gap-x-2 ">
            <h1 className="font-semibold   text-[#817e7ef1]  mt-1">
              697k Views
            </h1>
            .
            <h1 className="font-semibold   text-[#817e7ef1]  mt-1">
              {format(data?.snippet?.publishedAt)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
