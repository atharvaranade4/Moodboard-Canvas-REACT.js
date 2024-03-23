import { Link } from 'react-router-dom'

import Examples from './Examples'

export default function Home () {
  return (
    <>
        <h1>This is Home</h1>
        <Link to='/Landing'>
            Build your Moodboard
        </Link>
        <Examples />
    </>
  )
}