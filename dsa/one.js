// a=0;
// b=1;
// numberoffibo=7;

// for(let i=0;i<=numberoffibo;i++){
//     console.log(a);
//     let temp =b;
//     b=temp+a;
//     a=temp
// }

// answer
// 011235813
//                                            fibo
// -------------------------------------------------------------------------------------------------------



// number=52517777765177;
// digit=7;
// count=0;
// while (number>0) {

//     rem=number%10;
//     if(rem==digit){
//         count++;
//     }
//     number=Math.floor(number/10); 
// }
// console.log(count);
//  answer 7

//                           no of times digits appeared in the number
// -------------------------------------------------------------------------------------------------------



// number =123456;
// reverse=0;
// while(number>0){
//     rem=number%10;
//     reverse =(reverse*10)+rem;
//     number=Math.floor(number/10);
// }

// console.log(reverse);
//                       reverse a given number if a string then put inside array
// -------------------------------------------------------------------------------------------------------


// firstnumber=10;
// secondnumber=0;
// operator='/';

// // if(operator=='+'){
// //     console.log(firstnumber+secondnumber);
// // } first method

// switch(operator){
//     case('+'):console.log(firstnumber+secondnumber); break;
//     case('-'):console.log(firstnumber-secondnumber); break;
//     case('*'):console.log(firstnumber*secondnumber); break;
//     case('/'):if(secondnumber!=0){console.log(firstnumber/secondnumber);} else{console.log("Error")}; break;

// } second meathod
//                               comand line calculator
// -------------------------------------------------------------------------------------------------------

// number =9;
// if((number%2)==1){
//     console.log("prime");
// }else console.log("not prime");

//                               weather a prime or not

// -------------------------------------------------------------------------------------------------------



// let number=153;
// let numbercopy=153;
// let lastsumofnumber =0;
// while(number>0){
//     debugger
//     lastnum=number%10;
//     cubeoflastnumber=lastnum*lastnum*lastnum;
//     lastsumofnumber=lastsumofnumber+cubeoflastnumber;
//     number=Math.floor(number/10);

// }
// if(numbercopy===lastsumofnumber){
//     console.log("armstrong number");
// }else console.log("not a armstrong number");


// ans: armstrong number
// Question:                         Armstrong number or not   (1^3+5^3+3^3 ==153)

// -------------------------------------------------------------------------------------------------------

// let arr=[2,3,4,5,6];
// let swap =(arr,a,b)=>{
// let temp=arr[a];
// arr[a]=arr[b];
// arr[b]=temp;
// }
// swap(arr,2,4);
// console.log(arr);

//                                swap a element in the array
// Ans:[ 2, 3, 6, 5, 4 ]
// -------------------------------------------------------------------------------------------------------


// let arr=[5150,168,95,85];
// const arr2= arr.sort((a,b)=>a-b);
// console.log(arr2[arr2.length-1]);
// Ans:5150

// Find the maximun element in the array

// -------------------------------------------------------------------------------------------------------



// let arr=[1,2,3,4,8,6,9,7,9,5];
// console.log(arr.reverse())


// Ans:[
//     5, 9, 7, 9, 6,
//     8, 4, 3, 2, 1
//   ]

// reverse an array

// -------------------------------------------------------------------------------------------------------


// let arr=[
//     [1,2,3],
//     [4,5,6]
// ]
// arr.forEach(element => {
//     element.forEach(ele =>{
//             console.log(ele)
//     })
// });

// 2d array

// -------------------------------------------------------------------------------------------------------


// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// let target=8;
// const binarysearch=(arr,target)=>{
//     let start=0;
//     let end=arr.length-1;
//     while(start<=end){
//         debugger
//        let mid =Math.floor((start+end)/2);
//         if(target<arr[mid]){
//             end=mid-1;
//         }else if(target>arr[mid]){
//             start=mid+1;
//         }else if (target==arr[mid]){
//             console.log(`found =${mid}`)
//             break;
//         }
    
//     }
// }
// binarysearch(arr,target);

// // binary search


// -------------------------------------------------------------------------------------------------------

// // let arr=[4,1,3,2];
// let arr=[65,84,95,100,21,58,64];

