import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Spotify from '../components/spotify/spotify'
import SocialList from '../components/socials-list/socials-list'

import whiteboard from '../images/whiteboard-portrait.png'
import ferryBuilding from '../images/ferry-building.jpg'
import ipad from '../images/iPad Pro 12.9 - Space Gray - Portrait.png'

const Home: NextPage = () => (
  <div id="home-page">
    <div className="caption">
      <div className="flex justify-between space-x-3 pt-0 pb-5 sm:pt-10 sm:pb-10">
        <h5 className="bold-color m-0 whitespace-nowrap">Vincent Spitale</h5>
        {/* About Section Link */}
      </div>

      <div className="space-y-3">
        <Image
          className="rounded-lg"
          src={whiteboard}
          alt="Me wearing a deep blue curduroy shirt holding up an iPad in front of a whiteboard."
          priority
          quality={100}
        />
        <video
          title="Image to Ink"
          className="w-full aspect-[12/5] image-to-ink"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          width="100%"
          height="auto"
        >
          <source src="/videos/imagetoink.mp4" type="video/mp4;" />
          <source
            src="/videos/imagetoink-vp9-chrome.webm"
            type="video/webm"
          ></source>
        </video>
        <video
          title="A whiteboard being converted to digital ink and the writing being selected and moved"
          className="w-full aspect-[2158/1608] rounded-lg"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          width="100%"
          height="auto"
        >
          <source src="/videos/demo.mp4" type="video/mp4;" />
        </video>
        <div className="bg-card-gray dark:bg-card-gray-d rounded-lg">
          <div className="p-10">
            <div className="relative max-h-[30rem] aspect-[229/296] mx-auto">
              <video
                title="Textbook switching from a light to a dark appearance"
                className="px-[5.0%] pt-[4.8%]"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                width="100%"
                height="auto"
              >
                <source src="/videos/textbook.mp4" type="video/mp4;" />
              </video>

              <Image
                className="absolute top-0 select-none"
                src={ipad}
                alt="iPad bezel"
                priority
                quality={80}
              />
            </div>
          </div>
        </div>
        <div className="bg-card-gray dark:bg-card-gray-d rounded-lg">
          <div className="p-10">
            <div className="relative max-h-[30rem] aspect-[229/296] mx-auto">
              <video
                title="Biology notes switching from a light to a dark appearance"
                className="px-[5.0%] pt-[4.8%]"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                width="100%"
                height="auto"
              >
                <source src="/videos/notes.mp4" type="video/mp4;" />
              </video>

              <Image
                className="absolute top-0 select-none"
                src={ipad}
                alt="iPad bezel"
                priority
                quality={80}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="max-w-[50%] pr-1.5">
            <Image
              className="rounded-lg"
              src={ferryBuilding}
              alt="Me smiling wearing a deep blue curduroy shirt and yellow oversized round sunglasses in front of the Bay Bridge."
              priority
              quality={80}
            />
          </div>
          <div className="pl-1.5">
            <SocialList />
          </div>
        </div>
      </div>
      <div className="prose">
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
          I'm an app developer with a love for graphics programming. Recently
          I've been splitting my time between studying computer science and
          mathematics at{' '}
          <a
            href="https://www.northeastern.edu/experience/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northeastern University
          </a>{' '}
          and building products in the Bay Area. My best work threads the needle
          between design, math, and tech to bring experiences to life.
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
          as a returning software engineer co-op. I'm incredibly proud of the
          work I've done there to enable features that further elevate digital
          note-taking.
        </p>
      </div>
      <div className="pt-5 pb-20">
        <Spotify />
      </div>
    </div>
  </div>
)

export default Home
