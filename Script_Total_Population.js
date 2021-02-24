var request = new XMLHttpRequest();

request.open('GET',"https://restcountries.eu/rest/v2/all",true);

request.send();

request.onload= function()
{
    var countryData = JSON.parse(this.response);
    console.log(countryData);
    var total_population = 0;
    for(var i in countryData)
    {
        console.log(countryData[i].name+" population is "+ countryData[i].population);
        total_population += +countryData[i].population;
    }
    console.log("ToTal_Poplation"+'  '+total_population);
};
