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
    const url =
      SEARCHURL +
      searchType +
      "apiKey=" +
      APIKEY +
      "&" +
      queryStr +
      NUMBER +
      DETAILS;
    return url;
  }
  // search through advanced search
  // search for steps for particular recipe id
  // search for taste
};

export default GetDataUrl;
