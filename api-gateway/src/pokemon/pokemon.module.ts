import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { ProxyModule } from '../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [PokemonController],
})
export class PokemonModule {}
