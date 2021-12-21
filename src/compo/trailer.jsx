import React from 'react'
import { Link, useParams } from "react-router-dom";
import { Rating } from '@mui/material';
import {Button} from 'react-bootstrap'


export default function Trailer({fakedata}) {
    const {name}=useParams()
    const filmdata=fakedata.find(item=> item.title===name)



    return (
        <div className='trailer d-flex ' style={{margin:20,flexDirection:'column',color:'white'}}>
            <div className='d-flex mt-4 justify-content-between'>
                <div className='d-flex'>
                    <div style={{fontSize:25,fontWeight:'bold',marginRight:10}}>
                        {filmdata.title}
                    </div>
                    <div className='d-flex mt-2 ' >
                        <Rating name="read-only" value='1' readOnly max='1'/>
                        {filmdata.rate}/5
                    </div>
                </div>
                <div>
                    <Link to={'/'}><Button variant='primary'> take me back</Button></Link>
                </div>
            </div>
            <div className='mt-4'> 
                <div style={{fontSize:18,fontWeight:'bold'}}>
                    Description
                </div>
                <div>
                    {filmdata.desc}
                </div>
            </div>
            <div className='d-flex mt-4'> 
                <div  style={{width:'30%'}}> 
                    <img  src={filmdata.url}  alt='error' style={{height:400}}/>
                </div>
                <div  style={{width:'70%'}}> 
                <iframe width="748" height="400" src={filmdata.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>
                </div>
            </div>
            
        </div>
    )
}
