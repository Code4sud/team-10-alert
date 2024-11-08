import {Handle, Position, useReactFlow} from '@xyflow/react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";

const handleStyle = {left: 10};

type ResponseProps = {
    description: string
    effect: string,
    score: string
    healthPointsImpact: number,
    wisePointsImpact: number,
}

export function ResponseNode({data, id, isConnectable}: { data: ResponseProps, id: any, isConnectable: any }) {
    const {updateNodeData} = useReactFlow();
    return (
        <div>
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={isConnectable}
            />
            <Card className="bg-[#007186] text-white border-none">
                <CardHeader>
                    <CardTitle>Choix 1</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        className="bg-[#203D4E] border-none nodrag"
                        placeholder="Saisissez votre texte"
                        onChange={(evt) => updateNodeData(id, {description: evt.target.value})}
                        value={data.description}
                    />
                    <Input
                        className="bg-[#203D4E] border-none nodrag"
                        placeholder="À propos de ce choix"
                        onChange={(evt) => updateNodeData(id, {effect: evt.target.value})}
                        value={data.effect}
                    />
                    <div className="flex items-center space-x-2">
                        <div className="flex flex-col space-y-2">
                            <Label>Points de survie</Label>
                            <Input
                                className="bg-[#203D4E] border-none nodrag"
                                placeholder="Score"
                                onChange={(evt) => updateNodeData(id, {healthPointsImpact: evt.target.value})}
                                value={data.healthPointsImpact}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label>Points de sagesse</Label>
                            <Input
                                className="bg-[#203D4E] border-none nodrag"
                                placeholder="Score"
                                onChange={(evt) => updateNodeData(id, {wisePointsImpact: evt.target.value})}
                                value={data.wisePointsImpact}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Note</Label>
                        <RadioGroup defaultValue="super"
                                    className="space-y-2"
                                    value={data.score}
                                    onValueChange={(evt) => {
                                        return updateNodeData(id, {score: evt})
                                    }}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="super" id="super" className="border-white"/>
                                <Label htmlFor="label1">Super</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="good" id="good" className="border-white"/>
                                <Label htmlFor="label2">Good</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="bad" id="bad" className="border-white"/>
                                <Label htmlFor="label3">Bad</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </CardContent>
            </Card>

            <Handle type="source" position={Position.Bottom}/>
        </div>
    )
}
