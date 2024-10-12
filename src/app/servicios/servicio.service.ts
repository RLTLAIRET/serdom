import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public catalogo:any[]=[
    {
            "id": 1,
            "title": "Automatización y Control industrial",
            "imagen": "../../../assets/img/catalogo/Instrumentacion.jpg",
            "sub": [{
                    "categoria_id": 1,
                    "titulo": "PLC",
                    "imagen": "../../../assets/img/plc.jpg"
                },
                {
                    "categoria_id": 2,
                    "titulo": "HMI",
                    "imagen": "../../../assets/img/ergo.jpg"
                },
                {
                    "categoria_id": 3,
                    "titulo": "SERVOS",
                    "imagen": "../../../assets/img/servo.jpg"
                },
                {
                    "categoria_id": 4,
                    "titulo": "RELES SEGURIDAD",
                    "texto": "SUB-TITULO MHI ERGO",
                    "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                    "imagen": "../../../assets/img/reles.jpg"
                },
                {
                    "categoria_id": 5,
                    "titulo": "CTRL POSICION",
                     "imagen": "../../../assets/img/ctrl_posicion.jpg"
                },
                {
                    "categoria_id": 6,
                    "titulo": "TELEMETRIA",
                    "texto": "SUB-TITULO MHI ERGO",
                    "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                    "imagen": "../../../assets/img/telemetria.jpg"
                },
                {
                    "categoria_id": 7,
                    "titulo": "CONTACTORES",
                    "imagen": "../../../assets/img/contactor.jpg"
                }
            ]
        },
        {
            "id": 2,
            "title": "Medición de Variables Físicas",
            "imagen": "../../../assets/img/catalogo/variables fisicas.jpg",
            "sub": [{
                "categoria_id": 1,
                "titulo": "PLC",
                "texto": "SUB-TITULO MHI ERGO",
                "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                "imagen": "../../../assets/img/no-imagen.jpg"
            },
            {
                "categoria_id": 2,
                "titulo": "HMI",
                "texto": "SUB-TITULO MHI ERGO",
                "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                "imagen": "../../../assets/img/hmiergo/HMI ERGO principal.jpg"
            },
            
        ]
        },
        {
            "id": 3,
            "title": "Paneles Solares",
            "imagen": "../../../assets/img/catalogo/panel solar.jpg",
            "sub": [{
                "categoria_id": 1,
                "titulo": "PLC",
                "texto": "SUB-TITULO MHI ERGO",
                "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                "imagen": "../../../assets/img/plc.jpg"
            },
            {
                "categoria_id": 1,
                "titulo": "HMI",
                "texto": "SUB-TITULO MHI ERGO",
                "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                "imagen": "../../../assets/img/hmiergo/HMI ERGO principal.jpg"
            },
            
        ]
    },
        {
            "id": 4,
            "title": "Herramientas",
            "imagen": "../../../assets/img/catalogo/multimetros.jpg",
            "sub": [{
                "categoria_id": 1,
                "titulo": "PLC",
                "texto": "SUB-TITULO MHI ERGO",
                "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                "imagen": "../../../assets/img/no-imagen.jpg"
            },
            {
                "categoria_id": 1,
                "titulo": "HMI",
                "texto": "SUB-TITULO MHI ERGO",
                "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                "imagen": "../../../assets/img/hmiergo/HMI ERGO principal.jpg"
            },
            {
                "categoria_id": 1,
                "titulo": "SERVOS",
                "texto": "SUB-TITULO MHI ERGO",
                "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                "imagen": "../../../assets/img/hmiergo/HMI ERGO principal.jpg"
            },
            {
                "categoria_id": 1,
                "titulo": "RELES DE SEGURIDAD",
                "texto": "SUB-TITULO MHI ERGO",
                "manual": "assets/img/hmiergo/Especificaciones-tecnicas-HMI ERGO.pdf",
                "imagen": "../../../assets/img/hmiergo/HMI ERGO principal.jpg"
            },
           
        ]
        }

    ]

  

  public servicios:any[]=[
    {
      img:    "../../../assets/img/banner1.jpg",
      titulo: "AUTOMATISMO, CONTROL DE PROCESOS E INSTRUMENTACIÓN",
      texto: "Desarrollo, implementación y diseño de proyectos en todas las áreas a nivel industrial de acuerdo a las especificaciones técnicas, requerimientos y normativas vigente.",
      items:{
            item1:"Suministro de PLC, pantallas HMI, variadores de frecuencia para control de procesos.",
            item2:"Suministros de equipamiento de instrumentación para control de procesos como sensores de presión, nivel, temperatura, pH, redox, SST, OD y cloro.",
            item3:"Equipos para medición de caudal en fluidos invasivos y no invasivos.",
            item4:"Pantallas y controladores de procesos de campo."
      }},
      {
        img:    "../../../assets/img/banner3.jpg",
        titulo: "ELECTRICIDAD – ELECTRÓNICA INDUSTRIAL EN ASESORÍAS, PUESTA EN MARCHA, CAPACITACIÓN Y REPARACIÓN DE EQUIPOS",
        texto: "",
        items:{
              item1:"Montaje y cableado",
              item2:"Diseño, suministro e integración de tableros eléctricos según la normativa vigente.",
              item3:"Sistemas de respaldo de energía mediante UPS y celdas fotovoltaicas.",
              item4:"Diagnóstico y reparación de tarjetas electrónicas de equipos industriales, variadores de frecuencia, arrancadores suaves, pantallas HMI, fuentes de alimentación y reguladores",
              item5:"Estudio y detección de fallas a través de planes de mantenimientos preventivos, correctivos y predictivos."
        }},
        {
          img:    "../../../assets/img/banner0.jpg",
          titulo: "REDES INDUSTRIALES, TELEMETRÍA Y TRANSMISIÓN DE DATOS",
          texto: "Programación, desarrollo y soporte a aplicaciones computacionales multiplataforma, como también a los dispositivos de redes, utilizando herramientas tecnológicas avanzadas para satisfacer las necesidades del cliente en todo el ámbito industrial que incluye:",
          items:{
                item1:"Montaje y cableado",
                item2:"Cableado estructurado",
                item3:"Redes de comunicación Modbus, Profibus, TCP/IP y SI12",
                item4:"Medición remota de datos de proceso y el posterior envío de la información hacia el operador o servidor del sistema.",
                
          }},
          {
            img:    "../../../assets/img/banner1.jpg",
            titulo: "MONTAJE, LLAVE EN MANO, MEJORAS Y COBERTURA DE GARANTÍAS.",
            texto: "Programación, desarrollo y soporte a aplicaciones computacionales multiplataforma, como también a los dispositivos de redes, utilizando herramientas tecnológicas avanzadas para satisfacer las necesidades del cliente en todo el ámbito industrial que incluye:",
            items:{
                  item1:"Nuestros servicios se enfocan en ofrecer la solución desde el inicio hasta el final, participando en todas las etapas del proyecto como en líneas y procesos industriales.",
                  item2:"Establecemos propuestas de mejoras en sus equipos y procesos reduciendo notablemente los tiempos que puedan generarse por fallas, garantizando mejoras en la operatividad continua.",
                  item3:"La cobertura de garantía es procesada por nosotros, teniendo a disposición un servicio técnico especializado, en nuestros talleres en Santiago.",
                  
            }}];


  constructor() {
  
    
   }
   getServicios(){
      return this.servicios;
   }
   getCatalogo(){
     return this.catalogo;
   }

   getCatalogoItem(id:number){
     return this.catalogo;
   }
   getSub(id:number){
       
   }
}
