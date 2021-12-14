const GetDataUrl = (queryType, searches) => {
  const SEARCHURL = "https://api.spoonacular.com/recipes/";
  const APIKEY = "66f8a7f03d564fb9967240266bb00633";

  // 4 types of searches
  // search through input bar
  if (queryType === "name") {
    const searchType = "complexSearch?";
    const queryStr = "query=" + searches;
    const NUMBER = "&number=6";
    const DETAILS = "&addRecipeInformation=true";
    const SORT = "&sort=popularity";

    const url =
      SEARCHURL +
      searchType +
      "apiKey=" +
      APIKEY +
      "&" +
      queryStr +
      NUMBER +
      DETAILS +
      SORT;
    return url;
  }
  // search through advanced search

  if ((queryType = "advanced")) {
    const searchType = "complexSearch?";
    console.log("get chicken");

    // Advanced Searche - ingredients
    const ingredientsArr = searches.ingredients;
    console.log("get chicken");
    let ingredientsStr = "";
    ingredientsArr.forEach((ingredient, index) => {
      if (index !== 0) {
        ingredientsStr += `,+${ingredient}`;
        if (index === ingredient.length - 1) {
          ingredientsStr += "&";
        }
      } else ingredientsStr += `includeIngredients=${ingredient}`;
    });

    //for empty arr
    if (ingredientsArr.length === 0) {
      ingredientsStr = "";
    }

    // Advanced Searche - diet
    const dietsArr = searches.diet;
    let dietStr = "";

    for (let i = 0; i < dietsArr.length; i++) {
      if (dietsArr[i] === "diabetic friendly") {
        dietStr += "maxSugar=25&maxCarbs=50";
        if (i < dietsArr.length - 1) dietStr += "&";
      } else if (dietsArr[i] === "low cholesterol") {
        dietStr += "maxCholesterol=50";
        if (i < dietsArr.length - 1) dietStr += "&";
      } else if (dietsArr[i] === "low calories") {
        dietStr += "maxCalories=600";
        if (i < dietsArr.length - 1) dietStr += "&";
      } else if (dietsArr[i] === "vegetarian") {
        dietStr += "diet=vegetarian";
        if (i < dietsArr.length - 1) dietStr += "&";
      } else if (dietsArr[i] === "vegan") {
        dietStr += "diet=vegan";
        if (i < dietsArr.length - 1) dietStr += "&";
      }
    }

    // Advanced Searche - meal type
    let mealTypeStr = "type=" + searches.mealType.replace(" ", "+") + "&";
    if (searches.mealType === "") {
      mealTypeStr = "";
    }

    const NUMBER = "&number=6";
    const DETAILS = "&addRecipeInformation=true";
    const SORT = "&sort=popularity";

    const url =
      SEARCHURL +
      searchType +
      "apiKey=" +
      APIKEY +
      "&" +
      ingredientsStr +
      mealTypeStr +
      dietStr +
      NUMBER +
      DETAILS +
      SORT;
    return url;
  }

  // search for steps for particular recipe id
  // search for taste
  if (queryType === "taste") {
    const searchId = searches.id;
    const searchType = "tasteWidget.json?";
    const url = SEARCHURL + searchId + "/" + searchType + "apiKey=" + APIKEY;
    return url;
  }
};

export default GetDataUrl;
