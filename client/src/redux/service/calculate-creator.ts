import { BASE_URL } from "../Base_url";
import {
  errorFetching,
  setPreviousNumbers,
  startFetching,
  successFetching,
} from "../slices/calculator-slice";
import { AppDispatch } from "../store";
interface calculapeProps {
  method: string;
  firstNumber: string;
  secondNumber: string;
}
interface singlePercent {
  firstNumber: string;
}
interface getPercentInterface {
  firstNumber: string;
  method: string;
  secondNumber: string;
}
export const getCalculate =
  ({ firstNumber, secondNumber, method }: calculapeProps) =>
  async (dispath: AppDispatch) => {
    let url = "";
    try {
      dispath(startFetching());
      switch (method) {
        case "+":
          url = BASE_URL + "/calc/add";
          break;
        case "-":
          url = BASE_URL + "/calc/subtract";
          break;
        case "*":
          url = BASE_URL + "/calc/multiply";
          break;
        case "/":
          url = BASE_URL + "/calc/divide";
          break;

        default:
          break;
      }
      const result = await fetch(url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          firstNumber: Number(firstNumber),
          secondNumber: Number(secondNumber),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) throw new Error("Помилка");
      const json = await result.json();
      dispath(successFetching(String(json)));
      dispath(
        setPreviousNumbers(`${firstNumber}${method}${secondNumber}=${json}`)
      );
    } catch (error) {
      dispath(errorFetching("помилка"));
    }
  };
export const getSinglePercent =
  ({ firstNumber }: singlePercent) =>
  async (dispath: AppDispatch) => {
    try {
      dispath(startFetching());

      const result = await fetch(`${BASE_URL}/calc/single-percent`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          firstNumber: Number(firstNumber),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) throw new Error("Помилка");
      const json = await result.json();
      dispath(successFetching(String(json)));
      dispath(setPreviousNumbers(`${firstNumber}%=${json}`));
    } catch (error) {
      dispath(errorFetching("помилка"));
    }
  };
export const getPercent =
  ({ firstNumber, method, secondNumber }: getPercentInterface) =>
  async (dispath: AppDispatch) => {
    try {
      dispath(startFetching());

      const result = await fetch(`${BASE_URL}/calc/percent`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          firstNumber: Number(firstNumber),
          method,
          secondNumber: Number(secondNumber),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!result.ok) throw new Error("Помилка");
      const json = await result.json();
      dispath(
        setPreviousNumbers(`${firstNumber}${method}${secondNumber}%=${json}`)
      );
      dispath(successFetching(String(json)));
    } catch (error) {
      dispath(errorFetching("помилка"));
    }
  };
