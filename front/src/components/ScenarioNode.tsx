import {useCallback} from 'react';
import {Handle, Position, useReactFlow} from '@xyflow/react';
import {Card, CardContent, CardHeader, CardTitle} from './ui/card';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const handleStyle = {left: 10};

export function ScenarioNode({data, id, isConnectable}: { data: any, id: any, isConnectable: any }) {
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
                    <CardTitle>Scénario</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Titre du scénario</Label>
                        <Input
                            id="title"
                            className="bg-slate-900 border-none"
                            placeholder="Titre du scénario"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="photo">URL Photo</Label>
                        <Input
                            id="photo"
                            className="bg-slate-900 border-none"
                            placeholder="URL Photo"
                            onChange={(evt) => updateNodeData(id, {text: evt.target.value})}
                            value={data.text}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            className="bg-slate-900 border-none min-h-[100px]"
                            placeholder="Saisissez votre description ..."
                        />
                    </div>
                </CardContent>
            </Card>
            <Handle type="source" position={Position.Right}/>
        </div>
    )
}
