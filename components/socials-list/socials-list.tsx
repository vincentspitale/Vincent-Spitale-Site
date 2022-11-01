import React, {Component} from "react"

const SocialList = ({ }) => ( 
        <div className="flex-wrap space-x-3 space-y-3 color-arrow">
         <a className="group" href="https://www.twitter.com/vincentspitale" target="_blank" rel="noopener noreferrer"> 
        <span className="flex-none accent-color group-hover:underline">Twitter</span>
        </a>
        <a className="group" href="https://www.instagram.com/vincent.spitale/" target="_blank" rel="noopener noreferrer">
        <span className="flex-none accent-color group-hover:underline">Instagram</span> 
        </a>
        
      <a className="group" href="https://www.github.com/vincentspitale" target="_blank" rel="noopener noreferrer">
        <span className="flex-none accent-color group-hover:underline">Github</span>
        </a>

        <a className="group" href="https://www.linkedin.com/in/vincentspitale" target="_blank" rel="noopener noreferrer">
        <span className="flex-none accent-color group-hover:underline">Linkedin</span>
        </a>
        </div>
) 

export default SocialList;