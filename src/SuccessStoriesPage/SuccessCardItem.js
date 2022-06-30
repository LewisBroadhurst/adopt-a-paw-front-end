import React from 'react'
// import { Link } from 'react-router-dom'
import './SuccessCardItem.css';

function SuccessCardItem(props) {
  return (
    <>
        <li className='successcards_item'>
            <div className='successcards_item_link'>
                <div className='cardleft'>
                <img
                        className='successcards_item_img'
                        src={props.src} alt=""
                        />
                </div>
                <div className='cardright'>   
                    <h1 className='successcards_item_text'>Hi, my name is [name], I'm a [breed] [species] and I'm [age] years old! I was adopted by [customer name] and now have a loving family in my new home. Find out more about our journey by clicking here.</h1>
                </div>
            </div>
        </li>
    </>
  )
}

export default SuccessCardItem