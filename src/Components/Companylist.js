import React, { useEffect, useState } from "react";
import Company from '../Components/Company'

function Companylist() {
    const [result, setResult] = useState([])
    const [a, seta] = useState(0)
    const [b, setb] = useState(3)
    const [pageno, setpageno] = useState(1)
    const [styles, setstyles] = useState()
    const [prevcla, setprevcla] = useState()
    const [nextcla, setnextcla] = useState()



    const fetchData = async () => {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let parsedData = await data.json()
        setResult(parsedData)
    }
    useEffect(() => {
        fetchData()
    }, [])


    const nextPage = () => {
        let len = result.length
        let totalpage = Math.round(len / 3)
        let p = "page-item disabled"
        let p2 = "page-item"
        if (pageno === totalpage) {
            setstyles("style={{ pointerEvents: 'none', }}")
            setnextcla(p)
        } else {
            seta(b)
            setb(b + 3)
            setpageno(pageno + 1)
            setnextcla(p2)
        }
    }

    const prevPage = () => {
        let p = "page-item disabled"
        let p2 = "page-item"
        if (pageno === 1) {
            setstyles("style={{ pointerEvents: 'none', color: '#dddddd'  }}")
            setprevcla(p)
        } else {
            setb(a)
            seta(a - 3)
            setpageno(pageno - 1)
            setprevcla(p2)
        }
    }
    return (
        <div>
            {result.slice(a, b).map((e) => {
                return <Company key={e.id} company={e.company.name} contact={e.name} city={e.address.city} state={e.address.suite} id={String(e.id)} desc={e.company.catchPhrase + " " + e.company.bs} web={e.website} address={e.address.street + ", " + e.address.suite} zip={e.address.zipcode} email={e.email} phone={e.phone} />
            })}
            <div>
                <span id="end"></span>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={prevcla} >
                            <a className="page-link" aria-label="Previous" onClick={prevPage} styles>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" id="1" >1</a></li>
                        <li className="page-item"><a className="page-link" id="2" >2</a></li>
                        <li className="page-item "><a className="page-link" id="3" >3</a></li>
                        <li className={nextcla} >
                            <a className="page-link" onClick={nextPage} styles>
                                <span aria-hidden="true" >&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Companylist