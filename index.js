const questions = [
    "O que aprendi hoje?",
    "Qual dificuldade tive? E o que fazer para melhorar?",
    "Com o que fiquei feliz?",
]

const perguntar = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

perguntar()

const respostas = []
process.stdin.on("data", data => {
    respostas.push(data.toString().trim())
  if (respostas.length < questions.length) {
    perguntar(respostas.length)
  } else {
    console.log(respostas)
    process.exit()
  }
})

process.on('exit', () => {
    console.log(`
      Legal Samuel!
        
      Você aprendeu hoje:
      ${respostas[0]}
      
      Suas dificuldades e suas melhorias foram:
      ${respostas[1]}

      você ficou feliz com:
      ${respostas[2]}
    `)
})
