import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import Spotify from '../components/spotify/spotify'
import SocialList from '../components/socials-list/socials-list'

import dolores from "../images/dolores-portrait.jpg"

const Home: NextPage = () => (
  <div id="home-page">
    <div className="caption">
      <div className="prose">
        <Image
          src={dolores}
          alt="Me smiling wearing a shirt with hummingbirds and a floral print in Dolores Park with the skyline in the background."
          placeholder="blur"
          priority
        />
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
          I'm an app developer with a love for graphics programming. As of late, I've been splitting my time between studying computer science and mathematics at{' '}
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
      <div className="pb-20">
        <h4>Profiles</h4>
        <SocialList />
      </div>
    </div>
    <div className="pb-20">
      <Spotify />
    </div>
  </div>
)

export default Home
