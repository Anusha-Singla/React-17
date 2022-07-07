import React, { useRef, useState } from "react";

const ReferenceDemo = () => {
    const [count, setcount] = useState(0)
    const newReference = useRef(0)
    const handleCount = () => {
        newReference.current = newReference.current + 1
        console.log("I am clicked", newReference.current, "times from useRef")
    }
    // console.log("I am rendered.")
    const handleButtonsCount = () => {
        setcount(count + 1);
        console.log("I am clicked", count, "times from useState")
    }
    console.log("I am rendered again")
    return (
        <>
            <div>
                <h2>Use of useRef</h2>
                <h5>We are finding the click on button using useRef</h5>
                <button onClick={handleCount}>Count(useRef)</button>
            </div>
            <div>
                <h5>*We can also find the count on button click using useState but everytime we click the button, the component will re-render*</h5>
                <h2>Same using useState</h2>
                <h5>We are finding the click on button using useState</h5>
                <p>{count}</p>
                <button onClick={handleButtonsCount}>Count(useState)</button>
            </div>
        </>
    )
}
export default ReferenceDemo;