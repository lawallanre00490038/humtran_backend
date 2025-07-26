
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EmergencyRequest
 * 
 */
export type EmergencyRequest = $Result.DefaultSelection<Prisma.$EmergencyRequestPayload>
/**
 * Model SecurityAgent
 * 
 */
export type SecurityAgent = $Result.DefaultSelection<Prisma.$SecurityAgentPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model CallLog
 * 
 */
export type CallLog = $Result.DefaultSelection<Prisma.$CallLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  SECURITY: 'SECURITY',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EmergencyStatus: {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  ARRIVED: 'ARRIVED',
  COMPLETED: 'COMPLETED'
};

export type EmergencyStatus = (typeof EmergencyStatus)[keyof typeof EmergencyStatus]


export const SecurityStatus: {
  OFF_LINE: 'OFF_LINE',
  ON_LINE: 'ON_LINE'
};

export type SecurityStatus = (typeof SecurityStatus)[keyof typeof SecurityStatus]


export const CallType: {
  AUDIO: 'AUDIO',
  VIDEO: 'VIDEO'
};

export type CallType = (typeof CallType)[keyof typeof CallType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EmergencyStatus = $Enums.EmergencyStatus

export const EmergencyStatus: typeof $Enums.EmergencyStatus

export type SecurityStatus = $Enums.SecurityStatus

export const SecurityStatus: typeof $Enums.SecurityStatus

export type CallType = $Enums.CallType

export const CallType: typeof $Enums.CallType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emergencyRequest`: Exposes CRUD operations for the **EmergencyRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyRequests
    * const emergencyRequests = await prisma.emergencyRequest.findMany()
    * ```
    */
  get emergencyRequest(): Prisma.EmergencyRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityAgent`: Exposes CRUD operations for the **SecurityAgent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityAgents
    * const securityAgents = await prisma.securityAgent.findMany()
    * ```
    */
  get securityAgent(): Prisma.SecurityAgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.callLog`: Exposes CRUD operations for the **CallLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CallLogs
    * const callLogs = await prisma.callLog.findMany()
    * ```
    */
  get callLog(): Prisma.CallLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    User: 'User',
    EmergencyRequest: 'EmergencyRequest',
    SecurityAgent: 'SecurityAgent',
    Message: 'Message',
    CallLog: 'CallLog'
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
      modelProps: "user" | "emergencyRequest" | "securityAgent" | "message" | "callLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EmergencyRequest: {
        payload: Prisma.$EmergencyRequestPayload<ExtArgs>
        fields: Prisma.EmergencyRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          findFirst: {
            args: Prisma.EmergencyRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          findMany: {
            args: Prisma.EmergencyRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>[]
          }
          create: {
            args: Prisma.EmergencyRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          createMany: {
            args: Prisma.EmergencyRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>[]
          }
          delete: {
            args: Prisma.EmergencyRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          update: {
            args: Prisma.EmergencyRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmergencyRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>[]
          }
          upsert: {
            args: Prisma.EmergencyRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          aggregate: {
            args: Prisma.EmergencyRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyRequest>
          }
          groupBy: {
            args: Prisma.EmergencyRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyRequestCountAggregateOutputType> | number
          }
        }
      }
      SecurityAgent: {
        payload: Prisma.$SecurityAgentPayload<ExtArgs>
        fields: Prisma.SecurityAgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityAgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityAgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>
          }
          findFirst: {
            args: Prisma.SecurityAgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityAgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>
          }
          findMany: {
            args: Prisma.SecurityAgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>[]
          }
          create: {
            args: Prisma.SecurityAgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>
          }
          createMany: {
            args: Prisma.SecurityAgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityAgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>[]
          }
          delete: {
            args: Prisma.SecurityAgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>
          }
          update: {
            args: Prisma.SecurityAgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>
          }
          deleteMany: {
            args: Prisma.SecurityAgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityAgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityAgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>[]
          }
          upsert: {
            args: Prisma.SecurityAgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityAgentPayload>
          }
          aggregate: {
            args: Prisma.SecurityAgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityAgent>
          }
          groupBy: {
            args: Prisma.SecurityAgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityAgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityAgentCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityAgentCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      CallLog: {
        payload: Prisma.$CallLogPayload<ExtArgs>
        fields: Prisma.CallLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          findFirst: {
            args: Prisma.CallLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          findMany: {
            args: Prisma.CallLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>[]
          }
          create: {
            args: Prisma.CallLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          createMany: {
            args: Prisma.CallLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>[]
          }
          delete: {
            args: Prisma.CallLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          update: {
            args: Prisma.CallLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          deleteMany: {
            args: Prisma.CallLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>[]
          }
          upsert: {
            args: Prisma.CallLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallLogPayload>
          }
          aggregate: {
            args: Prisma.CallLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallLog>
          }
          groupBy: {
            args: Prisma.CallLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallLogCountArgs<ExtArgs>
            result: $Utils.Optional<CallLogCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    emergencyRequest?: EmergencyRequestOmit
    securityAgent?: SecurityAgentOmit
    message?: MessageOmit
    callLog?: CallLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emergencies: number
    messagesSent: number
    messagesRecv: number
    callsMade: number
    callsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencies?: boolean | UserCountOutputTypeCountEmergenciesArgs
    messagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    messagesRecv?: boolean | UserCountOutputTypeCountMessagesRecvArgs
    callsMade?: boolean | UserCountOutputTypeCountCallsMadeArgs
    callsReceived?: boolean | UserCountOutputTypeCountCallsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmergenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesRecvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCallsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCallsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallLogWhereInput
  }


  /**
   * Count Type SecurityAgentCountOutputType
   */

  export type SecurityAgentCountOutputType = {
    assignedEmergencies: number
  }

  export type SecurityAgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedEmergencies?: boolean | SecurityAgentCountOutputTypeCountAssignedEmergenciesArgs
  }

  // Custom InputTypes
  /**
   * SecurityAgentCountOutputType without action
   */
  export type SecurityAgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgentCountOutputType
     */
    select?: SecurityAgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecurityAgentCountOutputType without action
   */
  export type SecurityAgentCountOutputTypeCountAssignedEmergenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyRequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    isOnline: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    isOnline: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    password: number
    name: number
    role: number
    isOnline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    name?: true
    role?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    name?: true
    role?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    password?: true
    name?: true
    role?: true
    isOnline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    phone: string | null
    password: string
    name: string
    role: $Enums.Role
    isOnline: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emergencies?: boolean | User$emergenciesArgs<ExtArgs>
    securityAgent?: boolean | User$securityAgentArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesRecv?: boolean | User$messagesRecvArgs<ExtArgs>
    callsMade?: boolean | User$callsMadeArgs<ExtArgs>
    callsReceived?: boolean | User$callsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isOnline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "password" | "name" | "role" | "isOnline" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencies?: boolean | User$emergenciesArgs<ExtArgs>
    securityAgent?: boolean | User$securityAgentArgs<ExtArgs>
    messagesSent?: boolean | User$messagesSentArgs<ExtArgs>
    messagesRecv?: boolean | User$messagesRecvArgs<ExtArgs>
    callsMade?: boolean | User$callsMadeArgs<ExtArgs>
    callsReceived?: boolean | User$callsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emergencies: Prisma.$EmergencyRequestPayload<ExtArgs>[]
      securityAgent: Prisma.$SecurityAgentPayload<ExtArgs> | null
      messagesSent: Prisma.$MessagePayload<ExtArgs>[]
      messagesRecv: Prisma.$MessagePayload<ExtArgs>[]
      callsMade: Prisma.$CallLogPayload<ExtArgs>[]
      callsReceived: Prisma.$CallLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phone: string | null
      password: string
      name: string
      role: $Enums.Role
      isOnline: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emergencies<T extends User$emergenciesArgs<ExtArgs> = {}>(args?: Subset<T, User$emergenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    securityAgent<T extends User$securityAgentArgs<ExtArgs> = {}>(args?: Subset<T, User$securityAgentArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messagesSent<T extends User$messagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesRecv<T extends User$messagesRecvArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesRecvArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    callsMade<T extends User$callsMadeArgs<ExtArgs> = {}>(args?: Subset<T, User$callsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    callsReceived<T extends User$callsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$callsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isOnline: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emergencies
   */
  export type User$emergenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    where?: EmergencyRequestWhereInput
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    cursor?: EmergencyRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * User.securityAgent
   */
  export type User$securityAgentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    where?: SecurityAgentWhereInput
  }

  /**
   * User.messagesSent
   */
  export type User$messagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.messagesRecv
   */
  export type User$messagesRecvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.callsMade
   */
  export type User$callsMadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    where?: CallLogWhereInput
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    cursor?: CallLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallLogScalarFieldEnum | CallLogScalarFieldEnum[]
  }

  /**
   * User.callsReceived
   */
  export type User$callsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    where?: CallLogWhereInput
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    cursor?: CallLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallLogScalarFieldEnum | CallLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyRequest
   */

  export type AggregateEmergencyRequest = {
    _count: EmergencyRequestCountAggregateOutputType | null
    _avg: EmergencyRequestAvgAggregateOutputType | null
    _sum: EmergencyRequestSumAggregateOutputType | null
    _min: EmergencyRequestMinAggregateOutputType | null
    _max: EmergencyRequestMaxAggregateOutputType | null
  }

  export type EmergencyRequestAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type EmergencyRequestSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type EmergencyRequestMinAggregateOutputType = {
    id: string | null
    type: string | null
    userId: string | null
    status: $Enums.EmergencyStatus | null
    lat: number | null
    lng: number | null
    description: string | null
    createdAt: Date | null
    securityId: string | null
  }

  export type EmergencyRequestMaxAggregateOutputType = {
    id: string | null
    type: string | null
    userId: string | null
    status: $Enums.EmergencyStatus | null
    lat: number | null
    lng: number | null
    description: string | null
    createdAt: Date | null
    securityId: string | null
  }

  export type EmergencyRequestCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    status: number
    lat: number
    lng: number
    description: number
    createdAt: number
    securityId: number
    _all: number
  }


  export type EmergencyRequestAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type EmergencyRequestSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type EmergencyRequestMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    status?: true
    lat?: true
    lng?: true
    description?: true
    createdAt?: true
    securityId?: true
  }

  export type EmergencyRequestMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    status?: true
    lat?: true
    lng?: true
    description?: true
    createdAt?: true
    securityId?: true
  }

  export type EmergencyRequestCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    status?: true
    lat?: true
    lng?: true
    description?: true
    createdAt?: true
    securityId?: true
    _all?: true
  }

  export type EmergencyRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyRequest to aggregate.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyRequests
    **/
    _count?: true | EmergencyRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmergencyRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmergencyRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyRequestMaxAggregateInputType
  }

  export type GetEmergencyRequestAggregateType<T extends EmergencyRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyRequest[P]>
      : GetScalarType<T[P], AggregateEmergencyRequest[P]>
  }




  export type EmergencyRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyRequestWhereInput
    orderBy?: EmergencyRequestOrderByWithAggregationInput | EmergencyRequestOrderByWithAggregationInput[]
    by: EmergencyRequestScalarFieldEnum[] | EmergencyRequestScalarFieldEnum
    having?: EmergencyRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyRequestCountAggregateInputType | true
    _avg?: EmergencyRequestAvgAggregateInputType
    _sum?: EmergencyRequestSumAggregateInputType
    _min?: EmergencyRequestMinAggregateInputType
    _max?: EmergencyRequestMaxAggregateInputType
  }

  export type EmergencyRequestGroupByOutputType = {
    id: string
    type: string
    userId: string
    status: $Enums.EmergencyStatus
    lat: number
    lng: number
    description: string | null
    createdAt: Date
    securityId: string | null
    _count: EmergencyRequestCountAggregateOutputType | null
    _avg: EmergencyRequestAvgAggregateOutputType | null
    _sum: EmergencyRequestSumAggregateOutputType | null
    _min: EmergencyRequestMinAggregateOutputType | null
    _max: EmergencyRequestMaxAggregateOutputType | null
  }

  type GetEmergencyRequestGroupByPayload<T extends EmergencyRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyRequestGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    status?: boolean
    lat?: boolean
    lng?: boolean
    description?: boolean
    createdAt?: boolean
    securityId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyRequest"]>

  export type EmergencyRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    status?: boolean
    lat?: boolean
    lng?: boolean
    description?: boolean
    createdAt?: boolean
    securityId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyRequest"]>

  export type EmergencyRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    status?: boolean
    lat?: boolean
    lng?: boolean
    description?: boolean
    createdAt?: boolean
    securityId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyRequest"]>

  export type EmergencyRequestSelectScalar = {
    id?: boolean
    type?: boolean
    userId?: boolean
    status?: boolean
    lat?: boolean
    lng?: boolean
    description?: boolean
    createdAt?: boolean
    securityId?: boolean
  }

  export type EmergencyRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "userId" | "status" | "lat" | "lng" | "description" | "createdAt" | "securityId", ExtArgs["result"]["emergencyRequest"]>
  export type EmergencyRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }
  export type EmergencyRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }
  export type EmergencyRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | EmergencyRequest$assignedToArgs<ExtArgs>
  }

  export type $EmergencyRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assignedTo: Prisma.$SecurityAgentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      userId: string
      status: $Enums.EmergencyStatus
      lat: number
      lng: number
      description: string | null
      createdAt: Date
      securityId: string | null
    }, ExtArgs["result"]["emergencyRequest"]>
    composites: {}
  }

  type EmergencyRequestGetPayload<S extends boolean | null | undefined | EmergencyRequestDefaultArgs> = $Result.GetResult<Prisma.$EmergencyRequestPayload, S>

  type EmergencyRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyRequestCountAggregateInputType | true
    }

  export interface EmergencyRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyRequest'], meta: { name: 'EmergencyRequest' } }
    /**
     * Find zero or one EmergencyRequest that matches the filter.
     * @param {EmergencyRequestFindUniqueArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyRequestFindUniqueArgs>(args: SelectSubset<T, EmergencyRequestFindUniqueArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyRequestFindUniqueOrThrowArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindFirstArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyRequestFindFirstArgs>(args?: SelectSubset<T, EmergencyRequestFindFirstArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindFirstOrThrowArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyRequests
     * const emergencyRequests = await prisma.emergencyRequest.findMany()
     * 
     * // Get first 10 EmergencyRequests
     * const emergencyRequests = await prisma.emergencyRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyRequestFindManyArgs>(args?: SelectSubset<T, EmergencyRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyRequest.
     * @param {EmergencyRequestCreateArgs} args - Arguments to create a EmergencyRequest.
     * @example
     * // Create one EmergencyRequest
     * const EmergencyRequest = await prisma.emergencyRequest.create({
     *   data: {
     *     // ... data to create a EmergencyRequest
     *   }
     * })
     * 
     */
    create<T extends EmergencyRequestCreateArgs>(args: SelectSubset<T, EmergencyRequestCreateArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyRequests.
     * @param {EmergencyRequestCreateManyArgs} args - Arguments to create many EmergencyRequests.
     * @example
     * // Create many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyRequestCreateManyArgs>(args?: SelectSubset<T, EmergencyRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyRequests and returns the data saved in the database.
     * @param {EmergencyRequestCreateManyAndReturnArgs} args - Arguments to create many EmergencyRequests.
     * @example
     * // Create many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyRequests and only return the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmergencyRequest.
     * @param {EmergencyRequestDeleteArgs} args - Arguments to delete one EmergencyRequest.
     * @example
     * // Delete one EmergencyRequest
     * const EmergencyRequest = await prisma.emergencyRequest.delete({
     *   where: {
     *     // ... filter to delete one EmergencyRequest
     *   }
     * })
     * 
     */
    delete<T extends EmergencyRequestDeleteArgs>(args: SelectSubset<T, EmergencyRequestDeleteArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyRequest.
     * @param {EmergencyRequestUpdateArgs} args - Arguments to update one EmergencyRequest.
     * @example
     * // Update one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyRequestUpdateArgs>(args: SelectSubset<T, EmergencyRequestUpdateArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyRequests.
     * @param {EmergencyRequestDeleteManyArgs} args - Arguments to filter EmergencyRequests to delete.
     * @example
     * // Delete a few EmergencyRequests
     * const { count } = await prisma.emergencyRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyRequestDeleteManyArgs>(args?: SelectSubset<T, EmergencyRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyRequestUpdateManyArgs>(args: SelectSubset<T, EmergencyRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyRequests and returns the data updated in the database.
     * @param {EmergencyRequestUpdateManyAndReturnArgs} args - Arguments to update many EmergencyRequests.
     * @example
     * // Update many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmergencyRequests and only return the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmergencyRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EmergencyRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmergencyRequest.
     * @param {EmergencyRequestUpsertArgs} args - Arguments to update or create a EmergencyRequest.
     * @example
     * // Update or create a EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.upsert({
     *   create: {
     *     // ... data to create a EmergencyRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyRequest we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyRequestUpsertArgs>(args: SelectSubset<T, EmergencyRequestUpsertArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmergencyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestCountArgs} args - Arguments to filter EmergencyRequests to count.
     * @example
     * // Count the number of EmergencyRequests
     * const count = await prisma.emergencyRequest.count({
     *   where: {
     *     // ... the filter for the EmergencyRequests we want to count
     *   }
     * })
    **/
    count<T extends EmergencyRequestCountArgs>(
      args?: Subset<T, EmergencyRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyRequestAggregateArgs>(args: Subset<T, EmergencyRequestAggregateArgs>): Prisma.PrismaPromise<GetEmergencyRequestAggregateType<T>>

    /**
     * Group by EmergencyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestGroupByArgs} args - Group by arguments.
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
      T extends EmergencyRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyRequestGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyRequest model
   */
  readonly fields: EmergencyRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends EmergencyRequest$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, EmergencyRequest$assignedToArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmergencyRequest model
   */
  interface EmergencyRequestFieldRefs {
    readonly id: FieldRef<"EmergencyRequest", 'String'>
    readonly type: FieldRef<"EmergencyRequest", 'String'>
    readonly userId: FieldRef<"EmergencyRequest", 'String'>
    readonly status: FieldRef<"EmergencyRequest", 'EmergencyStatus'>
    readonly lat: FieldRef<"EmergencyRequest", 'Float'>
    readonly lng: FieldRef<"EmergencyRequest", 'Float'>
    readonly description: FieldRef<"EmergencyRequest", 'String'>
    readonly createdAt: FieldRef<"EmergencyRequest", 'DateTime'>
    readonly securityId: FieldRef<"EmergencyRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyRequest findUnique
   */
  export type EmergencyRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest findUniqueOrThrow
   */
  export type EmergencyRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest findFirst
   */
  export type EmergencyRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest findFirstOrThrow
   */
  export type EmergencyRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest findMany
   */
  export type EmergencyRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyRequests to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest create
   */
  export type EmergencyRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyRequest.
     */
    data: XOR<EmergencyRequestCreateInput, EmergencyRequestUncheckedCreateInput>
  }

  /**
   * EmergencyRequest createMany
   */
  export type EmergencyRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyRequests.
     */
    data: EmergencyRequestCreateManyInput | EmergencyRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmergencyRequest createManyAndReturn
   */
  export type EmergencyRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EmergencyRequests.
     */
    data: EmergencyRequestCreateManyInput | EmergencyRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyRequest update
   */
  export type EmergencyRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyRequest.
     */
    data: XOR<EmergencyRequestUpdateInput, EmergencyRequestUncheckedUpdateInput>
    /**
     * Choose, which EmergencyRequest to update.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest updateMany
   */
  export type EmergencyRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyRequests.
     */
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyRequests to update
     */
    where?: EmergencyRequestWhereInput
    /**
     * Limit how many EmergencyRequests to update.
     */
    limit?: number
  }

  /**
   * EmergencyRequest updateManyAndReturn
   */
  export type EmergencyRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * The data used to update EmergencyRequests.
     */
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyRequests to update
     */
    where?: EmergencyRequestWhereInput
    /**
     * Limit how many EmergencyRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmergencyRequest upsert
   */
  export type EmergencyRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyRequest to update in case it exists.
     */
    where: EmergencyRequestWhereUniqueInput
    /**
     * In case the EmergencyRequest found by the `where` argument doesn't exist, create a new EmergencyRequest with this data.
     */
    create: XOR<EmergencyRequestCreateInput, EmergencyRequestUncheckedCreateInput>
    /**
     * In case the EmergencyRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyRequestUpdateInput, EmergencyRequestUncheckedUpdateInput>
  }

  /**
   * EmergencyRequest delete
   */
  export type EmergencyRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    /**
     * Filter which EmergencyRequest to delete.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest deleteMany
   */
  export type EmergencyRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyRequests to delete
     */
    where?: EmergencyRequestWhereInput
    /**
     * Limit how many EmergencyRequests to delete.
     */
    limit?: number
  }

  /**
   * EmergencyRequest.assignedTo
   */
  export type EmergencyRequest$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    where?: SecurityAgentWhereInput
  }

  /**
   * EmergencyRequest without action
   */
  export type EmergencyRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
  }


  /**
   * Model SecurityAgent
   */

  export type AggregateSecurityAgent = {
    _count: SecurityAgentCountAggregateOutputType | null
    _avg: SecurityAgentAvgAggregateOutputType | null
    _sum: SecurityAgentSumAggregateOutputType | null
    _min: SecurityAgentMinAggregateOutputType | null
    _max: SecurityAgentMaxAggregateOutputType | null
  }

  export type SecurityAgentAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type SecurityAgentSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type SecurityAgentMinAggregateOutputType = {
    id: string | null
    name: string | null
    lat: number | null
    lng: number | null
    userId: string | null
    lastUpdated: Date | null
    status: $Enums.SecurityStatus | null
  }

  export type SecurityAgentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lat: number | null
    lng: number | null
    userId: string | null
    lastUpdated: Date | null
    status: $Enums.SecurityStatus | null
  }

  export type SecurityAgentCountAggregateOutputType = {
    id: number
    name: number
    lat: number
    lng: number
    userId: number
    lastUpdated: number
    status: number
    _all: number
  }


  export type SecurityAgentAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type SecurityAgentSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type SecurityAgentMinAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    lng?: true
    userId?: true
    lastUpdated?: true
    status?: true
  }

  export type SecurityAgentMaxAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    lng?: true
    userId?: true
    lastUpdated?: true
    status?: true
  }

  export type SecurityAgentCountAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    lng?: true
    userId?: true
    lastUpdated?: true
    status?: true
    _all?: true
  }

  export type SecurityAgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAgent to aggregate.
     */
    where?: SecurityAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAgents to fetch.
     */
    orderBy?: SecurityAgentOrderByWithRelationInput | SecurityAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityAgents
    **/
    _count?: true | SecurityAgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityAgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityAgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityAgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityAgentMaxAggregateInputType
  }

  export type GetSecurityAgentAggregateType<T extends SecurityAgentAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityAgent[P]>
      : GetScalarType<T[P], AggregateSecurityAgent[P]>
  }




  export type SecurityAgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityAgentWhereInput
    orderBy?: SecurityAgentOrderByWithAggregationInput | SecurityAgentOrderByWithAggregationInput[]
    by: SecurityAgentScalarFieldEnum[] | SecurityAgentScalarFieldEnum
    having?: SecurityAgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityAgentCountAggregateInputType | true
    _avg?: SecurityAgentAvgAggregateInputType
    _sum?: SecurityAgentSumAggregateInputType
    _min?: SecurityAgentMinAggregateInputType
    _max?: SecurityAgentMaxAggregateInputType
  }

  export type SecurityAgentGroupByOutputType = {
    id: string
    name: string
    lat: number
    lng: number
    userId: string
    lastUpdated: Date
    status: $Enums.SecurityStatus
    _count: SecurityAgentCountAggregateOutputType | null
    _avg: SecurityAgentAvgAggregateOutputType | null
    _sum: SecurityAgentSumAggregateOutputType | null
    _min: SecurityAgentMinAggregateOutputType | null
    _max: SecurityAgentMaxAggregateOutputType | null
  }

  type GetSecurityAgentGroupByPayload<T extends SecurityAgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityAgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityAgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityAgentGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityAgentGroupByOutputType[P]>
        }
      >
    >


  export type SecurityAgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lat?: boolean
    lng?: boolean
    userId?: boolean
    lastUpdated?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedEmergencies?: boolean | SecurityAgent$assignedEmergenciesArgs<ExtArgs>
    _count?: boolean | SecurityAgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityAgent"]>

  export type SecurityAgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lat?: boolean
    lng?: boolean
    userId?: boolean
    lastUpdated?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityAgent"]>

  export type SecurityAgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lat?: boolean
    lng?: boolean
    userId?: boolean
    lastUpdated?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityAgent"]>

  export type SecurityAgentSelectScalar = {
    id?: boolean
    name?: boolean
    lat?: boolean
    lng?: boolean
    userId?: boolean
    lastUpdated?: boolean
    status?: boolean
  }

  export type SecurityAgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lat" | "lng" | "userId" | "lastUpdated" | "status", ExtArgs["result"]["securityAgent"]>
  export type SecurityAgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedEmergencies?: boolean | SecurityAgent$assignedEmergenciesArgs<ExtArgs>
    _count?: boolean | SecurityAgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecurityAgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SecurityAgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SecurityAgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityAgent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assignedEmergencies: Prisma.$EmergencyRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      lat: number
      lng: number
      userId: string
      lastUpdated: Date
      status: $Enums.SecurityStatus
    }, ExtArgs["result"]["securityAgent"]>
    composites: {}
  }

  type SecurityAgentGetPayload<S extends boolean | null | undefined | SecurityAgentDefaultArgs> = $Result.GetResult<Prisma.$SecurityAgentPayload, S>

  type SecurityAgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityAgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityAgentCountAggregateInputType | true
    }

  export interface SecurityAgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityAgent'], meta: { name: 'SecurityAgent' } }
    /**
     * Find zero or one SecurityAgent that matches the filter.
     * @param {SecurityAgentFindUniqueArgs} args - Arguments to find a SecurityAgent
     * @example
     * // Get one SecurityAgent
     * const securityAgent = await prisma.securityAgent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityAgentFindUniqueArgs>(args: SelectSubset<T, SecurityAgentFindUniqueArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityAgent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityAgentFindUniqueOrThrowArgs} args - Arguments to find a SecurityAgent
     * @example
     * // Get one SecurityAgent
     * const securityAgent = await prisma.securityAgent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityAgentFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityAgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityAgent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAgentFindFirstArgs} args - Arguments to find a SecurityAgent
     * @example
     * // Get one SecurityAgent
     * const securityAgent = await prisma.securityAgent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityAgentFindFirstArgs>(args?: SelectSubset<T, SecurityAgentFindFirstArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityAgent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAgentFindFirstOrThrowArgs} args - Arguments to find a SecurityAgent
     * @example
     * // Get one SecurityAgent
     * const securityAgent = await prisma.securityAgent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityAgentFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityAgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityAgents
     * const securityAgents = await prisma.securityAgent.findMany()
     * 
     * // Get first 10 SecurityAgents
     * const securityAgents = await prisma.securityAgent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityAgentWithIdOnly = await prisma.securityAgent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityAgentFindManyArgs>(args?: SelectSubset<T, SecurityAgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityAgent.
     * @param {SecurityAgentCreateArgs} args - Arguments to create a SecurityAgent.
     * @example
     * // Create one SecurityAgent
     * const SecurityAgent = await prisma.securityAgent.create({
     *   data: {
     *     // ... data to create a SecurityAgent
     *   }
     * })
     * 
     */
    create<T extends SecurityAgentCreateArgs>(args: SelectSubset<T, SecurityAgentCreateArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityAgents.
     * @param {SecurityAgentCreateManyArgs} args - Arguments to create many SecurityAgents.
     * @example
     * // Create many SecurityAgents
     * const securityAgent = await prisma.securityAgent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityAgentCreateManyArgs>(args?: SelectSubset<T, SecurityAgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityAgents and returns the data saved in the database.
     * @param {SecurityAgentCreateManyAndReturnArgs} args - Arguments to create many SecurityAgents.
     * @example
     * // Create many SecurityAgents
     * const securityAgent = await prisma.securityAgent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityAgents and only return the `id`
     * const securityAgentWithIdOnly = await prisma.securityAgent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityAgentCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityAgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityAgent.
     * @param {SecurityAgentDeleteArgs} args - Arguments to delete one SecurityAgent.
     * @example
     * // Delete one SecurityAgent
     * const SecurityAgent = await prisma.securityAgent.delete({
     *   where: {
     *     // ... filter to delete one SecurityAgent
     *   }
     * })
     * 
     */
    delete<T extends SecurityAgentDeleteArgs>(args: SelectSubset<T, SecurityAgentDeleteArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityAgent.
     * @param {SecurityAgentUpdateArgs} args - Arguments to update one SecurityAgent.
     * @example
     * // Update one SecurityAgent
     * const securityAgent = await prisma.securityAgent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityAgentUpdateArgs>(args: SelectSubset<T, SecurityAgentUpdateArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityAgents.
     * @param {SecurityAgentDeleteManyArgs} args - Arguments to filter SecurityAgents to delete.
     * @example
     * // Delete a few SecurityAgents
     * const { count } = await prisma.securityAgent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityAgentDeleteManyArgs>(args?: SelectSubset<T, SecurityAgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityAgents
     * const securityAgent = await prisma.securityAgent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityAgentUpdateManyArgs>(args: SelectSubset<T, SecurityAgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityAgents and returns the data updated in the database.
     * @param {SecurityAgentUpdateManyAndReturnArgs} args - Arguments to update many SecurityAgents.
     * @example
     * // Update many SecurityAgents
     * const securityAgent = await prisma.securityAgent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityAgents and only return the `id`
     * const securityAgentWithIdOnly = await prisma.securityAgent.updateManyAndReturn({
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
    updateManyAndReturn<T extends SecurityAgentUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityAgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityAgent.
     * @param {SecurityAgentUpsertArgs} args - Arguments to update or create a SecurityAgent.
     * @example
     * // Update or create a SecurityAgent
     * const securityAgent = await prisma.securityAgent.upsert({
     *   create: {
     *     // ... data to create a SecurityAgent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityAgent we want to update
     *   }
     * })
     */
    upsert<T extends SecurityAgentUpsertArgs>(args: SelectSubset<T, SecurityAgentUpsertArgs<ExtArgs>>): Prisma__SecurityAgentClient<$Result.GetResult<Prisma.$SecurityAgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAgentCountArgs} args - Arguments to filter SecurityAgents to count.
     * @example
     * // Count the number of SecurityAgents
     * const count = await prisma.securityAgent.count({
     *   where: {
     *     // ... the filter for the SecurityAgents we want to count
     *   }
     * })
    **/
    count<T extends SecurityAgentCountArgs>(
      args?: Subset<T, SecurityAgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityAgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecurityAgentAggregateArgs>(args: Subset<T, SecurityAgentAggregateArgs>): Prisma.PrismaPromise<GetSecurityAgentAggregateType<T>>

    /**
     * Group by SecurityAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityAgentGroupByArgs} args - Group by arguments.
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
      T extends SecurityAgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityAgentGroupByArgs['orderBy'] }
        : { orderBy?: SecurityAgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecurityAgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityAgent model
   */
  readonly fields: SecurityAgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityAgent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityAgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedEmergencies<T extends SecurityAgent$assignedEmergenciesArgs<ExtArgs> = {}>(args?: Subset<T, SecurityAgent$assignedEmergenciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SecurityAgent model
   */
  interface SecurityAgentFieldRefs {
    readonly id: FieldRef<"SecurityAgent", 'String'>
    readonly name: FieldRef<"SecurityAgent", 'String'>
    readonly lat: FieldRef<"SecurityAgent", 'Float'>
    readonly lng: FieldRef<"SecurityAgent", 'Float'>
    readonly userId: FieldRef<"SecurityAgent", 'String'>
    readonly lastUpdated: FieldRef<"SecurityAgent", 'DateTime'>
    readonly status: FieldRef<"SecurityAgent", 'SecurityStatus'>
  }
    

  // Custom InputTypes
  /**
   * SecurityAgent findUnique
   */
  export type SecurityAgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * Filter, which SecurityAgent to fetch.
     */
    where: SecurityAgentWhereUniqueInput
  }

  /**
   * SecurityAgent findUniqueOrThrow
   */
  export type SecurityAgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * Filter, which SecurityAgent to fetch.
     */
    where: SecurityAgentWhereUniqueInput
  }

  /**
   * SecurityAgent findFirst
   */
  export type SecurityAgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * Filter, which SecurityAgent to fetch.
     */
    where?: SecurityAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAgents to fetch.
     */
    orderBy?: SecurityAgentOrderByWithRelationInput | SecurityAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityAgents.
     */
    cursor?: SecurityAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAgents.
     */
    distinct?: SecurityAgentScalarFieldEnum | SecurityAgentScalarFieldEnum[]
  }

  /**
   * SecurityAgent findFirstOrThrow
   */
  export type SecurityAgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * Filter, which SecurityAgent to fetch.
     */
    where?: SecurityAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAgents to fetch.
     */
    orderBy?: SecurityAgentOrderByWithRelationInput | SecurityAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityAgents.
     */
    cursor?: SecurityAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityAgents.
     */
    distinct?: SecurityAgentScalarFieldEnum | SecurityAgentScalarFieldEnum[]
  }

  /**
   * SecurityAgent findMany
   */
  export type SecurityAgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * Filter, which SecurityAgents to fetch.
     */
    where?: SecurityAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityAgents to fetch.
     */
    orderBy?: SecurityAgentOrderByWithRelationInput | SecurityAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityAgents.
     */
    cursor?: SecurityAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityAgents.
     */
    skip?: number
    distinct?: SecurityAgentScalarFieldEnum | SecurityAgentScalarFieldEnum[]
  }

  /**
   * SecurityAgent create
   */
  export type SecurityAgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityAgent.
     */
    data: XOR<SecurityAgentCreateInput, SecurityAgentUncheckedCreateInput>
  }

  /**
   * SecurityAgent createMany
   */
  export type SecurityAgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityAgents.
     */
    data: SecurityAgentCreateManyInput | SecurityAgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityAgent createManyAndReturn
   */
  export type SecurityAgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityAgents.
     */
    data: SecurityAgentCreateManyInput | SecurityAgentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityAgent update
   */
  export type SecurityAgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityAgent.
     */
    data: XOR<SecurityAgentUpdateInput, SecurityAgentUncheckedUpdateInput>
    /**
     * Choose, which SecurityAgent to update.
     */
    where: SecurityAgentWhereUniqueInput
  }

  /**
   * SecurityAgent updateMany
   */
  export type SecurityAgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityAgents.
     */
    data: XOR<SecurityAgentUpdateManyMutationInput, SecurityAgentUncheckedUpdateManyInput>
    /**
     * Filter which SecurityAgents to update
     */
    where?: SecurityAgentWhereInput
    /**
     * Limit how many SecurityAgents to update.
     */
    limit?: number
  }

  /**
   * SecurityAgent updateManyAndReturn
   */
  export type SecurityAgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * The data used to update SecurityAgents.
     */
    data: XOR<SecurityAgentUpdateManyMutationInput, SecurityAgentUncheckedUpdateManyInput>
    /**
     * Filter which SecurityAgents to update
     */
    where?: SecurityAgentWhereInput
    /**
     * Limit how many SecurityAgents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityAgent upsert
   */
  export type SecurityAgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityAgent to update in case it exists.
     */
    where: SecurityAgentWhereUniqueInput
    /**
     * In case the SecurityAgent found by the `where` argument doesn't exist, create a new SecurityAgent with this data.
     */
    create: XOR<SecurityAgentCreateInput, SecurityAgentUncheckedCreateInput>
    /**
     * In case the SecurityAgent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityAgentUpdateInput, SecurityAgentUncheckedUpdateInput>
  }

  /**
   * SecurityAgent delete
   */
  export type SecurityAgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
    /**
     * Filter which SecurityAgent to delete.
     */
    where: SecurityAgentWhereUniqueInput
  }

  /**
   * SecurityAgent deleteMany
   */
  export type SecurityAgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityAgents to delete
     */
    where?: SecurityAgentWhereInput
    /**
     * Limit how many SecurityAgents to delete.
     */
    limit?: number
  }

  /**
   * SecurityAgent.assignedEmergencies
   */
  export type SecurityAgent$assignedEmergenciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: EmergencyRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyRequestInclude<ExtArgs> | null
    where?: EmergencyRequestWhereInput
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    cursor?: EmergencyRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * SecurityAgent without action
   */
  export type SecurityAgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityAgent
     */
    select?: SecurityAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityAgent
     */
    omit?: SecurityAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityAgentInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: string | null
    createdAt: Date | null
    senderId: string | null
    receiverId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: string | null
    createdAt: Date | null
    senderId: string | null
    receiverId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    type: number
    createdAt: number
    senderId: number
    receiverId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    type?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    type?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    type?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    type: string
    createdAt: Date
    senderId: string
    receiverId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    type?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "type" | "createdAt" | "senderId" | "receiverId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      type: string
      createdAt: Date
      senderId: string
      receiverId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly type: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model CallLog
   */

  export type AggregateCallLog = {
    _count: CallLogCountAggregateOutputType | null
    _min: CallLogMinAggregateOutputType | null
    _max: CallLogMaxAggregateOutputType | null
  }

  export type CallLogMinAggregateOutputType = {
    id: string | null
    callerId: string | null
    receiverId: string | null
    callType: $Enums.CallType | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type CallLogMaxAggregateOutputType = {
    id: string | null
    callerId: string | null
    receiverId: string | null
    callType: $Enums.CallType | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type CallLogCountAggregateOutputType = {
    id: number
    callerId: number
    receiverId: number
    callType: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type CallLogMinAggregateInputType = {
    id?: true
    callerId?: true
    receiverId?: true
    callType?: true
    startedAt?: true
    endedAt?: true
  }

  export type CallLogMaxAggregateInputType = {
    id?: true
    callerId?: true
    receiverId?: true
    callType?: true
    startedAt?: true
    endedAt?: true
  }

  export type CallLogCountAggregateInputType = {
    id?: true
    callerId?: true
    receiverId?: true
    callType?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type CallLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallLog to aggregate.
     */
    where?: CallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallLogs to fetch.
     */
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CallLogs
    **/
    _count?: true | CallLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallLogMaxAggregateInputType
  }

  export type GetCallLogAggregateType<T extends CallLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCallLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallLog[P]>
      : GetScalarType<T[P], AggregateCallLog[P]>
  }




  export type CallLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallLogWhereInput
    orderBy?: CallLogOrderByWithAggregationInput | CallLogOrderByWithAggregationInput[]
    by: CallLogScalarFieldEnum[] | CallLogScalarFieldEnum
    having?: CallLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallLogCountAggregateInputType | true
    _min?: CallLogMinAggregateInputType
    _max?: CallLogMaxAggregateInputType
  }

  export type CallLogGroupByOutputType = {
    id: string
    callerId: string
    receiverId: string
    callType: $Enums.CallType
    startedAt: Date
    endedAt: Date | null
    _count: CallLogCountAggregateOutputType | null
    _min: CallLogMinAggregateOutputType | null
    _max: CallLogMaxAggregateOutputType | null
  }

  type GetCallLogGroupByPayload<T extends CallLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallLogGroupByOutputType[P]>
            : GetScalarType<T[P], CallLogGroupByOutputType[P]>
        }
      >
    >


  export type CallLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    callerId?: boolean
    receiverId?: boolean
    callType?: boolean
    startedAt?: boolean
    endedAt?: boolean
    caller?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callLog"]>

  export type CallLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    callerId?: boolean
    receiverId?: boolean
    callType?: boolean
    startedAt?: boolean
    endedAt?: boolean
    caller?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callLog"]>

  export type CallLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    callerId?: boolean
    receiverId?: boolean
    callType?: boolean
    startedAt?: boolean
    endedAt?: boolean
    caller?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callLog"]>

  export type CallLogSelectScalar = {
    id?: boolean
    callerId?: boolean
    receiverId?: boolean
    callType?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type CallLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "callerId" | "receiverId" | "callType" | "startedAt" | "endedAt", ExtArgs["result"]["callLog"]>
  export type CallLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caller?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CallLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caller?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CallLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    caller?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CallLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CallLog"
    objects: {
      caller: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      callerId: string
      receiverId: string
      callType: $Enums.CallType
      startedAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["callLog"]>
    composites: {}
  }

  type CallLogGetPayload<S extends boolean | null | undefined | CallLogDefaultArgs> = $Result.GetResult<Prisma.$CallLogPayload, S>

  type CallLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallLogCountAggregateInputType | true
    }

  export interface CallLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CallLog'], meta: { name: 'CallLog' } }
    /**
     * Find zero or one CallLog that matches the filter.
     * @param {CallLogFindUniqueArgs} args - Arguments to find a CallLog
     * @example
     * // Get one CallLog
     * const callLog = await prisma.callLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallLogFindUniqueArgs>(args: SelectSubset<T, CallLogFindUniqueArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CallLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallLogFindUniqueOrThrowArgs} args - Arguments to find a CallLog
     * @example
     * // Get one CallLog
     * const callLog = await prisma.callLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CallLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogFindFirstArgs} args - Arguments to find a CallLog
     * @example
     * // Get one CallLog
     * const callLog = await prisma.callLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallLogFindFirstArgs>(args?: SelectSubset<T, CallLogFindFirstArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogFindFirstOrThrowArgs} args - Arguments to find a CallLog
     * @example
     * // Get one CallLog
     * const callLog = await prisma.callLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CallLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CallLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CallLogs
     * const callLogs = await prisma.callLog.findMany()
     * 
     * // Get first 10 CallLogs
     * const callLogs = await prisma.callLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callLogWithIdOnly = await prisma.callLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallLogFindManyArgs>(args?: SelectSubset<T, CallLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CallLog.
     * @param {CallLogCreateArgs} args - Arguments to create a CallLog.
     * @example
     * // Create one CallLog
     * const CallLog = await prisma.callLog.create({
     *   data: {
     *     // ... data to create a CallLog
     *   }
     * })
     * 
     */
    create<T extends CallLogCreateArgs>(args: SelectSubset<T, CallLogCreateArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CallLogs.
     * @param {CallLogCreateManyArgs} args - Arguments to create many CallLogs.
     * @example
     * // Create many CallLogs
     * const callLog = await prisma.callLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallLogCreateManyArgs>(args?: SelectSubset<T, CallLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CallLogs and returns the data saved in the database.
     * @param {CallLogCreateManyAndReturnArgs} args - Arguments to create many CallLogs.
     * @example
     * // Create many CallLogs
     * const callLog = await prisma.callLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CallLogs and only return the `id`
     * const callLogWithIdOnly = await prisma.callLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CallLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CallLog.
     * @param {CallLogDeleteArgs} args - Arguments to delete one CallLog.
     * @example
     * // Delete one CallLog
     * const CallLog = await prisma.callLog.delete({
     *   where: {
     *     // ... filter to delete one CallLog
     *   }
     * })
     * 
     */
    delete<T extends CallLogDeleteArgs>(args: SelectSubset<T, CallLogDeleteArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CallLog.
     * @param {CallLogUpdateArgs} args - Arguments to update one CallLog.
     * @example
     * // Update one CallLog
     * const callLog = await prisma.callLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallLogUpdateArgs>(args: SelectSubset<T, CallLogUpdateArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CallLogs.
     * @param {CallLogDeleteManyArgs} args - Arguments to filter CallLogs to delete.
     * @example
     * // Delete a few CallLogs
     * const { count } = await prisma.callLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallLogDeleteManyArgs>(args?: SelectSubset<T, CallLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CallLogs
     * const callLog = await prisma.callLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallLogUpdateManyArgs>(args: SelectSubset<T, CallLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallLogs and returns the data updated in the database.
     * @param {CallLogUpdateManyAndReturnArgs} args - Arguments to update many CallLogs.
     * @example
     * // Update many CallLogs
     * const callLog = await prisma.callLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CallLogs and only return the `id`
     * const callLogWithIdOnly = await prisma.callLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CallLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CallLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CallLog.
     * @param {CallLogUpsertArgs} args - Arguments to update or create a CallLog.
     * @example
     * // Update or create a CallLog
     * const callLog = await prisma.callLog.upsert({
     *   create: {
     *     // ... data to create a CallLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CallLog we want to update
     *   }
     * })
     */
    upsert<T extends CallLogUpsertArgs>(args: SelectSubset<T, CallLogUpsertArgs<ExtArgs>>): Prisma__CallLogClient<$Result.GetResult<Prisma.$CallLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CallLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogCountArgs} args - Arguments to filter CallLogs to count.
     * @example
     * // Count the number of CallLogs
     * const count = await prisma.callLog.count({
     *   where: {
     *     // ... the filter for the CallLogs we want to count
     *   }
     * })
    **/
    count<T extends CallLogCountArgs>(
      args?: Subset<T, CallLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CallLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallLogAggregateArgs>(args: Subset<T, CallLogAggregateArgs>): Prisma.PrismaPromise<GetCallLogAggregateType<T>>

    /**
     * Group by CallLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallLogGroupByArgs} args - Group by arguments.
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
      T extends CallLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallLogGroupByArgs['orderBy'] }
        : { orderBy?: CallLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CallLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CallLog model
   */
  readonly fields: CallLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CallLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    caller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CallLog model
   */
  interface CallLogFieldRefs {
    readonly id: FieldRef<"CallLog", 'String'>
    readonly callerId: FieldRef<"CallLog", 'String'>
    readonly receiverId: FieldRef<"CallLog", 'String'>
    readonly callType: FieldRef<"CallLog", 'CallType'>
    readonly startedAt: FieldRef<"CallLog", 'DateTime'>
    readonly endedAt: FieldRef<"CallLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CallLog findUnique
   */
  export type CallLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * Filter, which CallLog to fetch.
     */
    where: CallLogWhereUniqueInput
  }

  /**
   * CallLog findUniqueOrThrow
   */
  export type CallLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * Filter, which CallLog to fetch.
     */
    where: CallLogWhereUniqueInput
  }

  /**
   * CallLog findFirst
   */
  export type CallLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * Filter, which CallLog to fetch.
     */
    where?: CallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallLogs to fetch.
     */
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallLogs.
     */
    cursor?: CallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallLogs.
     */
    distinct?: CallLogScalarFieldEnum | CallLogScalarFieldEnum[]
  }

  /**
   * CallLog findFirstOrThrow
   */
  export type CallLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * Filter, which CallLog to fetch.
     */
    where?: CallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallLogs to fetch.
     */
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallLogs.
     */
    cursor?: CallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallLogs.
     */
    distinct?: CallLogScalarFieldEnum | CallLogScalarFieldEnum[]
  }

  /**
   * CallLog findMany
   */
  export type CallLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * Filter, which CallLogs to fetch.
     */
    where?: CallLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallLogs to fetch.
     */
    orderBy?: CallLogOrderByWithRelationInput | CallLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CallLogs.
     */
    cursor?: CallLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallLogs.
     */
    skip?: number
    distinct?: CallLogScalarFieldEnum | CallLogScalarFieldEnum[]
  }

  /**
   * CallLog create
   */
  export type CallLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CallLog.
     */
    data: XOR<CallLogCreateInput, CallLogUncheckedCreateInput>
  }

  /**
   * CallLog createMany
   */
  export type CallLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CallLogs.
     */
    data: CallLogCreateManyInput | CallLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallLog createManyAndReturn
   */
  export type CallLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * The data used to create many CallLogs.
     */
    data: CallLogCreateManyInput | CallLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallLog update
   */
  export type CallLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CallLog.
     */
    data: XOR<CallLogUpdateInput, CallLogUncheckedUpdateInput>
    /**
     * Choose, which CallLog to update.
     */
    where: CallLogWhereUniqueInput
  }

  /**
   * CallLog updateMany
   */
  export type CallLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CallLogs.
     */
    data: XOR<CallLogUpdateManyMutationInput, CallLogUncheckedUpdateManyInput>
    /**
     * Filter which CallLogs to update
     */
    where?: CallLogWhereInput
    /**
     * Limit how many CallLogs to update.
     */
    limit?: number
  }

  /**
   * CallLog updateManyAndReturn
   */
  export type CallLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * The data used to update CallLogs.
     */
    data: XOR<CallLogUpdateManyMutationInput, CallLogUncheckedUpdateManyInput>
    /**
     * Filter which CallLogs to update
     */
    where?: CallLogWhereInput
    /**
     * Limit how many CallLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallLog upsert
   */
  export type CallLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CallLog to update in case it exists.
     */
    where: CallLogWhereUniqueInput
    /**
     * In case the CallLog found by the `where` argument doesn't exist, create a new CallLog with this data.
     */
    create: XOR<CallLogCreateInput, CallLogUncheckedCreateInput>
    /**
     * In case the CallLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallLogUpdateInput, CallLogUncheckedUpdateInput>
  }

  /**
   * CallLog delete
   */
  export type CallLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
    /**
     * Filter which CallLog to delete.
     */
    where: CallLogWhereUniqueInput
  }

  /**
   * CallLog deleteMany
   */
  export type CallLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallLogs to delete
     */
    where?: CallLogWhereInput
    /**
     * Limit how many CallLogs to delete.
     */
    limit?: number
  }

  /**
   * CallLog without action
   */
  export type CallLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallLog
     */
    select?: CallLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallLog
     */
    omit?: CallLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    password: 'password',
    name: 'name',
    role: 'role',
    isOnline: 'isOnline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmergencyRequestScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    status: 'status',
    lat: 'lat',
    lng: 'lng',
    description: 'description',
    createdAt: 'createdAt',
    securityId: 'securityId'
  };

  export type EmergencyRequestScalarFieldEnum = (typeof EmergencyRequestScalarFieldEnum)[keyof typeof EmergencyRequestScalarFieldEnum]


  export const SecurityAgentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lat: 'lat',
    lng: 'lng',
    userId: 'userId',
    lastUpdated: 'lastUpdated',
    status: 'status'
  };

  export type SecurityAgentScalarFieldEnum = (typeof SecurityAgentScalarFieldEnum)[keyof typeof SecurityAgentScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    createdAt: 'createdAt',
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const CallLogScalarFieldEnum: {
    id: 'id',
    callerId: 'callerId',
    receiverId: 'receiverId',
    callType: 'callType',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type CallLogScalarFieldEnum = (typeof CallLogScalarFieldEnum)[keyof typeof CallLogScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EmergencyStatus'
   */
  export type EnumEmergencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmergencyStatus'>
    


  /**
   * Reference to a field of type 'EmergencyStatus[]'
   */
  export type ListEnumEmergencyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmergencyStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SecurityStatus'
   */
  export type EnumSecurityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityStatus'>
    


  /**
   * Reference to a field of type 'SecurityStatus[]'
   */
  export type ListEnumSecurityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SecurityStatus[]'>
    


  /**
   * Reference to a field of type 'CallType'
   */
  export type EnumCallTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallType'>
    


  /**
   * Reference to a field of type 'CallType[]'
   */
  export type ListEnumCallTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isOnline?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emergencies?: EmergencyRequestListRelationFilter
    securityAgent?: XOR<SecurityAgentNullableScalarRelationFilter, SecurityAgentWhereInput> | null
    messagesSent?: MessageListRelationFilter
    messagesRecv?: MessageListRelationFilter
    callsMade?: CallLogListRelationFilter
    callsReceived?: CallLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emergencies?: EmergencyRequestOrderByRelationAggregateInput
    securityAgent?: SecurityAgentOrderByWithRelationInput
    messagesSent?: MessageOrderByRelationAggregateInput
    messagesRecv?: MessageOrderByRelationAggregateInput
    callsMade?: CallLogOrderByRelationAggregateInput
    callsReceived?: CallLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isOnline?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emergencies?: EmergencyRequestListRelationFilter
    securityAgent?: XOR<SecurityAgentNullableScalarRelationFilter, SecurityAgentWhereInput> | null
    messagesSent?: MessageListRelationFilter
    messagesRecv?: MessageListRelationFilter
    callsMade?: CallLogListRelationFilter
    callsReceived?: CallLogListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isOnline?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmergencyRequestWhereInput = {
    AND?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    OR?: EmergencyRequestWhereInput[]
    NOT?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    id?: StringFilter<"EmergencyRequest"> | string
    type?: StringFilter<"EmergencyRequest"> | string
    userId?: StringFilter<"EmergencyRequest"> | string
    status?: EnumEmergencyStatusFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    lat?: FloatFilter<"EmergencyRequest"> | number
    lng?: FloatFilter<"EmergencyRequest"> | number
    description?: StringNullableFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    securityId?: StringNullableFilter<"EmergencyRequest"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<SecurityAgentNullableScalarRelationFilter, SecurityAgentWhereInput> | null
  }

  export type EmergencyRequestOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    securityId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    assignedTo?: SecurityAgentOrderByWithRelationInput
  }

  export type EmergencyRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    OR?: EmergencyRequestWhereInput[]
    NOT?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    type?: StringFilter<"EmergencyRequest"> | string
    userId?: StringFilter<"EmergencyRequest"> | string
    status?: EnumEmergencyStatusFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    lat?: FloatFilter<"EmergencyRequest"> | number
    lng?: FloatFilter<"EmergencyRequest"> | number
    description?: StringNullableFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    securityId?: StringNullableFilter<"EmergencyRequest"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<SecurityAgentNullableScalarRelationFilter, SecurityAgentWhereInput> | null
  }, "id">

  export type EmergencyRequestOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    securityId?: SortOrderInput | SortOrder
    _count?: EmergencyRequestCountOrderByAggregateInput
    _avg?: EmergencyRequestAvgOrderByAggregateInput
    _max?: EmergencyRequestMaxOrderByAggregateInput
    _min?: EmergencyRequestMinOrderByAggregateInput
    _sum?: EmergencyRequestSumOrderByAggregateInput
  }

  export type EmergencyRequestScalarWhereWithAggregatesInput = {
    AND?: EmergencyRequestScalarWhereWithAggregatesInput | EmergencyRequestScalarWhereWithAggregatesInput[]
    OR?: EmergencyRequestScalarWhereWithAggregatesInput[]
    NOT?: EmergencyRequestScalarWhereWithAggregatesInput | EmergencyRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyRequest"> | string
    type?: StringWithAggregatesFilter<"EmergencyRequest"> | string
    userId?: StringWithAggregatesFilter<"EmergencyRequest"> | string
    status?: EnumEmergencyStatusWithAggregatesFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    lat?: FloatWithAggregatesFilter<"EmergencyRequest"> | number
    lng?: FloatWithAggregatesFilter<"EmergencyRequest"> | number
    description?: StringNullableWithAggregatesFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyRequest"> | Date | string
    securityId?: StringNullableWithAggregatesFilter<"EmergencyRequest"> | string | null
  }

  export type SecurityAgentWhereInput = {
    AND?: SecurityAgentWhereInput | SecurityAgentWhereInput[]
    OR?: SecurityAgentWhereInput[]
    NOT?: SecurityAgentWhereInput | SecurityAgentWhereInput[]
    id?: StringFilter<"SecurityAgent"> | string
    name?: StringFilter<"SecurityAgent"> | string
    lat?: FloatFilter<"SecurityAgent"> | number
    lng?: FloatFilter<"SecurityAgent"> | number
    userId?: StringFilter<"SecurityAgent"> | string
    lastUpdated?: DateTimeFilter<"SecurityAgent"> | Date | string
    status?: EnumSecurityStatusFilter<"SecurityAgent"> | $Enums.SecurityStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedEmergencies?: EmergencyRequestListRelationFilter
  }

  export type SecurityAgentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    userId?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    assignedEmergencies?: EmergencyRequestOrderByRelationAggregateInput
  }

  export type SecurityAgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SecurityAgentWhereInput | SecurityAgentWhereInput[]
    OR?: SecurityAgentWhereInput[]
    NOT?: SecurityAgentWhereInput | SecurityAgentWhereInput[]
    name?: StringFilter<"SecurityAgent"> | string
    lat?: FloatFilter<"SecurityAgent"> | number
    lng?: FloatFilter<"SecurityAgent"> | number
    lastUpdated?: DateTimeFilter<"SecurityAgent"> | Date | string
    status?: EnumSecurityStatusFilter<"SecurityAgent"> | $Enums.SecurityStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedEmergencies?: EmergencyRequestListRelationFilter
  }, "id" | "userId">

  export type SecurityAgentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    userId?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    _count?: SecurityAgentCountOrderByAggregateInput
    _avg?: SecurityAgentAvgOrderByAggregateInput
    _max?: SecurityAgentMaxOrderByAggregateInput
    _min?: SecurityAgentMinOrderByAggregateInput
    _sum?: SecurityAgentSumOrderByAggregateInput
  }

  export type SecurityAgentScalarWhereWithAggregatesInput = {
    AND?: SecurityAgentScalarWhereWithAggregatesInput | SecurityAgentScalarWhereWithAggregatesInput[]
    OR?: SecurityAgentScalarWhereWithAggregatesInput[]
    NOT?: SecurityAgentScalarWhereWithAggregatesInput | SecurityAgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityAgent"> | string
    name?: StringWithAggregatesFilter<"SecurityAgent"> | string
    lat?: FloatWithAggregatesFilter<"SecurityAgent"> | number
    lng?: FloatWithAggregatesFilter<"SecurityAgent"> | number
    userId?: StringWithAggregatesFilter<"SecurityAgent"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"SecurityAgent"> | Date | string
    status?: EnumSecurityStatusWithAggregatesFilter<"SecurityAgent"> | $Enums.SecurityStatus
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    type?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    type?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    type?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type CallLogWhereInput = {
    AND?: CallLogWhereInput | CallLogWhereInput[]
    OR?: CallLogWhereInput[]
    NOT?: CallLogWhereInput | CallLogWhereInput[]
    id?: StringFilter<"CallLog"> | string
    callerId?: StringFilter<"CallLog"> | string
    receiverId?: StringFilter<"CallLog"> | string
    callType?: EnumCallTypeFilter<"CallLog"> | $Enums.CallType
    startedAt?: DateTimeFilter<"CallLog"> | Date | string
    endedAt?: DateTimeNullableFilter<"CallLog"> | Date | string | null
    caller?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CallLogOrderByWithRelationInput = {
    id?: SortOrder
    callerId?: SortOrder
    receiverId?: SortOrder
    callType?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    caller?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type CallLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CallLogWhereInput | CallLogWhereInput[]
    OR?: CallLogWhereInput[]
    NOT?: CallLogWhereInput | CallLogWhereInput[]
    callerId?: StringFilter<"CallLog"> | string
    receiverId?: StringFilter<"CallLog"> | string
    callType?: EnumCallTypeFilter<"CallLog"> | $Enums.CallType
    startedAt?: DateTimeFilter<"CallLog"> | Date | string
    endedAt?: DateTimeNullableFilter<"CallLog"> | Date | string | null
    caller?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CallLogOrderByWithAggregationInput = {
    id?: SortOrder
    callerId?: SortOrder
    receiverId?: SortOrder
    callType?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: CallLogCountOrderByAggregateInput
    _max?: CallLogMaxOrderByAggregateInput
    _min?: CallLogMinOrderByAggregateInput
  }

  export type CallLogScalarWhereWithAggregatesInput = {
    AND?: CallLogScalarWhereWithAggregatesInput | CallLogScalarWhereWithAggregatesInput[]
    OR?: CallLogScalarWhereWithAggregatesInput[]
    NOT?: CallLogScalarWhereWithAggregatesInput | CallLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CallLog"> | string
    callerId?: StringWithAggregatesFilter<"CallLog"> | string
    receiverId?: StringWithAggregatesFilter<"CallLog"> | string
    callType?: EnumCallTypeWithAggregatesFilter<"CallLog"> | $Enums.CallType
    startedAt?: DateTimeWithAggregatesFilter<"CallLog"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"CallLog"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestUncheckedCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogUncheckedCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUncheckedUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUncheckedUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestCreateInput = {
    id?: string
    type: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmergenciesInput
    assignedTo?: SecurityAgentCreateNestedOneWithoutAssignedEmergenciesInput
  }

  export type EmergencyRequestUncheckedCreateInput = {
    id?: string
    type: string
    userId: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
    securityId?: string | null
  }

  export type EmergencyRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmergenciesNestedInput
    assignedTo?: SecurityAgentUpdateOneWithoutAssignedEmergenciesNestedInput
  }

  export type EmergencyRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyRequestCreateManyInput = {
    id?: string
    type: string
    userId: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
    securityId?: string | null
  }

  export type EmergencyRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityAgentCreateInput = {
    id?: string
    name: string
    lat: number
    lng: number
    lastUpdated?: Date | string
    status?: $Enums.SecurityStatus
    user: UserCreateNestedOneWithoutSecurityAgentInput
    assignedEmergencies?: EmergencyRequestCreateNestedManyWithoutAssignedToInput
  }

  export type SecurityAgentUncheckedCreateInput = {
    id?: string
    name: string
    lat: number
    lng: number
    userId: string
    lastUpdated?: Date | string
    status?: $Enums.SecurityStatus
    assignedEmergencies?: EmergencyRequestUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type SecurityAgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSecurityStatusFieldUpdateOperationsInput | $Enums.SecurityStatus
    user?: UserUpdateOneRequiredWithoutSecurityAgentNestedInput
    assignedEmergencies?: EmergencyRequestUpdateManyWithoutAssignedToNestedInput
  }

  export type SecurityAgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSecurityStatusFieldUpdateOperationsInput | $Enums.SecurityStatus
    assignedEmergencies?: EmergencyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type SecurityAgentCreateManyInput = {
    id?: string
    name: string
    lat: number
    lng: number
    userId: string
    lastUpdated?: Date | string
    status?: $Enums.SecurityStatus
  }

  export type SecurityAgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSecurityStatusFieldUpdateOperationsInput | $Enums.SecurityStatus
  }

  export type SecurityAgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSecurityStatusFieldUpdateOperationsInput | $Enums.SecurityStatus
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
    receiver: UserCreateNestedOneWithoutMessagesRecvInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    senderId: string
    receiverId: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    receiver?: UserUpdateOneRequiredWithoutMessagesRecvNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    senderId: string
    receiverId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type CallLogCreateInput = {
    id?: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
    caller: UserCreateNestedOneWithoutCallsMadeInput
    receiver: UserCreateNestedOneWithoutCallsReceivedInput
  }

  export type CallLogUncheckedCreateInput = {
    id?: string
    callerId: string
    receiverId: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CallLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caller?: UserUpdateOneRequiredWithoutCallsMadeNestedInput
    receiver?: UserUpdateOneRequiredWithoutCallsReceivedNestedInput
  }

  export type CallLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    callerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CallLogCreateManyInput = {
    id?: string
    callerId: string
    receiverId: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CallLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CallLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    callerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EmergencyRequestListRelationFilter = {
    every?: EmergencyRequestWhereInput
    some?: EmergencyRequestWhereInput
    none?: EmergencyRequestWhereInput
  }

  export type SecurityAgentNullableScalarRelationFilter = {
    is?: SecurityAgentWhereInput | null
    isNot?: SecurityAgentWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type CallLogListRelationFilter = {
    every?: CallLogWhereInput
    some?: CallLogWhereInput
    none?: CallLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmergencyRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CallLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isOnline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumEmergencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusFilter<$PrismaModel> | $Enums.EmergencyStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmergencyRequestCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    securityId?: SortOrder
  }

  export type EmergencyRequestAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type EmergencyRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    securityId?: SortOrder
  }

  export type EmergencyRequestMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    securityId?: SortOrder
  }

  export type EmergencyRequestSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type EnumEmergencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmergencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmergencyStatusFilter<$PrismaModel>
    _max?: NestedEnumEmergencyStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumSecurityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityStatus | EnumSecurityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityStatus[] | ListEnumSecurityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityStatus[] | ListEnumSecurityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityStatusFilter<$PrismaModel> | $Enums.SecurityStatus
  }

  export type SecurityAgentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    userId?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
  }

  export type SecurityAgentAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type SecurityAgentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    userId?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
  }

  export type SecurityAgentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    userId?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
  }

  export type SecurityAgentSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type EnumSecurityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityStatus | EnumSecurityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityStatus[] | ListEnumSecurityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityStatus[] | ListEnumSecurityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityStatusWithAggregatesFilter<$PrismaModel> | $Enums.SecurityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityStatusFilter<$PrismaModel>
    _max?: NestedEnumSecurityStatusFilter<$PrismaModel>
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type EnumCallTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CallType | EnumCallTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CallType[] | ListEnumCallTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallType[] | ListEnumCallTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCallTypeFilter<$PrismaModel> | $Enums.CallType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CallLogCountOrderByAggregateInput = {
    id?: SortOrder
    callerId?: SortOrder
    receiverId?: SortOrder
    callType?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type CallLogMaxOrderByAggregateInput = {
    id?: SortOrder
    callerId?: SortOrder
    receiverId?: SortOrder
    callType?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type CallLogMinOrderByAggregateInput = {
    id?: SortOrder
    callerId?: SortOrder
    receiverId?: SortOrder
    callType?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type EnumCallTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallType | EnumCallTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CallType[] | ListEnumCallTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallType[] | ListEnumCallTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCallTypeWithAggregatesFilter<$PrismaModel> | $Enums.CallType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallTypeFilter<$PrismaModel>
    _max?: NestedEnumCallTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmergencyRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyRequestCreateWithoutUserInput, EmergencyRequestUncheckedCreateWithoutUserInput> | EmergencyRequestCreateWithoutUserInput[] | EmergencyRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutUserInput | EmergencyRequestCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyRequestCreateManyUserInputEnvelope
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
  }

  export type SecurityAgentCreateNestedOneWithoutUserInput = {
    create?: XOR<SecurityAgentCreateWithoutUserInput, SecurityAgentUncheckedCreateWithoutUserInput>
    connectOrCreate?: SecurityAgentCreateOrConnectWithoutUserInput
    connect?: SecurityAgentWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CallLogCreateNestedManyWithoutCallerInput = {
    create?: XOR<CallLogCreateWithoutCallerInput, CallLogUncheckedCreateWithoutCallerInput> | CallLogCreateWithoutCallerInput[] | CallLogUncheckedCreateWithoutCallerInput[]
    connectOrCreate?: CallLogCreateOrConnectWithoutCallerInput | CallLogCreateOrConnectWithoutCallerInput[]
    createMany?: CallLogCreateManyCallerInputEnvelope
    connect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
  }

  export type CallLogCreateNestedManyWithoutReceiverInput = {
    create?: XOR<CallLogCreateWithoutReceiverInput, CallLogUncheckedCreateWithoutReceiverInput> | CallLogCreateWithoutReceiverInput[] | CallLogUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: CallLogCreateOrConnectWithoutReceiverInput | CallLogCreateOrConnectWithoutReceiverInput[]
    createMany?: CallLogCreateManyReceiverInputEnvelope
    connect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
  }

  export type EmergencyRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyRequestCreateWithoutUserInput, EmergencyRequestUncheckedCreateWithoutUserInput> | EmergencyRequestCreateWithoutUserInput[] | EmergencyRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutUserInput | EmergencyRequestCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyRequestCreateManyUserInputEnvelope
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
  }

  export type SecurityAgentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SecurityAgentCreateWithoutUserInput, SecurityAgentUncheckedCreateWithoutUserInput>
    connectOrCreate?: SecurityAgentCreateOrConnectWithoutUserInput
    connect?: SecurityAgentWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CallLogUncheckedCreateNestedManyWithoutCallerInput = {
    create?: XOR<CallLogCreateWithoutCallerInput, CallLogUncheckedCreateWithoutCallerInput> | CallLogCreateWithoutCallerInput[] | CallLogUncheckedCreateWithoutCallerInput[]
    connectOrCreate?: CallLogCreateOrConnectWithoutCallerInput | CallLogCreateOrConnectWithoutCallerInput[]
    createMany?: CallLogCreateManyCallerInputEnvelope
    connect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
  }

  export type CallLogUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<CallLogCreateWithoutReceiverInput, CallLogUncheckedCreateWithoutReceiverInput> | CallLogCreateWithoutReceiverInput[] | CallLogUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: CallLogCreateOrConnectWithoutReceiverInput | CallLogCreateOrConnectWithoutReceiverInput[]
    createMany?: CallLogCreateManyReceiverInputEnvelope
    connect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmergencyRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutUserInput, EmergencyRequestUncheckedCreateWithoutUserInput> | EmergencyRequestCreateWithoutUserInput[] | EmergencyRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutUserInput | EmergencyRequestCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyRequestUpsertWithWhereUniqueWithoutUserInput | EmergencyRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyRequestCreateManyUserInputEnvelope
    set?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    disconnect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    delete?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    update?: EmergencyRequestUpdateWithWhereUniqueWithoutUserInput | EmergencyRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyRequestUpdateManyWithWhereWithoutUserInput | EmergencyRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
  }

  export type SecurityAgentUpdateOneWithoutUserNestedInput = {
    create?: XOR<SecurityAgentCreateWithoutUserInput, SecurityAgentUncheckedCreateWithoutUserInput>
    connectOrCreate?: SecurityAgentCreateOrConnectWithoutUserInput
    upsert?: SecurityAgentUpsertWithoutUserInput
    disconnect?: SecurityAgentWhereInput | boolean
    delete?: SecurityAgentWhereInput | boolean
    connect?: SecurityAgentWhereUniqueInput
    update?: XOR<XOR<SecurityAgentUpdateToOneWithWhereWithoutUserInput, SecurityAgentUpdateWithoutUserInput>, SecurityAgentUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CallLogUpdateManyWithoutCallerNestedInput = {
    create?: XOR<CallLogCreateWithoutCallerInput, CallLogUncheckedCreateWithoutCallerInput> | CallLogCreateWithoutCallerInput[] | CallLogUncheckedCreateWithoutCallerInput[]
    connectOrCreate?: CallLogCreateOrConnectWithoutCallerInput | CallLogCreateOrConnectWithoutCallerInput[]
    upsert?: CallLogUpsertWithWhereUniqueWithoutCallerInput | CallLogUpsertWithWhereUniqueWithoutCallerInput[]
    createMany?: CallLogCreateManyCallerInputEnvelope
    set?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    disconnect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    delete?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    connect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    update?: CallLogUpdateWithWhereUniqueWithoutCallerInput | CallLogUpdateWithWhereUniqueWithoutCallerInput[]
    updateMany?: CallLogUpdateManyWithWhereWithoutCallerInput | CallLogUpdateManyWithWhereWithoutCallerInput[]
    deleteMany?: CallLogScalarWhereInput | CallLogScalarWhereInput[]
  }

  export type CallLogUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<CallLogCreateWithoutReceiverInput, CallLogUncheckedCreateWithoutReceiverInput> | CallLogCreateWithoutReceiverInput[] | CallLogUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: CallLogCreateOrConnectWithoutReceiverInput | CallLogCreateOrConnectWithoutReceiverInput[]
    upsert?: CallLogUpsertWithWhereUniqueWithoutReceiverInput | CallLogUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: CallLogCreateManyReceiverInputEnvelope
    set?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    disconnect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    delete?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    connect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    update?: CallLogUpdateWithWhereUniqueWithoutReceiverInput | CallLogUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: CallLogUpdateManyWithWhereWithoutReceiverInput | CallLogUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: CallLogScalarWhereInput | CallLogScalarWhereInput[]
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutUserInput, EmergencyRequestUncheckedCreateWithoutUserInput> | EmergencyRequestCreateWithoutUserInput[] | EmergencyRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutUserInput | EmergencyRequestCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyRequestUpsertWithWhereUniqueWithoutUserInput | EmergencyRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyRequestCreateManyUserInputEnvelope
    set?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    disconnect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    delete?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    update?: EmergencyRequestUpdateWithWhereUniqueWithoutUserInput | EmergencyRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyRequestUpdateManyWithWhereWithoutUserInput | EmergencyRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
  }

  export type SecurityAgentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SecurityAgentCreateWithoutUserInput, SecurityAgentUncheckedCreateWithoutUserInput>
    connectOrCreate?: SecurityAgentCreateOrConnectWithoutUserInput
    upsert?: SecurityAgentUpsertWithoutUserInput
    disconnect?: SecurityAgentWhereInput | boolean
    delete?: SecurityAgentWhereInput | boolean
    connect?: SecurityAgentWhereUniqueInput
    update?: XOR<XOR<SecurityAgentUpdateToOneWithWhereWithoutUserInput, SecurityAgentUpdateWithoutUserInput>, SecurityAgentUncheckedUpdateWithoutUserInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CallLogUncheckedUpdateManyWithoutCallerNestedInput = {
    create?: XOR<CallLogCreateWithoutCallerInput, CallLogUncheckedCreateWithoutCallerInput> | CallLogCreateWithoutCallerInput[] | CallLogUncheckedCreateWithoutCallerInput[]
    connectOrCreate?: CallLogCreateOrConnectWithoutCallerInput | CallLogCreateOrConnectWithoutCallerInput[]
    upsert?: CallLogUpsertWithWhereUniqueWithoutCallerInput | CallLogUpsertWithWhereUniqueWithoutCallerInput[]
    createMany?: CallLogCreateManyCallerInputEnvelope
    set?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    disconnect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    delete?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    connect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    update?: CallLogUpdateWithWhereUniqueWithoutCallerInput | CallLogUpdateWithWhereUniqueWithoutCallerInput[]
    updateMany?: CallLogUpdateManyWithWhereWithoutCallerInput | CallLogUpdateManyWithWhereWithoutCallerInput[]
    deleteMany?: CallLogScalarWhereInput | CallLogScalarWhereInput[]
  }

  export type CallLogUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<CallLogCreateWithoutReceiverInput, CallLogUncheckedCreateWithoutReceiverInput> | CallLogCreateWithoutReceiverInput[] | CallLogUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: CallLogCreateOrConnectWithoutReceiverInput | CallLogCreateOrConnectWithoutReceiverInput[]
    upsert?: CallLogUpsertWithWhereUniqueWithoutReceiverInput | CallLogUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: CallLogCreateManyReceiverInputEnvelope
    set?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    disconnect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    delete?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    connect?: CallLogWhereUniqueInput | CallLogWhereUniqueInput[]
    update?: CallLogUpdateWithWhereUniqueWithoutReceiverInput | CallLogUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: CallLogUpdateManyWithWhereWithoutReceiverInput | CallLogUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: CallLogScalarWhereInput | CallLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmergenciesInput = {
    create?: XOR<UserCreateWithoutEmergenciesInput, UserUncheckedCreateWithoutEmergenciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergenciesInput
    connect?: UserWhereUniqueInput
  }

  export type SecurityAgentCreateNestedOneWithoutAssignedEmergenciesInput = {
    create?: XOR<SecurityAgentCreateWithoutAssignedEmergenciesInput, SecurityAgentUncheckedCreateWithoutAssignedEmergenciesInput>
    connectOrCreate?: SecurityAgentCreateOrConnectWithoutAssignedEmergenciesInput
    connect?: SecurityAgentWhereUniqueInput
  }

  export type EnumEmergencyStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmergencyStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEmergenciesNestedInput = {
    create?: XOR<UserCreateWithoutEmergenciesInput, UserUncheckedCreateWithoutEmergenciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergenciesInput
    upsert?: UserUpsertWithoutEmergenciesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmergenciesInput, UserUpdateWithoutEmergenciesInput>, UserUncheckedUpdateWithoutEmergenciesInput>
  }

  export type SecurityAgentUpdateOneWithoutAssignedEmergenciesNestedInput = {
    create?: XOR<SecurityAgentCreateWithoutAssignedEmergenciesInput, SecurityAgentUncheckedCreateWithoutAssignedEmergenciesInput>
    connectOrCreate?: SecurityAgentCreateOrConnectWithoutAssignedEmergenciesInput
    upsert?: SecurityAgentUpsertWithoutAssignedEmergenciesInput
    disconnect?: SecurityAgentWhereInput | boolean
    delete?: SecurityAgentWhereInput | boolean
    connect?: SecurityAgentWhereUniqueInput
    update?: XOR<XOR<SecurityAgentUpdateToOneWithWhereWithoutAssignedEmergenciesInput, SecurityAgentUpdateWithoutAssignedEmergenciesInput>, SecurityAgentUncheckedUpdateWithoutAssignedEmergenciesInput>
  }

  export type UserCreateNestedOneWithoutSecurityAgentInput = {
    create?: XOR<UserCreateWithoutSecurityAgentInput, UserUncheckedCreateWithoutSecurityAgentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityAgentInput
    connect?: UserWhereUniqueInput
  }

  export type EmergencyRequestCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput> | EmergencyRequestCreateWithoutAssignedToInput[] | EmergencyRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutAssignedToInput | EmergencyRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: EmergencyRequestCreateManyAssignedToInputEnvelope
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
  }

  export type EmergencyRequestUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput> | EmergencyRequestCreateWithoutAssignedToInput[] | EmergencyRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutAssignedToInput | EmergencyRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: EmergencyRequestCreateManyAssignedToInputEnvelope
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
  }

  export type EnumSecurityStatusFieldUpdateOperationsInput = {
    set?: $Enums.SecurityStatus
  }

  export type UserUpdateOneRequiredWithoutSecurityAgentNestedInput = {
    create?: XOR<UserCreateWithoutSecurityAgentInput, UserUncheckedCreateWithoutSecurityAgentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityAgentInput
    upsert?: UserUpsertWithoutSecurityAgentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecurityAgentInput, UserUpdateWithoutSecurityAgentInput>, UserUncheckedUpdateWithoutSecurityAgentInput>
  }

  export type EmergencyRequestUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput> | EmergencyRequestCreateWithoutAssignedToInput[] | EmergencyRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutAssignedToInput | EmergencyRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput | EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: EmergencyRequestCreateManyAssignedToInputEnvelope
    set?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    disconnect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    delete?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    update?: EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput | EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput | EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput> | EmergencyRequestCreateWithoutAssignedToInput[] | EmergencyRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: EmergencyRequestCreateOrConnectWithoutAssignedToInput | EmergencyRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput | EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: EmergencyRequestCreateManyAssignedToInputEnvelope
    set?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    disconnect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    delete?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    connect?: EmergencyRequestWhereUniqueInput | EmergencyRequestWhereUniqueInput[]
    update?: EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput | EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput | EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesRecvInput = {
    create?: XOR<UserCreateWithoutMessagesRecvInput, UserUncheckedCreateWithoutMessagesRecvInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesRecvInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesRecvNestedInput = {
    create?: XOR<UserCreateWithoutMessagesRecvInput, UserUncheckedCreateWithoutMessagesRecvInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesRecvInput
    upsert?: UserUpsertWithoutMessagesRecvInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesRecvInput, UserUpdateWithoutMessagesRecvInput>, UserUncheckedUpdateWithoutMessagesRecvInput>
  }

  export type UserCreateNestedOneWithoutCallsMadeInput = {
    create?: XOR<UserCreateWithoutCallsMadeInput, UserUncheckedCreateWithoutCallsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutCallsMadeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCallsReceivedInput = {
    create?: XOR<UserCreateWithoutCallsReceivedInput, UserUncheckedCreateWithoutCallsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCallsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCallTypeFieldUpdateOperationsInput = {
    set?: $Enums.CallType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCallsMadeNestedInput = {
    create?: XOR<UserCreateWithoutCallsMadeInput, UserUncheckedCreateWithoutCallsMadeInput>
    connectOrCreate?: UserCreateOrConnectWithoutCallsMadeInput
    upsert?: UserUpsertWithoutCallsMadeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCallsMadeInput, UserUpdateWithoutCallsMadeInput>, UserUncheckedUpdateWithoutCallsMadeInput>
  }

  export type UserUpdateOneRequiredWithoutCallsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutCallsReceivedInput, UserUncheckedCreateWithoutCallsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCallsReceivedInput
    upsert?: UserUpsertWithoutCallsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCallsReceivedInput, UserUpdateWithoutCallsReceivedInput>, UserUncheckedUpdateWithoutCallsReceivedInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumEmergencyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusFilter<$PrismaModel> | $Enums.EmergencyStatus
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

  export type NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmergencyStatus | EnumEmergencyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmergencyStatus[] | ListEnumEmergencyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmergencyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmergencyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmergencyStatusFilter<$PrismaModel>
    _max?: NestedEnumEmergencyStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumSecurityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityStatus | EnumSecurityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityStatus[] | ListEnumSecurityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityStatus[] | ListEnumSecurityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityStatusFilter<$PrismaModel> | $Enums.SecurityStatus
  }

  export type NestedEnumSecurityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SecurityStatus | EnumSecurityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SecurityStatus[] | ListEnumSecurityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SecurityStatus[] | ListEnumSecurityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSecurityStatusWithAggregatesFilter<$PrismaModel> | $Enums.SecurityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSecurityStatusFilter<$PrismaModel>
    _max?: NestedEnumSecurityStatusFilter<$PrismaModel>
  }

  export type NestedEnumCallTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CallType | EnumCallTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CallType[] | ListEnumCallTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallType[] | ListEnumCallTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCallTypeFilter<$PrismaModel> | $Enums.CallType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCallTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallType | EnumCallTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CallType[] | ListEnumCallTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallType[] | ListEnumCallTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCallTypeWithAggregatesFilter<$PrismaModel> | $Enums.CallType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallTypeFilter<$PrismaModel>
    _max?: NestedEnumCallTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmergencyRequestCreateWithoutUserInput = {
    id?: string
    type: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
    assignedTo?: SecurityAgentCreateNestedOneWithoutAssignedEmergenciesInput
  }

  export type EmergencyRequestUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
    securityId?: string | null
  }

  export type EmergencyRequestCreateOrConnectWithoutUserInput = {
    where: EmergencyRequestWhereUniqueInput
    create: XOR<EmergencyRequestCreateWithoutUserInput, EmergencyRequestUncheckedCreateWithoutUserInput>
  }

  export type EmergencyRequestCreateManyUserInputEnvelope = {
    data: EmergencyRequestCreateManyUserInput | EmergencyRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SecurityAgentCreateWithoutUserInput = {
    id?: string
    name: string
    lat: number
    lng: number
    lastUpdated?: Date | string
    status?: $Enums.SecurityStatus
    assignedEmergencies?: EmergencyRequestCreateNestedManyWithoutAssignedToInput
  }

  export type SecurityAgentUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    lat: number
    lng: number
    lastUpdated?: Date | string
    status?: $Enums.SecurityStatus
    assignedEmergencies?: EmergencyRequestUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type SecurityAgentCreateOrConnectWithoutUserInput = {
    where: SecurityAgentWhereUniqueInput
    create: XOR<SecurityAgentCreateWithoutUserInput, SecurityAgentUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutMessagesRecvInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    receiverId: string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesSentInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    senderId: string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type CallLogCreateWithoutCallerInput = {
    id?: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
    receiver: UserCreateNestedOneWithoutCallsReceivedInput
  }

  export type CallLogUncheckedCreateWithoutCallerInput = {
    id?: string
    receiverId: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CallLogCreateOrConnectWithoutCallerInput = {
    where: CallLogWhereUniqueInput
    create: XOR<CallLogCreateWithoutCallerInput, CallLogUncheckedCreateWithoutCallerInput>
  }

  export type CallLogCreateManyCallerInputEnvelope = {
    data: CallLogCreateManyCallerInput | CallLogCreateManyCallerInput[]
    skipDuplicates?: boolean
  }

  export type CallLogCreateWithoutReceiverInput = {
    id?: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
    caller: UserCreateNestedOneWithoutCallsMadeInput
  }

  export type CallLogUncheckedCreateWithoutReceiverInput = {
    id?: string
    callerId: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CallLogCreateOrConnectWithoutReceiverInput = {
    where: CallLogWhereUniqueInput
    create: XOR<CallLogCreateWithoutReceiverInput, CallLogUncheckedCreateWithoutReceiverInput>
  }

  export type CallLogCreateManyReceiverInputEnvelope = {
    data: CallLogCreateManyReceiverInput | CallLogCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type EmergencyRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: EmergencyRequestWhereUniqueInput
    update: XOR<EmergencyRequestUpdateWithoutUserInput, EmergencyRequestUncheckedUpdateWithoutUserInput>
    create: XOR<EmergencyRequestCreateWithoutUserInput, EmergencyRequestUncheckedCreateWithoutUserInput>
  }

  export type EmergencyRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: EmergencyRequestWhereUniqueInput
    data: XOR<EmergencyRequestUpdateWithoutUserInput, EmergencyRequestUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyRequestUpdateManyWithWhereWithoutUserInput = {
    where: EmergencyRequestScalarWhereInput
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type EmergencyRequestScalarWhereInput = {
    AND?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
    OR?: EmergencyRequestScalarWhereInput[]
    NOT?: EmergencyRequestScalarWhereInput | EmergencyRequestScalarWhereInput[]
    id?: StringFilter<"EmergencyRequest"> | string
    type?: StringFilter<"EmergencyRequest"> | string
    userId?: StringFilter<"EmergencyRequest"> | string
    status?: EnumEmergencyStatusFilter<"EmergencyRequest"> | $Enums.EmergencyStatus
    lat?: FloatFilter<"EmergencyRequest"> | number
    lng?: FloatFilter<"EmergencyRequest"> | number
    description?: StringNullableFilter<"EmergencyRequest"> | string | null
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    securityId?: StringNullableFilter<"EmergencyRequest"> | string | null
  }

  export type SecurityAgentUpsertWithoutUserInput = {
    update: XOR<SecurityAgentUpdateWithoutUserInput, SecurityAgentUncheckedUpdateWithoutUserInput>
    create: XOR<SecurityAgentCreateWithoutUserInput, SecurityAgentUncheckedCreateWithoutUserInput>
    where?: SecurityAgentWhereInput
  }

  export type SecurityAgentUpdateToOneWithWhereWithoutUserInput = {
    where?: SecurityAgentWhereInput
    data: XOR<SecurityAgentUpdateWithoutUserInput, SecurityAgentUncheckedUpdateWithoutUserInput>
  }

  export type SecurityAgentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSecurityStatusFieldUpdateOperationsInput | $Enums.SecurityStatus
    assignedEmergencies?: EmergencyRequestUpdateManyWithoutAssignedToNestedInput
  }

  export type SecurityAgentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSecurityStatusFieldUpdateOperationsInput | $Enums.SecurityStatus
    assignedEmergencies?: EmergencyRequestUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    type?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type CallLogUpsertWithWhereUniqueWithoutCallerInput = {
    where: CallLogWhereUniqueInput
    update: XOR<CallLogUpdateWithoutCallerInput, CallLogUncheckedUpdateWithoutCallerInput>
    create: XOR<CallLogCreateWithoutCallerInput, CallLogUncheckedCreateWithoutCallerInput>
  }

  export type CallLogUpdateWithWhereUniqueWithoutCallerInput = {
    where: CallLogWhereUniqueInput
    data: XOR<CallLogUpdateWithoutCallerInput, CallLogUncheckedUpdateWithoutCallerInput>
  }

  export type CallLogUpdateManyWithWhereWithoutCallerInput = {
    where: CallLogScalarWhereInput
    data: XOR<CallLogUpdateManyMutationInput, CallLogUncheckedUpdateManyWithoutCallerInput>
  }

  export type CallLogScalarWhereInput = {
    AND?: CallLogScalarWhereInput | CallLogScalarWhereInput[]
    OR?: CallLogScalarWhereInput[]
    NOT?: CallLogScalarWhereInput | CallLogScalarWhereInput[]
    id?: StringFilter<"CallLog"> | string
    callerId?: StringFilter<"CallLog"> | string
    receiverId?: StringFilter<"CallLog"> | string
    callType?: EnumCallTypeFilter<"CallLog"> | $Enums.CallType
    startedAt?: DateTimeFilter<"CallLog"> | Date | string
    endedAt?: DateTimeNullableFilter<"CallLog"> | Date | string | null
  }

  export type CallLogUpsertWithWhereUniqueWithoutReceiverInput = {
    where: CallLogWhereUniqueInput
    update: XOR<CallLogUpdateWithoutReceiverInput, CallLogUncheckedUpdateWithoutReceiverInput>
    create: XOR<CallLogCreateWithoutReceiverInput, CallLogUncheckedCreateWithoutReceiverInput>
  }

  export type CallLogUpdateWithWhereUniqueWithoutReceiverInput = {
    where: CallLogWhereUniqueInput
    data: XOR<CallLogUpdateWithoutReceiverInput, CallLogUncheckedUpdateWithoutReceiverInput>
  }

  export type CallLogUpdateManyWithWhereWithoutReceiverInput = {
    where: CallLogScalarWhereInput
    data: XOR<CallLogUpdateManyMutationInput, CallLogUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutEmergenciesInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    securityAgent?: SecurityAgentCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutEmergenciesInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    securityAgent?: SecurityAgentUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogUncheckedCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutEmergenciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmergenciesInput, UserUncheckedCreateWithoutEmergenciesInput>
  }

  export type SecurityAgentCreateWithoutAssignedEmergenciesInput = {
    id?: string
    name: string
    lat: number
    lng: number
    lastUpdated?: Date | string
    status?: $Enums.SecurityStatus
    user: UserCreateNestedOneWithoutSecurityAgentInput
  }

  export type SecurityAgentUncheckedCreateWithoutAssignedEmergenciesInput = {
    id?: string
    name: string
    lat: number
    lng: number
    userId: string
    lastUpdated?: Date | string
    status?: $Enums.SecurityStatus
  }

  export type SecurityAgentCreateOrConnectWithoutAssignedEmergenciesInput = {
    where: SecurityAgentWhereUniqueInput
    create: XOR<SecurityAgentCreateWithoutAssignedEmergenciesInput, SecurityAgentUncheckedCreateWithoutAssignedEmergenciesInput>
  }

  export type UserUpsertWithoutEmergenciesInput = {
    update: XOR<UserUpdateWithoutEmergenciesInput, UserUncheckedUpdateWithoutEmergenciesInput>
    create: XOR<UserCreateWithoutEmergenciesInput, UserUncheckedCreateWithoutEmergenciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmergenciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmergenciesInput, UserUncheckedUpdateWithoutEmergenciesInput>
  }

  export type UserUpdateWithoutEmergenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityAgent?: SecurityAgentUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutEmergenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityAgent?: SecurityAgentUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUncheckedUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type SecurityAgentUpsertWithoutAssignedEmergenciesInput = {
    update: XOR<SecurityAgentUpdateWithoutAssignedEmergenciesInput, SecurityAgentUncheckedUpdateWithoutAssignedEmergenciesInput>
    create: XOR<SecurityAgentCreateWithoutAssignedEmergenciesInput, SecurityAgentUncheckedCreateWithoutAssignedEmergenciesInput>
    where?: SecurityAgentWhereInput
  }

  export type SecurityAgentUpdateToOneWithWhereWithoutAssignedEmergenciesInput = {
    where?: SecurityAgentWhereInput
    data: XOR<SecurityAgentUpdateWithoutAssignedEmergenciesInput, SecurityAgentUncheckedUpdateWithoutAssignedEmergenciesInput>
  }

  export type SecurityAgentUpdateWithoutAssignedEmergenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSecurityStatusFieldUpdateOperationsInput | $Enums.SecurityStatus
    user?: UserUpdateOneRequiredWithoutSecurityAgentNestedInput
  }

  export type SecurityAgentUncheckedUpdateWithoutAssignedEmergenciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSecurityStatusFieldUpdateOperationsInput | $Enums.SecurityStatus
  }

  export type UserCreateWithoutSecurityAgentInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestCreateNestedManyWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSecurityAgentInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestUncheckedCreateNestedManyWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogUncheckedCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSecurityAgentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecurityAgentInput, UserUncheckedCreateWithoutSecurityAgentInput>
  }

  export type EmergencyRequestCreateWithoutAssignedToInput = {
    id?: string
    type: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmergenciesInput
  }

  export type EmergencyRequestUncheckedCreateWithoutAssignedToInput = {
    id?: string
    type: string
    userId: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
  }

  export type EmergencyRequestCreateOrConnectWithoutAssignedToInput = {
    where: EmergencyRequestWhereUniqueInput
    create: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type EmergencyRequestCreateManyAssignedToInputEnvelope = {
    data: EmergencyRequestCreateManyAssignedToInput | EmergencyRequestCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSecurityAgentInput = {
    update: XOR<UserUpdateWithoutSecurityAgentInput, UserUncheckedUpdateWithoutSecurityAgentInput>
    create: XOR<UserCreateWithoutSecurityAgentInput, UserUncheckedCreateWithoutSecurityAgentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecurityAgentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecurityAgentInput, UserUncheckedUpdateWithoutSecurityAgentInput>
  }

  export type UserUpdateWithoutSecurityAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSecurityAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUncheckedUpdateManyWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUncheckedUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type EmergencyRequestUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: EmergencyRequestWhereUniqueInput
    update: XOR<EmergencyRequestUpdateWithoutAssignedToInput, EmergencyRequestUncheckedUpdateWithoutAssignedToInput>
    create: XOR<EmergencyRequestCreateWithoutAssignedToInput, EmergencyRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type EmergencyRequestUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: EmergencyRequestWhereUniqueInput
    data: XOR<EmergencyRequestUpdateWithoutAssignedToInput, EmergencyRequestUncheckedUpdateWithoutAssignedToInput>
  }

  export type EmergencyRequestUpdateManyWithWhereWithoutAssignedToInput = {
    where: EmergencyRequestScalarWhereInput
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type UserCreateWithoutMessagesSentInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentCreateNestedOneWithoutUserInput
    messagesRecv?: MessageCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestUncheckedCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentUncheckedCreateNestedOneWithoutUserInput
    messagesRecv?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogUncheckedCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesRecvInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    callsMade?: CallLogCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMessagesRecvInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestUncheckedCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    callsMade?: CallLogUncheckedCreateNestedManyWithoutCallerInput
    callsReceived?: CallLogUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMessagesRecvInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesRecvInput, UserUncheckedCreateWithoutMessagesRecvInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUpdateOneWithoutUserNestedInput
    messagesRecv?: MessageUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUncheckedUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUncheckedUpdateOneWithoutUserNestedInput
    messagesRecv?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUncheckedUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutMessagesRecvInput = {
    update: XOR<UserUpdateWithoutMessagesRecvInput, UserUncheckedUpdateWithoutMessagesRecvInput>
    create: XOR<UserCreateWithoutMessagesRecvInput, UserUncheckedCreateWithoutMessagesRecvInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesRecvInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesRecvInput, UserUncheckedUpdateWithoutMessagesRecvInput>
  }

  export type UserUpdateWithoutMessagesRecvInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    callsMade?: CallLogUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesRecvInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUncheckedUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    callsMade?: CallLogUncheckedUpdateManyWithoutCallerNestedInput
    callsReceived?: CallLogUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutCallsMadeInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageCreateNestedManyWithoutReceiverInput
    callsReceived?: CallLogCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutCallsMadeInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestUncheckedCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    callsReceived?: CallLogUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutCallsMadeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCallsMadeInput, UserUncheckedCreateWithoutCallsMadeInput>
  }

  export type UserCreateWithoutCallsReceivedInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentCreateNestedOneWithoutUserInput
    messagesSent?: MessageCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogCreateNestedManyWithoutCallerInput
  }

  export type UserUncheckedCreateWithoutCallsReceivedInput = {
    id?: string
    email?: string | null
    phone?: string | null
    password: string
    name: string
    role?: $Enums.Role
    isOnline?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emergencies?: EmergencyRequestUncheckedCreateNestedManyWithoutUserInput
    securityAgent?: SecurityAgentUncheckedCreateNestedOneWithoutUserInput
    messagesSent?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messagesRecv?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    callsMade?: CallLogUncheckedCreateNestedManyWithoutCallerInput
  }

  export type UserCreateOrConnectWithoutCallsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCallsReceivedInput, UserUncheckedCreateWithoutCallsReceivedInput>
  }

  export type UserUpsertWithoutCallsMadeInput = {
    update: XOR<UserUpdateWithoutCallsMadeInput, UserUncheckedUpdateWithoutCallsMadeInput>
    create: XOR<UserCreateWithoutCallsMadeInput, UserUncheckedCreateWithoutCallsMadeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCallsMadeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCallsMadeInput, UserUncheckedUpdateWithoutCallsMadeInput>
  }

  export type UserUpdateWithoutCallsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUpdateManyWithoutReceiverNestedInput
    callsReceived?: CallLogUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutCallsMadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUncheckedUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    callsReceived?: CallLogUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutCallsReceivedInput = {
    update: XOR<UserUpdateWithoutCallsReceivedInput, UserUncheckedUpdateWithoutCallsReceivedInput>
    create: XOR<UserCreateWithoutCallsReceivedInput, UserUncheckedCreateWithoutCallsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCallsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCallsReceivedInput, UserUncheckedUpdateWithoutCallsReceivedInput>
  }

  export type UserUpdateWithoutCallsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUpdateManyWithoutCallerNestedInput
  }

  export type UserUncheckedUpdateWithoutCallsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emergencies?: EmergencyRequestUncheckedUpdateManyWithoutUserNestedInput
    securityAgent?: SecurityAgentUncheckedUpdateOneWithoutUserNestedInput
    messagesSent?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messagesRecv?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    callsMade?: CallLogUncheckedUpdateManyWithoutCallerNestedInput
  }

  export type EmergencyRequestCreateManyUserInput = {
    id?: string
    type: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
    securityId?: string | null
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    receiverId: string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    content: string
    type: string
    createdAt?: Date | string
    senderId: string
  }

  export type CallLogCreateManyCallerInput = {
    id?: string
    receiverId: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CallLogCreateManyReceiverInput = {
    id?: string
    callerId: string
    callType: $Enums.CallType
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type EmergencyRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: SecurityAgentUpdateOneWithoutAssignedEmergenciesNestedInput
  }

  export type EmergencyRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    securityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutMessagesRecvNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type CallLogUpdateWithoutCallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiver?: UserUpdateOneRequiredWithoutCallsReceivedNestedInput
  }

  export type CallLogUncheckedUpdateWithoutCallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CallLogUncheckedUpdateManyWithoutCallerInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CallLogUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    caller?: UserUpdateOneRequiredWithoutCallsMadeNestedInput
  }

  export type CallLogUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    callerId?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CallLogUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    callerId?: StringFieldUpdateOperationsInput | string
    callType?: EnumCallTypeFieldUpdateOperationsInput | $Enums.CallType
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EmergencyRequestCreateManyAssignedToInput = {
    id?: string
    type: string
    userId: string
    status?: $Enums.EmergencyStatus
    lat: number
    lng: number
    description?: string | null
    createdAt?: Date | string
  }

  export type EmergencyRequestUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmergenciesNestedInput
  }

  export type EmergencyRequestUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEmergencyStatusFieldUpdateOperationsInput | $Enums.EmergencyStatus
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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