import React, { useState } from 'react';
import Items from './Items';
function Review() {
    const [data, setData] = useState(Items);
    const [count, setcount] = useState(0);
    return (
        <>
            <div className="container text-center mt-4">
                <p className='fs-1 fw-bolder'>Our Reviews</p>
                <hr className='mx-auto' />

                {/* card */}
                <div className="card w-75 mx-auto mt-5">
                    <img src={data[count].image} className="img-fluid border rounded-circle mx-auto mt-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title mt-2">{data[count].name}</h5>
                        <p className='text-center text-primary'>{data[count].position}</p>
                        <p className="card-text">{data[count].information}</p>

                    </div>
                    <div className="d-flex justify-content-center">

                        <button type="button" className="btn btn-primary me-2 border-0 bg-white text-primary" onClick={()=>count<=0?setcount(data.length-1):setcount(count-1)}><i className="fa fa-arrow-left"></i></button>

                        <button type="button" className="btn btn-primary border-0 bg-white text-primary" onClick={()=>count==data.length-1?setcount(0):setcount(count+1)}><i className="fa fa-arrow-right"></i></button>
                    </div>

                    <button type="button" className="btn btn-light mx-auto mt-3 mb-4" onClick={()=>setcount(Math.ceil(Math.random()*4))}>Surprise me</button>
                </div>

            </div>
        </>
    )
}

export default Review
