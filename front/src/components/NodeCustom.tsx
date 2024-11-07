import {Handle, Position} from "@xyflow/react";

export interface NodeCustomProps {
    data: any;
    openModal: (id: string) => void;
}

export const NodeCustom = ({data, openModal}: NodeCustomProps ) => {
    return (
        <div className="bg-white p-8">
          <Handle
            type="target"
            position={Position.Top}
            isConnectable={true}
          />
          <div className='text-center'>{data.label}</div>
          <Handle
            type="source"
            position={Position.Bottom}
            id="a"
            isConnectable={false}
          />
          <Handle type="source" position={Position.Bottom} id="b" style={{ left: 0}} />
          <Handle type="source" position={Position.Bottom} id="c" style={{ right: 0}} />
        </div>
    );
}

export default NodeCustom;
