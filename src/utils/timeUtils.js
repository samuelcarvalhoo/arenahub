export const calcularHorarioFinal = (inicio, duracao) => {
    if (!inicio || !duracao) return "";


    const [hInicio, mInicio] = inicio.split(':').map(Number);
    let minutosTotal = hInicio * 60 + mInicio;

    if (String(duracao).includes(':')) {
        const [hDuracao, mDuracao] = duracao.split(':').map(Number);
        minutosTotal += hDuracao * 60 + mDuracao;
    } else {
        minutosTotal += Number(duracao) * 60;
    }

    const hFinal = Math.floor(minutosTotal / 60);
    const mFinal = Math.round(minutosTotal % 60);

    const hFinalStr = String(hFinal).padStart(2, '0');
    const mFinalStr = String(mFinal).padStart(2, '0');

    return `${hFinalStr}:${mFinalStr}`;
};

export const formatarDuracao = (duracao) => {
    if (!duracao) return "";
    let minutosTotal = 0;
    if (String(duracao).includes(':')) {
        const [h, m] = duracao.split(':').map(Number);
        minutosTotal = h * 60 + m;
    } else {
        minutosTotal = Number(duracao) * 60;
    }
    const horas = Math.floor(minutosTotal / 60);
    const minutos = Math.round(minutosTotal % 60);

    if (minutos === 0) return `${horas} hora${horas !== 1 ? 's' : ''}`;
    return `${horas} hora${horas !== 1 ? 's' : ''} e ${minutos} min`;
};
