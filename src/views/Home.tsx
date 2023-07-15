import AddTicket from "../components/AddTicket";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { TicketList } from "../components/TicketList";

const Home = () => {
  return (
    <>
      <Header />
      {/* Dashboard completo no desktop e um compilado no mobile com os dados do usuário*/}
      <TicketList />
      <AddTicket />
      <Footer />
    </>
  );
};

export default Home;
