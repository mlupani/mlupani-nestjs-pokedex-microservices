import { IsPositive, Min, IsInt, IsString, MinLength } from 'class-validator';

export class PokemonDTO {
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
