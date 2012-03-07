/**
 * 
 */

function isEqual(o1,o2,cfg,reverse){
	cfg = cfg || {};
	cfg.exclude = cfg.exclude || {};	
	
	//first we check the reference. we don't care if null== undefined        
	if( cfg.strictMode ){
		if( o1 === o2 ) return true;            
	}
	else{
		if( o1 == o2 ) return true;            
	}
	
	if( typeof o1 == "number" || typeof o1 == "string" || typeof o1 == "boolean" || !o1 || 
		typeof o2 == "number" || typeof o2 == "string" || typeof o2 == "boolean" || !o2 ){
			return false;
		} 
	
	if( ((o1 instanceof Array) && !(o2 instanceof Array)) || 
		((o2 instanceof Array) && !(o1 instanceof Array))) return false;
	
	for( var p in o1 ){
		if( cfg.exclude[p] || !o1.hasOwnProperty(p) ) continue;
		if( !isEqual(o1[p],o2[p], cfg  ) ) return false;
	}
	if( !reverse && !cfg.noReverse ){
		reverse = true;
		return isEqual(o2,o1,cfg,reverse);  
	}
	return true;  
} 