// swap=(arr,i,j)=>{
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp
// }

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0; j<arr.length-1; j++){
//         if(arr[j]>arr[j+1]){
//             swap(arr,j,j+1);
//         }
//     }
//     // if(arr[i]>arr[i+1]){
//     //     swap(arr,i,i+1);
//     // }
// }
// console.log(arr)

// // Sorting the array without inbuild function

// -------------------------------------------------------------------------------------------------------


// let arr=[1,2,3,4,5,6,7,8,9,11,12,13];
// let target=14;
// const binarysearch=(arr,target)=>{
//     let start=0;
//     let end=arr.length-1;
//     while(start<=end){
//         debugger
//        let mid =Math.floor((start+end)/2);
//         if(target<arr[mid]){
//             end=mid-1;
//         }else if(target>arr[mid]){
//             start=mid+1;
//         }else if (target==arr[mid]){
//             return console.log(`found =${arr[mid]}`)
            
//         }
//     }
//     return console.log(arr[start]);
// }
// binarysearch(arr,target);

// //                                   cieling of the number 

// -------------------------------------------------------------------------------------------------------

// let arr=[1,2,3,4,5,6,7,8,9,11,12,13];
// let target=0;
// const binarysearch=(arr,target)=>{
//     let start=0;
//     let end=arr.length-1;
//     while(start<=end){
//         debugger
//        let mid =Math.floor((start+end)/2);
//         if(target<arr[mid]){
//             end=mid-1;
//         }else if(target>arr[mid]){
//             start=mid+1;
//         }else if (target==arr[mid]){
//             return console.log(`found =${arr[mid]}`)
            
//         }
//     }
//     return console.log(arr[end]);
// }
// binarysearch(arr,target);

// //                          floar of the number in the sorted array


// -------------------------------------------------------------------------------------------------------
// const arr=[1,1,1,1,1,1,1,2,1];
// console.log(arr.indexOf(1));
// console.log(arr.lastIndexOf(1));

// console.log(Math.floor(Math.log10(2432)+1));


// var isPalindrome = function(x) {
//  return   parseFloat(
//         x
//           .toString()
//           .split('')
//           .reverse()
//           .join('')
//       ) * Math.sign(x)

//     // let arr=[x];
//     // let arr2=arr.reverse();
//     // if(arr===arr2){
//     //     return true
//     // }else return false

//     // console.log(num3)
// };

// console.log(isPalindrome(-1234))










// -------------------------------------------------------------------------------------------------------
// var merge = function(nums1, m, nums2, n) {

//     nums1=nums1.slice(0,m);
//   nums3=  nums1.concat(nums2);
//     nums3.sort((a,b)=>a-b);
//     console.log( nums3);
    
// };
// nums1 = [1,2,3,0,0,0]
//  m = 3; 
//  nums2 = [2,5,6];
//   n = 3
//   merge(nums1, m, nums2, n);
  



// -------------------------------------------------------------------------------------------------------

// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m,n);
//     nums1 = nums1.concat(nums2);
//     nums1.sort((a,b)=>a-b);
//     return nums1;
//    };

//    nums1 = [1,2,3,0,0,0]
//  m = 3; 
//  nums2 = [2,5,6];
//   n = 3;
//   console.log(merge(nums1, m, nums2, n))
  





// -------------------------------------------------------------------------------------------------------
// let arr =[1,2,3,4,4,4,5,6,7,8];
// debugger;
// for(let i=0;i<arr.length;i++){

//     for(let j=i+1;j<arr.length;j++){
//          if (arr[i]==arr[j]|| arr[i]==arr[i-1]){
//             arr.splice(i,1);
//          }else continue;
//     }


// console.log(arr);

// // remove duplicate element in the array









// -------------------------------------------------------------------------------------------------------
// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m,n);
//    nums1=nums1.concat(nums2);
//   return nums1.sort((a,b)=>a-b);
  
// };   nums1 = [1,2,3,0,0,0]
// m = 3; 
// nums2 = [2,5,6];
//  n = 3;
//  console.log(merge(nums1, m, nums2, n))
 



/////////////////////////////////////////////////////////////////////////

