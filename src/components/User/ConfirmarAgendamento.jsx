import { useState, useEffect } from "react";
import { calcularHorarioFinal, formatarDuracao } from "../../utils/timeUtils";
import "./ConfirmarAgendamento.css";

const ConfirmarAgendamento = ({data, updateFieldHandler, onSuccess}) => {
    const [error, setError] = useState(null);

    return (
        <div>
            <div className="agendamento-detalhes">
                <h3>Deseja confirmar o agendamento?</h3>
                <p> <strong>Quadra: </strong> {data.id_quadra}</p>
                <p> <strong>Data selecionada: </strong> {data.dia}</p>
                <p> <strong>Duração do agendamento: </strong> {formatarDuracao(data.duracao)}</p>
                <p> <strong>Horário de início: </strong> {data.horario}</p>
                <p> <strong>Horário de término: </strong> {calcularHorarioFinal(data.horario, data.duracao)}</p>
                <p> <strong>Valor total: </strong> {data.quadra_valor_hora * data.duracao}</p>
            </div>
        </div>
    );
};

export default ConfirmarAgendamento;