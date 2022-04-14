var output = document.getElementById("test_output");
var test_array = [];

function getRandomInt(max){
  return Math.floor(Math.random() * max)
}

const Test_Functions = [
  function RegExp_if(){
    for(let i = test_array.length; i; i--){
      const i_compare = i + getRandomInt(2)

      if(i == i_compare){

        console.log(true)
      }else{

        console.log(false)
      }
    }
  },
  function ToNum_if(){
    for(let i = test_array.length; i; i--){
      const i_compare = i + getRandomInt(2)

      console.log(Number(i == i_compare))
    }
  }
]

function Test_Time(function_to_call){
  let data = []

  const time_start = performance.now()
  function_to_call.call()
  const time_end = performance.now()

  data.push(`<h3>Times for ${function_to_call.name}</h3>`)
  data.push(`<p>End: ${time_end} ms</p>`)
  data.push(`<p>Start: ${time_start} ms<p>`)
  data.push(`<h4>Difference: ${time_end - time_start} ms<h4>`)

  console.clear()
  return data
}

const Test_Environment=(args=[])=>{
  for(let i = 0; i < 10000; i++) test_array.push(i)

  let test_body = document.getElementById("Test-Cases")

  const test_results = args.map((f_x) => Test_Time(f_x))

  for(const result of test_results){
    let result_container = document.createElement("div")

    result_container.setAttribute("class", "Test-Output")

    for(let i = 0; i < result.length; i++) result_container.innerHTML += result[i]

    test_body.appendChild(result_container)
  }
}

window.PageLoad = Test_Environment(Test_Functions)