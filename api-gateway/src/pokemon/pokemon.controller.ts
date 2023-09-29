import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxyApp } from '../common/proxy/client-proxy';
import { PokemonDTO } from './dto/pokemon.dto';
import { Observable } from 'rxjs';
import { PokemonMSG } from '../common/constants';

@Controller('api/v2/pokemon')
export class PokemonController {
  constructor(private readonly clientProxy: ClientProxyApp) {}
  private _clientProxyPokemon = this.clientProxy.clientProxyPokemon();

  @Post()
  createPokemon(@Body() createPokemonDto: PokemonDTO): Observable<PokemonDTO> {
    return this._clientProxyPokemon.send(PokemonMSG.CREATE, createPokemonDto);
  }

  @Get()
  findAllPokemon(): Observable<PokemonDTO[]> {
    return this._clientProxyPokemon.send(PokemonMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOnePokemon(@Param('id') id: string): Observable<PokemonDTO> {
    return this._clientProxyPokemon.send(PokemonMSG.FIND_ONE, id);
  }

  @Put(':id')
  updatePokemon(
    @Param('id') id: string,
    @Body() updatePokemonDto: PokemonDTO,
  ): Observable<PokemonDTO> {
    return this._clientProxyPokemon.send(PokemonMSG.UPDATE, {
      id,
      ...updatePokemonDto,
    });
  }

  @Delete(':id')
  deletePokemon(@Param('id') id: string): Observable<PokemonDTO> {
    return this._clientProxyPokemon.send(PokemonMSG.DELETE, id);
  }
}
