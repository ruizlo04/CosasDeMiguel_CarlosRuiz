import { Pipe, PipeTransform } from '@angular/core';
import { Sprites } from '../models/pokemon-response.interface';

@Pipe({
  name: 'customImg'
})
export class CustomImgPipe implements PipeTransform {

  transform(sprites: Sprites | undefined): string | null {
    if (!sprites) {
      return null;
    }

    return sprites.front_default;
  }

}