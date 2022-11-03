import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Spotify from '../components/spotify/spotify'
import SocialList from '../components/socials-list/socials-list'

import whiteboard from "../images/whiteboard-portrait.png"

const Home: NextPage = () => (
  <div id="home-page">
    <div className="caption">
    <div className="flex justify-between space-x-3 pt-0 pb-5 sm:pt-10 sm:pb-10">
    <h5 className="bold-color m-0 whitespace-nowrap">Vincent Spitale</h5>
        <SocialList/>
      </div>
      <div className="prose">
      <div className="space-y-3">
        <Image
          src={whiteboard}
          alt="Me wearing a deep blue curduroy shirt holding up an iPad in front of a whiteboard."
          priority
          quality={100}
        />
<video className="image-to-ink" autoPlay={true} loop={true} muted={true} playsInline={true} width="100%" height="auto">
<source 
    src="/videos/imagetoink.mov"
    type='video/mp4;'/>
  <source 
    src="/videos/imagetoink-vp9-chrome.webm"
    type="video/webm"></source>
<source src={"https://merittthomas.com/video/hello.mp4"} type="video/mp4"/>
</video>
        <Image
          src={whiteboard}
          className="semantic-colors"
          alt="Me wearing a deep blue curduroy shirt holding up an iPad in front of a whiteboard."
          priority
          quality={100}
        />
        </div>
        <p className="pt-10">
          Hi, I'm Vincent &ensp;{' '}
          <a
            href="https://pronoun.is/he?or=they"
            className="Proud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="Proud">he/they</span>
          </a>
        </p>
        <p>
          I'm an app developer with a love for graphics programming. Recently I've been splitting my time between studying computer science and mathematics at{' '}
          <a
            href="https://www.northeastern.edu/experience/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northeastern University
          </a>{' '}
          and building products in the Bay Area. My best work threads the needle between design, math, and tech to bring
          experiences to life.
        </p>
        <p className="pb-10">
          I'm currently at{' '}
          <a
            href="https://notability.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notability
          </a>{' '}
          as a returning software engineer co-op. I'm incredibly proud of the work I've done there to enable features that further elevate digital note-taking.
        </p>
      </div>
    </div>
    <div className="pt-20 pb-20">
      <Spotify />
    </div>
  </div>
)

export default Home
