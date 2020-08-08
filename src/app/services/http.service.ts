
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class CommonServiceService {
    cachedData: any;

    constructor(
        private http: HttpClient,
    ) {
    }
    // Common API cal function for GET and POST methods.
    doAsyncTask(httpType, endPoint, reqData = {}): Observable<any> {
        let apiBaseUrl = ''
        const headers = new HttpHeaders({
            "Content-Type": "application/json;charset=UTF-8",
            "Cache-Control": "no-cache, no-store",
            Expires: "-1",
            Pragma: "no-cache",
            "If-Modified-Since": "0",

        });
        switch (httpType) {
            case "GET":
                return this.http.get(endPoint, { headers: headers }).pipe(
                    map(
                        response => {
                            return response;
                        },
                        err => {
                            return err;
                        }
                    )
                );

            case "POST":
                return this.http
                    .post(apiBaseUrl + endPoint, reqData, { headers: headers })
                    .pipe(
                        map(
                            response => {
                                return response;
                            },
                            err => {
                                return err;
                            }
                        )
                    );
        }
    }
    setcacheData(data) {
        this.cachedData = data;
    }

    getCachedData() {
        return this.cachedData;
    }
}
