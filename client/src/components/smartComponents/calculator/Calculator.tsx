import MethodElement from "../../dumbComponents/method/MethodElement";
import NumberElement from "../../dumbComponents/number/NumberElement";
const arryOfSymbols = [
  "C",
  "R",
  "%",
  "-/+",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "*",
  "0",
  ".",
  "=",
  "/",
];
const Calculator = () => {
  return (
    <>
      <div className="calculatorContainer">
        {arryOfSymbols.map((item, index) => {
          if (!isNaN(Number(item)))
            return <NumberElement key={index} value={item} />;

          if (item === ".") return <NumberElement value="." key={index} />;

          return <MethodElement key={index} currentMethod={item} />;
        })}
      </div>
    </>
  );
};

export default Calculator;
