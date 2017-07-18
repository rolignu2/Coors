# CoorsJS

  Version 0.1
  
  [![Build Status](https://secure.travis-ci.org/mde/timezone-js.png)](https://secure.travis-ci.org/mde/timezone-js)



   ## Get distance between two points coordinates 
   
      ## CoorsJS need two simple points to get the distance (lat1,ln1) and (lat2,ln2)
     
      Example code
     
 ```js
        
        
        	var coor = new Coors();  // new instance 
          
          
	      coor.SetCoordA(13.705398, -89.208933); //set first coordinate 
	      coor.SetCoordB(13.704889, -89.208944); //set second cordinate
	
        alway return a numeric 
        console.log(coor.GetDistance());            //get distances in kilometers 
	      console.log(coor.GetDistance('meters'));    // get distance in meters
	      console.log(coor.GetDistance('mi'));        // get distance in miles 
        
        //Some keys you can use
        
        /***
            GetDistance() 
                  -> for kilometer = kilometer , k , K , kilo , kms
                  -> for meters    = M , m , meters , mts
                  -> form miles    = mi , MI , mile and 8mile 
        ***/
        
        
        
  ```
  
  

	


