import "./db";
import "./models/Video";
import app from "./server";

const PORT = 7700;
const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening); //callback, 필수로 필요함
