import React, {useState} from 'react';


function HooksComp(){
    const [title] = useState('Hooks Component from state')
    const [subject] = useState('React')
    const [count, setCount] = useState()
    return(
        <div>
            <div className="jumbotron">
                <h1>{title}</h1>
                <p>
                A jumbotron indicates a big box for calling extra attention to some special content or information.
                A jumbotron is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.
                Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.
                </p>
            </div>
            <div onClick={()=>{setCount(count+1)}}>Click</div>
            <h2>{count}</h2>
            <h2>{subject}</h2>
        </div>
    )
}

export default HooksComp;