import { useState } from 'react'
import "./Accordion.css"

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return ( 
        <div className='wrapper'>
            <div className='accordion'>

                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected == i ? '-' : '+'}</span>
                        </div>
                        <div className={selected == i ? 'content show' : 'content'}>
                            <h2>{item.answer}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}


const data = [
    {
        question: 'Why should I be interested in the train & transport industry?',
        answer: 'Its a key part of the economies growth that is an area in which allows people all over to get around and stay connected.'
    },
    {
        question: 'What is the future of transport Industry?',
        answer: 'Technology will drive radical changes in transport in the next 10 years, with profound implications for transport users and businesses. Electrification, connectivity, automation, and real-time data collection and analysis are driving the development of new modes of travel and new ways to do business.'
    },
    {
        question: 'Is taking train really good for the environment? ',
        answer: 'Yes of course, Rail transport is the most environment-friendly way to travel. The greenhouse effect of gas emissions per kilometer on railway transport is 80% less than cars.'
    },
]

export default Accordion