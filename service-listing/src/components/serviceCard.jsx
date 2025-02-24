import React from "react";


function serviceCard ({data}) {
    return (
        <div>
           {
            data.length > 0 ? (
                data.map((el,i) => (
                    <div key = {i}>
                        <h1>service title: {el.name}</h1>
                        <h1>service description: {el.title}</h1>
                        
                    </div>


                ))

            ):(
                <p>Loading...</p>
            )
           }
            
        </div>
    )
}
export default serviceCard
