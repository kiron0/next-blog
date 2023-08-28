import mongoose from "mongoose";
import colors from "colors";

export function connect() {
          mongoose
                    .connect(process.env.MONGO_URL!, {
                              tls: true,
                              ssl: true,
                    })
                    .then(() => console.log(colors.green("Hey Buddy! DB is connected.")))
                    .catch((err) => console.log(colors.red(err)));
}