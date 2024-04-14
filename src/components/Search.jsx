import { useState } from "react";
import axios from "axios";

export default function Search(){
    const [search,setSearch] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/api/v1/search/shopName',{name:search})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.error(err)})
    }
    return(
        <div>
            <form method="post" onSubmit={(e)=>{handleSubmit(e)}}>
                <input type="text" placeholder="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <input type="submit" value="Search"/>
            </form>
            <div>
                space for shop name
            </div>
        </div>
    )
}