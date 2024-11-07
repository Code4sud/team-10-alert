export class CreateOrUpdateScenarioDto {
  nodes: Node[];
  edges: Edge[];
}

export class Node {
  id: string;
  type: string;
  data: DataScenarioNode | DataQuestionNode | DataResponseNode;
  position: { x: number; y: number };
  measured: { width: number; height: number };
}

export class Edge {
  id: string;
  source: string;
  target: string;
}

type DataScenarioNode = {
  title: string;
  photo: string;
  description: string;
};

type DataQuestionNode = {
  description: string;
};

type DataResponseNode = {
  description: string;
  effect: string;
  score: string;
};

const ex = {
  nodes: [
    {
      id: 'a',
      type: 'question',
      data: { description: 'Description de la question' },
      position: { x: -16, y: 240 },
      measured: { width: 238, height: 188 },
    },
    {
      id: '1',
      type: 'response',
      data: { label: 'Response n° 1' },
      position: { x: 39, y: 735 },
      measured: { width: 228, height: 304 },
      selected: true,
      dragging: false,
    },
    {
      id: '2',
      type: 'response',
      data: { label: 'Response n° 2' },
      position: { x: -21, y: 480 },
      measured: { width: 228, height: 304 },
    },
    {
      id: '3',
      type: 'response',
      data: { label: 'Response n° 3' },
      position: { x: -336, y: 480 },
      measured: { width: 228, height: 304 },
    },
  ],
  edges: [
    { id: 'einit-a', source: 'init', target: 'a' },
    {
      id: 'ea-1',
      source: 'a',
      target: '1',
    },
    { id: 'ea-2', source: 'a', target: '2' },
    { id: 'ea-3', source: 'a', target: '3' },
  ],
};

//
// {
//     nodes: [
//         {
//             id: 'init',
//             type: 'scenario',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: 'a',
//             type: 'question',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: '1',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object],
//             selected: true,
//             dragging: false
//         },
//         {
//             id: '2',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: '3',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         }
//     ],
//         edges: [
//     { id: 'einit-a', source: 'init', target: 'a' },
//     { id: 'ea-1', source: 'a', target: '1' },
//     { id: 'ea-2', source: 'a', target: '2' },
//     { id: 'ea-3', source: 'a', target: '3' }
// ]
// }
// {
//     nodes: [
//         {
//             id: 'init',
//             type: 'scenario',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: 'a',
//             type: 'question',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: '1',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object],
//             selected: true,
//             dragging: false
//         },
//         {
//             id: '2',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: '3',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         }
//     ],
//         edges: [
//     { id: 'einit-a', source: 'init', target: 'a' },
//     { id: 'ea-1', source: 'a', target: '1' },
//     { id: 'ea-2', source: 'a', target: '2' },
//     { id: 'ea-3', source: 'a', target: '3' }
// ]
// }
// {
//     nodes: [
//         {
//             id: 'init',
//             type: 'scenario',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: 'a',
//             type: 'question',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: '1',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object],
//             selected: true,
//             dragging: false
//         },
//         {
//             id: '2',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         },
//         {
//             id: '3',
//             type: 'response',
//             data: [Object],
//             position: [Object],
//             measured: [Object]
//         }
//     ],
//         edges: [
//     { id: 'einit-a', source: 'init', target: 'a' },
//     { id: 'ea-1', source: 'a', target: '1' },
//     { id: 'ea-2', source: 'a', target: '2' },
//     { id: 'ea-3', source: 'a', target: '3' }
// ]
// }
