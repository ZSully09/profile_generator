const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Q1
rl.question("What's your name? Nicknames are also acceptable? ", answer => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  // Q2
  rl.question("What's an activity you like doing? ", answer => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    // Q3
    rl.question("What do you listen to while doing that? ", answer => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

      // Q4
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        answer => {
          console.log(`Thank you for your valuable feedback: ${answer}`);

          // Q5
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            answer => {
              console.log(`Thank you for your valuable feedback: ${answer}`);

              // Q6
              rl.question(
                "Which sport is your absolute favourite? ",
                answer => {
                  console.log(
                    `Thank you for your valuable feedback: ${answer}`
                  );

                  // Q7
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at ",
                    answer => {
                      console.log(
                        `Thank you for your valuable feedback: ${answer}`
                      );

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
