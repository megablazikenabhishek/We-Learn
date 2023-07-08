import React, { useState } from 'react'
import "./Questions.css"
import NavBar from '../NavBar'
const Questions = () => {

    const [question, setquestion] = useState('');
    const [answers, setanswers] = useState('');
    const [options1, setoptions1] = useState('');
    const [options2, setoptions2] = useState('');
    const [options3, setoptions3] = useState('');
    const [options4, setoptions4] = useState('');

    const[final,setfinal]=useState([]);

    console.log(final)
    // console.log(options2)
    // console.log(options3)
    // console.log(options4)
    // console.log(question,answers)

    const nextquestion=()=>{
        setfinal((prev)=>{
            return [...prev,{question,answers,options:[options1,options2,options3,options4]}]
        })
        setquestion('');
        setanswers('');
        setoptions1('');
        setoptions2('');
        setoptions3('');
        setoptions4('');
    }

    const handleSubmit=()=>{
        setfinal((prev)=>{
            return [...prev,{question,answers,options:[options1,options2,options3,options4]}]
        })
        
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="signup_container">
                <div className="signup_form_container" onSubmit={handleSubmit}>
                    <div className="right">
                        <p>Add Questions</p>
                        <form className="form_container" >
                            <input
                                type="text"
                                placeholder="Add Question"
                                name="question"
                                onChange={(e)=>{setquestion(e.target.value)}}
                                // value={data.question}
                                required
                                className="input"
                            />
                            <input
                                type="text"
                                placeholder="Add Option 1"
                                name="option1"
                                onChange={(e)=>{setoptions1(e.target.value)}}
                                // value={data.option1}
                                required
                                className="input"
                                />
                            <input
                                type="text"
                                placeholder="Add Option 2"
                                name="option2"
                                
                                onChange={(e)=>{setoptions2(e.target.value)}}
                                // value={data.option2}
                                required
                                className="input"
                                />
                            <input
                                type="text"
                                placeholder="Add Option 3"
                                name="option3"
                                onChange={(e)=>{setoptions3(e.target.value)}}
                                // onChange={ }
                                // value={data.option3}
                                required
                                className="input"
                                />
                            <input
                                type="text"
                                placeholder="Add Option 4"
                                name="option4"
                                onChange={(e)=>{setoptions4(e.target.value)}}
                                // onChange={ }
                                // value={data.option4}
                                required
                                className="input"
                            />
                            <input
                                type="number"
                                placeholder="Add Correct Answer Number"
                                name="ans"
                                onChange={(e)=>{setanswers(e.target.value)}}
                                // value={data.ans}
                                required
                                className="input"
                            />
                            {/* {error && <div className="error_msg">{error}</div>} */}
                            <button type="submit" className="green_btn">
                                Submit
                            </button>
                            <button type="button" className="green_btn" onClick={nextquestion}>
                                Add Next Question
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Questions