import Chart from "../../components/Chart.js";
import {ReactFlowProvider} from "@xyflow/react";

export const ChartScreen = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlowProvider>
                <Chart />
            </ReactFlowProvider>
        </div>
    );
}
