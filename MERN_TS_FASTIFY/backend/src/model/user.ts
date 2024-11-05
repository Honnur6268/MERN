import { UserDocumnet } from "@/interfaces/userInterfaces";
import { model, Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  userId: {
    type: String,
    allowNull: false,
    unique: true,
    default: function generateId() {
      return Date.now();
    },
  },
  firstName: {
    type: String,
    allowNull: false,
    required: true,
  },
  lastName: {
    type: String,
    allowNull: false,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    allowNull: false,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const userModel = model<UserDocumnet>("User", UserSchema);

export default userModel;