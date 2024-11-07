import {useCallback} from 'react';
import {Handle, Position, useReactFlow} from '@xyflow/react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {RadioGroup, RadioGroupItem} from './ui/radio-group';

const handleStyle = {left: 10};

export function ResponseNode({data, id, isConnectable}: { data: any, id: any, isConnectable: any }) {
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
                    <CardTitle>Choix 1</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        className="bg-slate-900 border-none"
                        placeholder="Saisissez votre texte"
                        onChange={(evt) => updateNodeData(id, {text: evt.target.value})}
                        value={data.text}
                    />
                    <Input
                        className="bg-slate-900 border-none"
                        placeholder="À propos de ce choix"
                        onChange={(evt) => updateNodeData(id, {text: evt.target.value})}
                        value={data.text}
                    />
                    <div className="space-y-2">
                        <Label>Note</Label>
                        <RadioGroup defaultValue="label1" className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="label1" id="label1" className="border-white"/>
                                <Label htmlFor="label1">Label 1</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="label2" id="label2" className="border-white"/>
                                <Label htmlFor="label2">Label 2</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="label3" id="label3" className="border-white"/>
                                <Label htmlFor="label3">Label 3</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </CardContent>
            </Card>

            <Handle type="source" position={Position.Right}/>
        </div>
    )
}
