import { db } from './../firebase';

class CocktailService {
  getAll() {
    return db.collection('cocktails').get();
  }

  create(cocktail) {
    return db.collection('cocktails').add(cocktail);
  }

  update(id, cocktail) {
    return db.collection('cocktails').doc(id).update(cocktail);
  }

  delete(id) {
    return db.collection('cocktails').doc(id).delete();
  }
}

export default new CocktailService();