// import anime from "animejs/lib/anime.es.js";
// import anime from "animejs";
// const anime = require('anime.js');
$("form").submit(function (event) {
  event.preventDefault(); // Prevent the form from submitting

  var countryName = $("#country").val(); // Get the country name from the form input
  // var apiKey = "792db8e5ffdaf46c57ccd621e36a1bd6"; // Replace with your actual API key
  // Replace 'COUNTRY_NAME' with the name of the country you want to search for
  // var countryName = 'COUNTRY_NAME';

  $.ajax({
    url:
      "https://restcountries.com/v3.1/name/" + countryName + "?fullText=true",
    method: "GET",
    dataType: "json",
    success: function (data) {
      var countryData = data[0];
      console.log(data);
      // Extract the required data fields
      var name = countryData.name?.common || "";
      var topLevelDomain = countryData.tld?.[0] || "";
      var alpha2Code = countryData.cca2 || "";
      var alpha3Code = countryData.cca3 || "";
      var callingCodes = countryData.cca3 || "";
      var capital = countryData.capital?.[0] || "";
      var altSpellings = countryData.altSpellings?.join(", ") || "";
      var region = countryData.region || "";
      var subregion = countryData.subregion || "";
      var population = countryData.population?.toLocaleString() || "";
      var latlng = countryData.latlng?.join(", ") || "";
      var demonym = countryData.demonym || "";
      var area = countryData.area?.toLocaleString() || "";
      var timezone = countryData.timezones?.join(", ") || "";
      var borders = countryData.borders?.join(", ") || "";
      var maps = countryData.maps.googleMaps || ";";
      var nativeName = countryData.name.nativeName || "";
      var independent = countryData.independent || "";
      console.log(typeof nativeName);
      // console.log(countryData.name.nativeName?.[0])
      var numericCode =
        countryData.idd.root.concat(countryData.idd.suffixes[0]) || "";
      // console.log(numericCode)
      var continents = countryData.continents?.join(",") || "";
      var fifa = countryData.fifa || "";
      var flag = countryData.flag || "";
      var currencies =
        Object.values(countryData.currencies)
          .map((c) => c.name)
          .join(", ") || "";
      var languages =
        Object.values(countryData.languages)
          .map((l) => l.name)
          .join(", ") || "";
      var translations =
        countryData.translations && countryData.translations.fr
          ? Object.values(countryData.translations.fr).join(", ")
          : "N/A";

      var regionalBlocs = "";
      if (countryData.regionalBlocs && countryData.regionalBlocs.length > 0) {
        regionalBlocs = Object.values(countryData.regionalBlocs)
          .map((r) => r.name)
          .join(", ");
      }
      var cioc = countryData.cioc || "";
      // Append the HTML string to the results section
      $("#err").css("display", "none");
      $("#result").removeClass("hidden");
      $("#ff").removeClass("absolute");
      $("#result").css("display", "block");

      $("#names").html(name);
      $("#name").html(name);
      $("#nativeName").html(nativeName);
      $("#capital").html(capital);
      $("#subregion").html(subregion);
      $("#region").html(region);
      // $("#regionalBlocs").html(regionalBlocs);
      $("#continents").html(continents);
      $("#latlng").html(latlng);
      $("#area").html(area.concat(" ", "km²"));
      $("#borders").html(borders);
      $("#population").html(population);
      $("#currencies").html(currencies);
      $("#languages").html(languages);
      $("#flag").html(flag);
      $("#timezone").html(timezone);
      $("#altSpellings").html(altSpellings);
      $("#traduction").html(translations);
      $("#topLevelDomain").html(topLevelDomain);
      $("#fifa").html(fifa);
      $("#demonym").html(demonym);
      $("#alpha2Code").html(alpha2Code);
      $("#alpha3Codes").html(alpha3Code);
      $("#callingCodes").html(callingCodes);
      $("#numericCodes").html(numericCode);
      $("#cioc").html(cioc);
      $("#maps").html(maps);
      $("#independent").html(independent);
      // $("#nativeName").html();
      // $("#nativeName").html();
      // $(".boite").html(spann);
    },
    error: function () {
      // Handle error cases
      $("#names").html(countryName);
      $("#err").removeClass("hidden");
      $("#err").css("display", "block");
      $("#result").css("display", "none");
      // $("#country-info").html();
    },
  });
});
// document.addEventListener("DOMContentLoaded", () => {
  // const box = document.getElementById("#box");
  // console.log('ok');
  // const btn = document.getElementById("btn");
  // btn.addEventListener("click", () => {
    // alert('btn click');
    // console.log('btn');
  // });
// });
