import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class MailService {

    private _mailApi = 'https://script.google.com/macros/s/AKfycbzkPZsrPYlnQQNTiCN-SSGjBaIyHj9Acli4ftGXFOqZp5Lq_ZFVPOXvfI-ZqTM87gfV/exec'

    public constructor(private readonly http: HttpClient){}

    public sendMail(input: FormData): Observable<{success: boolean, message: string}> {
        return this.http.post(this._mailApi, input).pipe(
            map((response:any) => {
                if (response["result"] == "success") {
                  return {success: true, message: `Thanks for the message! I'll get back to you as soon as possible.`};
                }
                else {
                    return {success: false, message: 'Oops, it looks like something went wrong. Please refresh the page and try again.'};
                }
              })
        )
    }
}