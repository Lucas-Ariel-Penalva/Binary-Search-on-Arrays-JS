## Usefulness of Binary Search for coding problems.

If the coding problem that you are presented with states that the input Array/List is ***sorted***, the optimal solution likely requires implementing *Binary Search*.

#### Binary Search works on Logarithmic time **O(log n)** which is *much faster* than Lineal Search O(n).

###### Comparing the number of operations on the worst case scenario between Lineal and Binary Search

Input size | Lineal Search | Binary Search | 
-----------| ------------- | --------------
100,000    | 100,000       | 16            |
200,000    | 200,000       | 17            |
400,000    | 400,000       | 18            |
1,000,000  | 1,000,000     | 20            |


Using Binary Search is specially important if the problem has a robust test suite with random tests and lists of size **N > 1,000,000**.


### A Binary Search implementation description 


#### Function input : A sorted array and a value.

**1.** Create a **start** pointer (0) and an **end** pointer (inputArray.length -1).

**2.** Initiate a WHILE loop that runs while the **start** pointer is less than or equal the **end** pointer. 

  * Create a **middle** pointer between **start** and **end**. You can use *Math.floor((**start** + **end**) / 2)*. You have to use Math.floor or Math.ceil to round the number in case the input has an odd size.
  
  * Check inputArray[**middle**] :
    * if it's the value you want, return that index or the value.
    * If the value you are searching is *bigger* than inputArray[**middle**] make the **start** pointer equal **middle +1**.
    * If the value you are searching is *smaller* than inputArray[**middle**] make the **end** pointer equal **middle -1**.

**3.** If the loop is done, you haven't found anything. Return -1 to indicate that the value doesn't exist in the Array.


Examples on the Javascript file.
