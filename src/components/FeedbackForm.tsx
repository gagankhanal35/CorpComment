import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";


export default function feedbackform() {
        const [text, setText] = useState('');
        const charCount = MAX_CHARACTERS - text.length;
        

  return (
    <form className="form">
        <textarea value={text} onChange={(event) => {
            setText(event.target.value)
        }}
         name="" id="feedback-textarea" maxLength={150}></textarea>

        <label htmlFor="feedback-textarea"> Enter your feedback </label>

        <div>
            <p className="u-italic"> {charCount} </p>

            <button>
            <span> Submit </span>
            </button>

        </div>

        
        
    </form>
  )
}
