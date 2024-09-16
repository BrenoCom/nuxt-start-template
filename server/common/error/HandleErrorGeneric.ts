import { H3ErrorType } from "@/server/common/error/types/H3ErrorType";
import compareTypes from "@/server/common/types/CompareTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function handdleErrorGeneric(error: any): H3ErrorType {
  if (typeof error === "string") {
    return createError({
      statusCode: 400,
      message: error,
      data: error,
    });
  }

  const expected = createError({
    statusCode: 401,
    message: "Perfil operacional pode apenas ",
    data: "Page should be an integer",
  });

  /* type H3ErrorType = ReturnType<typeof createError<string>>;
  type tes = InstanceType<typeof error>; */

  try {
    if (!compareTypes(expected, error)) {
      console.error("Error: \n", error);

      return createError({
        statusCode: 500,
        message: "Um erro inesperado ocorreu, tente novamente mais tarde",
        data: "Um erro inesperado ocorreu, tente novamente mais tarde",
      });
    }

    return error as H3ErrorType;
  } catch (err) {
    console.error("Error: \n", error);
    console.error("Internal Error: \n", err);

    return createError({
      statusCode: 500,
      message: "Um erro inesperado ocorreu, tente novamente mais tarde",
      data: "Um erro inesperado ocorreu, tente novamente mais tarde",
    });
  }
}
