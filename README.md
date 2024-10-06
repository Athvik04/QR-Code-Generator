# QR-Code-Generator
A simple Node.js project that generates a QR code for any provided URL via a command-line interface (CLI). The QR code is saved as a PNG image, and the URL is stored in a text file. This project uses inquirer for input prompts and qr-image to generate the QR code.

Features

- Prompts the user to input a URL.
- Generates a QR code image for the provided URL.
- Saves the URL in a text file.
- Handles errors related to file saving and input rendering.

Requirements

- Node.js (version 12 or higher)

Installation

Before running the project, make sure you have Node.js installed. You can check your Node.js version with the following command:

bash
node -v


If Node.js is not installed, download it from [here](https://nodejs.org/).

Next, you need to install the required npm packages:

1. Open your terminal or command prompt.
2. Run the following commands to install dependencies:

bash
npm install inquirer qr-image


How to Run

1. Clone or download this repository.
2. Navigate to the project directory in your terminal.
3. Run the following command:

bash
node index.js


You will be prompted to enter a URL. Once entered, the following will happen:

- A QR code for the URL will be generated and saved as `qr-img.png`.
- The provided URL will be saved in a text file named `url.txt`.
- Both the QR code and text file will be saved in the same directory as the script.

Code Explanation

Here’s a breakdown of what happens in the code:

- Inquirer Prompt: The script uses `inquirer` to prompt the user to enter a URL in the command line.
  
  javascript
  inquirer
      .prompt([
          {
              "message": "Enter your URL: ",
              "name": "URL",
          }
      ])
  

- QR Code Generation: After receiving the user input, the `qr-image` package is used to generate a QR code based on the provided URL. The QR code is saved as `qr-img.png` using `fs.createWriteStream()`.

  javascript
  const url = answers.URL;
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('qr-img.png'));
  

- Save URL: The provided URL is saved to a text file (`url.txt`) using `fs.writeFile()`.

  javascript
  fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("file has been saved");
  })
  

- Error Handling: If the prompt cannot be rendered in the terminal (due to environment issues), or if there is an error saving the file, the script handles the errors gracefully and displays a message to the user.

  javascript
  .catch((error) => {
      if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment.");
      } else {
          console.log("Something else went wrong.");
      }
  });
  

File Structure


- index.js        # Main script file
- qr-img.png      # Generated QR code image (created after running the script)
- url.txt         # File that contains the provided URL (created after running the script)


Thankyou for visiting !
