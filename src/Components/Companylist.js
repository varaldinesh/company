import React, { useEffect, useState } from "react";
import Company from '../Components/Company'

function Companylist() {
    const [result, setResult] = useState([])






    const fetchData = async () => {

        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let parsedData = await data.json()
        setResult(parsedData)

    }

    useEffect(() => {
        fetchData()


    }, [])

    const handleNext = async () => {

    }

    return (
        <div>
            {result.map((e) => {
                return <Company key={e.id} company={e.company.name} contact={e.name} city={e.address.city} state={e.address.suite} id={String(e.id)} desc={e.company.catchPhrase + " " + e.company.bs} web={e.website} address={e.address.street + ", " + e.address.suite} zip={e.address.zipcode} email={e.email} phone={e.phone} />
            })}
            <div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="/" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="/">1</a></li>
                        <li class="page-item"><a class="page-link" href="/">2</a></li>
                        <li class="page-item"><a class="page-link" href="/">3</a></li>
                        <li class="page-item">
                            <button type="button" class="btn btn-primary" onClick={handleNext()}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Companylist