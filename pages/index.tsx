import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import Spotify from '../components/spotify/spotify'

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
          I'm a developer, student, photographer, and artist. I'm currently
          studying computer science and mathematics at{' '}
          <a
            href="https://www.northeastern.edu/experience/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northeastern University
          </a>
          . I enjoy threading the needle between design, math, and tech to bring
          experiences to life.
        </p>
        <p>
          I serve as a student advisor for{' '}
          <a
            href="https://www.numulti.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MULTI
          </a>
          , Northeastern's undergraduate students for diversity, equity, and
          inclusion in tech. There I help maintain a community for marginalized
          students interested in a tech career.
        </p>
        <p className="pb-10">
          This summer I'm working at{' '}
          <a
            href="https://notability.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notability
          </a>{' '}
          as a returning software engineer co-op. I'm eager to
          advance note-taking on Apple platforms!
        </p>
      </div>
      <div className="pb-20">
        <h4>Profiles</h4>
        {/* <SocialList /> */}
      </div>
    </div>
    <div className="pb-20">
      <Spotify />
    </div>
  </div>
)

export default Home
