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


function findSecoundMax(str)
{
    let words=str.split(' ');
    let descArray=words.sort((a,b)=>b.length -a.length);
    return descArray[1]
}

console.log(findSecoundMax('my name is akash'))



function findLongestWord(str)
{
    let words=str.split(' ');
    let longestWord=''
    let secoundLongest=''

    for(let word of words)
    {
        if(word.length > longestWord.length)
        {    secoundLongest= longestWord
            longestWord=word
        }

        else if ( word.length > secoundLongest && word.length !== secoundLongest.length)
        {
            secoundLongest=word
        }
    }

    return {longestWord ,secoundLongest}
}

console.log(findLongestWord('hi akash subhash bachute'))