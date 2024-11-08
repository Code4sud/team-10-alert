import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Scenario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column('json', { nullable: true })
  scenarioNodes: Record<string, any>;

  @Column({ nullable: true })
  initialScenarioNodeId: string;
}
