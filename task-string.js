// Count how many times a string has the letter a
// const str = 'hmmad';
// const count = str .split('d').length-1;
// console.log(count);


// ount how many times a string has the letter a or A

// const str = 'Ahammad';
// const count = str.match(/a/gi).length; //match() মেথডটি ব্যবহার করে স্ট্রিংয়ের সব 'a' এবং 'A' খুঁজে বের করা যায়। /a/gi এখানে g ফ্ল্যাগটি ব্যবহার করা হয়েছে পুরো স্ট্রিংটি খুঁজে বের করতে (global), এবং i ফ্ল্যাগটি ব্যবহার করা হয়েছে ছোট এবং বড় হাতের অক্ষরের পার্থক্য না করতে (case-insensitive)।
// console.log(count);


// Check whether a string contains all the vowels a, e, i, o, u


let str = "my name is tanvir Ahammad";
let vowels = 'aeiouAeiou';
for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        console.log(str[i]);
        
    }
}
