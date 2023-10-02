import './stars.scss';


function Stars({rating, setRating}) {
    console.log(rating)
    const starNumber = [5,4,3,2,1];
  
        return (      
  
        <div className='Stars'>
          <p>test {rating}</p>
  
        {
        starNumber.map((i, p) =>
          <i key={p} onClick={()=>setRating(starNumber[p])} 
          className={(rating > i-1) ? "fa-solid fa-star star-rating" : "fa-solid fa-star"}
          ></i>
          )
        }
  
         </div>        
      )
  }
  
  export default Stars;