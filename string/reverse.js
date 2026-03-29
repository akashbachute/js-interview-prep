//1 reverse String

function reverseString(str)
{
    return str.split('').reverse().join('')
}

console.log(reverseString('akash'))

//or

function reverseString2(str)
{
    let reverse='';

    for(let char of str)
    {
        reverse = char +   reverse
    }

    return reverse
}

console.log(reverseString2('akash'))

//or

function reverseWordInString(str)
{
    let words=str.split(' ')
    let reverseResult=' ';

    for(let word of words)
    {
        reverseResult= word +' '+ reverseResult;
    }

    return reverseResult
}

console.log(reverseWordInString('i love india'))