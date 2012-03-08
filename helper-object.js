/**
 * Compare two objects.
 * @method isEqual
 * @param o1 {Object} the object that is compared to
 * @param o2 {Object} the object that is compared with
 * @param cfg {Object} configuration settings:
 * 	exclude {Object} key/val map where the key is properties names we want
 * 	to exclude from the comparison. 
 * 	strictMode [Boolean] if true then === will be used to compare premitive types, otherwise
 * 	== will be used.
 * 	noReverse {Boolean} if this is true then the method will avoid of the reverse comparison. 
 * 		this will improve the efficiency and speed of the function but could cause to unwanted 
 * 		results. For example, o1={a:1}; o2={a:1,b:2}; then if we compare o2 to o1 it will match
 * 		because o2 has property 'a' that has the value 1, but if we compare o1 to o2 it will fail.
 * 		this is why we are doing a reverse compare. but the price for the reverse is in performance, 
 * 		since it is not implemented in the best way and it could reverse the same sub-objects more than 
 * 		once. 
 * @reverse - internal use of the recursion. do not use.
 * @return {Boolean} true if the object are equal.
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