import {CrudAwareResource} from './CrudAwareResource';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CrudQueryParams} from './CrudQueryParams';
import {CrudQueryStringBuilder} from './CrudQueryStringFactory';

export class CrudResource<T> implements CrudAwareResource<T> {

    constructor(private URL: string,
                private readonly httpClient: HttpClient) {
    }

    create<K>(payload: K, query?: CrudQueryParams): Observable<T> {
        return this.httpClient.post<T>(this.URL + CrudQueryStringBuilder.build(query), payload);
    }

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<T[]> {
        return undefined;
    }

    delete(id: string, query?: CrudQueryParams): Observable<void> {
        return undefined;
    }

    get(id: string, query?: CrudQueryParams): Observable<T> {
        return this.httpClient.get<T>(`${this.URL}/${id}${CrudQueryStringBuilder.build(query)}`);
    }

    getMany(query?: CrudQueryParams): Observable<T[]> {
        return this.httpClient.get<T[]>(`${this.URL}${CrudQueryStringBuilder.build(query)}`);
    }

    update<K>(payload: K, query?: CrudQueryParams): Observable<T> {
        return undefined;
    }
}
