// 1) String Equality and Inequality: 
function testStringEquality(srt1, srt2) {
    return srt1 === srt2;
}
// Testing the function
function areStringsEqual() {
    const test1 = testStringEquality("hello", "hello");
    console.log(`test1 (Expected: true): ${test1}`);
    const test2 = testStringEquality("hello", "Hello");
    console.log(`test2 (Expected: false): ${test2}`);
}
// Run the tests
areStringsEqual();
// 2) Using Lowercase Function: 
function UsingLowercase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
function testquality() {
    const test1Result1 = UsingLowercase("uzmee", "KHAN");
    console.log(`Test 1 (Expected: false): ${test1Result1}`); // Expected output: false
    const test2Result2 = UsingLowercase("Uzmee", "UZMA");
    console.log(`Test 2 (Expected: true): ${test2Result2}`); // Expected output: true
}
// Run the tests
testquality();
// 4) Logical Operators 
// Function to check logical "AND" operator
function testLogicalAnd(condition1, condition2) {
    return condition1 && condition2;
}
// Function to check logical "OR" operator
function testLogicalOr(condition1, condition2) {
    return condition1 || condition2;
}
// Testing the logical operators
function testLogicalOperators() {
    // Test cases for logical "AND"
    console.log(`AND True: ${testLogicalAnd(true, true)}`); // Expected: true
    console.log(`AND False: ${testLogicalAnd(true, false)}`); // Expected: false
    // Test cases for logical "OR"
    console.log(`OR True: ${testLogicalOr(true, false)}`); // Expected: true
    console.log(`OR False: ${testLogicalOr(false, false)}`); // Expected: false
}
// Run the tests
testLogicalOperators();
// 5) Checking Items in an Array: 
// Function to check if an array includes a specific item
function doesArrayIncludeItem(array, item) {
    return array.includes(item);
}
// Testing the function to check items in an array
function testArrayItemChecking() {
    const array = [1, 2, 3, 4, 5];
    // Test case 1: Item is in the array (Should return true)
    const itemInArray = 3;
    const test1Result = doesArrayIncludeItem(array, itemInArray);
    console.log(`Test 1: Does array [${array}] include ${itemInArray}? ${test1Result}`); // Expected: true
    // Test case 2: Item is not in the array (Should return false)
    const itemNotInArray = 6;
    const test2Result = doesArrayIncludeItem(array, itemNotInArray);
    console.log(`Test 2: Does array [${array}] include ${itemNotInArray}? ${test2Result}`); // Expected: false
}
// Run the tests
testArrayItemChecking();
// 3) Numerical Comparisons:
// Function to compare two numbers using various operators
function compareNumbers(num1, num2) {
    console.log(`Comparing ${num1} and ${num2}:`);
    console.log(`Equal: ${num1 === num2}`); // Equality
    console.log(`Not Equal: ${num1 !== num2}`); // Inequality
    console.log(`Greater Than: ${num1 > num2}`); // Greater than
    console.log(`Less Than: ${num1 < num2}`); // Less than
    console.log(`Greater Than Or Equal: ${num1 >= num2}`); // Greater than or equal
    console.log(`Less Than Or Equal: ${num1 <= num2}`); // Less than or equal
}
// Testing different numerical comparisons
function testNumericalComparisons() {
    // Test case 1: Comparisons between 5 and 3
    compareNumbers(5, 3);
    // Output should show true for "Greater Than" and "Greater Than Or Equal"
    // Test case 2: Comparisons between 3 and 5
    compareNumbers(3, 5);
    // Output should show true for "Less Than" and "Less Than Or Equal"
    // Test case 3: Comparisons between 5 and 5
    compareNumbers(5, 5);
    // Output should show true for "Equal" and "Greater Than Or Equal", "Less Than Or Equal"
}
// Run the tests
testNumericalComparisons();
// 6) Checking Items Not in an Array: 
// Function to check if an array does not include a specific item
function doesArrayNotIncludeItem(array, item) {
    return !array.includes(item);
}
// Testing the function to check for absence of items in an array
function testArrayItemNonPresence() {
    const array = ['apple', 'banana', 'cherry'];
    // Test case 1: Item is not in the array (Should return true)
    const itemNotInArray = 'orange';
    const test1Result = doesArrayNotIncludeItem(array, itemNotInArray);
    console.log(`Test 1: Does array [${array.join(', ')}] NOT include ${itemNotInArray}? ${test1Result}`); // Expected: true
    // Test case 2: Item is in the array (Should return false)
    const itemInArray = 'banana';
    const test2Result = doesArrayNotIncludeItem(array, itemInArray);
    console.log(`Test 2: Does array [${array.join(', ')}] NOT include ${itemInArray}? ${test2Result}`); // Expected: false
}
// Run the tests
testArrayItemNonPresence();
export {};
