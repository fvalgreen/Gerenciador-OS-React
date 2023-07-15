import { useContext, useEffect, useState } from "react";
import { ChamadoServices } from "../services/ChamadoServices";
import { Ticket } from "./Ticket";
import { AuthorizeContext } from "../App";

const chamadoServices = new ChamadoServices();

export const TicketList = () => {
  const [tickets, setTickets] = useState<any>([]);
  const [usuarioLogado, setUsuarioLogado] = useState<string>(localStorage.getItem("id") || "")

  const { nivelAcesso } = useContext(AuthorizeContext);

  useEffect(() => {
    getTickets();
    console.log(tickets);
  }, []);

  const getTickets = async () => {

    console.log(nivelAcesso)

    if(nivelAcesso === 'admin'){
      const resultado = await chamadoServices.getTickets();
      setTickets(resultado.data);
    }else{
      if(usuarioLogado !== ""){
        const resultado = await chamadoServices.getTickets(usuarioLogado);
        setTickets(resultado.data);
      }
    }

  };

  

  return (
    <div className="container-ticket-list scroll">
      { tickets && tickets.length > 0 ? 
      (tickets.map((ticket: any) => (
        <Ticket 
          key={ticket._id}
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
