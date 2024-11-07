import Chart from "../../components/Chart.js";
import {ReactFlowProvider} from "@xyflow/react";

export const ChartScreen = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ReactFlowProvider>
                <Chart />
            </ReactFlowProvider>
        </div>
    );
}
