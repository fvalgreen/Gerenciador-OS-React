import { HttpApiServices } from "./HttpApiServices";

export class AuthServices extends HttpApiServices {
  async login(body: any, setToken: any) {
    const { data } = await this.post("/login", body);

    if (data) {
      localStorage.setItem("nome", data.nome);
      localStorage.setItem("token", data.token);
      localStorage.setItem("nivelAcesso", data.nivelAcesso);
      localStorage.setItem("email", data.email);
      localStorage.setItem("id", data.id);
    }
    setToken(data.token);
  }

  logout(setToken: any) {
    localStorage.clear();
    setToken('')
  }

  register(body: any){
    return this.post('/cadastro', body)
  }
}
