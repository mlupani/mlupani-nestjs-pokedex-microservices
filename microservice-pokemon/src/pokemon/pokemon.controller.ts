import { Controller } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PokemonMSG } from '../common/constants';

@Controller()
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @MessagePattern(PokemonMSG.CREATE)
  create(@Payload() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @MessagePattern(PokemonMSG.FIND_ALL)
  findAll(@Payload() PaginationDto: any) {
    return this.pokemonService.findAll(PaginationDto);
  }

  @MessagePattern(PokemonMSG.FIND_ONE)
  findOne(@Payload() term: string) {
    return this.pokemonService.findOne(term);
  }

  @MessagePattern(PokemonMSG.UPDATE)
  update(@Payload() payload: any) {
    return this.pokemonService.update(payload.term, payload.updatePokemonDto);
  }

  @MessagePattern(PokemonMSG.DELETE)
  remove(@Payload() id: string) {
    return this.pokemonService.remove(id);
  }
}
