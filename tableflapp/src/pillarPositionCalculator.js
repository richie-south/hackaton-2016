const pillarPosition = () => {
  let gap = 15;
  let randomNumber = Math.floor(Math.random() * 29) + 5
  let color = '#74BF2E'
  const result = []
  for(let i = 0; i < 3; i++){
    for(let k = 0; k < 50; k++){
      if(k === (randomNumber-1) || k === (randomNumber + gap+1)){
        color = '#538221'
      }else{
        color = '#74BF2E'
      }
      if(k < randomNumber || k > (randomNumber+gap)){
        result.push({
          row:k,
          column:50+i,
          color:color
        })
      }
    }
  }
return result;
}

export default pillarPosition
