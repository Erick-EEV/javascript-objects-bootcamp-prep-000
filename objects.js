var meals = {};
var meals = new Object();
var meals = {breakfast: "oatmeal"};
var meals = new Object({breakfast: `oatmeal`});
var meals = {[firstmeal]: `oatmeal` };
meal;

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

const recipe = { eggs: 3};

destructivelyUpdateObjectWithKeyAndValue(recipe, `flour`, `3 cups`)