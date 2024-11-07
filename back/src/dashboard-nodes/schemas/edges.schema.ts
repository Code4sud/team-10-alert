import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { DashboardNode } from './dashboard-nodes.schema';

@Entity()
export class Edge {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => DashboardNode, (node) => node.to)
  @JoinColumn({ name: 'targetId' })
  target: DashboardNode;

  @Column()
  targetId: string;

  @ManyToOne(() => DashboardNode, (node) => node.from)
  @JoinColumn({ name: 'sourceId' })
  source: DashboardNode;

  @Column()
  sourceId: string;
}
