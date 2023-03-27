var a=[2,4,5,6,10,12,20]; 
			for(i=0; i<a.length; i++){
			var x=0;
				for(j=1; j<a[i]; j++){
					if(a[i]%j==0){
						x+=j
					}
				}
				if(x==a[i]){
					console.log(a[i]);
				}
			}