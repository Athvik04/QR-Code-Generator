import inquirer from "inquirer";
import qr from 'qr-image';
import fs from 'fs';


inquirer
    .prompt([
        {
            "message": "Enter your URL: ",
            "name": "URL",
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr-img.png'));

        fs.writeFile("url.txt", url, (err) =>{
            if (err) throw err;
            console.log("file has been saved");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment.");
        } else {
            console.log("Something else went wrong.");
        }
    });