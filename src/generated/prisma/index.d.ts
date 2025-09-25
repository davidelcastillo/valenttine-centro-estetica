
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Provincia
 * 
 */
export type Provincia = $Result.DefaultSelection<Prisma.$ProvinciaPayload>
/**
 * Model Localidad
 * 
 */
export type Localidad = $Result.DefaultSelection<Prisma.$LocalidadPayload>
/**
 * Model ObraSocial
 * 
 */
export type ObraSocial = $Result.DefaultSelection<Prisma.$ObraSocialPayload>
/**
 * Model Prestacion
 * 
 */
export type Prestacion = $Result.DefaultSelection<Prisma.$PrestacionPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Profesional
 * 
 */
export type Profesional = $Result.DefaultSelection<Prisma.$ProfesionalPayload>
/**
 * Model PrestacionXProfesional
 * 
 */
export type PrestacionXProfesional = $Result.DefaultSelection<Prisma.$PrestacionXProfesionalPayload>
/**
 * Model ObraSocialXProfesional
 * 
 */
export type ObraSocialXProfesional = $Result.DefaultSelection<Prisma.$ObraSocialXProfesionalPayload>
/**
 * Model Turno
 * 
 */
export type Turno = $Result.DefaultSelection<Prisma.$TurnoPayload>
/**
 * Model DetalleTurno
 * 
 */
export type DetalleTurno = $Result.DefaultSelection<Prisma.$DetalleTurnoPayload>
/**
 * Model CentroMedico
 * 
 */
export type CentroMedico = $Result.DefaultSelection<Prisma.$CentroMedicoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  RECEPCIONISTA: 'RECEPCIONISTA',
  MEDICO: 'MEDICO',
  GERENTE: 'GERENTE'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Genero: {
  FEMENINO: 'FEMENINO',
  MASCULINO: 'MASCULINO',
  OTRO: 'OTRO'
};

export type Genero = (typeof Genero)[keyof typeof Genero]


export const EstadoCivil: {
  SOLTERO: 'SOLTERO',
  CASADO: 'CASADO',
  DIVORCIADO: 'DIVORCIADO',
  VIUDO: 'VIUDO',
  UNION_LIBRE: 'UNION_LIBRE'
};

export type EstadoCivil = (typeof EstadoCivil)[keyof typeof EstadoCivil]


export const EstadoPaciente: {
  ACTIVO: 'ACTIVO',
  INACTIVO: 'INACTIVO',
  SUSPENDIDO: 'SUSPENDIDO',
  FALLECIDO: 'FALLECIDO'
};

export type EstadoPaciente = (typeof EstadoPaciente)[keyof typeof EstadoPaciente]


export const EstadoTurno: {
  PENDIENTE: 'PENDIENTE',
  CONFIRMADO: 'CONFIRMADO',
  CANCELADO: 'CANCELADO',
  COMPLETADO: 'COMPLETADO'
};

export type EstadoTurno = (typeof EstadoTurno)[keyof typeof EstadoTurno]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Genero = $Enums.Genero

export const Genero: typeof $Enums.Genero

export type EstadoCivil = $Enums.EstadoCivil

export const EstadoCivil: typeof $Enums.EstadoCivil

export type EstadoPaciente = $Enums.EstadoPaciente

export const EstadoPaciente: typeof $Enums.EstadoPaciente

export type EstadoTurno = $Enums.EstadoTurno

export const EstadoTurno: typeof $Enums.EstadoTurno

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provincia`: Exposes CRUD operations for the **Provincia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provincias
    * const provincias = await prisma.provincia.findMany()
    * ```
    */
  get provincia(): Prisma.ProvinciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localidad`: Exposes CRUD operations for the **Localidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localidads
    * const localidads = await prisma.localidad.findMany()
    * ```
    */
  get localidad(): Prisma.LocalidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obraSocial`: Exposes CRUD operations for the **ObraSocial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObraSocials
    * const obraSocials = await prisma.obraSocial.findMany()
    * ```
    */
  get obraSocial(): Prisma.ObraSocialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestacion`: Exposes CRUD operations for the **Prestacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestacions
    * const prestacions = await prisma.prestacion.findMany()
    * ```
    */
  get prestacion(): Prisma.PrestacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profesional`: Exposes CRUD operations for the **Profesional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profesionals
    * const profesionals = await prisma.profesional.findMany()
    * ```
    */
  get profesional(): Prisma.ProfesionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestacionXProfesional`: Exposes CRUD operations for the **PrestacionXProfesional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrestacionXProfesionals
    * const prestacionXProfesionals = await prisma.prestacionXProfesional.findMany()
    * ```
    */
  get prestacionXProfesional(): Prisma.PrestacionXProfesionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obraSocialXProfesional`: Exposes CRUD operations for the **ObraSocialXProfesional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObraSocialXProfesionals
    * const obraSocialXProfesionals = await prisma.obraSocialXProfesional.findMany()
    * ```
    */
  get obraSocialXProfesional(): Prisma.ObraSocialXProfesionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turno`: Exposes CRUD operations for the **Turno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turnos
    * const turnos = await prisma.turno.findMany()
    * ```
    */
  get turno(): Prisma.TurnoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleTurno`: Exposes CRUD operations for the **DetalleTurno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleTurnos
    * const detalleTurnos = await prisma.detalleTurno.findMany()
    * ```
    */
  get detalleTurno(): Prisma.DetalleTurnoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centroMedico`: Exposes CRUD operations for the **CentroMedico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CentroMedicos
    * const centroMedicos = await prisma.centroMedico.findMany()
    * ```
    */
  get centroMedico(): Prisma.CentroMedicoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Provincia: 'Provincia',
    Localidad: 'Localidad',
    ObraSocial: 'ObraSocial',
    Prestacion: 'Prestacion',
    Paciente: 'Paciente',
    Profesional: 'Profesional',
    PrestacionXProfesional: 'PrestacionXProfesional',
    ObraSocialXProfesional: 'ObraSocialXProfesional',
    Turno: 'Turno',
    DetalleTurno: 'DetalleTurno',
    CentroMedico: 'CentroMedico'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "provincia" | "localidad" | "obraSocial" | "prestacion" | "paciente" | "profesional" | "prestacionXProfesional" | "obraSocialXProfesional" | "turno" | "detalleTurno" | "centroMedico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Provincia: {
        payload: Prisma.$ProvinciaPayload<ExtArgs>
        fields: Prisma.ProvinciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          findFirst: {
            args: Prisma.ProvinciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          findMany: {
            args: Prisma.ProvinciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>[]
          }
          create: {
            args: Prisma.ProvinciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          createMany: {
            args: Prisma.ProvinciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvinciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>[]
          }
          delete: {
            args: Prisma.ProvinciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          update: {
            args: Prisma.ProvinciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          deleteMany: {
            args: Prisma.ProvinciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvinciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>[]
          }
          upsert: {
            args: Prisma.ProvinciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvinciaPayload>
          }
          aggregate: {
            args: Prisma.ProvinciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvincia>
          }
          groupBy: {
            args: Prisma.ProvinciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinciaCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinciaCountAggregateOutputType> | number
          }
        }
      }
      Localidad: {
        payload: Prisma.$LocalidadPayload<ExtArgs>
        fields: Prisma.LocalidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          findFirst: {
            args: Prisma.LocalidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          findMany: {
            args: Prisma.LocalidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>[]
          }
          create: {
            args: Prisma.LocalidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          createMany: {
            args: Prisma.LocalidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>[]
          }
          delete: {
            args: Prisma.LocalidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          update: {
            args: Prisma.LocalidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          deleteMany: {
            args: Prisma.LocalidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>[]
          }
          upsert: {
            args: Prisma.LocalidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalidadPayload>
          }
          aggregate: {
            args: Prisma.LocalidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalidad>
          }
          groupBy: {
            args: Prisma.LocalidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalidadCountArgs<ExtArgs>
            result: $Utils.Optional<LocalidadCountAggregateOutputType> | number
          }
        }
      }
      ObraSocial: {
        payload: Prisma.$ObraSocialPayload<ExtArgs>
        fields: Prisma.ObraSocialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObraSocialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObraSocialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          findFirst: {
            args: Prisma.ObraSocialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObraSocialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          findMany: {
            args: Prisma.ObraSocialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>[]
          }
          create: {
            args: Prisma.ObraSocialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          createMany: {
            args: Prisma.ObraSocialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObraSocialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>[]
          }
          delete: {
            args: Prisma.ObraSocialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          update: {
            args: Prisma.ObraSocialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          deleteMany: {
            args: Prisma.ObraSocialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObraSocialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObraSocialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>[]
          }
          upsert: {
            args: Prisma.ObraSocialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          aggregate: {
            args: Prisma.ObraSocialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObraSocial>
          }
          groupBy: {
            args: Prisma.ObraSocialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObraSocialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObraSocialCountArgs<ExtArgs>
            result: $Utils.Optional<ObraSocialCountAggregateOutputType> | number
          }
        }
      }
      Prestacion: {
        payload: Prisma.$PrestacionPayload<ExtArgs>
        fields: Prisma.PrestacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrestacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrestacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>
          }
          findFirst: {
            args: Prisma.PrestacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrestacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>
          }
          findMany: {
            args: Prisma.PrestacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>[]
          }
          create: {
            args: Prisma.PrestacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>
          }
          createMany: {
            args: Prisma.PrestacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrestacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>[]
          }
          delete: {
            args: Prisma.PrestacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>
          }
          update: {
            args: Prisma.PrestacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>
          }
          deleteMany: {
            args: Prisma.PrestacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrestacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrestacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>[]
          }
          upsert: {
            args: Prisma.PrestacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionPayload>
          }
          aggregate: {
            args: Prisma.PrestacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestacion>
          }
          groupBy: {
            args: Prisma.PrestacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrestacionCountArgs<ExtArgs>
            result: $Utils.Optional<PrestacionCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Profesional: {
        payload: Prisma.$ProfesionalPayload<ExtArgs>
        fields: Prisma.ProfesionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfesionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfesionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          findFirst: {
            args: Prisma.ProfesionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfesionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          findMany: {
            args: Prisma.ProfesionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>[]
          }
          create: {
            args: Prisma.ProfesionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          createMany: {
            args: Prisma.ProfesionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfesionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>[]
          }
          delete: {
            args: Prisma.ProfesionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          update: {
            args: Prisma.ProfesionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfesionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfesionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfesionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfesionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          aggregate: {
            args: Prisma.ProfesionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfesional>
          }
          groupBy: {
            args: Prisma.ProfesionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfesionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfesionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfesionalCountAggregateOutputType> | number
          }
        }
      }
      PrestacionXProfesional: {
        payload: Prisma.$PrestacionXProfesionalPayload<ExtArgs>
        fields: Prisma.PrestacionXProfesionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrestacionXProfesionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrestacionXProfesionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>
          }
          findFirst: {
            args: Prisma.PrestacionXProfesionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrestacionXProfesionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>
          }
          findMany: {
            args: Prisma.PrestacionXProfesionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>[]
          }
          create: {
            args: Prisma.PrestacionXProfesionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>
          }
          createMany: {
            args: Prisma.PrestacionXProfesionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrestacionXProfesionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>[]
          }
          delete: {
            args: Prisma.PrestacionXProfesionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>
          }
          update: {
            args: Prisma.PrestacionXProfesionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>
          }
          deleteMany: {
            args: Prisma.PrestacionXProfesionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrestacionXProfesionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrestacionXProfesionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>[]
          }
          upsert: {
            args: Prisma.PrestacionXProfesionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrestacionXProfesionalPayload>
          }
          aggregate: {
            args: Prisma.PrestacionXProfesionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestacionXProfesional>
          }
          groupBy: {
            args: Prisma.PrestacionXProfesionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestacionXProfesionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrestacionXProfesionalCountArgs<ExtArgs>
            result: $Utils.Optional<PrestacionXProfesionalCountAggregateOutputType> | number
          }
        }
      }
      ObraSocialXProfesional: {
        payload: Prisma.$ObraSocialXProfesionalPayload<ExtArgs>
        fields: Prisma.ObraSocialXProfesionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObraSocialXProfesionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObraSocialXProfesionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>
          }
          findFirst: {
            args: Prisma.ObraSocialXProfesionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObraSocialXProfesionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>
          }
          findMany: {
            args: Prisma.ObraSocialXProfesionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>[]
          }
          create: {
            args: Prisma.ObraSocialXProfesionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>
          }
          createMany: {
            args: Prisma.ObraSocialXProfesionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObraSocialXProfesionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>[]
          }
          delete: {
            args: Prisma.ObraSocialXProfesionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>
          }
          update: {
            args: Prisma.ObraSocialXProfesionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>
          }
          deleteMany: {
            args: Prisma.ObraSocialXProfesionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObraSocialXProfesionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObraSocialXProfesionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>[]
          }
          upsert: {
            args: Prisma.ObraSocialXProfesionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialXProfesionalPayload>
          }
          aggregate: {
            args: Prisma.ObraSocialXProfesionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObraSocialXProfesional>
          }
          groupBy: {
            args: Prisma.ObraSocialXProfesionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObraSocialXProfesionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObraSocialXProfesionalCountArgs<ExtArgs>
            result: $Utils.Optional<ObraSocialXProfesionalCountAggregateOutputType> | number
          }
        }
      }
      Turno: {
        payload: Prisma.$TurnoPayload<ExtArgs>
        fields: Prisma.TurnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findFirst: {
            args: Prisma.TurnoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          findMany: {
            args: Prisma.TurnoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          create: {
            args: Prisma.TurnoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          createMany: {
            args: Prisma.TurnoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurnoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          delete: {
            args: Prisma.TurnoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          update: {
            args: Prisma.TurnoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          deleteMany: {
            args: Prisma.TurnoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TurnoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>[]
          }
          upsert: {
            args: Prisma.TurnoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPayload>
          }
          aggregate: {
            args: Prisma.TurnoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurno>
          }
          groupBy: {
            args: Prisma.TurnoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnoCountArgs<ExtArgs>
            result: $Utils.Optional<TurnoCountAggregateOutputType> | number
          }
        }
      }
      DetalleTurno: {
        payload: Prisma.$DetalleTurnoPayload<ExtArgs>
        fields: Prisma.DetalleTurnoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleTurnoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleTurnoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>
          }
          findFirst: {
            args: Prisma.DetalleTurnoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleTurnoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>
          }
          findMany: {
            args: Prisma.DetalleTurnoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>[]
          }
          create: {
            args: Prisma.DetalleTurnoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>
          }
          createMany: {
            args: Prisma.DetalleTurnoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleTurnoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>[]
          }
          delete: {
            args: Prisma.DetalleTurnoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>
          }
          update: {
            args: Prisma.DetalleTurnoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>
          }
          deleteMany: {
            args: Prisma.DetalleTurnoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleTurnoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleTurnoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>[]
          }
          upsert: {
            args: Prisma.DetalleTurnoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleTurnoPayload>
          }
          aggregate: {
            args: Prisma.DetalleTurnoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleTurno>
          }
          groupBy: {
            args: Prisma.DetalleTurnoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleTurnoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleTurnoCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleTurnoCountAggregateOutputType> | number
          }
        }
      }
      CentroMedico: {
        payload: Prisma.$CentroMedicoPayload<ExtArgs>
        fields: Prisma.CentroMedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CentroMedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CentroMedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>
          }
          findFirst: {
            args: Prisma.CentroMedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CentroMedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>
          }
          findMany: {
            args: Prisma.CentroMedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>[]
          }
          create: {
            args: Prisma.CentroMedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>
          }
          createMany: {
            args: Prisma.CentroMedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CentroMedicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>[]
          }
          delete: {
            args: Prisma.CentroMedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>
          }
          update: {
            args: Prisma.CentroMedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>
          }
          deleteMany: {
            args: Prisma.CentroMedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CentroMedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CentroMedicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>[]
          }
          upsert: {
            args: Prisma.CentroMedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CentroMedicoPayload>
          }
          aggregate: {
            args: Prisma.CentroMedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentroMedico>
          }
          groupBy: {
            args: Prisma.CentroMedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CentroMedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CentroMedicoCountArgs<ExtArgs>
            result: $Utils.Optional<CentroMedicoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    provincia?: ProvinciaOmit
    localidad?: LocalidadOmit
    obraSocial?: ObraSocialOmit
    prestacion?: PrestacionOmit
    paciente?: PacienteOmit
    profesional?: ProfesionalOmit
    prestacionXProfesional?: PrestacionXProfesionalOmit
    obraSocialXProfesional?: ObraSocialXProfesionalOmit
    turno?: TurnoOmit
    detalleTurno?: DetalleTurnoOmit
    centroMedico?: CentroMedicoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    pacientesCreados: number
    profesionalesCreados: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientesCreados?: boolean | UsuarioCountOutputTypeCountPacientesCreadosArgs
    profesionalesCreados?: boolean | UsuarioCountOutputTypeCountProfesionalesCreadosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPacientesCreadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProfesionalesCreadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesionalWhereInput
  }


  /**
   * Count Type ProvinciaCountOutputType
   */

  export type ProvinciaCountOutputType = {
    pacientes: number
    profesionales: number
    localidades: number
  }

  export type ProvinciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | ProvinciaCountOutputTypeCountPacientesArgs
    profesionales?: boolean | ProvinciaCountOutputTypeCountProfesionalesArgs
    localidades?: boolean | ProvinciaCountOutputTypeCountLocalidadesArgs
  }

  // Custom InputTypes
  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinciaCountOutputType
     */
    select?: ProvinciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeCountProfesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesionalWhereInput
  }

  /**
   * ProvinciaCountOutputType without action
   */
  export type ProvinciaCountOutputTypeCountLocalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalidadWhereInput
  }


  /**
   * Count Type LocalidadCountOutputType
   */

  export type LocalidadCountOutputType = {
    pacientes: number
    profesionales: number
  }

  export type LocalidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | LocalidadCountOutputTypeCountPacientesArgs
    profesionales?: boolean | LocalidadCountOutputTypeCountProfesionalesArgs
  }

  // Custom InputTypes
  /**
   * LocalidadCountOutputType without action
   */
  export type LocalidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalidadCountOutputType
     */
    select?: LocalidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalidadCountOutputType without action
   */
  export type LocalidadCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * LocalidadCountOutputType without action
   */
  export type LocalidadCountOutputTypeCountProfesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesionalWhereInput
  }


  /**
   * Count Type ObraSocialCountOutputType
   */

  export type ObraSocialCountOutputType = {
    pacientes: number
    profesionales: number
  }

  export type ObraSocialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | ObraSocialCountOutputTypeCountPacientesArgs
    profesionales?: boolean | ObraSocialCountOutputTypeCountProfesionalesArgs
  }

  // Custom InputTypes
  /**
   * ObraSocialCountOutputType without action
   */
  export type ObraSocialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialCountOutputType
     */
    select?: ObraSocialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObraSocialCountOutputType without action
   */
  export type ObraSocialCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }

  /**
   * ObraSocialCountOutputType without action
   */
  export type ObraSocialCountOutputTypeCountProfesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraSocialXProfesionalWhereInput
  }


  /**
   * Count Type PrestacionCountOutputType
   */

  export type PrestacionCountOutputType = {
    profesionales: number
  }

  export type PrestacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesionales?: boolean | PrestacionCountOutputTypeCountProfesionalesArgs
  }

  // Custom InputTypes
  /**
   * PrestacionCountOutputType without action
   */
  export type PrestacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionCountOutputType
     */
    select?: PrestacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrestacionCountOutputType without action
   */
  export type PrestacionCountOutputTypeCountProfesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestacionXProfesionalWhereInput
  }


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    turnos: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | PacienteCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }


  /**
   * Count Type ProfesionalCountOutputType
   */

  export type ProfesionalCountOutputType = {
    obrasSociales: number
    prestaciones: number
    turnos: number
  }

  export type ProfesionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obrasSociales?: boolean | ProfesionalCountOutputTypeCountObrasSocialesArgs
    prestaciones?: boolean | ProfesionalCountOutputTypeCountPrestacionesArgs
    turnos?: boolean | ProfesionalCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfesionalCountOutputType
     */
    select?: ProfesionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeCountObrasSocialesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraSocialXProfesionalWhereInput
  }

  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeCountPrestacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestacionXProfesionalWhereInput
  }

  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
  }


  /**
   * Count Type TurnoCountOutputType
   */

  export type TurnoCountOutputType = {
    detalles: number
  }

  export type TurnoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | TurnoCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoCountOutputType
     */
    select?: TurnoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurnoCountOutputType without action
   */
  export type TurnoCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleTurnoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    username: string | null
    contraseña: string | null
    rol: $Enums.Rol | null
    email: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    username: string | null
    contraseña: string | null
    rol: $Enums.Rol | null
    email: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    username: number
    contraseña: number
    rol: number
    email: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    username?: true
    contraseña?: true
    rol?: true
    email?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    username?: true
    contraseña?: true
    rol?: true
    email?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    username?: true
    contraseña?: true
    rol?: true
    email?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn: Date
    actualizadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    contraseña?: boolean
    rol?: boolean
    email?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    profesional?: boolean | Usuario$profesionalArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
    pacientesCreados?: boolean | Usuario$pacientesCreadosArgs<ExtArgs>
    profesionalesCreados?: boolean | Usuario$profesionalesCreadosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    contraseña?: boolean
    rol?: boolean
    email?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    contraseña?: boolean
    rol?: boolean
    email?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    username?: boolean
    contraseña?: boolean
    rol?: boolean
    email?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "contraseña" | "rol" | "email" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesional?: boolean | Usuario$profesionalArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
    pacientesCreados?: boolean | Usuario$pacientesCreadosArgs<ExtArgs>
    profesionalesCreados?: boolean | Usuario$profesionalesCreadosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      profesional: Prisma.$ProfesionalPayload<ExtArgs> | null
      paciente: Prisma.$PacientePayload<ExtArgs> | null
      pacientesCreados: Prisma.$PacientePayload<ExtArgs>[]
      profesionalesCreados: Prisma.$ProfesionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      contraseña: string
      rol: $Enums.Rol
      email: string
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profesional<T extends Usuario$profesionalArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$profesionalArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paciente<T extends Usuario$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pacientesCreados<T extends Usuario$pacientesCreadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pacientesCreadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profesionalesCreados<T extends Usuario$profesionalesCreadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$profesionalesCreadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.profesional
   */
  export type Usuario$profesionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    where?: ProfesionalWhereInput
  }

  /**
   * Usuario.paciente
   */
  export type Usuario$pacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }

  /**
   * Usuario.pacientesCreados
   */
  export type Usuario$pacientesCreadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Usuario.profesionalesCreados
   */
  export type Usuario$profesionalesCreadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    where?: ProfesionalWhereInput
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    cursor?: ProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Provincia
   */

  export type AggregateProvincia = {
    _count: ProvinciaCountAggregateOutputType | null
    _avg: ProvinciaAvgAggregateOutputType | null
    _sum: ProvinciaSumAggregateOutputType | null
    _min: ProvinciaMinAggregateOutputType | null
    _max: ProvinciaMaxAggregateOutputType | null
  }

  export type ProvinciaAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvinciaSumAggregateOutputType = {
    id: number | null
  }

  export type ProvinciaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ProvinciaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ProvinciaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ProvinciaAvgAggregateInputType = {
    id?: true
  }

  export type ProvinciaSumAggregateInputType = {
    id?: true
  }

  export type ProvinciaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ProvinciaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ProvinciaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ProvinciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provincia to aggregate.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provincias
    **/
    _count?: true | ProvinciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvinciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvinciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinciaMaxAggregateInputType
  }

  export type GetProvinciaAggregateType<T extends ProvinciaAggregateArgs> = {
        [P in keyof T & keyof AggregateProvincia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvincia[P]>
      : GetScalarType<T[P], AggregateProvincia[P]>
  }




  export type ProvinciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinciaWhereInput
    orderBy?: ProvinciaOrderByWithAggregationInput | ProvinciaOrderByWithAggregationInput[]
    by: ProvinciaScalarFieldEnum[] | ProvinciaScalarFieldEnum
    having?: ProvinciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinciaCountAggregateInputType | true
    _avg?: ProvinciaAvgAggregateInputType
    _sum?: ProvinciaSumAggregateInputType
    _min?: ProvinciaMinAggregateInputType
    _max?: ProvinciaMaxAggregateInputType
  }

  export type ProvinciaGroupByOutputType = {
    id: number
    nombre: string
    _count: ProvinciaCountAggregateOutputType | null
    _avg: ProvinciaAvgAggregateOutputType | null
    _sum: ProvinciaSumAggregateOutputType | null
    _min: ProvinciaMinAggregateOutputType | null
    _max: ProvinciaMaxAggregateOutputType | null
  }

  type GetProvinciaGroupByPayload<T extends ProvinciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinciaGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinciaGroupByOutputType[P]>
        }
      >
    >


  export type ProvinciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    pacientes?: boolean | Provincia$pacientesArgs<ExtArgs>
    profesionales?: boolean | Provincia$profesionalesArgs<ExtArgs>
    localidades?: boolean | Provincia$localidadesArgs<ExtArgs>
    _count?: boolean | ProvinciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provincia"]>

  export type ProvinciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["provincia"]>

  export type ProvinciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["provincia"]>

  export type ProvinciaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ProvinciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["provincia"]>
  export type ProvinciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | Provincia$pacientesArgs<ExtArgs>
    profesionales?: boolean | Provincia$profesionalesArgs<ExtArgs>
    localidades?: boolean | Provincia$localidadesArgs<ExtArgs>
    _count?: boolean | ProvinciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvinciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProvinciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProvinciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provincia"
    objects: {
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
      profesionales: Prisma.$ProfesionalPayload<ExtArgs>[]
      localidades: Prisma.$LocalidadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["provincia"]>
    composites: {}
  }

  type ProvinciaGetPayload<S extends boolean | null | undefined | ProvinciaDefaultArgs> = $Result.GetResult<Prisma.$ProvinciaPayload, S>

  type ProvinciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvinciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvinciaCountAggregateInputType | true
    }

  export interface ProvinciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provincia'], meta: { name: 'Provincia' } }
    /**
     * Find zero or one Provincia that matches the filter.
     * @param {ProvinciaFindUniqueArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinciaFindUniqueArgs>(args: SelectSubset<T, ProvinciaFindUniqueArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provincia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvinciaFindUniqueOrThrowArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinciaFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provincia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindFirstArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinciaFindFirstArgs>(args?: SelectSubset<T, ProvinciaFindFirstArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provincia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindFirstOrThrowArgs} args - Arguments to find a Provincia
     * @example
     * // Get one Provincia
     * const provincia = await prisma.provincia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinciaFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provincias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provincias
     * const provincias = await prisma.provincia.findMany()
     * 
     * // Get first 10 Provincias
     * const provincias = await prisma.provincia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinciaWithIdOnly = await prisma.provincia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinciaFindManyArgs>(args?: SelectSubset<T, ProvinciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provincia.
     * @param {ProvinciaCreateArgs} args - Arguments to create a Provincia.
     * @example
     * // Create one Provincia
     * const Provincia = await prisma.provincia.create({
     *   data: {
     *     // ... data to create a Provincia
     *   }
     * })
     * 
     */
    create<T extends ProvinciaCreateArgs>(args: SelectSubset<T, ProvinciaCreateArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provincias.
     * @param {ProvinciaCreateManyArgs} args - Arguments to create many Provincias.
     * @example
     * // Create many Provincias
     * const provincia = await prisma.provincia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinciaCreateManyArgs>(args?: SelectSubset<T, ProvinciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provincias and returns the data saved in the database.
     * @param {ProvinciaCreateManyAndReturnArgs} args - Arguments to create many Provincias.
     * @example
     * // Create many Provincias
     * const provincia = await prisma.provincia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provincias and only return the `id`
     * const provinciaWithIdOnly = await prisma.provincia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvinciaCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvinciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provincia.
     * @param {ProvinciaDeleteArgs} args - Arguments to delete one Provincia.
     * @example
     * // Delete one Provincia
     * const Provincia = await prisma.provincia.delete({
     *   where: {
     *     // ... filter to delete one Provincia
     *   }
     * })
     * 
     */
    delete<T extends ProvinciaDeleteArgs>(args: SelectSubset<T, ProvinciaDeleteArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provincia.
     * @param {ProvinciaUpdateArgs} args - Arguments to update one Provincia.
     * @example
     * // Update one Provincia
     * const provincia = await prisma.provincia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinciaUpdateArgs>(args: SelectSubset<T, ProvinciaUpdateArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provincias.
     * @param {ProvinciaDeleteManyArgs} args - Arguments to filter Provincias to delete.
     * @example
     * // Delete a few Provincias
     * const { count } = await prisma.provincia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinciaDeleteManyArgs>(args?: SelectSubset<T, ProvinciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provincias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provincias
     * const provincia = await prisma.provincia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinciaUpdateManyArgs>(args: SelectSubset<T, ProvinciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provincias and returns the data updated in the database.
     * @param {ProvinciaUpdateManyAndReturnArgs} args - Arguments to update many Provincias.
     * @example
     * // Update many Provincias
     * const provincia = await prisma.provincia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provincias and only return the `id`
     * const provinciaWithIdOnly = await prisma.provincia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvinciaUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvinciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provincia.
     * @param {ProvinciaUpsertArgs} args - Arguments to update or create a Provincia.
     * @example
     * // Update or create a Provincia
     * const provincia = await prisma.provincia.upsert({
     *   create: {
     *     // ... data to create a Provincia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provincia we want to update
     *   }
     * })
     */
    upsert<T extends ProvinciaUpsertArgs>(args: SelectSubset<T, ProvinciaUpsertArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provincias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaCountArgs} args - Arguments to filter Provincias to count.
     * @example
     * // Count the number of Provincias
     * const count = await prisma.provincia.count({
     *   where: {
     *     // ... the filter for the Provincias we want to count
     *   }
     * })
    **/
    count<T extends ProvinciaCountArgs>(
      args?: Subset<T, ProvinciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provincia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvinciaAggregateArgs>(args: Subset<T, ProvinciaAggregateArgs>): Prisma.PrismaPromise<GetProvinciaAggregateType<T>>

    /**
     * Group by Provincia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvinciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinciaGroupByArgs['orderBy'] }
        : { orderBy?: ProvinciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvinciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provincia model
   */
  readonly fields: ProvinciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provincia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends Provincia$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Provincia$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profesionales<T extends Provincia$profesionalesArgs<ExtArgs> = {}>(args?: Subset<T, Provincia$profesionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    localidades<T extends Provincia$localidadesArgs<ExtArgs> = {}>(args?: Subset<T, Provincia$localidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provincia model
   */
  interface ProvinciaFieldRefs {
    readonly id: FieldRef<"Provincia", 'Int'>
    readonly nombre: FieldRef<"Provincia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Provincia findUnique
   */
  export type ProvinciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia findUniqueOrThrow
   */
  export type ProvinciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia findFirst
   */
  export type ProvinciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia findFirstOrThrow
   */
  export type ProvinciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincia to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provincias.
     */
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia findMany
   */
  export type ProvinciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter, which Provincias to fetch.
     */
    where?: ProvinciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provincias to fetch.
     */
    orderBy?: ProvinciaOrderByWithRelationInput | ProvinciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provincias.
     */
    cursor?: ProvinciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provincias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provincias.
     */
    skip?: number
    distinct?: ProvinciaScalarFieldEnum | ProvinciaScalarFieldEnum[]
  }

  /**
   * Provincia create
   */
  export type ProvinciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Provincia.
     */
    data: XOR<ProvinciaCreateInput, ProvinciaUncheckedCreateInput>
  }

  /**
   * Provincia createMany
   */
  export type ProvinciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provincias.
     */
    data: ProvinciaCreateManyInput | ProvinciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provincia createManyAndReturn
   */
  export type ProvinciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * The data used to create many Provincias.
     */
    data: ProvinciaCreateManyInput | ProvinciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provincia update
   */
  export type ProvinciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Provincia.
     */
    data: XOR<ProvinciaUpdateInput, ProvinciaUncheckedUpdateInput>
    /**
     * Choose, which Provincia to update.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia updateMany
   */
  export type ProvinciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provincias.
     */
    data: XOR<ProvinciaUpdateManyMutationInput, ProvinciaUncheckedUpdateManyInput>
    /**
     * Filter which Provincias to update
     */
    where?: ProvinciaWhereInput
    /**
     * Limit how many Provincias to update.
     */
    limit?: number
  }

  /**
   * Provincia updateManyAndReturn
   */
  export type ProvinciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * The data used to update Provincias.
     */
    data: XOR<ProvinciaUpdateManyMutationInput, ProvinciaUncheckedUpdateManyInput>
    /**
     * Filter which Provincias to update
     */
    where?: ProvinciaWhereInput
    /**
     * Limit how many Provincias to update.
     */
    limit?: number
  }

  /**
   * Provincia upsert
   */
  export type ProvinciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Provincia to update in case it exists.
     */
    where: ProvinciaWhereUniqueInput
    /**
     * In case the Provincia found by the `where` argument doesn't exist, create a new Provincia with this data.
     */
    create: XOR<ProvinciaCreateInput, ProvinciaUncheckedCreateInput>
    /**
     * In case the Provincia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinciaUpdateInput, ProvinciaUncheckedUpdateInput>
  }

  /**
   * Provincia delete
   */
  export type ProvinciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
    /**
     * Filter which Provincia to delete.
     */
    where: ProvinciaWhereUniqueInput
  }

  /**
   * Provincia deleteMany
   */
  export type ProvinciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provincias to delete
     */
    where?: ProvinciaWhereInput
    /**
     * Limit how many Provincias to delete.
     */
    limit?: number
  }

  /**
   * Provincia.pacientes
   */
  export type Provincia$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Provincia.profesionales
   */
  export type Provincia$profesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    where?: ProfesionalWhereInput
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    cursor?: ProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Provincia.localidades
   */
  export type Provincia$localidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    where?: LocalidadWhereInput
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    cursor?: LocalidadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * Provincia without action
   */
  export type ProvinciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provincia
     */
    select?: ProvinciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provincia
     */
    omit?: ProvinciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinciaInclude<ExtArgs> | null
  }


  /**
   * Model Localidad
   */

  export type AggregateLocalidad = {
    _count: LocalidadCountAggregateOutputType | null
    _avg: LocalidadAvgAggregateOutputType | null
    _sum: LocalidadSumAggregateOutputType | null
    _min: LocalidadMinAggregateOutputType | null
    _max: LocalidadMaxAggregateOutputType | null
  }

  export type LocalidadAvgAggregateOutputType = {
    id: number | null
    provinciaId: number | null
  }

  export type LocalidadSumAggregateOutputType = {
    id: number | null
    provinciaId: number | null
  }

  export type LocalidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    provinciaId: number | null
  }

  export type LocalidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    provinciaId: number | null
  }

  export type LocalidadCountAggregateOutputType = {
    id: number
    nombre: number
    provinciaId: number
    _all: number
  }


  export type LocalidadAvgAggregateInputType = {
    id?: true
    provinciaId?: true
  }

  export type LocalidadSumAggregateInputType = {
    id?: true
    provinciaId?: true
  }

  export type LocalidadMinAggregateInputType = {
    id?: true
    nombre?: true
    provinciaId?: true
  }

  export type LocalidadMaxAggregateInputType = {
    id?: true
    nombre?: true
    provinciaId?: true
  }

  export type LocalidadCountAggregateInputType = {
    id?: true
    nombre?: true
    provinciaId?: true
    _all?: true
  }

  export type LocalidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localidad to aggregate.
     */
    where?: LocalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidads to fetch.
     */
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localidads
    **/
    _count?: true | LocalidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalidadMaxAggregateInputType
  }

  export type GetLocalidadAggregateType<T extends LocalidadAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalidad[P]>
      : GetScalarType<T[P], AggregateLocalidad[P]>
  }




  export type LocalidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalidadWhereInput
    orderBy?: LocalidadOrderByWithAggregationInput | LocalidadOrderByWithAggregationInput[]
    by: LocalidadScalarFieldEnum[] | LocalidadScalarFieldEnum
    having?: LocalidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalidadCountAggregateInputType | true
    _avg?: LocalidadAvgAggregateInputType
    _sum?: LocalidadSumAggregateInputType
    _min?: LocalidadMinAggregateInputType
    _max?: LocalidadMaxAggregateInputType
  }

  export type LocalidadGroupByOutputType = {
    id: number
    nombre: string
    provinciaId: number
    _count: LocalidadCountAggregateOutputType | null
    _avg: LocalidadAvgAggregateOutputType | null
    _sum: LocalidadSumAggregateOutputType | null
    _min: LocalidadMinAggregateOutputType | null
    _max: LocalidadMaxAggregateOutputType | null
  }

  type GetLocalidadGroupByPayload<T extends LocalidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalidadGroupByOutputType[P]>
            : GetScalarType<T[P], LocalidadGroupByOutputType[P]>
        }
      >
    >


  export type LocalidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    provinciaId?: boolean
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    pacientes?: boolean | Localidad$pacientesArgs<ExtArgs>
    profesionales?: boolean | Localidad$profesionalesArgs<ExtArgs>
    _count?: boolean | LocalidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localidad"]>

  export type LocalidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    provinciaId?: boolean
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localidad"]>

  export type LocalidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    provinciaId?: boolean
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localidad"]>

  export type LocalidadSelectScalar = {
    id?: boolean
    nombre?: boolean
    provinciaId?: boolean
  }

  export type LocalidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "provinciaId", ExtArgs["result"]["localidad"]>
  export type LocalidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    pacientes?: boolean | Localidad$pacientesArgs<ExtArgs>
    profesionales?: boolean | Localidad$profesionalesArgs<ExtArgs>
    _count?: boolean | LocalidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocalidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
  }
  export type LocalidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
  }

  export type $LocalidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localidad"
    objects: {
      provincia: Prisma.$ProvinciaPayload<ExtArgs>
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
      profesionales: Prisma.$ProfesionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      provinciaId: number
    }, ExtArgs["result"]["localidad"]>
    composites: {}
  }

  type LocalidadGetPayload<S extends boolean | null | undefined | LocalidadDefaultArgs> = $Result.GetResult<Prisma.$LocalidadPayload, S>

  type LocalidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalidadCountAggregateInputType | true
    }

  export interface LocalidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localidad'], meta: { name: 'Localidad' } }
    /**
     * Find zero or one Localidad that matches the filter.
     * @param {LocalidadFindUniqueArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalidadFindUniqueArgs>(args: SelectSubset<T, LocalidadFindUniqueArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalidadFindUniqueOrThrowArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalidadFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadFindFirstArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalidadFindFirstArgs>(args?: SelectSubset<T, LocalidadFindFirstArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadFindFirstOrThrowArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalidadFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localidads
     * const localidads = await prisma.localidad.findMany()
     * 
     * // Get first 10 Localidads
     * const localidads = await prisma.localidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localidadWithIdOnly = await prisma.localidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalidadFindManyArgs>(args?: SelectSubset<T, LocalidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localidad.
     * @param {LocalidadCreateArgs} args - Arguments to create a Localidad.
     * @example
     * // Create one Localidad
     * const Localidad = await prisma.localidad.create({
     *   data: {
     *     // ... data to create a Localidad
     *   }
     * })
     * 
     */
    create<T extends LocalidadCreateArgs>(args: SelectSubset<T, LocalidadCreateArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localidads.
     * @param {LocalidadCreateManyArgs} args - Arguments to create many Localidads.
     * @example
     * // Create many Localidads
     * const localidad = await prisma.localidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalidadCreateManyArgs>(args?: SelectSubset<T, LocalidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localidads and returns the data saved in the database.
     * @param {LocalidadCreateManyAndReturnArgs} args - Arguments to create many Localidads.
     * @example
     * // Create many Localidads
     * const localidad = await prisma.localidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localidads and only return the `id`
     * const localidadWithIdOnly = await prisma.localidad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalidadCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Localidad.
     * @param {LocalidadDeleteArgs} args - Arguments to delete one Localidad.
     * @example
     * // Delete one Localidad
     * const Localidad = await prisma.localidad.delete({
     *   where: {
     *     // ... filter to delete one Localidad
     *   }
     * })
     * 
     */
    delete<T extends LocalidadDeleteArgs>(args: SelectSubset<T, LocalidadDeleteArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localidad.
     * @param {LocalidadUpdateArgs} args - Arguments to update one Localidad.
     * @example
     * // Update one Localidad
     * const localidad = await prisma.localidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalidadUpdateArgs>(args: SelectSubset<T, LocalidadUpdateArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localidads.
     * @param {LocalidadDeleteManyArgs} args - Arguments to filter Localidads to delete.
     * @example
     * // Delete a few Localidads
     * const { count } = await prisma.localidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalidadDeleteManyArgs>(args?: SelectSubset<T, LocalidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localidads
     * const localidad = await prisma.localidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalidadUpdateManyArgs>(args: SelectSubset<T, LocalidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localidads and returns the data updated in the database.
     * @param {LocalidadUpdateManyAndReturnArgs} args - Arguments to update many Localidads.
     * @example
     * // Update many Localidads
     * const localidad = await prisma.localidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localidads and only return the `id`
     * const localidadWithIdOnly = await prisma.localidad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocalidadUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Localidad.
     * @param {LocalidadUpsertArgs} args - Arguments to update or create a Localidad.
     * @example
     * // Update or create a Localidad
     * const localidad = await prisma.localidad.upsert({
     *   create: {
     *     // ... data to create a Localidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localidad we want to update
     *   }
     * })
     */
    upsert<T extends LocalidadUpsertArgs>(args: SelectSubset<T, LocalidadUpsertArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadCountArgs} args - Arguments to filter Localidads to count.
     * @example
     * // Count the number of Localidads
     * const count = await prisma.localidad.count({
     *   where: {
     *     // ... the filter for the Localidads we want to count
     *   }
     * })
    **/
    count<T extends LocalidadCountArgs>(
      args?: Subset<T, LocalidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalidadAggregateArgs>(args: Subset<T, LocalidadAggregateArgs>): Prisma.PrismaPromise<GetLocalidadAggregateType<T>>

    /**
     * Group by Localidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalidadGroupByArgs['orderBy'] }
        : { orderBy?: LocalidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localidad model
   */
  readonly fields: LocalidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provincia<T extends ProvinciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinciaDefaultArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends Localidad$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Localidad$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profesionales<T extends Localidad$profesionalesArgs<ExtArgs> = {}>(args?: Subset<T, Localidad$profesionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Localidad model
   */
  interface LocalidadFieldRefs {
    readonly id: FieldRef<"Localidad", 'Int'>
    readonly nombre: FieldRef<"Localidad", 'String'>
    readonly provinciaId: FieldRef<"Localidad", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Localidad findUnique
   */
  export type LocalidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidad to fetch.
     */
    where: LocalidadWhereUniqueInput
  }

  /**
   * Localidad findUniqueOrThrow
   */
  export type LocalidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidad to fetch.
     */
    where: LocalidadWhereUniqueInput
  }

  /**
   * Localidad findFirst
   */
  export type LocalidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidad to fetch.
     */
    where?: LocalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidads to fetch.
     */
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localidads.
     */
    cursor?: LocalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localidads.
     */
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * Localidad findFirstOrThrow
   */
  export type LocalidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidad to fetch.
     */
    where?: LocalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidads to fetch.
     */
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localidads.
     */
    cursor?: LocalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localidads.
     */
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * Localidad findMany
   */
  export type LocalidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter, which Localidads to fetch.
     */
    where?: LocalidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localidads to fetch.
     */
    orderBy?: LocalidadOrderByWithRelationInput | LocalidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localidads.
     */
    cursor?: LocalidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localidads.
     */
    skip?: number
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * Localidad create
   */
  export type LocalidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Localidad.
     */
    data: XOR<LocalidadCreateInput, LocalidadUncheckedCreateInput>
  }

  /**
   * Localidad createMany
   */
  export type LocalidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localidads.
     */
    data: LocalidadCreateManyInput | LocalidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localidad createManyAndReturn
   */
  export type LocalidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * The data used to create many Localidads.
     */
    data: LocalidadCreateManyInput | LocalidadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localidad update
   */
  export type LocalidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Localidad.
     */
    data: XOR<LocalidadUpdateInput, LocalidadUncheckedUpdateInput>
    /**
     * Choose, which Localidad to update.
     */
    where: LocalidadWhereUniqueInput
  }

  /**
   * Localidad updateMany
   */
  export type LocalidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localidads.
     */
    data: XOR<LocalidadUpdateManyMutationInput, LocalidadUncheckedUpdateManyInput>
    /**
     * Filter which Localidads to update
     */
    where?: LocalidadWhereInput
    /**
     * Limit how many Localidads to update.
     */
    limit?: number
  }

  /**
   * Localidad updateManyAndReturn
   */
  export type LocalidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * The data used to update Localidads.
     */
    data: XOR<LocalidadUpdateManyMutationInput, LocalidadUncheckedUpdateManyInput>
    /**
     * Filter which Localidads to update
     */
    where?: LocalidadWhereInput
    /**
     * Limit how many Localidads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localidad upsert
   */
  export type LocalidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Localidad to update in case it exists.
     */
    where: LocalidadWhereUniqueInput
    /**
     * In case the Localidad found by the `where` argument doesn't exist, create a new Localidad with this data.
     */
    create: XOR<LocalidadCreateInput, LocalidadUncheckedCreateInput>
    /**
     * In case the Localidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalidadUpdateInput, LocalidadUncheckedUpdateInput>
  }

  /**
   * Localidad delete
   */
  export type LocalidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
    /**
     * Filter which Localidad to delete.
     */
    where: LocalidadWhereUniqueInput
  }

  /**
   * Localidad deleteMany
   */
  export type LocalidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localidads to delete
     */
    where?: LocalidadWhereInput
    /**
     * Limit how many Localidads to delete.
     */
    limit?: number
  }

  /**
   * Localidad.pacientes
   */
  export type Localidad$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Localidad.profesionales
   */
  export type Localidad$profesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    where?: ProfesionalWhereInput
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    cursor?: ProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Localidad without action
   */
  export type LocalidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localidad
     */
    select?: LocalidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localidad
     */
    omit?: LocalidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalidadInclude<ExtArgs> | null
  }


  /**
   * Model ObraSocial
   */

  export type AggregateObraSocial = {
    _count: ObraSocialCountAggregateOutputType | null
    _avg: ObraSocialAvgAggregateOutputType | null
    _sum: ObraSocialSumAggregateOutputType | null
    _min: ObraSocialMinAggregateOutputType | null
    _max: ObraSocialMaxAggregateOutputType | null
  }

  export type ObraSocialAvgAggregateOutputType = {
    id: number | null
  }

  export type ObraSocialSumAggregateOutputType = {
    id: number | null
  }

  export type ObraSocialMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ObraSocialMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type ObraSocialCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ObraSocialAvgAggregateInputType = {
    id?: true
  }

  export type ObraSocialSumAggregateInputType = {
    id?: true
  }

  export type ObraSocialMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ObraSocialMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ObraSocialCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ObraSocialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObraSocial to aggregate.
     */
    where?: ObraSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocials to fetch.
     */
    orderBy?: ObraSocialOrderByWithRelationInput | ObraSocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObraSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObraSocials
    **/
    _count?: true | ObraSocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObraSocialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObraSocialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObraSocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObraSocialMaxAggregateInputType
  }

  export type GetObraSocialAggregateType<T extends ObraSocialAggregateArgs> = {
        [P in keyof T & keyof AggregateObraSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObraSocial[P]>
      : GetScalarType<T[P], AggregateObraSocial[P]>
  }




  export type ObraSocialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraSocialWhereInput
    orderBy?: ObraSocialOrderByWithAggregationInput | ObraSocialOrderByWithAggregationInput[]
    by: ObraSocialScalarFieldEnum[] | ObraSocialScalarFieldEnum
    having?: ObraSocialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObraSocialCountAggregateInputType | true
    _avg?: ObraSocialAvgAggregateInputType
    _sum?: ObraSocialSumAggregateInputType
    _min?: ObraSocialMinAggregateInputType
    _max?: ObraSocialMaxAggregateInputType
  }

  export type ObraSocialGroupByOutputType = {
    id: number
    nombre: string
    _count: ObraSocialCountAggregateOutputType | null
    _avg: ObraSocialAvgAggregateOutputType | null
    _sum: ObraSocialSumAggregateOutputType | null
    _min: ObraSocialMinAggregateOutputType | null
    _max: ObraSocialMaxAggregateOutputType | null
  }

  type GetObraSocialGroupByPayload<T extends ObraSocialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObraSocialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObraSocialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObraSocialGroupByOutputType[P]>
            : GetScalarType<T[P], ObraSocialGroupByOutputType[P]>
        }
      >
    >


  export type ObraSocialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    pacientes?: boolean | ObraSocial$pacientesArgs<ExtArgs>
    profesionales?: boolean | ObraSocial$profesionalesArgs<ExtArgs>
    _count?: boolean | ObraSocialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obraSocial"]>

  export type ObraSocialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["obraSocial"]>

  export type ObraSocialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["obraSocial"]>

  export type ObraSocialSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ObraSocialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["obraSocial"]>
  export type ObraSocialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | ObraSocial$pacientesArgs<ExtArgs>
    profesionales?: boolean | ObraSocial$profesionalesArgs<ExtArgs>
    _count?: boolean | ObraSocialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObraSocialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObraSocialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObraSocialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObraSocial"
    objects: {
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
      profesionales: Prisma.$ObraSocialXProfesionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["obraSocial"]>
    composites: {}
  }

  type ObraSocialGetPayload<S extends boolean | null | undefined | ObraSocialDefaultArgs> = $Result.GetResult<Prisma.$ObraSocialPayload, S>

  type ObraSocialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObraSocialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObraSocialCountAggregateInputType | true
    }

  export interface ObraSocialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObraSocial'], meta: { name: 'ObraSocial' } }
    /**
     * Find zero or one ObraSocial that matches the filter.
     * @param {ObraSocialFindUniqueArgs} args - Arguments to find a ObraSocial
     * @example
     * // Get one ObraSocial
     * const obraSocial = await prisma.obraSocial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObraSocialFindUniqueArgs>(args: SelectSubset<T, ObraSocialFindUniqueArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObraSocial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObraSocialFindUniqueOrThrowArgs} args - Arguments to find a ObraSocial
     * @example
     * // Get one ObraSocial
     * const obraSocial = await prisma.obraSocial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObraSocialFindUniqueOrThrowArgs>(args: SelectSubset<T, ObraSocialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObraSocial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialFindFirstArgs} args - Arguments to find a ObraSocial
     * @example
     * // Get one ObraSocial
     * const obraSocial = await prisma.obraSocial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObraSocialFindFirstArgs>(args?: SelectSubset<T, ObraSocialFindFirstArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObraSocial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialFindFirstOrThrowArgs} args - Arguments to find a ObraSocial
     * @example
     * // Get one ObraSocial
     * const obraSocial = await prisma.obraSocial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObraSocialFindFirstOrThrowArgs>(args?: SelectSubset<T, ObraSocialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObraSocials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObraSocials
     * const obraSocials = await prisma.obraSocial.findMany()
     * 
     * // Get first 10 ObraSocials
     * const obraSocials = await prisma.obraSocial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obraSocialWithIdOnly = await prisma.obraSocial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObraSocialFindManyArgs>(args?: SelectSubset<T, ObraSocialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObraSocial.
     * @param {ObraSocialCreateArgs} args - Arguments to create a ObraSocial.
     * @example
     * // Create one ObraSocial
     * const ObraSocial = await prisma.obraSocial.create({
     *   data: {
     *     // ... data to create a ObraSocial
     *   }
     * })
     * 
     */
    create<T extends ObraSocialCreateArgs>(args: SelectSubset<T, ObraSocialCreateArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObraSocials.
     * @param {ObraSocialCreateManyArgs} args - Arguments to create many ObraSocials.
     * @example
     * // Create many ObraSocials
     * const obraSocial = await prisma.obraSocial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObraSocialCreateManyArgs>(args?: SelectSubset<T, ObraSocialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObraSocials and returns the data saved in the database.
     * @param {ObraSocialCreateManyAndReturnArgs} args - Arguments to create many ObraSocials.
     * @example
     * // Create many ObraSocials
     * const obraSocial = await prisma.obraSocial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObraSocials and only return the `id`
     * const obraSocialWithIdOnly = await prisma.obraSocial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObraSocialCreateManyAndReturnArgs>(args?: SelectSubset<T, ObraSocialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ObraSocial.
     * @param {ObraSocialDeleteArgs} args - Arguments to delete one ObraSocial.
     * @example
     * // Delete one ObraSocial
     * const ObraSocial = await prisma.obraSocial.delete({
     *   where: {
     *     // ... filter to delete one ObraSocial
     *   }
     * })
     * 
     */
    delete<T extends ObraSocialDeleteArgs>(args: SelectSubset<T, ObraSocialDeleteArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObraSocial.
     * @param {ObraSocialUpdateArgs} args - Arguments to update one ObraSocial.
     * @example
     * // Update one ObraSocial
     * const obraSocial = await prisma.obraSocial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObraSocialUpdateArgs>(args: SelectSubset<T, ObraSocialUpdateArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObraSocials.
     * @param {ObraSocialDeleteManyArgs} args - Arguments to filter ObraSocials to delete.
     * @example
     * // Delete a few ObraSocials
     * const { count } = await prisma.obraSocial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObraSocialDeleteManyArgs>(args?: SelectSubset<T, ObraSocialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObraSocials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObraSocials
     * const obraSocial = await prisma.obraSocial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObraSocialUpdateManyArgs>(args: SelectSubset<T, ObraSocialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObraSocials and returns the data updated in the database.
     * @param {ObraSocialUpdateManyAndReturnArgs} args - Arguments to update many ObraSocials.
     * @example
     * // Update many ObraSocials
     * const obraSocial = await prisma.obraSocial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ObraSocials and only return the `id`
     * const obraSocialWithIdOnly = await prisma.obraSocial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObraSocialUpdateManyAndReturnArgs>(args: SelectSubset<T, ObraSocialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ObraSocial.
     * @param {ObraSocialUpsertArgs} args - Arguments to update or create a ObraSocial.
     * @example
     * // Update or create a ObraSocial
     * const obraSocial = await prisma.obraSocial.upsert({
     *   create: {
     *     // ... data to create a ObraSocial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObraSocial we want to update
     *   }
     * })
     */
    upsert<T extends ObraSocialUpsertArgs>(args: SelectSubset<T, ObraSocialUpsertArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObraSocials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialCountArgs} args - Arguments to filter ObraSocials to count.
     * @example
     * // Count the number of ObraSocials
     * const count = await prisma.obraSocial.count({
     *   where: {
     *     // ... the filter for the ObraSocials we want to count
     *   }
     * })
    **/
    count<T extends ObraSocialCountArgs>(
      args?: Subset<T, ObraSocialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObraSocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObraSocial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObraSocialAggregateArgs>(args: Subset<T, ObraSocialAggregateArgs>): Prisma.PrismaPromise<GetObraSocialAggregateType<T>>

    /**
     * Group by ObraSocial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObraSocialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObraSocialGroupByArgs['orderBy'] }
        : { orderBy?: ObraSocialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObraSocialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObraSocialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObraSocial model
   */
  readonly fields: ObraSocialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObraSocial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObraSocialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends ObraSocial$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, ObraSocial$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profesionales<T extends ObraSocial$profesionalesArgs<ExtArgs> = {}>(args?: Subset<T, ObraSocial$profesionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObraSocial model
   */
  interface ObraSocialFieldRefs {
    readonly id: FieldRef<"ObraSocial", 'Int'>
    readonly nombre: FieldRef<"ObraSocial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ObraSocial findUnique
   */
  export type ObraSocialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocial to fetch.
     */
    where: ObraSocialWhereUniqueInput
  }

  /**
   * ObraSocial findUniqueOrThrow
   */
  export type ObraSocialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocial to fetch.
     */
    where: ObraSocialWhereUniqueInput
  }

  /**
   * ObraSocial findFirst
   */
  export type ObraSocialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocial to fetch.
     */
    where?: ObraSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocials to fetch.
     */
    orderBy?: ObraSocialOrderByWithRelationInput | ObraSocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObraSocials.
     */
    cursor?: ObraSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObraSocials.
     */
    distinct?: ObraSocialScalarFieldEnum | ObraSocialScalarFieldEnum[]
  }

  /**
   * ObraSocial findFirstOrThrow
   */
  export type ObraSocialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocial to fetch.
     */
    where?: ObraSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocials to fetch.
     */
    orderBy?: ObraSocialOrderByWithRelationInput | ObraSocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObraSocials.
     */
    cursor?: ObraSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObraSocials.
     */
    distinct?: ObraSocialScalarFieldEnum | ObraSocialScalarFieldEnum[]
  }

  /**
   * ObraSocial findMany
   */
  export type ObraSocialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocials to fetch.
     */
    where?: ObraSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocials to fetch.
     */
    orderBy?: ObraSocialOrderByWithRelationInput | ObraSocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObraSocials.
     */
    cursor?: ObraSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocials.
     */
    skip?: number
    distinct?: ObraSocialScalarFieldEnum | ObraSocialScalarFieldEnum[]
  }

  /**
   * ObraSocial create
   */
  export type ObraSocialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * The data needed to create a ObraSocial.
     */
    data: XOR<ObraSocialCreateInput, ObraSocialUncheckedCreateInput>
  }

  /**
   * ObraSocial createMany
   */
  export type ObraSocialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObraSocials.
     */
    data: ObraSocialCreateManyInput | ObraSocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObraSocial createManyAndReturn
   */
  export type ObraSocialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * The data used to create many ObraSocials.
     */
    data: ObraSocialCreateManyInput | ObraSocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObraSocial update
   */
  export type ObraSocialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * The data needed to update a ObraSocial.
     */
    data: XOR<ObraSocialUpdateInput, ObraSocialUncheckedUpdateInput>
    /**
     * Choose, which ObraSocial to update.
     */
    where: ObraSocialWhereUniqueInput
  }

  /**
   * ObraSocial updateMany
   */
  export type ObraSocialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObraSocials.
     */
    data: XOR<ObraSocialUpdateManyMutationInput, ObraSocialUncheckedUpdateManyInput>
    /**
     * Filter which ObraSocials to update
     */
    where?: ObraSocialWhereInput
    /**
     * Limit how many ObraSocials to update.
     */
    limit?: number
  }

  /**
   * ObraSocial updateManyAndReturn
   */
  export type ObraSocialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * The data used to update ObraSocials.
     */
    data: XOR<ObraSocialUpdateManyMutationInput, ObraSocialUncheckedUpdateManyInput>
    /**
     * Filter which ObraSocials to update
     */
    where?: ObraSocialWhereInput
    /**
     * Limit how many ObraSocials to update.
     */
    limit?: number
  }

  /**
   * ObraSocial upsert
   */
  export type ObraSocialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * The filter to search for the ObraSocial to update in case it exists.
     */
    where: ObraSocialWhereUniqueInput
    /**
     * In case the ObraSocial found by the `where` argument doesn't exist, create a new ObraSocial with this data.
     */
    create: XOR<ObraSocialCreateInput, ObraSocialUncheckedCreateInput>
    /**
     * In case the ObraSocial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObraSocialUpdateInput, ObraSocialUncheckedUpdateInput>
  }

  /**
   * ObraSocial delete
   */
  export type ObraSocialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter which ObraSocial to delete.
     */
    where: ObraSocialWhereUniqueInput
  }

  /**
   * ObraSocial deleteMany
   */
  export type ObraSocialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObraSocials to delete
     */
    where?: ObraSocialWhereInput
    /**
     * Limit how many ObraSocials to delete.
     */
    limit?: number
  }

  /**
   * ObraSocial.pacientes
   */
  export type ObraSocial$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * ObraSocial.profesionales
   */
  export type ObraSocial$profesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    where?: ObraSocialXProfesionalWhereInput
    orderBy?: ObraSocialXProfesionalOrderByWithRelationInput | ObraSocialXProfesionalOrderByWithRelationInput[]
    cursor?: ObraSocialXProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObraSocialXProfesionalScalarFieldEnum | ObraSocialXProfesionalScalarFieldEnum[]
  }

  /**
   * ObraSocial without action
   */
  export type ObraSocialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocial
     */
    omit?: ObraSocialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
  }


  /**
   * Model Prestacion
   */

  export type AggregatePrestacion = {
    _count: PrestacionCountAggregateOutputType | null
    _avg: PrestacionAvgAggregateOutputType | null
    _sum: PrestacionSumAggregateOutputType | null
    _min: PrestacionMinAggregateOutputType | null
    _max: PrestacionMaxAggregateOutputType | null
  }

  export type PrestacionAvgAggregateOutputType = {
    id: number | null
  }

  export type PrestacionSumAggregateOutputType = {
    id: number | null
  }

  export type PrestacionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type PrestacionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type PrestacionCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type PrestacionAvgAggregateInputType = {
    id?: true
  }

  export type PrestacionSumAggregateInputType = {
    id?: true
  }

  export type PrestacionMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type PrestacionMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type PrestacionCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type PrestacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestacion to aggregate.
     */
    where?: PrestacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestacions to fetch.
     */
    orderBy?: PrestacionOrderByWithRelationInput | PrestacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrestacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prestacions
    **/
    _count?: true | PrestacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestacionMaxAggregateInputType
  }

  export type GetPrestacionAggregateType<T extends PrestacionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestacion[P]>
      : GetScalarType<T[P], AggregatePrestacion[P]>
  }




  export type PrestacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestacionWhereInput
    orderBy?: PrestacionOrderByWithAggregationInput | PrestacionOrderByWithAggregationInput[]
    by: PrestacionScalarFieldEnum[] | PrestacionScalarFieldEnum
    having?: PrestacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestacionCountAggregateInputType | true
    _avg?: PrestacionAvgAggregateInputType
    _sum?: PrestacionSumAggregateInputType
    _min?: PrestacionMinAggregateInputType
    _max?: PrestacionMaxAggregateInputType
  }

  export type PrestacionGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    _count: PrestacionCountAggregateOutputType | null
    _avg: PrestacionAvgAggregateOutputType | null
    _sum: PrestacionSumAggregateOutputType | null
    _min: PrestacionMinAggregateOutputType | null
    _max: PrestacionMaxAggregateOutputType | null
  }

  type GetPrestacionGroupByPayload<T extends PrestacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestacionGroupByOutputType[P]>
            : GetScalarType<T[P], PrestacionGroupByOutputType[P]>
        }
      >
    >


  export type PrestacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    profesionales?: boolean | Prestacion$profesionalesArgs<ExtArgs>
    _count?: boolean | PrestacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestacion"]>

  export type PrestacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["prestacion"]>

  export type PrestacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["prestacion"]>

  export type PrestacionSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type PrestacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["prestacion"]>
  export type PrestacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesionales?: boolean | Prestacion$profesionalesArgs<ExtArgs>
    _count?: boolean | PrestacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrestacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PrestacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PrestacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prestacion"
    objects: {
      profesionales: Prisma.$PrestacionXProfesionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["prestacion"]>
    composites: {}
  }

  type PrestacionGetPayload<S extends boolean | null | undefined | PrestacionDefaultArgs> = $Result.GetResult<Prisma.$PrestacionPayload, S>

  type PrestacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrestacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestacionCountAggregateInputType | true
    }

  export interface PrestacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prestacion'], meta: { name: 'Prestacion' } }
    /**
     * Find zero or one Prestacion that matches the filter.
     * @param {PrestacionFindUniqueArgs} args - Arguments to find a Prestacion
     * @example
     * // Get one Prestacion
     * const prestacion = await prisma.prestacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrestacionFindUniqueArgs>(args: SelectSubset<T, PrestacionFindUniqueArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrestacionFindUniqueOrThrowArgs} args - Arguments to find a Prestacion
     * @example
     * // Get one Prestacion
     * const prestacion = await prisma.prestacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrestacionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrestacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionFindFirstArgs} args - Arguments to find a Prestacion
     * @example
     * // Get one Prestacion
     * const prestacion = await prisma.prestacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrestacionFindFirstArgs>(args?: SelectSubset<T, PrestacionFindFirstArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionFindFirstOrThrowArgs} args - Arguments to find a Prestacion
     * @example
     * // Get one Prestacion
     * const prestacion = await prisma.prestacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrestacionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrestacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestacions
     * const prestacions = await prisma.prestacion.findMany()
     * 
     * // Get first 10 Prestacions
     * const prestacions = await prisma.prestacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prestacionWithIdOnly = await prisma.prestacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrestacionFindManyArgs>(args?: SelectSubset<T, PrestacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestacion.
     * @param {PrestacionCreateArgs} args - Arguments to create a Prestacion.
     * @example
     * // Create one Prestacion
     * const Prestacion = await prisma.prestacion.create({
     *   data: {
     *     // ... data to create a Prestacion
     *   }
     * })
     * 
     */
    create<T extends PrestacionCreateArgs>(args: SelectSubset<T, PrestacionCreateArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestacions.
     * @param {PrestacionCreateManyArgs} args - Arguments to create many Prestacions.
     * @example
     * // Create many Prestacions
     * const prestacion = await prisma.prestacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrestacionCreateManyArgs>(args?: SelectSubset<T, PrestacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestacions and returns the data saved in the database.
     * @param {PrestacionCreateManyAndReturnArgs} args - Arguments to create many Prestacions.
     * @example
     * // Create many Prestacions
     * const prestacion = await prisma.prestacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestacions and only return the `id`
     * const prestacionWithIdOnly = await prisma.prestacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrestacionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrestacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestacion.
     * @param {PrestacionDeleteArgs} args - Arguments to delete one Prestacion.
     * @example
     * // Delete one Prestacion
     * const Prestacion = await prisma.prestacion.delete({
     *   where: {
     *     // ... filter to delete one Prestacion
     *   }
     * })
     * 
     */
    delete<T extends PrestacionDeleteArgs>(args: SelectSubset<T, PrestacionDeleteArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestacion.
     * @param {PrestacionUpdateArgs} args - Arguments to update one Prestacion.
     * @example
     * // Update one Prestacion
     * const prestacion = await prisma.prestacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrestacionUpdateArgs>(args: SelectSubset<T, PrestacionUpdateArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestacions.
     * @param {PrestacionDeleteManyArgs} args - Arguments to filter Prestacions to delete.
     * @example
     * // Delete a few Prestacions
     * const { count } = await prisma.prestacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrestacionDeleteManyArgs>(args?: SelectSubset<T, PrestacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestacions
     * const prestacion = await prisma.prestacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrestacionUpdateManyArgs>(args: SelectSubset<T, PrestacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestacions and returns the data updated in the database.
     * @param {PrestacionUpdateManyAndReturnArgs} args - Arguments to update many Prestacions.
     * @example
     * // Update many Prestacions
     * const prestacion = await prisma.prestacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestacions and only return the `id`
     * const prestacionWithIdOnly = await prisma.prestacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrestacionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrestacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestacion.
     * @param {PrestacionUpsertArgs} args - Arguments to update or create a Prestacion.
     * @example
     * // Update or create a Prestacion
     * const prestacion = await prisma.prestacion.upsert({
     *   create: {
     *     // ... data to create a Prestacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestacion we want to update
     *   }
     * })
     */
    upsert<T extends PrestacionUpsertArgs>(args: SelectSubset<T, PrestacionUpsertArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionCountArgs} args - Arguments to filter Prestacions to count.
     * @example
     * // Count the number of Prestacions
     * const count = await prisma.prestacion.count({
     *   where: {
     *     // ... the filter for the Prestacions we want to count
     *   }
     * })
    **/
    count<T extends PrestacionCountArgs>(
      args?: Subset<T, PrestacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrestacionAggregateArgs>(args: Subset<T, PrestacionAggregateArgs>): Prisma.PrismaPromise<GetPrestacionAggregateType<T>>

    /**
     * Group by Prestacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrestacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrestacionGroupByArgs['orderBy'] }
        : { orderBy?: PrestacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrestacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prestacion model
   */
  readonly fields: PrestacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prestacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrestacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profesionales<T extends Prestacion$profesionalesArgs<ExtArgs> = {}>(args?: Subset<T, Prestacion$profesionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prestacion model
   */
  interface PrestacionFieldRefs {
    readonly id: FieldRef<"Prestacion", 'Int'>
    readonly nombre: FieldRef<"Prestacion", 'String'>
    readonly descripcion: FieldRef<"Prestacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prestacion findUnique
   */
  export type PrestacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * Filter, which Prestacion to fetch.
     */
    where: PrestacionWhereUniqueInput
  }

  /**
   * Prestacion findUniqueOrThrow
   */
  export type PrestacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * Filter, which Prestacion to fetch.
     */
    where: PrestacionWhereUniqueInput
  }

  /**
   * Prestacion findFirst
   */
  export type PrestacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * Filter, which Prestacion to fetch.
     */
    where?: PrestacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestacions to fetch.
     */
    orderBy?: PrestacionOrderByWithRelationInput | PrestacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestacions.
     */
    cursor?: PrestacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestacions.
     */
    distinct?: PrestacionScalarFieldEnum | PrestacionScalarFieldEnum[]
  }

  /**
   * Prestacion findFirstOrThrow
   */
  export type PrestacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * Filter, which Prestacion to fetch.
     */
    where?: PrestacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestacions to fetch.
     */
    orderBy?: PrestacionOrderByWithRelationInput | PrestacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prestacions.
     */
    cursor?: PrestacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prestacions.
     */
    distinct?: PrestacionScalarFieldEnum | PrestacionScalarFieldEnum[]
  }

  /**
   * Prestacion findMany
   */
  export type PrestacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * Filter, which Prestacions to fetch.
     */
    where?: PrestacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prestacions to fetch.
     */
    orderBy?: PrestacionOrderByWithRelationInput | PrestacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prestacions.
     */
    cursor?: PrestacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prestacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prestacions.
     */
    skip?: number
    distinct?: PrestacionScalarFieldEnum | PrestacionScalarFieldEnum[]
  }

  /**
   * Prestacion create
   */
  export type PrestacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prestacion.
     */
    data: XOR<PrestacionCreateInput, PrestacionUncheckedCreateInput>
  }

  /**
   * Prestacion createMany
   */
  export type PrestacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prestacions.
     */
    data: PrestacionCreateManyInput | PrestacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prestacion createManyAndReturn
   */
  export type PrestacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * The data used to create many Prestacions.
     */
    data: PrestacionCreateManyInput | PrestacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prestacion update
   */
  export type PrestacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prestacion.
     */
    data: XOR<PrestacionUpdateInput, PrestacionUncheckedUpdateInput>
    /**
     * Choose, which Prestacion to update.
     */
    where: PrestacionWhereUniqueInput
  }

  /**
   * Prestacion updateMany
   */
  export type PrestacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prestacions.
     */
    data: XOR<PrestacionUpdateManyMutationInput, PrestacionUncheckedUpdateManyInput>
    /**
     * Filter which Prestacions to update
     */
    where?: PrestacionWhereInput
    /**
     * Limit how many Prestacions to update.
     */
    limit?: number
  }

  /**
   * Prestacion updateManyAndReturn
   */
  export type PrestacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * The data used to update Prestacions.
     */
    data: XOR<PrestacionUpdateManyMutationInput, PrestacionUncheckedUpdateManyInput>
    /**
     * Filter which Prestacions to update
     */
    where?: PrestacionWhereInput
    /**
     * Limit how many Prestacions to update.
     */
    limit?: number
  }

  /**
   * Prestacion upsert
   */
  export type PrestacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prestacion to update in case it exists.
     */
    where: PrestacionWhereUniqueInput
    /**
     * In case the Prestacion found by the `where` argument doesn't exist, create a new Prestacion with this data.
     */
    create: XOR<PrestacionCreateInput, PrestacionUncheckedCreateInput>
    /**
     * In case the Prestacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrestacionUpdateInput, PrestacionUncheckedUpdateInput>
  }

  /**
   * Prestacion delete
   */
  export type PrestacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
    /**
     * Filter which Prestacion to delete.
     */
    where: PrestacionWhereUniqueInput
  }

  /**
   * Prestacion deleteMany
   */
  export type PrestacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prestacions to delete
     */
    where?: PrestacionWhereInput
    /**
     * Limit how many Prestacions to delete.
     */
    limit?: number
  }

  /**
   * Prestacion.profesionales
   */
  export type Prestacion$profesionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    where?: PrestacionXProfesionalWhereInput
    orderBy?: PrestacionXProfesionalOrderByWithRelationInput | PrestacionXProfesionalOrderByWithRelationInput[]
    cursor?: PrestacionXProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestacionXProfesionalScalarFieldEnum | PrestacionXProfesionalScalarFieldEnum[]
  }

  /**
   * Prestacion without action
   */
  export type PrestacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prestacion
     */
    select?: PrestacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prestacion
     */
    omit?: PrestacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    creadoPorId: number | null
    provinciaId: number | null
    localidadId: number | null
    obraSocialId: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    creadoPorId: number | null
    provinciaId: number | null
    localidadId: number | null
    obraSocialId: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    userId: number | null
    creadoPorId: number | null
    numeroInterno: string | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    fechaNacimiento: Date | null
    genero: $Enums.Genero | null
    estadoCivil: $Enums.EstadoCivil | null
    pais: string | null
    provinciaId: number | null
    localidadId: number | null
    barrio: string | null
    calle: string | null
    numero: string | null
    celular: string | null
    email: string | null
    obraSocialId: number | null
    numeroSocio: string | null
    plan: string | null
    estado: $Enums.EstadoPaciente | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    creadoPorId: number | null
    numeroInterno: string | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    fechaNacimiento: Date | null
    genero: $Enums.Genero | null
    estadoCivil: $Enums.EstadoCivil | null
    pais: string | null
    provinciaId: number | null
    localidadId: number | null
    barrio: string | null
    calle: string | null
    numero: string | null
    celular: string | null
    email: string | null
    obraSocialId: number | null
    numeroSocio: string | null
    plan: string | null
    estado: $Enums.EstadoPaciente | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    userId: number
    creadoPorId: number
    numeroInterno: number
    nombre: number
    apellido: number
    dni: number
    fechaNacimiento: number
    genero: number
    estadoCivil: number
    pais: number
    provinciaId: number
    localidadId: number
    barrio: number
    calle: number
    numero: number
    celular: number
    email: number
    obraSocialId: number
    numeroSocio: number
    plan: number
    estado: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    provinciaId?: true
    localidadId?: true
    obraSocialId?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    provinciaId?: true
    localidadId?: true
    obraSocialId?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    numeroInterno?: true
    nombre?: true
    apellido?: true
    dni?: true
    fechaNacimiento?: true
    genero?: true
    estadoCivil?: true
    pais?: true
    provinciaId?: true
    localidadId?: true
    barrio?: true
    calle?: true
    numero?: true
    celular?: true
    email?: true
    obraSocialId?: true
    numeroSocio?: true
    plan?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    numeroInterno?: true
    nombre?: true
    apellido?: true
    dni?: true
    fechaNacimiento?: true
    genero?: true
    estadoCivil?: true
    pais?: true
    provinciaId?: true
    localidadId?: true
    barrio?: true
    calle?: true
    numero?: true
    celular?: true
    email?: true
    obraSocialId?: true
    numeroSocio?: true
    plan?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    numeroInterno?: true
    nombre?: true
    apellido?: true
    dni?: true
    fechaNacimiento?: true
    genero?: true
    estadoCivil?: true
    pais?: true
    provinciaId?: true
    localidadId?: true
    barrio?: true
    calle?: true
    numero?: true
    celular?: true
    email?: true
    obraSocialId?: true
    numeroSocio?: true
    plan?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    userId: number
    creadoPorId: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado: $Enums.EstadoPaciente
    creadoEn: Date
    actualizadoEn: Date
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    creadoPorId?: boolean
    numeroInterno?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    genero?: boolean
    estadoCivil?: boolean
    pais?: boolean
    provinciaId?: boolean
    localidadId?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    celular?: boolean
    email?: boolean
    obraSocialId?: boolean
    numeroSocio?: boolean
    plan?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Paciente$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
    turnos?: boolean | Paciente$turnosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    creadoPorId?: boolean
    numeroInterno?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    genero?: boolean
    estadoCivil?: boolean
    pais?: boolean
    provinciaId?: boolean
    localidadId?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    celular?: boolean
    email?: boolean
    obraSocialId?: boolean
    numeroSocio?: boolean
    plan?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Paciente$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    creadoPorId?: boolean
    numeroInterno?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    genero?: boolean
    estadoCivil?: boolean
    pais?: boolean
    provinciaId?: boolean
    localidadId?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    celular?: boolean
    email?: boolean
    obraSocialId?: boolean
    numeroSocio?: boolean
    plan?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Paciente$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    userId?: boolean
    creadoPorId?: boolean
    numeroInterno?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    genero?: boolean
    estadoCivil?: boolean
    pais?: boolean
    provinciaId?: boolean
    localidadId?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    celular?: boolean
    email?: boolean
    obraSocialId?: boolean
    numeroSocio?: boolean
    plan?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "creadoPorId" | "numeroInterno" | "nombre" | "apellido" | "dni" | "fechaNacimiento" | "genero" | "estadoCivil" | "pais" | "provinciaId" | "localidadId" | "barrio" | "calle" | "numero" | "celular" | "email" | "obraSocialId" | "numeroSocio" | "plan" | "estado" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Paciente$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
    turnos?: boolean | Paciente$turnosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Paciente$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Paciente$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      creadoPor: Prisma.$UsuarioPayload<ExtArgs> | null
      provincia: Prisma.$ProvinciaPayload<ExtArgs>
      localidad: Prisma.$LocalidadPayload<ExtArgs>
      obraSocial: Prisma.$ObraSocialPayload<ExtArgs>
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      creadoPorId: number | null
      numeroInterno: string
      nombre: string
      apellido: string
      dni: string
      fechaNacimiento: Date
      genero: $Enums.Genero
      estadoCivil: $Enums.EstadoCivil
      pais: string
      provinciaId: number
      localidadId: number
      barrio: string | null
      calle: string
      numero: string
      celular: string
      email: string
      obraSocialId: number
      numeroSocio: string
      plan: string
      estado: $Enums.EstadoPaciente
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creadoPor<T extends Paciente$creadoPorArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$creadoPorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provincia<T extends ProvinciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinciaDefaultArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    localidad<T extends LocalidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocalidadDefaultArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    obraSocial<T extends ObraSocialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraSocialDefaultArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    turnos<T extends Paciente$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly userId: FieldRef<"Paciente", 'Int'>
    readonly creadoPorId: FieldRef<"Paciente", 'Int'>
    readonly numeroInterno: FieldRef<"Paciente", 'String'>
    readonly nombre: FieldRef<"Paciente", 'String'>
    readonly apellido: FieldRef<"Paciente", 'String'>
    readonly dni: FieldRef<"Paciente", 'String'>
    readonly fechaNacimiento: FieldRef<"Paciente", 'DateTime'>
    readonly genero: FieldRef<"Paciente", 'Genero'>
    readonly estadoCivil: FieldRef<"Paciente", 'EstadoCivil'>
    readonly pais: FieldRef<"Paciente", 'String'>
    readonly provinciaId: FieldRef<"Paciente", 'Int'>
    readonly localidadId: FieldRef<"Paciente", 'Int'>
    readonly barrio: FieldRef<"Paciente", 'String'>
    readonly calle: FieldRef<"Paciente", 'String'>
    readonly numero: FieldRef<"Paciente", 'String'>
    readonly celular: FieldRef<"Paciente", 'String'>
    readonly email: FieldRef<"Paciente", 'String'>
    readonly obraSocialId: FieldRef<"Paciente", 'Int'>
    readonly numeroSocio: FieldRef<"Paciente", 'String'>
    readonly plan: FieldRef<"Paciente", 'String'>
    readonly estado: FieldRef<"Paciente", 'EstadoPaciente'>
    readonly creadoEn: FieldRef<"Paciente", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Paciente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.creadoPor
   */
  export type Paciente$creadoPorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Paciente.turnos
   */
  export type Paciente$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Profesional
   */

  export type AggregateProfesional = {
    _count: ProfesionalCountAggregateOutputType | null
    _avg: ProfesionalAvgAggregateOutputType | null
    _sum: ProfesionalSumAggregateOutputType | null
    _min: ProfesionalMinAggregateOutputType | null
    _max: ProfesionalMaxAggregateOutputType | null
  }

  export type ProfesionalAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    creadoPorId: number | null
    provinciaId: number | null
    localidadId: number | null
  }

  export type ProfesionalSumAggregateOutputType = {
    id: number | null
    userId: number | null
    creadoPorId: number | null
    provinciaId: number | null
    localidadId: number | null
  }

  export type ProfesionalMinAggregateOutputType = {
    id: number | null
    userId: number | null
    creadoPorId: number | null
    numeroInterno: string | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    fechaNacimiento: Date | null
    genero: $Enums.Genero | null
    estadoCivil: $Enums.EstadoCivil | null
    pais: string | null
    provinciaId: number | null
    localidadId: number | null
    barrio: string | null
    calle: string | null
    numero: string | null
    celular: string | null
    email: string | null
    titulo: string | null
    matricula: string | null
    especialidad: string | null
    universidad: string | null
    fechaGraduacion: Date | null
    horarioTrabajo: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ProfesionalMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    creadoPorId: number | null
    numeroInterno: string | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    fechaNacimiento: Date | null
    genero: $Enums.Genero | null
    estadoCivil: $Enums.EstadoCivil | null
    pais: string | null
    provinciaId: number | null
    localidadId: number | null
    barrio: string | null
    calle: string | null
    numero: string | null
    celular: string | null
    email: string | null
    titulo: string | null
    matricula: string | null
    especialidad: string | null
    universidad: string | null
    fechaGraduacion: Date | null
    horarioTrabajo: string | null
    creadoEn: Date | null
    actualizadoEn: Date | null
  }

  export type ProfesionalCountAggregateOutputType = {
    id: number
    userId: number
    creadoPorId: number
    numeroInterno: number
    nombre: number
    apellido: number
    dni: number
    fechaNacimiento: number
    genero: number
    estadoCivil: number
    pais: number
    provinciaId: number
    localidadId: number
    barrio: number
    calle: number
    numero: number
    celular: number
    email: number
    titulo: number
    matricula: number
    especialidad: number
    universidad: number
    fechaGraduacion: number
    horarioTrabajo: number
    creadoEn: number
    actualizadoEn: number
    _all: number
  }


  export type ProfesionalAvgAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    provinciaId?: true
    localidadId?: true
  }

  export type ProfesionalSumAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    provinciaId?: true
    localidadId?: true
  }

  export type ProfesionalMinAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    numeroInterno?: true
    nombre?: true
    apellido?: true
    dni?: true
    fechaNacimiento?: true
    genero?: true
    estadoCivil?: true
    pais?: true
    provinciaId?: true
    localidadId?: true
    barrio?: true
    calle?: true
    numero?: true
    celular?: true
    email?: true
    titulo?: true
    matricula?: true
    especialidad?: true
    universidad?: true
    fechaGraduacion?: true
    horarioTrabajo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ProfesionalMaxAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    numeroInterno?: true
    nombre?: true
    apellido?: true
    dni?: true
    fechaNacimiento?: true
    genero?: true
    estadoCivil?: true
    pais?: true
    provinciaId?: true
    localidadId?: true
    barrio?: true
    calle?: true
    numero?: true
    celular?: true
    email?: true
    titulo?: true
    matricula?: true
    especialidad?: true
    universidad?: true
    fechaGraduacion?: true
    horarioTrabajo?: true
    creadoEn?: true
    actualizadoEn?: true
  }

  export type ProfesionalCountAggregateInputType = {
    id?: true
    userId?: true
    creadoPorId?: true
    numeroInterno?: true
    nombre?: true
    apellido?: true
    dni?: true
    fechaNacimiento?: true
    genero?: true
    estadoCivil?: true
    pais?: true
    provinciaId?: true
    localidadId?: true
    barrio?: true
    calle?: true
    numero?: true
    celular?: true
    email?: true
    titulo?: true
    matricula?: true
    especialidad?: true
    universidad?: true
    fechaGraduacion?: true
    horarioTrabajo?: true
    creadoEn?: true
    actualizadoEn?: true
    _all?: true
  }

  export type ProfesionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesional to aggregate.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profesionals
    **/
    _count?: true | ProfesionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfesionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfesionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfesionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfesionalMaxAggregateInputType
  }

  export type GetProfesionalAggregateType<T extends ProfesionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfesional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfesional[P]>
      : GetScalarType<T[P], AggregateProfesional[P]>
  }




  export type ProfesionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesionalWhereInput
    orderBy?: ProfesionalOrderByWithAggregationInput | ProfesionalOrderByWithAggregationInput[]
    by: ProfesionalScalarFieldEnum[] | ProfesionalScalarFieldEnum
    having?: ProfesionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfesionalCountAggregateInputType | true
    _avg?: ProfesionalAvgAggregateInputType
    _sum?: ProfesionalSumAggregateInputType
    _min?: ProfesionalMinAggregateInputType
    _max?: ProfesionalMaxAggregateInputType
  }

  export type ProfesionalGroupByOutputType = {
    id: number
    userId: number
    creadoPorId: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date
    horarioTrabajo: string
    creadoEn: Date
    actualizadoEn: Date
    _count: ProfesionalCountAggregateOutputType | null
    _avg: ProfesionalAvgAggregateOutputType | null
    _sum: ProfesionalSumAggregateOutputType | null
    _min: ProfesionalMinAggregateOutputType | null
    _max: ProfesionalMaxAggregateOutputType | null
  }

  type GetProfesionalGroupByPayload<T extends ProfesionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfesionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfesionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfesionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfesionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfesionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    creadoPorId?: boolean
    numeroInterno?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    genero?: boolean
    estadoCivil?: boolean
    pais?: boolean
    provinciaId?: boolean
    localidadId?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    celular?: boolean
    email?: boolean
    titulo?: boolean
    matricula?: boolean
    especialidad?: boolean
    universidad?: boolean
    fechaGraduacion?: boolean
    horarioTrabajo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Profesional$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
    obrasSociales?: boolean | Profesional$obrasSocialesArgs<ExtArgs>
    prestaciones?: boolean | Profesional$prestacionesArgs<ExtArgs>
    turnos?: boolean | Profesional$turnosArgs<ExtArgs>
    _count?: boolean | ProfesionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesional"]>

  export type ProfesionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    creadoPorId?: boolean
    numeroInterno?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    genero?: boolean
    estadoCivil?: boolean
    pais?: boolean
    provinciaId?: boolean
    localidadId?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    celular?: boolean
    email?: boolean
    titulo?: boolean
    matricula?: boolean
    especialidad?: boolean
    universidad?: boolean
    fechaGraduacion?: boolean
    horarioTrabajo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Profesional$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesional"]>

  export type ProfesionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    creadoPorId?: boolean
    numeroInterno?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    genero?: boolean
    estadoCivil?: boolean
    pais?: boolean
    provinciaId?: boolean
    localidadId?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    celular?: boolean
    email?: boolean
    titulo?: boolean
    matricula?: boolean
    especialidad?: boolean
    universidad?: boolean
    fechaGraduacion?: boolean
    horarioTrabajo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Profesional$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesional"]>

  export type ProfesionalSelectScalar = {
    id?: boolean
    userId?: boolean
    creadoPorId?: boolean
    numeroInterno?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fechaNacimiento?: boolean
    genero?: boolean
    estadoCivil?: boolean
    pais?: boolean
    provinciaId?: boolean
    localidadId?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    celular?: boolean
    email?: boolean
    titulo?: boolean
    matricula?: boolean
    especialidad?: boolean
    universidad?: boolean
    fechaGraduacion?: boolean
    horarioTrabajo?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
  }

  export type ProfesionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "creadoPorId" | "numeroInterno" | "nombre" | "apellido" | "dni" | "fechaNacimiento" | "genero" | "estadoCivil" | "pais" | "provinciaId" | "localidadId" | "barrio" | "calle" | "numero" | "celular" | "email" | "titulo" | "matricula" | "especialidad" | "universidad" | "fechaGraduacion" | "horarioTrabajo" | "creadoEn" | "actualizadoEn", ExtArgs["result"]["profesional"]>
  export type ProfesionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Profesional$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
    obrasSociales?: boolean | Profesional$obrasSocialesArgs<ExtArgs>
    prestaciones?: boolean | Profesional$prestacionesArgs<ExtArgs>
    turnos?: boolean | Profesional$turnosArgs<ExtArgs>
    _count?: boolean | ProfesionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfesionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Profesional$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
  }
  export type ProfesionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    creadoPor?: boolean | Profesional$creadoPorArgs<ExtArgs>
    provincia?: boolean | ProvinciaDefaultArgs<ExtArgs>
    localidad?: boolean | LocalidadDefaultArgs<ExtArgs>
  }

  export type $ProfesionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profesional"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      creadoPor: Prisma.$UsuarioPayload<ExtArgs> | null
      provincia: Prisma.$ProvinciaPayload<ExtArgs>
      localidad: Prisma.$LocalidadPayload<ExtArgs>
      obrasSociales: Prisma.$ObraSocialXProfesionalPayload<ExtArgs>[]
      prestaciones: Prisma.$PrestacionXProfesionalPayload<ExtArgs>[]
      turnos: Prisma.$TurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      creadoPorId: number | null
      numeroInterno: string
      nombre: string
      apellido: string
      dni: string
      fechaNacimiento: Date
      genero: $Enums.Genero
      estadoCivil: $Enums.EstadoCivil
      pais: string
      provinciaId: number
      localidadId: number
      barrio: string | null
      calle: string
      numero: string
      celular: string
      email: string
      titulo: string
      matricula: string
      especialidad: string
      universidad: string
      fechaGraduacion: Date
      horarioTrabajo: string
      creadoEn: Date
      actualizadoEn: Date
    }, ExtArgs["result"]["profesional"]>
    composites: {}
  }

  type ProfesionalGetPayload<S extends boolean | null | undefined | ProfesionalDefaultArgs> = $Result.GetResult<Prisma.$ProfesionalPayload, S>

  type ProfesionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfesionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfesionalCountAggregateInputType | true
    }

  export interface ProfesionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profesional'], meta: { name: 'Profesional' } }
    /**
     * Find zero or one Profesional that matches the filter.
     * @param {ProfesionalFindUniqueArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfesionalFindUniqueArgs>(args: SelectSubset<T, ProfesionalFindUniqueArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profesional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfesionalFindUniqueOrThrowArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfesionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfesionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindFirstArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfesionalFindFirstArgs>(args?: SelectSubset<T, ProfesionalFindFirstArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindFirstOrThrowArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfesionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfesionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profesionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesionals
     * const profesionals = await prisma.profesional.findMany()
     * 
     * // Get first 10 Profesionals
     * const profesionals = await prisma.profesional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profesionalWithIdOnly = await prisma.profesional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfesionalFindManyArgs>(args?: SelectSubset<T, ProfesionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profesional.
     * @param {ProfesionalCreateArgs} args - Arguments to create a Profesional.
     * @example
     * // Create one Profesional
     * const Profesional = await prisma.profesional.create({
     *   data: {
     *     // ... data to create a Profesional
     *   }
     * })
     * 
     */
    create<T extends ProfesionalCreateArgs>(args: SelectSubset<T, ProfesionalCreateArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profesionals.
     * @param {ProfesionalCreateManyArgs} args - Arguments to create many Profesionals.
     * @example
     * // Create many Profesionals
     * const profesional = await prisma.profesional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfesionalCreateManyArgs>(args?: SelectSubset<T, ProfesionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profesionals and returns the data saved in the database.
     * @param {ProfesionalCreateManyAndReturnArgs} args - Arguments to create many Profesionals.
     * @example
     * // Create many Profesionals
     * const profesional = await prisma.profesional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profesionals and only return the `id`
     * const profesionalWithIdOnly = await prisma.profesional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfesionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfesionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profesional.
     * @param {ProfesionalDeleteArgs} args - Arguments to delete one Profesional.
     * @example
     * // Delete one Profesional
     * const Profesional = await prisma.profesional.delete({
     *   where: {
     *     // ... filter to delete one Profesional
     *   }
     * })
     * 
     */
    delete<T extends ProfesionalDeleteArgs>(args: SelectSubset<T, ProfesionalDeleteArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profesional.
     * @param {ProfesionalUpdateArgs} args - Arguments to update one Profesional.
     * @example
     * // Update one Profesional
     * const profesional = await prisma.profesional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfesionalUpdateArgs>(args: SelectSubset<T, ProfesionalUpdateArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profesionals.
     * @param {ProfesionalDeleteManyArgs} args - Arguments to filter Profesionals to delete.
     * @example
     * // Delete a few Profesionals
     * const { count } = await prisma.profesional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfesionalDeleteManyArgs>(args?: SelectSubset<T, ProfesionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesionals
     * const profesional = await prisma.profesional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfesionalUpdateManyArgs>(args: SelectSubset<T, ProfesionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesionals and returns the data updated in the database.
     * @param {ProfesionalUpdateManyAndReturnArgs} args - Arguments to update many Profesionals.
     * @example
     * // Update many Profesionals
     * const profesional = await prisma.profesional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profesionals and only return the `id`
     * const profesionalWithIdOnly = await prisma.profesional.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfesionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfesionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profesional.
     * @param {ProfesionalUpsertArgs} args - Arguments to update or create a Profesional.
     * @example
     * // Update or create a Profesional
     * const profesional = await prisma.profesional.upsert({
     *   create: {
     *     // ... data to create a Profesional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesional we want to update
     *   }
     * })
     */
    upsert<T extends ProfesionalUpsertArgs>(args: SelectSubset<T, ProfesionalUpsertArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalCountArgs} args - Arguments to filter Profesionals to count.
     * @example
     * // Count the number of Profesionals
     * const count = await prisma.profesional.count({
     *   where: {
     *     // ... the filter for the Profesionals we want to count
     *   }
     * })
    **/
    count<T extends ProfesionalCountArgs>(
      args?: Subset<T, ProfesionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfesionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfesionalAggregateArgs>(args: Subset<T, ProfesionalAggregateArgs>): Prisma.PrismaPromise<GetProfesionalAggregateType<T>>

    /**
     * Group by Profesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfesionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfesionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfesionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfesionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profesional model
   */
  readonly fields: ProfesionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profesional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfesionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creadoPor<T extends Profesional$creadoPorArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$creadoPorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provincia<T extends ProvinciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinciaDefaultArgs<ExtArgs>>): Prisma__ProvinciaClient<$Result.GetResult<Prisma.$ProvinciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    localidad<T extends LocalidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocalidadDefaultArgs<ExtArgs>>): Prisma__LocalidadClient<$Result.GetResult<Prisma.$LocalidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    obrasSociales<T extends Profesional$obrasSocialesArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$obrasSocialesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prestaciones<T extends Profesional$prestacionesArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$prestacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    turnos<T extends Profesional$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profesional model
   */
  interface ProfesionalFieldRefs {
    readonly id: FieldRef<"Profesional", 'Int'>
    readonly userId: FieldRef<"Profesional", 'Int'>
    readonly creadoPorId: FieldRef<"Profesional", 'Int'>
    readonly numeroInterno: FieldRef<"Profesional", 'String'>
    readonly nombre: FieldRef<"Profesional", 'String'>
    readonly apellido: FieldRef<"Profesional", 'String'>
    readonly dni: FieldRef<"Profesional", 'String'>
    readonly fechaNacimiento: FieldRef<"Profesional", 'DateTime'>
    readonly genero: FieldRef<"Profesional", 'Genero'>
    readonly estadoCivil: FieldRef<"Profesional", 'EstadoCivil'>
    readonly pais: FieldRef<"Profesional", 'String'>
    readonly provinciaId: FieldRef<"Profesional", 'Int'>
    readonly localidadId: FieldRef<"Profesional", 'Int'>
    readonly barrio: FieldRef<"Profesional", 'String'>
    readonly calle: FieldRef<"Profesional", 'String'>
    readonly numero: FieldRef<"Profesional", 'String'>
    readonly celular: FieldRef<"Profesional", 'String'>
    readonly email: FieldRef<"Profesional", 'String'>
    readonly titulo: FieldRef<"Profesional", 'String'>
    readonly matricula: FieldRef<"Profesional", 'String'>
    readonly especialidad: FieldRef<"Profesional", 'String'>
    readonly universidad: FieldRef<"Profesional", 'String'>
    readonly fechaGraduacion: FieldRef<"Profesional", 'DateTime'>
    readonly horarioTrabajo: FieldRef<"Profesional", 'String'>
    readonly creadoEn: FieldRef<"Profesional", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Profesional", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profesional findUnique
   */
  export type ProfesionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional findUniqueOrThrow
   */
  export type ProfesionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional findFirst
   */
  export type ProfesionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesionals.
     */
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional findFirstOrThrow
   */
  export type ProfesionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesionals.
     */
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional findMany
   */
  export type ProfesionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesionals to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional create
   */
  export type ProfesionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Profesional.
     */
    data: XOR<ProfesionalCreateInput, ProfesionalUncheckedCreateInput>
  }

  /**
   * Profesional createMany
   */
  export type ProfesionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profesionals.
     */
    data: ProfesionalCreateManyInput | ProfesionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profesional createManyAndReturn
   */
  export type ProfesionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * The data used to create many Profesionals.
     */
    data: ProfesionalCreateManyInput | ProfesionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profesional update
   */
  export type ProfesionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Profesional.
     */
    data: XOR<ProfesionalUpdateInput, ProfesionalUncheckedUpdateInput>
    /**
     * Choose, which Profesional to update.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional updateMany
   */
  export type ProfesionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profesionals.
     */
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which Profesionals to update
     */
    where?: ProfesionalWhereInput
    /**
     * Limit how many Profesionals to update.
     */
    limit?: number
  }

  /**
   * Profesional updateManyAndReturn
   */
  export type ProfesionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * The data used to update Profesionals.
     */
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which Profesionals to update
     */
    where?: ProfesionalWhereInput
    /**
     * Limit how many Profesionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profesional upsert
   */
  export type ProfesionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Profesional to update in case it exists.
     */
    where: ProfesionalWhereUniqueInput
    /**
     * In case the Profesional found by the `where` argument doesn't exist, create a new Profesional with this data.
     */
    create: XOR<ProfesionalCreateInput, ProfesionalUncheckedCreateInput>
    /**
     * In case the Profesional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfesionalUpdateInput, ProfesionalUncheckedUpdateInput>
  }

  /**
   * Profesional delete
   */
  export type ProfesionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter which Profesional to delete.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional deleteMany
   */
  export type ProfesionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesionals to delete
     */
    where?: ProfesionalWhereInput
    /**
     * Limit how many Profesionals to delete.
     */
    limit?: number
  }

  /**
   * Profesional.creadoPor
   */
  export type Profesional$creadoPorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Profesional.obrasSociales
   */
  export type Profesional$obrasSocialesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    where?: ObraSocialXProfesionalWhereInput
    orderBy?: ObraSocialXProfesionalOrderByWithRelationInput | ObraSocialXProfesionalOrderByWithRelationInput[]
    cursor?: ObraSocialXProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObraSocialXProfesionalScalarFieldEnum | ObraSocialXProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional.prestaciones
   */
  export type Profesional$prestacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    where?: PrestacionXProfesionalWhereInput
    orderBy?: PrestacionXProfesionalOrderByWithRelationInput | PrestacionXProfesionalOrderByWithRelationInput[]
    cursor?: PrestacionXProfesionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestacionXProfesionalScalarFieldEnum | PrestacionXProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional.turnos
   */
  export type Profesional$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    cursor?: TurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Profesional without action
   */
  export type ProfesionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
  }


  /**
   * Model PrestacionXProfesional
   */

  export type AggregatePrestacionXProfesional = {
    _count: PrestacionXProfesionalCountAggregateOutputType | null
    _avg: PrestacionXProfesionalAvgAggregateOutputType | null
    _sum: PrestacionXProfesionalSumAggregateOutputType | null
    _min: PrestacionXProfesionalMinAggregateOutputType | null
    _max: PrestacionXProfesionalMaxAggregateOutputType | null
  }

  export type PrestacionXProfesionalAvgAggregateOutputType = {
    id: number | null
    profesionalId: number | null
    prestacionId: number | null
  }

  export type PrestacionXProfesionalSumAggregateOutputType = {
    id: number | null
    profesionalId: number | null
    prestacionId: number | null
  }

  export type PrestacionXProfesionalMinAggregateOutputType = {
    id: number | null
    profesionalId: number | null
    prestacionId: number | null
  }

  export type PrestacionXProfesionalMaxAggregateOutputType = {
    id: number | null
    profesionalId: number | null
    prestacionId: number | null
  }

  export type PrestacionXProfesionalCountAggregateOutputType = {
    id: number
    profesionalId: number
    prestacionId: number
    _all: number
  }


  export type PrestacionXProfesionalAvgAggregateInputType = {
    id?: true
    profesionalId?: true
    prestacionId?: true
  }

  export type PrestacionXProfesionalSumAggregateInputType = {
    id?: true
    profesionalId?: true
    prestacionId?: true
  }

  export type PrestacionXProfesionalMinAggregateInputType = {
    id?: true
    profesionalId?: true
    prestacionId?: true
  }

  export type PrestacionXProfesionalMaxAggregateInputType = {
    id?: true
    profesionalId?: true
    prestacionId?: true
  }

  export type PrestacionXProfesionalCountAggregateInputType = {
    id?: true
    profesionalId?: true
    prestacionId?: true
    _all?: true
  }

  export type PrestacionXProfesionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrestacionXProfesional to aggregate.
     */
    where?: PrestacionXProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrestacionXProfesionals to fetch.
     */
    orderBy?: PrestacionXProfesionalOrderByWithRelationInput | PrestacionXProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrestacionXProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrestacionXProfesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrestacionXProfesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrestacionXProfesionals
    **/
    _count?: true | PrestacionXProfesionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestacionXProfesionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestacionXProfesionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestacionXProfesionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestacionXProfesionalMaxAggregateInputType
  }

  export type GetPrestacionXProfesionalAggregateType<T extends PrestacionXProfesionalAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestacionXProfesional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestacionXProfesional[P]>
      : GetScalarType<T[P], AggregatePrestacionXProfesional[P]>
  }




  export type PrestacionXProfesionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrestacionXProfesionalWhereInput
    orderBy?: PrestacionXProfesionalOrderByWithAggregationInput | PrestacionXProfesionalOrderByWithAggregationInput[]
    by: PrestacionXProfesionalScalarFieldEnum[] | PrestacionXProfesionalScalarFieldEnum
    having?: PrestacionXProfesionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestacionXProfesionalCountAggregateInputType | true
    _avg?: PrestacionXProfesionalAvgAggregateInputType
    _sum?: PrestacionXProfesionalSumAggregateInputType
    _min?: PrestacionXProfesionalMinAggregateInputType
    _max?: PrestacionXProfesionalMaxAggregateInputType
  }

  export type PrestacionXProfesionalGroupByOutputType = {
    id: number
    profesionalId: number
    prestacionId: number
    _count: PrestacionXProfesionalCountAggregateOutputType | null
    _avg: PrestacionXProfesionalAvgAggregateOutputType | null
    _sum: PrestacionXProfesionalSumAggregateOutputType | null
    _min: PrestacionXProfesionalMinAggregateOutputType | null
    _max: PrestacionXProfesionalMaxAggregateOutputType | null
  }

  type GetPrestacionXProfesionalGroupByPayload<T extends PrestacionXProfesionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestacionXProfesionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestacionXProfesionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestacionXProfesionalGroupByOutputType[P]>
            : GetScalarType<T[P], PrestacionXProfesionalGroupByOutputType[P]>
        }
      >
    >


  export type PrestacionXProfesionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profesionalId?: boolean
    prestacionId?: boolean
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    prestacion?: boolean | PrestacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestacionXProfesional"]>

  export type PrestacionXProfesionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profesionalId?: boolean
    prestacionId?: boolean
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    prestacion?: boolean | PrestacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestacionXProfesional"]>

  export type PrestacionXProfesionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profesionalId?: boolean
    prestacionId?: boolean
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    prestacion?: boolean | PrestacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestacionXProfesional"]>

  export type PrestacionXProfesionalSelectScalar = {
    id?: boolean
    profesionalId?: boolean
    prestacionId?: boolean
  }

  export type PrestacionXProfesionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profesionalId" | "prestacionId", ExtArgs["result"]["prestacionXProfesional"]>
  export type PrestacionXProfesionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    prestacion?: boolean | PrestacionDefaultArgs<ExtArgs>
  }
  export type PrestacionXProfesionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    prestacion?: boolean | PrestacionDefaultArgs<ExtArgs>
  }
  export type PrestacionXProfesionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    prestacion?: boolean | PrestacionDefaultArgs<ExtArgs>
  }

  export type $PrestacionXProfesionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrestacionXProfesional"
    objects: {
      profesional: Prisma.$ProfesionalPayload<ExtArgs>
      prestacion: Prisma.$PrestacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profesionalId: number
      prestacionId: number
    }, ExtArgs["result"]["prestacionXProfesional"]>
    composites: {}
  }

  type PrestacionXProfesionalGetPayload<S extends boolean | null | undefined | PrestacionXProfesionalDefaultArgs> = $Result.GetResult<Prisma.$PrestacionXProfesionalPayload, S>

  type PrestacionXProfesionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrestacionXProfesionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestacionXProfesionalCountAggregateInputType | true
    }

  export interface PrestacionXProfesionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrestacionXProfesional'], meta: { name: 'PrestacionXProfesional' } }
    /**
     * Find zero or one PrestacionXProfesional that matches the filter.
     * @param {PrestacionXProfesionalFindUniqueArgs} args - Arguments to find a PrestacionXProfesional
     * @example
     * // Get one PrestacionXProfesional
     * const prestacionXProfesional = await prisma.prestacionXProfesional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrestacionXProfesionalFindUniqueArgs>(args: SelectSubset<T, PrestacionXProfesionalFindUniqueArgs<ExtArgs>>): Prisma__PrestacionXProfesionalClient<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrestacionXProfesional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrestacionXProfesionalFindUniqueOrThrowArgs} args - Arguments to find a PrestacionXProfesional
     * @example
     * // Get one PrestacionXProfesional
     * const prestacionXProfesional = await prisma.prestacionXProfesional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrestacionXProfesionalFindUniqueOrThrowArgs>(args: SelectSubset<T, PrestacionXProfesionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrestacionXProfesionalClient<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrestacionXProfesional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionXProfesionalFindFirstArgs} args - Arguments to find a PrestacionXProfesional
     * @example
     * // Get one PrestacionXProfesional
     * const prestacionXProfesional = await prisma.prestacionXProfesional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrestacionXProfesionalFindFirstArgs>(args?: SelectSubset<T, PrestacionXProfesionalFindFirstArgs<ExtArgs>>): Prisma__PrestacionXProfesionalClient<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrestacionXProfesional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionXProfesionalFindFirstOrThrowArgs} args - Arguments to find a PrestacionXProfesional
     * @example
     * // Get one PrestacionXProfesional
     * const prestacionXProfesional = await prisma.prestacionXProfesional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrestacionXProfesionalFindFirstOrThrowArgs>(args?: SelectSubset<T, PrestacionXProfesionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrestacionXProfesionalClient<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrestacionXProfesionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionXProfesionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrestacionXProfesionals
     * const prestacionXProfesionals = await prisma.prestacionXProfesional.findMany()
     * 
     * // Get first 10 PrestacionXProfesionals
     * const prestacionXProfesionals = await prisma.prestacionXProfesional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prestacionXProfesionalWithIdOnly = await prisma.prestacionXProfesional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrestacionXProfesionalFindManyArgs>(args?: SelectSubset<T, PrestacionXProfesionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrestacionXProfesional.
     * @param {PrestacionXProfesionalCreateArgs} args - Arguments to create a PrestacionXProfesional.
     * @example
     * // Create one PrestacionXProfesional
     * const PrestacionXProfesional = await prisma.prestacionXProfesional.create({
     *   data: {
     *     // ... data to create a PrestacionXProfesional
     *   }
     * })
     * 
     */
    create<T extends PrestacionXProfesionalCreateArgs>(args: SelectSubset<T, PrestacionXProfesionalCreateArgs<ExtArgs>>): Prisma__PrestacionXProfesionalClient<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrestacionXProfesionals.
     * @param {PrestacionXProfesionalCreateManyArgs} args - Arguments to create many PrestacionXProfesionals.
     * @example
     * // Create many PrestacionXProfesionals
     * const prestacionXProfesional = await prisma.prestacionXProfesional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrestacionXProfesionalCreateManyArgs>(args?: SelectSubset<T, PrestacionXProfesionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrestacionXProfesionals and returns the data saved in the database.
     * @param {PrestacionXProfesionalCreateManyAndReturnArgs} args - Arguments to create many PrestacionXProfesionals.
     * @example
     * // Create many PrestacionXProfesionals
     * const prestacionXProfesional = await prisma.prestacionXProfesional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrestacionXProfesionals and only return the `id`
     * const prestacionXProfesionalWithIdOnly = await prisma.prestacionXProfesional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrestacionXProfesionalCreateManyAndReturnArgs>(args?: SelectSubset<T, PrestacionXProfesionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrestacionXProfesional.
     * @param {PrestacionXProfesionalDeleteArgs} args - Arguments to delete one PrestacionXProfesional.
     * @example
     * // Delete one PrestacionXProfesional
     * const PrestacionXProfesional = await prisma.prestacionXProfesional.delete({
     *   where: {
     *     // ... filter to delete one PrestacionXProfesional
     *   }
     * })
     * 
     */
    delete<T extends PrestacionXProfesionalDeleteArgs>(args: SelectSubset<T, PrestacionXProfesionalDeleteArgs<ExtArgs>>): Prisma__PrestacionXProfesionalClient<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrestacionXProfesional.
     * @param {PrestacionXProfesionalUpdateArgs} args - Arguments to update one PrestacionXProfesional.
     * @example
     * // Update one PrestacionXProfesional
     * const prestacionXProfesional = await prisma.prestacionXProfesional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrestacionXProfesionalUpdateArgs>(args: SelectSubset<T, PrestacionXProfesionalUpdateArgs<ExtArgs>>): Prisma__PrestacionXProfesionalClient<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrestacionXProfesionals.
     * @param {PrestacionXProfesionalDeleteManyArgs} args - Arguments to filter PrestacionXProfesionals to delete.
     * @example
     * // Delete a few PrestacionXProfesionals
     * const { count } = await prisma.prestacionXProfesional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrestacionXProfesionalDeleteManyArgs>(args?: SelectSubset<T, PrestacionXProfesionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrestacionXProfesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionXProfesionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrestacionXProfesionals
     * const prestacionXProfesional = await prisma.prestacionXProfesional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrestacionXProfesionalUpdateManyArgs>(args: SelectSubset<T, PrestacionXProfesionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrestacionXProfesionals and returns the data updated in the database.
     * @param {PrestacionXProfesionalUpdateManyAndReturnArgs} args - Arguments to update many PrestacionXProfesionals.
     * @example
     * // Update many PrestacionXProfesionals
     * const prestacionXProfesional = await prisma.prestacionXProfesional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrestacionXProfesionals and only return the `id`
     * const prestacionXProfesionalWithIdOnly = await prisma.prestacionXProfesional.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrestacionXProfesionalUpdateManyAndReturnArgs>(args: SelectSubset<T, PrestacionXProfesionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrestacionXProfesional.
     * @param {PrestacionXProfesionalUpsertArgs} args - Arguments to update or create a PrestacionXProfesional.
     * @example
     * // Update or create a PrestacionXProfesional
     * const prestacionXProfesional = await prisma.prestacionXProfesional.upsert({
     *   create: {
     *     // ... data to create a PrestacionXProfesional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrestacionXProfesional we want to update
     *   }
     * })
     */
    upsert<T extends PrestacionXProfesionalUpsertArgs>(args: SelectSubset<T, PrestacionXProfesionalUpsertArgs<ExtArgs>>): Prisma__PrestacionXProfesionalClient<$Result.GetResult<Prisma.$PrestacionXProfesionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrestacionXProfesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionXProfesionalCountArgs} args - Arguments to filter PrestacionXProfesionals to count.
     * @example
     * // Count the number of PrestacionXProfesionals
     * const count = await prisma.prestacionXProfesional.count({
     *   where: {
     *     // ... the filter for the PrestacionXProfesionals we want to count
     *   }
     * })
    **/
    count<T extends PrestacionXProfesionalCountArgs>(
      args?: Subset<T, PrestacionXProfesionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestacionXProfesionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrestacionXProfesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionXProfesionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrestacionXProfesionalAggregateArgs>(args: Subset<T, PrestacionXProfesionalAggregateArgs>): Prisma.PrismaPromise<GetPrestacionXProfesionalAggregateType<T>>

    /**
     * Group by PrestacionXProfesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestacionXProfesionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrestacionXProfesionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrestacionXProfesionalGroupByArgs['orderBy'] }
        : { orderBy?: PrestacionXProfesionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrestacionXProfesionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestacionXProfesionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrestacionXProfesional model
   */
  readonly fields: PrestacionXProfesionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrestacionXProfesional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrestacionXProfesionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profesional<T extends ProfesionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesionalDefaultArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prestacion<T extends PrestacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrestacionDefaultArgs<ExtArgs>>): Prisma__PrestacionClient<$Result.GetResult<Prisma.$PrestacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrestacionXProfesional model
   */
  interface PrestacionXProfesionalFieldRefs {
    readonly id: FieldRef<"PrestacionXProfesional", 'Int'>
    readonly profesionalId: FieldRef<"PrestacionXProfesional", 'Int'>
    readonly prestacionId: FieldRef<"PrestacionXProfesional", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PrestacionXProfesional findUnique
   */
  export type PrestacionXProfesionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which PrestacionXProfesional to fetch.
     */
    where: PrestacionXProfesionalWhereUniqueInput
  }

  /**
   * PrestacionXProfesional findUniqueOrThrow
   */
  export type PrestacionXProfesionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which PrestacionXProfesional to fetch.
     */
    where: PrestacionXProfesionalWhereUniqueInput
  }

  /**
   * PrestacionXProfesional findFirst
   */
  export type PrestacionXProfesionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which PrestacionXProfesional to fetch.
     */
    where?: PrestacionXProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrestacionXProfesionals to fetch.
     */
    orderBy?: PrestacionXProfesionalOrderByWithRelationInput | PrestacionXProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrestacionXProfesionals.
     */
    cursor?: PrestacionXProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrestacionXProfesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrestacionXProfesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrestacionXProfesionals.
     */
    distinct?: PrestacionXProfesionalScalarFieldEnum | PrestacionXProfesionalScalarFieldEnum[]
  }

  /**
   * PrestacionXProfesional findFirstOrThrow
   */
  export type PrestacionXProfesionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which PrestacionXProfesional to fetch.
     */
    where?: PrestacionXProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrestacionXProfesionals to fetch.
     */
    orderBy?: PrestacionXProfesionalOrderByWithRelationInput | PrestacionXProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrestacionXProfesionals.
     */
    cursor?: PrestacionXProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrestacionXProfesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrestacionXProfesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrestacionXProfesionals.
     */
    distinct?: PrestacionXProfesionalScalarFieldEnum | PrestacionXProfesionalScalarFieldEnum[]
  }

  /**
   * PrestacionXProfesional findMany
   */
  export type PrestacionXProfesionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which PrestacionXProfesionals to fetch.
     */
    where?: PrestacionXProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrestacionXProfesionals to fetch.
     */
    orderBy?: PrestacionXProfesionalOrderByWithRelationInput | PrestacionXProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrestacionXProfesionals.
     */
    cursor?: PrestacionXProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrestacionXProfesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrestacionXProfesionals.
     */
    skip?: number
    distinct?: PrestacionXProfesionalScalarFieldEnum | PrestacionXProfesionalScalarFieldEnum[]
  }

  /**
   * PrestacionXProfesional create
   */
  export type PrestacionXProfesionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to create a PrestacionXProfesional.
     */
    data: XOR<PrestacionXProfesionalCreateInput, PrestacionXProfesionalUncheckedCreateInput>
  }

  /**
   * PrestacionXProfesional createMany
   */
  export type PrestacionXProfesionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrestacionXProfesionals.
     */
    data: PrestacionXProfesionalCreateManyInput | PrestacionXProfesionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrestacionXProfesional createManyAndReturn
   */
  export type PrestacionXProfesionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * The data used to create many PrestacionXProfesionals.
     */
    data: PrestacionXProfesionalCreateManyInput | PrestacionXProfesionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrestacionXProfesional update
   */
  export type PrestacionXProfesionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to update a PrestacionXProfesional.
     */
    data: XOR<PrestacionXProfesionalUpdateInput, PrestacionXProfesionalUncheckedUpdateInput>
    /**
     * Choose, which PrestacionXProfesional to update.
     */
    where: PrestacionXProfesionalWhereUniqueInput
  }

  /**
   * PrestacionXProfesional updateMany
   */
  export type PrestacionXProfesionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrestacionXProfesionals.
     */
    data: XOR<PrestacionXProfesionalUpdateManyMutationInput, PrestacionXProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which PrestacionXProfesionals to update
     */
    where?: PrestacionXProfesionalWhereInput
    /**
     * Limit how many PrestacionXProfesionals to update.
     */
    limit?: number
  }

  /**
   * PrestacionXProfesional updateManyAndReturn
   */
  export type PrestacionXProfesionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * The data used to update PrestacionXProfesionals.
     */
    data: XOR<PrestacionXProfesionalUpdateManyMutationInput, PrestacionXProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which PrestacionXProfesionals to update
     */
    where?: PrestacionXProfesionalWhereInput
    /**
     * Limit how many PrestacionXProfesionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrestacionXProfesional upsert
   */
  export type PrestacionXProfesionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * The filter to search for the PrestacionXProfesional to update in case it exists.
     */
    where: PrestacionXProfesionalWhereUniqueInput
    /**
     * In case the PrestacionXProfesional found by the `where` argument doesn't exist, create a new PrestacionXProfesional with this data.
     */
    create: XOR<PrestacionXProfesionalCreateInput, PrestacionXProfesionalUncheckedCreateInput>
    /**
     * In case the PrestacionXProfesional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrestacionXProfesionalUpdateInput, PrestacionXProfesionalUncheckedUpdateInput>
  }

  /**
   * PrestacionXProfesional delete
   */
  export type PrestacionXProfesionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
    /**
     * Filter which PrestacionXProfesional to delete.
     */
    where: PrestacionXProfesionalWhereUniqueInput
  }

  /**
   * PrestacionXProfesional deleteMany
   */
  export type PrestacionXProfesionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrestacionXProfesionals to delete
     */
    where?: PrestacionXProfesionalWhereInput
    /**
     * Limit how many PrestacionXProfesionals to delete.
     */
    limit?: number
  }

  /**
   * PrestacionXProfesional without action
   */
  export type PrestacionXProfesionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestacionXProfesional
     */
    select?: PrestacionXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrestacionXProfesional
     */
    omit?: PrestacionXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrestacionXProfesionalInclude<ExtArgs> | null
  }


  /**
   * Model ObraSocialXProfesional
   */

  export type AggregateObraSocialXProfesional = {
    _count: ObraSocialXProfesionalCountAggregateOutputType | null
    _avg: ObraSocialXProfesionalAvgAggregateOutputType | null
    _sum: ObraSocialXProfesionalSumAggregateOutputType | null
    _min: ObraSocialXProfesionalMinAggregateOutputType | null
    _max: ObraSocialXProfesionalMaxAggregateOutputType | null
  }

  export type ObraSocialXProfesionalAvgAggregateOutputType = {
    id: number | null
    profesionalId: number | null
    obraSocialId: number | null
  }

  export type ObraSocialXProfesionalSumAggregateOutputType = {
    id: number | null
    profesionalId: number | null
    obraSocialId: number | null
  }

  export type ObraSocialXProfesionalMinAggregateOutputType = {
    id: number | null
    profesionalId: number | null
    obraSocialId: number | null
  }

  export type ObraSocialXProfesionalMaxAggregateOutputType = {
    id: number | null
    profesionalId: number | null
    obraSocialId: number | null
  }

  export type ObraSocialXProfesionalCountAggregateOutputType = {
    id: number
    profesionalId: number
    obraSocialId: number
    _all: number
  }


  export type ObraSocialXProfesionalAvgAggregateInputType = {
    id?: true
    profesionalId?: true
    obraSocialId?: true
  }

  export type ObraSocialXProfesionalSumAggregateInputType = {
    id?: true
    profesionalId?: true
    obraSocialId?: true
  }

  export type ObraSocialXProfesionalMinAggregateInputType = {
    id?: true
    profesionalId?: true
    obraSocialId?: true
  }

  export type ObraSocialXProfesionalMaxAggregateInputType = {
    id?: true
    profesionalId?: true
    obraSocialId?: true
  }

  export type ObraSocialXProfesionalCountAggregateInputType = {
    id?: true
    profesionalId?: true
    obraSocialId?: true
    _all?: true
  }

  export type ObraSocialXProfesionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObraSocialXProfesional to aggregate.
     */
    where?: ObraSocialXProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocialXProfesionals to fetch.
     */
    orderBy?: ObraSocialXProfesionalOrderByWithRelationInput | ObraSocialXProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObraSocialXProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocialXProfesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocialXProfesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObraSocialXProfesionals
    **/
    _count?: true | ObraSocialXProfesionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObraSocialXProfesionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObraSocialXProfesionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObraSocialXProfesionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObraSocialXProfesionalMaxAggregateInputType
  }

  export type GetObraSocialXProfesionalAggregateType<T extends ObraSocialXProfesionalAggregateArgs> = {
        [P in keyof T & keyof AggregateObraSocialXProfesional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObraSocialXProfesional[P]>
      : GetScalarType<T[P], AggregateObraSocialXProfesional[P]>
  }




  export type ObraSocialXProfesionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraSocialXProfesionalWhereInput
    orderBy?: ObraSocialXProfesionalOrderByWithAggregationInput | ObraSocialXProfesionalOrderByWithAggregationInput[]
    by: ObraSocialXProfesionalScalarFieldEnum[] | ObraSocialXProfesionalScalarFieldEnum
    having?: ObraSocialXProfesionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObraSocialXProfesionalCountAggregateInputType | true
    _avg?: ObraSocialXProfesionalAvgAggregateInputType
    _sum?: ObraSocialXProfesionalSumAggregateInputType
    _min?: ObraSocialXProfesionalMinAggregateInputType
    _max?: ObraSocialXProfesionalMaxAggregateInputType
  }

  export type ObraSocialXProfesionalGroupByOutputType = {
    id: number
    profesionalId: number
    obraSocialId: number
    _count: ObraSocialXProfesionalCountAggregateOutputType | null
    _avg: ObraSocialXProfesionalAvgAggregateOutputType | null
    _sum: ObraSocialXProfesionalSumAggregateOutputType | null
    _min: ObraSocialXProfesionalMinAggregateOutputType | null
    _max: ObraSocialXProfesionalMaxAggregateOutputType | null
  }

  type GetObraSocialXProfesionalGroupByPayload<T extends ObraSocialXProfesionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObraSocialXProfesionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObraSocialXProfesionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObraSocialXProfesionalGroupByOutputType[P]>
            : GetScalarType<T[P], ObraSocialXProfesionalGroupByOutputType[P]>
        }
      >
    >


  export type ObraSocialXProfesionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profesionalId?: boolean
    obraSocialId?: boolean
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obraSocialXProfesional"]>

  export type ObraSocialXProfesionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profesionalId?: boolean
    obraSocialId?: boolean
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obraSocialXProfesional"]>

  export type ObraSocialXProfesionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profesionalId?: boolean
    obraSocialId?: boolean
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obraSocialXProfesional"]>

  export type ObraSocialXProfesionalSelectScalar = {
    id?: boolean
    profesionalId?: boolean
    obraSocialId?: boolean
  }

  export type ObraSocialXProfesionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profesionalId" | "obraSocialId", ExtArgs["result"]["obraSocialXProfesional"]>
  export type ObraSocialXProfesionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }
  export type ObraSocialXProfesionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }
  export type ObraSocialXProfesionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    obraSocial?: boolean | ObraSocialDefaultArgs<ExtArgs>
  }

  export type $ObraSocialXProfesionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObraSocialXProfesional"
    objects: {
      profesional: Prisma.$ProfesionalPayload<ExtArgs>
      obraSocial: Prisma.$ObraSocialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profesionalId: number
      obraSocialId: number
    }, ExtArgs["result"]["obraSocialXProfesional"]>
    composites: {}
  }

  type ObraSocialXProfesionalGetPayload<S extends boolean | null | undefined | ObraSocialXProfesionalDefaultArgs> = $Result.GetResult<Prisma.$ObraSocialXProfesionalPayload, S>

  type ObraSocialXProfesionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObraSocialXProfesionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObraSocialXProfesionalCountAggregateInputType | true
    }

  export interface ObraSocialXProfesionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObraSocialXProfesional'], meta: { name: 'ObraSocialXProfesional' } }
    /**
     * Find zero or one ObraSocialXProfesional that matches the filter.
     * @param {ObraSocialXProfesionalFindUniqueArgs} args - Arguments to find a ObraSocialXProfesional
     * @example
     * // Get one ObraSocialXProfesional
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObraSocialXProfesionalFindUniqueArgs>(args: SelectSubset<T, ObraSocialXProfesionalFindUniqueArgs<ExtArgs>>): Prisma__ObraSocialXProfesionalClient<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObraSocialXProfesional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObraSocialXProfesionalFindUniqueOrThrowArgs} args - Arguments to find a ObraSocialXProfesional
     * @example
     * // Get one ObraSocialXProfesional
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObraSocialXProfesionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ObraSocialXProfesionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObraSocialXProfesionalClient<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObraSocialXProfesional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialXProfesionalFindFirstArgs} args - Arguments to find a ObraSocialXProfesional
     * @example
     * // Get one ObraSocialXProfesional
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObraSocialXProfesionalFindFirstArgs>(args?: SelectSubset<T, ObraSocialXProfesionalFindFirstArgs<ExtArgs>>): Prisma__ObraSocialXProfesionalClient<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObraSocialXProfesional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialXProfesionalFindFirstOrThrowArgs} args - Arguments to find a ObraSocialXProfesional
     * @example
     * // Get one ObraSocialXProfesional
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObraSocialXProfesionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ObraSocialXProfesionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObraSocialXProfesionalClient<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObraSocialXProfesionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialXProfesionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObraSocialXProfesionals
     * const obraSocialXProfesionals = await prisma.obraSocialXProfesional.findMany()
     * 
     * // Get first 10 ObraSocialXProfesionals
     * const obraSocialXProfesionals = await prisma.obraSocialXProfesional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obraSocialXProfesionalWithIdOnly = await prisma.obraSocialXProfesional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObraSocialXProfesionalFindManyArgs>(args?: SelectSubset<T, ObraSocialXProfesionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObraSocialXProfesional.
     * @param {ObraSocialXProfesionalCreateArgs} args - Arguments to create a ObraSocialXProfesional.
     * @example
     * // Create one ObraSocialXProfesional
     * const ObraSocialXProfesional = await prisma.obraSocialXProfesional.create({
     *   data: {
     *     // ... data to create a ObraSocialXProfesional
     *   }
     * })
     * 
     */
    create<T extends ObraSocialXProfesionalCreateArgs>(args: SelectSubset<T, ObraSocialXProfesionalCreateArgs<ExtArgs>>): Prisma__ObraSocialXProfesionalClient<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObraSocialXProfesionals.
     * @param {ObraSocialXProfesionalCreateManyArgs} args - Arguments to create many ObraSocialXProfesionals.
     * @example
     * // Create many ObraSocialXProfesionals
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObraSocialXProfesionalCreateManyArgs>(args?: SelectSubset<T, ObraSocialXProfesionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObraSocialXProfesionals and returns the data saved in the database.
     * @param {ObraSocialXProfesionalCreateManyAndReturnArgs} args - Arguments to create many ObraSocialXProfesionals.
     * @example
     * // Create many ObraSocialXProfesionals
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObraSocialXProfesionals and only return the `id`
     * const obraSocialXProfesionalWithIdOnly = await prisma.obraSocialXProfesional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObraSocialXProfesionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ObraSocialXProfesionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ObraSocialXProfesional.
     * @param {ObraSocialXProfesionalDeleteArgs} args - Arguments to delete one ObraSocialXProfesional.
     * @example
     * // Delete one ObraSocialXProfesional
     * const ObraSocialXProfesional = await prisma.obraSocialXProfesional.delete({
     *   where: {
     *     // ... filter to delete one ObraSocialXProfesional
     *   }
     * })
     * 
     */
    delete<T extends ObraSocialXProfesionalDeleteArgs>(args: SelectSubset<T, ObraSocialXProfesionalDeleteArgs<ExtArgs>>): Prisma__ObraSocialXProfesionalClient<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObraSocialXProfesional.
     * @param {ObraSocialXProfesionalUpdateArgs} args - Arguments to update one ObraSocialXProfesional.
     * @example
     * // Update one ObraSocialXProfesional
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObraSocialXProfesionalUpdateArgs>(args: SelectSubset<T, ObraSocialXProfesionalUpdateArgs<ExtArgs>>): Prisma__ObraSocialXProfesionalClient<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObraSocialXProfesionals.
     * @param {ObraSocialXProfesionalDeleteManyArgs} args - Arguments to filter ObraSocialXProfesionals to delete.
     * @example
     * // Delete a few ObraSocialXProfesionals
     * const { count } = await prisma.obraSocialXProfesional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObraSocialXProfesionalDeleteManyArgs>(args?: SelectSubset<T, ObraSocialXProfesionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObraSocialXProfesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialXProfesionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObraSocialXProfesionals
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObraSocialXProfesionalUpdateManyArgs>(args: SelectSubset<T, ObraSocialXProfesionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObraSocialXProfesionals and returns the data updated in the database.
     * @param {ObraSocialXProfesionalUpdateManyAndReturnArgs} args - Arguments to update many ObraSocialXProfesionals.
     * @example
     * // Update many ObraSocialXProfesionals
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ObraSocialXProfesionals and only return the `id`
     * const obraSocialXProfesionalWithIdOnly = await prisma.obraSocialXProfesional.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObraSocialXProfesionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ObraSocialXProfesionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ObraSocialXProfesional.
     * @param {ObraSocialXProfesionalUpsertArgs} args - Arguments to update or create a ObraSocialXProfesional.
     * @example
     * // Update or create a ObraSocialXProfesional
     * const obraSocialXProfesional = await prisma.obraSocialXProfesional.upsert({
     *   create: {
     *     // ... data to create a ObraSocialXProfesional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObraSocialXProfesional we want to update
     *   }
     * })
     */
    upsert<T extends ObraSocialXProfesionalUpsertArgs>(args: SelectSubset<T, ObraSocialXProfesionalUpsertArgs<ExtArgs>>): Prisma__ObraSocialXProfesionalClient<$Result.GetResult<Prisma.$ObraSocialXProfesionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObraSocialXProfesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialXProfesionalCountArgs} args - Arguments to filter ObraSocialXProfesionals to count.
     * @example
     * // Count the number of ObraSocialXProfesionals
     * const count = await prisma.obraSocialXProfesional.count({
     *   where: {
     *     // ... the filter for the ObraSocialXProfesionals we want to count
     *   }
     * })
    **/
    count<T extends ObraSocialXProfesionalCountArgs>(
      args?: Subset<T, ObraSocialXProfesionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObraSocialXProfesionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObraSocialXProfesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialXProfesionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObraSocialXProfesionalAggregateArgs>(args: Subset<T, ObraSocialXProfesionalAggregateArgs>): Prisma.PrismaPromise<GetObraSocialXProfesionalAggregateType<T>>

    /**
     * Group by ObraSocialXProfesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialXProfesionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObraSocialXProfesionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObraSocialXProfesionalGroupByArgs['orderBy'] }
        : { orderBy?: ObraSocialXProfesionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObraSocialXProfesionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObraSocialXProfesionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObraSocialXProfesional model
   */
  readonly fields: ObraSocialXProfesionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObraSocialXProfesional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObraSocialXProfesionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profesional<T extends ProfesionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesionalDefaultArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    obraSocial<T extends ObraSocialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraSocialDefaultArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObraSocialXProfesional model
   */
  interface ObraSocialXProfesionalFieldRefs {
    readonly id: FieldRef<"ObraSocialXProfesional", 'Int'>
    readonly profesionalId: FieldRef<"ObraSocialXProfesional", 'Int'>
    readonly obraSocialId: FieldRef<"ObraSocialXProfesional", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ObraSocialXProfesional findUnique
   */
  export type ObraSocialXProfesionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocialXProfesional to fetch.
     */
    where: ObraSocialXProfesionalWhereUniqueInput
  }

  /**
   * ObraSocialXProfesional findUniqueOrThrow
   */
  export type ObraSocialXProfesionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocialXProfesional to fetch.
     */
    where: ObraSocialXProfesionalWhereUniqueInput
  }

  /**
   * ObraSocialXProfesional findFirst
   */
  export type ObraSocialXProfesionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocialXProfesional to fetch.
     */
    where?: ObraSocialXProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocialXProfesionals to fetch.
     */
    orderBy?: ObraSocialXProfesionalOrderByWithRelationInput | ObraSocialXProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObraSocialXProfesionals.
     */
    cursor?: ObraSocialXProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocialXProfesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocialXProfesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObraSocialXProfesionals.
     */
    distinct?: ObraSocialXProfesionalScalarFieldEnum | ObraSocialXProfesionalScalarFieldEnum[]
  }

  /**
   * ObraSocialXProfesional findFirstOrThrow
   */
  export type ObraSocialXProfesionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocialXProfesional to fetch.
     */
    where?: ObraSocialXProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocialXProfesionals to fetch.
     */
    orderBy?: ObraSocialXProfesionalOrderByWithRelationInput | ObraSocialXProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObraSocialXProfesionals.
     */
    cursor?: ObraSocialXProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocialXProfesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocialXProfesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObraSocialXProfesionals.
     */
    distinct?: ObraSocialXProfesionalScalarFieldEnum | ObraSocialXProfesionalScalarFieldEnum[]
  }

  /**
   * ObraSocialXProfesional findMany
   */
  export type ObraSocialXProfesionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocialXProfesionals to fetch.
     */
    where?: ObraSocialXProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocialXProfesionals to fetch.
     */
    orderBy?: ObraSocialXProfesionalOrderByWithRelationInput | ObraSocialXProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObraSocialXProfesionals.
     */
    cursor?: ObraSocialXProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocialXProfesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocialXProfesionals.
     */
    skip?: number
    distinct?: ObraSocialXProfesionalScalarFieldEnum | ObraSocialXProfesionalScalarFieldEnum[]
  }

  /**
   * ObraSocialXProfesional create
   */
  export type ObraSocialXProfesionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to create a ObraSocialXProfesional.
     */
    data: XOR<ObraSocialXProfesionalCreateInput, ObraSocialXProfesionalUncheckedCreateInput>
  }

  /**
   * ObraSocialXProfesional createMany
   */
  export type ObraSocialXProfesionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObraSocialXProfesionals.
     */
    data: ObraSocialXProfesionalCreateManyInput | ObraSocialXProfesionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObraSocialXProfesional createManyAndReturn
   */
  export type ObraSocialXProfesionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * The data used to create many ObraSocialXProfesionals.
     */
    data: ObraSocialXProfesionalCreateManyInput | ObraSocialXProfesionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObraSocialXProfesional update
   */
  export type ObraSocialXProfesionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to update a ObraSocialXProfesional.
     */
    data: XOR<ObraSocialXProfesionalUpdateInput, ObraSocialXProfesionalUncheckedUpdateInput>
    /**
     * Choose, which ObraSocialXProfesional to update.
     */
    where: ObraSocialXProfesionalWhereUniqueInput
  }

  /**
   * ObraSocialXProfesional updateMany
   */
  export type ObraSocialXProfesionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObraSocialXProfesionals.
     */
    data: XOR<ObraSocialXProfesionalUpdateManyMutationInput, ObraSocialXProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which ObraSocialXProfesionals to update
     */
    where?: ObraSocialXProfesionalWhereInput
    /**
     * Limit how many ObraSocialXProfesionals to update.
     */
    limit?: number
  }

  /**
   * ObraSocialXProfesional updateManyAndReturn
   */
  export type ObraSocialXProfesionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * The data used to update ObraSocialXProfesionals.
     */
    data: XOR<ObraSocialXProfesionalUpdateManyMutationInput, ObraSocialXProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which ObraSocialXProfesionals to update
     */
    where?: ObraSocialXProfesionalWhereInput
    /**
     * Limit how many ObraSocialXProfesionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObraSocialXProfesional upsert
   */
  export type ObraSocialXProfesionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * The filter to search for the ObraSocialXProfesional to update in case it exists.
     */
    where: ObraSocialXProfesionalWhereUniqueInput
    /**
     * In case the ObraSocialXProfesional found by the `where` argument doesn't exist, create a new ObraSocialXProfesional with this data.
     */
    create: XOR<ObraSocialXProfesionalCreateInput, ObraSocialXProfesionalUncheckedCreateInput>
    /**
     * In case the ObraSocialXProfesional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObraSocialXProfesionalUpdateInput, ObraSocialXProfesionalUncheckedUpdateInput>
  }

  /**
   * ObraSocialXProfesional delete
   */
  export type ObraSocialXProfesionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
    /**
     * Filter which ObraSocialXProfesional to delete.
     */
    where: ObraSocialXProfesionalWhereUniqueInput
  }

  /**
   * ObraSocialXProfesional deleteMany
   */
  export type ObraSocialXProfesionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObraSocialXProfesionals to delete
     */
    where?: ObraSocialXProfesionalWhereInput
    /**
     * Limit how many ObraSocialXProfesionals to delete.
     */
    limit?: number
  }

  /**
   * ObraSocialXProfesional without action
   */
  export type ObraSocialXProfesionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialXProfesional
     */
    select?: ObraSocialXProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObraSocialXProfesional
     */
    omit?: ObraSocialXProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialXProfesionalInclude<ExtArgs> | null
  }


  /**
   * Model Turno
   */

  export type AggregateTurno = {
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  export type TurnoAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    profesionalId: number | null
  }

  export type TurnoSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    profesionalId: number | null
  }

  export type TurnoMinAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    profesionalId: number | null
    fecha: Date | null
    hora: string | null
    estado: $Enums.EstadoTurno | null
    creadoEn: Date | null
  }

  export type TurnoMaxAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    profesionalId: number | null
    fecha: Date | null
    hora: string | null
    estado: $Enums.EstadoTurno | null
    creadoEn: Date | null
  }

  export type TurnoCountAggregateOutputType = {
    id: number
    pacienteId: number
    profesionalId: number
    fecha: number
    hora: number
    estado: number
    creadoEn: number
    _all: number
  }


  export type TurnoAvgAggregateInputType = {
    id?: true
    pacienteId?: true
    profesionalId?: true
  }

  export type TurnoSumAggregateInputType = {
    id?: true
    pacienteId?: true
    profesionalId?: true
  }

  export type TurnoMinAggregateInputType = {
    id?: true
    pacienteId?: true
    profesionalId?: true
    fecha?: true
    hora?: true
    estado?: true
    creadoEn?: true
  }

  export type TurnoMaxAggregateInputType = {
    id?: true
    pacienteId?: true
    profesionalId?: true
    fecha?: true
    hora?: true
    estado?: true
    creadoEn?: true
  }

  export type TurnoCountAggregateInputType = {
    id?: true
    pacienteId?: true
    profesionalId?: true
    fecha?: true
    hora?: true
    estado?: true
    creadoEn?: true
    _all?: true
  }

  export type TurnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turno to aggregate.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turnos
    **/
    _count?: true | TurnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoMaxAggregateInputType
  }

  export type GetTurnoAggregateType<T extends TurnoAggregateArgs> = {
        [P in keyof T & keyof AggregateTurno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurno[P]>
      : GetScalarType<T[P], AggregateTurno[P]>
  }




  export type TurnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoWhereInput
    orderBy?: TurnoOrderByWithAggregationInput | TurnoOrderByWithAggregationInput[]
    by: TurnoScalarFieldEnum[] | TurnoScalarFieldEnum
    having?: TurnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoCountAggregateInputType | true
    _avg?: TurnoAvgAggregateInputType
    _sum?: TurnoSumAggregateInputType
    _min?: TurnoMinAggregateInputType
    _max?: TurnoMaxAggregateInputType
  }

  export type TurnoGroupByOutputType = {
    id: number
    pacienteId: number
    profesionalId: number
    fecha: Date
    hora: string
    estado: $Enums.EstadoTurno
    creadoEn: Date
    _count: TurnoCountAggregateOutputType | null
    _avg: TurnoAvgAggregateOutputType | null
    _sum: TurnoSumAggregateOutputType | null
    _min: TurnoMinAggregateOutputType | null
    _max: TurnoMaxAggregateOutputType | null
  }

  type GetTurnoGroupByPayload<T extends TurnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoGroupByOutputType[P]>
        }
      >
    >


  export type TurnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    profesionalId?: boolean
    fecha?: boolean
    hora?: boolean
    estado?: boolean
    creadoEn?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    detalles?: boolean | Turno$detallesArgs<ExtArgs>
    _count?: boolean | TurnoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    profesionalId?: boolean
    fecha?: boolean
    hora?: boolean
    estado?: boolean
    creadoEn?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pacienteId?: boolean
    profesionalId?: boolean
    fecha?: boolean
    hora?: boolean
    estado?: boolean
    creadoEn?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turno"]>

  export type TurnoSelectScalar = {
    id?: boolean
    pacienteId?: boolean
    profesionalId?: boolean
    fecha?: boolean
    hora?: boolean
    estado?: boolean
    creadoEn?: boolean
  }

  export type TurnoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pacienteId" | "profesionalId" | "fecha" | "hora" | "estado" | "creadoEn", ExtArgs["result"]["turno"]>
  export type TurnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    detalles?: boolean | Turno$detallesArgs<ExtArgs>
    _count?: boolean | TurnoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurnoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
  }
  export type TurnoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
  }

  export type $TurnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turno"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      profesional: Prisma.$ProfesionalPayload<ExtArgs>
      detalles: Prisma.$DetalleTurnoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pacienteId: number
      profesionalId: number
      fecha: Date
      hora: string
      estado: $Enums.EstadoTurno
      creadoEn: Date
    }, ExtArgs["result"]["turno"]>
    composites: {}
  }

  type TurnoGetPayload<S extends boolean | null | undefined | TurnoDefaultArgs> = $Result.GetResult<Prisma.$TurnoPayload, S>

  type TurnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurnoCountAggregateInputType | true
    }

  export interface TurnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turno'], meta: { name: 'Turno' } }
    /**
     * Find zero or one Turno that matches the filter.
     * @param {TurnoFindUniqueArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnoFindUniqueArgs>(args: SelectSubset<T, TurnoFindUniqueArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Turno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurnoFindUniqueOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnoFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnoFindFirstArgs>(args?: SelectSubset<T, TurnoFindFirstArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Turno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindFirstOrThrowArgs} args - Arguments to find a Turno
     * @example
     * // Get one Turno
     * const turno = await prisma.turno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnoFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Turnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turnos
     * const turnos = await prisma.turno.findMany()
     * 
     * // Get first 10 Turnos
     * const turnos = await prisma.turno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoWithIdOnly = await prisma.turno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnoFindManyArgs>(args?: SelectSubset<T, TurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Turno.
     * @param {TurnoCreateArgs} args - Arguments to create a Turno.
     * @example
     * // Create one Turno
     * const Turno = await prisma.turno.create({
     *   data: {
     *     // ... data to create a Turno
     *   }
     * })
     * 
     */
    create<T extends TurnoCreateArgs>(args: SelectSubset<T, TurnoCreateArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Turnos.
     * @param {TurnoCreateManyArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turno = await prisma.turno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnoCreateManyArgs>(args?: SelectSubset<T, TurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turnos and returns the data saved in the database.
     * @param {TurnoCreateManyAndReturnArgs} args - Arguments to create many Turnos.
     * @example
     * // Create many Turnos
     * const turno = await prisma.turno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turnos and only return the `id`
     * const turnoWithIdOnly = await prisma.turno.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TurnoCreateManyAndReturnArgs>(args?: SelectSubset<T, TurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Turno.
     * @param {TurnoDeleteArgs} args - Arguments to delete one Turno.
     * @example
     * // Delete one Turno
     * const Turno = await prisma.turno.delete({
     *   where: {
     *     // ... filter to delete one Turno
     *   }
     * })
     * 
     */
    delete<T extends TurnoDeleteArgs>(args: SelectSubset<T, TurnoDeleteArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Turno.
     * @param {TurnoUpdateArgs} args - Arguments to update one Turno.
     * @example
     * // Update one Turno
     * const turno = await prisma.turno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnoUpdateArgs>(args: SelectSubset<T, TurnoUpdateArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Turnos.
     * @param {TurnoDeleteManyArgs} args - Arguments to filter Turnos to delete.
     * @example
     * // Delete a few Turnos
     * const { count } = await prisma.turno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnoDeleteManyArgs>(args?: SelectSubset<T, TurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turnos
     * const turno = await prisma.turno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnoUpdateManyArgs>(args: SelectSubset<T, TurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turnos and returns the data updated in the database.
     * @param {TurnoUpdateManyAndReturnArgs} args - Arguments to update many Turnos.
     * @example
     * // Update many Turnos
     * const turno = await prisma.turno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Turnos and only return the `id`
     * const turnoWithIdOnly = await prisma.turno.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TurnoUpdateManyAndReturnArgs>(args: SelectSubset<T, TurnoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Turno.
     * @param {TurnoUpsertArgs} args - Arguments to update or create a Turno.
     * @example
     * // Update or create a Turno
     * const turno = await prisma.turno.upsert({
     *   create: {
     *     // ... data to create a Turno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turno we want to update
     *   }
     * })
     */
    upsert<T extends TurnoUpsertArgs>(args: SelectSubset<T, TurnoUpsertArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Turnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoCountArgs} args - Arguments to filter Turnos to count.
     * @example
     * // Count the number of Turnos
     * const count = await prisma.turno.count({
     *   where: {
     *     // ... the filter for the Turnos we want to count
     *   }
     * })
    **/
    count<T extends TurnoCountArgs>(
      args?: Subset<T, TurnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnoAggregateArgs>(args: Subset<T, TurnoAggregateArgs>): Prisma.PrismaPromise<GetTurnoAggregateType<T>>

    /**
     * Group by Turno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoGroupByArgs['orderBy'] }
        : { orderBy?: TurnoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turno model
   */
  readonly fields: TurnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profesional<T extends ProfesionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesionalDefaultArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Turno$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Turno$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Turno model
   */
  interface TurnoFieldRefs {
    readonly id: FieldRef<"Turno", 'Int'>
    readonly pacienteId: FieldRef<"Turno", 'Int'>
    readonly profesionalId: FieldRef<"Turno", 'Int'>
    readonly fecha: FieldRef<"Turno", 'DateTime'>
    readonly hora: FieldRef<"Turno", 'String'>
    readonly estado: FieldRef<"Turno", 'EstadoTurno'>
    readonly creadoEn: FieldRef<"Turno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turno findUnique
   */
  export type TurnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno findUniqueOrThrow
   */
  export type TurnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno findFirst
   */
  export type TurnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno findFirstOrThrow
   */
  export type TurnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turno to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turnos.
     */
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno findMany
   */
  export type TurnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter, which Turnos to fetch.
     */
    where?: TurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turnos to fetch.
     */
    orderBy?: TurnoOrderByWithRelationInput | TurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turnos.
     */
    cursor?: TurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turnos.
     */
    skip?: number
    distinct?: TurnoScalarFieldEnum | TurnoScalarFieldEnum[]
  }

  /**
   * Turno create
   */
  export type TurnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to create a Turno.
     */
    data: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
  }

  /**
   * Turno createMany
   */
  export type TurnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turno createManyAndReturn
   */
  export type TurnoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * The data used to create many Turnos.
     */
    data: TurnoCreateManyInput | TurnoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turno update
   */
  export type TurnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The data needed to update a Turno.
     */
    data: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
    /**
     * Choose, which Turno to update.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno updateMany
   */
  export type TurnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnoWhereInput
    /**
     * Limit how many Turnos to update.
     */
    limit?: number
  }

  /**
   * Turno updateManyAndReturn
   */
  export type TurnoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * The data used to update Turnos.
     */
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyInput>
    /**
     * Filter which Turnos to update
     */
    where?: TurnoWhereInput
    /**
     * Limit how many Turnos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turno upsert
   */
  export type TurnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * The filter to search for the Turno to update in case it exists.
     */
    where: TurnoWhereUniqueInput
    /**
     * In case the Turno found by the `where` argument doesn't exist, create a new Turno with this data.
     */
    create: XOR<TurnoCreateInput, TurnoUncheckedCreateInput>
    /**
     * In case the Turno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoUpdateInput, TurnoUncheckedUpdateInput>
  }

  /**
   * Turno delete
   */
  export type TurnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
    /**
     * Filter which Turno to delete.
     */
    where: TurnoWhereUniqueInput
  }

  /**
   * Turno deleteMany
   */
  export type TurnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turnos to delete
     */
    where?: TurnoWhereInput
    /**
     * Limit how many Turnos to delete.
     */
    limit?: number
  }

  /**
   * Turno.detalles
   */
  export type Turno$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    where?: DetalleTurnoWhereInput
    orderBy?: DetalleTurnoOrderByWithRelationInput | DetalleTurnoOrderByWithRelationInput[]
    cursor?: DetalleTurnoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleTurnoScalarFieldEnum | DetalleTurnoScalarFieldEnum[]
  }

  /**
   * Turno without action
   */
  export type TurnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turno
     */
    select?: TurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Turno
     */
    omit?: TurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoInclude<ExtArgs> | null
  }


  /**
   * Model DetalleTurno
   */

  export type AggregateDetalleTurno = {
    _count: DetalleTurnoCountAggregateOutputType | null
    _avg: DetalleTurnoAvgAggregateOutputType | null
    _sum: DetalleTurnoSumAggregateOutputType | null
    _min: DetalleTurnoMinAggregateOutputType | null
    _max: DetalleTurnoMaxAggregateOutputType | null
  }

  export type DetalleTurnoAvgAggregateOutputType = {
    id: number | null
    turnoId: number | null
  }

  export type DetalleTurnoSumAggregateOutputType = {
    id: number | null
    turnoId: number | null
  }

  export type DetalleTurnoMinAggregateOutputType = {
    id: number | null
    turnoId: number | null
    descripcion: string | null
    observacion: string | null
    creadoEn: Date | null
  }

  export type DetalleTurnoMaxAggregateOutputType = {
    id: number | null
    turnoId: number | null
    descripcion: string | null
    observacion: string | null
    creadoEn: Date | null
  }

  export type DetalleTurnoCountAggregateOutputType = {
    id: number
    turnoId: number
    descripcion: number
    observacion: number
    creadoEn: number
    _all: number
  }


  export type DetalleTurnoAvgAggregateInputType = {
    id?: true
    turnoId?: true
  }

  export type DetalleTurnoSumAggregateInputType = {
    id?: true
    turnoId?: true
  }

  export type DetalleTurnoMinAggregateInputType = {
    id?: true
    turnoId?: true
    descripcion?: true
    observacion?: true
    creadoEn?: true
  }

  export type DetalleTurnoMaxAggregateInputType = {
    id?: true
    turnoId?: true
    descripcion?: true
    observacion?: true
    creadoEn?: true
  }

  export type DetalleTurnoCountAggregateInputType = {
    id?: true
    turnoId?: true
    descripcion?: true
    observacion?: true
    creadoEn?: true
    _all?: true
  }

  export type DetalleTurnoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleTurno to aggregate.
     */
    where?: DetalleTurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleTurnos to fetch.
     */
    orderBy?: DetalleTurnoOrderByWithRelationInput | DetalleTurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleTurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleTurnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleTurnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleTurnos
    **/
    _count?: true | DetalleTurnoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleTurnoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleTurnoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleTurnoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleTurnoMaxAggregateInputType
  }

  export type GetDetalleTurnoAggregateType<T extends DetalleTurnoAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleTurno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleTurno[P]>
      : GetScalarType<T[P], AggregateDetalleTurno[P]>
  }




  export type DetalleTurnoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleTurnoWhereInput
    orderBy?: DetalleTurnoOrderByWithAggregationInput | DetalleTurnoOrderByWithAggregationInput[]
    by: DetalleTurnoScalarFieldEnum[] | DetalleTurnoScalarFieldEnum
    having?: DetalleTurnoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleTurnoCountAggregateInputType | true
    _avg?: DetalleTurnoAvgAggregateInputType
    _sum?: DetalleTurnoSumAggregateInputType
    _min?: DetalleTurnoMinAggregateInputType
    _max?: DetalleTurnoMaxAggregateInputType
  }

  export type DetalleTurnoGroupByOutputType = {
    id: number
    turnoId: number
    descripcion: string
    observacion: string | null
    creadoEn: Date
    _count: DetalleTurnoCountAggregateOutputType | null
    _avg: DetalleTurnoAvgAggregateOutputType | null
    _sum: DetalleTurnoSumAggregateOutputType | null
    _min: DetalleTurnoMinAggregateOutputType | null
    _max: DetalleTurnoMaxAggregateOutputType | null
  }

  type GetDetalleTurnoGroupByPayload<T extends DetalleTurnoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleTurnoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleTurnoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleTurnoGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleTurnoGroupByOutputType[P]>
        }
      >
    >


  export type DetalleTurnoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnoId?: boolean
    descripcion?: boolean
    observacion?: boolean
    creadoEn?: boolean
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleTurno"]>

  export type DetalleTurnoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnoId?: boolean
    descripcion?: boolean
    observacion?: boolean
    creadoEn?: boolean
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleTurno"]>

  export type DetalleTurnoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnoId?: boolean
    descripcion?: boolean
    observacion?: boolean
    creadoEn?: boolean
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleTurno"]>

  export type DetalleTurnoSelectScalar = {
    id?: boolean
    turnoId?: boolean
    descripcion?: boolean
    observacion?: boolean
    creadoEn?: boolean
  }

  export type DetalleTurnoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "turnoId" | "descripcion" | "observacion" | "creadoEn", ExtArgs["result"]["detalleTurno"]>
  export type DetalleTurnoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
  }
  export type DetalleTurnoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
  }
  export type DetalleTurnoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turno?: boolean | TurnoDefaultArgs<ExtArgs>
  }

  export type $DetalleTurnoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleTurno"
    objects: {
      turno: Prisma.$TurnoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      turnoId: number
      descripcion: string
      observacion: string | null
      creadoEn: Date
    }, ExtArgs["result"]["detalleTurno"]>
    composites: {}
  }

  type DetalleTurnoGetPayload<S extends boolean | null | undefined | DetalleTurnoDefaultArgs> = $Result.GetResult<Prisma.$DetalleTurnoPayload, S>

  type DetalleTurnoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleTurnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleTurnoCountAggregateInputType | true
    }

  export interface DetalleTurnoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleTurno'], meta: { name: 'DetalleTurno' } }
    /**
     * Find zero or one DetalleTurno that matches the filter.
     * @param {DetalleTurnoFindUniqueArgs} args - Arguments to find a DetalleTurno
     * @example
     * // Get one DetalleTurno
     * const detalleTurno = await prisma.detalleTurno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleTurnoFindUniqueArgs>(args: SelectSubset<T, DetalleTurnoFindUniqueArgs<ExtArgs>>): Prisma__DetalleTurnoClient<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleTurno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleTurnoFindUniqueOrThrowArgs} args - Arguments to find a DetalleTurno
     * @example
     * // Get one DetalleTurno
     * const detalleTurno = await prisma.detalleTurno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleTurnoFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleTurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleTurnoClient<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleTurno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleTurnoFindFirstArgs} args - Arguments to find a DetalleTurno
     * @example
     * // Get one DetalleTurno
     * const detalleTurno = await prisma.detalleTurno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleTurnoFindFirstArgs>(args?: SelectSubset<T, DetalleTurnoFindFirstArgs<ExtArgs>>): Prisma__DetalleTurnoClient<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleTurno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleTurnoFindFirstOrThrowArgs} args - Arguments to find a DetalleTurno
     * @example
     * // Get one DetalleTurno
     * const detalleTurno = await prisma.detalleTurno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleTurnoFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleTurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleTurnoClient<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleTurnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleTurnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleTurnos
     * const detalleTurnos = await prisma.detalleTurno.findMany()
     * 
     * // Get first 10 DetalleTurnos
     * const detalleTurnos = await prisma.detalleTurno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleTurnoWithIdOnly = await prisma.detalleTurno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleTurnoFindManyArgs>(args?: SelectSubset<T, DetalleTurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleTurno.
     * @param {DetalleTurnoCreateArgs} args - Arguments to create a DetalleTurno.
     * @example
     * // Create one DetalleTurno
     * const DetalleTurno = await prisma.detalleTurno.create({
     *   data: {
     *     // ... data to create a DetalleTurno
     *   }
     * })
     * 
     */
    create<T extends DetalleTurnoCreateArgs>(args: SelectSubset<T, DetalleTurnoCreateArgs<ExtArgs>>): Prisma__DetalleTurnoClient<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleTurnos.
     * @param {DetalleTurnoCreateManyArgs} args - Arguments to create many DetalleTurnos.
     * @example
     * // Create many DetalleTurnos
     * const detalleTurno = await prisma.detalleTurno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleTurnoCreateManyArgs>(args?: SelectSubset<T, DetalleTurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetalleTurnos and returns the data saved in the database.
     * @param {DetalleTurnoCreateManyAndReturnArgs} args - Arguments to create many DetalleTurnos.
     * @example
     * // Create many DetalleTurnos
     * const detalleTurno = await prisma.detalleTurno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetalleTurnos and only return the `id`
     * const detalleTurnoWithIdOnly = await prisma.detalleTurno.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalleTurnoCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleTurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetalleTurno.
     * @param {DetalleTurnoDeleteArgs} args - Arguments to delete one DetalleTurno.
     * @example
     * // Delete one DetalleTurno
     * const DetalleTurno = await prisma.detalleTurno.delete({
     *   where: {
     *     // ... filter to delete one DetalleTurno
     *   }
     * })
     * 
     */
    delete<T extends DetalleTurnoDeleteArgs>(args: SelectSubset<T, DetalleTurnoDeleteArgs<ExtArgs>>): Prisma__DetalleTurnoClient<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleTurno.
     * @param {DetalleTurnoUpdateArgs} args - Arguments to update one DetalleTurno.
     * @example
     * // Update one DetalleTurno
     * const detalleTurno = await prisma.detalleTurno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleTurnoUpdateArgs>(args: SelectSubset<T, DetalleTurnoUpdateArgs<ExtArgs>>): Prisma__DetalleTurnoClient<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleTurnos.
     * @param {DetalleTurnoDeleteManyArgs} args - Arguments to filter DetalleTurnos to delete.
     * @example
     * // Delete a few DetalleTurnos
     * const { count } = await prisma.detalleTurno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleTurnoDeleteManyArgs>(args?: SelectSubset<T, DetalleTurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleTurnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleTurnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleTurnos
     * const detalleTurno = await prisma.detalleTurno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleTurnoUpdateManyArgs>(args: SelectSubset<T, DetalleTurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleTurnos and returns the data updated in the database.
     * @param {DetalleTurnoUpdateManyAndReturnArgs} args - Arguments to update many DetalleTurnos.
     * @example
     * // Update many DetalleTurnos
     * const detalleTurno = await prisma.detalleTurno.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetalleTurnos and only return the `id`
     * const detalleTurnoWithIdOnly = await prisma.detalleTurno.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetalleTurnoUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleTurnoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetalleTurno.
     * @param {DetalleTurnoUpsertArgs} args - Arguments to update or create a DetalleTurno.
     * @example
     * // Update or create a DetalleTurno
     * const detalleTurno = await prisma.detalleTurno.upsert({
     *   create: {
     *     // ... data to create a DetalleTurno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleTurno we want to update
     *   }
     * })
     */
    upsert<T extends DetalleTurnoUpsertArgs>(args: SelectSubset<T, DetalleTurnoUpsertArgs<ExtArgs>>): Prisma__DetalleTurnoClient<$Result.GetResult<Prisma.$DetalleTurnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleTurnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleTurnoCountArgs} args - Arguments to filter DetalleTurnos to count.
     * @example
     * // Count the number of DetalleTurnos
     * const count = await prisma.detalleTurno.count({
     *   where: {
     *     // ... the filter for the DetalleTurnos we want to count
     *   }
     * })
    **/
    count<T extends DetalleTurnoCountArgs>(
      args?: Subset<T, DetalleTurnoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleTurnoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleTurno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleTurnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetalleTurnoAggregateArgs>(args: Subset<T, DetalleTurnoAggregateArgs>): Prisma.PrismaPromise<GetDetalleTurnoAggregateType<T>>

    /**
     * Group by DetalleTurno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleTurnoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetalleTurnoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleTurnoGroupByArgs['orderBy'] }
        : { orderBy?: DetalleTurnoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetalleTurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleTurno model
   */
  readonly fields: DetalleTurnoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleTurno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleTurnoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turno<T extends TurnoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurnoDefaultArgs<ExtArgs>>): Prisma__TurnoClient<$Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetalleTurno model
   */
  interface DetalleTurnoFieldRefs {
    readonly id: FieldRef<"DetalleTurno", 'Int'>
    readonly turnoId: FieldRef<"DetalleTurno", 'Int'>
    readonly descripcion: FieldRef<"DetalleTurno", 'String'>
    readonly observacion: FieldRef<"DetalleTurno", 'String'>
    readonly creadoEn: FieldRef<"DetalleTurno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DetalleTurno findUnique
   */
  export type DetalleTurnoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleTurno to fetch.
     */
    where: DetalleTurnoWhereUniqueInput
  }

  /**
   * DetalleTurno findUniqueOrThrow
   */
  export type DetalleTurnoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleTurno to fetch.
     */
    where: DetalleTurnoWhereUniqueInput
  }

  /**
   * DetalleTurno findFirst
   */
  export type DetalleTurnoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleTurno to fetch.
     */
    where?: DetalleTurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleTurnos to fetch.
     */
    orderBy?: DetalleTurnoOrderByWithRelationInput | DetalleTurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleTurnos.
     */
    cursor?: DetalleTurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleTurnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleTurnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleTurnos.
     */
    distinct?: DetalleTurnoScalarFieldEnum | DetalleTurnoScalarFieldEnum[]
  }

  /**
   * DetalleTurno findFirstOrThrow
   */
  export type DetalleTurnoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleTurno to fetch.
     */
    where?: DetalleTurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleTurnos to fetch.
     */
    orderBy?: DetalleTurnoOrderByWithRelationInput | DetalleTurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleTurnos.
     */
    cursor?: DetalleTurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleTurnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleTurnos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleTurnos.
     */
    distinct?: DetalleTurnoScalarFieldEnum | DetalleTurnoScalarFieldEnum[]
  }

  /**
   * DetalleTurno findMany
   */
  export type DetalleTurnoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleTurnos to fetch.
     */
    where?: DetalleTurnoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleTurnos to fetch.
     */
    orderBy?: DetalleTurnoOrderByWithRelationInput | DetalleTurnoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleTurnos.
     */
    cursor?: DetalleTurnoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleTurnos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleTurnos.
     */
    skip?: number
    distinct?: DetalleTurnoScalarFieldEnum | DetalleTurnoScalarFieldEnum[]
  }

  /**
   * DetalleTurno create
   */
  export type DetalleTurnoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleTurno.
     */
    data: XOR<DetalleTurnoCreateInput, DetalleTurnoUncheckedCreateInput>
  }

  /**
   * DetalleTurno createMany
   */
  export type DetalleTurnoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleTurnos.
     */
    data: DetalleTurnoCreateManyInput | DetalleTurnoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleTurno createManyAndReturn
   */
  export type DetalleTurnoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * The data used to create many DetalleTurnos.
     */
    data: DetalleTurnoCreateManyInput | DetalleTurnoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleTurno update
   */
  export type DetalleTurnoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleTurno.
     */
    data: XOR<DetalleTurnoUpdateInput, DetalleTurnoUncheckedUpdateInput>
    /**
     * Choose, which DetalleTurno to update.
     */
    where: DetalleTurnoWhereUniqueInput
  }

  /**
   * DetalleTurno updateMany
   */
  export type DetalleTurnoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleTurnos.
     */
    data: XOR<DetalleTurnoUpdateManyMutationInput, DetalleTurnoUncheckedUpdateManyInput>
    /**
     * Filter which DetalleTurnos to update
     */
    where?: DetalleTurnoWhereInput
    /**
     * Limit how many DetalleTurnos to update.
     */
    limit?: number
  }

  /**
   * DetalleTurno updateManyAndReturn
   */
  export type DetalleTurnoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * The data used to update DetalleTurnos.
     */
    data: XOR<DetalleTurnoUpdateManyMutationInput, DetalleTurnoUncheckedUpdateManyInput>
    /**
     * Filter which DetalleTurnos to update
     */
    where?: DetalleTurnoWhereInput
    /**
     * Limit how many DetalleTurnos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetalleTurno upsert
   */
  export type DetalleTurnoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleTurno to update in case it exists.
     */
    where: DetalleTurnoWhereUniqueInput
    /**
     * In case the DetalleTurno found by the `where` argument doesn't exist, create a new DetalleTurno with this data.
     */
    create: XOR<DetalleTurnoCreateInput, DetalleTurnoUncheckedCreateInput>
    /**
     * In case the DetalleTurno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleTurnoUpdateInput, DetalleTurnoUncheckedUpdateInput>
  }

  /**
   * DetalleTurno delete
   */
  export type DetalleTurnoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
    /**
     * Filter which DetalleTurno to delete.
     */
    where: DetalleTurnoWhereUniqueInput
  }

  /**
   * DetalleTurno deleteMany
   */
  export type DetalleTurnoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleTurnos to delete
     */
    where?: DetalleTurnoWhereInput
    /**
     * Limit how many DetalleTurnos to delete.
     */
    limit?: number
  }

  /**
   * DetalleTurno without action
   */
  export type DetalleTurnoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleTurno
     */
    select?: DetalleTurnoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleTurno
     */
    omit?: DetalleTurnoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleTurnoInclude<ExtArgs> | null
  }


  /**
   * Model CentroMedico
   */

  export type AggregateCentroMedico = {
    _count: CentroMedicoCountAggregateOutputType | null
    _avg: CentroMedicoAvgAggregateOutputType | null
    _sum: CentroMedicoSumAggregateOutputType | null
    _min: CentroMedicoMinAggregateOutputType | null
    _max: CentroMedicoMaxAggregateOutputType | null
  }

  export type CentroMedicoAvgAggregateOutputType = {
    id: number | null
  }

  export type CentroMedicoSumAggregateOutputType = {
    id: number | null
  }

  export type CentroMedicoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
  }

  export type CentroMedicoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
  }

  export type CentroMedicoCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    telefono: number
    email: number
    _all: number
  }


  export type CentroMedicoAvgAggregateInputType = {
    id?: true
  }

  export type CentroMedicoSumAggregateInputType = {
    id?: true
  }

  export type CentroMedicoMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
    email?: true
  }

  export type CentroMedicoMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
    email?: true
  }

  export type CentroMedicoCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    telefono?: true
    email?: true
    _all?: true
  }

  export type CentroMedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CentroMedico to aggregate.
     */
    where?: CentroMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentroMedicos to fetch.
     */
    orderBy?: CentroMedicoOrderByWithRelationInput | CentroMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CentroMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentroMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentroMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CentroMedicos
    **/
    _count?: true | CentroMedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CentroMedicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CentroMedicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CentroMedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CentroMedicoMaxAggregateInputType
  }

  export type GetCentroMedicoAggregateType<T extends CentroMedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateCentroMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentroMedico[P]>
      : GetScalarType<T[P], AggregateCentroMedico[P]>
  }




  export type CentroMedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CentroMedicoWhereInput
    orderBy?: CentroMedicoOrderByWithAggregationInput | CentroMedicoOrderByWithAggregationInput[]
    by: CentroMedicoScalarFieldEnum[] | CentroMedicoScalarFieldEnum
    having?: CentroMedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CentroMedicoCountAggregateInputType | true
    _avg?: CentroMedicoAvgAggregateInputType
    _sum?: CentroMedicoSumAggregateInputType
    _min?: CentroMedicoMinAggregateInputType
    _max?: CentroMedicoMaxAggregateInputType
  }

  export type CentroMedicoGroupByOutputType = {
    id: number
    nombre: string
    direccion: string
    telefono: string
    email: string
    _count: CentroMedicoCountAggregateOutputType | null
    _avg: CentroMedicoAvgAggregateOutputType | null
    _sum: CentroMedicoSumAggregateOutputType | null
    _min: CentroMedicoMinAggregateOutputType | null
    _max: CentroMedicoMaxAggregateOutputType | null
  }

  type GetCentroMedicoGroupByPayload<T extends CentroMedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CentroMedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CentroMedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CentroMedicoGroupByOutputType[P]>
            : GetScalarType<T[P], CentroMedicoGroupByOutputType[P]>
        }
      >
    >


  export type CentroMedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
  }, ExtArgs["result"]["centroMedico"]>

  export type CentroMedicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
  }, ExtArgs["result"]["centroMedico"]>

  export type CentroMedicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
  }, ExtArgs["result"]["centroMedico"]>

  export type CentroMedicoSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
  }

  export type CentroMedicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "telefono" | "email", ExtArgs["result"]["centroMedico"]>

  export type $CentroMedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CentroMedico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string
      telefono: string
      email: string
    }, ExtArgs["result"]["centroMedico"]>
    composites: {}
  }

  type CentroMedicoGetPayload<S extends boolean | null | undefined | CentroMedicoDefaultArgs> = $Result.GetResult<Prisma.$CentroMedicoPayload, S>

  type CentroMedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CentroMedicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CentroMedicoCountAggregateInputType | true
    }

  export interface CentroMedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CentroMedico'], meta: { name: 'CentroMedico' } }
    /**
     * Find zero or one CentroMedico that matches the filter.
     * @param {CentroMedicoFindUniqueArgs} args - Arguments to find a CentroMedico
     * @example
     * // Get one CentroMedico
     * const centroMedico = await prisma.centroMedico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CentroMedicoFindUniqueArgs>(args: SelectSubset<T, CentroMedicoFindUniqueArgs<ExtArgs>>): Prisma__CentroMedicoClient<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CentroMedico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CentroMedicoFindUniqueOrThrowArgs} args - Arguments to find a CentroMedico
     * @example
     * // Get one CentroMedico
     * const centroMedico = await prisma.centroMedico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CentroMedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, CentroMedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CentroMedicoClient<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CentroMedico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroMedicoFindFirstArgs} args - Arguments to find a CentroMedico
     * @example
     * // Get one CentroMedico
     * const centroMedico = await prisma.centroMedico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CentroMedicoFindFirstArgs>(args?: SelectSubset<T, CentroMedicoFindFirstArgs<ExtArgs>>): Prisma__CentroMedicoClient<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CentroMedico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroMedicoFindFirstOrThrowArgs} args - Arguments to find a CentroMedico
     * @example
     * // Get one CentroMedico
     * const centroMedico = await prisma.centroMedico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CentroMedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, CentroMedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CentroMedicoClient<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CentroMedicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroMedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CentroMedicos
     * const centroMedicos = await prisma.centroMedico.findMany()
     * 
     * // Get first 10 CentroMedicos
     * const centroMedicos = await prisma.centroMedico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centroMedicoWithIdOnly = await prisma.centroMedico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CentroMedicoFindManyArgs>(args?: SelectSubset<T, CentroMedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CentroMedico.
     * @param {CentroMedicoCreateArgs} args - Arguments to create a CentroMedico.
     * @example
     * // Create one CentroMedico
     * const CentroMedico = await prisma.centroMedico.create({
     *   data: {
     *     // ... data to create a CentroMedico
     *   }
     * })
     * 
     */
    create<T extends CentroMedicoCreateArgs>(args: SelectSubset<T, CentroMedicoCreateArgs<ExtArgs>>): Prisma__CentroMedicoClient<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CentroMedicos.
     * @param {CentroMedicoCreateManyArgs} args - Arguments to create many CentroMedicos.
     * @example
     * // Create many CentroMedicos
     * const centroMedico = await prisma.centroMedico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CentroMedicoCreateManyArgs>(args?: SelectSubset<T, CentroMedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CentroMedicos and returns the data saved in the database.
     * @param {CentroMedicoCreateManyAndReturnArgs} args - Arguments to create many CentroMedicos.
     * @example
     * // Create many CentroMedicos
     * const centroMedico = await prisma.centroMedico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CentroMedicos and only return the `id`
     * const centroMedicoWithIdOnly = await prisma.centroMedico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CentroMedicoCreateManyAndReturnArgs>(args?: SelectSubset<T, CentroMedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CentroMedico.
     * @param {CentroMedicoDeleteArgs} args - Arguments to delete one CentroMedico.
     * @example
     * // Delete one CentroMedico
     * const CentroMedico = await prisma.centroMedico.delete({
     *   where: {
     *     // ... filter to delete one CentroMedico
     *   }
     * })
     * 
     */
    delete<T extends CentroMedicoDeleteArgs>(args: SelectSubset<T, CentroMedicoDeleteArgs<ExtArgs>>): Prisma__CentroMedicoClient<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CentroMedico.
     * @param {CentroMedicoUpdateArgs} args - Arguments to update one CentroMedico.
     * @example
     * // Update one CentroMedico
     * const centroMedico = await prisma.centroMedico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CentroMedicoUpdateArgs>(args: SelectSubset<T, CentroMedicoUpdateArgs<ExtArgs>>): Prisma__CentroMedicoClient<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CentroMedicos.
     * @param {CentroMedicoDeleteManyArgs} args - Arguments to filter CentroMedicos to delete.
     * @example
     * // Delete a few CentroMedicos
     * const { count } = await prisma.centroMedico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CentroMedicoDeleteManyArgs>(args?: SelectSubset<T, CentroMedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CentroMedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroMedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CentroMedicos
     * const centroMedico = await prisma.centroMedico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CentroMedicoUpdateManyArgs>(args: SelectSubset<T, CentroMedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CentroMedicos and returns the data updated in the database.
     * @param {CentroMedicoUpdateManyAndReturnArgs} args - Arguments to update many CentroMedicos.
     * @example
     * // Update many CentroMedicos
     * const centroMedico = await prisma.centroMedico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CentroMedicos and only return the `id`
     * const centroMedicoWithIdOnly = await prisma.centroMedico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CentroMedicoUpdateManyAndReturnArgs>(args: SelectSubset<T, CentroMedicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CentroMedico.
     * @param {CentroMedicoUpsertArgs} args - Arguments to update or create a CentroMedico.
     * @example
     * // Update or create a CentroMedico
     * const centroMedico = await prisma.centroMedico.upsert({
     *   create: {
     *     // ... data to create a CentroMedico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CentroMedico we want to update
     *   }
     * })
     */
    upsert<T extends CentroMedicoUpsertArgs>(args: SelectSubset<T, CentroMedicoUpsertArgs<ExtArgs>>): Prisma__CentroMedicoClient<$Result.GetResult<Prisma.$CentroMedicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CentroMedicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroMedicoCountArgs} args - Arguments to filter CentroMedicos to count.
     * @example
     * // Count the number of CentroMedicos
     * const count = await prisma.centroMedico.count({
     *   where: {
     *     // ... the filter for the CentroMedicos we want to count
     *   }
     * })
    **/
    count<T extends CentroMedicoCountArgs>(
      args?: Subset<T, CentroMedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CentroMedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CentroMedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroMedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CentroMedicoAggregateArgs>(args: Subset<T, CentroMedicoAggregateArgs>): Prisma.PrismaPromise<GetCentroMedicoAggregateType<T>>

    /**
     * Group by CentroMedico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroMedicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CentroMedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CentroMedicoGroupByArgs['orderBy'] }
        : { orderBy?: CentroMedicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CentroMedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentroMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CentroMedico model
   */
  readonly fields: CentroMedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CentroMedico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CentroMedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CentroMedico model
   */
  interface CentroMedicoFieldRefs {
    readonly id: FieldRef<"CentroMedico", 'Int'>
    readonly nombre: FieldRef<"CentroMedico", 'String'>
    readonly direccion: FieldRef<"CentroMedico", 'String'>
    readonly telefono: FieldRef<"CentroMedico", 'String'>
    readonly email: FieldRef<"CentroMedico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CentroMedico findUnique
   */
  export type CentroMedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * Filter, which CentroMedico to fetch.
     */
    where: CentroMedicoWhereUniqueInput
  }

  /**
   * CentroMedico findUniqueOrThrow
   */
  export type CentroMedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * Filter, which CentroMedico to fetch.
     */
    where: CentroMedicoWhereUniqueInput
  }

  /**
   * CentroMedico findFirst
   */
  export type CentroMedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * Filter, which CentroMedico to fetch.
     */
    where?: CentroMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentroMedicos to fetch.
     */
    orderBy?: CentroMedicoOrderByWithRelationInput | CentroMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CentroMedicos.
     */
    cursor?: CentroMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentroMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentroMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CentroMedicos.
     */
    distinct?: CentroMedicoScalarFieldEnum | CentroMedicoScalarFieldEnum[]
  }

  /**
   * CentroMedico findFirstOrThrow
   */
  export type CentroMedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * Filter, which CentroMedico to fetch.
     */
    where?: CentroMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentroMedicos to fetch.
     */
    orderBy?: CentroMedicoOrderByWithRelationInput | CentroMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CentroMedicos.
     */
    cursor?: CentroMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentroMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentroMedicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CentroMedicos.
     */
    distinct?: CentroMedicoScalarFieldEnum | CentroMedicoScalarFieldEnum[]
  }

  /**
   * CentroMedico findMany
   */
  export type CentroMedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * Filter, which CentroMedicos to fetch.
     */
    where?: CentroMedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CentroMedicos to fetch.
     */
    orderBy?: CentroMedicoOrderByWithRelationInput | CentroMedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CentroMedicos.
     */
    cursor?: CentroMedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CentroMedicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CentroMedicos.
     */
    skip?: number
    distinct?: CentroMedicoScalarFieldEnum | CentroMedicoScalarFieldEnum[]
  }

  /**
   * CentroMedico create
   */
  export type CentroMedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * The data needed to create a CentroMedico.
     */
    data: XOR<CentroMedicoCreateInput, CentroMedicoUncheckedCreateInput>
  }

  /**
   * CentroMedico createMany
   */
  export type CentroMedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CentroMedicos.
     */
    data: CentroMedicoCreateManyInput | CentroMedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CentroMedico createManyAndReturn
   */
  export type CentroMedicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * The data used to create many CentroMedicos.
     */
    data: CentroMedicoCreateManyInput | CentroMedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CentroMedico update
   */
  export type CentroMedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * The data needed to update a CentroMedico.
     */
    data: XOR<CentroMedicoUpdateInput, CentroMedicoUncheckedUpdateInput>
    /**
     * Choose, which CentroMedico to update.
     */
    where: CentroMedicoWhereUniqueInput
  }

  /**
   * CentroMedico updateMany
   */
  export type CentroMedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CentroMedicos.
     */
    data: XOR<CentroMedicoUpdateManyMutationInput, CentroMedicoUncheckedUpdateManyInput>
    /**
     * Filter which CentroMedicos to update
     */
    where?: CentroMedicoWhereInput
    /**
     * Limit how many CentroMedicos to update.
     */
    limit?: number
  }

  /**
   * CentroMedico updateManyAndReturn
   */
  export type CentroMedicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * The data used to update CentroMedicos.
     */
    data: XOR<CentroMedicoUpdateManyMutationInput, CentroMedicoUncheckedUpdateManyInput>
    /**
     * Filter which CentroMedicos to update
     */
    where?: CentroMedicoWhereInput
    /**
     * Limit how many CentroMedicos to update.
     */
    limit?: number
  }

  /**
   * CentroMedico upsert
   */
  export type CentroMedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * The filter to search for the CentroMedico to update in case it exists.
     */
    where: CentroMedicoWhereUniqueInput
    /**
     * In case the CentroMedico found by the `where` argument doesn't exist, create a new CentroMedico with this data.
     */
    create: XOR<CentroMedicoCreateInput, CentroMedicoUncheckedCreateInput>
    /**
     * In case the CentroMedico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CentroMedicoUpdateInput, CentroMedicoUncheckedUpdateInput>
  }

  /**
   * CentroMedico delete
   */
  export type CentroMedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
    /**
     * Filter which CentroMedico to delete.
     */
    where: CentroMedicoWhereUniqueInput
  }

  /**
   * CentroMedico deleteMany
   */
  export type CentroMedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CentroMedicos to delete
     */
    where?: CentroMedicoWhereInput
    /**
     * Limit how many CentroMedicos to delete.
     */
    limit?: number
  }

  /**
   * CentroMedico without action
   */
  export type CentroMedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroMedico
     */
    select?: CentroMedicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CentroMedico
     */
    omit?: CentroMedicoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    username: 'username',
    contraseña: 'contraseña',
    rol: 'rol',
    email: 'email',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProvinciaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ProvinciaScalarFieldEnum = (typeof ProvinciaScalarFieldEnum)[keyof typeof ProvinciaScalarFieldEnum]


  export const LocalidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    provinciaId: 'provinciaId'
  };

  export type LocalidadScalarFieldEnum = (typeof LocalidadScalarFieldEnum)[keyof typeof LocalidadScalarFieldEnum]


  export const ObraSocialScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ObraSocialScalarFieldEnum = (typeof ObraSocialScalarFieldEnum)[keyof typeof ObraSocialScalarFieldEnum]


  export const PrestacionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type PrestacionScalarFieldEnum = (typeof PrestacionScalarFieldEnum)[keyof typeof PrestacionScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    creadoPorId: 'creadoPorId',
    numeroInterno: 'numeroInterno',
    nombre: 'nombre',
    apellido: 'apellido',
    dni: 'dni',
    fechaNacimiento: 'fechaNacimiento',
    genero: 'genero',
    estadoCivil: 'estadoCivil',
    pais: 'pais',
    provinciaId: 'provinciaId',
    localidadId: 'localidadId',
    barrio: 'barrio',
    calle: 'calle',
    numero: 'numero',
    celular: 'celular',
    email: 'email',
    obraSocialId: 'obraSocialId',
    numeroSocio: 'numeroSocio',
    plan: 'plan',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const ProfesionalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    creadoPorId: 'creadoPorId',
    numeroInterno: 'numeroInterno',
    nombre: 'nombre',
    apellido: 'apellido',
    dni: 'dni',
    fechaNacimiento: 'fechaNacimiento',
    genero: 'genero',
    estadoCivil: 'estadoCivil',
    pais: 'pais',
    provinciaId: 'provinciaId',
    localidadId: 'localidadId',
    barrio: 'barrio',
    calle: 'calle',
    numero: 'numero',
    celular: 'celular',
    email: 'email',
    titulo: 'titulo',
    matricula: 'matricula',
    especialidad: 'especialidad',
    universidad: 'universidad',
    fechaGraduacion: 'fechaGraduacion',
    horarioTrabajo: 'horarioTrabajo',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn'
  };

  export type ProfesionalScalarFieldEnum = (typeof ProfesionalScalarFieldEnum)[keyof typeof ProfesionalScalarFieldEnum]


  export const PrestacionXProfesionalScalarFieldEnum: {
    id: 'id',
    profesionalId: 'profesionalId',
    prestacionId: 'prestacionId'
  };

  export type PrestacionXProfesionalScalarFieldEnum = (typeof PrestacionXProfesionalScalarFieldEnum)[keyof typeof PrestacionXProfesionalScalarFieldEnum]


  export const ObraSocialXProfesionalScalarFieldEnum: {
    id: 'id',
    profesionalId: 'profesionalId',
    obraSocialId: 'obraSocialId'
  };

  export type ObraSocialXProfesionalScalarFieldEnum = (typeof ObraSocialXProfesionalScalarFieldEnum)[keyof typeof ObraSocialXProfesionalScalarFieldEnum]


  export const TurnoScalarFieldEnum: {
    id: 'id',
    pacienteId: 'pacienteId',
    profesionalId: 'profesionalId',
    fecha: 'fecha',
    hora: 'hora',
    estado: 'estado',
    creadoEn: 'creadoEn'
  };

  export type TurnoScalarFieldEnum = (typeof TurnoScalarFieldEnum)[keyof typeof TurnoScalarFieldEnum]


  export const DetalleTurnoScalarFieldEnum: {
    id: 'id',
    turnoId: 'turnoId',
    descripcion: 'descripcion',
    observacion: 'observacion',
    creadoEn: 'creadoEn'
  };

  export type DetalleTurnoScalarFieldEnum = (typeof DetalleTurnoScalarFieldEnum)[keyof typeof DetalleTurnoScalarFieldEnum]


  export const CentroMedicoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email'
  };

  export type CentroMedicoScalarFieldEnum = (typeof CentroMedicoScalarFieldEnum)[keyof typeof CentroMedicoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Genero'
   */
  export type EnumGeneroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genero'>
    


  /**
   * Reference to a field of type 'Genero[]'
   */
  export type ListEnumGeneroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genero[]'>
    


  /**
   * Reference to a field of type 'EstadoCivil'
   */
  export type EnumEstadoCivilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCivil'>
    


  /**
   * Reference to a field of type 'EstadoCivil[]'
   */
  export type ListEnumEstadoCivilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCivil[]'>
    


  /**
   * Reference to a field of type 'EstadoPaciente'
   */
  export type EnumEstadoPacienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPaciente'>
    


  /**
   * Reference to a field of type 'EstadoPaciente[]'
   */
  export type ListEnumEstadoPacienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoPaciente[]'>
    


  /**
   * Reference to a field of type 'EstadoTurno'
   */
  export type EnumEstadoTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTurno'>
    


  /**
   * Reference to a field of type 'EstadoTurno[]'
   */
  export type ListEnumEstadoTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoTurno[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    username?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    email?: StringFilter<"Usuario"> | string
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    profesional?: XOR<ProfesionalNullableScalarRelationFilter, ProfesionalWhereInput> | null
    paciente?: XOR<PacienteNullableScalarRelationFilter, PacienteWhereInput> | null
    pacientesCreados?: PacienteListRelationFilter
    profesionalesCreados?: ProfesionalListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    profesional?: ProfesionalOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
    pacientesCreados?: PacienteOrderByRelationAggregateInput
    profesionalesCreados?: ProfesionalOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    contraseña?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    profesional?: XOR<ProfesionalNullableScalarRelationFilter, ProfesionalWhereInput> | null
    paciente?: XOR<PacienteNullableScalarRelationFilter, PacienteWhereInput> | null
    pacientesCreados?: PacienteListRelationFilter
    profesionalesCreados?: ProfesionalListRelationFilter
  }, "id" | "username" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    username?: StringWithAggregatesFilter<"Usuario"> | string
    contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    email?: StringWithAggregatesFilter<"Usuario"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ProvinciaWhereInput = {
    AND?: ProvinciaWhereInput | ProvinciaWhereInput[]
    OR?: ProvinciaWhereInput[]
    NOT?: ProvinciaWhereInput | ProvinciaWhereInput[]
    id?: IntFilter<"Provincia"> | number
    nombre?: StringFilter<"Provincia"> | string
    pacientes?: PacienteListRelationFilter
    profesionales?: ProfesionalListRelationFilter
    localidades?: LocalidadListRelationFilter
  }

  export type ProvinciaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    pacientes?: PacienteOrderByRelationAggregateInput
    profesionales?: ProfesionalOrderByRelationAggregateInput
    localidades?: LocalidadOrderByRelationAggregateInput
  }

  export type ProvinciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ProvinciaWhereInput | ProvinciaWhereInput[]
    OR?: ProvinciaWhereInput[]
    NOT?: ProvinciaWhereInput | ProvinciaWhereInput[]
    pacientes?: PacienteListRelationFilter
    profesionales?: ProfesionalListRelationFilter
    localidades?: LocalidadListRelationFilter
  }, "id" | "nombre">

  export type ProvinciaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ProvinciaCountOrderByAggregateInput
    _avg?: ProvinciaAvgOrderByAggregateInput
    _max?: ProvinciaMaxOrderByAggregateInput
    _min?: ProvinciaMinOrderByAggregateInput
    _sum?: ProvinciaSumOrderByAggregateInput
  }

  export type ProvinciaScalarWhereWithAggregatesInput = {
    AND?: ProvinciaScalarWhereWithAggregatesInput | ProvinciaScalarWhereWithAggregatesInput[]
    OR?: ProvinciaScalarWhereWithAggregatesInput[]
    NOT?: ProvinciaScalarWhereWithAggregatesInput | ProvinciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Provincia"> | number
    nombre?: StringWithAggregatesFilter<"Provincia"> | string
  }

  export type LocalidadWhereInput = {
    AND?: LocalidadWhereInput | LocalidadWhereInput[]
    OR?: LocalidadWhereInput[]
    NOT?: LocalidadWhereInput | LocalidadWhereInput[]
    id?: IntFilter<"Localidad"> | number
    nombre?: StringFilter<"Localidad"> | string
    provinciaId?: IntFilter<"Localidad"> | number
    provincia?: XOR<ProvinciaScalarRelationFilter, ProvinciaWhereInput>
    pacientes?: PacienteListRelationFilter
    profesionales?: ProfesionalListRelationFilter
  }

  export type LocalidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    provinciaId?: SortOrder
    provincia?: ProvinciaOrderByWithRelationInput
    pacientes?: PacienteOrderByRelationAggregateInput
    profesionales?: ProfesionalOrderByRelationAggregateInput
  }

  export type LocalidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalidadWhereInput | LocalidadWhereInput[]
    OR?: LocalidadWhereInput[]
    NOT?: LocalidadWhereInput | LocalidadWhereInput[]
    nombre?: StringFilter<"Localidad"> | string
    provinciaId?: IntFilter<"Localidad"> | number
    provincia?: XOR<ProvinciaScalarRelationFilter, ProvinciaWhereInput>
    pacientes?: PacienteListRelationFilter
    profesionales?: ProfesionalListRelationFilter
  }, "id">

  export type LocalidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    provinciaId?: SortOrder
    _count?: LocalidadCountOrderByAggregateInput
    _avg?: LocalidadAvgOrderByAggregateInput
    _max?: LocalidadMaxOrderByAggregateInput
    _min?: LocalidadMinOrderByAggregateInput
    _sum?: LocalidadSumOrderByAggregateInput
  }

  export type LocalidadScalarWhereWithAggregatesInput = {
    AND?: LocalidadScalarWhereWithAggregatesInput | LocalidadScalarWhereWithAggregatesInput[]
    OR?: LocalidadScalarWhereWithAggregatesInput[]
    NOT?: LocalidadScalarWhereWithAggregatesInput | LocalidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localidad"> | number
    nombre?: StringWithAggregatesFilter<"Localidad"> | string
    provinciaId?: IntWithAggregatesFilter<"Localidad"> | number
  }

  export type ObraSocialWhereInput = {
    AND?: ObraSocialWhereInput | ObraSocialWhereInput[]
    OR?: ObraSocialWhereInput[]
    NOT?: ObraSocialWhereInput | ObraSocialWhereInput[]
    id?: IntFilter<"ObraSocial"> | number
    nombre?: StringFilter<"ObraSocial"> | string
    pacientes?: PacienteListRelationFilter
    profesionales?: ObraSocialXProfesionalListRelationFilter
  }

  export type ObraSocialOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    pacientes?: PacienteOrderByRelationAggregateInput
    profesionales?: ObraSocialXProfesionalOrderByRelationAggregateInput
  }

  export type ObraSocialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ObraSocialWhereInput | ObraSocialWhereInput[]
    OR?: ObraSocialWhereInput[]
    NOT?: ObraSocialWhereInput | ObraSocialWhereInput[]
    pacientes?: PacienteListRelationFilter
    profesionales?: ObraSocialXProfesionalListRelationFilter
  }, "id" | "nombre">

  export type ObraSocialOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ObraSocialCountOrderByAggregateInput
    _avg?: ObraSocialAvgOrderByAggregateInput
    _max?: ObraSocialMaxOrderByAggregateInput
    _min?: ObraSocialMinOrderByAggregateInput
    _sum?: ObraSocialSumOrderByAggregateInput
  }

  export type ObraSocialScalarWhereWithAggregatesInput = {
    AND?: ObraSocialScalarWhereWithAggregatesInput | ObraSocialScalarWhereWithAggregatesInput[]
    OR?: ObraSocialScalarWhereWithAggregatesInput[]
    NOT?: ObraSocialScalarWhereWithAggregatesInput | ObraSocialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ObraSocial"> | number
    nombre?: StringWithAggregatesFilter<"ObraSocial"> | string
  }

  export type PrestacionWhereInput = {
    AND?: PrestacionWhereInput | PrestacionWhereInput[]
    OR?: PrestacionWhereInput[]
    NOT?: PrestacionWhereInput | PrestacionWhereInput[]
    id?: IntFilter<"Prestacion"> | number
    nombre?: StringFilter<"Prestacion"> | string
    descripcion?: StringNullableFilter<"Prestacion"> | string | null
    profesionales?: PrestacionXProfesionalListRelationFilter
  }

  export type PrestacionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    profesionales?: PrestacionXProfesionalOrderByRelationAggregateInput
  }

  export type PrestacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrestacionWhereInput | PrestacionWhereInput[]
    OR?: PrestacionWhereInput[]
    NOT?: PrestacionWhereInput | PrestacionWhereInput[]
    nombre?: StringFilter<"Prestacion"> | string
    descripcion?: StringNullableFilter<"Prestacion"> | string | null
    profesionales?: PrestacionXProfesionalListRelationFilter
  }, "id">

  export type PrestacionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: PrestacionCountOrderByAggregateInput
    _avg?: PrestacionAvgOrderByAggregateInput
    _max?: PrestacionMaxOrderByAggregateInput
    _min?: PrestacionMinOrderByAggregateInput
    _sum?: PrestacionSumOrderByAggregateInput
  }

  export type PrestacionScalarWhereWithAggregatesInput = {
    AND?: PrestacionScalarWhereWithAggregatesInput | PrestacionScalarWhereWithAggregatesInput[]
    OR?: PrestacionScalarWhereWithAggregatesInput[]
    NOT?: PrestacionScalarWhereWithAggregatesInput | PrestacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prestacion"> | number
    nombre?: StringWithAggregatesFilter<"Prestacion"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Prestacion"> | string | null
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    userId?: IntFilter<"Paciente"> | number
    creadoPorId?: IntNullableFilter<"Paciente"> | number | null
    numeroInterno?: StringFilter<"Paciente"> | string
    nombre?: StringFilter<"Paciente"> | string
    apellido?: StringFilter<"Paciente"> | string
    dni?: StringFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeFilter<"Paciente"> | Date | string
    genero?: EnumGeneroFilter<"Paciente"> | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFilter<"Paciente"> | $Enums.EstadoCivil
    pais?: StringFilter<"Paciente"> | string
    provinciaId?: IntFilter<"Paciente"> | number
    localidadId?: IntFilter<"Paciente"> | number
    barrio?: StringNullableFilter<"Paciente"> | string | null
    calle?: StringFilter<"Paciente"> | string
    numero?: StringFilter<"Paciente"> | string
    celular?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    obraSocialId?: IntFilter<"Paciente"> | number
    numeroSocio?: StringFilter<"Paciente"> | string
    plan?: StringFilter<"Paciente"> | string
    estado?: EnumEstadoPacienteFilter<"Paciente"> | $Enums.EstadoPaciente
    creadoEn?: DateTimeFilter<"Paciente"> | Date | string
    actualizadoEn?: DateTimeFilter<"Paciente"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    creadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    provincia?: XOR<ProvinciaScalarRelationFilter, ProvinciaWhereInput>
    localidad?: XOR<LocalidadScalarRelationFilter, LocalidadWhereInput>
    obraSocial?: XOR<ObraSocialScalarRelationFilter, ObraSocialWhereInput>
    turnos?: TurnoListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrderInput | SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrderInput | SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    obraSocialId?: SortOrder
    numeroSocio?: SortOrder
    plan?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    creadoPor?: UsuarioOrderByWithRelationInput
    provincia?: ProvinciaOrderByWithRelationInput
    localidad?: LocalidadOrderByWithRelationInput
    obraSocial?: ObraSocialOrderByWithRelationInput
    turnos?: TurnoOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    numeroInterno?: string
    dni?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    creadoPorId?: IntNullableFilter<"Paciente"> | number | null
    nombre?: StringFilter<"Paciente"> | string
    apellido?: StringFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeFilter<"Paciente"> | Date | string
    genero?: EnumGeneroFilter<"Paciente"> | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFilter<"Paciente"> | $Enums.EstadoCivil
    pais?: StringFilter<"Paciente"> | string
    provinciaId?: IntFilter<"Paciente"> | number
    localidadId?: IntFilter<"Paciente"> | number
    barrio?: StringNullableFilter<"Paciente"> | string | null
    calle?: StringFilter<"Paciente"> | string
    numero?: StringFilter<"Paciente"> | string
    celular?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    obraSocialId?: IntFilter<"Paciente"> | number
    numeroSocio?: StringFilter<"Paciente"> | string
    plan?: StringFilter<"Paciente"> | string
    estado?: EnumEstadoPacienteFilter<"Paciente"> | $Enums.EstadoPaciente
    creadoEn?: DateTimeFilter<"Paciente"> | Date | string
    actualizadoEn?: DateTimeFilter<"Paciente"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    creadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    provincia?: XOR<ProvinciaScalarRelationFilter, ProvinciaWhereInput>
    localidad?: XOR<LocalidadScalarRelationFilter, LocalidadWhereInput>
    obraSocial?: XOR<ObraSocialScalarRelationFilter, ObraSocialWhereInput>
    turnos?: TurnoListRelationFilter
  }, "id" | "userId" | "numeroInterno" | "dni">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrderInput | SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrderInput | SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    obraSocialId?: SortOrder
    numeroSocio?: SortOrder
    plan?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    userId?: IntWithAggregatesFilter<"Paciente"> | number
    creadoPorId?: IntNullableWithAggregatesFilter<"Paciente"> | number | null
    numeroInterno?: StringWithAggregatesFilter<"Paciente"> | string
    nombre?: StringWithAggregatesFilter<"Paciente"> | string
    apellido?: StringWithAggregatesFilter<"Paciente"> | string
    dni?: StringWithAggregatesFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    genero?: EnumGeneroWithAggregatesFilter<"Paciente"> | $Enums.Genero
    estadoCivil?: EnumEstadoCivilWithAggregatesFilter<"Paciente"> | $Enums.EstadoCivil
    pais?: StringWithAggregatesFilter<"Paciente"> | string
    provinciaId?: IntWithAggregatesFilter<"Paciente"> | number
    localidadId?: IntWithAggregatesFilter<"Paciente"> | number
    barrio?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    calle?: StringWithAggregatesFilter<"Paciente"> | string
    numero?: StringWithAggregatesFilter<"Paciente"> | string
    celular?: StringWithAggregatesFilter<"Paciente"> | string
    email?: StringWithAggregatesFilter<"Paciente"> | string
    obraSocialId?: IntWithAggregatesFilter<"Paciente"> | number
    numeroSocio?: StringWithAggregatesFilter<"Paciente"> | string
    plan?: StringWithAggregatesFilter<"Paciente"> | string
    estado?: EnumEstadoPacienteWithAggregatesFilter<"Paciente"> | $Enums.EstadoPaciente
    creadoEn?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
  }

  export type ProfesionalWhereInput = {
    AND?: ProfesionalWhereInput | ProfesionalWhereInput[]
    OR?: ProfesionalWhereInput[]
    NOT?: ProfesionalWhereInput | ProfesionalWhereInput[]
    id?: IntFilter<"Profesional"> | number
    userId?: IntFilter<"Profesional"> | number
    creadoPorId?: IntNullableFilter<"Profesional"> | number | null
    numeroInterno?: StringFilter<"Profesional"> | string
    nombre?: StringFilter<"Profesional"> | string
    apellido?: StringFilter<"Profesional"> | string
    dni?: StringFilter<"Profesional"> | string
    fechaNacimiento?: DateTimeFilter<"Profesional"> | Date | string
    genero?: EnumGeneroFilter<"Profesional"> | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFilter<"Profesional"> | $Enums.EstadoCivil
    pais?: StringFilter<"Profesional"> | string
    provinciaId?: IntFilter<"Profesional"> | number
    localidadId?: IntFilter<"Profesional"> | number
    barrio?: StringNullableFilter<"Profesional"> | string | null
    calle?: StringFilter<"Profesional"> | string
    numero?: StringFilter<"Profesional"> | string
    celular?: StringFilter<"Profesional"> | string
    email?: StringFilter<"Profesional"> | string
    titulo?: StringFilter<"Profesional"> | string
    matricula?: StringFilter<"Profesional"> | string
    especialidad?: StringFilter<"Profesional"> | string
    universidad?: StringFilter<"Profesional"> | string
    fechaGraduacion?: DateTimeFilter<"Profesional"> | Date | string
    horarioTrabajo?: StringFilter<"Profesional"> | string
    creadoEn?: DateTimeFilter<"Profesional"> | Date | string
    actualizadoEn?: DateTimeFilter<"Profesional"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    creadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    provincia?: XOR<ProvinciaScalarRelationFilter, ProvinciaWhereInput>
    localidad?: XOR<LocalidadScalarRelationFilter, LocalidadWhereInput>
    obrasSociales?: ObraSocialXProfesionalListRelationFilter
    prestaciones?: PrestacionXProfesionalListRelationFilter
    turnos?: TurnoListRelationFilter
  }

  export type ProfesionalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrderInput | SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrderInput | SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    titulo?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrder
    universidad?: SortOrder
    fechaGraduacion?: SortOrder
    horarioTrabajo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    creadoPor?: UsuarioOrderByWithRelationInput
    provincia?: ProvinciaOrderByWithRelationInput
    localidad?: LocalidadOrderByWithRelationInput
    obrasSociales?: ObraSocialXProfesionalOrderByRelationAggregateInput
    prestaciones?: PrestacionXProfesionalOrderByRelationAggregateInput
    turnos?: TurnoOrderByRelationAggregateInput
  }

  export type ProfesionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    numeroInterno?: string
    dni?: string
    email?: string
    matricula?: string
    AND?: ProfesionalWhereInput | ProfesionalWhereInput[]
    OR?: ProfesionalWhereInput[]
    NOT?: ProfesionalWhereInput | ProfesionalWhereInput[]
    creadoPorId?: IntNullableFilter<"Profesional"> | number | null
    nombre?: StringFilter<"Profesional"> | string
    apellido?: StringFilter<"Profesional"> | string
    fechaNacimiento?: DateTimeFilter<"Profesional"> | Date | string
    genero?: EnumGeneroFilter<"Profesional"> | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFilter<"Profesional"> | $Enums.EstadoCivil
    pais?: StringFilter<"Profesional"> | string
    provinciaId?: IntFilter<"Profesional"> | number
    localidadId?: IntFilter<"Profesional"> | number
    barrio?: StringNullableFilter<"Profesional"> | string | null
    calle?: StringFilter<"Profesional"> | string
    numero?: StringFilter<"Profesional"> | string
    celular?: StringFilter<"Profesional"> | string
    titulo?: StringFilter<"Profesional"> | string
    especialidad?: StringFilter<"Profesional"> | string
    universidad?: StringFilter<"Profesional"> | string
    fechaGraduacion?: DateTimeFilter<"Profesional"> | Date | string
    horarioTrabajo?: StringFilter<"Profesional"> | string
    creadoEn?: DateTimeFilter<"Profesional"> | Date | string
    actualizadoEn?: DateTimeFilter<"Profesional"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    creadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    provincia?: XOR<ProvinciaScalarRelationFilter, ProvinciaWhereInput>
    localidad?: XOR<LocalidadScalarRelationFilter, LocalidadWhereInput>
    obrasSociales?: ObraSocialXProfesionalListRelationFilter
    prestaciones?: PrestacionXProfesionalListRelationFilter
    turnos?: TurnoListRelationFilter
  }, "id" | "userId" | "numeroInterno" | "dni" | "email" | "matricula">

  export type ProfesionalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrderInput | SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrderInput | SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    titulo?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrder
    universidad?: SortOrder
    fechaGraduacion?: SortOrder
    horarioTrabajo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    _count?: ProfesionalCountOrderByAggregateInput
    _avg?: ProfesionalAvgOrderByAggregateInput
    _max?: ProfesionalMaxOrderByAggregateInput
    _min?: ProfesionalMinOrderByAggregateInput
    _sum?: ProfesionalSumOrderByAggregateInput
  }

  export type ProfesionalScalarWhereWithAggregatesInput = {
    AND?: ProfesionalScalarWhereWithAggregatesInput | ProfesionalScalarWhereWithAggregatesInput[]
    OR?: ProfesionalScalarWhereWithAggregatesInput[]
    NOT?: ProfesionalScalarWhereWithAggregatesInput | ProfesionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profesional"> | number
    userId?: IntWithAggregatesFilter<"Profesional"> | number
    creadoPorId?: IntNullableWithAggregatesFilter<"Profesional"> | number | null
    numeroInterno?: StringWithAggregatesFilter<"Profesional"> | string
    nombre?: StringWithAggregatesFilter<"Profesional"> | string
    apellido?: StringWithAggregatesFilter<"Profesional"> | string
    dni?: StringWithAggregatesFilter<"Profesional"> | string
    fechaNacimiento?: DateTimeWithAggregatesFilter<"Profesional"> | Date | string
    genero?: EnumGeneroWithAggregatesFilter<"Profesional"> | $Enums.Genero
    estadoCivil?: EnumEstadoCivilWithAggregatesFilter<"Profesional"> | $Enums.EstadoCivil
    pais?: StringWithAggregatesFilter<"Profesional"> | string
    provinciaId?: IntWithAggregatesFilter<"Profesional"> | number
    localidadId?: IntWithAggregatesFilter<"Profesional"> | number
    barrio?: StringNullableWithAggregatesFilter<"Profesional"> | string | null
    calle?: StringWithAggregatesFilter<"Profesional"> | string
    numero?: StringWithAggregatesFilter<"Profesional"> | string
    celular?: StringWithAggregatesFilter<"Profesional"> | string
    email?: StringWithAggregatesFilter<"Profesional"> | string
    titulo?: StringWithAggregatesFilter<"Profesional"> | string
    matricula?: StringWithAggregatesFilter<"Profesional"> | string
    especialidad?: StringWithAggregatesFilter<"Profesional"> | string
    universidad?: StringWithAggregatesFilter<"Profesional"> | string
    fechaGraduacion?: DateTimeWithAggregatesFilter<"Profesional"> | Date | string
    horarioTrabajo?: StringWithAggregatesFilter<"Profesional"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"Profesional"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Profesional"> | Date | string
  }

  export type PrestacionXProfesionalWhereInput = {
    AND?: PrestacionXProfesionalWhereInput | PrestacionXProfesionalWhereInput[]
    OR?: PrestacionXProfesionalWhereInput[]
    NOT?: PrestacionXProfesionalWhereInput | PrestacionXProfesionalWhereInput[]
    id?: IntFilter<"PrestacionXProfesional"> | number
    profesionalId?: IntFilter<"PrestacionXProfesional"> | number
    prestacionId?: IntFilter<"PrestacionXProfesional"> | number
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    prestacion?: XOR<PrestacionScalarRelationFilter, PrestacionWhereInput>
  }

  export type PrestacionXProfesionalOrderByWithRelationInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    prestacionId?: SortOrder
    profesional?: ProfesionalOrderByWithRelationInput
    prestacion?: PrestacionOrderByWithRelationInput
  }

  export type PrestacionXProfesionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrestacionXProfesionalWhereInput | PrestacionXProfesionalWhereInput[]
    OR?: PrestacionXProfesionalWhereInput[]
    NOT?: PrestacionXProfesionalWhereInput | PrestacionXProfesionalWhereInput[]
    profesionalId?: IntFilter<"PrestacionXProfesional"> | number
    prestacionId?: IntFilter<"PrestacionXProfesional"> | number
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    prestacion?: XOR<PrestacionScalarRelationFilter, PrestacionWhereInput>
  }, "id">

  export type PrestacionXProfesionalOrderByWithAggregationInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    prestacionId?: SortOrder
    _count?: PrestacionXProfesionalCountOrderByAggregateInput
    _avg?: PrestacionXProfesionalAvgOrderByAggregateInput
    _max?: PrestacionXProfesionalMaxOrderByAggregateInput
    _min?: PrestacionXProfesionalMinOrderByAggregateInput
    _sum?: PrestacionXProfesionalSumOrderByAggregateInput
  }

  export type PrestacionXProfesionalScalarWhereWithAggregatesInput = {
    AND?: PrestacionXProfesionalScalarWhereWithAggregatesInput | PrestacionXProfesionalScalarWhereWithAggregatesInput[]
    OR?: PrestacionXProfesionalScalarWhereWithAggregatesInput[]
    NOT?: PrestacionXProfesionalScalarWhereWithAggregatesInput | PrestacionXProfesionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrestacionXProfesional"> | number
    profesionalId?: IntWithAggregatesFilter<"PrestacionXProfesional"> | number
    prestacionId?: IntWithAggregatesFilter<"PrestacionXProfesional"> | number
  }

  export type ObraSocialXProfesionalWhereInput = {
    AND?: ObraSocialXProfesionalWhereInput | ObraSocialXProfesionalWhereInput[]
    OR?: ObraSocialXProfesionalWhereInput[]
    NOT?: ObraSocialXProfesionalWhereInput | ObraSocialXProfesionalWhereInput[]
    id?: IntFilter<"ObraSocialXProfesional"> | number
    profesionalId?: IntFilter<"ObraSocialXProfesional"> | number
    obraSocialId?: IntFilter<"ObraSocialXProfesional"> | number
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    obraSocial?: XOR<ObraSocialScalarRelationFilter, ObraSocialWhereInput>
  }

  export type ObraSocialXProfesionalOrderByWithRelationInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    obraSocialId?: SortOrder
    profesional?: ProfesionalOrderByWithRelationInput
    obraSocial?: ObraSocialOrderByWithRelationInput
  }

  export type ObraSocialXProfesionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ObraSocialXProfesionalWhereInput | ObraSocialXProfesionalWhereInput[]
    OR?: ObraSocialXProfesionalWhereInput[]
    NOT?: ObraSocialXProfesionalWhereInput | ObraSocialXProfesionalWhereInput[]
    profesionalId?: IntFilter<"ObraSocialXProfesional"> | number
    obraSocialId?: IntFilter<"ObraSocialXProfesional"> | number
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    obraSocial?: XOR<ObraSocialScalarRelationFilter, ObraSocialWhereInput>
  }, "id">

  export type ObraSocialXProfesionalOrderByWithAggregationInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    obraSocialId?: SortOrder
    _count?: ObraSocialXProfesionalCountOrderByAggregateInput
    _avg?: ObraSocialXProfesionalAvgOrderByAggregateInput
    _max?: ObraSocialXProfesionalMaxOrderByAggregateInput
    _min?: ObraSocialXProfesionalMinOrderByAggregateInput
    _sum?: ObraSocialXProfesionalSumOrderByAggregateInput
  }

  export type ObraSocialXProfesionalScalarWhereWithAggregatesInput = {
    AND?: ObraSocialXProfesionalScalarWhereWithAggregatesInput | ObraSocialXProfesionalScalarWhereWithAggregatesInput[]
    OR?: ObraSocialXProfesionalScalarWhereWithAggregatesInput[]
    NOT?: ObraSocialXProfesionalScalarWhereWithAggregatesInput | ObraSocialXProfesionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ObraSocialXProfesional"> | number
    profesionalId?: IntWithAggregatesFilter<"ObraSocialXProfesional"> | number
    obraSocialId?: IntWithAggregatesFilter<"ObraSocialXProfesional"> | number
  }

  export type TurnoWhereInput = {
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    id?: IntFilter<"Turno"> | number
    pacienteId?: IntFilter<"Turno"> | number
    profesionalId?: IntFilter<"Turno"> | number
    fecha?: DateTimeFilter<"Turno"> | Date | string
    hora?: StringFilter<"Turno"> | string
    estado?: EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno
    creadoEn?: DateTimeFilter<"Turno"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    detalles?: DetalleTurnoListRelationFilter
  }

  export type TurnoOrderByWithRelationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    profesional?: ProfesionalOrderByWithRelationInput
    detalles?: DetalleTurnoOrderByRelationAggregateInput
  }

  export type TurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TurnoWhereInput | TurnoWhereInput[]
    OR?: TurnoWhereInput[]
    NOT?: TurnoWhereInput | TurnoWhereInput[]
    pacienteId?: IntFilter<"Turno"> | number
    profesionalId?: IntFilter<"Turno"> | number
    fecha?: DateTimeFilter<"Turno"> | Date | string
    hora?: StringFilter<"Turno"> | string
    estado?: EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno
    creadoEn?: DateTimeFilter<"Turno"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    detalles?: DetalleTurnoListRelationFilter
  }, "id">

  export type TurnoOrderByWithAggregationInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    _count?: TurnoCountOrderByAggregateInput
    _avg?: TurnoAvgOrderByAggregateInput
    _max?: TurnoMaxOrderByAggregateInput
    _min?: TurnoMinOrderByAggregateInput
    _sum?: TurnoSumOrderByAggregateInput
  }

  export type TurnoScalarWhereWithAggregatesInput = {
    AND?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    OR?: TurnoScalarWhereWithAggregatesInput[]
    NOT?: TurnoScalarWhereWithAggregatesInput | TurnoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Turno"> | number
    pacienteId?: IntWithAggregatesFilter<"Turno"> | number
    profesionalId?: IntWithAggregatesFilter<"Turno"> | number
    fecha?: DateTimeWithAggregatesFilter<"Turno"> | Date | string
    hora?: StringWithAggregatesFilter<"Turno"> | string
    estado?: EnumEstadoTurnoWithAggregatesFilter<"Turno"> | $Enums.EstadoTurno
    creadoEn?: DateTimeWithAggregatesFilter<"Turno"> | Date | string
  }

  export type DetalleTurnoWhereInput = {
    AND?: DetalleTurnoWhereInput | DetalleTurnoWhereInput[]
    OR?: DetalleTurnoWhereInput[]
    NOT?: DetalleTurnoWhereInput | DetalleTurnoWhereInput[]
    id?: IntFilter<"DetalleTurno"> | number
    turnoId?: IntFilter<"DetalleTurno"> | number
    descripcion?: StringFilter<"DetalleTurno"> | string
    observacion?: StringNullableFilter<"DetalleTurno"> | string | null
    creadoEn?: DateTimeFilter<"DetalleTurno"> | Date | string
    turno?: XOR<TurnoScalarRelationFilter, TurnoWhereInput>
  }

  export type DetalleTurnoOrderByWithRelationInput = {
    id?: SortOrder
    turnoId?: SortOrder
    descripcion?: SortOrder
    observacion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    turno?: TurnoOrderByWithRelationInput
  }

  export type DetalleTurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleTurnoWhereInput | DetalleTurnoWhereInput[]
    OR?: DetalleTurnoWhereInput[]
    NOT?: DetalleTurnoWhereInput | DetalleTurnoWhereInput[]
    turnoId?: IntFilter<"DetalleTurno"> | number
    descripcion?: StringFilter<"DetalleTurno"> | string
    observacion?: StringNullableFilter<"DetalleTurno"> | string | null
    creadoEn?: DateTimeFilter<"DetalleTurno"> | Date | string
    turno?: XOR<TurnoScalarRelationFilter, TurnoWhereInput>
  }, "id">

  export type DetalleTurnoOrderByWithAggregationInput = {
    id?: SortOrder
    turnoId?: SortOrder
    descripcion?: SortOrder
    observacion?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: DetalleTurnoCountOrderByAggregateInput
    _avg?: DetalleTurnoAvgOrderByAggregateInput
    _max?: DetalleTurnoMaxOrderByAggregateInput
    _min?: DetalleTurnoMinOrderByAggregateInput
    _sum?: DetalleTurnoSumOrderByAggregateInput
  }

  export type DetalleTurnoScalarWhereWithAggregatesInput = {
    AND?: DetalleTurnoScalarWhereWithAggregatesInput | DetalleTurnoScalarWhereWithAggregatesInput[]
    OR?: DetalleTurnoScalarWhereWithAggregatesInput[]
    NOT?: DetalleTurnoScalarWhereWithAggregatesInput | DetalleTurnoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleTurno"> | number
    turnoId?: IntWithAggregatesFilter<"DetalleTurno"> | number
    descripcion?: StringWithAggregatesFilter<"DetalleTurno"> | string
    observacion?: StringNullableWithAggregatesFilter<"DetalleTurno"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"DetalleTurno"> | Date | string
  }

  export type CentroMedicoWhereInput = {
    AND?: CentroMedicoWhereInput | CentroMedicoWhereInput[]
    OR?: CentroMedicoWhereInput[]
    NOT?: CentroMedicoWhereInput | CentroMedicoWhereInput[]
    id?: IntFilter<"CentroMedico"> | number
    nombre?: StringFilter<"CentroMedico"> | string
    direccion?: StringFilter<"CentroMedico"> | string
    telefono?: StringFilter<"CentroMedico"> | string
    email?: StringFilter<"CentroMedico"> | string
  }

  export type CentroMedicoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type CentroMedicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CentroMedicoWhereInput | CentroMedicoWhereInput[]
    OR?: CentroMedicoWhereInput[]
    NOT?: CentroMedicoWhereInput | CentroMedicoWhereInput[]
    nombre?: StringFilter<"CentroMedico"> | string
    direccion?: StringFilter<"CentroMedico"> | string
    telefono?: StringFilter<"CentroMedico"> | string
    email?: StringFilter<"CentroMedico"> | string
  }, "id">

  export type CentroMedicoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    _count?: CentroMedicoCountOrderByAggregateInput
    _avg?: CentroMedicoAvgOrderByAggregateInput
    _max?: CentroMedicoMaxOrderByAggregateInput
    _min?: CentroMedicoMinOrderByAggregateInput
    _sum?: CentroMedicoSumOrderByAggregateInput
  }

  export type CentroMedicoScalarWhereWithAggregatesInput = {
    AND?: CentroMedicoScalarWhereWithAggregatesInput | CentroMedicoScalarWhereWithAggregatesInput[]
    OR?: CentroMedicoScalarWhereWithAggregatesInput[]
    NOT?: CentroMedicoScalarWhereWithAggregatesInput | CentroMedicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CentroMedico"> | number
    nombre?: StringWithAggregatesFilter<"CentroMedico"> | string
    direccion?: StringWithAggregatesFilter<"CentroMedico"> | string
    telefono?: StringWithAggregatesFilter<"CentroMedico"> | string
    email?: StringWithAggregatesFilter<"CentroMedico"> | string
  }

  export type UsuarioCreateInput = {
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    profesional?: ProfesionalCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteCreateNestedOneWithoutUsuarioInput
    pacientesCreados?: PacienteCreateNestedManyWithoutCreadoPorInput
    profesionalesCreados?: ProfesionalCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    profesional?: ProfesionalUncheckedCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUsuarioInput
    pacientesCreados?: PacienteUncheckedCreateNestedManyWithoutCreadoPorInput
    profesionalesCreados?: ProfesionalUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUpdateOneWithoutUsuarioNestedInput
    pacientesCreados?: PacienteUpdateManyWithoutCreadoPorNestedInput
    profesionalesCreados?: ProfesionalUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUncheckedUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUsuarioNestedInput
    pacientesCreados?: PacienteUncheckedUpdateManyWithoutCreadoPorNestedInput
    profesionalesCreados?: ProfesionalUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvinciaCreateInput = {
    nombre: string
    pacientes?: PacienteCreateNestedManyWithoutProvinciaInput
    profesionales?: ProfesionalCreateNestedManyWithoutProvinciaInput
    localidades?: LocalidadCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaUncheckedCreateInput = {
    id?: number
    nombre: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutProvinciaInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutProvinciaInput
    localidades?: LocalidadUncheckedCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutProvinciaNestedInput
    profesionales?: ProfesionalUpdateManyWithoutProvinciaNestedInput
    localidades?: LocalidadUpdateManyWithoutProvinciaNestedInput
  }

  export type ProvinciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutProvinciaNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutProvinciaNestedInput
    localidades?: LocalidadUncheckedUpdateManyWithoutProvinciaNestedInput
  }

  export type ProvinciaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type ProvinciaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LocalidadCreateInput = {
    nombre: string
    provincia: ProvinciaCreateNestedOneWithoutLocalidadesInput
    pacientes?: PacienteCreateNestedManyWithoutLocalidadInput
    profesionales?: ProfesionalCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadUncheckedCreateInput = {
    id?: number
    nombre: string
    provinciaId: number
    pacientes?: PacienteUncheckedCreateNestedManyWithoutLocalidadInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    provincia?: ProvinciaUpdateOneRequiredWithoutLocalidadesNestedInput
    pacientes?: PacienteUpdateManyWithoutLocalidadNestedInput
    profesionales?: ProfesionalUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    pacientes?: PacienteUncheckedUpdateManyWithoutLocalidadNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadCreateManyInput = {
    id?: number
    nombre: string
    provinciaId: number
  }

  export type LocalidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LocalidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
  }

  export type ObraSocialCreateInput = {
    nombre: string
    pacientes?: PacienteCreateNestedManyWithoutObraSocialInput
    profesionales?: ObraSocialXProfesionalCreateNestedManyWithoutObraSocialInput
  }

  export type ObraSocialUncheckedCreateInput = {
    id?: number
    nombre: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutObraSocialInput
    profesionales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutObraSocialInput
  }

  export type ObraSocialUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutObraSocialNestedInput
    profesionales?: ObraSocialXProfesionalUpdateManyWithoutObraSocialNestedInput
  }

  export type ObraSocialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutObraSocialNestedInput
    profesionales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutObraSocialNestedInput
  }

  export type ObraSocialCreateManyInput = {
    id?: number
    nombre: string
  }

  export type ObraSocialUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ObraSocialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PrestacionCreateInput = {
    nombre: string
    descripcion?: string | null
    profesionales?: PrestacionXProfesionalCreateNestedManyWithoutPrestacionInput
  }

  export type PrestacionUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    profesionales?: PrestacionXProfesionalUncheckedCreateNestedManyWithoutPrestacionInput
  }

  export type PrestacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    profesionales?: PrestacionXProfesionalUpdateManyWithoutPrestacionNestedInput
  }

  export type PrestacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    profesionales?: PrestacionXProfesionalUncheckedUpdateManyWithoutPrestacionNestedInput
  }

  export type PrestacionCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type PrestacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrestacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteCreateInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
    creadoPor?: UsuarioCreateNestedOneWithoutPacientesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutPacientesInput
    localidad: LocalidadCreateNestedOneWithoutPacientesInput
    obraSocial: ObraSocialCreateNestedOneWithoutPacientesInput
    turnos?: TurnoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
    creadoPor?: UsuarioUpdateOneWithoutPacientesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutPacientesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutPacientesNestedInput
    obraSocial?: ObraSocialUpdateOneRequiredWithoutPacientesNestedInput
    turnos?: TurnoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PacienteUpdateManyMutationInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesionalCreateInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProfesionalInput
    creadoPor?: UsuarioCreateNestedOneWithoutProfesionalesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutProfesionalesInput
    localidad: LocalidadCreateNestedOneWithoutProfesionalesInput
    obrasSociales?: ObraSocialXProfesionalCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUpdateInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalNestedInput
    creadoPor?: UsuarioUpdateOneWithoutProfesionalesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutProfesionalesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutProfesionalesNestedInput
    obrasSociales?: ObraSocialXProfesionalUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalCreateManyInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ProfesionalUpdateManyMutationInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrestacionXProfesionalCreateInput = {
    profesional: ProfesionalCreateNestedOneWithoutPrestacionesInput
    prestacion: PrestacionCreateNestedOneWithoutProfesionalesInput
  }

  export type PrestacionXProfesionalUncheckedCreateInput = {
    id?: number
    profesionalId: number
    prestacionId: number
  }

  export type PrestacionXProfesionalUpdateInput = {
    profesional?: ProfesionalUpdateOneRequiredWithoutPrestacionesNestedInput
    prestacion?: PrestacionUpdateOneRequiredWithoutProfesionalesNestedInput
  }

  export type PrestacionXProfesionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    prestacionId?: IntFieldUpdateOperationsInput | number
  }

  export type PrestacionXProfesionalCreateManyInput = {
    id?: number
    profesionalId: number
    prestacionId: number
  }

  export type PrestacionXProfesionalUpdateManyMutationInput = {

  }

  export type PrestacionXProfesionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    prestacionId?: IntFieldUpdateOperationsInput | number
  }

  export type ObraSocialXProfesionalCreateInput = {
    profesional: ProfesionalCreateNestedOneWithoutObrasSocialesInput
    obraSocial: ObraSocialCreateNestedOneWithoutProfesionalesInput
  }

  export type ObraSocialXProfesionalUncheckedCreateInput = {
    id?: number
    profesionalId: number
    obraSocialId: number
  }

  export type ObraSocialXProfesionalUpdateInput = {
    profesional?: ProfesionalUpdateOneRequiredWithoutObrasSocialesNestedInput
    obraSocial?: ObraSocialUpdateOneRequiredWithoutProfesionalesNestedInput
  }

  export type ObraSocialXProfesionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    obraSocialId?: IntFieldUpdateOperationsInput | number
  }

  export type ObraSocialXProfesionalCreateManyInput = {
    id?: number
    profesionalId: number
    obraSocialId: number
  }

  export type ObraSocialXProfesionalUpdateManyMutationInput = {

  }

  export type ObraSocialXProfesionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    obraSocialId?: IntFieldUpdateOperationsInput | number
  }

  export type TurnoCreateInput = {
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
    paciente: PacienteCreateNestedOneWithoutTurnosInput
    profesional: ProfesionalCreateNestedOneWithoutTurnosInput
    detalles?: DetalleTurnoCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateInput = {
    id?: number
    pacienteId: number
    profesionalId: number
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
    detalles?: DetalleTurnoUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutTurnosNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutTurnosNestedInput
    detalles?: DetalleTurnoUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetalleTurnoUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoCreateManyInput = {
    id?: number
    pacienteId: number
    profesionalId: number
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
  }

  export type TurnoUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleTurnoCreateInput = {
    descripcion: string
    observacion?: string | null
    creadoEn?: Date | string
    turno: TurnoCreateNestedOneWithoutDetallesInput
  }

  export type DetalleTurnoUncheckedCreateInput = {
    id?: number
    turnoId: number
    descripcion: string
    observacion?: string | null
    creadoEn?: Date | string
  }

  export type DetalleTurnoUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: TurnoUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type DetalleTurnoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleTurnoCreateManyInput = {
    id?: number
    turnoId: number
    descripcion: string
    observacion?: string | null
    creadoEn?: Date | string
  }

  export type DetalleTurnoUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleTurnoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    turnoId?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CentroMedicoCreateInput = {
    nombre: string
    direccion: string
    telefono: string
    email: string
  }

  export type CentroMedicoUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion: string
    telefono: string
    email: string
  }

  export type CentroMedicoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CentroMedicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CentroMedicoCreateManyInput = {
    id?: number
    nombre: string
    direccion: string
    telefono: string
    email: string
  }

  export type CentroMedicoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CentroMedicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfesionalNullableScalarRelationFilter = {
    is?: ProfesionalWhereInput | null
    isNot?: ProfesionalWhereInput | null
  }

  export type PacienteNullableScalarRelationFilter = {
    is?: PacienteWhereInput | null
    isNot?: PacienteWhereInput | null
  }

  export type PacienteListRelationFilter = {
    every?: PacienteWhereInput
    some?: PacienteWhereInput
    none?: PacienteWhereInput
  }

  export type ProfesionalListRelationFilter = {
    every?: ProfesionalWhereInput
    some?: ProfesionalWhereInput
    none?: ProfesionalWhereInput
  }

  export type PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfesionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    contraseña?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LocalidadListRelationFilter = {
    every?: LocalidadWhereInput
    some?: LocalidadWhereInput
    none?: LocalidadWhereInput
  }

  export type LocalidadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinciaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvinciaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinciaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvinciaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ProvinciaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvinciaScalarRelationFilter = {
    is?: ProvinciaWhereInput
    isNot?: ProvinciaWhereInput
  }

  export type LocalidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadAvgOrderByAggregateInput = {
    id?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    provinciaId?: SortOrder
  }

  export type LocalidadSumOrderByAggregateInput = {
    id?: SortOrder
    provinciaId?: SortOrder
  }

  export type ObraSocialXProfesionalListRelationFilter = {
    every?: ObraSocialXProfesionalWhereInput
    some?: ObraSocialXProfesionalWhereInput
    none?: ObraSocialXProfesionalWhereInput
  }

  export type ObraSocialXProfesionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObraSocialCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ObraSocialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ObraSocialMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ObraSocialMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ObraSocialSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PrestacionXProfesionalListRelationFilter = {
    every?: PrestacionXProfesionalWhereInput
    some?: PrestacionXProfesionalWhereInput
    none?: PrestacionXProfesionalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrestacionXProfesionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrestacionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PrestacionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PrestacionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PrestacionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PrestacionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGeneroFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroFilter<$PrismaModel> | $Enums.Genero
  }

  export type EnumEstadoCivilFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCivil | EnumEstadoCivilFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCivilFilter<$PrismaModel> | $Enums.EstadoCivil
  }

  export type EnumEstadoPacienteFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPaciente | EnumEstadoPacienteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPaciente[] | ListEnumEstadoPacienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPaciente[] | ListEnumEstadoPacienteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPacienteFilter<$PrismaModel> | $Enums.EstadoPaciente
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type LocalidadScalarRelationFilter = {
    is?: LocalidadWhereInput
    isNot?: LocalidadWhereInput
  }

  export type ObraSocialScalarRelationFilter = {
    is?: ObraSocialWhereInput
    isNot?: ObraSocialWhereInput
  }

  export type TurnoListRelationFilter = {
    every?: TurnoWhereInput
    some?: TurnoWhereInput
    none?: TurnoWhereInput
  }

  export type TurnoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    obraSocialId?: SortOrder
    numeroSocio?: SortOrder
    plan?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    obraSocialId?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    obraSocialId?: SortOrder
    numeroSocio?: SortOrder
    plan?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    obraSocialId?: SortOrder
    numeroSocio?: SortOrder
    plan?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    obraSocialId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGeneroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroWithAggregatesFilter<$PrismaModel> | $Enums.Genero
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneroFilter<$PrismaModel>
    _max?: NestedEnumGeneroFilter<$PrismaModel>
  }

  export type EnumEstadoCivilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCivil | EnumEstadoCivilFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCivilWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCivil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCivilFilter<$PrismaModel>
    _max?: NestedEnumEstadoCivilFilter<$PrismaModel>
  }

  export type EnumEstadoPacienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPaciente | EnumEstadoPacienteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPaciente[] | ListEnumEstadoPacienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPaciente[] | ListEnumEstadoPacienteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPacienteWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPaciente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPacienteFilter<$PrismaModel>
    _max?: NestedEnumEstadoPacienteFilter<$PrismaModel>
  }

  export type ProfesionalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    titulo?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrder
    universidad?: SortOrder
    fechaGraduacion?: SortOrder
    horarioTrabajo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProfesionalAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
  }

  export type ProfesionalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    titulo?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrder
    universidad?: SortOrder
    fechaGraduacion?: SortOrder
    horarioTrabajo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProfesionalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    numeroInterno?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fechaNacimiento?: SortOrder
    genero?: SortOrder
    estadoCivil?: SortOrder
    pais?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    titulo?: SortOrder
    matricula?: SortOrder
    especialidad?: SortOrder
    universidad?: SortOrder
    fechaGraduacion?: SortOrder
    horarioTrabajo?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
  }

  export type ProfesionalSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    creadoPorId?: SortOrder
    provinciaId?: SortOrder
    localidadId?: SortOrder
  }

  export type ProfesionalScalarRelationFilter = {
    is?: ProfesionalWhereInput
    isNot?: ProfesionalWhereInput
  }

  export type PrestacionScalarRelationFilter = {
    is?: PrestacionWhereInput
    isNot?: PrestacionWhereInput
  }

  export type PrestacionXProfesionalCountOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    prestacionId?: SortOrder
  }

  export type PrestacionXProfesionalAvgOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    prestacionId?: SortOrder
  }

  export type PrestacionXProfesionalMaxOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    prestacionId?: SortOrder
  }

  export type PrestacionXProfesionalMinOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    prestacionId?: SortOrder
  }

  export type PrestacionXProfesionalSumOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    prestacionId?: SortOrder
  }

  export type ObraSocialXProfesionalCountOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    obraSocialId?: SortOrder
  }

  export type ObraSocialXProfesionalAvgOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    obraSocialId?: SortOrder
  }

  export type ObraSocialXProfesionalMaxOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    obraSocialId?: SortOrder
  }

  export type ObraSocialXProfesionalMinOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    obraSocialId?: SortOrder
  }

  export type ObraSocialXProfesionalSumOrderByAggregateInput = {
    id?: SortOrder
    profesionalId?: SortOrder
    obraSocialId?: SortOrder
  }

  export type EnumEstadoTurnoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTurno | EnumEstadoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTurnoFilter<$PrismaModel> | $Enums.EstadoTurno
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type DetalleTurnoListRelationFilter = {
    every?: DetalleTurnoWhereInput
    some?: DetalleTurnoWhereInput
    none?: DetalleTurnoWhereInput
  }

  export type DetalleTurnoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurnoCountOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type TurnoAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
  }

  export type TurnoMaxOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type TurnoMinOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
  }

  export type TurnoSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
  }

  export type EnumEstadoTurnoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTurno | EnumEstadoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTurnoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTurno
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTurnoFilter<$PrismaModel>
    _max?: NestedEnumEstadoTurnoFilter<$PrismaModel>
  }

  export type TurnoScalarRelationFilter = {
    is?: TurnoWhereInput
    isNot?: TurnoWhereInput
  }

  export type DetalleTurnoCountOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    descripcion?: SortOrder
    observacion?: SortOrder
    creadoEn?: SortOrder
  }

  export type DetalleTurnoAvgOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
  }

  export type DetalleTurnoMaxOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    descripcion?: SortOrder
    observacion?: SortOrder
    creadoEn?: SortOrder
  }

  export type DetalleTurnoMinOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
    descripcion?: SortOrder
    observacion?: SortOrder
    creadoEn?: SortOrder
  }

  export type DetalleTurnoSumOrderByAggregateInput = {
    id?: SortOrder
    turnoId?: SortOrder
  }

  export type CentroMedicoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type CentroMedicoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CentroMedicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type CentroMedicoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type CentroMedicoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfesionalCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutUsuarioInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuarioInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteCreateNestedManyWithoutCreadoPorInput = {
    create?: XOR<PacienteCreateWithoutCreadoPorInput, PacienteUncheckedCreateWithoutCreadoPorInput> | PacienteCreateWithoutCreadoPorInput[] | PacienteUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutCreadoPorInput | PacienteCreateOrConnectWithoutCreadoPorInput[]
    createMany?: PacienteCreateManyCreadoPorInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ProfesionalCreateNestedManyWithoutCreadoPorInput = {
    create?: XOR<ProfesionalCreateWithoutCreadoPorInput, ProfesionalUncheckedCreateWithoutCreadoPorInput> | ProfesionalCreateWithoutCreadoPorInput[] | ProfesionalUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutCreadoPorInput | ProfesionalCreateOrConnectWithoutCreadoPorInput[]
    createMany?: ProfesionalCreateManyCreadoPorInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type ProfesionalUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutUsuarioInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type PacienteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuarioInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteUncheckedCreateNestedManyWithoutCreadoPorInput = {
    create?: XOR<PacienteCreateWithoutCreadoPorInput, PacienteUncheckedCreateWithoutCreadoPorInput> | PacienteCreateWithoutCreadoPorInput[] | PacienteUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutCreadoPorInput | PacienteCreateOrConnectWithoutCreadoPorInput[]
    createMany?: PacienteCreateManyCreadoPorInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ProfesionalUncheckedCreateNestedManyWithoutCreadoPorInput = {
    create?: XOR<ProfesionalCreateWithoutCreadoPorInput, ProfesionalUncheckedCreateWithoutCreadoPorInput> | ProfesionalCreateWithoutCreadoPorInput[] | ProfesionalUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutCreadoPorInput | ProfesionalCreateOrConnectWithoutCreadoPorInput[]
    createMany?: ProfesionalCreateManyCreadoPorInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfesionalUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutUsuarioInput
    upsert?: ProfesionalUpsertWithoutUsuarioInput
    disconnect?: ProfesionalWhereInput | boolean
    delete?: ProfesionalWhereInput | boolean
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutUsuarioInput, ProfesionalUpdateWithoutUsuarioInput>, ProfesionalUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuarioInput
    upsert?: PacienteUpsertWithoutUsuarioInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUsuarioInput, PacienteUpdateWithoutUsuarioInput>, PacienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteUpdateManyWithoutCreadoPorNestedInput = {
    create?: XOR<PacienteCreateWithoutCreadoPorInput, PacienteUncheckedCreateWithoutCreadoPorInput> | PacienteCreateWithoutCreadoPorInput[] | PacienteUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutCreadoPorInput | PacienteCreateOrConnectWithoutCreadoPorInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutCreadoPorInput | PacienteUpsertWithWhereUniqueWithoutCreadoPorInput[]
    createMany?: PacienteCreateManyCreadoPorInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutCreadoPorInput | PacienteUpdateWithWhereUniqueWithoutCreadoPorInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutCreadoPorInput | PacienteUpdateManyWithWhereWithoutCreadoPorInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ProfesionalUpdateManyWithoutCreadoPorNestedInput = {
    create?: XOR<ProfesionalCreateWithoutCreadoPorInput, ProfesionalUncheckedCreateWithoutCreadoPorInput> | ProfesionalCreateWithoutCreadoPorInput[] | ProfesionalUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutCreadoPorInput | ProfesionalCreateOrConnectWithoutCreadoPorInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutCreadoPorInput | ProfesionalUpsertWithWhereUniqueWithoutCreadoPorInput[]
    createMany?: ProfesionalCreateManyCreadoPorInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutCreadoPorInput | ProfesionalUpdateWithWhereUniqueWithoutCreadoPorInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutCreadoPorInput | ProfesionalUpdateManyWithWhereWithoutCreadoPorInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfesionalUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutUsuarioInput
    upsert?: ProfesionalUpsertWithoutUsuarioInput
    disconnect?: ProfesionalWhereInput | boolean
    delete?: ProfesionalWhereInput | boolean
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutUsuarioInput, ProfesionalUpdateWithoutUsuarioInput>, ProfesionalUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuarioInput
    upsert?: PacienteUpsertWithoutUsuarioInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUsuarioInput, PacienteUpdateWithoutUsuarioInput>, PacienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteUncheckedUpdateManyWithoutCreadoPorNestedInput = {
    create?: XOR<PacienteCreateWithoutCreadoPorInput, PacienteUncheckedCreateWithoutCreadoPorInput> | PacienteCreateWithoutCreadoPorInput[] | PacienteUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutCreadoPorInput | PacienteCreateOrConnectWithoutCreadoPorInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutCreadoPorInput | PacienteUpsertWithWhereUniqueWithoutCreadoPorInput[]
    createMany?: PacienteCreateManyCreadoPorInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutCreadoPorInput | PacienteUpdateWithWhereUniqueWithoutCreadoPorInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutCreadoPorInput | PacienteUpdateManyWithWhereWithoutCreadoPorInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ProfesionalUncheckedUpdateManyWithoutCreadoPorNestedInput = {
    create?: XOR<ProfesionalCreateWithoutCreadoPorInput, ProfesionalUncheckedCreateWithoutCreadoPorInput> | ProfesionalCreateWithoutCreadoPorInput[] | ProfesionalUncheckedCreateWithoutCreadoPorInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutCreadoPorInput | ProfesionalCreateOrConnectWithoutCreadoPorInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutCreadoPorInput | ProfesionalUpsertWithWhereUniqueWithoutCreadoPorInput[]
    createMany?: ProfesionalCreateManyCreadoPorInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutCreadoPorInput | ProfesionalUpdateWithWhereUniqueWithoutCreadoPorInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutCreadoPorInput | ProfesionalUpdateManyWithWhereWithoutCreadoPorInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type PacienteCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<PacienteCreateWithoutProvinciaInput, PacienteUncheckedCreateWithoutProvinciaInput> | PacienteCreateWithoutProvinciaInput[] | PacienteUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutProvinciaInput | PacienteCreateOrConnectWithoutProvinciaInput[]
    createMany?: PacienteCreateManyProvinciaInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ProfesionalCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<ProfesionalCreateWithoutProvinciaInput, ProfesionalUncheckedCreateWithoutProvinciaInput> | ProfesionalCreateWithoutProvinciaInput[] | ProfesionalUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutProvinciaInput | ProfesionalCreateOrConnectWithoutProvinciaInput[]
    createMany?: ProfesionalCreateManyProvinciaInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type LocalidadCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput> | LocalidadCreateWithoutProvinciaInput[] | LocalidadUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LocalidadCreateOrConnectWithoutProvinciaInput | LocalidadCreateOrConnectWithoutProvinciaInput[]
    createMany?: LocalidadCreateManyProvinciaInputEnvelope
    connect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<PacienteCreateWithoutProvinciaInput, PacienteUncheckedCreateWithoutProvinciaInput> | PacienteCreateWithoutProvinciaInput[] | PacienteUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutProvinciaInput | PacienteCreateOrConnectWithoutProvinciaInput[]
    createMany?: PacienteCreateManyProvinciaInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ProfesionalUncheckedCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<ProfesionalCreateWithoutProvinciaInput, ProfesionalUncheckedCreateWithoutProvinciaInput> | ProfesionalCreateWithoutProvinciaInput[] | ProfesionalUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutProvinciaInput | ProfesionalCreateOrConnectWithoutProvinciaInput[]
    createMany?: ProfesionalCreateManyProvinciaInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type LocalidadUncheckedCreateNestedManyWithoutProvinciaInput = {
    create?: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput> | LocalidadCreateWithoutProvinciaInput[] | LocalidadUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LocalidadCreateOrConnectWithoutProvinciaInput | LocalidadCreateOrConnectWithoutProvinciaInput[]
    createMany?: LocalidadCreateManyProvinciaInputEnvelope
    connect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
  }

  export type PacienteUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<PacienteCreateWithoutProvinciaInput, PacienteUncheckedCreateWithoutProvinciaInput> | PacienteCreateWithoutProvinciaInput[] | PacienteUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutProvinciaInput | PacienteCreateOrConnectWithoutProvinciaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutProvinciaInput | PacienteUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: PacienteCreateManyProvinciaInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutProvinciaInput | PacienteUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutProvinciaInput | PacienteUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ProfesionalUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<ProfesionalCreateWithoutProvinciaInput, ProfesionalUncheckedCreateWithoutProvinciaInput> | ProfesionalCreateWithoutProvinciaInput[] | ProfesionalUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutProvinciaInput | ProfesionalCreateOrConnectWithoutProvinciaInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutProvinciaInput | ProfesionalUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: ProfesionalCreateManyProvinciaInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutProvinciaInput | ProfesionalUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutProvinciaInput | ProfesionalUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type LocalidadUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput> | LocalidadCreateWithoutProvinciaInput[] | LocalidadUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LocalidadCreateOrConnectWithoutProvinciaInput | LocalidadCreateOrConnectWithoutProvinciaInput[]
    upsert?: LocalidadUpsertWithWhereUniqueWithoutProvinciaInput | LocalidadUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: LocalidadCreateManyProvinciaInputEnvelope
    set?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    disconnect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    delete?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    connect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    update?: LocalidadUpdateWithWhereUniqueWithoutProvinciaInput | LocalidadUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: LocalidadUpdateManyWithWhereWithoutProvinciaInput | LocalidadUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: LocalidadScalarWhereInput | LocalidadScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<PacienteCreateWithoutProvinciaInput, PacienteUncheckedCreateWithoutProvinciaInput> | PacienteCreateWithoutProvinciaInput[] | PacienteUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutProvinciaInput | PacienteCreateOrConnectWithoutProvinciaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutProvinciaInput | PacienteUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: PacienteCreateManyProvinciaInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutProvinciaInput | PacienteUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutProvinciaInput | PacienteUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ProfesionalUncheckedUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<ProfesionalCreateWithoutProvinciaInput, ProfesionalUncheckedCreateWithoutProvinciaInput> | ProfesionalCreateWithoutProvinciaInput[] | ProfesionalUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutProvinciaInput | ProfesionalCreateOrConnectWithoutProvinciaInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutProvinciaInput | ProfesionalUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: ProfesionalCreateManyProvinciaInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutProvinciaInput | ProfesionalUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutProvinciaInput | ProfesionalUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type LocalidadUncheckedUpdateManyWithoutProvinciaNestedInput = {
    create?: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput> | LocalidadCreateWithoutProvinciaInput[] | LocalidadUncheckedCreateWithoutProvinciaInput[]
    connectOrCreate?: LocalidadCreateOrConnectWithoutProvinciaInput | LocalidadCreateOrConnectWithoutProvinciaInput[]
    upsert?: LocalidadUpsertWithWhereUniqueWithoutProvinciaInput | LocalidadUpsertWithWhereUniqueWithoutProvinciaInput[]
    createMany?: LocalidadCreateManyProvinciaInputEnvelope
    set?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    disconnect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    delete?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    connect?: LocalidadWhereUniqueInput | LocalidadWhereUniqueInput[]
    update?: LocalidadUpdateWithWhereUniqueWithoutProvinciaInput | LocalidadUpdateWithWhereUniqueWithoutProvinciaInput[]
    updateMany?: LocalidadUpdateManyWithWhereWithoutProvinciaInput | LocalidadUpdateManyWithWhereWithoutProvinciaInput[]
    deleteMany?: LocalidadScalarWhereInput | LocalidadScalarWhereInput[]
  }

  export type ProvinciaCreateNestedOneWithoutLocalidadesInput = {
    create?: XOR<ProvinciaCreateWithoutLocalidadesInput, ProvinciaUncheckedCreateWithoutLocalidadesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutLocalidadesInput
    connect?: ProvinciaWhereUniqueInput
  }

  export type PacienteCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<PacienteCreateWithoutLocalidadInput, PacienteUncheckedCreateWithoutLocalidadInput> | PacienteCreateWithoutLocalidadInput[] | PacienteUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutLocalidadInput | PacienteCreateOrConnectWithoutLocalidadInput[]
    createMany?: PacienteCreateManyLocalidadInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ProfesionalCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<ProfesionalCreateWithoutLocalidadInput, ProfesionalUncheckedCreateWithoutLocalidadInput> | ProfesionalCreateWithoutLocalidadInput[] | ProfesionalUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutLocalidadInput | ProfesionalCreateOrConnectWithoutLocalidadInput[]
    createMany?: ProfesionalCreateManyLocalidadInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<PacienteCreateWithoutLocalidadInput, PacienteUncheckedCreateWithoutLocalidadInput> | PacienteCreateWithoutLocalidadInput[] | PacienteUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutLocalidadInput | PacienteCreateOrConnectWithoutLocalidadInput[]
    createMany?: PacienteCreateManyLocalidadInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ProfesionalUncheckedCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<ProfesionalCreateWithoutLocalidadInput, ProfesionalUncheckedCreateWithoutLocalidadInput> | ProfesionalCreateWithoutLocalidadInput[] | ProfesionalUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutLocalidadInput | ProfesionalCreateOrConnectWithoutLocalidadInput[]
    createMany?: ProfesionalCreateManyLocalidadInputEnvelope
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
  }

  export type ProvinciaUpdateOneRequiredWithoutLocalidadesNestedInput = {
    create?: XOR<ProvinciaCreateWithoutLocalidadesInput, ProvinciaUncheckedCreateWithoutLocalidadesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutLocalidadesInput
    upsert?: ProvinciaUpsertWithoutLocalidadesInput
    connect?: ProvinciaWhereUniqueInput
    update?: XOR<XOR<ProvinciaUpdateToOneWithWhereWithoutLocalidadesInput, ProvinciaUpdateWithoutLocalidadesInput>, ProvinciaUncheckedUpdateWithoutLocalidadesInput>
  }

  export type PacienteUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<PacienteCreateWithoutLocalidadInput, PacienteUncheckedCreateWithoutLocalidadInput> | PacienteCreateWithoutLocalidadInput[] | PacienteUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutLocalidadInput | PacienteCreateOrConnectWithoutLocalidadInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutLocalidadInput | PacienteUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: PacienteCreateManyLocalidadInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutLocalidadInput | PacienteUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutLocalidadInput | PacienteUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ProfesionalUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<ProfesionalCreateWithoutLocalidadInput, ProfesionalUncheckedCreateWithoutLocalidadInput> | ProfesionalCreateWithoutLocalidadInput[] | ProfesionalUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutLocalidadInput | ProfesionalCreateOrConnectWithoutLocalidadInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutLocalidadInput | ProfesionalUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: ProfesionalCreateManyLocalidadInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutLocalidadInput | ProfesionalUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutLocalidadInput | ProfesionalUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<PacienteCreateWithoutLocalidadInput, PacienteUncheckedCreateWithoutLocalidadInput> | PacienteCreateWithoutLocalidadInput[] | PacienteUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutLocalidadInput | PacienteCreateOrConnectWithoutLocalidadInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutLocalidadInput | PacienteUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: PacienteCreateManyLocalidadInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutLocalidadInput | PacienteUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutLocalidadInput | PacienteUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ProfesionalUncheckedUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<ProfesionalCreateWithoutLocalidadInput, ProfesionalUncheckedCreateWithoutLocalidadInput> | ProfesionalCreateWithoutLocalidadInput[] | ProfesionalUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ProfesionalCreateOrConnectWithoutLocalidadInput | ProfesionalCreateOrConnectWithoutLocalidadInput[]
    upsert?: ProfesionalUpsertWithWhereUniqueWithoutLocalidadInput | ProfesionalUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: ProfesionalCreateManyLocalidadInputEnvelope
    set?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    disconnect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    delete?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    connect?: ProfesionalWhereUniqueInput | ProfesionalWhereUniqueInput[]
    update?: ProfesionalUpdateWithWhereUniqueWithoutLocalidadInput | ProfesionalUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: ProfesionalUpdateManyWithWhereWithoutLocalidadInput | ProfesionalUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
  }

  export type PacienteCreateNestedManyWithoutObraSocialInput = {
    create?: XOR<PacienteCreateWithoutObraSocialInput, PacienteUncheckedCreateWithoutObraSocialInput> | PacienteCreateWithoutObraSocialInput[] | PacienteUncheckedCreateWithoutObraSocialInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutObraSocialInput | PacienteCreateOrConnectWithoutObraSocialInput[]
    createMany?: PacienteCreateManyObraSocialInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ObraSocialXProfesionalCreateNestedManyWithoutObraSocialInput = {
    create?: XOR<ObraSocialXProfesionalCreateWithoutObraSocialInput, ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput> | ObraSocialXProfesionalCreateWithoutObraSocialInput[] | ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput[]
    connectOrCreate?: ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput | ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput[]
    createMany?: ObraSocialXProfesionalCreateManyObraSocialInputEnvelope
    connect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutObraSocialInput = {
    create?: XOR<PacienteCreateWithoutObraSocialInput, PacienteUncheckedCreateWithoutObraSocialInput> | PacienteCreateWithoutObraSocialInput[] | PacienteUncheckedCreateWithoutObraSocialInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutObraSocialInput | PacienteCreateOrConnectWithoutObraSocialInput[]
    createMany?: PacienteCreateManyObraSocialInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type ObraSocialXProfesionalUncheckedCreateNestedManyWithoutObraSocialInput = {
    create?: XOR<ObraSocialXProfesionalCreateWithoutObraSocialInput, ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput> | ObraSocialXProfesionalCreateWithoutObraSocialInput[] | ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput[]
    connectOrCreate?: ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput | ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput[]
    createMany?: ObraSocialXProfesionalCreateManyObraSocialInputEnvelope
    connect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
  }

  export type PacienteUpdateManyWithoutObraSocialNestedInput = {
    create?: XOR<PacienteCreateWithoutObraSocialInput, PacienteUncheckedCreateWithoutObraSocialInput> | PacienteCreateWithoutObraSocialInput[] | PacienteUncheckedCreateWithoutObraSocialInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutObraSocialInput | PacienteCreateOrConnectWithoutObraSocialInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutObraSocialInput | PacienteUpsertWithWhereUniqueWithoutObraSocialInput[]
    createMany?: PacienteCreateManyObraSocialInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutObraSocialInput | PacienteUpdateWithWhereUniqueWithoutObraSocialInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutObraSocialInput | PacienteUpdateManyWithWhereWithoutObraSocialInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ObraSocialXProfesionalUpdateManyWithoutObraSocialNestedInput = {
    create?: XOR<ObraSocialXProfesionalCreateWithoutObraSocialInput, ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput> | ObraSocialXProfesionalCreateWithoutObraSocialInput[] | ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput[]
    connectOrCreate?: ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput | ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput[]
    upsert?: ObraSocialXProfesionalUpsertWithWhereUniqueWithoutObraSocialInput | ObraSocialXProfesionalUpsertWithWhereUniqueWithoutObraSocialInput[]
    createMany?: ObraSocialXProfesionalCreateManyObraSocialInputEnvelope
    set?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    disconnect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    delete?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    connect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    update?: ObraSocialXProfesionalUpdateWithWhereUniqueWithoutObraSocialInput | ObraSocialXProfesionalUpdateWithWhereUniqueWithoutObraSocialInput[]
    updateMany?: ObraSocialXProfesionalUpdateManyWithWhereWithoutObraSocialInput | ObraSocialXProfesionalUpdateManyWithWhereWithoutObraSocialInput[]
    deleteMany?: ObraSocialXProfesionalScalarWhereInput | ObraSocialXProfesionalScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutObraSocialNestedInput = {
    create?: XOR<PacienteCreateWithoutObraSocialInput, PacienteUncheckedCreateWithoutObraSocialInput> | PacienteCreateWithoutObraSocialInput[] | PacienteUncheckedCreateWithoutObraSocialInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutObraSocialInput | PacienteCreateOrConnectWithoutObraSocialInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutObraSocialInput | PacienteUpsertWithWhereUniqueWithoutObraSocialInput[]
    createMany?: PacienteCreateManyObraSocialInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutObraSocialInput | PacienteUpdateWithWhereUniqueWithoutObraSocialInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutObraSocialInput | PacienteUpdateManyWithWhereWithoutObraSocialInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ObraSocialXProfesionalUncheckedUpdateManyWithoutObraSocialNestedInput = {
    create?: XOR<ObraSocialXProfesionalCreateWithoutObraSocialInput, ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput> | ObraSocialXProfesionalCreateWithoutObraSocialInput[] | ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput[]
    connectOrCreate?: ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput | ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput[]
    upsert?: ObraSocialXProfesionalUpsertWithWhereUniqueWithoutObraSocialInput | ObraSocialXProfesionalUpsertWithWhereUniqueWithoutObraSocialInput[]
    createMany?: ObraSocialXProfesionalCreateManyObraSocialInputEnvelope
    set?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    disconnect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    delete?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    connect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    update?: ObraSocialXProfesionalUpdateWithWhereUniqueWithoutObraSocialInput | ObraSocialXProfesionalUpdateWithWhereUniqueWithoutObraSocialInput[]
    updateMany?: ObraSocialXProfesionalUpdateManyWithWhereWithoutObraSocialInput | ObraSocialXProfesionalUpdateManyWithWhereWithoutObraSocialInput[]
    deleteMany?: ObraSocialXProfesionalScalarWhereInput | ObraSocialXProfesionalScalarWhereInput[]
  }

  export type PrestacionXProfesionalCreateNestedManyWithoutPrestacionInput = {
    create?: XOR<PrestacionXProfesionalCreateWithoutPrestacionInput, PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput> | PrestacionXProfesionalCreateWithoutPrestacionInput[] | PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput[]
    connectOrCreate?: PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput | PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput[]
    createMany?: PrestacionXProfesionalCreateManyPrestacionInputEnvelope
    connect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
  }

  export type PrestacionXProfesionalUncheckedCreateNestedManyWithoutPrestacionInput = {
    create?: XOR<PrestacionXProfesionalCreateWithoutPrestacionInput, PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput> | PrestacionXProfesionalCreateWithoutPrestacionInput[] | PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput[]
    connectOrCreate?: PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput | PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput[]
    createMany?: PrestacionXProfesionalCreateManyPrestacionInputEnvelope
    connect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PrestacionXProfesionalUpdateManyWithoutPrestacionNestedInput = {
    create?: XOR<PrestacionXProfesionalCreateWithoutPrestacionInput, PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput> | PrestacionXProfesionalCreateWithoutPrestacionInput[] | PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput[]
    connectOrCreate?: PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput | PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput[]
    upsert?: PrestacionXProfesionalUpsertWithWhereUniqueWithoutPrestacionInput | PrestacionXProfesionalUpsertWithWhereUniqueWithoutPrestacionInput[]
    createMany?: PrestacionXProfesionalCreateManyPrestacionInputEnvelope
    set?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    disconnect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    delete?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    connect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    update?: PrestacionXProfesionalUpdateWithWhereUniqueWithoutPrestacionInput | PrestacionXProfesionalUpdateWithWhereUniqueWithoutPrestacionInput[]
    updateMany?: PrestacionXProfesionalUpdateManyWithWhereWithoutPrestacionInput | PrestacionXProfesionalUpdateManyWithWhereWithoutPrestacionInput[]
    deleteMany?: PrestacionXProfesionalScalarWhereInput | PrestacionXProfesionalScalarWhereInput[]
  }

  export type PrestacionXProfesionalUncheckedUpdateManyWithoutPrestacionNestedInput = {
    create?: XOR<PrestacionXProfesionalCreateWithoutPrestacionInput, PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput> | PrestacionXProfesionalCreateWithoutPrestacionInput[] | PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput[]
    connectOrCreate?: PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput | PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput[]
    upsert?: PrestacionXProfesionalUpsertWithWhereUniqueWithoutPrestacionInput | PrestacionXProfesionalUpsertWithWhereUniqueWithoutPrestacionInput[]
    createMany?: PrestacionXProfesionalCreateManyPrestacionInputEnvelope
    set?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    disconnect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    delete?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    connect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    update?: PrestacionXProfesionalUpdateWithWhereUniqueWithoutPrestacionInput | PrestacionXProfesionalUpdateWithWhereUniqueWithoutPrestacionInput[]
    updateMany?: PrestacionXProfesionalUpdateManyWithWhereWithoutPrestacionInput | PrestacionXProfesionalUpdateManyWithWhereWithoutPrestacionInput[]
    deleteMany?: PrestacionXProfesionalScalarWhereInput | PrestacionXProfesionalScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPacienteInput = {
    create?: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacienteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPacientesCreadosInput = {
    create?: XOR<UsuarioCreateWithoutPacientesCreadosInput, UsuarioUncheckedCreateWithoutPacientesCreadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacientesCreadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProvinciaCreateNestedOneWithoutPacientesInput = {
    create?: XOR<ProvinciaCreateWithoutPacientesInput, ProvinciaUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutPacientesInput
    connect?: ProvinciaWhereUniqueInput
  }

  export type LocalidadCreateNestedOneWithoutPacientesInput = {
    create?: XOR<LocalidadCreateWithoutPacientesInput, LocalidadUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: LocalidadCreateOrConnectWithoutPacientesInput
    connect?: LocalidadWhereUniqueInput
  }

  export type ObraSocialCreateNestedOneWithoutPacientesInput = {
    create?: XOR<ObraSocialCreateWithoutPacientesInput, ObraSocialUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: ObraSocialCreateOrConnectWithoutPacientesInput
    connect?: ObraSocialWhereUniqueInput
  }

  export type TurnoCreateNestedManyWithoutPacienteInput = {
    create?: XOR<TurnoCreateWithoutPacienteInput, TurnoUncheckedCreateWithoutPacienteInput> | TurnoCreateWithoutPacienteInput[] | TurnoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutPacienteInput | TurnoCreateOrConnectWithoutPacienteInput[]
    createMany?: TurnoCreateManyPacienteInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<TurnoCreateWithoutPacienteInput, TurnoUncheckedCreateWithoutPacienteInput> | TurnoCreateWithoutPacienteInput[] | TurnoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutPacienteInput | TurnoCreateOrConnectWithoutPacienteInput[]
    createMany?: TurnoCreateManyPacienteInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type EnumGeneroFieldUpdateOperationsInput = {
    set?: $Enums.Genero
  }

  export type EnumEstadoCivilFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCivil
  }

  export type EnumEstadoPacienteFieldUpdateOperationsInput = {
    set?: $Enums.EstadoPaciente
  }

  export type UsuarioUpdateOneRequiredWithoutPacienteNestedInput = {
    create?: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacienteInput
    upsert?: UsuarioUpsertWithoutPacienteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPacienteInput, UsuarioUpdateWithoutPacienteInput>, UsuarioUncheckedUpdateWithoutPacienteInput>
  }

  export type UsuarioUpdateOneWithoutPacientesCreadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPacientesCreadosInput, UsuarioUncheckedCreateWithoutPacientesCreadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacientesCreadosInput
    upsert?: UsuarioUpsertWithoutPacientesCreadosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPacientesCreadosInput, UsuarioUpdateWithoutPacientesCreadosInput>, UsuarioUncheckedUpdateWithoutPacientesCreadosInput>
  }

  export type ProvinciaUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<ProvinciaCreateWithoutPacientesInput, ProvinciaUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutPacientesInput
    upsert?: ProvinciaUpsertWithoutPacientesInput
    connect?: ProvinciaWhereUniqueInput
    update?: XOR<XOR<ProvinciaUpdateToOneWithWhereWithoutPacientesInput, ProvinciaUpdateWithoutPacientesInput>, ProvinciaUncheckedUpdateWithoutPacientesInput>
  }

  export type LocalidadUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<LocalidadCreateWithoutPacientesInput, LocalidadUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: LocalidadCreateOrConnectWithoutPacientesInput
    upsert?: LocalidadUpsertWithoutPacientesInput
    connect?: LocalidadWhereUniqueInput
    update?: XOR<XOR<LocalidadUpdateToOneWithWhereWithoutPacientesInput, LocalidadUpdateWithoutPacientesInput>, LocalidadUncheckedUpdateWithoutPacientesInput>
  }

  export type ObraSocialUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<ObraSocialCreateWithoutPacientesInput, ObraSocialUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: ObraSocialCreateOrConnectWithoutPacientesInput
    upsert?: ObraSocialUpsertWithoutPacientesInput
    connect?: ObraSocialWhereUniqueInput
    update?: XOR<XOR<ObraSocialUpdateToOneWithWhereWithoutPacientesInput, ObraSocialUpdateWithoutPacientesInput>, ObraSocialUncheckedUpdateWithoutPacientesInput>
  }

  export type TurnoUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<TurnoCreateWithoutPacienteInput, TurnoUncheckedCreateWithoutPacienteInput> | TurnoCreateWithoutPacienteInput[] | TurnoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutPacienteInput | TurnoCreateOrConnectWithoutPacienteInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutPacienteInput | TurnoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: TurnoCreateManyPacienteInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutPacienteInput | TurnoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutPacienteInput | TurnoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TurnoUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<TurnoCreateWithoutPacienteInput, TurnoUncheckedCreateWithoutPacienteInput> | TurnoCreateWithoutPacienteInput[] | TurnoUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutPacienteInput | TurnoCreateOrConnectWithoutPacienteInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutPacienteInput | TurnoUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: TurnoCreateManyPacienteInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutPacienteInput | TurnoUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutPacienteInput | TurnoUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutProfesionalInput = {
    create?: XOR<UsuarioCreateWithoutProfesionalInput, UsuarioUncheckedCreateWithoutProfesionalInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfesionalInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutProfesionalesCreadosInput = {
    create?: XOR<UsuarioCreateWithoutProfesionalesCreadosInput, UsuarioUncheckedCreateWithoutProfesionalesCreadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfesionalesCreadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProvinciaCreateNestedOneWithoutProfesionalesInput = {
    create?: XOR<ProvinciaCreateWithoutProfesionalesInput, ProvinciaUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutProfesionalesInput
    connect?: ProvinciaWhereUniqueInput
  }

  export type LocalidadCreateNestedOneWithoutProfesionalesInput = {
    create?: XOR<LocalidadCreateWithoutProfesionalesInput, LocalidadUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: LocalidadCreateOrConnectWithoutProfesionalesInput
    connect?: LocalidadWhereUniqueInput
  }

  export type ObraSocialXProfesionalCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<ObraSocialXProfesionalCreateWithoutProfesionalInput, ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput> | ObraSocialXProfesionalCreateWithoutProfesionalInput[] | ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput | ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput[]
    createMany?: ObraSocialXProfesionalCreateManyProfesionalInputEnvelope
    connect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
  }

  export type PrestacionXProfesionalCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<PrestacionXProfesionalCreateWithoutProfesionalInput, PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput> | PrestacionXProfesionalCreateWithoutProfesionalInput[] | PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput | PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput[]
    createMany?: PrestacionXProfesionalCreateManyProfesionalInputEnvelope
    connect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
  }

  export type TurnoCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<TurnoCreateWithoutProfesionalInput, TurnoUncheckedCreateWithoutProfesionalInput> | TurnoCreateWithoutProfesionalInput[] | TurnoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutProfesionalInput | TurnoCreateOrConnectWithoutProfesionalInput[]
    createMany?: TurnoCreateManyProfesionalInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type ObraSocialXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<ObraSocialXProfesionalCreateWithoutProfesionalInput, ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput> | ObraSocialXProfesionalCreateWithoutProfesionalInput[] | ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput | ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput[]
    createMany?: ObraSocialXProfesionalCreateManyProfesionalInputEnvelope
    connect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
  }

  export type PrestacionXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<PrestacionXProfesionalCreateWithoutProfesionalInput, PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput> | PrestacionXProfesionalCreateWithoutProfesionalInput[] | PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput | PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput[]
    createMany?: PrestacionXProfesionalCreateManyProfesionalInputEnvelope
    connect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
  }

  export type TurnoUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<TurnoCreateWithoutProfesionalInput, TurnoUncheckedCreateWithoutProfesionalInput> | TurnoCreateWithoutProfesionalInput[] | TurnoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutProfesionalInput | TurnoCreateOrConnectWithoutProfesionalInput[]
    createMany?: TurnoCreateManyProfesionalInputEnvelope
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutProfesionalNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfesionalInput, UsuarioUncheckedCreateWithoutProfesionalInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfesionalInput
    upsert?: UsuarioUpsertWithoutProfesionalInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProfesionalInput, UsuarioUpdateWithoutProfesionalInput>, UsuarioUncheckedUpdateWithoutProfesionalInput>
  }

  export type UsuarioUpdateOneWithoutProfesionalesCreadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutProfesionalesCreadosInput, UsuarioUncheckedCreateWithoutProfesionalesCreadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProfesionalesCreadosInput
    upsert?: UsuarioUpsertWithoutProfesionalesCreadosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProfesionalesCreadosInput, UsuarioUpdateWithoutProfesionalesCreadosInput>, UsuarioUncheckedUpdateWithoutProfesionalesCreadosInput>
  }

  export type ProvinciaUpdateOneRequiredWithoutProfesionalesNestedInput = {
    create?: XOR<ProvinciaCreateWithoutProfesionalesInput, ProvinciaUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: ProvinciaCreateOrConnectWithoutProfesionalesInput
    upsert?: ProvinciaUpsertWithoutProfesionalesInput
    connect?: ProvinciaWhereUniqueInput
    update?: XOR<XOR<ProvinciaUpdateToOneWithWhereWithoutProfesionalesInput, ProvinciaUpdateWithoutProfesionalesInput>, ProvinciaUncheckedUpdateWithoutProfesionalesInput>
  }

  export type LocalidadUpdateOneRequiredWithoutProfesionalesNestedInput = {
    create?: XOR<LocalidadCreateWithoutProfesionalesInput, LocalidadUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: LocalidadCreateOrConnectWithoutProfesionalesInput
    upsert?: LocalidadUpsertWithoutProfesionalesInput
    connect?: LocalidadWhereUniqueInput
    update?: XOR<XOR<LocalidadUpdateToOneWithWhereWithoutProfesionalesInput, LocalidadUpdateWithoutProfesionalesInput>, LocalidadUncheckedUpdateWithoutProfesionalesInput>
  }

  export type ObraSocialXProfesionalUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<ObraSocialXProfesionalCreateWithoutProfesionalInput, ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput> | ObraSocialXProfesionalCreateWithoutProfesionalInput[] | ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput | ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput[]
    upsert?: ObraSocialXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput | ObraSocialXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: ObraSocialXProfesionalCreateManyProfesionalInputEnvelope
    set?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    disconnect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    delete?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    connect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    update?: ObraSocialXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput | ObraSocialXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: ObraSocialXProfesionalUpdateManyWithWhereWithoutProfesionalInput | ObraSocialXProfesionalUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: ObraSocialXProfesionalScalarWhereInput | ObraSocialXProfesionalScalarWhereInput[]
  }

  export type PrestacionXProfesionalUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<PrestacionXProfesionalCreateWithoutProfesionalInput, PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput> | PrestacionXProfesionalCreateWithoutProfesionalInput[] | PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput | PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput[]
    upsert?: PrestacionXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput | PrestacionXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: PrestacionXProfesionalCreateManyProfesionalInputEnvelope
    set?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    disconnect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    delete?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    connect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    update?: PrestacionXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput | PrestacionXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: PrestacionXProfesionalUpdateManyWithWhereWithoutProfesionalInput | PrestacionXProfesionalUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: PrestacionXProfesionalScalarWhereInput | PrestacionXProfesionalScalarWhereInput[]
  }

  export type TurnoUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<TurnoCreateWithoutProfesionalInput, TurnoUncheckedCreateWithoutProfesionalInput> | TurnoCreateWithoutProfesionalInput[] | TurnoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutProfesionalInput | TurnoCreateOrConnectWithoutProfesionalInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutProfesionalInput | TurnoUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: TurnoCreateManyProfesionalInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutProfesionalInput | TurnoUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutProfesionalInput | TurnoUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<ObraSocialXProfesionalCreateWithoutProfesionalInput, ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput> | ObraSocialXProfesionalCreateWithoutProfesionalInput[] | ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput | ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput[]
    upsert?: ObraSocialXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput | ObraSocialXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: ObraSocialXProfesionalCreateManyProfesionalInputEnvelope
    set?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    disconnect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    delete?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    connect?: ObraSocialXProfesionalWhereUniqueInput | ObraSocialXProfesionalWhereUniqueInput[]
    update?: ObraSocialXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput | ObraSocialXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: ObraSocialXProfesionalUpdateManyWithWhereWithoutProfesionalInput | ObraSocialXProfesionalUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: ObraSocialXProfesionalScalarWhereInput | ObraSocialXProfesionalScalarWhereInput[]
  }

  export type PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<PrestacionXProfesionalCreateWithoutProfesionalInput, PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput> | PrestacionXProfesionalCreateWithoutProfesionalInput[] | PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput | PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput[]
    upsert?: PrestacionXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput | PrestacionXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: PrestacionXProfesionalCreateManyProfesionalInputEnvelope
    set?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    disconnect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    delete?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    connect?: PrestacionXProfesionalWhereUniqueInput | PrestacionXProfesionalWhereUniqueInput[]
    update?: PrestacionXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput | PrestacionXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: PrestacionXProfesionalUpdateManyWithWhereWithoutProfesionalInput | PrestacionXProfesionalUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: PrestacionXProfesionalScalarWhereInput | PrestacionXProfesionalScalarWhereInput[]
  }

  export type TurnoUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<TurnoCreateWithoutProfesionalInput, TurnoUncheckedCreateWithoutProfesionalInput> | TurnoCreateWithoutProfesionalInput[] | TurnoUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: TurnoCreateOrConnectWithoutProfesionalInput | TurnoCreateOrConnectWithoutProfesionalInput[]
    upsert?: TurnoUpsertWithWhereUniqueWithoutProfesionalInput | TurnoUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: TurnoCreateManyProfesionalInputEnvelope
    set?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    disconnect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    delete?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    connect?: TurnoWhereUniqueInput | TurnoWhereUniqueInput[]
    update?: TurnoUpdateWithWhereUniqueWithoutProfesionalInput | TurnoUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: TurnoUpdateManyWithWhereWithoutProfesionalInput | TurnoUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
  }

  export type ProfesionalCreateNestedOneWithoutPrestacionesInput = {
    create?: XOR<ProfesionalCreateWithoutPrestacionesInput, ProfesionalUncheckedCreateWithoutPrestacionesInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutPrestacionesInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type PrestacionCreateNestedOneWithoutProfesionalesInput = {
    create?: XOR<PrestacionCreateWithoutProfesionalesInput, PrestacionUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: PrestacionCreateOrConnectWithoutProfesionalesInput
    connect?: PrestacionWhereUniqueInput
  }

  export type ProfesionalUpdateOneRequiredWithoutPrestacionesNestedInput = {
    create?: XOR<ProfesionalCreateWithoutPrestacionesInput, ProfesionalUncheckedCreateWithoutPrestacionesInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutPrestacionesInput
    upsert?: ProfesionalUpsertWithoutPrestacionesInput
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutPrestacionesInput, ProfesionalUpdateWithoutPrestacionesInput>, ProfesionalUncheckedUpdateWithoutPrestacionesInput>
  }

  export type PrestacionUpdateOneRequiredWithoutProfesionalesNestedInput = {
    create?: XOR<PrestacionCreateWithoutProfesionalesInput, PrestacionUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: PrestacionCreateOrConnectWithoutProfesionalesInput
    upsert?: PrestacionUpsertWithoutProfesionalesInput
    connect?: PrestacionWhereUniqueInput
    update?: XOR<XOR<PrestacionUpdateToOneWithWhereWithoutProfesionalesInput, PrestacionUpdateWithoutProfesionalesInput>, PrestacionUncheckedUpdateWithoutProfesionalesInput>
  }

  export type ProfesionalCreateNestedOneWithoutObrasSocialesInput = {
    create?: XOR<ProfesionalCreateWithoutObrasSocialesInput, ProfesionalUncheckedCreateWithoutObrasSocialesInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutObrasSocialesInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type ObraSocialCreateNestedOneWithoutProfesionalesInput = {
    create?: XOR<ObraSocialCreateWithoutProfesionalesInput, ObraSocialUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: ObraSocialCreateOrConnectWithoutProfesionalesInput
    connect?: ObraSocialWhereUniqueInput
  }

  export type ProfesionalUpdateOneRequiredWithoutObrasSocialesNestedInput = {
    create?: XOR<ProfesionalCreateWithoutObrasSocialesInput, ProfesionalUncheckedCreateWithoutObrasSocialesInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutObrasSocialesInput
    upsert?: ProfesionalUpsertWithoutObrasSocialesInput
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutObrasSocialesInput, ProfesionalUpdateWithoutObrasSocialesInput>, ProfesionalUncheckedUpdateWithoutObrasSocialesInput>
  }

  export type ObraSocialUpdateOneRequiredWithoutProfesionalesNestedInput = {
    create?: XOR<ObraSocialCreateWithoutProfesionalesInput, ObraSocialUncheckedCreateWithoutProfesionalesInput>
    connectOrCreate?: ObraSocialCreateOrConnectWithoutProfesionalesInput
    upsert?: ObraSocialUpsertWithoutProfesionalesInput
    connect?: ObraSocialWhereUniqueInput
    update?: XOR<XOR<ObraSocialUpdateToOneWithWhereWithoutProfesionalesInput, ObraSocialUpdateWithoutProfesionalesInput>, ObraSocialUncheckedUpdateWithoutProfesionalesInput>
  }

  export type PacienteCreateNestedOneWithoutTurnosInput = {
    create?: XOR<PacienteCreateWithoutTurnosInput, PacienteUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutTurnosInput
    connect?: PacienteWhereUniqueInput
  }

  export type ProfesionalCreateNestedOneWithoutTurnosInput = {
    create?: XOR<ProfesionalCreateWithoutTurnosInput, ProfesionalUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutTurnosInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type DetalleTurnoCreateNestedManyWithoutTurnoInput = {
    create?: XOR<DetalleTurnoCreateWithoutTurnoInput, DetalleTurnoUncheckedCreateWithoutTurnoInput> | DetalleTurnoCreateWithoutTurnoInput[] | DetalleTurnoUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: DetalleTurnoCreateOrConnectWithoutTurnoInput | DetalleTurnoCreateOrConnectWithoutTurnoInput[]
    createMany?: DetalleTurnoCreateManyTurnoInputEnvelope
    connect?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
  }

  export type DetalleTurnoUncheckedCreateNestedManyWithoutTurnoInput = {
    create?: XOR<DetalleTurnoCreateWithoutTurnoInput, DetalleTurnoUncheckedCreateWithoutTurnoInput> | DetalleTurnoCreateWithoutTurnoInput[] | DetalleTurnoUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: DetalleTurnoCreateOrConnectWithoutTurnoInput | DetalleTurnoCreateOrConnectWithoutTurnoInput[]
    createMany?: DetalleTurnoCreateManyTurnoInputEnvelope
    connect?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
  }

  export type EnumEstadoTurnoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoTurno
  }

  export type PacienteUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<PacienteCreateWithoutTurnosInput, PacienteUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutTurnosInput
    upsert?: PacienteUpsertWithoutTurnosInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutTurnosInput, PacienteUpdateWithoutTurnosInput>, PacienteUncheckedUpdateWithoutTurnosInput>
  }

  export type ProfesionalUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<ProfesionalCreateWithoutTurnosInput, ProfesionalUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutTurnosInput
    upsert?: ProfesionalUpsertWithoutTurnosInput
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutTurnosInput, ProfesionalUpdateWithoutTurnosInput>, ProfesionalUncheckedUpdateWithoutTurnosInput>
  }

  export type DetalleTurnoUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<DetalleTurnoCreateWithoutTurnoInput, DetalleTurnoUncheckedCreateWithoutTurnoInput> | DetalleTurnoCreateWithoutTurnoInput[] | DetalleTurnoUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: DetalleTurnoCreateOrConnectWithoutTurnoInput | DetalleTurnoCreateOrConnectWithoutTurnoInput[]
    upsert?: DetalleTurnoUpsertWithWhereUniqueWithoutTurnoInput | DetalleTurnoUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: DetalleTurnoCreateManyTurnoInputEnvelope
    set?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
    disconnect?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
    delete?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
    connect?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
    update?: DetalleTurnoUpdateWithWhereUniqueWithoutTurnoInput | DetalleTurnoUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: DetalleTurnoUpdateManyWithWhereWithoutTurnoInput | DetalleTurnoUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: DetalleTurnoScalarWhereInput | DetalleTurnoScalarWhereInput[]
  }

  export type DetalleTurnoUncheckedUpdateManyWithoutTurnoNestedInput = {
    create?: XOR<DetalleTurnoCreateWithoutTurnoInput, DetalleTurnoUncheckedCreateWithoutTurnoInput> | DetalleTurnoCreateWithoutTurnoInput[] | DetalleTurnoUncheckedCreateWithoutTurnoInput[]
    connectOrCreate?: DetalleTurnoCreateOrConnectWithoutTurnoInput | DetalleTurnoCreateOrConnectWithoutTurnoInput[]
    upsert?: DetalleTurnoUpsertWithWhereUniqueWithoutTurnoInput | DetalleTurnoUpsertWithWhereUniqueWithoutTurnoInput[]
    createMany?: DetalleTurnoCreateManyTurnoInputEnvelope
    set?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
    disconnect?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
    delete?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
    connect?: DetalleTurnoWhereUniqueInput | DetalleTurnoWhereUniqueInput[]
    update?: DetalleTurnoUpdateWithWhereUniqueWithoutTurnoInput | DetalleTurnoUpdateWithWhereUniqueWithoutTurnoInput[]
    updateMany?: DetalleTurnoUpdateManyWithWhereWithoutTurnoInput | DetalleTurnoUpdateManyWithWhereWithoutTurnoInput[]
    deleteMany?: DetalleTurnoScalarWhereInput | DetalleTurnoScalarWhereInput[]
  }

  export type TurnoCreateNestedOneWithoutDetallesInput = {
    create?: XOR<TurnoCreateWithoutDetallesInput, TurnoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutDetallesInput
    connect?: TurnoWhereUniqueInput
  }

  export type TurnoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<TurnoCreateWithoutDetallesInput, TurnoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: TurnoCreateOrConnectWithoutDetallesInput
    upsert?: TurnoUpsertWithoutDetallesInput
    connect?: TurnoWhereUniqueInput
    update?: XOR<XOR<TurnoUpdateToOneWithWhereWithoutDetallesInput, TurnoUpdateWithoutDetallesInput>, TurnoUncheckedUpdateWithoutDetallesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGeneroFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroFilter<$PrismaModel> | $Enums.Genero
  }

  export type NestedEnumEstadoCivilFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCivil | EnumEstadoCivilFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCivilFilter<$PrismaModel> | $Enums.EstadoCivil
  }

  export type NestedEnumEstadoPacienteFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPaciente | EnumEstadoPacienteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPaciente[] | ListEnumEstadoPacienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPaciente[] | ListEnumEstadoPacienteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPacienteFilter<$PrismaModel> | $Enums.EstadoPaciente
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGeneroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genero | EnumGeneroFieldRefInput<$PrismaModel>
    in?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genero[] | ListEnumGeneroFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneroWithAggregatesFilter<$PrismaModel> | $Enums.Genero
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneroFilter<$PrismaModel>
    _max?: NestedEnumGeneroFilter<$PrismaModel>
  }

  export type NestedEnumEstadoCivilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCivil | EnumEstadoCivilFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCivil[] | ListEnumEstadoCivilFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCivilWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCivil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCivilFilter<$PrismaModel>
    _max?: NestedEnumEstadoCivilFilter<$PrismaModel>
  }

  export type NestedEnumEstadoPacienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoPaciente | EnumEstadoPacienteFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoPaciente[] | ListEnumEstadoPacienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoPaciente[] | ListEnumEstadoPacienteFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoPacienteWithAggregatesFilter<$PrismaModel> | $Enums.EstadoPaciente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoPacienteFilter<$PrismaModel>
    _max?: NestedEnumEstadoPacienteFilter<$PrismaModel>
  }

  export type NestedEnumEstadoTurnoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTurno | EnumEstadoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTurnoFilter<$PrismaModel> | $Enums.EstadoTurno
  }

  export type NestedEnumEstadoTurnoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoTurno | EnumEstadoTurnoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoTurno[] | ListEnumEstadoTurnoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoTurnoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoTurno
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoTurnoFilter<$PrismaModel>
    _max?: NestedEnumEstadoTurnoFilter<$PrismaModel>
  }

  export type ProfesionalCreateWithoutUsuarioInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    creadoPor?: UsuarioCreateNestedOneWithoutProfesionalesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutProfesionalesInput
    localidad: LocalidadCreateNestedOneWithoutProfesionalesInput
    obrasSociales?: ObraSocialXProfesionalCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutUsuarioInput = {
    id?: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutUsuarioInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput>
  }

  export type PacienteCreateWithoutUsuarioInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    creadoPor?: UsuarioCreateNestedOneWithoutPacientesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutPacientesInput
    localidad: LocalidadCreateNestedOneWithoutPacientesInput
    obraSocial: ObraSocialCreateNestedOneWithoutPacientesInput
    turnos?: TurnoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutUsuarioInput = {
    id?: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutUsuarioInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
  }

  export type PacienteCreateWithoutCreadoPorInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
    provincia: ProvinciaCreateNestedOneWithoutPacientesInput
    localidad: LocalidadCreateNestedOneWithoutPacientesInput
    obraSocial: ObraSocialCreateNestedOneWithoutPacientesInput
    turnos?: TurnoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutCreadoPorInput = {
    id?: number
    userId: number
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutCreadoPorInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutCreadoPorInput, PacienteUncheckedCreateWithoutCreadoPorInput>
  }

  export type PacienteCreateManyCreadoPorInputEnvelope = {
    data: PacienteCreateManyCreadoPorInput | PacienteCreateManyCreadoPorInput[]
    skipDuplicates?: boolean
  }

  export type ProfesionalCreateWithoutCreadoPorInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProfesionalInput
    provincia: ProvinciaCreateNestedOneWithoutProfesionalesInput
    localidad: LocalidadCreateNestedOneWithoutProfesionalesInput
    obrasSociales?: ObraSocialXProfesionalCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutCreadoPorInput = {
    id?: number
    userId: number
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutCreadoPorInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutCreadoPorInput, ProfesionalUncheckedCreateWithoutCreadoPorInput>
  }

  export type ProfesionalCreateManyCreadoPorInputEnvelope = {
    data: ProfesionalCreateManyCreadoPorInput | ProfesionalCreateManyCreadoPorInput[]
    skipDuplicates?: boolean
  }

  export type ProfesionalUpsertWithoutUsuarioInput = {
    update: XOR<ProfesionalUpdateWithoutUsuarioInput, ProfesionalUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProfesionalCreateWithoutUsuarioInput, ProfesionalUncheckedCreateWithoutUsuarioInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutUsuarioInput, ProfesionalUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProfesionalUpdateWithoutUsuarioInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: UsuarioUpdateOneWithoutProfesionalesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutProfesionalesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutProfesionalesNestedInput
    obrasSociales?: ObraSocialXProfesionalUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type PacienteUpsertWithoutUsuarioInput = {
    update: XOR<PacienteUpdateWithoutUsuarioInput, PacienteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutUsuarioInput, PacienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteUpdateWithoutUsuarioInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    creadoPor?: UsuarioUpdateOneWithoutPacientesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutPacientesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutPacientesNestedInput
    obraSocial?: ObraSocialUpdateOneRequiredWithoutPacientesNestedInput
    turnos?: TurnoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUpsertWithWhereUniqueWithoutCreadoPorInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutCreadoPorInput, PacienteUncheckedUpdateWithoutCreadoPorInput>
    create: XOR<PacienteCreateWithoutCreadoPorInput, PacienteUncheckedCreateWithoutCreadoPorInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutCreadoPorInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutCreadoPorInput, PacienteUncheckedUpdateWithoutCreadoPorInput>
  }

  export type PacienteUpdateManyWithWhereWithoutCreadoPorInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutCreadoPorInput>
  }

  export type PacienteScalarWhereInput = {
    AND?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    OR?: PacienteScalarWhereInput[]
    NOT?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    id?: IntFilter<"Paciente"> | number
    userId?: IntFilter<"Paciente"> | number
    creadoPorId?: IntNullableFilter<"Paciente"> | number | null
    numeroInterno?: StringFilter<"Paciente"> | string
    nombre?: StringFilter<"Paciente"> | string
    apellido?: StringFilter<"Paciente"> | string
    dni?: StringFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeFilter<"Paciente"> | Date | string
    genero?: EnumGeneroFilter<"Paciente"> | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFilter<"Paciente"> | $Enums.EstadoCivil
    pais?: StringFilter<"Paciente"> | string
    provinciaId?: IntFilter<"Paciente"> | number
    localidadId?: IntFilter<"Paciente"> | number
    barrio?: StringNullableFilter<"Paciente"> | string | null
    calle?: StringFilter<"Paciente"> | string
    numero?: StringFilter<"Paciente"> | string
    celular?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    obraSocialId?: IntFilter<"Paciente"> | number
    numeroSocio?: StringFilter<"Paciente"> | string
    plan?: StringFilter<"Paciente"> | string
    estado?: EnumEstadoPacienteFilter<"Paciente"> | $Enums.EstadoPaciente
    creadoEn?: DateTimeFilter<"Paciente"> | Date | string
    actualizadoEn?: DateTimeFilter<"Paciente"> | Date | string
  }

  export type ProfesionalUpsertWithWhereUniqueWithoutCreadoPorInput = {
    where: ProfesionalWhereUniqueInput
    update: XOR<ProfesionalUpdateWithoutCreadoPorInput, ProfesionalUncheckedUpdateWithoutCreadoPorInput>
    create: XOR<ProfesionalCreateWithoutCreadoPorInput, ProfesionalUncheckedCreateWithoutCreadoPorInput>
  }

  export type ProfesionalUpdateWithWhereUniqueWithoutCreadoPorInput = {
    where: ProfesionalWhereUniqueInput
    data: XOR<ProfesionalUpdateWithoutCreadoPorInput, ProfesionalUncheckedUpdateWithoutCreadoPorInput>
  }

  export type ProfesionalUpdateManyWithWhereWithoutCreadoPorInput = {
    where: ProfesionalScalarWhereInput
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyWithoutCreadoPorInput>
  }

  export type ProfesionalScalarWhereInput = {
    AND?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
    OR?: ProfesionalScalarWhereInput[]
    NOT?: ProfesionalScalarWhereInput | ProfesionalScalarWhereInput[]
    id?: IntFilter<"Profesional"> | number
    userId?: IntFilter<"Profesional"> | number
    creadoPorId?: IntNullableFilter<"Profesional"> | number | null
    numeroInterno?: StringFilter<"Profesional"> | string
    nombre?: StringFilter<"Profesional"> | string
    apellido?: StringFilter<"Profesional"> | string
    dni?: StringFilter<"Profesional"> | string
    fechaNacimiento?: DateTimeFilter<"Profesional"> | Date | string
    genero?: EnumGeneroFilter<"Profesional"> | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFilter<"Profesional"> | $Enums.EstadoCivil
    pais?: StringFilter<"Profesional"> | string
    provinciaId?: IntFilter<"Profesional"> | number
    localidadId?: IntFilter<"Profesional"> | number
    barrio?: StringNullableFilter<"Profesional"> | string | null
    calle?: StringFilter<"Profesional"> | string
    numero?: StringFilter<"Profesional"> | string
    celular?: StringFilter<"Profesional"> | string
    email?: StringFilter<"Profesional"> | string
    titulo?: StringFilter<"Profesional"> | string
    matricula?: StringFilter<"Profesional"> | string
    especialidad?: StringFilter<"Profesional"> | string
    universidad?: StringFilter<"Profesional"> | string
    fechaGraduacion?: DateTimeFilter<"Profesional"> | Date | string
    horarioTrabajo?: StringFilter<"Profesional"> | string
    creadoEn?: DateTimeFilter<"Profesional"> | Date | string
    actualizadoEn?: DateTimeFilter<"Profesional"> | Date | string
  }

  export type PacienteCreateWithoutProvinciaInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
    creadoPor?: UsuarioCreateNestedOneWithoutPacientesCreadosInput
    localidad: LocalidadCreateNestedOneWithoutPacientesInput
    obraSocial: ObraSocialCreateNestedOneWithoutPacientesInput
    turnos?: TurnoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutProvinciaInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutProvinciaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutProvinciaInput, PacienteUncheckedCreateWithoutProvinciaInput>
  }

  export type PacienteCreateManyProvinciaInputEnvelope = {
    data: PacienteCreateManyProvinciaInput | PacienteCreateManyProvinciaInput[]
    skipDuplicates?: boolean
  }

  export type ProfesionalCreateWithoutProvinciaInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProfesionalInput
    creadoPor?: UsuarioCreateNestedOneWithoutProfesionalesCreadosInput
    localidad: LocalidadCreateNestedOneWithoutProfesionalesInput
    obrasSociales?: ObraSocialXProfesionalCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutProvinciaInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutProvinciaInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutProvinciaInput, ProfesionalUncheckedCreateWithoutProvinciaInput>
  }

  export type ProfesionalCreateManyProvinciaInputEnvelope = {
    data: ProfesionalCreateManyProvinciaInput | ProfesionalCreateManyProvinciaInput[]
    skipDuplicates?: boolean
  }

  export type LocalidadCreateWithoutProvinciaInput = {
    nombre: string
    pacientes?: PacienteCreateNestedManyWithoutLocalidadInput
    profesionales?: ProfesionalCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadUncheckedCreateWithoutProvinciaInput = {
    id?: number
    nombre: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutLocalidadInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadCreateOrConnectWithoutProvinciaInput = {
    where: LocalidadWhereUniqueInput
    create: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput>
  }

  export type LocalidadCreateManyProvinciaInputEnvelope = {
    data: LocalidadCreateManyProvinciaInput | LocalidadCreateManyProvinciaInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithWhereUniqueWithoutProvinciaInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutProvinciaInput, PacienteUncheckedUpdateWithoutProvinciaInput>
    create: XOR<PacienteCreateWithoutProvinciaInput, PacienteUncheckedCreateWithoutProvinciaInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutProvinciaInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutProvinciaInput, PacienteUncheckedUpdateWithoutProvinciaInput>
  }

  export type PacienteUpdateManyWithWhereWithoutProvinciaInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutProvinciaInput>
  }

  export type ProfesionalUpsertWithWhereUniqueWithoutProvinciaInput = {
    where: ProfesionalWhereUniqueInput
    update: XOR<ProfesionalUpdateWithoutProvinciaInput, ProfesionalUncheckedUpdateWithoutProvinciaInput>
    create: XOR<ProfesionalCreateWithoutProvinciaInput, ProfesionalUncheckedCreateWithoutProvinciaInput>
  }

  export type ProfesionalUpdateWithWhereUniqueWithoutProvinciaInput = {
    where: ProfesionalWhereUniqueInput
    data: XOR<ProfesionalUpdateWithoutProvinciaInput, ProfesionalUncheckedUpdateWithoutProvinciaInput>
  }

  export type ProfesionalUpdateManyWithWhereWithoutProvinciaInput = {
    where: ProfesionalScalarWhereInput
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyWithoutProvinciaInput>
  }

  export type LocalidadUpsertWithWhereUniqueWithoutProvinciaInput = {
    where: LocalidadWhereUniqueInput
    update: XOR<LocalidadUpdateWithoutProvinciaInput, LocalidadUncheckedUpdateWithoutProvinciaInput>
    create: XOR<LocalidadCreateWithoutProvinciaInput, LocalidadUncheckedCreateWithoutProvinciaInput>
  }

  export type LocalidadUpdateWithWhereUniqueWithoutProvinciaInput = {
    where: LocalidadWhereUniqueInput
    data: XOR<LocalidadUpdateWithoutProvinciaInput, LocalidadUncheckedUpdateWithoutProvinciaInput>
  }

  export type LocalidadUpdateManyWithWhereWithoutProvinciaInput = {
    where: LocalidadScalarWhereInput
    data: XOR<LocalidadUpdateManyMutationInput, LocalidadUncheckedUpdateManyWithoutProvinciaInput>
  }

  export type LocalidadScalarWhereInput = {
    AND?: LocalidadScalarWhereInput | LocalidadScalarWhereInput[]
    OR?: LocalidadScalarWhereInput[]
    NOT?: LocalidadScalarWhereInput | LocalidadScalarWhereInput[]
    id?: IntFilter<"Localidad"> | number
    nombre?: StringFilter<"Localidad"> | string
    provinciaId?: IntFilter<"Localidad"> | number
  }

  export type ProvinciaCreateWithoutLocalidadesInput = {
    nombre: string
    pacientes?: PacienteCreateNestedManyWithoutProvinciaInput
    profesionales?: ProfesionalCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaUncheckedCreateWithoutLocalidadesInput = {
    id?: number
    nombre: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutProvinciaInput
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaCreateOrConnectWithoutLocalidadesInput = {
    where: ProvinciaWhereUniqueInput
    create: XOR<ProvinciaCreateWithoutLocalidadesInput, ProvinciaUncheckedCreateWithoutLocalidadesInput>
  }

  export type PacienteCreateWithoutLocalidadInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
    creadoPor?: UsuarioCreateNestedOneWithoutPacientesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutPacientesInput
    obraSocial: ObraSocialCreateNestedOneWithoutPacientesInput
    turnos?: TurnoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutLocalidadInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutLocalidadInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutLocalidadInput, PacienteUncheckedCreateWithoutLocalidadInput>
  }

  export type PacienteCreateManyLocalidadInputEnvelope = {
    data: PacienteCreateManyLocalidadInput | PacienteCreateManyLocalidadInput[]
    skipDuplicates?: boolean
  }

  export type ProfesionalCreateWithoutLocalidadInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProfesionalInput
    creadoPor?: UsuarioCreateNestedOneWithoutProfesionalesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutProfesionalesInput
    obrasSociales?: ObraSocialXProfesionalCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutLocalidadInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutLocalidadInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutLocalidadInput, ProfesionalUncheckedCreateWithoutLocalidadInput>
  }

  export type ProfesionalCreateManyLocalidadInputEnvelope = {
    data: ProfesionalCreateManyLocalidadInput | ProfesionalCreateManyLocalidadInput[]
    skipDuplicates?: boolean
  }

  export type ProvinciaUpsertWithoutLocalidadesInput = {
    update: XOR<ProvinciaUpdateWithoutLocalidadesInput, ProvinciaUncheckedUpdateWithoutLocalidadesInput>
    create: XOR<ProvinciaCreateWithoutLocalidadesInput, ProvinciaUncheckedCreateWithoutLocalidadesInput>
    where?: ProvinciaWhereInput
  }

  export type ProvinciaUpdateToOneWithWhereWithoutLocalidadesInput = {
    where?: ProvinciaWhereInput
    data: XOR<ProvinciaUpdateWithoutLocalidadesInput, ProvinciaUncheckedUpdateWithoutLocalidadesInput>
  }

  export type ProvinciaUpdateWithoutLocalidadesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutProvinciaNestedInput
    profesionales?: ProfesionalUpdateManyWithoutProvinciaNestedInput
  }

  export type ProvinciaUncheckedUpdateWithoutLocalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutProvinciaNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutProvinciaNestedInput
  }

  export type PacienteUpsertWithWhereUniqueWithoutLocalidadInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutLocalidadInput, PacienteUncheckedUpdateWithoutLocalidadInput>
    create: XOR<PacienteCreateWithoutLocalidadInput, PacienteUncheckedCreateWithoutLocalidadInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutLocalidadInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutLocalidadInput, PacienteUncheckedUpdateWithoutLocalidadInput>
  }

  export type PacienteUpdateManyWithWhereWithoutLocalidadInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutLocalidadInput>
  }

  export type ProfesionalUpsertWithWhereUniqueWithoutLocalidadInput = {
    where: ProfesionalWhereUniqueInput
    update: XOR<ProfesionalUpdateWithoutLocalidadInput, ProfesionalUncheckedUpdateWithoutLocalidadInput>
    create: XOR<ProfesionalCreateWithoutLocalidadInput, ProfesionalUncheckedCreateWithoutLocalidadInput>
  }

  export type ProfesionalUpdateWithWhereUniqueWithoutLocalidadInput = {
    where: ProfesionalWhereUniqueInput
    data: XOR<ProfesionalUpdateWithoutLocalidadInput, ProfesionalUncheckedUpdateWithoutLocalidadInput>
  }

  export type ProfesionalUpdateManyWithWhereWithoutLocalidadInput = {
    where: ProfesionalScalarWhereInput
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyWithoutLocalidadInput>
  }

  export type PacienteCreateWithoutObraSocialInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
    creadoPor?: UsuarioCreateNestedOneWithoutPacientesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutPacientesInput
    localidad: LocalidadCreateNestedOneWithoutPacientesInput
    turnos?: TurnoCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutObraSocialInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    turnos?: TurnoUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutObraSocialInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutObraSocialInput, PacienteUncheckedCreateWithoutObraSocialInput>
  }

  export type PacienteCreateManyObraSocialInputEnvelope = {
    data: PacienteCreateManyObraSocialInput | PacienteCreateManyObraSocialInput[]
    skipDuplicates?: boolean
  }

  export type ObraSocialXProfesionalCreateWithoutObraSocialInput = {
    profesional: ProfesionalCreateNestedOneWithoutObrasSocialesInput
  }

  export type ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput = {
    id?: number
    profesionalId: number
  }

  export type ObraSocialXProfesionalCreateOrConnectWithoutObraSocialInput = {
    where: ObraSocialXProfesionalWhereUniqueInput
    create: XOR<ObraSocialXProfesionalCreateWithoutObraSocialInput, ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput>
  }

  export type ObraSocialXProfesionalCreateManyObraSocialInputEnvelope = {
    data: ObraSocialXProfesionalCreateManyObraSocialInput | ObraSocialXProfesionalCreateManyObraSocialInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithWhereUniqueWithoutObraSocialInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutObraSocialInput, PacienteUncheckedUpdateWithoutObraSocialInput>
    create: XOR<PacienteCreateWithoutObraSocialInput, PacienteUncheckedCreateWithoutObraSocialInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutObraSocialInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutObraSocialInput, PacienteUncheckedUpdateWithoutObraSocialInput>
  }

  export type PacienteUpdateManyWithWhereWithoutObraSocialInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutObraSocialInput>
  }

  export type ObraSocialXProfesionalUpsertWithWhereUniqueWithoutObraSocialInput = {
    where: ObraSocialXProfesionalWhereUniqueInput
    update: XOR<ObraSocialXProfesionalUpdateWithoutObraSocialInput, ObraSocialXProfesionalUncheckedUpdateWithoutObraSocialInput>
    create: XOR<ObraSocialXProfesionalCreateWithoutObraSocialInput, ObraSocialXProfesionalUncheckedCreateWithoutObraSocialInput>
  }

  export type ObraSocialXProfesionalUpdateWithWhereUniqueWithoutObraSocialInput = {
    where: ObraSocialXProfesionalWhereUniqueInput
    data: XOR<ObraSocialXProfesionalUpdateWithoutObraSocialInput, ObraSocialXProfesionalUncheckedUpdateWithoutObraSocialInput>
  }

  export type ObraSocialXProfesionalUpdateManyWithWhereWithoutObraSocialInput = {
    where: ObraSocialXProfesionalScalarWhereInput
    data: XOR<ObraSocialXProfesionalUpdateManyMutationInput, ObraSocialXProfesionalUncheckedUpdateManyWithoutObraSocialInput>
  }

  export type ObraSocialXProfesionalScalarWhereInput = {
    AND?: ObraSocialXProfesionalScalarWhereInput | ObraSocialXProfesionalScalarWhereInput[]
    OR?: ObraSocialXProfesionalScalarWhereInput[]
    NOT?: ObraSocialXProfesionalScalarWhereInput | ObraSocialXProfesionalScalarWhereInput[]
    id?: IntFilter<"ObraSocialXProfesional"> | number
    profesionalId?: IntFilter<"ObraSocialXProfesional"> | number
    obraSocialId?: IntFilter<"ObraSocialXProfesional"> | number
  }

  export type PrestacionXProfesionalCreateWithoutPrestacionInput = {
    profesional: ProfesionalCreateNestedOneWithoutPrestacionesInput
  }

  export type PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput = {
    id?: number
    profesionalId: number
  }

  export type PrestacionXProfesionalCreateOrConnectWithoutPrestacionInput = {
    where: PrestacionXProfesionalWhereUniqueInput
    create: XOR<PrestacionXProfesionalCreateWithoutPrestacionInput, PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput>
  }

  export type PrestacionXProfesionalCreateManyPrestacionInputEnvelope = {
    data: PrestacionXProfesionalCreateManyPrestacionInput | PrestacionXProfesionalCreateManyPrestacionInput[]
    skipDuplicates?: boolean
  }

  export type PrestacionXProfesionalUpsertWithWhereUniqueWithoutPrestacionInput = {
    where: PrestacionXProfesionalWhereUniqueInput
    update: XOR<PrestacionXProfesionalUpdateWithoutPrestacionInput, PrestacionXProfesionalUncheckedUpdateWithoutPrestacionInput>
    create: XOR<PrestacionXProfesionalCreateWithoutPrestacionInput, PrestacionXProfesionalUncheckedCreateWithoutPrestacionInput>
  }

  export type PrestacionXProfesionalUpdateWithWhereUniqueWithoutPrestacionInput = {
    where: PrestacionXProfesionalWhereUniqueInput
    data: XOR<PrestacionXProfesionalUpdateWithoutPrestacionInput, PrestacionXProfesionalUncheckedUpdateWithoutPrestacionInput>
  }

  export type PrestacionXProfesionalUpdateManyWithWhereWithoutPrestacionInput = {
    where: PrestacionXProfesionalScalarWhereInput
    data: XOR<PrestacionXProfesionalUpdateManyMutationInput, PrestacionXProfesionalUncheckedUpdateManyWithoutPrestacionInput>
  }

  export type PrestacionXProfesionalScalarWhereInput = {
    AND?: PrestacionXProfesionalScalarWhereInput | PrestacionXProfesionalScalarWhereInput[]
    OR?: PrestacionXProfesionalScalarWhereInput[]
    NOT?: PrestacionXProfesionalScalarWhereInput | PrestacionXProfesionalScalarWhereInput[]
    id?: IntFilter<"PrestacionXProfesional"> | number
    profesionalId?: IntFilter<"PrestacionXProfesional"> | number
    prestacionId?: IntFilter<"PrestacionXProfesional"> | number
  }

  export type UsuarioCreateWithoutPacienteInput = {
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    profesional?: ProfesionalCreateNestedOneWithoutUsuarioInput
    pacientesCreados?: PacienteCreateNestedManyWithoutCreadoPorInput
    profesionalesCreados?: ProfesionalCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutPacienteInput = {
    id?: number
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    profesional?: ProfesionalUncheckedCreateNestedOneWithoutUsuarioInput
    pacientesCreados?: PacienteUncheckedCreateNestedManyWithoutCreadoPorInput
    profesionalesCreados?: ProfesionalUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutPacienteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
  }

  export type UsuarioCreateWithoutPacientesCreadosInput = {
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    profesional?: ProfesionalCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteCreateNestedOneWithoutUsuarioInput
    profesionalesCreados?: ProfesionalCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutPacientesCreadosInput = {
    id?: number
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    profesional?: ProfesionalUncheckedCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUsuarioInput
    profesionalesCreados?: ProfesionalUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutPacientesCreadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPacientesCreadosInput, UsuarioUncheckedCreateWithoutPacientesCreadosInput>
  }

  export type ProvinciaCreateWithoutPacientesInput = {
    nombre: string
    profesionales?: ProfesionalCreateNestedManyWithoutProvinciaInput
    localidades?: LocalidadCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaUncheckedCreateWithoutPacientesInput = {
    id?: number
    nombre: string
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutProvinciaInput
    localidades?: LocalidadUncheckedCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaCreateOrConnectWithoutPacientesInput = {
    where: ProvinciaWhereUniqueInput
    create: XOR<ProvinciaCreateWithoutPacientesInput, ProvinciaUncheckedCreateWithoutPacientesInput>
  }

  export type LocalidadCreateWithoutPacientesInput = {
    nombre: string
    provincia: ProvinciaCreateNestedOneWithoutLocalidadesInput
    profesionales?: ProfesionalCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadUncheckedCreateWithoutPacientesInput = {
    id?: number
    nombre: string
    provinciaId: number
    profesionales?: ProfesionalUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadCreateOrConnectWithoutPacientesInput = {
    where: LocalidadWhereUniqueInput
    create: XOR<LocalidadCreateWithoutPacientesInput, LocalidadUncheckedCreateWithoutPacientesInput>
  }

  export type ObraSocialCreateWithoutPacientesInput = {
    nombre: string
    profesionales?: ObraSocialXProfesionalCreateNestedManyWithoutObraSocialInput
  }

  export type ObraSocialUncheckedCreateWithoutPacientesInput = {
    id?: number
    nombre: string
    profesionales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutObraSocialInput
  }

  export type ObraSocialCreateOrConnectWithoutPacientesInput = {
    where: ObraSocialWhereUniqueInput
    create: XOR<ObraSocialCreateWithoutPacientesInput, ObraSocialUncheckedCreateWithoutPacientesInput>
  }

  export type TurnoCreateWithoutPacienteInput = {
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
    profesional: ProfesionalCreateNestedOneWithoutTurnosInput
    detalles?: DetalleTurnoCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutPacienteInput = {
    id?: number
    profesionalId: number
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
    detalles?: DetalleTurnoUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutPacienteInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutPacienteInput, TurnoUncheckedCreateWithoutPacienteInput>
  }

  export type TurnoCreateManyPacienteInputEnvelope = {
    data: TurnoCreateManyPacienteInput | TurnoCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPacienteInput = {
    update: XOR<UsuarioUpdateWithoutPacienteInput, UsuarioUncheckedUpdateWithoutPacienteInput>
    create: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPacienteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPacienteInput, UsuarioUncheckedUpdateWithoutPacienteInput>
  }

  export type UsuarioUpdateWithoutPacienteInput = {
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUpdateOneWithoutUsuarioNestedInput
    pacientesCreados?: PacienteUpdateManyWithoutCreadoPorNestedInput
    profesionalesCreados?: ProfesionalUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUncheckedUpdateOneWithoutUsuarioNestedInput
    pacientesCreados?: PacienteUncheckedUpdateManyWithoutCreadoPorNestedInput
    profesionalesCreados?: ProfesionalUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUpsertWithoutPacientesCreadosInput = {
    update: XOR<UsuarioUpdateWithoutPacientesCreadosInput, UsuarioUncheckedUpdateWithoutPacientesCreadosInput>
    create: XOR<UsuarioCreateWithoutPacientesCreadosInput, UsuarioUncheckedCreateWithoutPacientesCreadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPacientesCreadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPacientesCreadosInput, UsuarioUncheckedUpdateWithoutPacientesCreadosInput>
  }

  export type UsuarioUpdateWithoutPacientesCreadosInput = {
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUpdateOneWithoutUsuarioNestedInput
    profesionalesCreados?: ProfesionalUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPacientesCreadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUncheckedUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUsuarioNestedInput
    profesionalesCreados?: ProfesionalUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type ProvinciaUpsertWithoutPacientesInput = {
    update: XOR<ProvinciaUpdateWithoutPacientesInput, ProvinciaUncheckedUpdateWithoutPacientesInput>
    create: XOR<ProvinciaCreateWithoutPacientesInput, ProvinciaUncheckedCreateWithoutPacientesInput>
    where?: ProvinciaWhereInput
  }

  export type ProvinciaUpdateToOneWithWhereWithoutPacientesInput = {
    where?: ProvinciaWhereInput
    data: XOR<ProvinciaUpdateWithoutPacientesInput, ProvinciaUncheckedUpdateWithoutPacientesInput>
  }

  export type ProvinciaUpdateWithoutPacientesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    profesionales?: ProfesionalUpdateManyWithoutProvinciaNestedInput
    localidades?: LocalidadUpdateManyWithoutProvinciaNestedInput
  }

  export type ProvinciaUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    profesionales?: ProfesionalUncheckedUpdateManyWithoutProvinciaNestedInput
    localidades?: LocalidadUncheckedUpdateManyWithoutProvinciaNestedInput
  }

  export type LocalidadUpsertWithoutPacientesInput = {
    update: XOR<LocalidadUpdateWithoutPacientesInput, LocalidadUncheckedUpdateWithoutPacientesInput>
    create: XOR<LocalidadCreateWithoutPacientesInput, LocalidadUncheckedCreateWithoutPacientesInput>
    where?: LocalidadWhereInput
  }

  export type LocalidadUpdateToOneWithWhereWithoutPacientesInput = {
    where?: LocalidadWhereInput
    data: XOR<LocalidadUpdateWithoutPacientesInput, LocalidadUncheckedUpdateWithoutPacientesInput>
  }

  export type LocalidadUpdateWithoutPacientesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    provincia?: ProvinciaUpdateOneRequiredWithoutLocalidadesNestedInput
    profesionales?: ProfesionalUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    profesionales?: ProfesionalUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type ObraSocialUpsertWithoutPacientesInput = {
    update: XOR<ObraSocialUpdateWithoutPacientesInput, ObraSocialUncheckedUpdateWithoutPacientesInput>
    create: XOR<ObraSocialCreateWithoutPacientesInput, ObraSocialUncheckedCreateWithoutPacientesInput>
    where?: ObraSocialWhereInput
  }

  export type ObraSocialUpdateToOneWithWhereWithoutPacientesInput = {
    where?: ObraSocialWhereInput
    data: XOR<ObraSocialUpdateWithoutPacientesInput, ObraSocialUncheckedUpdateWithoutPacientesInput>
  }

  export type ObraSocialUpdateWithoutPacientesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    profesionales?: ObraSocialXProfesionalUpdateManyWithoutObraSocialNestedInput
  }

  export type ObraSocialUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    profesionales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutObraSocialNestedInput
  }

  export type TurnoUpsertWithWhereUniqueWithoutPacienteInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutPacienteInput, TurnoUncheckedUpdateWithoutPacienteInput>
    create: XOR<TurnoCreateWithoutPacienteInput, TurnoUncheckedCreateWithoutPacienteInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutPacienteInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutPacienteInput, TurnoUncheckedUpdateWithoutPacienteInput>
  }

  export type TurnoUpdateManyWithWhereWithoutPacienteInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutPacienteInput>
  }

  export type TurnoScalarWhereInput = {
    AND?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
    OR?: TurnoScalarWhereInput[]
    NOT?: TurnoScalarWhereInput | TurnoScalarWhereInput[]
    id?: IntFilter<"Turno"> | number
    pacienteId?: IntFilter<"Turno"> | number
    profesionalId?: IntFilter<"Turno"> | number
    fecha?: DateTimeFilter<"Turno"> | Date | string
    hora?: StringFilter<"Turno"> | string
    estado?: EnumEstadoTurnoFilter<"Turno"> | $Enums.EstadoTurno
    creadoEn?: DateTimeFilter<"Turno"> | Date | string
  }

  export type UsuarioCreateWithoutProfesionalInput = {
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    paciente?: PacienteCreateNestedOneWithoutUsuarioInput
    pacientesCreados?: PacienteCreateNestedManyWithoutCreadoPorInput
    profesionalesCreados?: ProfesionalCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutProfesionalInput = {
    id?: number
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    paciente?: PacienteUncheckedCreateNestedOneWithoutUsuarioInput
    pacientesCreados?: PacienteUncheckedCreateNestedManyWithoutCreadoPorInput
    profesionalesCreados?: ProfesionalUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutProfesionalInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfesionalInput, UsuarioUncheckedCreateWithoutProfesionalInput>
  }

  export type UsuarioCreateWithoutProfesionalesCreadosInput = {
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    profesional?: ProfesionalCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteCreateNestedOneWithoutUsuarioInput
    pacientesCreados?: PacienteCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutProfesionalesCreadosInput = {
    id?: number
    username: string
    contraseña: string
    rol: $Enums.Rol
    email: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    profesional?: ProfesionalUncheckedCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUsuarioInput
    pacientesCreados?: PacienteUncheckedCreateNestedManyWithoutCreadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutProfesionalesCreadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProfesionalesCreadosInput, UsuarioUncheckedCreateWithoutProfesionalesCreadosInput>
  }

  export type ProvinciaCreateWithoutProfesionalesInput = {
    nombre: string
    pacientes?: PacienteCreateNestedManyWithoutProvinciaInput
    localidades?: LocalidadCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaUncheckedCreateWithoutProfesionalesInput = {
    id?: number
    nombre: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutProvinciaInput
    localidades?: LocalidadUncheckedCreateNestedManyWithoutProvinciaInput
  }

  export type ProvinciaCreateOrConnectWithoutProfesionalesInput = {
    where: ProvinciaWhereUniqueInput
    create: XOR<ProvinciaCreateWithoutProfesionalesInput, ProvinciaUncheckedCreateWithoutProfesionalesInput>
  }

  export type LocalidadCreateWithoutProfesionalesInput = {
    nombre: string
    provincia: ProvinciaCreateNestedOneWithoutLocalidadesInput
    pacientes?: PacienteCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadUncheckedCreateWithoutProfesionalesInput = {
    id?: number
    nombre: string
    provinciaId: number
    pacientes?: PacienteUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LocalidadCreateOrConnectWithoutProfesionalesInput = {
    where: LocalidadWhereUniqueInput
    create: XOR<LocalidadCreateWithoutProfesionalesInput, LocalidadUncheckedCreateWithoutProfesionalesInput>
  }

  export type ObraSocialXProfesionalCreateWithoutProfesionalInput = {
    obraSocial: ObraSocialCreateNestedOneWithoutProfesionalesInput
  }

  export type ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput = {
    id?: number
    obraSocialId: number
  }

  export type ObraSocialXProfesionalCreateOrConnectWithoutProfesionalInput = {
    where: ObraSocialXProfesionalWhereUniqueInput
    create: XOR<ObraSocialXProfesionalCreateWithoutProfesionalInput, ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput>
  }

  export type ObraSocialXProfesionalCreateManyProfesionalInputEnvelope = {
    data: ObraSocialXProfesionalCreateManyProfesionalInput | ObraSocialXProfesionalCreateManyProfesionalInput[]
    skipDuplicates?: boolean
  }

  export type PrestacionXProfesionalCreateWithoutProfesionalInput = {
    prestacion: PrestacionCreateNestedOneWithoutProfesionalesInput
  }

  export type PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput = {
    id?: number
    prestacionId: number
  }

  export type PrestacionXProfesionalCreateOrConnectWithoutProfesionalInput = {
    where: PrestacionXProfesionalWhereUniqueInput
    create: XOR<PrestacionXProfesionalCreateWithoutProfesionalInput, PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput>
  }

  export type PrestacionXProfesionalCreateManyProfesionalInputEnvelope = {
    data: PrestacionXProfesionalCreateManyProfesionalInput | PrestacionXProfesionalCreateManyProfesionalInput[]
    skipDuplicates?: boolean
  }

  export type TurnoCreateWithoutProfesionalInput = {
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
    paciente: PacienteCreateNestedOneWithoutTurnosInput
    detalles?: DetalleTurnoCreateNestedManyWithoutTurnoInput
  }

  export type TurnoUncheckedCreateWithoutProfesionalInput = {
    id?: number
    pacienteId: number
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
    detalles?: DetalleTurnoUncheckedCreateNestedManyWithoutTurnoInput
  }

  export type TurnoCreateOrConnectWithoutProfesionalInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutProfesionalInput, TurnoUncheckedCreateWithoutProfesionalInput>
  }

  export type TurnoCreateManyProfesionalInputEnvelope = {
    data: TurnoCreateManyProfesionalInput | TurnoCreateManyProfesionalInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutProfesionalInput = {
    update: XOR<UsuarioUpdateWithoutProfesionalInput, UsuarioUncheckedUpdateWithoutProfesionalInput>
    create: XOR<UsuarioCreateWithoutProfesionalInput, UsuarioUncheckedCreateWithoutProfesionalInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProfesionalInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProfesionalInput, UsuarioUncheckedUpdateWithoutProfesionalInput>
  }

  export type UsuarioUpdateWithoutProfesionalInput = {
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneWithoutUsuarioNestedInput
    pacientesCreados?: PacienteUpdateManyWithoutCreadoPorNestedInput
    profesionalesCreados?: ProfesionalUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUncheckedUpdateOneWithoutUsuarioNestedInput
    pacientesCreados?: PacienteUncheckedUpdateManyWithoutCreadoPorNestedInput
    profesionalesCreados?: ProfesionalUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUpsertWithoutProfesionalesCreadosInput = {
    update: XOR<UsuarioUpdateWithoutProfesionalesCreadosInput, UsuarioUncheckedUpdateWithoutProfesionalesCreadosInput>
    create: XOR<UsuarioCreateWithoutProfesionalesCreadosInput, UsuarioUncheckedCreateWithoutProfesionalesCreadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProfesionalesCreadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProfesionalesCreadosInput, UsuarioUncheckedUpdateWithoutProfesionalesCreadosInput>
  }

  export type UsuarioUpdateWithoutProfesionalesCreadosInput = {
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUpdateOneWithoutUsuarioNestedInput
    pacientesCreados?: PacienteUpdateManyWithoutCreadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProfesionalesCreadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    email?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUncheckedUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUsuarioNestedInput
    pacientesCreados?: PacienteUncheckedUpdateManyWithoutCreadoPorNestedInput
  }

  export type ProvinciaUpsertWithoutProfesionalesInput = {
    update: XOR<ProvinciaUpdateWithoutProfesionalesInput, ProvinciaUncheckedUpdateWithoutProfesionalesInput>
    create: XOR<ProvinciaCreateWithoutProfesionalesInput, ProvinciaUncheckedCreateWithoutProfesionalesInput>
    where?: ProvinciaWhereInput
  }

  export type ProvinciaUpdateToOneWithWhereWithoutProfesionalesInput = {
    where?: ProvinciaWhereInput
    data: XOR<ProvinciaUpdateWithoutProfesionalesInput, ProvinciaUncheckedUpdateWithoutProfesionalesInput>
  }

  export type ProvinciaUpdateWithoutProfesionalesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutProvinciaNestedInput
    localidades?: LocalidadUpdateManyWithoutProvinciaNestedInput
  }

  export type ProvinciaUncheckedUpdateWithoutProfesionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutProvinciaNestedInput
    localidades?: LocalidadUncheckedUpdateManyWithoutProvinciaNestedInput
  }

  export type LocalidadUpsertWithoutProfesionalesInput = {
    update: XOR<LocalidadUpdateWithoutProfesionalesInput, LocalidadUncheckedUpdateWithoutProfesionalesInput>
    create: XOR<LocalidadCreateWithoutProfesionalesInput, LocalidadUncheckedCreateWithoutProfesionalesInput>
    where?: LocalidadWhereInput
  }

  export type LocalidadUpdateToOneWithWhereWithoutProfesionalesInput = {
    where?: LocalidadWhereInput
    data: XOR<LocalidadUpdateWithoutProfesionalesInput, LocalidadUncheckedUpdateWithoutProfesionalesInput>
  }

  export type LocalidadUpdateWithoutProfesionalesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    provincia?: ProvinciaUpdateOneRequiredWithoutLocalidadesNestedInput
    pacientes?: PacienteUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadUncheckedUpdateWithoutProfesionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    pacientes?: PacienteUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type ObraSocialXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: ObraSocialXProfesionalWhereUniqueInput
    update: XOR<ObraSocialXProfesionalUpdateWithoutProfesionalInput, ObraSocialXProfesionalUncheckedUpdateWithoutProfesionalInput>
    create: XOR<ObraSocialXProfesionalCreateWithoutProfesionalInput, ObraSocialXProfesionalUncheckedCreateWithoutProfesionalInput>
  }

  export type ObraSocialXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: ObraSocialXProfesionalWhereUniqueInput
    data: XOR<ObraSocialXProfesionalUpdateWithoutProfesionalInput, ObraSocialXProfesionalUncheckedUpdateWithoutProfesionalInput>
  }

  export type ObraSocialXProfesionalUpdateManyWithWhereWithoutProfesionalInput = {
    where: ObraSocialXProfesionalScalarWhereInput
    data: XOR<ObraSocialXProfesionalUpdateManyMutationInput, ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalInput>
  }

  export type PrestacionXProfesionalUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: PrestacionXProfesionalWhereUniqueInput
    update: XOR<PrestacionXProfesionalUpdateWithoutProfesionalInput, PrestacionXProfesionalUncheckedUpdateWithoutProfesionalInput>
    create: XOR<PrestacionXProfesionalCreateWithoutProfesionalInput, PrestacionXProfesionalUncheckedCreateWithoutProfesionalInput>
  }

  export type PrestacionXProfesionalUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: PrestacionXProfesionalWhereUniqueInput
    data: XOR<PrestacionXProfesionalUpdateWithoutProfesionalInput, PrestacionXProfesionalUncheckedUpdateWithoutProfesionalInput>
  }

  export type PrestacionXProfesionalUpdateManyWithWhereWithoutProfesionalInput = {
    where: PrestacionXProfesionalScalarWhereInput
    data: XOR<PrestacionXProfesionalUpdateManyMutationInput, PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalInput>
  }

  export type TurnoUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: TurnoWhereUniqueInput
    update: XOR<TurnoUpdateWithoutProfesionalInput, TurnoUncheckedUpdateWithoutProfesionalInput>
    create: XOR<TurnoCreateWithoutProfesionalInput, TurnoUncheckedCreateWithoutProfesionalInput>
  }

  export type TurnoUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: TurnoWhereUniqueInput
    data: XOR<TurnoUpdateWithoutProfesionalInput, TurnoUncheckedUpdateWithoutProfesionalInput>
  }

  export type TurnoUpdateManyWithWhereWithoutProfesionalInput = {
    where: TurnoScalarWhereInput
    data: XOR<TurnoUpdateManyMutationInput, TurnoUncheckedUpdateManyWithoutProfesionalInput>
  }

  export type ProfesionalCreateWithoutPrestacionesInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProfesionalInput
    creadoPor?: UsuarioCreateNestedOneWithoutProfesionalesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutProfesionalesInput
    localidad: LocalidadCreateNestedOneWithoutProfesionalesInput
    obrasSociales?: ObraSocialXProfesionalCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutPrestacionesInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutPrestacionesInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutPrestacionesInput, ProfesionalUncheckedCreateWithoutPrestacionesInput>
  }

  export type PrestacionCreateWithoutProfesionalesInput = {
    nombre: string
    descripcion?: string | null
  }

  export type PrestacionUncheckedCreateWithoutProfesionalesInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type PrestacionCreateOrConnectWithoutProfesionalesInput = {
    where: PrestacionWhereUniqueInput
    create: XOR<PrestacionCreateWithoutProfesionalesInput, PrestacionUncheckedCreateWithoutProfesionalesInput>
  }

  export type ProfesionalUpsertWithoutPrestacionesInput = {
    update: XOR<ProfesionalUpdateWithoutPrestacionesInput, ProfesionalUncheckedUpdateWithoutPrestacionesInput>
    create: XOR<ProfesionalCreateWithoutPrestacionesInput, ProfesionalUncheckedCreateWithoutPrestacionesInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutPrestacionesInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutPrestacionesInput, ProfesionalUncheckedUpdateWithoutPrestacionesInput>
  }

  export type ProfesionalUpdateWithoutPrestacionesInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalNestedInput
    creadoPor?: UsuarioUpdateOneWithoutProfesionalesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutProfesionalesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutProfesionalesNestedInput
    obrasSociales?: ObraSocialXProfesionalUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutPrestacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type PrestacionUpsertWithoutProfesionalesInput = {
    update: XOR<PrestacionUpdateWithoutProfesionalesInput, PrestacionUncheckedUpdateWithoutProfesionalesInput>
    create: XOR<PrestacionCreateWithoutProfesionalesInput, PrestacionUncheckedCreateWithoutProfesionalesInput>
    where?: PrestacionWhereInput
  }

  export type PrestacionUpdateToOneWithWhereWithoutProfesionalesInput = {
    where?: PrestacionWhereInput
    data: XOR<PrestacionUpdateWithoutProfesionalesInput, PrestacionUncheckedUpdateWithoutProfesionalesInput>
  }

  export type PrestacionUpdateWithoutProfesionalesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrestacionUncheckedUpdateWithoutProfesionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfesionalCreateWithoutObrasSocialesInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProfesionalInput
    creadoPor?: UsuarioCreateNestedOneWithoutProfesionalesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutProfesionalesInput
    localidad: LocalidadCreateNestedOneWithoutProfesionalesInput
    prestaciones?: PrestacionXProfesionalCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutObrasSocialesInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    prestaciones?: PrestacionXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    turnos?: TurnoUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutObrasSocialesInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutObrasSocialesInput, ProfesionalUncheckedCreateWithoutObrasSocialesInput>
  }

  export type ObraSocialCreateWithoutProfesionalesInput = {
    nombre: string
    pacientes?: PacienteCreateNestedManyWithoutObraSocialInput
  }

  export type ObraSocialUncheckedCreateWithoutProfesionalesInput = {
    id?: number
    nombre: string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutObraSocialInput
  }

  export type ObraSocialCreateOrConnectWithoutProfesionalesInput = {
    where: ObraSocialWhereUniqueInput
    create: XOR<ObraSocialCreateWithoutProfesionalesInput, ObraSocialUncheckedCreateWithoutProfesionalesInput>
  }

  export type ProfesionalUpsertWithoutObrasSocialesInput = {
    update: XOR<ProfesionalUpdateWithoutObrasSocialesInput, ProfesionalUncheckedUpdateWithoutObrasSocialesInput>
    create: XOR<ProfesionalCreateWithoutObrasSocialesInput, ProfesionalUncheckedCreateWithoutObrasSocialesInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutObrasSocialesInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutObrasSocialesInput, ProfesionalUncheckedUpdateWithoutObrasSocialesInput>
  }

  export type ProfesionalUpdateWithoutObrasSocialesInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalNestedInput
    creadoPor?: UsuarioUpdateOneWithoutProfesionalesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutProfesionalesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutProfesionalesNestedInput
    prestaciones?: PrestacionXProfesionalUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutObrasSocialesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    prestaciones?: PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ObraSocialUpsertWithoutProfesionalesInput = {
    update: XOR<ObraSocialUpdateWithoutProfesionalesInput, ObraSocialUncheckedUpdateWithoutProfesionalesInput>
    create: XOR<ObraSocialCreateWithoutProfesionalesInput, ObraSocialUncheckedCreateWithoutProfesionalesInput>
    where?: ObraSocialWhereInput
  }

  export type ObraSocialUpdateToOneWithWhereWithoutProfesionalesInput = {
    where?: ObraSocialWhereInput
    data: XOR<ObraSocialUpdateWithoutProfesionalesInput, ObraSocialUncheckedUpdateWithoutProfesionalesInput>
  }

  export type ObraSocialUpdateWithoutProfesionalesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutObraSocialNestedInput
  }

  export type ObraSocialUncheckedUpdateWithoutProfesionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutObraSocialNestedInput
  }

  export type PacienteCreateWithoutTurnosInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
    creadoPor?: UsuarioCreateNestedOneWithoutPacientesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutPacientesInput
    localidad: LocalidadCreateNestedOneWithoutPacientesInput
    obraSocial: ObraSocialCreateNestedOneWithoutPacientesInput
  }

  export type PacienteUncheckedCreateWithoutTurnosInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PacienteCreateOrConnectWithoutTurnosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutTurnosInput, PacienteUncheckedCreateWithoutTurnosInput>
  }

  export type ProfesionalCreateWithoutTurnosInput = {
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutProfesionalInput
    creadoPor?: UsuarioCreateNestedOneWithoutProfesionalesCreadosInput
    provincia: ProvinciaCreateNestedOneWithoutProfesionalesInput
    localidad: LocalidadCreateNestedOneWithoutProfesionalesInput
    obrasSociales?: ObraSocialXProfesionalCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutTurnosInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
    prestaciones?: PrestacionXProfesionalUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutTurnosInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutTurnosInput, ProfesionalUncheckedCreateWithoutTurnosInput>
  }

  export type DetalleTurnoCreateWithoutTurnoInput = {
    descripcion: string
    observacion?: string | null
    creadoEn?: Date | string
  }

  export type DetalleTurnoUncheckedCreateWithoutTurnoInput = {
    id?: number
    descripcion: string
    observacion?: string | null
    creadoEn?: Date | string
  }

  export type DetalleTurnoCreateOrConnectWithoutTurnoInput = {
    where: DetalleTurnoWhereUniqueInput
    create: XOR<DetalleTurnoCreateWithoutTurnoInput, DetalleTurnoUncheckedCreateWithoutTurnoInput>
  }

  export type DetalleTurnoCreateManyTurnoInputEnvelope = {
    data: DetalleTurnoCreateManyTurnoInput | DetalleTurnoCreateManyTurnoInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithoutTurnosInput = {
    update: XOR<PacienteUpdateWithoutTurnosInput, PacienteUncheckedUpdateWithoutTurnosInput>
    create: XOR<PacienteCreateWithoutTurnosInput, PacienteUncheckedCreateWithoutTurnosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutTurnosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutTurnosInput, PacienteUncheckedUpdateWithoutTurnosInput>
  }

  export type PacienteUpdateWithoutTurnosInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
    creadoPor?: UsuarioUpdateOneWithoutPacientesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutPacientesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutPacientesNestedInput
    obraSocial?: ObraSocialUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type PacienteUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesionalUpsertWithoutTurnosInput = {
    update: XOR<ProfesionalUpdateWithoutTurnosInput, ProfesionalUncheckedUpdateWithoutTurnosInput>
    create: XOR<ProfesionalCreateWithoutTurnosInput, ProfesionalUncheckedCreateWithoutTurnosInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutTurnosInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutTurnosInput, ProfesionalUncheckedUpdateWithoutTurnosInput>
  }

  export type ProfesionalUpdateWithoutTurnosInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalNestedInput
    creadoPor?: UsuarioUpdateOneWithoutProfesionalesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutProfesionalesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutProfesionalesNestedInput
    obrasSociales?: ObraSocialXProfesionalUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutTurnosInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type DetalleTurnoUpsertWithWhereUniqueWithoutTurnoInput = {
    where: DetalleTurnoWhereUniqueInput
    update: XOR<DetalleTurnoUpdateWithoutTurnoInput, DetalleTurnoUncheckedUpdateWithoutTurnoInput>
    create: XOR<DetalleTurnoCreateWithoutTurnoInput, DetalleTurnoUncheckedCreateWithoutTurnoInput>
  }

  export type DetalleTurnoUpdateWithWhereUniqueWithoutTurnoInput = {
    where: DetalleTurnoWhereUniqueInput
    data: XOR<DetalleTurnoUpdateWithoutTurnoInput, DetalleTurnoUncheckedUpdateWithoutTurnoInput>
  }

  export type DetalleTurnoUpdateManyWithWhereWithoutTurnoInput = {
    where: DetalleTurnoScalarWhereInput
    data: XOR<DetalleTurnoUpdateManyMutationInput, DetalleTurnoUncheckedUpdateManyWithoutTurnoInput>
  }

  export type DetalleTurnoScalarWhereInput = {
    AND?: DetalleTurnoScalarWhereInput | DetalleTurnoScalarWhereInput[]
    OR?: DetalleTurnoScalarWhereInput[]
    NOT?: DetalleTurnoScalarWhereInput | DetalleTurnoScalarWhereInput[]
    id?: IntFilter<"DetalleTurno"> | number
    turnoId?: IntFilter<"DetalleTurno"> | number
    descripcion?: StringFilter<"DetalleTurno"> | string
    observacion?: StringNullableFilter<"DetalleTurno"> | string | null
    creadoEn?: DateTimeFilter<"DetalleTurno"> | Date | string
  }

  export type TurnoCreateWithoutDetallesInput = {
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
    paciente: PacienteCreateNestedOneWithoutTurnosInput
    profesional: ProfesionalCreateNestedOneWithoutTurnosInput
  }

  export type TurnoUncheckedCreateWithoutDetallesInput = {
    id?: number
    pacienteId: number
    profesionalId: number
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
  }

  export type TurnoCreateOrConnectWithoutDetallesInput = {
    where: TurnoWhereUniqueInput
    create: XOR<TurnoCreateWithoutDetallesInput, TurnoUncheckedCreateWithoutDetallesInput>
  }

  export type TurnoUpsertWithoutDetallesInput = {
    update: XOR<TurnoUpdateWithoutDetallesInput, TurnoUncheckedUpdateWithoutDetallesInput>
    create: XOR<TurnoCreateWithoutDetallesInput, TurnoUncheckedCreateWithoutDetallesInput>
    where?: TurnoWhereInput
  }

  export type TurnoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: TurnoWhereInput
    data: XOR<TurnoUpdateWithoutDetallesInput, TurnoUncheckedUpdateWithoutDetallesInput>
  }

  export type TurnoUpdateWithoutDetallesInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutTurnosNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type TurnoUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteCreateManyCreadoPorInput = {
    id?: number
    userId: number
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ProfesionalCreateManyCreadoPorInput = {
    id?: number
    userId: number
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PacienteUpdateWithoutCreadoPorInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutPacientesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutPacientesNestedInput
    obraSocial?: ObraSocialUpdateOneRequiredWithoutPacientesNestedInput
    turnos?: TurnoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutCreadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutCreadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesionalUpdateWithoutCreadoPorInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutProfesionalesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutProfesionalesNestedInput
    obrasSociales?: ObraSocialXProfesionalUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutCreadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateManyWithoutCreadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteCreateManyProvinciaInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ProfesionalCreateManyProvinciaInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type LocalidadCreateManyProvinciaInput = {
    id?: number
    nombre: string
  }

  export type PacienteUpdateWithoutProvinciaInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
    creadoPor?: UsuarioUpdateOneWithoutPacientesCreadosNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutPacientesNestedInput
    obraSocial?: ObraSocialUpdateOneRequiredWithoutPacientesNestedInput
    turnos?: TurnoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesionalUpdateWithoutProvinciaInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalNestedInput
    creadoPor?: UsuarioUpdateOneWithoutProfesionalesCreadosNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutProfesionalesNestedInput
    obrasSociales?: ObraSocialXProfesionalUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateManyWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalidadUpdateWithoutProvinciaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUpdateManyWithoutLocalidadNestedInput
    profesionales?: ProfesionalUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadUncheckedUpdateWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pacientes?: PacienteUncheckedUpdateManyWithoutLocalidadNestedInput
    profesionales?: ProfesionalUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type LocalidadUncheckedUpdateManyWithoutProvinciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteCreateManyLocalidadInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    obraSocialId: number
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ProfesionalCreateManyLocalidadInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    titulo: string
    matricula: string
    especialidad: string
    universidad: string
    fechaGraduacion: Date | string
    horarioTrabajo: string
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PacienteUpdateWithoutLocalidadInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
    creadoPor?: UsuarioUpdateOneWithoutPacientesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutPacientesNestedInput
    obraSocial?: ObraSocialUpdateOneRequiredWithoutPacientesNestedInput
    turnos?: TurnoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    obraSocialId?: IntFieldUpdateOperationsInput | number
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesionalUpdateWithoutLocalidadInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutProfesionalNestedInput
    creadoPor?: UsuarioUpdateOneWithoutProfesionalesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutProfesionalesNestedInput
    obrasSociales?: ObraSocialXProfesionalUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    obrasSociales?: ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    prestaciones?: PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalNestedInput
    turnos?: TurnoUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateManyWithoutLocalidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    matricula?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    universidad?: StringFieldUpdateOperationsInput | string
    fechaGraduacion?: DateTimeFieldUpdateOperationsInput | Date | string
    horarioTrabajo?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteCreateManyObraSocialInput = {
    id?: number
    userId: number
    creadoPorId?: number | null
    numeroInterno: string
    nombre: string
    apellido: string
    dni: string
    fechaNacimiento: Date | string
    genero: $Enums.Genero
    estadoCivil: $Enums.EstadoCivil
    pais: string
    provinciaId: number
    localidadId: number
    barrio?: string | null
    calle: string
    numero: string
    celular: string
    email: string
    numeroSocio: string
    plan: string
    estado?: $Enums.EstadoPaciente
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type ObraSocialXProfesionalCreateManyObraSocialInput = {
    id?: number
    profesionalId: number
  }

  export type PacienteUpdateWithoutObraSocialInput = {
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
    creadoPor?: UsuarioUpdateOneWithoutPacientesCreadosNestedInput
    provincia?: ProvinciaUpdateOneRequiredWithoutPacientesNestedInput
    localidad?: LocalidadUpdateOneRequiredWithoutPacientesNestedInput
    turnos?: TurnoUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutObraSocialInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    turnos?: TurnoUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutObraSocialInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    creadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    numeroInterno?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    genero?: EnumGeneroFieldUpdateOperationsInput | $Enums.Genero
    estadoCivil?: EnumEstadoCivilFieldUpdateOperationsInput | $Enums.EstadoCivil
    pais?: StringFieldUpdateOperationsInput | string
    provinciaId?: IntFieldUpdateOperationsInput | number
    localidadId?: IntFieldUpdateOperationsInput | number
    barrio?: NullableStringFieldUpdateOperationsInput | string | null
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    numeroSocio?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoPacienteFieldUpdateOperationsInput | $Enums.EstadoPaciente
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraSocialXProfesionalUpdateWithoutObraSocialInput = {
    profesional?: ProfesionalUpdateOneRequiredWithoutObrasSocialesNestedInput
  }

  export type ObraSocialXProfesionalUncheckedUpdateWithoutObraSocialInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type ObraSocialXProfesionalUncheckedUpdateManyWithoutObraSocialInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type PrestacionXProfesionalCreateManyPrestacionInput = {
    id?: number
    profesionalId: number
  }

  export type PrestacionXProfesionalUpdateWithoutPrestacionInput = {
    profesional?: ProfesionalUpdateOneRequiredWithoutPrestacionesNestedInput
  }

  export type PrestacionXProfesionalUncheckedUpdateWithoutPrestacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type PrestacionXProfesionalUncheckedUpdateManyWithoutPrestacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type TurnoCreateManyPacienteInput = {
    id?: number
    profesionalId: number
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
  }

  export type TurnoUpdateWithoutPacienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUpdateOneRequiredWithoutTurnosNestedInput
    detalles?: DetalleTurnoUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetalleTurnoUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObraSocialXProfesionalCreateManyProfesionalInput = {
    id?: number
    obraSocialId: number
  }

  export type PrestacionXProfesionalCreateManyProfesionalInput = {
    id?: number
    prestacionId: number
  }

  export type TurnoCreateManyProfesionalInput = {
    id?: number
    pacienteId: number
    fecha: Date | string
    hora: string
    estado?: $Enums.EstadoTurno
    creadoEn?: Date | string
  }

  export type ObraSocialXProfesionalUpdateWithoutProfesionalInput = {
    obraSocial?: ObraSocialUpdateOneRequiredWithoutProfesionalesNestedInput
  }

  export type ObraSocialXProfesionalUncheckedUpdateWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    obraSocialId?: IntFieldUpdateOperationsInput | number
  }

  export type ObraSocialXProfesionalUncheckedUpdateManyWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    obraSocialId?: IntFieldUpdateOperationsInput | number
  }

  export type PrestacionXProfesionalUpdateWithoutProfesionalInput = {
    prestacion?: PrestacionUpdateOneRequiredWithoutProfesionalesNestedInput
  }

  export type PrestacionXProfesionalUncheckedUpdateWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    prestacionId?: IntFieldUpdateOperationsInput | number
  }

  export type PrestacionXProfesionalUncheckedUpdateManyWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    prestacionId?: IntFieldUpdateOperationsInput | number
  }

  export type TurnoUpdateWithoutProfesionalInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutTurnosNestedInput
    detalles?: DetalleTurnoUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetalleTurnoUncheckedUpdateManyWithoutTurnoNestedInput
  }

  export type TurnoUncheckedUpdateManyWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    pacienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoTurnoFieldUpdateOperationsInput | $Enums.EstadoTurno
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleTurnoCreateManyTurnoInput = {
    id?: number
    descripcion: string
    observacion?: string | null
    creadoEn?: Date | string
  }

  export type DetalleTurnoUpdateWithoutTurnoInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleTurnoUncheckedUpdateWithoutTurnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleTurnoUncheckedUpdateManyWithoutTurnoInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}