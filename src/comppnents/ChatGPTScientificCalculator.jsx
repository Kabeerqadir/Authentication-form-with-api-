import React, { useState } from "react";
import '../App.css';
import { math } from "mathjs";
function Calculator() {
    const [input, setInput] = useState(""); // state to store the input value
    const [result, setResult] = useState(""); // state to store the calculated result

    // function to handle the button click
    const handleClick = (e) => {
        const value = e.target.value;
        switch (value) {
            case "=":
                try {
                    const evaluatedInput = math.evaluate(input);
                    setResult(evaluatedInput);
                } catch (error) {
                    setResult("Invalid Input");
                }
                break;
            case "C":
                setInput("");
                setResult("");
                break;
            case "CE":
                setInput((prev) => prev.slice(0, -1));
                setResult("");
                break;
            case "log":
                setResult(`log(${input}) = ${Math.log10(input)}`);
                break;
            case "ln":
                setResult(`ln(${input}) = ${Math.log(input)}`);
                break;
            case "sqrt":
                setResult(`sqrt(${input}) = ${Math.sqrt(input)}`);
                break;
            case "x^2":
                setResult(`(${input})^2 = ${Math.pow(input, 2)}`);
                break;
            case "x^3":
                setResult(`(${input})^3 = ${Math.pow(input, 3)}`);
                break;
            case "x^y":
                setInput((prev) => prev + "^");
                break;
            case "quad":
                setInput((prev) => prev + "x^2+bx+c=0");
                break;
            case "matrix":
                setInput((prev) => prev + " [[a11,a12],[a21,a22]] * [[b11,b12],[b21,b22]]");
                break;
            default:
                setInput((prev) => prev + value);
                setResult("");
                break;
        }
    };

    return (
        <div className="calculator container">
            <div className="display">
                <input type="text" value={input} readOnly />
                <div className="result">{result}</div>
            </div>
            <div className="keypad">
                <button onClick={handleClick} value="C">
                    C
                </button>
                <button onClick={handleClick} value="CE">
                    CE
                </button>
                <button onClick={handleClick} value="/">
                    ÷
                </button>
                <button onClick={handleClick} value="*">
                    x
                </button>
                <button onClick={handleClick} value="7">
                    7
                </button>
                <button onClick={handleClick} value="8">
                    8
                </button>
                <button onClick={handleClick} value="9">
                    9
                </button>
                <button onClick={handleClick} value="-">
                    -
                </button>
                <button onClick={handleClick} value="4">
                    4
                </button>
                <button onClick={handleClick} value="5">
                    5
                </button>
                <button onClick={handleClick} value="6">
                    6
                </button>
                <button onClick={handleClick} value="+">
                    +
                </button>
                <button onClick={handleClick} value="1">
                    1
                </button>
                <button onClick={handleClick} value="2">
                    2
                </button>
                <button onClick={handleClick} value="3">
                    3
                </button>
                <button onClick={handleClick} value="0">
                    0
                </button>
                <button onClick={handleClick} value=".">
                    .
                </button>
                <button onClick={handleClick} value="=">
                    =
                </button>
            </div>
        </div>
    );
}

export default Calculator;
