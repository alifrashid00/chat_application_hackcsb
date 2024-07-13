import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
    const [open,setOpen] = useState(false)
    const [text,setText] = useState("")
    const endRef = useRef(null);

    useEffect(()=> {
        endRef.current?.scrollIntoView({behavior:"smooth"});
    },[]);

    const handleEmoji = e => {
        setText(prev=>prev+e.emoji)
        setOpen(false)
    }
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>ashjdkhaskdhakjsdh</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt=""/>
                    <img src="./video.png" alt=""/>
                    <img src="./info.png" alt=""/>
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    
                    <div className="texts">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse placeat cum perspiciatis 
                            voluptas facilis animi temporibus facere, blanditiis id impedit
                             sapiente hic totam! Id maiores ratione in, quo facere doloremque!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse placeat cum perspiciatis 
                            voluptas facilis animi temporibus facere, blanditiis id impedit
                             sapiente hic totam! Id maiores ratione in, quo facere doloremque!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">

                    <div className="texts">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse placeat cum perspiciatis 
                            voluptas facilis animi temporibus facere, blanditiis id impedit
                             sapiente hic totam! Id maiores ratione in, quo facere doloremque!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse placeat cum perspiciatis 
                            voluptas facilis animi temporibus facere, blanditiis id impedit
                             sapiente hic totam! Id maiores ratione in, quo facere doloremque!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">

                    <div className="texts">
                        <img src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt=""/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse placeat cum perspiciatis 
                            voluptas facilis animi temporibus facere, blanditiis id impedit
                             sapiente hic totam! Id maiores ratione in, quo facere doloremque!
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt=""></img>
                    <img src="./camera.png" alt=""></img>
                    <img src="./mic.png" alt=""></img>
                </div>
                <input type="text" placeholder="Type a massage....."
                value={text}
                onChange={e=>setText(e.target.value)} />
                <div className="emoji">
                    <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)} />
                    <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                    </div>
                    
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat