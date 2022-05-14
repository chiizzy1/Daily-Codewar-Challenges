  /*  *****
Challenge: Fundamentals: Return

Instructions:  Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

                                       MY Solution

                function add(a,b){
                    return a + b
                }

                function divide(a,b){
                    return a/b
                }

                function multiply(a,b){
                    return a*b
                }

                function mod(a,b){
                    return a%b
                }
                
                function exponent(a,b){
                    return Math.pow(a, b)
                }
                    
                function subt(a,b){
                    return a-b
                }
                                       CodeWars Solution

                {var {add, subtract, multiply, divide, modulo} = require('ramda') 
                var [mod, subt, exponent] = [modulo, subtract, Math.pow]}

                                     CodeWars Solution(s)
            const [{pow: exponent}, {add, subtract: subt, multiply, divide, modulo: mod}] = [Math, require('ramda')] 
*/