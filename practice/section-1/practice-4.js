'use strict';


function collectSameElements(collectionA, objectB) {
	var array=new Array();
	var m=0;
	for(var i=0;i<collectionA.length;i++){
		for(var j=0;j<objectB.value.length;j++){
			if(collectionA[i].key==objectB.value[j]){
				array[m]=collectionA[i].key;
				m++;
			}
		}
	}
	return array; 
}
