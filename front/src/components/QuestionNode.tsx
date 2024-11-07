import {useCallback} from 'react';
import {Handle, Position, useReactFlow} from '@xyflow/react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";

const handleStyle = {left: 10};

export function QuestionNode({data, id, isConnectable}: { data: any, id: any, isConnectable: any }) {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, []);
    const {updateNodeData} = useReactFlow();
    return (
        <div>
            <Handle
                type="target"
                position={Position.Left}
                isConnectable={isConnectable}
            />
            <Card className="bg-slate-800 text-white border-none">
                <CardHeader>
                    <CardTitle>Question</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea
                        className="bg-slate-900 border-none min-h-[100px]"
                        placeholder="Saisissez votre question ..."
                        onChange={(evt) => updateNodeData(id, {text: evt.target.value})}
                        value={data.text}
                    />
                </CardContent>
            </Card>
            <Handle type="source" position={Position.Right}/>
        </div>
    )
}
