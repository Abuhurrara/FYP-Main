import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../css/homee.css'

function Sidebar({header, data}) {
    const navigate = useNavigate();
  return (
    <div className="sidebar">
    <h5 className="abc">{header}</h5>
    <hr className="title-line"></hr>

    {data.map((item, key) => (

    <div className="items d-flex flex-column" key={key.title}>
      <button
        className="items-button"
        onClick={() => navigate(`/${item.route}`)}
      >
        {item.title}
      </button>
      <hr></hr>
      </div>
    ))
    }
<hr></hr>
<button className="post-food-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Post Food</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
               <h5 class="modal-title text-dark" id="exampleModalLabel">Food Details</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
               <form>
                  <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Restaurant ID</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">NGO ID</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Food Name</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Food Quantity</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Food Quality</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Expiration Time</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Picked Up</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Picked Up Time</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div>
                  
                  <button type="submit" class="btn btn-primary modal-login">Post Food</button>
               </form>
               </div>
               <div class="modal-footer">
               <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
               </div>
            </div>
         </div>
         </div>
  </div>
  )
}

export default Sidebar
