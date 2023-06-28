type TicketProps = {
  image: string;
  title: string;
  location: string;
  description: string;
  author: string;
  department: string;
  date: string;
  status: string;
};

export const Ticket: React.FC<TicketProps> = ({
  author,
  date,
  department,
  description,
  image,
  location,
  status,
  title,
}) => {
  const formatarData = (data: string) => {
    const ano = data.split("-")[0];
    const mes = data.split("-")[1];
    const dia = data.split("-")[2].split("T")[0];
    const horario = data.split("T")[1];
    const hora = horario.split(":")[0];
    const minutos = horario.split(":")[1];
    const segundos = horario.split(":")[2].split(".")[0];

    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="container-ticket">
      <div className="ticket-image">
        <img src={image ? image : ""} alt="imagem do chamado" />
      </div>
      <div className="ticket-info">
        <span className="ticket-title">{title}</span>
        <p className="ticket-location">{location}</p>
        <p className="ticket-description">{description}</p>
        <div className="ticket-row">
          <p className="ticket-author">{author}</p>
          <p className="ticket-department">{department}</p>
        </div>
      </div>
      <div className="ticket-date-status">
        <p className="ticket-date">{formatarData(date)}</p>
        <div className="ticket-status">
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
};
