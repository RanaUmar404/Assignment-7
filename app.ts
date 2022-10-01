//1. Write a ts program to find length of a string.
// var str:string="umar hassan"
// console.log("length of string:" +str.length);

import { createModuleResolutionCache } from "typescript";


//2. Write a ts program to copy one string to another string.
// function Copy(a:any, b:any)
// {
//     let i = 0;
//     for (i = 0; i < a.length; i++)
//          b[i] = a[i];
// }
// var a = "UmarRajput";
// var b = [];
// var index = 0; 
// Copy(a, b );
//  console.log("Now the seconed string is:"); 
// console.log(b.join(""));


//3. Write a ts program to concatenate two strings.
// var a="MAD "
// var b="Batvh-1"
// var c= a.concat(b)
// console.log(c);


//4. Write a ts program to compare two strings.
// var str1="love you Pakistan"
// var str2="love you Pakistan"
// var b=str1.localeCompare(str2)
// console.log(b);


//5. Write a ts program to convert lowercase string to uppercase.
// var er = "pakistan zindabad"
// var er2 = er.toUpperCase()
// console.log(er2);


//6. Write a ts program to convert uppercase string to lowercase.
// var er3 = "QUAID ZINDABAD"
// var er4 = er3.toLowerCase()
// console.log(er4);


//7. Write a ts program to toggle case of each character of a string.
// function togChar(str:any)
// {
//     for (let i = 0; i < str.length; i++)
//     {
//         if (str[i] >= 'A' && str[i] <= 'Z')
//             str[i] =  String.fromCharCode(str[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
//         else if (str[i] >= 'a' && str[i] <= 'z')
//             str[i] =  String.fromCharCode(str[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
//     }
// }
// let str = "UmArKhAn".split("");
// togChar(str);
// console.log("String after toggle ");
// console.log((str).join(""));


//8. Write a ts program to find total number of alphabets, digits or special character in a string.
// function total(str: any) {
//     var alphabets = 0;
//     var digits = 0;
//     var specialChars = 0;
//     for (var i = 0; i < str.length; i++) {
//     if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z'))
//     {
//         alphabets++;
//     }
//     else if(str[i]>='0' && str[i]<='9')
//     {
//         digits++;
//     }
//     else
//     {
//         specialChars++;
//     }
//      }
//     console.log("alphabets: " + alphabets);
//     console.log("Digits: " + digits);
//     console.log("Special Characters: " + specialChars);
// }
// var str = "Rana uamr@ 404";
// total(str);


//9. Write a ts program to count total number of words in a string.
// var a = 0;
// var b = 1;
// function coword( str)
// {
//     var state = a;
//     var wc = 0;
//     var i = 0;
//     while (i < str.length)
//     {
//         if (str[i] == ' ' || str[i] == '\n'|| str[i] == '\t')
//             state = a;
//         else if (state == a)
//         {
//             state = b;
//             ++wc;
//         }
//         ++i;
//     }      
//     return wc;
// }
//     var str = "Asad Ali Umar Hanzla Ahmad Khizer Atif";
//     console.log("No of words : "+ coword(str));


//10. Write a ts program to find reverse of a string.
// var a:string[]=["umar","ali","ahmad","subhan"]
// console.log(a);
// a.reverse()
// console.log(a);


//11. Write a ts program to check whether a string is palindrome or not.
//  function palindrome( str )
//  {
//    let s = str.length -1;
//    for( let i = 0 ; i < s/2 ;i++)
//    {
//      let a = str[i] ;
//      let b = str[s-i];
//      if( a != b)
//      {
//        return false;
//      }
//    }
//    return true; 
//  }
//  function is_palindrome( str )
//  {
//    let ans = palindrome(str);
//    if( ans == true )
//    {
//      console.log("String is palindrome ");
//    }
//    else
//    {
//      console.log("String is not a palindrome");
//    }
//  }
//  let test = "umaramu";
// is_palindrome(test);


//12. Write a ts program to reverse order of words in a given string
// function rev(str,start,end)
// {
//     let val;     
//     while (start <= end)
//     {
//         val = str[start];
//         str[start]=str[end];
//         str[end]=val;
//         start++;
//         end--;
//     }
// }
// function revWords(s)
// {
//     s=s.split("");
//     let start = 0;
//     for (let end = 0; end < s.length; end++)
//     {
//         if (s[end] == ' ')
//         {
//             rev(s, start, end);
//             start = end + 1;
//         }
//     }
//     rev(s, start, s.length - 1);
//     rev(s, 0, s.length - 1);
//     return s.join("");
// }
// var s = "Rana Naveed Sarvar  Rajput";
// console.log(revWords(s));
 

