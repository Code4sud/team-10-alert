import {useCallback, useEffect} from 'react';
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
import {scenarioRequests} from "@/store/dashboard-nodes/dashboard-nodes.request";
import {useParams} from "react-router-dom";
import {type Edge, type Node,} from '@xyflow/react';

const getNewId = () => uuidv4()
const initialNodes = [
    {
        id: 'init',
        type: 'scenario',
        data: {
            title: 'Untitled',
        },
        position: {x: -16, y: -210},
    },
    {
        id: 'a',
        type: 'question',
        data: {},
        position: {x: -16, y: 240},
    },
    {
        id: '1',
        type: 'response',
        data: {},
        position: {x: 279, y: 480},
    },
    {
        id: '2',
        type: 'response',
        data: {},
        position: {x: -21, y: 480},
    },
    {
        id: '3',
        type: 'response',
        data: {},
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

const nodeOrigin: [number, number] = [0.5, 0];


const Chart = () => {

    const [nodes, setNodes] = useNodesState<Node>(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const reactFlowInstance = useReactFlow();
    const { id, isCreate } = useParams<{ id: string, isCreate: string }>()

    useEffect(() => {
        if(id && isCreate === "false") {
            scenarioRequests.getScenario(id).then((scenario) => {
                setNodes(scenario.data.nodes)
                setEdges(scenario.data.edges)
            })
        }
    }, []);


    const handleSaveScenario = async (value: any) => {
        return scenarioRequests.createOrUpdateScenario({
            nodes: reactFlowInstance.getNodes(),
            edges: reactFlowInstance.getEdges()
        }, id)
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
            const newEdge = {
                id: `${params.source}-${params.target}`,
                target: params.target,
                source: params.source
            }
            //reactFlowInstance.addEdges(newEdge)
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
                    position: reactFlowInstance.screenToFlowPosition({
                        x: clientX,
                        y: clientY,
                    }),
                    data: {},
                    origin: nodeOrigin,
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

                reactFlowInstance.addNodes(newNode)
                reactFlowInstance.addEdges(
                    {id: getNewId(), source: connectionState.fromNode.id, target: id}
                )

            }
        },
        [reactFlowInstance.screenToFlowPosition],
    );


    return (
            <div className="wrapper w-full h-full bg-[#203D4E] rounded-xl">
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
    );
};

export default Chart;
