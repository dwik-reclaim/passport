// ---- Main App from index
import { app } from "./index";

// default port to listen on
const port = 65535;

// start the Express server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});