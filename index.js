function iif(cond) {
	function elseFn(th, el) {
		return cond ? th : el
	}
	function then(th) {
		return function (el) {
			return elseFn(th, el)
		}
	}
	return then
}

export default iif