// sitemap-generator.js
require("babel-register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

import router from "./src/App"; // or wherever your routes are
import Sitemap from "react-router-sitemap";
import { resolve } from "path";

new Sitemap(router)
  .build("https://triplerrecycling.com/") // Replace with your domain
  .save(resolve(__dirname, "public", "sitemap.xml"));
