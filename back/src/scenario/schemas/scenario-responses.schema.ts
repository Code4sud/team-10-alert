import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from 'typeorm';
import { ScenarioNode } from './scenario-nodes.schema';

@Entity()
export class ScenarioResponse {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  effectDescription: string;

  @Column()
  healthPointsImpact: number;

  @Column()
  wisePointsImpact: number;

  @ManyToOne(() => ScenarioNode, (node) => node.responses)
  @JoinColumn({ name: 'scenarioNodeParentId' })
  scenarioNodeParent: ScenarioNode;

  @Column()
  scenarioNodeParentId: string;

  @OneToOne(() => ScenarioNode, (node) => node.response)
  scenarioNodeChild: ScenarioNode;

  @Column({ nullable: true })
  scenarioNodeChildId: string;
}
