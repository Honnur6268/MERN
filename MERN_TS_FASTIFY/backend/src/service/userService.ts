import { USER_ALREADY_EXIST_MESSAGE } from "@/constants/responseMessage";
import { ERROR, FAILURE, SUCCESS } from "@/constants/stringConstants";
import { UserDocumnet } from "@/interfaces/userInterfaces";
import userModel from "@/model/user";

export async function createUser(userData: UserDocumnet): Promise<{
  user: UserDocumnet | string;
  status: string;
  msg: string;
}> {
  let user;

  console.log(userData, "create user.....");

  try {
    const existingUser = await userModel.findOne({ email: userData.email });
    if (existingUser) {
      return {
        user: "",
        status: ERROR,
        msg: USER_ALREADY_EXIST_MESSAGE,
      };
    }

    user = await userModel.create(userData);

    return {
      user: user,
      status: SUCCESS,
      msg: "User Created successfully!",
    };
  } catch (error: any) {
    return { user: "", status: ERROR, msg: error.toString() };
  }
};

export const getUserById = async () : 
    Promise<{
        data: UserDocumnet[] | string;
        status: string,
        msg: string
    }> => {
        try {
            const users = await userModel.find({});

            if(users != null){
                return{
                    data: users,
                    status: SUCCESS,
                    msg: "Users Fetched Successfully!"
                };
            }
            else{
                return { data: "", status: FAILURE, msg: "No Users Found!" };
            }
        } catch (error: any) {
            return { data: "", status: ERROR, msg: error.toString() };
        }
    }