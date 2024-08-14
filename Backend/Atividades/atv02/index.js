const fs = require('node:fs/promises');

function readData(json){
    let students = json.alunos;
    students.forEach(async student => {
        let dirPath = await registerStudent(student);
        student.projetos.forEach(project => registerProject(project, dirPath));
    });
}

async function registerStudent(student){
    try {
        let dirPath = `./${student.nome}_${student.matricula}`;
        await fs.mkdir(dirPath);
        return dirPath;
    } catch (error) {
        console.error('Erro ao registrar aluno:', error);
    }
}

async function registerProject(project, dirPath){
    try {
        fs.writeFile(`${dirPath}/${project.titulo}.txt`, project.resumo);
    } catch (error) {
        console.error('Erro ao registrar projeto:', error);
    }
}

async function start(){
    const data = await fs.readFile('./data.json', 'utf8');
    const json = JSON.parse(data);
    readData(json);
}

start();