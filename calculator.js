window.onload = function() {

  var entries = [];
  var total = "";

  function addInput(button) {
        document.getElementById("display").innerHTML = button.value;
  document.getElementById("workingSum").innerHTML += button.value;
        //if do same line but with += button.value you show entire sum
          entries.push(button.value);
        }



  function clearAllEntries() {
    entries = [];
    document.getElementById("display").innerHTML = 0;
    document.getElementById("workingSum").innerHTML = '';

  }

  function clearLastEntry() {
    entries = entries.slice(0, entries.length-1);
    document.getElementById("display").innerHTML = entries.join("");
  }

  function getTotal() {
   total = eval(entries.join(""));
   document.getElementById("display").innerHTML = total;
    entries = [];
    //need to add step to clear entries before equals was clicked
    }
}
