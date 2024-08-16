function peopleAge (age) {

if(age <= 12){
    return("This person is a child")
}
    if(age <= 18){
        return("This person is a teenager ")
}   if(age > 18 && age <= 65){
        return("This person is an adult")
}   if(age > 65){
        return("This person is elderly")
    }

}


console.log(peopleAge (22))