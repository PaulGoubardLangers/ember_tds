import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = 'default';
  @tracked info = 'information sur votre texte';
  MAX = 100;

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    if (this.size < 50) {
      return '<fc orange>alert-warning</fc>';
    } else if (this.size < 20) {
      return '<fc red>alert-danger</fc>';
    } else {
      return '<fc green>alert</fc>';
    }
  }

  @action
  clear() {
    console.log('contenu effacé');
  }

  @action
  update() {
    console.log('mise à jour');
  }

  @action
  save() {
    console.log('save');
  }
}
