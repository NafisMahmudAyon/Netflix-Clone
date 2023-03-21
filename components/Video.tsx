import React from "react";
import items from "./VideoList";
function Video() {
    const itemList = items.map(item =>( <li key={item.id}>{item.title}
        {/* <video autoPlay muted loop src={item.link}></video></li> */}
        <video controls width="600px">
            <source src={item.link} type="video/mp4" />
        </video></li>
        )
      );
    
      return (<ul>{itemList}</ul>);
}

export default Video;