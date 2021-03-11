import app from './app';
import { connectDB } from './database';
// const PORT = CONFIG.PORT;

connectDB().then(() => app.listen(5000, () => console.log(`Server is listening on ${5000}`)));
