/* eslint-disable eqeqeq */
function dataAtualFormatada(data: Date) {
  const dia = data.getDate().toString();
  const diaF = dia.length == 1 ? `0${dia}` : dia;
  const mes = (data.getMonth() + 1).toString(); // +1 pois no getMonth Janeiro começa com zero.
  const mesF = mes.length == 1 ? `0${mes}` : mes;
  // const anoF = data.getFullYear();
  return `${diaF}/${mesF}`;
}

export const serializedWeeks = (commitsByWeek: number[]) => {
  return commitsByWeek.map(week => {
    const date = new Date(week * 1000);

    return dataAtualFormatada(new Date(date.setHours(date.getHours() + 3)));
  });
};
