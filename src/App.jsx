import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import {Initialnodes, Initaledges} from "./Workflow"
import Paymentinit from "./Paymentinit";
import Paymentcountry from "./Paymentcountry";
import PaymentProvider from "./PaymentProvider";

const nodeTypes = {
 'paymentinit': Paymentinit,
 'paymentcountry': Paymentcountry,
 'paymentprovider': PaymentProvider
}

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(Initialnodes);
  const [edges, setEdges, onEdgesChange] = useNodesState(Initaledges);

  // const onConnect = useCallback((connection)=>{
  //   const edges = {...connection, animated: true, id: `${edges.length } + 1`};
  //   setEdges((eds) => addEdge(edges, eds));
  // }, [])
  const onConnect = useCallback((params) => {
    const edges = { ...params, animated: true, };
    setEdges((preveds) => addEdge(edges, preveds))
    , [setEdges]});

  return (
    <div className="w-[100vw] h-[100vh]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default App;
