'use strict';

function collectSameElements(collectionA, collectionB) {
	var sz=new Array();
	var m=0;
	for(var i=0;i<collectionA.length;i++){
	   for(var j=0;j<collectionB.length;j++){
			if(collectionA[i]==collectionB[j]){
				sz[m]=collectionA[i];
				m++;
	}
	}
	}	
	return sz;
}
