const loginUrl = "https://6294d314a7203b3ed07200b9.mockapi.io/login?";

export const loginApi = async ({ email, password }) => {
  try {
    console.log("[loginApi]", { email, password });

    const response = await fetch(loginUrl, {
      method: "POST",
      body: { email, password }
    });
    console.log({ response });

    const result = await response.json();
    console.log({ result });

    return result;
  } catch (error) {
    console.log({ error });

    throw error;
  }
};
