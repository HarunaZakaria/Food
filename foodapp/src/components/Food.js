import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'

function Food({Food}) {
    const [quantity, setquantity] =useState(1)
    const [varient, setvarient] =useState('regular')
    const [show, setShow] = useState(false);
    const [card, setcard] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div style={{margin:"70px"}} class="shadow-lg p-3 mb-5 bg-white rounded">
        <div onClick={handleShow}>
        <h1>{Food.name}</h1>
        <img src={Food.image} className="img-fluid" style={{height:'200px', width:'200px'}}/>
        </div>

        <div className='flex-containter'>
            <div className='w-100 m-1'>
                <p>Varients</p>
                <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                    {Food.varients.map((varient) => {
                        return <option value={varient}>{varient}</option>
                    })}
                </select>
            </div>
            <div className='w-100 m-1'>
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(10).keys()].map((x, i)=> {
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>
        </div>
        <div className='flex-containter'>
            <div className='m-1 w-100'>
               <h1 className='mt-1'>price:Ghc {Food.prices[0][varient] * quantity}</h1>
            </div>
            <div className='m-1 w-100'>
               <button className='btn'>Add To card</button> 
            </div>
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={Food.image} style={{height:'400px'}} className="img-fluid"/>
          <p>{Food.description}</p>
        </Modal.Body>

        <Modal.Footer>
         
          <button className='btn' onClick={handleClose}>Close</button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Food
