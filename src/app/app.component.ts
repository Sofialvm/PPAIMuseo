import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CU102';

  sede: any[] = [
    { idSede: 0, cantMaximaVisitantes: 100, cantMaxPorGuia: 20, nombre: 'sede 0' },
    { idSede: 1, cantMaximaVisitantes: 100, cantMaxPorGuia: 20, nombre: 'sede 1' },
    { idSede: 2, cantMaximaVisitantes: 100, cantMaxPorGuia: 20, nombre: 'sede 2' }
  ];



  tarifa: any[] = [
    { idTarifa: 0, idSede: 0, idTipoVisita: 0, idTipoEntrada: 0, idEstadoTarifa:0, fechaFinVigencia: '10/05/2021', fechaInicioVigencia: '10/01/2021', monto: 150, montoAdicionalGuia: 50 },
    { idTarifa: 1, idSede: 1, idTipoVisita: 0, idTipoEntrada: 1, idEstadoTarifa:0, fechaFinVigencia: '10/05/2021', fechaInicioVigencia: '10/01/2021', monto: 75, montoAdicionalGuia: 50 },
    { idTarifa: 2, idSede: 0, idTipoVisita: 1, idTipoEntrada: 0, idEstadoTarifa:0, fechaFinVigencia: '10/05/2021', fechaInicioVigencia: '10/01/2021', monto: 0, montoAdicionalGuia: 50 },
    { idTarifa: 3, idSede: 1, idTipoVisita: 1, idTipoEntrada: 1, idEstadoTarifa:0, fechaFinVigencia: '10/05/2021', fechaInicioVigencia: '10/01/2021', monto: 0, montoAdicionalGuia: 50 }
  ];

  estadoTarifa: any[] = [
    {id:0, nombre:'Vigente'},
    {id:1, nombre:'No Vigente'}
  ]

  tipoVisita: any[] = [
    { idTipoVisita: 0, nombre: 'Publico General' },
    { idTipoVisita: 1, nombre: 'Menores' },
    { idTipoVisita: 2, nombre: 'Jubilados' },
    { idTipoVisita: 3, nombre: 'Estudiantes' },
  ]

  tipoEntrada: any[] = [
    { idTipoEntrada: 0, nombre: 'Completa' },
    { idTipoEntrada: 1, nombre: 'Exposicion' },
  ]

  exposicion: any[] = [
    {id:0, idSede:0, fechaFin:'', fechaDinReplanificada:'',fechaInicio:'',fechaInicioReplanificada:'',horaApertura:'',horaCierre:'',nombre:'postmoderna'},
    {id:1, idSede:0, fechaFin:'', fechaDinReplanificada:'',fechaInicio:'',fechaInicioReplanificada:'',horaApertura:'',horaCierre:'',nombre:'moderna'},
    {id:2, idSede:0, fechaFin:'', fechaDinReplanificada:'',fechaInicio:'',fechaInicioReplanificada:'',horaApertura:'',horaCierre:'',nombre:'romanticismo'}
  ]

  detalleExposicion: any[] = [
    {id:0, idExposicion:0, lugarAsignado:'piso 1'},
    {id:1, idExposicion:1, lugarAsignado:'piso 1'},
    {id:2, idExposicion:2, lugarAsignado:'piso 1'},
    {id:3, idExposicion:3, lugarAsignado:'piso 1'}
  ]

  coleccion: any[] = [
    { id: 0, idSede: 0, descripcion: '', fechaFinVigencia: '', fechaInicioVigencia: '', nombre: 'posmoderno' },
    { id: 1, idSede: 1, descripcion: '', fechaFinVigencia: '', fechaInicioVigencia: '', nombre: 'posmoderno' }
  ]

  subcoleccion: any[] = [
    { id: 0, idColeccion: 0, descripcion: '', nombre: '' },
    { id: 1, idColeccion: 1, descripcion: '', nombre: '' }
  ]

  obra: any[] = [
    { id: 0, idDetalleExpo: 0, alto: 0, ancho: 0, duracionExtendida: 40, duracionResumida: 25, nombre: 'primera Obra' },
    { id: 1, idDetalleExpo: 0, alto: 0, ancho: 0, duracionExtendida: 40, duracionResumida: 30, nombre: 'segunda Obra' },
    { id: 2, idDetalleExpo: 1, alto: 0, ancho: 0, duracionExtendida: 40, duracionResumida: 50, nombre: 'tercera Obra' }
  ]

  reservaVisita: any[] = [
    { id:0, idSede:0, cantAlumnos:20, cantidadAlumnosConf:10, duracionEstimada:10, fechaHoraCreacion:'', fechaHoraReserva:''}
  ]

  entrada: any[] = [
    { id:0, idSede:0, fechaVenta:'', horaVenta:'', monto:0}
  ]
  
  pagina = {
    A: "Seleccion Opcion",
    B: "Seleccion Sede",
    C: "Registrar Ventas"
  };

  OpcPagina = "A";

  auxIdSede = 0;
  auxIdExposicion = 0;
  auxIdDetalleExpo = 0;
  duracion = 0;

  constructor() { }

  ngOnInit(): void {

  }

  BuscarSede() {
    this.OpcPagina = "B";
  }

  BuscarTarifas(idSede) {
    this.OpcPagina = "C";
    //Falta For buscar tarifas vigentes
    this.auxIdSede = idSede;
    console.log('idSede', idSede)
    
    this.duracion = this.CalcularDuracionVisitaCompleta(idSede);
  };


  CalcularDuracionVisitaCompleta(id) {
    //Falta For buscando vigencia
    var countDuracion = 0

    for (let index = 0; index < this.exposicion.length; index++) {
      console.log('indexExposicion',this.exposicion.length)
      if (id == this.exposicion[index].idSede) {
        this.auxIdExposicion = this.exposicion[index].id
        console.log('auxIdExposicion', this.auxIdExposicion)

        for (let indexDos = 0; indexDos < this.detalleExposicion.length; indexDos++) {
          if (this.auxIdExposicion == this.detalleExposicion[indexDos].id) {
            this.auxIdDetalleExpo = this.detalleExposicion[indexDos].id
            console.log('auxIdDetalle', this.detalleExposicion)

            for (let indexTres = 0; indexTres < this.obra.length; indexTres++) {
              console.log('indexObra index' ,this.obra.length)
              if (this.auxIdDetalleExpo == this.obra[indexTres].idDetalleExpo) {
                countDuracion += this.obra[indexTres].duracionResumida;
                console.log('duracion por obra', this.obra[indexTres].duracionResumida)
              }
              
            }

          }
          
        }
        
      }
      
    }
    return countDuracion;
  }


  buscarReservaSedeActual(){
    //Pasar FECHA Y HORA DEL DIA ACTUAL comparar con fecha y hora reserva y suma a un
    //contador las reservas de ese dia (alumnosConfirmados) para despues restarle a la cantidadMax de la sede y mostrar el resultado
    for (let index = 0; index < this.reservaVisita.length; index++) {
      if (this.reservaVisita[index].idSede == this.auxIdSede) {

        
      }
      
    }

  }

  buscarEntradasSedeActual(){
    //Pasar como paramentro la fecha Actual comparar con la fecha y hora de la entrada y sumarlas a un contador
    //devovler ese contador y restarlo a la cantidadmax de la sede 
    for (let index = 0; index < this.entrada.length; index++) {
      if (this.entrada[index].idSede == this.auxIdSede) {

        
      }
      
    }
  }

  buscarUltimoNumeroEntrada(){
    //con Base de datos se hace diferente
    var ultimoNumero = 0
    for (let index = 0; index < this.entrada.length; index++) {
      if (this.entrada[index].id >= ultimoNumero) {
        ultimoNumero = this.entrada[index].id
      }
    }
    return ultimoNumero
  }













}



