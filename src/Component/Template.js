import React, { useState,useEffect } from 'react'
import Box from './Box';

export default function Template() {

    let [tileList, setTileList]=useState([]);
    let [isLoaded, setIsLoaded]=useState(false);
    let [numberValue,SetNumberValue]=useState(0);
    useEffect(() => {
    let tiles=[];
    for(let i=0;i<=9;i++){
        tiles.push({
            value:i,
            isLightup:false
        })
    }
    setTileList(tiles);
    setIsLoaded(true);
    }, [])
    
    let handleChange=(event)=>{
        const {name,value}= event.target;
        console.log(name+""+value);
        SetNumberValue(event.target.value);
        if(value>10){
            alert("Enter Values between 1 to 9")
        }
    }
    let  handleLightup=()=>{
        let eArray=[...tileList];
        for(let i=0;i<=9;i++){
            if(i==numberValue){
                eArray[i].isLightup=true;
            }
            else{
                eArray[i].isLightup=false;
            }
        }  
        setTileList(eArray);
        console.log(tileList);
    }
    let handleReset=()=>{
        let eArray=[...tileList];
        for(let i=0;i<=9;i++){
                eArray[i].isLightup=false;
        } 
        setTileList(eArray);

    }

  return (
    <div>
        {isLoaded==true? <div className="container">
            <div className="app border border mx-auto mt-5 w-50">
            <div className="mb-2 p-4">
                <input type="number" className="form-control" id="inputNumber" maxlength="1" placeholder="Enter Number" onChange={handleChange}/>
                </div>
                <div className="d-flex align-itmes-center p-4">
                    <button type="button" className="btn btn-primary px-3 me-5 w-50" onClick={handleLightup}>Lightup</button>
                    <button type="button" className="btn btn-primary px-3 w-50" onClick={handleReset}>Reset </button>
                </div>

                <div className='boxes mt-3 px-4'>
                   
                    <div className="row pb-3">
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>1</p>
                                {tileList[1].isLightup?<div className='on'></div>:null}

                            </div>

                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>2</p>
                                {tileList[2].isLightup?<div className='on'></div>:null}

                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>3</p>
                                {tileList[3].isLightup?<div className='on'></div>:null}
                            </div>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>4</p>
                                {tileList[4].isLightup?<div className='on'></div>:null}
                            </div>
                        </div>

                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>5</p>
                                {tileList[5].isLightup?<div className='on'></div>:null}

                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>6</p>
                                {tileList[6].isLightup?<div className='on'></div>:null}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>7</p>
                                {tileList[7].isLightup?<div className='on'></div>:null}
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>8</p>
                                {tileList[9].isLightup?<div className='on'></div>:null}
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>9</p>
                                {tileList[8].isLightup?<div className='on'></div>:null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>:null}
    </div>
  )
}
