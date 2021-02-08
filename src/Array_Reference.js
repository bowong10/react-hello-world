/*
https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array


es6 for ... to work

Push string to end of the array

this.setState(prevState => ({
  myArray: [...prevState.myArray, "new value"]
}))
Push string to beginning of the array

this.setState(prevState => ({
  myArray: ["new value", ...prevState.myArray]
}))
Push object to end of the array

this.setState(prevState => ({
  myArray: [...prevState.myArray, {"name": "object"}]
}))
Push object to beginning of the array

this.setState(prevState => ({
  myArray: [ {"name": "object"}, ...prevState.myArray]
}))

this.setState({ myArray: [...this.state.myArray, 'new value'] }) //simple value
this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] }) //another array

*/
