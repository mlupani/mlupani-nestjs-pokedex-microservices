import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { RabbitMQ } from '../constants';

@Injectable()
export class ClientProxyApp {
  constructor(private readonly config: ConfigService) {}

  clientProxyPokemon(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.config.get<string>('RABBITMQ_URL')],
        queue: RabbitMQ.UserQueue,
        queueOptions: {
          durable: false,
        },
      },
    });
  }
}
