import { useCallback, useRef } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow, Background, Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import NodeCustom from "@/components/NodeCustom";



const initialNodes = [
    {
        id: '0',
        type: 'nodeCustom',
        data: {
            label: 'Node',
            description: 'Node description',
            imageUrl: 'https://via.placeholder.com/150',
            choices: [
                { text: 'Choice 1', impactLife: -2, impactWisdom: 3, childNodeId: 4},
                { text: 'Choice 2', impactLife: 1, impactWisdom: -1, childNodeId: 5}
            ]
        },
        position: { x: 0, y: 50 },
    },
];

let id = 1;
const getId = () => `${id++}`;
const nodeOrigin = [0.5, 0];
const nodeTypes = { nodeCustom: NodeCustom};

const Chart = () => {
    const reactFlowWrapper = useRef(null);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const { screenToFlowPosition } = useReactFlow();
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    const onConnectEnd = useCallback(
        (event, connectionState) => {
            // when a connection is dropped on the pane it's not valid
            if (!connectionState.isValid) {
                // we need to remove the wrapper bounds, in order to get the correct position
                const id = getId();
                const { clientX, clientY } =
                    'changedTouches' in event ? event.changedTouches[0] : event;
                const newNode = {
                    id,
                    position: screenToFlowPosition({
                        x: clientX,
                        y: clientY,
                    }),
                    data: { label: `Node ${id}` },
                    origin: [0.5, 0.0],
                };

                setNodes((nds) => nds.concat(newNode));
                setEdges((eds) =>
                    eds.concat({ id, source: connectionState.fromNode.id, target: id, xp: -2 }),
                );
            }
        },
        [screenToFlowPosition],
    );

    return (
        <div className="wrapper w-screen h-screen" ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onConnectEnd={onConnectEnd}
                fitView
                fitViewOptions={{padding: 2}}
                nodeOrigin={nodeOrigin}
                nodeTypes={nodeTypes}
            >
                <Background/>
                <Controls/>
            </ReactFlow>
        </div>
    );
};

export default Chart;
