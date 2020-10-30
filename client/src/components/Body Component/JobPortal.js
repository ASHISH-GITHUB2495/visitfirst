import React,{useEffect} from "react";

function JobPortal(){

    const [options ,update] = React.useState();
    const [add,update2] =  React.useState(false);
    const [find,update3] = React.useState(false);
    const [data,update4] = React.useState();
    const [arrive,updateArrive] = React.useState(false);

    
    async function fetchData2(props) {
        
        const res = await fetch("https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs?category="+props+"&limit=15");
        res
          .json()
          .then((res) => {
             
           update4(res.jobs);
           update3(true);
           console.log(res.jobs);
          
          
        });
      }
   
   
    useEffect(() => {
        async function fetchData() {
          const res = await fetch(" https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs/categories");
          res
            .json()
            .then((res) => {
                update(res.jobs);
                update2(true);
           
          });
        }
        fetchData();
      },[]);

  function handleClick(event)
  {   console.log(event.target.value);
      updateArrive(true);
      fetchData2(event.target.value);



  }
   function createOption1(option)
   {  
       return <option value={option.slug}>{option.name}</option>
   }
   function jobCreate(job){

    return <div className="jobPost">
       
        <h4 style={{color:"white",border:""}}>{job.company_name}</h4>
         <p style={{color:"white",fontStyle:"italic"}}>{job.candidate_required_location}</p>
          <h5 style={{color:"sky blue"}} > {job.title}</h5>
        <p>Type: {job.job_type}</p>
        <p>Published On: {job.publication_date}</p>
        {/* <form action={job.url}>
         <input type="submit" value="Apply Now!!!" />
        </form> */}
        <a href={job.url} target="_blank" style={{color:"cyan"}}>Apply Now!!!</a>
      

       
        <hr style={{borderTop: "1px dotted white"}} />
    </div>

   }
 

 return(
     <div>
     <h1 style={{textAlign:"center",color:"white",textDecoration: "underline"}}>Job Portal</h1>
    <label style={{color:"white"}}>Category: </label>
 <select id="cars" name="cars" onChange={handleClick} >
 <option value="" disabled selected hidden>select category</option>
    { (add === true) ? options.map(createOption1) : 
       <h3 >loading</h3>
    }
  </select>
  <hr style={{border: "1px solid white"}} />
   {
       (find === true) ? data.map(jobCreate) :
        (arrive === false) ?
        <h4 style={{color:"white"}}>Find jobs around the world!!!</h4> :
        <h1>getting results....</h1>
   }

     </div>
 )

}
export default JobPortal;