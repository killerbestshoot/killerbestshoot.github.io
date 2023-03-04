$("form").submit(function (event) {
  event.preventDefault(); // Prevent the form from submitting
  const loader_container = $("#loader-container");
  loader_container.removeClass("hidden");
  $("#err").css("display", "none");
  $("#result").css("display", "none");
  setTimeout(() => {
    document.getElementById("loader-container").classList.add("hidden");
    var countryName = $("#country").val();
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
        // toggling containers
        $("#err").css("display", "none");
        $("#result").removeClass("hidden");
        $("#ff").removeClass("absolute");
        $("#result").css("display", "block");

        // Append the HTML string to the results section
        $("#names").html(name);
        $("#name").html(name);
        $("#nativeName").html(nativeName);
        $("#capital").html(capital);
        $("#subregion").html(subregion);
        $("#region").html(region);
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
      },
      error: function () {
        // Handle error cases and toggling containers
        $("#names").html(countryName);
        $("#err").removeClass("hidden");
        $("#err").css("display", "block");
        $("#result").css("display", "none");
      },
    });
  }, 3000);
});
