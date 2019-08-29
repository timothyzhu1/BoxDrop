//takes in the inputs and assigns them to be used in mapPage.html
function initialize_map(){
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  window.location.replace('mapPage.html?from=' + from + '&to=' + to);
  return false;
}


function initialize_map2(){
console.log('hi');
  window.location.replace('routeMap.html?from=' + query.get('from') + '&to=' + query.get('to'));
  return false;

}
