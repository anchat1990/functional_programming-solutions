function duckCount() {
      // SOLUTION GOES HERE
//    return (function countDucks(arg) {
//        return arg && arg.reduce(function(total, a) {
//        if (a && a.hasOwnProperty("quack")) total++;
//        return total;
//        }, 0)
//    }).call(arguments);
	var list = arguments.map(function(val) {return val});
        console.log(list)
	var count = list.reduce( function (sum, current) {
		if (current && current.hasOwnProperty("quack")) return ++sum
	}, 0)
	return count
}

module.exports = duckCount
