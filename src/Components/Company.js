import React, { useState } from 'react'

function Company(props) {
    const [txt, settxt] = useState("View Details");
    const company = props.company
    const contact = props.contact
    const address = props.address
    const email = props.email
    const phone = props.phone
    const web = props.web
    const city = props.city
    const state = props.state
    const zip = props.zip
    const id = props.id
    const desc = props.desc
    const pageid = `#${props.id}`

    // chaging view details button text
    const handleClick = () => {
        if (txt === "View Details") {
            settxt("Hide Details")
        } else {
            settxt("View Details")
        }
    }



    return (
        <div>
            <div className="card m-3 shadow p-3 mb-5 bg-body rounded" style={{ height: 'auto', backgroundColor: 'InfoBackground' }}>
                <div className="row mt-3 mb-3">
                    <div className="col-md ">
                        {company}
                    </div>
                    <div className="col-md d-flex flex-column align-items-start">
                        <span><b>Contact</b></span>
                        <span>{contact}</span>
                    </div>
                    <div className="col-md d-flex flex-column align-items-start">
                        <span><b>City</b></span>
                        <span>{city}</span>
                    </div>
                    <div className="col-md d-flex flex-column align-items-start">
                        <span><b>State</b></span>
                        <span>{state}</span>
                    </div>
                    <div className="col-md ">
                        <a className="btn btn-primary" data-bs-toggle="collapse" href={pageid} role="button" aria-expanded="false" aria-controls="collapseExample" onClick={handleClick}>
                            {txt}
                        </a>

                    </div>
                    <div className="collapse mt-4" id={id}>
                        <div className="card card-body">
                            <div><h6>Description</h6>{desc}</div>
                            <div className='d-flex'>
                                <div className='d-flex flex-column m-3'>
                                    <strong>Contact Person</strong> {contact}
                                    <strong>Website</strong>{web}
                                    <strong>Emails</strong> {email}
                                    <strong>Phones</strong>{phone}
                                </div>
                                <div className='d-flex flex-column m-3'>
                                    <strong>Address</strong>{address}
                                    <strong>City</strong>{city}
                                    <strong>State</strong>{state}
                                    <strong>Zipcode</strong>{zip}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Company