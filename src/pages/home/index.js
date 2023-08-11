import { useState } from "react";

function Home(){
     const [name,setName] = useState();
    const handleSave=()=>{
        alert(name);
    }
    return(
        <>
          <div>
             <label>username</label>
             <input type='text' onChange={(e)=>setName(e.target.value)}/>
             <br></br>
             <button onClick={handleSave}>Save</button>
          </div>
        </>
    );
}

export default Home;