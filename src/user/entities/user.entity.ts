import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { Role } from '../../common/enums/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'enum', enum: Role, default: Role.NonVerified })
  role: Role;

  @Column({ unique: true, nullable: true })
  email: string | null;

  @Column({ nullable: true })
  fullName: string | null;

  @Column({ nullable: true })
  profilePhoto: string | null;

  @Column({ nullable: true })
  bio: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async updatePassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
