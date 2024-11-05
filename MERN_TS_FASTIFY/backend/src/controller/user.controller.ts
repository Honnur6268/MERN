import { STATUS_CODES } from "@/constants/responseCodes";
import {
  CREATE_USER_SUCCESS_MESSAGE,
  ERROR_MSG_SOMETHING_WENT_WRONG,
  USERS_FETCHED_MSG,
} from "@/constants/responseMessage";
import { SUCCESS } from "@/constants/stringConstants";
import { UserDocumnet } from "@/interfaces/userInterfaces";
import { createUser, getUserById } from "@/service/userService";
import { errorLogger } from "@/utils/loggerHelper";
import { createErrorResponse, createSuccessResponse } from "@/utils/responses";
import { FastifyReply, FastifyRequest } from "fastify";
import gradient from "gradient-string";

export async function createUserServiceHandler(
  req: FastifyRequest<{
    // Body: {
    //   userData: UserDocumnet;
    // };
  }>,
  reply: FastifyReply
): Promise<{
  timeStamp: string;
  statusCode: string;
  status: string;
  message: string;
  success: string;
  data: any;
}> {
  try {
    const userData = req.body as UserDocumnet;

    const userResponse = await createUser(userData);
    if (userResponse.status == SUCCESS) {
      return reply.send(
        createSuccessResponse(
          STATUS_CODES.created,
          CREATE_USER_SUCCESS_MESSAGE,
          userResponse.user
        )
      );
    } else {
      return reply.send(
        createErrorResponse(STATUS_CODES.alreadyReported, userResponse.msg)
      );
    }
  } catch (error: any) {
    errorLogger("createUserHandler", error);
    return reply.send(
      createErrorResponse(
        STATUS_CODES.internalServerError,
        ERROR_MSG_SOMETHING_WENT_WRONG
      )
    );
  }
};

export async function getAllUserServiceHandler(
    req: FastifyRequest<{
        Headers: {
            userId: string;
        };
    }>,
    reply: FastifyReply,
) {
    try {
        const userId = req.headers.userid;

        const userResponse = await getUserById()

        if(userResponse.status == SUCCESS){
            return reply.send(
                createSuccessResponse(
                    STATUS_CODES.ok,
                    USERS_FETCHED_MSG,
                    userResponse.data
                )
            )
        }
        else {
            return reply.send(createErrorResponse(STATUS_CODES.notFound, userResponse.msg));
          }
    } catch (error: any) {
        errorLogger("getAllUsersHandler", error);
        return createErrorResponse(STATUS_CODES.internalServerError, ERROR_MSG_SOMETHING_WENT_WRONG);
    }
    
}
