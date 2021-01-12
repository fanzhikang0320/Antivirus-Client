export const conversionScore = (score,max) => {
    // let num = (Number(score) / Number(max) * 5).toFixed(1);

    let num = Number(score) - 5;
    if ((num % 1) > 0.5) {
      num = num - (num % 1) + 1;
    }

    return num;
  }