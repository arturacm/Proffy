const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    proffyValue = {
        name: "Artur Moreira",
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFaHX0f2UsOOw/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=HwPILJQrugsmgT_j4QgqkF5HASL_c0iVKTznvyRh6fs",
        whatsapp: "08599999999",
        bio: "Entusiasta em tecnologia, cultura Maker e inovação. Apaixonado por gerar inovação, sendo auxiliando projetos de alunos em um papel de mentor ou contribuindo com a equipe de tecnologia da Escola Eleva na criação de um currículo disruptivo.",
    }
    classValue = {
        subject: 1,
        cost: "20",

    }
    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    
    console.log(selectClassesAndProffys)
})
