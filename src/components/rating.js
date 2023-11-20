
function Stars(productrating) {
   // console.log(productrating.rating)

if(productrating.rating<=0){
    return (
        <div className="Rating" aria-label="Rating 05">
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
          );
}

else if(productrating.rating>0 && productrating.rating<=1 ){
    return (
        <div className="Rating" aria-label="Rating 05">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
          );
}

else if(productrating.rating>1 && productrating.rating<=2 ){
    return (
        <div className="Rating" aria-label="Rating 05">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
          );
}

else if(productrating.rating>2 && productrating.rating<=3 ){
    return (
        <div className="Rating" aria-label="Rating 05">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
          );
}

else if(productrating.rating>3 && productrating.rating<=4 ){
    return (
        <div className="Rating" aria-label="Rating 05">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        </div>
          );
}

else if(productrating.rating>4 && productrating.rating<=5 ){
    return (
        <div className="Rating" aria-label="Rating 05">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked" ></span>
        </div>
          );
}
  }

export default Stars;