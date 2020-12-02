import { Observable, ObservableInput, SchedulerLike } from 'rxjs';
export declare function concat<T>(this: Observable<T>, scheduler?: SchedulerLike): Observable<T>;
export declare function concat<T, T2>(this: Observable<T>, v2: ObservableInput<T2>, scheduler?: SchedulerLike): Observable<T | T2>;
export declare function concat<T, T2, T3>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler?: SchedulerLike): Observable<T | T2 | T3>;
export declare function concat<T, T2, T3, T4>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4>;
export declare function concat<T, T2, T3, T4, T5>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4 | T5>;
export declare function concat<T, T2, T3, T4, T5, T6>(this: Observable<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler?: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6>;
export declare function concat<T>(this: Observable<T>, ...observables: Array<ObservableInput<T> | SchedulerLike>): Observable<T>;
export declare function concat<T, R>(this: Observable<T>, ...observables: Array<ObservableInput<any> | SchedulerLike>): Observable<R>;
