// Base a ser utilizada
const alunosDaEscola = [{ nome: "Henrique", notas: [], cursos: [], faltas: 5 },
{ nome: "Edson", notas: [], cursos: [], faltas: 2 },
{ nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 },
{ nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0 },
{ nome: "Carlos", notas: [], cursos: [], faltas: 0 },
{ nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }];

// implementação

function adicionarAluno(nomeDoAluno) {
    alunosDaEscola.push({ nome: nomeDoAluno, notas: [], cursos: [], faltas: [] });
    console.log("Aluno cadastrado com sucesso.")
    return alunosDaEscola;
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
}

function listarAlunos() {
    let listaDeAlunos;
    alunosDaEscola.forEach(aluno => {
        listaDeAlunos += `Nome do Aluno: ${aluno.nome},
        Notas: ${aluno.notas},
        Quantidade de Faltas: ${aluno.faltas},
        Cursos matriculado: ${aluno.cursos.nomeDoCurso} \n`
    });
    console.log(listaDeAlunos);
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
}

function buscarAluno(aluno) {
    const buscar = alunosDaEscola.find((user) => user.nome === aluno);
    if (buscar !== undefined) {
        console.log(buscar);
    } else {
        console.log(`Aluno: ${aluno} não cadastrado.`)
    }
    return buscar;
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback,
     tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
}

function matricularAluno(aluno, curso) {
    const buscar = alunosDaEscola.find((user) => user.nome === aluno);
    if (buscar !== undefined) {
        buscar.cursos.push({ nomeDoCurso: curso, dataMatricula: new Date })
        console.log(`${aluno} cadastrado no curso de ${curso} com sucesso`)
        return "Cadastrado"
    }
    else {
        console.log(`${aluno} não está cadastrado!`)
        return "Aluno não cadastrado"
    }
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema,
e deverá armazenar a data atual no momento da matricula
Lembre-se de exibir o feedback para o usuário. */
}

function aplicarFalta(aluno) {
    const buscar = alunosDaEscola.find((user) => user.nome === aluno);
    if (buscar !== undefined && buscar.cursos.length !== 0) {
        buscar.faltas = 1;
        console.log(`Falta registrada`)
        return "Falta cadastrada"
    }
    else {
        console.log(`${aluno} não está cadastrado em um curso!`)
        return "Aluno não cadastrado"
    }
    /*
 Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. 
Você deverá dar um feedback ao concluir a tarefa. 
Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
*/
}

function aplicarNota(aluno, nota) {
    const buscar = alunosDaEscola.find((user) => user.nome === aluno);
    if (buscar !== undefined && buscar.cursos.length !== 0) {
        buscar.notas.push(nota);
        console.log(`Nota registrada`);
        return "Nota cadastrada"
    }
    else {
        console.log(`${aluno} não está cadastrado em um curso!`)
        return "Aluno não cadastrado"
    }
    //     /*
    //      Ao receber um aluno devidamente cadastrado em nossa lista. 
    // Você deverá adicionar uma nota ao aluno na sua lista de notas. 
    // Você deverá dar um feedback ao concluir a tarefa. 
    // Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    //     */
}

function aprovarAluno(aluno) {
    const buscar = alunosDaEscola.find((user) => user.nome === aluno);
    let faltas = buscar.faltas;
    let notas = buscar.notas;
    if (buscar !== undefined && buscar.cursos.length !== 0) {
        var media = notas.reduce((total, value) => total + value) / notas.length;
        if (media >= 7 && buscar.faltas <= 3) {
            console.log(`Aluno Aprovado \n Média: ${media}`);
        } if (media <= 7) {
            console.log(`Aluno: ${aluno} \n Reprovado na média: ${media}`);
        } if (faltas > 3) {
            console.log(`Aluno: ${aluno} \n Reprovado por faltas: ${faltas}`);
        }
        return "Resultados"
    }
    else {
        console.log(`${aluno} não está cadastrado em um curso!`)
        return "Aluno não cadastrado"
    }
}
// Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não.
// Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
// Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso