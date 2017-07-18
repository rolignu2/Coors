	
	
	class Coors {
		
		constructor(){
			this.latA 		= 0.0;
			this.latB 		= 0.0;
			this.lngA 		= 0.0;
			this.lngB 		= 0.0;
			this.EarthDist	= (6357 + 6378) / 2;  
		}
		
		SetCoordA( lat , lng ){
			this.latA 	= lat;
			this.lngA 	= lng;
			
			return this;
		}
		
		SetCoordB( lat , lng ){
			this.latB 	= lat;
			this.lngB 	= lng;
			
			return this;
		}
		
		GetDistance( dim = 'kilometer' ){
		
			let l1 	= (this.latA * Math.PI)/180;
			let l2 	= (this.latB * Math.PI)/180;
			let ln1 = (this.lngA * Math.PI)/180;
			let ln2 = (this.lngB * Math.PI)/180;
			
			let dist = this.EarthDist * Math.acos( Math.cos(l1) * Math.cos(l2) * Math.cos(ln1-ln2) + Math.sin(l1) * Math.sin(l2)  );
		
			if(isNaN(dist)) dist = 0.0;
		
			switch(dim){
				case 'kilometer':
				case 'k':
				case 'K':
				case 'kilo':
				case 'kms':
					return dist;
				case 'meters':
				case 'M':
				case 'm':
				case 'mts':
					return dist * 1000;
				case 'mi' :
				case 'mile':
				case '8mile':
				case 'MI':
					return dist * 0.621371;
			}
		}
	
	};
	
	