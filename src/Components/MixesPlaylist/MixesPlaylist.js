import React from 'react'
import { mixes } from '../../Data/mixes'
import Card from '../Cards/Card'

const MixesPlaylist = () => {
  return (
    <div className='Cards'>
    <h2>Your Top Mixes</h2>
    <div className='CardList'>
    {mixes.map((el,idx)=>(
             <Card key={idx} el={el}/>
    ))}
    </div>
</div>
  )
}

export default MixesPlaylist