import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-home',
  templateUrl: './formulario-home.component.html',
  styles: []
})
export class FormularioHomeComponent implements OnInit {
  public formulario:FormGroup;
  constructor() { 
    
  }

  ngOnInit() {
    this.CrearFormulario();
  }

  public CrearFormulario():void{
    this.formulario=new FormGroup({
      name:new FormControl(null,[Validators.minLength(5),Validators.required,this.No_Numeros]),
      email:new FormControl(null,[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      Mensaje:new FormControl(null, [Validators.minLength(5),Validators.required,this.No_Numeros]),
      pass:new FormControl(null,[Validators.minLength(8),Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
      pass2:new FormControl(null)
    });
    this.formulario.controls.pass2.setValidators([this.MatchPassword.bind(this)]);
    
  }
  public verEstadoFormulario():void{
    console.log(this.formulario)
  }
  private No_Numeros(control:FormControl):{[key:string]:boolean}{
    if(control.value==null)return null;
    
    if(!/^[a-zA-Z\s]*$/.test(control.value))return {ExisteNumero:true};
   
    return {ExisteNumero:false};
  }
  private MatchPassword(control:FormControl):{[key:string]:boolean}{
    
    console.log(this.formulario.controls );
    if(control.value!=this.formulario.controls.pass1.value)return{noIgual:true};
    return{noIgual:false};
  }

}
