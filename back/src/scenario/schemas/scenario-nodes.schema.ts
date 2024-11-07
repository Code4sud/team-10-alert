import { DashboardNode } from 'src/dashboard-nodes/schemas/dashboard-nodes.schema';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { ScenarioResponse } from './scenario-responses.schema';
import { Scenario } from './scenario.schema';

@Entity()
export class ScenarioNode {
  @PrimaryColumn()
  id: string;

  @Column()
  imageUrl: string;

  @Column()
  description: string;

  @OneToMany(() => ScenarioResponse, (response) => response.scenarioNodeParent)
  responses: Response[];

  @OneToOne(() => DashboardNode, (dashboard) => dashboard.data)
  dashboardNode: DashboardNode;

  @OneToOne(() => ScenarioResponse, (response) => response.scenarioNodeChild)
  @JoinColumn({ name: 'responseParentId' })
  response: Response;

  @Column({ unique: true })
  responseParentId: string;

  @ManyToOne(() => Scenario, (scenario) => scenario.scenarioNodes)
  scenario: Scenario;

  @Column({ nullable: true })
  scenarioId: string;

  @OneToOne(() => Scenario, (scenario) => scenario.initialScenarioNode)
  initialForScenario: Scenario;
}
