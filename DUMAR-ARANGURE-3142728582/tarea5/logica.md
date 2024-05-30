operadores logicos


a .**true || true || false && true || false && true && true || false**
Rta.
false ||false||true|| false
false||true
true
     5              3              2              1                   6            4
b .**true && (false || false && (true && (true || false && true))) || false && (true || false)**

   1     2                      3       4                  5      6                                          
 true ||true =  true          false ||true = true        true|| false = true

true||true ||true = true


        4          3             2                    1                 5          
c.**!(!true && (false || false && !!!true || (true && !false))) || false && true**

  1       2          3       4                                                
 !(true || false || false || false)
              5
 !(true) || false = false
