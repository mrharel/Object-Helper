# Object-Helper Documentation

## isEqual
##### function isEqual(o1,o2,cfg,reverse)
**o1** {Object} the object that is compared to  
**o2** {Object} the object that is compared with  
**cfg** {Object} configuration settings:  
  *exclude* {Object} key/val map where the key is properties names we want to exclude from the comparison.  
  *strictMode* [Boolean] if true then === will be used to compare premitive types, otherwise == will be used.   
  *noReverse* {Boolean} if this is true then the method will avoid of the reverse comparison. this will improve the efficiency and speed of the function but could cause to unwanted results.  
  For example, o1={a:1}; o2={a:1,b:2}; then if we compare o2 to o1 it will match because o2 has property 'a' that has the value 1, but if we compare o1 to o2 it will fail. this is why we are doing a reverse compare. but the price for the reverse is in performance, since it is not implemented in the best way and it could reverse the same sub-objects more than once.   
**reverse** - internal use of the recursion. do not use.  
**return** {Boolean} true if the object are equal  

###Examples
var o1 = {a:1,b:2};   
var o2 = {a:1,b:"2",c:3};
isEqual(o1,o2); //

