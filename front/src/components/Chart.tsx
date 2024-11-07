import {useCallback} from 'react';
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
import {v4 as uuidv4} from 'uuid';
import {useDebounce} from "@/hooks/use-debounce";

const getNewId = () => uuidv4()
const initialNodes = [
    {
        id: 'init',
        type: 'scenario',
        data: {
            title: 'Scneario n° 1 : ile de l enfer ',
            photo: "url",
            description: 'une description denfer',
        },
        position: {x: -16, y: -210},
    },
    {
        id: 'a',
        type: 'question',
        data: {
            label: 'Titre de la question',
            description: 'Description de la question',
        },
        position: {x: -16, y: 240},
    },
    {
        id: '1',
        type: 'response',
        data: {
            label: 'Response n° 1',
        },
        position: {x: 279, y: 480},
    },
    {
        id: '2',
        type: 'response',
        data: {
            label: 'Response n° 2',
        },
        position: {x: -21, y: 480},
    },
    {
        id: '3',
        type: 'response',
        data: {
            label: 'Response n° 3',
        },
        position: {x: -336, y: 480},
    },
];
const initialEdges = [
    {id: 'einit-a', source: 'init', target: 'a'},
    {id: 'ea-1', source: 'a', target: '1'},
    {id: 'ea-2', source: 'a', target: '2'},
    {id: 'ea-3', source: 'a', target: '3'},
]

const nodeTypes = {scenario: ScenarioNode, question: QuestionNode, response: ResponseNode};

const nodeOrigin = [0.5, 0];

const Chart = () => {

    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const {screenToFlowPosition} = useReactFlow();

    const handleSaveScenario = (value: any) => {
        /**
         * TODO :
         *  handle save data in server
         *
         **/
        console.log("Saving to database -- ", nodes)
        console.log("Saving to database -- ", edges)
    }
    const debouncedSave = useDebounce(handleSaveScenario, 1000);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => {
            console.log("Blabla ", edges)
            console.log("Blabla ", nodes)
            debouncedSave()
            return applyNodeChanges(changes, nds)
        }),
        [setNodes],
    );


    const onConnect = useCallback(
        (params) => setEdges((eds) => {
            console.log('onConnect ', params)
            console.log(eds)
            return addEdge(params, eds)
        }),
        [setEdges],
    );

    const onConnectEnd = useCallback(
        (event, connectionState) => {
            if (!connectionState.isValid) {
                const id = getNewId();
                const {clientX, clientY} =
                    'changedTouches' in event ? event.changedTouches[0] : event;
                console.log("in onConectEnd ", event)
                console.log("in onConectEnd ", connectionState)
                console.log("in onConectEnd ", id)
                const nodeTypeFrom = connectionState.fromNode.type
                let newNode = {
                    id,
                    position: screenToFlowPosition({
                        x: clientX,
                        y: clientY,
                    }),
                    data: {},
                    origin: [0.5, 0.0],
                    type: ""
                }

                if (nodeTypeFrom === "response") {
                    newNode.type = "question"
                }
                if (nodeTypeFrom === "question") {
                    newNode.type = "response"
                }
                if (nodeTypeFrom === "scenario") {
                    newNode.type = "question"
                }


                setNodes((nds) => nds.concat(newNode));
                setEdges((eds) =>
                    eds.concat({id, source: connectionState.fromNode.id, target: id, xp: -2})
                )
            }
        },
        [screenToFlowPosition],
    );


    return (
        <>
            <div className="wrapper w-screen h-screen">
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
        </>
    );
};

export default Chart;
