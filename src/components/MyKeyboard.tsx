import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    let tempResult;
    switch (operation) {
      case "+":
        tempResult = parseFloat(secondNumber) + parseFloat(firstNumber);
        break;
      case "-":
        tempResult = parseFloat(secondNumber) - parseFloat(firstNumber);
        break;
      case "*":
        tempResult = parseFloat(secondNumber) * parseFloat(firstNumber);
        break;
      case "/":
        tempResult = parseFloat(secondNumber) / parseFloat(firstNumber);
        break;
      default:
        tempResult = 0;
        break;
    }
    clear();
    setResult(tempResult);
  };

  const firstNumberDisplay = () => {
    // Ensure `result` is treated as a primitive number
    const resultValue = Number(result); // Convert to primitive number if necessary

    if (result !== null) {
      return (
        <Text
          style={
            resultValue < 9999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {resultValue.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewButton}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="C" onPress={clear} isGray={true} isBlue={false} />
        <Button
          title="+/-"
          onPress={() => handleOperationPress("+/-")}
          isGray={true}
          isBlue={false}
        />
        <Button
          title="%"
          onPress={() => handleOperationPress("%")}
          isGray={true}
          isBlue={false}
        />
        <Button
          title="/"
          onPress={() => handleOperationPress("/")}
          isBlue={true}
          isGray={false}
        />
      </View>
      <View style={Styles.row}>
        <Button
          title="7"
          onPress={() => handleNumberPress("7")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="8"
          onPress={() => handleNumberPress("8")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="9"
          onPress={() => handleNumberPress("9")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="*"
          onPress={() => handleOperationPress("*")}
          isBlue={true}
          isGray={false}
        />
      </View>
      <View style={Styles.row}>
        <Button
          title="4"
          onPress={() => handleNumberPress("4")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="5"
          onPress={() => handleNumberPress("5")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="6"
          onPress={() => handleNumberPress("6")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="-"
          onPress={() => handleOperationPress("-")}
          isBlue={true}
          isGray={false}
        />
      </View>
      <View style={Styles.row}>
        <Button
          title="1"
          onPress={() => handleNumberPress("1")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="2"
          onPress={() => handleNumberPress("2")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="3"
          onPress={() => handleNumberPress("3")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="+"
          onPress={() => handleOperationPress("+")}
          isBlue={true}
          isGray={false}
        />
      </View>
      <View style={Styles.row}>
        <Button
          title="0"
          onPress={() => handleNumberPress("0")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="."
          onPress={() => handleNumberPress(".")}
          isGray={false}
          isBlue={false}
        />
        <Button
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
          isGray={true}
          isBlue={false}
        />
        <Button
          title="="
          onPress={() => getResult()}
          isBlue={true}
          isGray={false}
        />
      </View>
    </View>
  );
}
