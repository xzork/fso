import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>    
    {text} 
  </button>)

const StatisticRow = ({ col1, col2 }) => {
  return (
    <tr>
    <td>
      {col1}
    </td>
    <td>
      {col2}
    </td>
  </tr>
  )
}

const Feedback = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <div>
      <Button handleClick={goodFeedback} text="good" />
      <Button handleClick={neutralFeedback} text="neutral" />
      <Button handleClick={badFeedback} text="bad" />
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const allFeedback = good + neutral + bad
  const averageFeedback = (good - bad) / allFeedback
  const positiveFeedback = good / allFeedback
 
  if (good+neutral+bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticRow col1="good" col2={good} />
          <StatisticRow col1="neutral" col2={neutral} />
          <StatisticRow col1="bad" col2={bad} />
          <StatisticRow col1="all" col2={allFeedback} />
          <StatisticRow col1="average" col2={averageFeedback} />
          <StatisticRow col1="positive" col2={positiveFeedback} />
        </tbody>
      </table>
    </div>
  )  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Feedback goodFeedback={goodFeedback} neutralFeedback={neutralFeedback} badFeedback={badFeedback}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App