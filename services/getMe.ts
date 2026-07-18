import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStroe = await cookies();

  const accessToken = cookieStroe.get("accessToken")?.value;

  console.log(accessToken, "ddd adcctelkje;klj");

  if (!accessToken) {
    // throw new Error("please login first");

    return {
      success: false,
      message: "user not logged in",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();

  console.log(result, "the me result");

  return result;
};
