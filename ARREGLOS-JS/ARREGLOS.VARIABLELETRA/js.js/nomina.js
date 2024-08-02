let nomina = [];
let iteracion2;
let valorDiaP;
let diasTrabajadosP;
let salarioP;
let saludP;
let arlP;
let pensionP;
let retencionP;
let subTransP;
let extraP;
let totalPagar=[];
let pagoTotalP;
let contenido;
let cuadro;

nomina = [
    {id: 1, numeroDocumento: 1077225819, nombres: 'Camilo', apellido: 'Mota', edad: 18,valorDia: 40000,diasTrabajados:25},
    {id: 2, numeroDocumento: 1077227809, nombres: 'Merari', apellido: 'Urbano', edad: 17,valorDia: 25000,diasTrabajados:30},
    {id: 3, numeroDocumento: 1077224527, nombres: 'Sebastian', apellido: 'Serrato', edad: 19,valorDia: 60000,diasTrabajados:20},
    {id: 4, numeroDocumento: 1080427305, nombres: 'Maria', apellido: 'Marin', edad: 17,valorDia: 10000,diasTrabajados:10},
    {id: 5, numeroDocumento: 1129844804, nombres: 'Brayan Stid', apellido: 'Cortez', edad: 16,valorDia: 70000,diasTrabajados:31},
    {id: 6, numeroDocumento: 1077722422, nombres: 'Catalina', apellido: 'Cometa', edad: 18,valorDia: 45000,diasTrabajados:14},
    {id: 7, numeroDocumento: 1079409259, nombres: 'Nikolas', apellido: 'Morales', edad: 17,valorDia: 40000,diasTrabajados:20},
    {id: 8, numeroDocumento: 7777777777, nombres: 'Andres', apellido: 'Moreno', edad: 45,valorDia: 300000,diasTrabajados:15},
]




    for(iteracion2 = 0; iteracion2<8;iteracion2++){
        valorDiaP = nomina[iteracion2].valorDia;
        diasTrabajadosP = nomina[iteracion2].diasTrabajados;
        salarioP = salarioA(valorDiaP,diasTrabajadosP);
        saludP = saludA(valorDiaP,diasTrabajadosP);
        arlP = arlA(valorDiaP,diasTrabajadosP);
        pensionP = pensionA(valorDiaP,diasTrabajadosP);
        retencionP = retencionA(valorDiaP,diasTrabajadosP);
        subTransP = subTransA(valorDiaP,diasTrabajadosP);
        extraP = extraA(valorDiaP,diasTrabajadosP);
        pagoTotalP = pagoTotalA(valorDiaP,diasTrabajadosP);
        totalPagar.push({id:nomina[iteracion2].id, numeroDocumento:nomina[iteracion2].numeroDocumento,nombres:nomina[iteracion2].nombres,
          apellido:nomina[iteracion2].apellido,edad:nomina[iteracion2].edad,valorDia:valorDiaP,diasTrabajados:diasTrabajadosP,
          salario:salarioP,salud:saludP,pension:pensionP,arl:arlP,retenciones:retencionP,subTrans:subTransP,extra:extraP,
          pagoTotal:pagoTotalP})
    }
  
  console.log(totalPagar);

  let sumar = 0 ;

  for(iteracion2 =0; iteracion2 <8; iteracion2++){
    sumar = sumar + totalPagar[iteracion2].pagoTotal;
  }
  console.log("Suma total de los pagos de nomina: "+sumar);

let html = "";
html+="<table>";
//html+="<tr>";
html+="<center><th>Id</th>";
html+="<th>Numero de Documento</th>";
html+="<th>Nombres</th>";
html+="<th>Apellidos</th>";
html+="<th>Edad</th>";
html+="<th>Valor por dia</th>";
html+="<th>Dias trabajados</th>";
html+="<th>  Salario  </th>";
html+="<th> Salud  </th>";
html+="<th> Pension </th>";
html+="<th>  Arl  </th>";
html+="<th>Retención</th>";
html+="<th>Subsidio de Transporte </th>";
html+="<th>Añadido por edad</th>";
html+="<th>Sueldo total</th></center>";
//html+="</tr>";

let numero=0;
let color="";
  totalPagar.forEach(contenido => {
    numero = numero + 1;

    if(numero%2==0){
      color = "class='azul-claro'";
    }
    else{
      color = "";
    }
    // Crear un elemento de párrafo para cada registro
    //let paragraph = document.createElement("p");

    // Asignar el contenido al texto del párrafo
    html+="<tr "+color+">";
    html+= `<td><strong>${contenido.id}</strong></td>
    <td>${contenido.numeroDocumento}  </td>
    <td><strong>${contenido.nombres}</strong></td>
    <td>${contenido.apellido}</td>
    <td>${contenido.edad}</td>
    <td>${contenido.valorDia}</td>
    <td>${contenido.diasTrabajados}</td>
    <td> ${contenido.salario}</td>
    <td> ${contenido.salud}</td>
    <td> ${contenido.pension}</td>
    <td> ${contenido.arl}</td>
    <td><center> ${contenido.retenciones}</center></td>
    <td><center> ${contenido.subTrans}</center></td>
    <td><center>${contenido.extra}</center></td>
    <td><center> ${contenido.pagoTotal} </center></td>`;
    html+="</tr>";

    // Agregar el párrafo al elemento con id "miCuadro"
    //cuadro.appendChild(paragraph);
});
//html+="<table>";
 document.getElementById('contenido').innerHTML=html;
