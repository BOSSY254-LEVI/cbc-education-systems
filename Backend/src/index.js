require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'https://cbc-education-systems.onrender.com';

app.listen(PORT, () => {
  console.log(`🚀 CBE AI Backend running on port ${PORT}`);
});
