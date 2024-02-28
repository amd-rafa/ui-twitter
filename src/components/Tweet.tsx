//interface TweetProps {
//  user: string
//  children: string
//  likes?: number
//}
// border-radius = 8px
//const tweetStyles = {
//  borderRadius: 8
//}

// {} significa código JavaScript
import { ArrowClockwise, ChatCircle, Heart} from 'phosphor-react'


import './Tweet.css'
import { Link } from 'react-router-dom'

interface TweetProps{
  content: string
}

//Função
export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/amd-rafa.png" alt="Amanda Beltrão"/>

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Amanda Beltrão</strong>
          <span>@amanda_bertrao</span>
        </div>
          <p>{props.content}</p>

          <div className="tweet-content-footer">
            <button type="button">
              <ChatCircle />
              20
            </button>

            <button type="button">
              <ArrowClockwise />
              20
            </button>

            <button type="button">
              <Heart />
              20
            </button>
          </div>        
      </div>
    </Link>
  
  )
  }