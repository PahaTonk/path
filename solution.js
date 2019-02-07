const solution = function(graph, start, finish)  {
    let starTrack = Infinity;
	let distance = 0;
    let nameStarsTrack = [];
    let arrDistance = [];
    let arrTrack = [];
    let flag = false;

	function sumArr(arr) {
		let sum = 0;
		for (var i = arr.length - 1; i > -1; i--) {
			sum += arr[i];
		}
		return sum;
	}

	function navigationTrack(arr) {
		let arrTrack = [];
		for (var i = 0; i < arr.length; i++) {
			arrTrack.push(arr[i][0]);
		}
		return arrTrack;
	}

	function searchLastCall(key) {
		for (var i = arrTrack.length - 1; i > -1; i--) {
			if(arrTrack[i][1] === key) {
				arrTrack = arrTrack.slice(0, i);
    			arrDistance = arrDistance.slice(0, i);
				return;
			}
		}
	}

    function calcStarsTrack(keyStart, valueKey, objKey) {
    	if (flag) {
    		flag = false;
    		searchLastCall(objKey, distance);
    	}
    	arrDistance.push(valueKey);
    	arrTrack.push([keyStart, objKey]);
    	if (keyStart === finish) {
    		distance = sumArr(arrDistance);
    		if (distance < starTrack) {
    			starTrack = distance;
    			nameStarsTrack = navigationTrack(arrTrack);
    		}
    		flag = true;
    		return;
    	} 
    	for (let key in graph[keyStart]) {
    		calcStarsTrack(key, graph[keyStart][key], keyStart);
    	}
    }
    for (let key in graph[start]) {
    	calcStarsTrack(key, graph[start][key], start);
    }
    nameStarsTrack.unshift(start);
    return {
	    distance: starTrack,
	    path: nameStarsTrack
	}
}