//13. Write a ts program to find first occurrence of a character in a given string.
// var first = new String( "i love pakistan and my pakistan" );
// var index = first.indexOf( "pakistan" );
// console.log(" Last occurance of character is:" + index );


//14. Write a ts program to find last occurrence of a character in a given string.
// var stat = new String( "i love pakistan and my pakistan" );
// var index = stat.lastIndexOf( "pakistan" );
// console.log(" Last occurance of character is:" + index );


//15. Write a ts program to search all occurrences of a character in given string.
//  var stat =  "i love pakistan and my pakistan" ;
//  var stat1 = /pakistan/gi;
//  var stat2 = stat.indexOf("pakistan")
//  if(stat.search(stat1)==-1)    
//  {
//     console.log(" Search Dose not Found the word:" + stat1 );
//     console.log("Index is:" + stat2);
//    }   
//    else
//    {
//     console.log("  Search Found the word:" + stat1 );
//     console.log("Index is:" + stat2);
//    }


//16. Write a ts program to count occurrences of a character in given string.
//  function count(a, b)
//     {
//         let res = 0;
//         for (let i = 0; i < a.length; i++)
//         {
//             if (a.charAt(i) == b)
//             res++;
//         }
//         return res;
//     }
//         let str= "rana Umar";
//         let a = 'a';
//         console.log(count(str, a));


//17. Write a ts program to count total number of vowels and consonants in a string.
// function vowel(str) {                                      
//     const a = str.match(/[aeiou]/gi).length;
//     return a;
// }
// const string = prompt('Enter a string: ');
// const result = vowel(string);
// console.log(result);



//18. Write a ts program to find highest frequency character in a string.
// let ASCII_SIZE = 256;                                
// function hf(a)
// {
//      let count = new Array(ASCII_SIZE);
//     for (let i = 0; i < ASCII_SIZE; i++)
//     {
//         count[i] = 0;
//     }
//     let len = a.length;
//     for (let i = 0; i < len; i++)
//     {
//         count[a[i].charCodeAt(0)] += 1;
//     }
//     let max = -1;   
//     let result = ' ';   
//     for (let i = 0; i < len; i++)
//     {
//         if (max < count[a[i].charCodeAt(0)])
//         {
//             max = count[a[i].charCodeAt(0)];
//             result = a[i];
//         }
//     }
//     return result;
// }
// let a = "Rana Umar";
// console.log("Max occurring character is " , hf(a));
 

//19. Write a ts program to find lowest frequency character in a string.
// var arr1 = "rana umar"
//  var b = 99999999999999;
// var c = 0;
// var itemin;
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = 0; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j])
//       c++;
//    }
//    if (b > c) {
//      b = c;
//      itemin = arr1[i];
//    }
//     console.log(arr1[i] + ' exist ' + c + ' times ');
//   c = 0;
// }
// console.log('item less frequent : ' + itemin);


