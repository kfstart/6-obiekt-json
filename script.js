let jsonPracownicy = {
    "pracownicy": [
        { "firstName": "Krystian", "lastName": "Dziopa" }, 
        { "firstName": "Anna", "lastName": "Szapiel" },
        { "firstName": "Piotr", "lastName": "Żmuda" }
    ]
}

console.log(jsonPracownicy.pracownicy);

jsonPracownicy.pracownicy.forEach(function(dane, index) {
  console.log(dane.firstName[0])
  console.log(index, dane.firstName, dane.lastName);
}
);