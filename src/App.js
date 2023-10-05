import Header from './Header';
import './App.css';
import VideoCard from "./VideoCard" 




const videos = [

  {
    id: 1,
    title: "SIDEMEN AMOUNG US: BOUNTY",
    thumbnailUrl: "https://i.redd.it/4f6n4styv6v61.png",
    likes: 160000,
    views: 420000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZifGcBF1PG8-Hu8vCjkBfa536948NXy3yhcFMrqg=s176-c-k-c0x00ffffff-no-rj",

  },

  {
    id: 2,
    title: "THE MOST EXPLOSIVE SIDEMEN",
    thumbnailUrl: "https://i.redd.it/i-have-created-sidemen-charity-match-thumbnail-v0-d4lberd7x3mb1.png?s=6e8c77350035bcb35220f8dd3491c914da8636c7",
    likes: 120000,
    views: 920000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbAU-BouQTH70l2R1-AedUykgMyZxFhpL2LPyhXeA=s176-c-k-c0x00ffffff-no-rj",

  },

  {
    id: 3,
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    thumbnailUrl: "https://raw.githubusercontent.com/SuperSimpleDev/html-css-course-2022/main/2-copy-of-code/lesson-12/thumbnails/thumbnail-1.webp",
    likes: 220000,
    views: 330000,
    channelName: "Marques Brownlee",
    channelLogoUrl: "https://github.com/SuperSimpleDev/html-css-course-2022/blob/main/2-copy-of-code/lesson-12/channel-pictures/channel-1.jpeg?raw=true",

  },

  {
    id: 4,
    title: "Try Not To Laugh Challenge #9",
    thumbnailUrl: "https://raw.githubusercontent.com/SuperSimpleDev/html-css-course-2022/main/2-copy-of-code/lesson-13/thumbnails/thumbnail-3.webp",
    likes: 150000,
    views: 650000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://github.com/SuperSimpleDev/html-css-course-2022/blob/main/2-copy-of-code/lesson-13/channel-pictures/channel-3.jpeg?raw=true",

  },

  {
    id: 5,
    title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    thumbnailUrl: "https://raw.githubusercontent.com/SuperSimpleDev/html-css-course-2022/main/2-copy-of-code/lesson-13/thumbnails/thumbnail-4.webp",
    likes: 290000,
    views: 350000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://github.com/SuperSimpleDev/html-css-course-2022/blob/main/2-copy-of-code/lesson-13/channel-pictures/channel-4.jpeg?raw=true",

  },

  {
    id: 6,
    title: " Kadane's Algorithm to Maximum Sum Subarray Problem",
    thumbnailUrl: "https://raw.githubusercontent.com/SuperSimpleDev/html-css-course-2022/main/2-copy-of-code/lesson-13/thumbnails/thumbnail-5.webp",
    likes: 190000,
    views: 650000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://github.com/SuperSimpleDev/html-css-course-2022/blob/main/2-copy-of-code/lesson-13/channel-pictures/channel-5.jpeg?raw=true",

  },

  {
    id: 7,
    title: "  Anything You Can Fit In The Circle I'll Pay For",
    thumbnailUrl: "https://raw.githubusercontent.com/SuperSimpleDev/html-css-course-2022/main/2-copy-of-code/lesson-13/thumbnails/thumbnail-6.webp",
    likes: 150000,
    views: 350000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://github.com/SuperSimpleDev/html-css-course-2022/blob/main/2-copy-of-code/lesson-13/channel-pictures/channel-6.jpeg?raw=true",

  },

  {
    id: 8,
    title: "SIDEMEN AMOUNG US: BOUNTY",
    thumbnailUrl: "https://preview.redd.it/can-anyone-help-me-to-identify-the-font-used-in-the-sidemen-v0-5bq50mm80or81.jpg?width=1280&format=pjpg&auto=webp&s=06b0cfa3708bfe82fe27eb002aa9a50a1364e09a",
    likes: 850000,
    views: 950000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbAU-BouQTH70l2R1-AedUykgMyZxFhpL2LPyhXeA=s176-c-k-c0x00ffffff-no-rj",

  },

  {
    id: 9,
    title: "Crazy Tik Toks Taken Moments Before DISASTER",
    thumbnailUrl: "https://i.redd.it/mrbeasts-worst-thumbnail-v0-fd4owsn1vgfa1.jpg?s=5789fc470016126054024281612737a0a61ca874",
    likes: 220000,
    views: 990000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj",

  },

  {
    id: 10,
    title: "Im actually having... FUN? In MINECRAFT (hacked) - Part 2",
    thumbnailUrl: "https://i.redd.it/eqpudvrs6yx41.jpg",
    likes: 150000,
    views: 450000,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZifGcBF1PG8-Hu8vCjkBfa536948NXy3yhcFMrqg=s176-c-k-c0x00ffffff-no-rj",

  },

  {
    id: 11,
    title: "Lamborghini Vs World's Largest Shredder",
    thumbnailUrl: "https://raw.githubusercontent.com/SuperSimpleDev/html-css-course-2022/main/2-copy-of-code/lesson-12/thumbnails/thumbnail-1.webp",
    likes: 99999,
    views: 99999,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://github.com/SuperSimpleDev/html-css-course-2022/blob/main/2-copy-of-code/lesson-12/channel-pictures/channel-1.jpeg?raw=true",

  },

  {
    id: 3,
    title: "SIDEMEN $50,000 RACE ACROSS THE UK",
    thumbnailUrl: "https://preview.redd.it/w9i9zxev9ey81.jpg?width=1600&format=pjpg&auto=webp&s=c0b7322f6dee7706d29de0e76d211f543acd4a7a",
    likes: 99999,
    views: 99999,
    channelName: "MoreSidemen",
    channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj",

  },



  

]


function App() {
  return (
    <div >

      <Header/>
      <div className='video-grid'>
        {
          videos.map((video,i)=> {
            return <VideoCard videoUrl = {video.thumbnailUrl}
            videoTitle = {video.title}
            videoViews = {video.views}
            videoLikes = {video.likes}
            videoChannelImg = {video.channelLogoUrl}
            videoChannelName = {video.channelName}

            />
          })
          
        }
        
    </div>
    </div>
  );
}

export default App;
