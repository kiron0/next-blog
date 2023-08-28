import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
          name: {
                    required: [true, 'Name is required'],
                    type: Schema.Types.String,
          },
          email: {
                    required: [true, 'Email is required'],
                    type: Schema.Types.String,
          },
          image: {
                    required: [true, 'Image is required'],
                    type: Schema.Types.String,
          },
},
          {
                    timestamps: true,
          }
);

const User = models.User || mongoose.model('User', userSchema);
export default User;