
import React,{useState} from 'react'

function ReadMoreToggle(){
    const [isExpanded, setExpanded] = useState(false);
  
    const toggleReadMore = () => {
      setExpanded(!isExpanded);
    }

    return (
      <div>
        <button onClick={toggleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
        {
            isExpanded?<p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>:""
        }
        {
            isExpanded&&<p>jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
        }

      </div>
    )
  }

  export default ReadMoreToggle