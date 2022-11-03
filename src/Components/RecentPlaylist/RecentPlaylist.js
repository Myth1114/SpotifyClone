import React from 'react'
import { recent } from '../../Data/recent'
import Card from '../Cards/Card'
const RecentPlaylist = () => {
  return (
    <div className='Cards'>
        <h2>Recently Played</h2>
        <div className='CardList'>
        {recent.map((el,idx)=>(
                 <Card key={idx} el={el}/>
        ))}
        </div>
    </div>
  )
}

export default RecentPlaylist