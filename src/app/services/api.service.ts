import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:8080/VMS/index.php/';

  constructor(private httpClient: HttpClient) {}

  post(endpoint: string, body: any, params?: any, reqOpts?: any): Observable<any> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams(),
      };
    }

    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.httpClient.post(this.url + endpoint, body, reqOpts);
  }


  /**
   * Update department by dept_id and name
   */
  updateDepartment(departmentId: string, departmentName: string): Observable<any> {
    return this.httpClient.post(`${this.url}DepartmentController/update_department`, {
      dept_id: departmentId,
      name: departmentName
    });
  }

  deleteDepartment(departmentId: string): Observable<any> {
    return this.httpClient.post(`${this.url}DepartmentController/delete_department`, {
      dept_id: departmentId
    });
  }
}
