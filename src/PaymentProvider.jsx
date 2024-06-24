import React from "react";
import { Handle, useReactFlow } from "reactflow";

function PaymentProvider({ data: { name, code }, id }) {
  const { setNodes } = useReactFlow();

  const handelCLick = () => {
    setNodes((prevNodes)=> prevNodes.filter((node)=> node.id !== id))
  }
  return (
    <div className="h-auto w-auto bg-white border-2 border-gray-500 text-center p-2">
      <h1>{name}</h1>
      <h3>{code}</h3>
      <button onClick={handelCLick} className="bg-red-300  border-2 border-gray-500 ">X</button>
      <Handle type="target" position="left"/>
    </div>
  );
}

export default PaymentProvider;
