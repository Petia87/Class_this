var pesho={
    name:"pesho",
    student:""
    
    
}
var petia={
    name:"petia",
    teacher:""
}
pesho.student=petia
petia.teacher=pesho

var nina={
    name:"nina"
}

pesho.student=nina
petia.colige=nina

nina.teacher=pesho
nina.colige=petia

console.log(pesho);
console.log(petia);
console.log(nina);


   