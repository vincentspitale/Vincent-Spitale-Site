import Image from 'next/image'
import React, {Component, useEffect, useState} from "react"
import disk from "../../images/disc.png"
import gloss from "../../images/gloss.png"

function Spotify() {
    const [isLoading, setIsLoading] = useState(true);
    const [songName, setSongName] = useState(null);
    const [artistName, setArtistName] = useState(null);
    const [image, setImage] = useState(null);
    const [link, setLink] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=>{
        fetch('https://q43tkyy3g7.execute-api.us-east-1.amazonaws.com/Stage/current').then((res) => {
            return res.json();
          }).then((data) => {
            if (data.response && data.response.length > 0) {
                setIsLoading(false);
                setSongName(data.songName);
                setArtistName(data.artistName);
                setImage(data.image);
                setLink(data.link);
                setIsPlaying(data.isPlaying);
              }
          }).catch((err) => {
            console.log(err);
          });
    })
        
        const response = isPlaying ? 'Listening to': 'Last listened to';
        
        if (songName !== null && link !== null && image !== null) {
            return(
                <div className="w-full overflow-hidden">
                <a className="flex flex-col justify-content-center" href={link} target="_blank" rel="noopener noreferrer">
                <div className="w-full">
                <div className="block h-60 w-60 relative top-0 left-0 mx-auto">
                    {isPlaying &&
                    <div className="">
                <img src={disk.src} className="max-h-full h-60 w-60 object-contain absolute z-0 top-0 disc-move-rotate" placeholder="blur"/>
                <img src={gloss.src} className="max-h-full h-60 w-60 object-contain absolute z-10 top-0 mix-blend-soft-light disc-move"  placeholder="blur"/>
                </div>
                    }
                <img className="max-h-full h-60 w-60 object-contain spotify-record absolute z-20 top-0 left-0" src={image}/>
                </div>
                </div>
                <div className="caption pt-0">
                <p className="italic text-sm text-center light-color">{`${response} ${songName} by ${artistName}`}</p>
                </div>
                </a>
                </div>);
        } else {
            return (
            <div className="">
            <div className="h-60"/>
            <div className="caption">
                <p className="italic text-sm text-center light-color">Getting music</p>
                </div>
            </div>);
        }
}

// class Spotify extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isloading: true,
//             songName: null,
//             artistName: null,
//             image: null,
//             link: null,
//             isPlaying: null,
//         }
//     }

//     componentDidMount() {
//         fetch('https://q43tkyy3g7.execute-api.us-east-1.amazonaws.com/Stage/current').then((res) => {
//   return res.json();
// }).then((data) => {
//   if (data.response && data.response.length > 0) {
//         this.setState({
//             songName: data.songName,
//             artistName: data.artistName,
//             image: data.image,
//             link: data.link,
//             isPlaying: data.isPlaying,
//             isLoading: false,
//         });
  
//     }
// }).catch((err) => {
//   console.log(err);
// });
//     }

//     render() {
//         const result = this.state as {songName: string, artistName: string, image: string, link: string, isPlaying: boolean, isLoading: boolean}
        
//         const response = result.isPlaying ? 'Listening to': 'Last listened to';
        
//         if (result.songName != null) {
//             return(
//                 <div className="w-full overflow-hidden">
//                 <a className="flex flex-col justify-content-center" href={result.link} target="_blank" rel="noopener noreferrer">
//                 <div className="w-full">
//                 <div className="block h-60 w-60 relative top-0 left-0 mx-auto">
//                     {result.isPlaying &&
//                     <div className="">
//                 <Image src={disk} className="max-h-full h-60 w-60 object-contain absolute z-0 top-0 disc-move-rotate" placeholder="blur"/>
//                 <Image src={gloss} className="max-h-full h-60 w-60 object-contain absolute z-10 top-0 mix-blend-soft-light disc-move"  placeholder="blur"/>
//                 </div>
//                     }
//                 <img className="max-h-full h-60 w-60 object-contain spotify-record absolute z-20 top-0 left-0" src={result.image}/>
//                 </div>
//                 </div>
//                 <div className="caption pt-0">
//                 <p className="italic text-sm text-center light-color">{`${response} ${result.songName} by ${result.artistName}`}</p>
//                 </div>
//                 </a>
//                 </div>);
//         } else {
//             return (
//             <div className="">
//             <div className="h-60"/>
//             <div className="caption">
//                 <p className="italic text-sm text-center light-color">Getting music</p>
//                 </div>
//             </div>);
//         }
        
//     }


// }

export default Spotify;

