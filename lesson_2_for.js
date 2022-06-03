

// for (let i = 0; i < 10; i++){
//     console.log(i , "= FOR")
// }

// for (let temperature = 0; temperature < 10; temperature++){
    
//     if (temperature < 3) {
//         console.log("temperature = ", temperature, "Holodno")
//     }   else if (temperature >= 3 && temperature < 7) {
//         console.log("temperature = ",  temperature, " = HOROSHO!!!")
//     }  else {
//         console.log("temperature = ",  temperature, " = Kapec!")
    
//         // console.log(temperature , " = FOR!")
//     }
// }

let names = ['Oksana',
             'Ksenia',
             'Pipiska',
             'Yliay',
             'Ignat']

// for (item_1 of names) { 

//   console.log(item_1)

// }   

for (item_1 of names){ 

    if (item_1 == 'Yliay'){
        break;
    }

  console.log(item_1)
} 
//break останавливает цикл на указанном значении
