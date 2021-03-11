import { Router } from 'express';
import { getConnection, getRepository } from 'typeorm';
import { Chat, MessageState } from '../database/entities/chat';
import { v4 as uuid } from 'uuid';

const chat: Router = Router();

// Retrieve all Users
chat.get('/', async (req, res) => {
	const allChats = await getRepository(Chat).createQueryBuilder('chat').getMany();

	res.send(allChats);
});

interface ChatRequestType {
	author: string;
	message: string;
}

chat.post('/', async (req, res) => {
	const { author, message } = req.body as ChatRequestType;

	await getConnection()
		.createQueryBuilder()
		.insert()
		.into(Chat)
		.values([{ id: uuid(), author, message, state: MessageState.Sent }])
		.execute();

	res.send({ id: uuid(), author, message, state: MessageState.Sent });
});

export default chat;
