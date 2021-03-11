import { Entity, Column, PrimaryColumn } from 'typeorm';

export enum MessageState {
	Sent = 'SENT',
	Receipt = 'RECEIPT',
	Read = 'READ',
}

@Entity()
export class Chat {
	@PrimaryColumn()
	id!: string;

	@Column()
	author!: string;

	@Column()
	message!: string;

	@Column()
	state!: MessageState;
}
