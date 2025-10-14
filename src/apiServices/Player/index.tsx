import * as request from "@/utils/request";

interface PlayerPayload extends Record<string, unknown> {
  email?: string;
  accountNumber?: string;
  phone?: string;
}

interface PlayerRegisterPayload extends Record<string, unknown> {
  email?: string;
  accountNumber?: string;
  phone?: string;
  nickName?: string;
  university?: string;
  studentCode?: string;
  avatar?: File;
}

export const registerOtp = async (obj: PlayerPayload) => {
  try {
    const res = await request.postMethod("players/send-otp", obj);

    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerPlayer = async (obj: PlayerRegisterPayload) => {
  try {
    const formData = new FormData();
    // append các field thông thường
    formData.append("email", obj.email || "");
    formData.append("accountNumber", obj.accountNumber || "");
    formData.append("phone", obj.phone || "");
    formData.append("nickName", obj.nickName || "");
    formData.append("university", obj.university || "");
    formData.append("studentCode", obj.studentCode || "");

    // append file (nếu có)
    if (obj.avatar) {
      formData.append("avatar", obj.avatar);
    }
    const res = await request.postMethod("players", formData);

    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
