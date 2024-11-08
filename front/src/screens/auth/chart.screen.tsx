import Chart from "../../components/Chart.js";
import {ReactFlowProvider} from "@xyflow/react";

export const ChartScreen = () => {
	return (
		<div className="h-[calc(100vh-112px)] w-[calc(100vw-240px)]">
			<ReactFlowProvider>
				<Chart />
			</ReactFlowProvider>
		</div>
	);
}
