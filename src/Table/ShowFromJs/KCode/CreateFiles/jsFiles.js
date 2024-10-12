import fs from "fs";
import { StartFunc as GetTableNames } from "../GetTableNames.js";
const CommonHtmlFiles = ["Index", "Login", "register", "validation"];

const StartFunc = ({ inSrcPath, inSourceFolderName }) => {
    const root = `${inSrcPath}/${inSourceFolderName}/Js`;

    if (fs.existsSync(root)) {
        fs.rmSync(root, { recursive: true });
        fs.mkdirSync(root);
    };

    fs.readdirSync(`${inSrcPath}/${inSourceFolderName}/JsTemplate/pages`)
        .forEach(filename => {
            fs.cpSync(`${inSrcPath}/${inSourceFolderName}/JsTemplate/pages/${filename}`, `${root}/pages/${filename}`, { recursive: true });
        });
};

export { StartFunc };