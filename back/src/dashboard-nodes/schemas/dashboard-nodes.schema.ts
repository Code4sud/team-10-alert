import { ScenarioNode } from 'src/scenario/schemas/scenario-nodes.schema';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Edge } from './edges.schema';

@Entity()
export class DashboardNode {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  scenarioNodeId: string;

  @OneToOne(() => ScenarioNode, (node) => node.dashboardNode)
  @JoinColumn({ name: 'scenarioNodeId' })
  data: ScenarioNode;

  @Column('float')
  x: number;

  @Column('float')
  y: number;

  @OneToMany(() => Edge, (edge) => edge.source)
  from: Edge[];

  @OneToMany(() => Edge, (edge) => edge.target)
  to: Edge[];
}
