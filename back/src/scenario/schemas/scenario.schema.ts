import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ScenarioNode } from './scenario-nodes.schema';

@Entity()
export class Scenario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
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
