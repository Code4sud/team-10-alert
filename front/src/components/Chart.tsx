import {useCallback, useRef} from 'react';
import {
    addEdge,
    applyNodeChanges,
    Background,
    Controls,
    ReactFlow,
    useEdgesState,
    useNodesState,
    useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {ResponseNode} from "@/components/ResponseNode";
import {QuestionNode} from "@/components/QuestionNode";
import {ScenarioNode} from "@/components/ScenarioNode";
import {Button} from "@/components/ui/button";

const initialNodes = [
    {
        id: 'init',
        type: 'scenario',
        data: {
            title: 'Scneario n° 1 : ile de l enfer ',
            photo: "url",
            description: 'une description denfer',
        },
        position: {x: 0, y: 50},
    },
    {
        id: 'a',
        type: 'question',
        data: {
            label: 'Titre de la question',
            description: 'Description de la question',
        },
        position: {x: 0, y: 50},
    },
    {
        id: '1',
        type: 'response',
        data: {
            label: 'Response n° 1',
        },
        position: {x: 50, y: 50},
    },
    {
        id: '2',
        type: 'response',
        data: {
            label: 'Response n° 2',
        },
        position: {x: 50, y: 50},
    },
    {
        id: '3',
        type: 'response',
        data: {
            label: 'Response n° 3',
        },
        position: {x: 50, y: 50},
    },
];

const nodeTypes = {scenario: ScenarioNode, question: QuestionNode, response: ResponseNode};

let id = 1;
const getId = () => `${id++}`;
const nodeOrigin = [0.5, 0];

const Chart = () => {
    const reactFlowWrapper = useRef(null);

    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState([]);
    const {screenToFlowPosition} = useReactFlow();


    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => {
            console.log("Here ", changes)
            console.log(nds)
            return applyNodeChanges(changes, nds)
        }),
        [],
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((edges) => {
            console.log("onedgesChanges ", changes)
            console.log(edges)
        }),
        []
    )

    const onConnect = useCallback(
        (params) => setEdges((eds) => {
            console.log('onConnect ', params)
            console.log(eds)
            addEdge(params, eds)
        }),
        [],
    );

    const onConnectEnd = useCallback(
        (event, connectionState) => {
            // when a connection is dropped on the pane it's not valid
            if (!connectionState.isValid) {
                // we need to remove the wrapper bounds, in order to get the correct position
                const id = getId();
                const {clientX, clientY} =
                    'changedTouches' in event ? event.changedTouches[0] : event;
                const newNode = {
                    id,
                    position: screenToFlowPosition({
                        x: clientX,
                        y: clientY,
                    }),
                    data: {label: `Node ${id}`},
                    origin: [0.5, 0.0],
                };

                setNodes((nds) => nds.concat(newNode));
                setEdges((eds) => {
                    }
                    //eds.concat({id, source: connectionState.fromNode.id, target: id, xp: -2}),
                );
            }
        },
        [screenToFlowPosition],
    );
    const test = () => {
        console.log(edges)
        console.log(nodes)
    }

    return (
        <>
            <div className="wrapper w-screen h-screen" ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onConnectEnd={onConnectEnd}
                    fitView
                    nodeTypes={nodeTypes}
                    fitViewOptions={{padding: 2}}
                    nodeOrigin={nodeOrigin}
                    snapToGrid
                >
                    <Background/>
                    <Controls/>
                </ReactFlow>

            </div>
            <Button onMouseDown={test}></Button>
        </>
    );
};

export default Chart;
