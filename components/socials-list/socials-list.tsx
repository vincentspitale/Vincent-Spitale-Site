import React, {Component} from "react"

const SocialList = ({ }) => ( 
        <div className="flex flex-wrap flex-col space-y-3 color-arrow">
         <a className="flex space-x-4 group" href="https://www.twitter.com/vincentspitale" target="_blank" rel="noopener noreferrer"> 
        <span className="bold-color font-medium">Twitter</span>
        <span className="w-full shrink dark:border-gray-800"></span>
        <span className="flex-none group-hover:underline accent-color">Follow</span>
        </a>
        <a className="flex space-x-4 group" href="https://www.instagram.com/vincent.spitale/" target="_blank" rel="noopener noreferrer">

        <span className="bold-color font-medium">Instagram</span>
        <span className="w-full shrink dark:border-gray-800"></span>
        <span className="flex-none group-hover:underline accent-color">Follow</span> 
        </a>
        
      <a className="flex space-x-4 group" href="https://www.github.com/vincentspitale" target="_blank" rel="noopener noreferrer"> 
        <span className="bold-color font-medium">Github</span>
        <span className="w-full shrink dark:border-gray-800"></span>
        <span className="flex-none group-hover:underline accent-color">Follow</span>
        </a>

        <a className="flex space-x-4 group" href="https://www.linkedin.com/in/vincentspitale" target="_blank" rel="noopener noreferrer"> 
        <span className="bold-color font-medium">Linkedin</span>
        <span className="w-full shrink dark:border-gray-800 accent-color"></span>
        <span className="flex-none group-hover:underline accent-color">Connect</span>
        </a>
        </div>
) 

export default SocialList;