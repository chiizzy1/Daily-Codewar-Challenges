/*Given an array of strings, return an array where 
// the first letter of each string is capitalized*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const capitalizedNames = names.map(([initial, ...rest]) => [initial.toUpperCase(), ...rest].join(""))

console.log(capitalizedNames)