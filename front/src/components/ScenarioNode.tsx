import {useCallback} from 'react';
import {Handle, Position, useReactFlow} from '@xyflow/react';
import {Card, CardContent, CardHeader, CardTitle} from './ui/card';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

const handleStyle = {left: 10};
type ScenarioProps = {
    title: string,
    description: string
    photo: string
}

export function ScenarioNode({data, id, isConnectable}: { data: ScenarioProps, id: any, isConnectable: any }) {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, []);
    const {updateNodeData} = useReactFlow();
    return (
        <div>
            <Card className="bg-slate-800 text-white border-none">
                <CardHeader>
                    <CardTitle>Scenario</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Titre du scénario</Label>
                        <Input
                            id="title"
                            className="bg-slate-900 border-none nodrag"
                            placeholder="Titre du scénario"
                            onChange={(evt) => updateNodeData(id, {title: evt.target.value})}
                            value={data.title}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="photo">URL Photo</Label>
                        <Input
                            id="photo"
                            className="bg-slate-900 border-none nodrag"
                            placeholder="URL Photo"
                            onChange={(evt) => updateNodeData(id, {photo: evt.target.value})}
                            value={data.photo}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            className="bg-slate-900 border-none min-h-[100px] nodrag"
                            placeholder="Saisissez votre description ..."
                            onChange={(evt) => updateNodeData(id, {description: evt.target.value})}
                            value={data.description}
                        />
                    </div>
                </CardContent>
            </Card>
            <Handle type="source" position={Position.Bottom}/>
        </div>
    )
}
