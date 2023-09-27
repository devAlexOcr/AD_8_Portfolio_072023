import './stars.scss';


function Stars({rating}) {
    
    const starNumber = [1,2,3,4,5];
  
        return (      
  
        <div className='Stars'>
  
        {
        starNumber.map((i, p) =>
          <i key={p} className={(rating>i-1)?"fa-solid fa-star star-rating" : "fa-solid fa-star"}></i>
          )
        }
  
         </div>        
      )
  }
  
  export default Stars;