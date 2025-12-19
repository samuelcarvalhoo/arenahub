// ===== COMPONENTE CARD DE RESERVA =====
import React from 'react';

const ReservationCard = ({ 
  reserva, 
  formatarData, 
  formatarPreco, 
  onCancelar, 
  showCancelButton 
}) => {
  return (
    <div className="reservation-card">
      <div className="card-image-container">
        {reserva.quadra_imagem ? (
          <img 
            src={reserva.quadra_imagem} 
            alt={reserva.quadra_nome}
            className="card-image"
          />
        ) : (
          <div className="card-image-placeholder">
            <svg viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" fill="#e0e0e0"/>
              <path d="M20 70 L40 50 L60 60 L80 40" stroke="#bdbdbd" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="35" cy="35" r="8" fill="#bdbdbd"/>
            </svg>
          </div>
        )}
      </div>
      
      <div className="card-details">
        <h3 className="card-title">{reserva.quadra_nome}</h3>
        
        <div className="card-info-grid">
          <div className="info-item">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="info-label">Data:</span>
            <span className="info-value">{formatarData(reserva.data)}</span>
          </div>
          
          <div className="info-item">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="info-label">Horário:</span>
            <span className="info-value">{reserva.horario}</span>
          </div>
          
          <div className="info-item">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="info-label">Endereço:</span>
            <span className="info-value">{reserva.quadra_endereco}</span>
          </div>
          
          <div className="info-item">
            <svg className="info-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="info-label">Preço:</span>
            <span className="info-value info-price">{formatarPreco(reserva.preco)}</span>
          </div>
        </div>
      </div>
      
      {showCancelButton && (
        <div className="card-action">
          <button 
            className="cancel-button" 
            onClick={() => onCancelar(reserva.id)}
          >
            <svg className="button-icon" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Cancelar agendamento
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationCard;