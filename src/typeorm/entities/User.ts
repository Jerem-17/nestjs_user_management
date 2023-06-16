import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  @Column()
  createdAt: Date;
}
