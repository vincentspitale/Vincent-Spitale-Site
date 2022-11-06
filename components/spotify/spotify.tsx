import Image from 'next/image'
import React, { Component, useEffect, useState } from 'react'
import disk from '../../images/disc.png'
import gloss from '../../images/gloss.png'

function Spotify() {
  const [songName, setSongName] = useState(null)
  const [artistName, setArtistName] = useState(null)
  const [image, setImage] = useState(null)
  const [link, setLink] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    fetch(
      'https://q43tkyy3g7.execute-api.us-east-1.amazonaws.com/Stage/current'
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        if (data.response && data.response.length > 0) {
          setSongName(data.songName)
          setArtistName(data.artistName)
          setImage(data.image)
          setLink(data.link)
          setIsPlaying(data.isPlaying)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const response = isPlaying ? 'Listening to' : 'Last listened to'

  if (songName !== null && link !== null && image !== null) {
    return (
      <div className="w-full">
        <a
          className="flex flex-row justify-content-center"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-auto">
            <div className="h-20 w-20">
              <img
                className="h-20 w-20 object-contain spotify-record rounded-md"
                src={image}
              />
            </div>
          </div>
          <div className="w-full pl-6 mt-auto mb-auto">
            <p className="italic text-sm light-color">
              {`${response} `} <span className="text-color">{songName}</span>
              <br />
              {`by ${artistName}`}
            </p>
          </div>
        </a>
      </div>
    )
  } else {
    return (
      <div className="w-full">
        <div className="flex flex-row justify-content-center">
          <div className="w-auto">
            <div className="h-20 w-20"></div>
          </div>
          <div className="w-full pl-6 mt-auto mb-auto">
            <p className="italic text-sm light-color">Getting music</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Spotify
