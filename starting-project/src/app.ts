let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Laurent";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An Error Occured!", 500);
