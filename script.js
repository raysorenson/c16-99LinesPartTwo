document.addEventListener("DOMContentLoaded", function () {
  let friends = ["Jimmy", "Jane", "Joel", "Joan", "Jared"]; //array

  let button = document.getElementById("sing"); //variable named for button

  let div1 = document.createElement("div"); //div for 1 of 5 friends created
  div1.className = "friend"; //class name assigned to div
  document.body.append(div1); //div added to html
  let header1 = document.createElement("h3"); //header created
  header1.innerText = "Jimmy"; //header text inserted
  div1.append(header1); //header added to div

  let div2 = document.createElement("div");
  div2.className = "friend";
  document.body.append(div2);
  let header2 = document.createElement("h3");
  header2.innerText = "Jane";
  div2.append(header2);

  let div3 = document.createElement("div");
  div3.className = "friend";
  document.body.append(div3);
  let header3 = document.createElement("h3");
  header3.innerText = "Joel";
  div3.append(header3);

  let div4 = document.createElement("div");
  div4.className = "friend";
  document.body.append(div4);
  let header4 = document.createElement("h3");
  header4.innerText = "Joan";
  div4.append(header4);

  let div5 = document.createElement("div");
  div5.className = "friend";
  document.body.append(div5);
  let header5 = document.createElement("h3");
  header5.innerText = "Jared";
  div5.append(header5);

  button.addEventListener("click", function () {
    //event listener for button

    for (i = 0; i < friends.length; i++) {
      //for loop 4 countup

      for (x = 99; x > 0; x--) {
        //nested for loop 99 countdown
        let paragraph = document.createElement("p");
        let adder = document.getElementsByClassName("friend");

        if (x > 2) {
          paragraph.innerText = //text to be added 98 times
            x +
            " lines of code in the file," +
            x +
            " lines of code; " +
            friends[i] + 
            " strikes one out, clears it all out, " +
            (x - 1) +
            " lines of code in the file";
          //^^index number of inner for loop iteration concatenated with a string and so on. The current index of the outer loop selects the friend to add.
          adder[i].append(paragraph);
        } else if (x === 2) {
          //exception for the inner loop count of 2 for to better grammar.
          paragraph.innerText =
            "2 lines of code in the file, 2 lines of code; " +
            friends[i] +
            " strikes one out, clears it all out, 1 more line of code in the file";
          adder[i].append(paragraph);
        } else {
          //exception for the inner loop count of 1 for to better grammar.
          paragraph.innerText =
            "1 line of code in the file, 1 line of code; " +
            friends[i] +
            " strikes it out, clears it all out, no more lines of code in the file";
          adder[i].append(paragraph);
        }
      }
    }
  });
});
