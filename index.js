import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"; //inutile de l'installer c'est un package qui existe par default dans express
import { fileURLToPath } from "url"; //inutile de l'installer c'est un package qui existe par default dans express
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(cors("*")); //cors permet a deux serveurs de communiquer entre eux
app.use(express.static("public")); // cette commande signifie qu'on est entrain de dire a express d'utiliser les fichiers qui sont dans le dossier public NB: on autorise simplement a express d'utiliser ces fichiers cette commande ne permet pas a express d'afficher le contenu de ces fichiers
//tester le serveur
// la commande app.get n'est pas indispensable on peut ne pas l'utiliser
app.get("/Home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html"); //pour envoyer le file index.html a l'app express
});
app.get("/Services", (req, res) => {
  res.sendFile(__dirname + "/public/Services.html"); //pour envoyer le file index.html a l'app express
});
app.get("/Contact", (req, res) => {
  res.sendFile(__dirname + "/public/Contact.html"); //pour envoyer le file index.html a l'app express
});

//La commande app.listen est primordiale elle nous permet de run notre serveur
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