//20. Write a ts program to count frequency of each character in a string.
// var arr1 = "rana umar"                 
//  var b = 99999999999999;
// var c = 0;
// var itemin;
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = 0; j < arr1.length; j++) {
//     if (arr1[i] == arr1[j])
//       c++;
//    }
//     console.log(arr1[i] + ' exist ' + c + ' times ');
//   c = 0;
// }


//21. Write a ts program to remove first occurrence of a character from string.
// var a="hellow"
// var b=a.substring(1)
// console.log(b);
// //also
// var a="hellow"
// var b=a.slice(1)
// console.log(b);

//22. Write a ts program to remove last occurrence of a character from string.
// var string = 'Java script';                     //changes required
// var str1 = string.substring(0, string.length - 1);
// console.log(str1);
//also
// var string = 'umar56';
// var str2 = string.slice(0, string.length - 1);
// console.log(str2);


//23. Write a ts program to remove all occurrences of a character from string.
// function remove(d, e)                     
// {
//     let j, count = 0, n = d.length;
//     let t = d.split("");
//     for(let i = j = 0; i < n; i++)
//     {
//         if (t[i] != e)
//             t[j++] = t[i];
//         else
//             count++;
//     }
//     while (count > 0)
//     {
//         t[j++] = '\0';
//         count--;
//     }
//     console.log(t.join(""));
// }
// let d = "geeksforgeeks aleso";
// remove(d, 'e');


//24. Write a ts program to remove all repeated characters from a given string.
// function removerep(g, h)                      
// 	{
// 		var index = 0;
// 		for (var i = 0; i < h; i++)
// 		{
// 			var j;
// 			for (j = 0; j < i; j++)
// 			{
// 				if (g[i] == g[j])
// 				{
// 					break;
// 				}
// 			}
// 			if (j == i)
// 			{
// 				g[index++] = g[i];
// 			}
// 		}
// 		return g.join("").slice(g, index);
// 	}
// 		var g = "rana umar hello".split("");
// 		var h = g.length;
// 		console.log(removerep(g, h));


//25. Write a ts program to replace first occurrence of a character with another in a string.      
// const string = 'Rana Umar';                            
// const repFirst = string.replace(/a/, '_');
// console.log(repFirst); 
// const repAll = string.replace(/a/g, '_');
// console.log(repAll); 


//26. Write a ts program to replace last occurrence of a character with another in a string.
// const string = 'Rana Umar';            
// const replast = string.lastIndexOf('a');
// const replacement = '.';
// const replaced =
//   string.substring(0, replast) +replacement +string.substring(replast + 1);
// console.log(replaced); 


//27. Write a ts program to replace all occurrences of a character with another in a string.
//  const string = 'hello world';                        
//  const repAll = string.replace(/l/g, 'm');
//  console.log(repAll); 


//28. Write a ts program to find first occurrence of a word in a given string.
// function firstocc(str) {
//     const firsLe = str
//       .split(' ')
//       .map(word => word[0])
//       .join('');  
//     return firsLe;
//   }
//   console.log(firstocc('Habib, Bank, Limited'));
//   console.log(firstocc('Pakistan   Cricket   Board.'));
  




//conditional operators programming exercises


//1. Write a ts program to find maximum between two numbers using conditional operator.
// var a = 10
// var b = 5
// var c = (a>b)?"a is mamimum":"b is mamimum"
// console.log(c);


//2. Write a ts program to find maximum between three numbers using conditional operator.
// var c = 1
// var d = 2
// var e = 3
// var f = (c>d)?"c is maximum"?(c>e):"d is maximum":"e is maximum"
// console.log(f);


//3. Write a ts program to check whether a number is even or odd using conditional operator.
// var n=2  //input
// var x=(n%2==0)?"Even number":"Odd number"
// console.log(x);


//4. Write a ts program to check whether year is leap year or not using conditional operator.
//  var m=2012  //input
//  var y=(m%4==0)?"Leap year":"Not a Leap year"
//  console.log(y);


//5. Write a ts program to check whether character is an alphabet or not using conditional operator.
//  function chr(input)
//  {
//     var input_char = input.charCodeAt(0);
//     var z = ((input_char >= 65 && input_char <= 90) ||(input_char >= 97 && input_char <= 122))?"character is an alphabet":"character is not an alphabet"
//    console.log(z);
// }
// var input_char = "1";
// chr(input_char);




//List of switch case programming exercises

//1. Write a ts program to print day of week name using switch case.
// var n:number = 5
// switch(n)
// {
//  case 1:
//  {
//  console.log("Saturday");
//  break;
//  }
//  case 2:
//  {
//  console.log("Sunday");
//  break;
//  }
//  case 3:
//  {
//  console.log("Monday");
//  break;
//  }
//  case 4:
//  {
//  console.log("Tuesday");
//  break;
//  }
//  case 5:
//  {
//  console.log("Wednesday");
//  break;
//  }
//  case 6:
//  {
//  console.log("Thursday");
//  break;
//  }
//  case 7:
//  {
//  console.log("Friday");
//  break;
//  }
//  default:
//  {
//  console.log("not a day");
//  break;
//  }
// }


//4. Write a ts program to find maximum between two numbers using switch case.
// var a = 10
// var b = 5
//     switch (a>b) {
//         case true:
//             console.log(a);
//          break;
//          case false:
//              console.log(b);
//          break;
//       }


// //5. Write a ts program to check whether a number is even or odd using switch case.
var n = 10
switch (n > 0)
{
    case true:
        console.log("positive.", n);
    break;
case false:
        switch (n < 0)
        {
            case true: 
                console.log("negative.", n);
                break;
            case false:
                console.log("zero", n);
                break;
        }
        break
    }