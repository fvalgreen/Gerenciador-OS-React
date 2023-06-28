import { useEffect, useState } from "react";
import { ChamadoServices } from "../services/ChamadoServices";
import { Ticket } from "./Ticket";

const chamadoServices = new ChamadoServices();

export const TicketList = () => {
  const [tickets, setTickets] = useState<any>([]);

  useEffect(() => {
    getTickets();
    console.log(tickets);
  }, []);

  const getTickets = async () => {
    const resultado = await chamadoServices.getTickets();

    setTickets(resultado.data);
  };

  

  return (
    <div className="container-ticket-list scroll">
      { tickets && tickets.length > 0 ? 
      (tickets.map((ticket: any) => (
        <Ticket 
          author={ticket.solicitante} 
          date={ticket.dataAbertura}
          department="Financeiro"
          description={ticket.descricao}
          image={ticket.foto}
          location={ticket.local}
          status={ticket.status}
          title={ticket.titulo}
        />
      )))
    : null }
    </div>
  );
};
