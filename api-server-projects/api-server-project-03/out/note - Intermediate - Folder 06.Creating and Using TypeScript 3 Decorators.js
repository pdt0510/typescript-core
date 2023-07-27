/*02.Intermediate ---*/
/* Folder 06.Creating and Using TypeScript 3 Decorators --- */
/* Dir 1. Introduction to TypeScript Decorators --- */
//v0. Version Check
/**/
//v1. Overview - done
/*
Langs using Decorators: C#, java, Python, typescript, ...etc
*/
//v2. Understanding Decorators in TypeScript
/*
00ss: Decorators là  1 design patter, nó cung cấp thêm annotations và meta-programming syntax for class declarations and members.

https://www.typescriptlang.org/docs/handbook/decorators.html

42ss: vd Decorators

1m32ss: vấn đề khi phát triển project: services layer, business rules & logic, data access & storage layers, ..

-> khái niệm cross-cutting concerns: tức là ta dùng across all these layers.

vd: authentication, logging, validation...vv được dùng across to these different layers

2ms25ss: điều này làm cho conecept of inheritance in OOP trở nên rất khó khi project lớn dần, cũng như khó khăn lúc testing at runtime -> decorators ra đời, dẫn đến conecept of aspect-oriented programming (AOP) ra đời

-> AOP giúp tăng tính module hóa bằng cách cho phép separation of cross-cutting concerns. AOP ko thay thế OOP, chỉ bổ sung cho OOP

https://www.meziantou.net/aspect-oriented-programming-in-typescript.htm

https://viblo.asia/p/aop-la-gi-uu-nhuoc-diem-cua-aop-aspect-oriented-programming-trong-java-3P0lPk2oZox

2ms43ss: Decorators & Annotations là gì ?

1/Annotations are limited to setting metadata
2/Decorators are functions that can modify what they describe when executed (at runtime)
3/Traceur (from Google) provides support for annotations within JavaScript
4/Typescript supports decorators as an experimental feature

3ms31ss: 4 common decorator types: decorator of class/method/property/parameter;

4ms08ss: chức năng - cách dùng - cách hoạt động/tác dụng của decorator types

1/class decorator

cách dùng: class decorator syntax được placed above the class

chức năng: decorator được applied to ctor of class để observing/modifing/replacing the class definition.

cách hoạt động/tác dụng: khi implementing decorator thì ta sẽ nhận 1 'reference' trở lại ctor for the class.

-> Những gì có thể làm với class ctor thì cũng tương tự cho class decorator

4ms43ss: 2/method decorator

cách dùng: method decorator syntax được placed above the method within a class.

chức năng: method decorator được applied to method's property descriptor (tức fn/method's body logic) for observing/modifing/replacing the method definition. TỨc 1 'reference' to property descriptor

cách hoạt động/tác dụng: ta có thể thay đổi cách 1 method hoạt động. Hoặc có thể wrap method trong 1 function khác để tăng logic options. Hoặc observing/modifing/replacing...

4ms43ss: 3/property decorator

cách dùng: property decorator syntax được placed above the property within a class.

chức năng: for observing the property

cách hoạt động/tác dụng: observing property decorator declared in the class at compiling/running để limit khả năng of property nếu nó không thỏa dk.

vd: mobile property ko thỏa dk là number type - 10 số, ..vv

5ms33ss: 4/parameter decorator

cách dùng: parameter decorator syntax được placed above the parameter within a class.

chức năng: parameter decorator được applied to class method's params for observing the parameter

cách hoạt động/tác dụng: observing parameter decorator declared at compiling/running để limit khả năng of parameter nếu nó không thỏa dk.

vd: mobile param ko thỏa dk là number type - 10 số, ..vv
*/
//v3. Creating Decorators
/*
00ss: TS Decorator signatures là các specific function signatures cho 4 different decorator types (class, method, ..), see ôn fn signatures (v3-2ms34ss)

39ss: Chi tiết cách Decorator types hoạt động

1/class decorators

// Class Signature receives the constructor of the class
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

-> Signature of Class decorator. Class decorator is defined as a function that receives the constructor of the class via 'target' param, then returns fn or void

// Implementation
function log(constructor: Function) {
  console.log(`${constructor} Decorator Invoked`);
}

-> log fn nhận ctor and then log sth out to console. Hoặc observing, replacing, ...vv như đã biết.

1m14ss: 2/method decorators

// method signature receives the target, key, and descriptor
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: <T>) => TypedPropertyDescriptor<T> | void;

// Implementation
function log(target:Object, propertyKey:string, descriptor:PropertyDescriptor) {
  console.log(`Method Invoked`);
}

-> log fn có thể observing, replacing, ...vv bởi vì ta có 1 reference (PropertyDescriptor) to 'descriptor' param. HOặc observing/wrapping/...vv

1m42ss: 3/property decorators

// property signature receives the target and propertyKey
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;


// Implementation
function log(target: Object, propertyKey: string) {
  console.log(`${propertyKey} Decorator Invoked`);
}

-> observing hoặc limiting property nếu ko thỏa dk input at compiling. Ta có 1 reference to 'target' param, then choose to reference propertyKey.

2ms15ss: vd parameter decorators (ít dùng nhất of 4)

// Receives the target, propertyKey, and param index
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// Implementation
function log(target: Object, propertyKey: string, index: number) {
  console.log(`${propertyKey} decorator (${index}) Invoked`);
}

Phân biệt: Function - Method: https://hocjavascript.net/ham/su-khac-biet-giua-function-va-method/

-> Func được gọi bởi tên của nó. Method được gọi thông qua 1 object (class, interface, object (myName.firstName), array (push, pop, [0])).

-> Func decorator  ###  method decorator.

2ms41ss: 2 main approaches khi dùng decorators

1/decorator Func
2/decorator factory: 1 Func that wraps fn decorator and then returns fn decorator như đã biết (at v2-4ms43ss) -> tức là custom 1 fn decorator,.

https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories

-> decorator factory khá giống với closure in ts/js, hoặc HOC in react


3ms08ss: decorator approaches, 4 steps

1/Decorator functions must implement specific 'signatures' (at v3. Creating Decorators) based on use (4 types: decorators class/method/...etc)
2/Decorator factories enable you to receive parameters and construct the decorator.
3/Decorators are called at runtime with either approach.
4/Decorators using factories need to have parenthesis in declaration.

3ms53ss: vd decorator factory

class APIServer {
  @enumerable(true)
  getRoutes() {
    return this.routes;
}
}

function enumerable(val: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = val;
  }
}

-> @enumerable calling enumerable fn (là 1 decorator factory or 1 customized Fn decorator) khi nó wraps và returns 1 fn decorator; 'val' param là your logic tùy bạn xủ lý.

4ms31ss: vd Multiple decorators, cách Multiple decorators hoạt động

1/Multiple decorators can be applied in any of the four decorator types
2/Decorator expressions are evaluated in from top to bottom
3/Results of expressions are called as functions from bottom to top
4/This order makes sense if you envision them as nested functions

5ms10ss: vd Multiple decorators

-> Multiple decorators là many decorator Fns are applied to a 1 property/method in class.
*/
//v4. Implementing a Basic Decorator
/*
src1 =============

32ss: demo: khởi tạo 1 project dùng Decorator by cli

setup npm env: ..\typescriptCore>npm init -> entry point named app.ts

setup a custom config file (ko dùng default config), then copy/paste apis from ad. Trong đó có 2 opts quan trọng cho Decorators, see tsconfig.json

1/"experimentalDecorators": true -> supporting using Decorators in ts; later ts vers > 5.0 thì ko cần this flag

2/"emitDecoratorMetadata": true -> allow using Decorator Metadata

1m19ss: Person class -> Thực hành cấu hình 4 decorator types (class, method,...), see app.ts

1m53ss: tạo class decorator and decorator factory named logClass, see app.ts

https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

Giải thích syntax of 1 decorator class nói riêng:

//calling a decorator with a string param
@logClass('Class decorator')

//decorator factory (or called a customized fn decorator)
vd: function logClass(message: string): ClassDecorator {...}

-> a decorator factory wrap/returns a fn decorator of class. Decorator factory's return type is ClassDecorator type.

2ms21ss: Lưu ý cách calling to 1 decorator for executing

- in class, khi calling a decorator ta dùng '@'; vd: @logClass

- Nhưng khi calling a decorator có '()' theo sau thì nghĩa là ta đang dùng 1 decorator factory cho dù có param hay ko in '()'.

vd: @logClass(); @classDecor('class_name')

- Decorator factory thì liên quan đến closure như đã nói/biết.

- như đã biết (v2-2ms43ss): khi running (turn on debug) the project thì  các class's decorators được called/executed. Nhưng với Decorator factory thì khi client triggers 1 action (http request from APIs) thì mới thực sự calling/executing (2nd call) to class's decorator

2ms50ss: adding a property decorator and a decorator factory named logProperty, see app.ts

vd: function logProperty(message: string): PropertyDecorator {...

-> a decorator factory wrap/returns a fn decorator of Property. Decorator factory's return type is PropertyDecorator type.

3ms28ss: adding a method decorator and a decorator factory named logMethod, see app.ts

vd: function logMethod(message: string): MethodDecorator {...

-> a decorator factory wrap/returns a fn decorator of method. Decorator factory's return type is MethodDecorator type.

3ms46ss: adding a parameter decorator and a decorator factory named logParameter, see app.ts

vd: function logParameter(message: string): ParameterDecorator {...
 
-> a decorator factory wrap/returns a fn decorator of param. Decorator factory's return type is ParameterDecorator type.

- Lưu ý, decorator factory's return type phụ thuộc vào việc nó wraps/returns 1 fn decorator's signature (class, method, ...) => ôn lại 'v3. Creating Decorators' (gồm signatures, implementations)

4ms01ss: dùng launch.json file để running by debugging decorators -> ok like ad, see .vscode\launch.json

4ms34ss: thêm 1 '@logMethod' để trở thành multiple decorators, see app.ts

-> như đã biết (v3-4ms31ss) in multiple decorators, các decorator expressions được evaluated từ trên xuống dưới, then được called từ dưới lên trên
*/
//v5. Configuring Express Routes with Decorators
/*
src2 =============

00ss: áp dụng Decorators to a real project via Express Routes

08ss: Lý do các companies dùng 'globamantics' cho mọi TS decorator projects:

1/Manufacturing company transitioning to TypeScript for internal API’s
2/Interested in using Decorators to define cross-cutting data rules.
3/Looking look automate route creation for data types using Node with Express
4/Looking to integrate data validation standards across all data types

36ss: Nhưng trước hết, ta sẽ thử nghiệm TS decorators with Express

52ss: Tổng quan cấu trúc project built.

1m22ss: cấu hình api server

Express lib: tạo routes, Middlewares, CORS, port ..vv, see APIServer.ts

http npm:  https://www.npmjs.com/package/http

-> 'http' để tạo 1 server live ảo phía BE, server sẽ wrap/bọc các cấu hình của express. Khi testing thì sẽ dùng 'debug' để turn on server và  test in Api app (postman, ..vv).

2ms14ss: tạo file named app.ts (name file phải match với script in launch.json) và'new' instance of server để kết nối project to API server, see app.ts

-> test debug running in vsCode: Server is running on port 3000 -> ok like ad

2ms40ss: APIRoutes class để cấu hình routes, see app.ts

2ms58ss: cấu hình decorator called @route('get', '/') for 1st/main route, then cấu hình decorator factory tương ứng, see app.ts

3ms40ss: như đã biết (at v3-1m14ss, v4-2ms21ss), in method decorator dùng 'descriptor' param (PropertyDescriptor type) để bọc class's method (indexRoute), then returns back to indexRoute method. GIải thích login in fn, see app.ts

xx5: in this case, ta buộc phải dùng express's method (get, put, ...) bằng object's key như ad để calling http reqs nên hơi lạ mắt 1 xíu so với cách truyền thông, see app.ts

JavaScript Objects - https://www.w3schools.com/js/js_objects.asp
express routing - https://expressjs.com/en/guide/routing.html

Tips: 'F12' tại 'app' (at server.app) để tìm về base layers at path named ..\express-serve-static-core\index.d.ts để thấy 'get' key passed

4ms41ss: testing.

1/turn on debug in vsCode -> Server is running on port 3000
2/Testing API in thunder-client app, see getHelloworld

Nhận ra: khi debug thì có chút lỗi (ko như của ad) nên ko thể xuất ra 'out' folder như ad -> dùng 'out' folder của ad.

5ms13ss: adding logRoute decorator for indexRoute fn. Giải thích từng dòng code, see app.ts + getHelloworld api

5ms13ss_xx1: là 1 method decorator vì return 'MethodDecorator' type cũng như các params related mà nó sử dụng, see app.ts

5ms13ss_xx2: gán class's original method for a save, see app.ts

5ms13ss_xx3: tạo 1 new fn để xử lý new logic, trong đó:

...args: dùng toán tử rest để get all class method's params, và biến nó thành 1 array, nên mới có thể là get về 2 indexes: req, res -> lúc này req/res from class's method sẽ chứa tất cả client's info related cho ta sử dụng phía BE, see app.ts

-> Nói cách khác, ta pull/passing Req/Res agrs from class' method  to 'descriptor' param in a method decorator fn.

-> ôn Type Assertions syntax 2: 'as' (v6-1m35ss in course TS 'getting started')

Lưu ý, decorator factory's param là do ta pass into decorator, còn class method's params được passed into '...args'; nói ngược lại '...args' sẽ get all class method's params và biến thành param arr , see app.ts

5ms13ss_xx4: sau đó, dùng 'original method' để apply/override các new logic to itself/chính nó, đồng thời returns original fn này trở về class's method

-> ok like ad: in DEBUG CONSOLE in vsCode, displays '/ GET Called'

6ms19ss: @route('get', '/people') to public peopleRoute..., see app.ts

-> testing in API -> ok like ad, getting all peoplle, see getPeople

7ms01ss: thêm authenticaton. Giải thích, see app.ts

-> check req's headers để get về auth's key, see app.ts
console.log('headers.apikey ---', headers.apikey);

8ms23ss: testing in API, see getAuthPeople

-> nếu thỏa điều kiện Authentication thì authenticate decorator mới cho access to func of peopleRoute's body để get data
*/
//v6. Summary - done
/* Dir 2. Implementing TypeScript Decorators ---*/
//v0. Overview - done
/**/
//v1. Metadata and Reflection with Decorators
/*
10ss: 2 types of Decorator that we can define:

1/actions Decorator: nơi thực hiện các actions ta define (đã dùng ở dir trước)
2/descriptions Decorator: mô tả 1 item for future use by project (chưa dùng)

35ss: vd Decorator actions

49ss: Decorator Metadata là gì ? VD về Decorator Metadata

-> Decorator Metadata mô tả chức năng/đặc điểm mà nó đảm nhiệm từ việc ta define. Ta sẽ store all these metadata và sử dụng nó at another time -> Điều này y/c việc sử dụng 1 external module ('reflect-metadata' npm) để thực hiện như đã biết (v2-2ms43ss; v4-32ss).

VD: Descriptions Decorator

import 'reflect-metadata';

class Person {
  @id
  firstName: string;
}
function id(target: any, propertyKey: string) {
  Reflect.defineMetadata("entity:id", propertyKey,
target);
}

-> 'id' Decorator being defined some metadata by Reflect.defineMetadata...for that specific property.

1m21ss: 4 đặc trưng/điểm (characteristics) của Decorator Metadata

1/TypeScript documentation recommends the 'reflect-metadata' module (npm)

https://www.typescriptlang.org/docs/handbook/decorators.html#metadata

reflect-metadata API: https://www.npmjs.com/package/reflect-metadata#api

https://viblo.asia/p/typescript-decorator-va-metadata-reflection-m68Z0w2dKkG

-> reflect-metadata cho phép CRUD to the entitiy (class) for modifies, giống như dùng ORMs (sequelize, Prisma, TypeORM, ...) để CRUD to db.

2/Metadata reflection is experimental and could change in a future release

những gì Metadata reflection là 1 cuộc thử nghiệm/testing, và nó có thể thay đổi in a future release.

-> Nghĩa là ta sẽ dùng 'reflect-metadata' module như 1 trình tester at runtime khi dùng decorator, nếu thỏa dk thì có thể dùng các cấu hình decorators này trong production env

-> và 'reflect-metadata' vẫn đang được cored-team phát triển nên có thể thay đổi trong tương lai.

3/Requires the emitDecoratorMetadata configuration value to be true

-> in tsconfig.json, 'emitDecoratorMetadata:true' thì mới có thể dùng 'reflect-metadata' module

4/Enables you to store, read, and delete metadata for each decorator type

-> 'reflect-metadata' module cho phép ta CRUD các metadata of each decorator type (class, method, ...)

1m59ss: Chi tiết cách sử dụng Metadata và Decorator Metadata như đã nói (v1-49ss)

Mỗi name of class/properties from Person class được gọi là Metadata. Trên đầu các Metadata này sử dụng Decorator fn nên được gọi là Decorator Metadata.

Decorator Metadata có thể làm anything: validators, CRUD, ... như đã nói
*/
//v2. Implementing the API Server
/*
học cách dùng Decorators in API Server

01ss: 1 số notes trước khi dùng API Server

1/Utilizing jsonDB to mimic a production database

-> dùng 'node-json-db' npm để tạo 1 db ảo và lưu JSON file in project. Lý do phần dùng npm này vì có tích hợp/support typescript lang

2/EntityRouter defines standard actions per entity based on REST standards

-> EntityRouter file chứa các API routes cho client sử dụng.

3/APIServer wraps express configuration for the server

-> APIServer file chứa cấu hình 1 server để running và tạo kết nối cho client

4/BaseEntity is the base class for all of our entity types

-> BaseEntity file chứa cấu hình reflect metadata để thao tác CRUD to db ảo

src3, api-server-project-01 =============

51ss: tổng quan demo

1/Review initial project for API server
2/Review entity architecture to implementwith decorators

1m03ss: tổng quan các details of the project

dùng node-json-db npm (như kiểu 'json-server' npm) để tạo 1 db ảo named 'entityDatabase', then tạo 'entityDatabase.json' file tương ứng để db ảo có thể kết nối tới, see app.ts + entityDatabase.json

https://www.npmjs.com/package/node-json-db

1m45ss: ....addEntity<Person>(Person) -> add a class named person as an entity, see app.ts

-> Person class sẽ là 'entry point' - nơi mà ta sẽ CRUD new ones, logic, models, ...vv, then để nó tự động tạo các routes và xử lý theo cross-cutting concerns (All logic business we handled) configured.

2ms09ss: details of Person/BaseEntity class, see Person.ts

3ms23ss: details of api server - nơi (BE) kết nối db và client via express router

public addEntity... -> nơi cho ta add new entities type, see APIServer.ts

4ms04ss: details of routes - nơi cấu hình các routes mà client có thể sử dụng để tương tác (CRUD) tới db, see EntityRouter.ts
*/
//v3. Defining Entities with Decorators
/*
src3, api-server-project-02 =============

00ss: tổng quan demo

1/Creating decorators to define entity characteristics
2/Update BaseEntity to work with persistence objects
3/Update EntityRouter based on entity metadata
4/Update APIServer to work with entity typ

32ss: thuc hanh

tạo 1st decorator file named 'entity', nơi đây sẽ cấu hình các decorator metadata, see entity.ts

export function entity... -> define and storing name of entity, this value sẽ dùng để set baseURL (parent route) for entity (class)., see more 6ms28ss + xx6

return function (constructor: Function) {... -> 1 class decorator

-> Đây cũng là 1 decorator factory, nó ngầm định returns ClassDecorator type (do syntax này ko tường minh), còn bên trong thì class decorator ngầm định returns void vì nó ko thay đổi 'original' (tức là ko thay đổi initial declaration of class nói riêng), ôn v4-1m53ss

https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

dùng 'defineMetadata' API để tạo/define 1 object (property/class/arr, ...vv) for CRUD a class, see entity.ts

- xx10: 'metadataKey' do ta tự đặt theo rule <design:paramtypes/properties/..vv>, sao cho:

1/chúng đồng bộ/kết nối được với nhau, tức là kết nối/mapping giữa reflect-metadata và decorator metadata thông qua 'metadataKey'

2/quan trọng nhất là naming sao cho coders/developers hiểu fn đó có chức năng gì, thuộc object nào, see in detail api-server-project-04 (entity.ts, BaseEntity.ts, EntityRouter.ts, ...)

https://www.npmjs.com/package/reflect-metadata

https://stackoverflow.com/questions/42422094/where-do-i-find-the-metadatakey-values-used-in-reflect-metadata

1m17ss: export function persist... -> (property decorator fn), see entity.ts

let objectProperties: string[] = Reflect.getMetadata('entity:properties', target) || [];

dùng 'getMetadata' API gets a property list (or called metadata/key list in reflect-metadata) required by '@persist' (a decorator fn or a decorator metadata đều đúng) nói riêng nếu có, ko có thì tạo một empty '[]'

'entity:properties' là 1 metadataKey param. Như đã biết (at xx10), nên persist's metadataKey sẽ được mapped by other reflect methods nếu chúng cần sử dụng these metadatas.

if (!objectProperties.includes.... -> in this case, do là 1st running nên 'objectProperties' sẽ là '[]', nên mới có expression này để tạo/chứa a new key list

dùng 'defineMetadata' để define objectProperties (a new property list) to entity for a store.

1m45ss: export function id... (property decorator), see entity.ts

-> do 'id' decorator chỉ có 1 metadata nên ko cần 'objectProperties' arr để chứa như trước đó

2ms13ss: in Person class, apply decorators created to this class để tạo entity for reflect-metadata, see Person.ts

xx8: 'type' là 1 Type Aliase: chấp nhận any type collected, thường dùng cho generic vars/fns, see BaseEntity.ts + (project 4 - validation.ts)

https://www.typescriptlang.org/docs/handbook/advanced-types.html

vd: type MixTypes = string | number | Data | Array
vd: function checkData(date: MixTypes, quantities: MixTypes){...}

'type' ko phải interface nên ít khi hoặc ko dùng như interface dù có 1 số điểm chung: https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases

xx11: export type EntityTypeInstance<T> = new (...args: any[]) => T

đây là 1 (narrow) generic, cho phép ta nhận any annotation type (class/vars/arr...vv), see BaseEntity.ts + ôn (v3-1m13ss)

kết hợp với 'new' key cho phép ta (1 "static" part of a class/func/...vv) tạo các instances từ annotation type này thông qua 'new<...>()', see BaseEntity.ts + EntityRouter.ts

https://stackoverflow.com/questions/48731626/new-args-t-syntax

type of constructors '{ new(): T }' - https://stackoverflow.com/questions/38311672/generic-and-typeof-t-in-the-parameters/38311757#38311757

- ...args: any[] -> là Rest operator nên sẽ nhận all args being passing nếu có và biến thành arr, do ta ko biết annotation type of arr gì nên sẽ dùng 'any[]'

https://stackoverflow.com/questions/50726326/how-to-go-about-understanding-the-type-new-args-any-any

2ms40ss: static fromPersistenceObject... -> create an instance from POST, see BaseEntity.ts

const persistedProperties: string[] = Reflect.getMetadata('entity:properties', output) || [];

'getMetadata' sẽ get entity's props (Person class) from 'persist' vì giống nhau/mapping 'metadataKey' như đã biết (at v3-1m17ss, xx10), see BaseEntity.ts + entity.ts

output (a target agr) là instance (Person class) để nhận entity's metadata nếu có

const idProperty... -> get 'id' field via 'entity:id' metadataKey, see BaseEntity.ts + entity.ts

const props = ... -> get all keys (not values) from client's object

if (persistedProperties.includes... -> so sánh existed and passing props, nếu match thì gán client obj's value to output's key, then return output;

3ms41ss: getPersistenceObject(): any {... -> được dùng khi ta muỗn accessing 1 instance created, see BaseEntity.ts

vd: trước/sau khi POST 1 instance to db thì ta save 1 copy one for outputting to client's UI

4ms14ss: in router file, private createEntity... -> Create a new instance by POST method from client, see EntityRouter.ts

db.push(`/${this.className}`, ...; -> db.push(dataPath, data) <=> POST http

như đã cấu hình trước đó (v3-32ss), dataPath sẽ bắt đầu với baseURL, see more 6ms28ss

5ms45ss: private updateEntity... -> update to an existed entity, see EntityRouter.ts

- in prod env, trước khi UPDATE thì phải có validators, but here is in lesson

6ms28ss: public addEntity<T extends ... -> cấu hình 1 entity (class) via name (metadataKey from entity decorator) tới created router. Then, apply các entity's routes to app's route với việc set a baseURL to entity, see APIServer.ts

-> expression sẽ được called từ App.file để cung cấp a initial entrypoint to 1 entity at starting, như kiểu 1 Adapter, see app.ts

7ms11ss: testing

1/running debug -> check in DEBUG CONSOLE
2/test in API with POST: http://localhost:3000/people, see postAPeople + entityDatabase.json

xx6: như đã nói (at 6ms28ss): http://localhost:3000/people là 1 parent route, vì 'people' được cấu hình từ class decorator, see Person.ts + entity.ts

vd: POST a people: http://localhost:3000/people
vd: GET all people: http://localhost:3000/people
vd: GET a people by id: http://localhost:3000/people/0365f3f5-468c-4abd-8232-bbdca6131e62
*/
//v4. Implementing Logging
/*
src3, api-server-project-03 =============

00ss: cấu hình log file để log API calls

38ss: cấu hình logRoute decorator. Giải thích, see log.ts

descriptor.value = function (...args: any[]) {... -> decorator getting/wrapping class method's args (at 2ms06ss - Request-Response) thành 1 arr để sử dụng chúng như 1 variable thông thường.

xx12: Lưu ý, class method's args positions (Request-Response) are defaultly located in provided fns; nên ta chỉ việc nương/nhìn theo nó mà sử dụng, chứ ko thể thay đổi positions, see log.ts + EntityRouter.ts

-> Nói đơn giản, ta code 1 fn có params, các instances of this fn sẽ phải sử dụng các agrs theo các fn's params

if (req != undefined && res != undefined) {... -> check dk để xử lý req/res

if (['PUT', 'POST']... -> nếu có dùng these methods thì thông báo

1m28ss: original.apply(this, args); -> original applies new data of args vì ta đã modified and save for new one

-> Lưu ý, nếu ko 'original.apply...' thì ko thể có thể modify to class's method at triggered by POST/GET..vv methods, vì ko

2ms06ss: in EntityRouter, dùng @logRoute to routes được triển khai, see EntityRouter.ts

2ms26ss: testing

1/on debugging
2/test in API app, see postAPeople + DEBUG CONSOLE

xx7: lỗi: Cannot read properties of undefined (reading 'ip') -> do starting/1st running thì req/res là 'undefined' nên báo lỗi at debugging -> ràng buộc kỹ hơn: if (req != undefined && res != undefined) {..., see log.ts

-> access ip from Express ok.

xx1: nhưng mới phát hiện ra, lỗi tại xx7 là do '@logRoute' trên 1 fn ko có param, hoặc có params thì ko liên quan đến req/res param, dẫn đến decorator tự động accessing to class' method, và nó tìm ko thấy req/res param nên báo 'undefined' at 1st running/starting, then dẫn đến 1 chuỗi lỗi như đã biết, see EntityRouter.ts

=> fix: block '@logRoute' tại đó, ko cần fix như xx7 nữa -> test ok vì ko còn accessing to logRoute decorator at starting, see log.ts

xx2: Lưu ý, ta dùng 'express.Router()' sử dụng concept: phân chia các route này theo từng đối tượng, mỗi đối tượng có một route file riêng, như vậy, việc bảo trì sẽ dễ dàng hơn việc all routes in a file, see EntityRouter.ts

https://viblo.asia/p/nodejs-bai-7-phan-chia-router-file-trong-express-RQqKLwy057z
https://expressjs.com/en/guide/routing.html
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#routes_primer

-> cụ thể ở đây ta tạo router instance to Person class for CRUD this entity, hoặc other class tương tự nếu muốn mở rộng. HOặc mở rộng router instances như: authentication, oauth2, roles, ...vv
*/
//v5. Validating Entities with Decorators
/*
src3, api-server-project-04 =============

00ss: tổng quan demo

1/Describing data rules for our Personentity
2/Creating validation decorators
3/Automating validation and errormessages within EntityRouter

32ss: thêm các validators (required, length, isEmail, ...) cho các Person's props, see Person.ts

-> tạo validation file, và dùng 'validator' npm; 'reflect-metadata' npm để cấu hình các validators, see validation.ts

1m59ss: type ValidationFunction..., see validation.ts

- is passed: return void;
- is error: return a message string

2ms18ss: interface ValidationRule {... , see validation.ts

2ms30ss: cấu hình các validator decorators

https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators

trong mỗi decorator ta sẽ call 'addValidation', passing params of target - propertyKey - validator_fn tương ứng, see validation.ts

-> các property's values sẽ được tested khi gặp đúng tiêu chí

2ms55ss: với length decorator thì dùng param of lengthValidator/options, then return a decorator, see validation.ts

3ms06ss: isInteger/isPhone decorator , see validation.ts

3ms13ss: function addValidation(... to all decorator validators vừa được, see validation.ts

Lưu ý: Các rules decorator in class (Person) cũng là 1 dạng metadata (như props in class), nhưng rules decorator metadata là 1 kiểu property validators độc lập nên chúng (ko liên quan đến các props defined as infos in class) có thể được dùng mọi nơi, và chỉ được get/called thông qua các rules decorator fn on class's property.

- let objectProperties: string[] = Reflect.getMetadata('validation:properties', target) || [];

-> get về class's props list, so sánh/check chúng với 'propertyKey' (class's property), nếu ko có/ko match thì push 'propertyKey' for a create new one, then define again

4ms23ss: tạo các VALIDATOR FUNCTIONS tương ứng 'property validators' for calling them, và sẽ return như đã nói tại let validators..., see validation.ts

5ms33ss: sau khi đã xử lý và có all new validators cho entiy (function addValidation... at 3ms13ss), thì cần 1 fn cung cấp trở lại a map of those error messages đã xử lý cho router (EntityRouter) để báo cho client

- export function validate(...  -> not a decorator, is called within a EntityRouter, see validation.ts

const keys = Reflect.getMetadata(... -> get all class's props - thứ được set là 'validation:properties'

-> 	for (const key of keys) {... -> checking: loop để loại bỏ các rules ko phải 1 arr (tức là ko có any rule in class), còn nếu rules là 1 arr (có ít nhất 1 rule) thì loop qua từng rule (see xx14) kèm params, nếu có 'message' thì lưu lại to show

xx14: việc có thể call 'rule.validator' là vì sau khi entity nhận new validators thì chúng đã được tích hợp qua quá trình xử lý trước đó tại 3ms13ss, see validation.ts

6ms34ss: dùng validate fn trên cho EntityRouter, nếu có err message thì return luôn, see EntityRouter.ts

7ms32ss: dùng validate fn cho update fn, see EntityRouter.ts

8ms144ss: testing
1/on debugging
2/testing in API app, see postAPeople, updateAPeople

-> ok like ad, ta đã validate dựa trên metadata mà ta đã defined
*/
//v6. Authentication and Authorization
/*
src3, api-server-project-05 =============

08ss: tổng quan demo

1/Implement HTTP basic auth for all API routes
2/Implement role-based permissions for users per entity type

20ss: giải thích các key roles sẽ dùng: reader, writer, deleter, see entityDatabase.json

1m14ss: thuc hanh: cấu hình authentication file

1m52ss: function getUserDetails(... -> get client's info, see authentication.ts

-> Fn get client's info via http req in API server-> read the base64 encoded info  (tức là giải mã bas64 rồi mới có thể dùng) -> tách user name-password by split fn -> must return user name-password by UserDetails interface

2ms31ss: function isValidUser(... -> checking the validation user, see authentication.ts

-> sau khi có client's info, fn checking xem user này có tồn tại/hợp lệ hay ko in db để return...

2ms59ss: function doesUserHavePermissions(... -> check roles, see authentication.ts

3ms32ss: function auth(... -> tổng hợp các fns trên để implementing, see authentication.ts

const original = descriptor.value; -> save original fn

descriptor.value = function (...args: any[]) {... -> xử lý body logic, then apply to original fn again để update changes

4ms46ss: dùng auth decorator trên cho router, và áp dụng các roles như db cung cấp, see EntityRouter.ts

5ms28ss: testing on debugging + thunder-client, see getAllPeople-Auth, updateAPeople-Auth, postAPeople-Auth,

vì chỉ dùng Username/Password làm bảo mật nên trong APi app (thunder-client) cần dùng 'Basic Authentication' (in thunder-client  Auth -> Basic) mới chính xác
*/
//v7. Summary - done
//# sourceMappingURL=note - Intermediate - Folder 06.Creating and Using TypeScript 3 Decorators.js.map