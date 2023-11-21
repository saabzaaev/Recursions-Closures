// Task-1
function sum(num)
{
    if(num == 1)
    {
        return 1
    }
    return num + sum(num - 1)
}
console.log(sum(5));

// Task-2
function factorial(num)
{
    if(num == 1)
    {
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(5));


// Task-3
function factorials(num)
{
    if(num == 1)
    {
        return 1
    }
    return num * factorials(num - 2)
}
console.log(factorials(9));

// Task-4
function fibonacci(n) { 
    if (n <= 1) { 
        return n; 
	} 
	return fibonacci(n - 1) + fibonacci(n - 2); 
} 
console.log(fibonacci(5))

// Task-5
function sumofnumbers(x)
{
    function addy(y = 2)
    {
        return x + y

    }
    console.log(addy(2));
    function addz(z = -8)
    {
        return x + z
    }
    console.log(addz(-8));
}
console.log(sumofnumbers(5));

// Task-6
function product(x)
{
    function y(num)
    {
        return x * num
    }
    return y
}
console.log(product(-3)(-9));




// Task-7
function sum_of_digit(n) 
{ 
    if (n == 0)
    {
    return 0;
    } 
    return n % 10 + sum_of_digit(parseInt(n / 10)); 
}
console.log(sum_of_digit(121));