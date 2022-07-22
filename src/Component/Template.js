import React, { useState } from 'react'

export default function Template() {
    let [onbulb,SetOnBulb]=useState(false);

    let handleChange=(event)=>{
        const {name,value}= event.target;
        // $(".boxes").find("div").eq(value)
        console.log(name+""+value);
    }
    let  handleLightup=()=>{
        console.log("clicked")
    }
  return (
    <div>
        <div className="container">
            <div className="app border border mx-auto mt-5 w-50">
            <div className="mb-2 p-4">
                <input type="number" className="form-control" id="inputNumber" placeholder="Enter Number" onChange={handleChange}/>
                </div>
                <div className="d-flex align-itmes-center p-4">
                    <button type="button" className="btn btn-primary px-3 me-5 w-50" onClick={handleLightup}>Lightup</button>
                    <button type="button" className="btn btn-primary px-3 w-50">Reset</button>
                </div>

                <div className='boxes mt-3 px-4'>
                    <div className="row pb-3">
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>1</p>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>2</p>
                                <div className='on'></div>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>4</p>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>5</p>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>6</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>7</p>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>8</p>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="box">
                                <p>9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
