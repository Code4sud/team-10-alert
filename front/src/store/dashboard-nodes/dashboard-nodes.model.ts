import {type Edge, type Node,} from '@xyflow/react';

export interface CreateScenarioDto {
    nodes: Node[]
    edges: Edge[]
}

export interface ScenarioResponse {
    scenarioNodeChildId?: string; // Peut être undefined, car certains objets réponse sont vides
}

export interface ScenarioNode {
    id: string;
    description?: string; // Peut être optionnel si certaines réponses n'ont pas de description
    responses: ScenarioResponse[];
    scenarioId: string;
}

export interface ScenarioNodes {
    nodes: ScenarioNode[];
}

export interface GetScenarioLightDto {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    scenarioNodes: ScenarioNodes;
    initialScenarioNodeId: string;
}

export interface NodeData {
    title?: string;
    photo?: string;
    label?: string;
    description: string;
}

export interface Position {
    x: number;
    y: number;
}

export interface Measured {
    width: number;
    height: number;
}

export interface ScenarioNode {
    id: string;
    type: "scenario" | "question" | "response" | undefined;
    data: NodeData;
    position: Position;
    measured: Measured;
    selected?: boolean;
    dragging?: boolean;
}

export interface ScenarioEdge {
    id: string;
    source: string;
    target: string;
}

export interface ScenarioData {
    nodes: Node[];
    edges: Edge[];
}

export interface GetScenarioDto {
    scenarioId: string;
    data: ScenarioData;
}


