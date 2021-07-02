import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LibroService 
{

  constructor(private firestore: AngularFirestore) { }
  agregarLibro( libro:any): Promise<any>
  {
    return this.firestore.collection('Libros').add(libro);
  }
}
