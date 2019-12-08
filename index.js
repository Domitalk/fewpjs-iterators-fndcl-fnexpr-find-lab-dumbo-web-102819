

function superbowlWin(record) {
  let object1 = record.find( 
    function(o) {
      return o["result"] === "W"
    }
  );
  if (object1) {
    return object1["year"]
  }
}
