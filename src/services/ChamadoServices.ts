import { HttpApiServices } from "./HttpApiServices";

export class ChamadoServices extends HttpApiServices {
  async openTicket(body: any){
    return this.post('/chamados', body);
  }

  async getTickets(id?: string){
    var url = '/chamados';

    if(id){
      url += `?id=${id}`;
    }

    return this.get(url);
  }

  async editTicket(body: any, idTicket: string){
    return this.put(`/chamados?id=${idTicket}`, body);
  }
}
