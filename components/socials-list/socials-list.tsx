import React, {Component} from "react"

const SocialList = ({ }) => ( 
        <div className="grid grid-flow-col-dense grid-rows-2 sm:grid-rows-none gap-x-3 color-arrow">
         <a className="group" href="https://www.twitter.com/vincentspitale" target="_blank" rel="noopener noreferrer"> 
        <span className="flex-none accent-color group-hover:underline">Twitter</span>
        </a>
        <a className="group" href="https://www.instagram.com/vincent.spitale/" target="_blank" rel="noopener noreferrer">
        <span className="flex-none accent-color group-hover:underline">Instagram</span> 
        </a>
        
      {/* <a className="group" href="https://www.github.com/vincentspitale" target="_blank" rel="noopener noreferrer">
        <span className="flex-none accent-color group-hover:underline">Github</span>
        </a>

        <a className="group" href="https://www.linkedin.com/in/vincentspitale" target="_blank" rel="noopener noreferrer">
        <span className="flex-none accent-color group-hover:underline">Linkedin</span>
        </a> */}
        </div>
) 

export default SocialList;