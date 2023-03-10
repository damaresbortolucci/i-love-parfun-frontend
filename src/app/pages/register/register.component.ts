import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import User from '../../models/User';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  id: string = "";
  user: any = 'cliente';
  @Input() requestType: string = "post";

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}


  cadastroForm = this.formBuilder.group({
    nome: '',
    email: '',
    senha: '',
    role: ''
  });


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];

    if (this.id) {
      this.requestType = "put"
      this.usersService.retornaUsuario(this.id).subscribe({
        next: (usuario) => {
          this.cadastroForm = this.formBuilder.group({
            nome: usuario.nome,
            email: usuario.email,
            senha: '',
            role: ''
          });
        },
        error: (error) => console.error(error)
      })
    }

    this.user = this.authService.getUser();
  }

 

  onSubmit() {
    const usuario = new User(
      this.cadastroForm.value.nome ?? '',
      this.cadastroForm.value.email ?? '',
      this.cadastroForm.value.senha ?? '',
      this.cadastroForm.value.role ?? '',
      ''
    );

    if (this.id) {
      usuario._id = this.id;
      this.usersService.atualizaUsuario(usuario).subscribe({
        next: (retorno) => this.route.navigate(["/home"])
      });
    } else {
      this.usersService.adicionaUsuario(usuario).subscribe({       
        next: (retorno) => this.route.navigate(['/login'])
      });
    }
  }


  accessRole(): boolean{
    this.user = this.authService.getUser();
    return this.user?.role == 'cliente' || this.user?.role == null;
  }
}