function stringChop(str, size) {
	let arr = []
	let j = size
	let i = 0
	let s = ""
	while(i < str.length){
	while(j > 0){
		if(i == str.length){
			break
		}
		s += str[i]
		i++
		j--
	}
	arr.push(s)
	j = size
	s = ""
	}
	return "[ " + `${arr.join(", ")}` + " ]"
}
// Do not change the code belo
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
