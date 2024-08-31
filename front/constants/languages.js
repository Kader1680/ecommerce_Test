export let PageDirection;
(function (PageDirection) {
  PageDirection["RTL"] = "rtl";
  PageDirection["LTR"] = "ltr";
})(PageDirection || (PageDirection = {}));

export const defaultLanguage = "en";
export const supportedLanguagesMap = {
  ar: { dropdownValue: "عربي", countryName: "Arab" },
  en: { dropdownValue: "English", countryName: "England" },
};
export const supportedLanguages = Object.keys(supportedLanguagesMap);

export function humanReadableLanguage(key = defaultLanguage) {
  return supportedLanguagesMap[key].dropdownValue;
}

export function getCountryName(key = defaultLanguage) {
  return supportedLanguagesMap[key]?.countryName;
}
