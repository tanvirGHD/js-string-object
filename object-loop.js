const mobile ={
    Brand: 'Samung',
    price: 20000,
    color: 'white',
    camera: '50mp'
}

// for in
// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
    
// }

const keys= Object.keys(mobile)
console.log(keys);
for(const key of keys){
    console.log(key,':',mobile[key]);
    
}
