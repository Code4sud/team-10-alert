import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { ScenarioNode } from './scenario-nodes.schema';

@Entity()
export class Scenario {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  difficulty: number;

  @OneToMany(() => ScenarioNode, (node) => node.scenario)
  scenarioNodes: ScenarioNode[];

  @OneToOne(() => ScenarioNode, (node) => node.initialForScenario)
  @JoinColumn({ name: 'initialScenarioNodeId' })
  initialScenarioNode: ScenarioNode;

  @Column({ nullable: true })
  initialScenarioNodeId: string;
}
