import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
// export class DashboardNode {
//   @PrimaryColumn()
//   id: string;
//
//   @Column({ unique: true })
//   scenarioNodeId: string;
//
//   @OneToOne(() => ScenarioNode, (node) => node.dashboardNode)
//   @JoinColumn({ name: 'scenarioNodeId' })
//   data: ScenarioNode;
//
//   @Column('float')
//   x: number;
//
//   @Column('float')
//   y: number;
//
//   @OneToMany(() => Edge, (edge) => edge.source)
//   from: Edge[];
//
//   @OneToMany(() => Edge, (edge) => edge.target)
//   to: Edge[];
// }
export class DashboardNode {
  @PrimaryColumn()
  scenarioId: string;

  @Column('json', { nullable: true })
  data: Record<string, any> | null;
}
