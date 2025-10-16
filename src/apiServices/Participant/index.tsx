import * as request from "@/utils/request";

interface ParticipantPayload extends Record<string, unknown> {
  email?: string;
  accountNumber?: string;
  phone?: string;
}

interface ParticipantRegisterPayload extends Record<string, unknown> {
  email?: string;
  accountNumber?: string;
  phone?: string;
  nickName?: string;
  university?: string;
  studentCode?: string;
  avatar?: File;
}

export const registerOtp = async (obj: ParticipantPayload) => {
  try {
    const res = await request.postMethod("participants/send-otp", obj);

    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerParticipant = async (obj: ParticipantRegisterPayload) => {
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
    const res = await request.postMethod("participants", formData);

    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
