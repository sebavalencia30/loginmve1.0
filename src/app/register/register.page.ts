import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	rut: string = "";
	nombre: string = "";
	apellido: string = "";
	direccion: string = "";
	celular: string = "";
	email: string = "";
	password: string = "";
	password2: string = "";


  constructor(
  	private router: Router,
  	private PostPvdr : PostProvider,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  formLogin(){
 	this.router.navigate(['/login']);
 	}

  async Register(){
  		
  		if(this.email==""){
        const toast = await this.toastCtrl.create({
          message: 'Email es requerido',
          duration: 3000
        });
        toast.present();
    }else if(this.password==""){
        const toast = await this.toastCtrl.create({
          message: 'Password es requerido',
          duration: 3000
        });
        toast.present();
    }else if(this.password!=this.password2){
        const toast = await this.toastCtrl.create({
          message: 'Las contraseñas no coinciden',
          duration: 3000
        });
        toast.present();}

        else{

		  	let body = {
	  		rut: this.rut,
	  		nombre: this.nombre,
	  		apellido: this.apellido,
	  		direccion: this.direccion,
	  		celular: this.celular,
	  		email: this.email,
	  		password: this.password,
	  		aksi: 'register'
	  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertmsg = data.msg;
        if(data.success){
          
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Registro Completo',
            duration: 3000
          });
          toast.present();

        }else{
          
        	const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 3000
          	});
          	toast.present();

        }
      });
      }
      }
      }