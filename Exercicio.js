//html

<body>
    
    <script >
        var listaAlunos = [{nome : "Diego", ra : "00508322311001", p1 : 4, p2 : 8},
                      {nome : "Jessica", ra : "00508322311002", p1 : 7, p2 : 8 },
                      {nome : "Leonardo", ra : "00508322311003", p1 : 5, p2 : 4 },
                      {nome : "Heitor", ra : "00508322311004", p1 : 6, p2 : 10 },
                      {nome : "Laís", ra : "00508322311005", p1 : 5, p2 : 6 }];
                                  
        gerarAlunos(listaAlunos);              

    </script>

//javascript

function calcularMedia(aluno) {
    return (aluno.p1 + aluno.p2) / 2;
}

function mediaTurmap1(listaAlunos) {
    let totalp1 = 0;
    for (let i = 0; i < listaAlunos.length; i++) {
        totalp1 += listaAlunos[i].p1;

    }
    return totalp1 / listaAlunos.length;

}
function mediaTurmap2(listaAlunos) {
    let totalp2 = 0;
    for (let i = 0; i < listaAlunos.length; i++) {
        totalp2 += listaAlunos[i].p2;

    }
    return totalp2 / listaAlunos.length;
}

function gerarAlunos (listaAlunos) {
    let aprovados = 0;
    let reprovados = 0;
  
    var acumulado = " <table><thead><tr><th>Nome</th>"
    +  "<th>RA</th>"
    +  "<th>P1</th>"
    +  "<th>P2</th>" 
    +  "<th>Média</th>"       
    +  "</tr>"
    +  "</thead>"
    +  "<tbody>";
  
for(let i=0; i < listaAlunos.length; i++) {
    let media = calcularMedia(listaAlunos[i]);
    let colorp1 = listaAlunos[i].p1 >= 6 ? "aprovado" : "reprovado";
        let colorp2 = listaAlunos[i].p2 >= 6 ? "aprovado" : "reprovado";
        let colormedia = media >= 6 ? "aprovado" : "reprovado";
  
    if (media >= 6) {
        aprovados++;
    } else {
        reprovados++;
    }

 acumulado = acumulado
           + "<tr><td>" + listaAlunos[i].nome + "</td>"
           + "<td>" + listaAlunos[i].ra + "</td>" 
           + "<td class='" + colorp1 + "'>" + listaAlunos[i].p1 + "</td>" 
           + "<td class='" + colorp2 + "'>" + listaAlunos[i].p2 + "</td>" 
           + "<td class='" + colormedia + "'>" + media.toFixed(2) + "</td>";
                                         
} 

let mediaP1Turma = mediaTurmap1(listaAlunos).toFixed(2);
let mediaP2Turma = mediaTurmap2(listaAlunos).toFixed(2);

    acumulado += 
                "<tr><td>"
               +"<td> </td>"
               +"<td>" + mediaP1Turma + "</td>"
               +"<td>" + mediaP2Turma + "</td>"
                +"</td></tr>"; 
    


 
acumulado = acumulado + "</tbody></table>";
document.write(acumulado);
document.write("<p>Quantidade de aprovados: " + aprovados + "</p>");
document.write("<p>Quantidade de reprovados: " + reprovados + "</p>");
document.write("<p>Quantidade de reprovados: " + totalp1 + "</p>");
} 
       


