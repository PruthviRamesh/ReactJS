import { useState } from 'react';
import '../style/videos.css'
import VideosLogic from './videosLogic';
const Video = () => {
    // let videos=[
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/SOrQmeuthzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFXJHYShs9vnJOq0UOmoSThL1vPg",
    //         channelIcon:"https://yt3.ggpht.com/ytc/APkrFKYDhU8VVypT-adENdEyQgS6BL5_9jgTf90WLKCSuA=s68-c-k-c0x00ffffff-no-rj",
    //         title:"Top 10 Beautiful Tourist Places to Visit in Hampi, Karnataka",
    //         channelname:"Walking Wanderer",
    //         views:"1.6",
    //         id:1
    //     },
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/8mrVmf239GU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbWu0oL-sjQFIYs2KYTn-woAEzkg",
    //         channelIcon:"https://yt3.ggpht.com/ytc/APkrFKYSj1OfdqWSO4X4zCxWYvnVstqnJy-YKSwQ3XxzzA=s68-c-k-c0x00ffffff-no-rj",
    //         title:"Kantara Official Trailer | Rishab Shetty | Vijay Kiragandur | Hombale Films | In Cinemas 30 Sep 2022",
    //         channelname:"Hombale Films",
    //         views:"15",
    //         id:2
    //     },
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/mvLTegD1UZQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8OL63ZQnyd8tYsBmZEx8g3-rl9Q",
    //         channelIcon:"https://yt3.ggpht.com/ytc/APkrFKbwX-NLbwQUdVRX4Ln832NF8JsDqbSry96-SKJgGA=s68-c-k-c0x00ffffff-no-rj",
    //         title:"Indian Sports Honours 2023 | Couple goals from Virat Kohli & Anushka Sharma",
    //         channelname:"Star Sports",
    //         views:"5.2",
    //         id:3
    //     },
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/8YBnc7AG8no/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb6ZttVLDDjDM9h8JyEbWIfpZPBg",
    //         channelIcon:"https://yt3.ggpht.com/fxXPXCLklCsw104037JMJgtCAnCF-vHrEJM1MIl2sVSrM6HdvhW7kzm_IJHi7ekDI9d5vsKx=s68-c-k-c0x00ffffff-no-rj",
    //         title:"Terrifying noises coming from the HAUNTED TOWN of Rajasthan, India 🇮🇳",
    //         channelname:"Itchy Boots",
    //         views:"1.7",
    //         id:4
    //     },
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/5FO2X2vr1d4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt9nlsdmJRoWoztfRRmKVXfN3FwQ",
    //         channelIcon:"https://yt3.ggpht.com/dY1gnHgCfgT7OZQLTWL6t2DpmIAFnXfuwf4cIREB63dQn0NdIwaioeK7vlS3WHkdo21tGVTVfew=s68-c-k-c0x00ffffff-no-rj",
    //         title:"This is India’s impressive NEW high-speed train! – Vande Bharat Express",
    //         channelname:"Superalbs Travels",
    //         views:"1.8",
    //         id:5
    //     },
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/xQns__yj2Dk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKL6yI43waPlVTBspXxvDmyTUYOQ",
    //         channelIcon:"https://yt3.ggpht.com/ECkjlnETOWq_v2UuToBHeR_UY42J47UNashpSkdQpcMEMh0eBdBag-81bRs65BOhZzsbGxUW=s68-c-k-c0x00ffffff-no-rj",
    //         title:"India and Asia Are Preparing for Outbreak of New Disease from China | Vantage with Palki Sharma",
    //         channelname:"Firstpost",
    //         views:"1.2",
    //         id:6
    //     },
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/I4VuvodVwOo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK6U1CshJ6u1YiP7bIY3BKQXpHXA",
    //         channelIcon:"https://yt3.ggpht.com/jieWyTBgNhLXjvYphYSpkiczpRjNq1tPZVlzqU62yo4FnJF8IvEJ7o1r-tH5UDPA8QrLhh6ZXA=s68-c-k-c0x00ffffff-no-rj",
    //         title:"BEST INDIAN Acts on Got Talent EVER!",
    //         channelname:"Talent Recap",
    //         views:"4.5",
    //         id:7
    //     },
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/3GTdxgYacmg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBND4eozy3zb-xiuT8Z5KY-TjNxwQ",
    //         channelIcon:"https://yt3.ggpht.com/a4AOsw2qHfuXAooYs7EMkwqJMmW_Wbqebpzm8Xmf2Rj_95QMLnAAFDNRNOJG-sSoairOXvQKrS8=s68-c-k-c0x00ffffff-no-rj",
    //         title:"MasterChef के Kitchen में हुआ एक 'Blind Fold Taste Test' | MasterChef India New Season | Full Ep 16 ",
    //         channelname:"Sony LIV",
    //         views:"1",
    //         id:8
    //     },
    //     {
    //         thumbnail:"https://i.ytimg.com/vi/4GPvYMKtrtI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMcT4QGT22bnE3XrFWVgu9pR_58w",
    //         channelIcon:"https://yt3.ggpht.com/ytc/APkrFKYSj1OfdqWSO4X4zCxWYvnVstqnJy-YKSwQ3XxzzA=s68-c-k-c0x00ffffff-no-rj",
    //         title:"Salaar Telugu Trailer | Prabhas | Prashanth Neel | Prithviraj|Shruthi|Hombale Films|Vijay Kiragandur",
    //         channelname:"Hombale Films",
    //         views:"30",
    //         id:9
    //     }
    // ]
    let[y,sety]=useState(Video)
    function remove(id){
            sety(y.filter((user)=>user.id!==id))
    }
    return ( 
        <div className="videos">
            <VideosLogic video={y} fn={remove} data={sety} title={"All the videos"}/>
            <VideosLogic video={y.filter((data)=>data.views>=5)} fn={remove} data={sety} title={"Videos with more than or equal to 5M Views"}/>
            <VideosLogic video={y.filter((data)=>data.views<5)} fn={remove} data={sety} title={"Videos with less than 5M Views"}/>
        </div>
     );
} 
export default Video;
