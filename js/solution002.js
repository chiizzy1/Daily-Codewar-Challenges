/*  *****
Challenge: Count of positives / sum of negatives

Instructions: Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
              

                                       MY Solution
                                       function countPositivesSumNegatives(input) {
                                            if (input === [] || input.length === 0){
                                                return []
                                            }
                                            const transformToEven = num => num + 1
                                            const positive = n => n > 0
                                            const negative = n => 0 > n
                                            const positiveNums = input.filter(positive)
                                            const negativesNums = input.filter(negative)
                                            const a = positiveNums.length
                                            const b = negativesNums.reduce((acc, val) =>{
                                                        return acc + val
                                                    },0)

                                            return [a , b];
                                        }
                                       CodeWars Solution(s)

                                       function countPositivesSumNegatives(input) {
                                            if (input === null || input.length === 0) {
                                                return [];
                                            }
                                            let posCount = 0;
                                            let negSum = 0;
                                            for (let i = 0; i < input.length; i++) {
                                                if (input[i] > 0) {
                                                posCount++;
                                                } else {
                                                negSum += input[i];
                                                }
                                            }
                                            return [posCount, negSum];
                                         }
*/