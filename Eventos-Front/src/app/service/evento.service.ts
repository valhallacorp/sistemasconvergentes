import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders,HttpResponse, HttpRequest} from '@angular/common/http';

import {Evento} from '../model/evento.model';

const httpOptions = {

    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class EventoService{
    constructor(private http: HttpClient){}

private eventoInfUrl = 'http://localhost:8086/cadastrarEvento';



public createEvento(evento){

    return this.http.post<Evento>(this.eventoInfUrl, JSON.stringify({
        codigo: evento.codigo,
        nome: evento.nome,
        local: evento.local,
        data: evento.data,
        horario: evento.horario
      }),
    );
}
 

postEvento(evento: Evento): Observable<HttpResponse<Evento>> {
    const httpHeaders = new HttpHeaders({
         'Content-Type' : 'application/json'
    });
    return this.http.post<Evento>(this.eventoInfUrl, JSON.stringify({
        nome: evento.nome,
        local: evento.local,
        data: evento.data,
        horario: evento.horario
      }),
        {
          headers: httpHeaders,
          observe: 'response'
        }
    );
}

}