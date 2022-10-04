"use strict"

// M 1

// { let n=+prompt("n sonini kiriting:");

// let array=[];
// for (let i=0; i<=n; i++){
//    array[i]=Math.random()*10+1;
//    array[i]=Math.round(array[i]);
// }
// console.log(array);
// }

// M 2

// let n=+prompt("n sonini kiriting:");
// let array=[];
// for (let i=0; i<=n; i++){
//    array[i]=Math.pow(2, i+1);
// }
// console.log(array);
 

//  M 3

// {
//   let n=+prompt("n massiv elementlari sonini kiriting: ");
//   let array=[],sum=0;
//   for(let i=0; i<n; i++){
//     array[i]=Math.random()*10+1;
//     array[i]=Math.round(array[i]);
//     sum+=array[i];
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   console.log(`Massiv elementlari yig'indisi: ${sum}`);
// }

//  M 4
// {
//   let array=[];
//   let sum1= 0,sum2= 0;
//   array[0]=0;
//   for(let i=1; i<=10; i++){
//     array[i]=i*10;
//   }
// for(let i=0; i<=10; i++){
//   if(i%2==1){
//     sum1+=array[i];
//   } 
//   else if(i%2==0){
//     sum2-=array[i];
//   }
// }
//   console.log(`Massiv elementlari: ${array}`);
//   console.log(`Toq indekslardagi elementlar yig'indisi: ${sum1}`);
//   console.log(`Juft indekslardagi elementlar ayirmasi: ${sum2}`);
// }


//  M 5

// {
//   let n=+prompt("Massiv elementlarisonini kiriting:");
//   let array=[],s=0;
//   for(let i=0; i<n; i++){
//     array[i]=+prompt(`${i+1} - elementni kiriting:`);
//     s+=array[i];
//   }
//   console.log(`Masssiv elementlari: ${array}`);
//   console.log(`Massiv elementlari yig'indisi: ${s}`);
// }


// M 6 

// {
//   let n=+prompt("Massiv elementlarisonini kiriting:");
//   let array=[],Array=[];
//   for(let i=0; i<n; i++){
//     array[i]=Math.random()*10+1;
//     array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=0; i<n; i++){
//   Array[i]=array[n-i-1];
//   array.pop();
//   }
//   console.log(`Indekslari kamayish tartibidagi massiv elementlari: ${Array}`);
// }


//       M 7 



// M 8 


//   let n=+prompt("Massiv elementlari sonini kiriting: ");
//   let k=+prompt("k-indeksni kiriting:");
//   let l=+prompt("n-indeksni kiriting(n>k):");
//   let array=[],s=0;
//   for(let i=0; i<n; i++){
//    array[i]=Math.random()*10+1;
//    array[i]=Math.round(array[i]);
//    if(i>=k && i<=l){
//     s+=array[i];
//    } 
//    }
//    console.log(`Massiv elementlari: ${array}`);
//    console.log(`${k} chi va ${l} chi indekslari oasidagi elementlar yig'indisi: ${s}`);



//  M 9

// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],max;
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=2; i<n; i+=2){
//     max=Math.max(array[i-2],array[i]);
//   }
//   console.log(`Massivning juft indekslardagi eng katta elementi: ${max}`);
// }


//  M 10 

// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],min;
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=2; i<n; i+=2){
//     min=Math.min(array[i-2],array[i]);
//   }
//   console.log(`Massivning juft indekslardagi eng kichigi elementi: ${min}`);
// }

