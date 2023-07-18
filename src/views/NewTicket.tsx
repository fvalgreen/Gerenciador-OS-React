import { useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import imageIcon from "../assets/images/paisagem.svg";
import UploadImage from "../components/UploadImage";
import { ChamadoServices } from "../services/ChamadoServices";
import { useNavigate } from "react-router-dom";

const chamadoServices = new ChamadoServices();

const NewTicket = () => {
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const navigate = useNavigate();

  const createNewTicket = async () => {
    try {
      setLoading(true);
      const body = new FormData();
      
      if(title.trim().length < 6 || description.trim().length < 6 || location.trim().length < 3 || !title || !description || !location ){
        alert("Favor preencher os campos corretamente");
        setLoading(false);
        return;
      }
      body.append('titulo', title);
      body.append('descricao', description);
      body.append('local', location);

      if(image?.file){
        body.append('file', image.file);
      }

      await chamadoServices.openTicket(body);
      
      setLoading(false);
      navigate('/');
    } catch (erro) {
      setLoading(false);
      console.log(erro)
    }
  };

  return (
    <>
      <Header />
      <div className="new-ticket-container">
        <UploadImage
          setImage={setImage}
          source={image?.preview ? image.preview : imageIcon}
        />
        <form className="new-ticket-form">
          <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <input type="text" placeholder="Local" value={location} onChange={(e) => setLocation(e.target.value)}/>
          <textarea name="description" id="description" cols={40} rows={5} placeholder="Descrição do chamado" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </form>
        <button type="button" onClick={createNewTicket} disabled={loading} className={loading? 'disabled' : ''}>
            {loading ? "...Carregando" : "Abrir chamado"}
          </button>
      </div>
      <Footer />
    </>
  );
};

export default NewTicket;
