import { IsString, IsOptional, IsBoolean, IsDateString } from 'class-validator';
import { IsForbidden } from './is-forbidden.decorator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAgricultorDto {
  @IsString()
  @ApiProperty({
    example: 'Luiz Costa',
    description: 'Complete name of agricultor',
  })
  fullName: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({
    example: '2002-11-08T00:00:00.000Z',
    description: 'Birth date (ISO Format)',
  })
  birthDate?: Date;

  @IsForbidden({ message: 'You cannot change your CPF' })
  @IsOptional()
  cpf?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    example: '11999999999',
    description: 'Cellphone number',
  })
  phone?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({
    example: true,
    description: 'Agricultor status',
  })
  active: boolean;
}
