import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibroService } from 'src/app/Services/libro.service';

@Component({
  selector: 'app-nuevo-libros',
  templateUrl: './nuevo-libros.component.html',
  styleUrls: ['./nuevo-libros.component.css']
})
export class NuevoLibrosComponent implements OnInit 
{

    createLibro: FormGroup;
    submitted= false;
    constructor(private fb:FormBuilder,
                private servicioLibro:LibroService,
                private router: Router) 
    { 
      this.createLibro = this.fb.group({
         ISBN: ['',[Validators.required, Validators.pattern("^[0-9-]*$")]],
         Genero: ['',[Validators.required]],
         Titulo: ['',[Validators.required]],
         Autor: ['',[Validators.required]],
         Editorial: ['',[Validators.required]],
         Precio: ['',[Validators.required, Validators.pattern("^[0-9-]*$")]]
         

         
      });

    }

    ngOnInit(): void {
    }

    agregarLibro()
    {
      this.submitted = true;
      if(this.createLibro.invalid)
      {
        return;
      }
      else
      {
        const libro: any = 
        {
          ISBN: this.createLibro.value.ISBN,
          Genero: this.createLibro.value.Genero,
          Titulo: this.createLibro.value.Titulo,
          Autor: this.createLibro.value.Autor,
          Editorial: this.createLibro.value.Editorial,
          Precio: this.createLibro.value.Precio,
          fechaCreacion: new Date(),
          fechaActualizacion: new Date(),
        }
        this.servicioLibro.agregarLibro(libro).then(() =>
        {
            console.log("Libro Registrado con exito!");
            this.router.navigate(['/lista']);
        })
      }
      //console.log(this.createLibro)
    }
    get createLibroContro()
    {
      return this.createLibro.controls
    }
}
