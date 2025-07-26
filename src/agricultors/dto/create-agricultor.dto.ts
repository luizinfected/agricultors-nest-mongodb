import { IsString, IsOptional, IsBoolean, IsDateString } from 'class-validator';
import { IsCPF } from './is-cpf.decorator.validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAgricultorDto {
  @ApiProperty({
    example: 'Luiz Costa',
    description: 'Complete name of agricultor',
  })
  @IsString()
  fullName: string;

  @ApiProperty({
    example: '22222222222',
    description: 'agricultor CPF (unique and valid)',
  })
  @IsCPF({ message: 'invalid CPF' })
  @IsString()
  cpf: string;

  @ApiPropertyOptional({
    example: '1990-01-01',
    description: 'Birth date (ISO Format)',
  })
  @IsOptional()
  @IsDateString()
  birthDate?: Date;

  @ApiPropertyOptional({
    example: '11999999999',
    description: 'Cellphone number',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Agricultor status',
  })
  @IsOptional()
  @IsBoolean()
  active: boolean;
}
