import {Handle, Position, useReactFlow} from '@xyflow/react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

type QuestionProps = {
    description: string,
    photoUrl: string
}

export function QuestionNode({data, id, isConnectable}: { data: QuestionProps, id: any, isConnectable: any }) {

    const {updateNodeData} = useReactFlow();
    return (
        <div>
            <Handle
                type="target"
                position={Position.Top}
                isConnectable={isConnectable}
            />
            <Card className="bg-slate-800 text-white border-none">
                <CardHeader>
                    <CardTitle>Question</CardTitle>
                </CardHeader>
              <CardContent>
                <Textarea
                  className="bg-slate-900 border-none min-h-[100px] nodrag"
                  placeholder="Saisissez votre question ..."
                  onChange={(evt) => {
                    console.log(evt.target.value)
                    updateNodeData(id, {description: evt.target.value})
                  }}
                  value={data.description}
                />

                  <Input
                    id="photo"
                    className="bg-slate-900 border-none nodrag mt-4"
                    placeholder="URL Photo"
                    onChange={(evt) => updateNodeData(id, {photo: evt.target.value})}
                    value={data.photoUrl}
                  />
              </CardContent>
            </Card>
          <Handle type="source" position={Position.Bottom}/>
        </div>
    )
}
