import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api=()=>{
    async function LoadData(){
        let response=await axios.get("http://localhost:9000/books")
        bdata=response.data.map(x=>{
            let url="http://localhost:8090/"+x.image
            return(
            <div className="details">
                    <img src={url} alt="no image found" />
                    <h5>Book Name:{x.name}</h5>
                    <h5>Book Author:{x.author}</h5>
                    <h5>Book Pages:{x.pages}</h5>
                    <h5>Book Price:{x.price}</h5>
            </div>
            )
        }
        )

            setData(bdata)
        }

        let [bdata,setData]=useState("")
        useEffect(LoadData,[])
        return(
            <div className="container">
                {bdata}
            </div>
        )
    }

    export default Api;