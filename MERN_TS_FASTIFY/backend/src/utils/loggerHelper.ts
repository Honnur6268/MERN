import { server } from "../server";

export function errorLogger(msg: string, error: any) {
    server.log.info("CB_V2_CORE_SERVICE" + msg + " " + "❗❌❗❌❗" + " " + error);
  }