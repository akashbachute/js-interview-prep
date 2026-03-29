//find Max and min

function findMaxMin(arr)
{
    let max=arr[0];
    let min=arr[0];

    for(let num of arr)
    {
        if(num>max)
        {
            max=num
        }

         if(num<min)
        {
            min=num
        }
    }

    return { max, min}
}

console.log(findMaxMin([1,2,3,4]))


function findSecounMaxAndSecounMin(arr)
{
    let descArr=[...arr].sort((a,b)=>b-a);
    let AscArr=[...arr].sort((a,b)=>a-b);
    return {
        secoundMax : descArr[1], 
       secoundmin :  AscArr[1], 
    }
}

console.log(findSecounMaxAndSecounMin([1,2,3,4,5,6]))

//5 , 2


//without sort

function findSecoundMaxAndSecounfMin(arr)
{
    let max=arr[0];
    let secoundMax=0

    for(let num of arr)
    {
        if(num>max)
        {
            secoundMax=max
            max=num
        }
     else if(num>secoundMax && num!==max)
     {
        secoundMax=num
     }
        
    }

    return secoundMax;
}

console.log(findSecoundMaxAndSecounfMin([1,2,3,4]))
