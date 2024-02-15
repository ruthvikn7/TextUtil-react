import React,{useState} from 'react'

export default function TextForm(props) {
    const uClicked=()=>{
        console.log("clicked again"+text);
        const newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const lClicked=()=>{
      console.log("clicked again"+text);
      const newText=text.toLowerCase();
      setText(newText)
  }
    const handleOnChange=(event)=>{
        console.log("happy");
        setText(event.target.value);
    }
    const clearText=()=>{
      const newText='';
      setText(newText)
    }
    const handleCopy=()=> {
      var text=document.getElementById('myText')
      text.select()
      navigator.clipboard.writeText(text.value)
    }
    const[text, setText]=useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.head}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="myText" rows="8"></textarea>
</div>
      <button className="btn btn-primary mx-3" onClick={uClicked}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={lClicked}>Convert to lowercase</button>
      <button className="btn btn-primary mx-3" onClick={clearText}>clear</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>copy</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2 >
      <p>{text.split(" ").length} words and {text.length} characters</p> 
      <p><b>Time to count = </b>{0.008*text.split(" ").length} sec</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter  some Text'}</p>
    </div>
    </>
  )
}
