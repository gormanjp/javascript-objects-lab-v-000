var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  const newObj = Object.assign({}, object, {[key] : value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  const newObj = Object.assign({}, delete object.key);
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}