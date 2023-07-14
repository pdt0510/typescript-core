/*
Typescript core path from pluralsight - Only learning basic - oop - Generics - decorators, not fully

in (the) morning, on thursday, the twenty-second of June/ on 22nd-Jun in 2023

in (the) morning, on friday, the twenty-third of June/ on 23rd-Jun in 2023

in (the) morning, on saturday, the twenty-fourth of June/ on 24th-Jun in 2023

in (the) morning, on sunday, di dam cuoi - don dep

in (the) morning, on monday, the twenty-sixth of June/ on 26th-Jun in 2023

in (the) morning, on tuesday, the twenty-seventh of June/ on 27th-Jun in 2023

in (the) morning, on wednesday, the twenty-eighth of June/ on 28th-Jun in 2023

in (the) morning, on thursday, the twenty-nineth of June/ on 29th-Jun in 2023

in (the) morning, on friday, the thirtieth of June/ on 30th-Jun in 2023

in (the) morning, on saturday, the first of July/ on 1st-Jul in 2023

in (the) morning, on sunday, the second of July/ on 2nd-Jul in 2023

in (the) morning, on monday, the third of July/ on 3rd-Jul in 2023

in (the) morning, on tuesday, the fourth of July/ on 4th-Jul in 2023

in (the) morning, on wednesday, the fifth of July/ on 5th-Jul in 2023

in (the) morning, on thursday, the sixth of July/ on 6th-Jul in 2023

in (the) morning, on friday, the seventh of July/ on 7th-Jul in 2023

in (the) morning, on saturday, the eighth of July/ on 8th-Jul in 2023

in (the) morning, on sunday, dam gio

in (the) morning, on monday, the tenth of July/ on 10th-Jul in 2023

in (the) morning, on tuesday, the eleventh of July/ on 11th-Jul in 2023

in (the) morning, on wednesday, the twelfth of July/ on 12th-Jul in 2023

in (the) morning, on thursday, the thirteenth of July/ on 13th-Jul in 2023


*/

/* 01.Beginner ---*/
/* Folder 01.TypeScript The Big Picture ---*/
/* Dir 1. How TypeScript Can Help ---*/
//0. What You Need - and Don't Need - to Know
/*
15ss: kiến thức cơ bản cần có trước khi học ts: js, html, css. Khác với các NNCC khác (C#, Java, Python), ts ko thể tách rời js.
*/

//1. The Problem with JavaScript
/*
01ss: những nhược điểm của JavaScript: none of debug tools, module, typed, organization, interface,  ..etc


2ms10ss: nhưng lý do js vẫn được dùng vì: sự phổ biến - db trong web, bắt đầu có nhiều tools/libs hỗ trợ hơn.

Typescript được tạo ra để compiles js.
*/

//2. How TypeScript Helps Static Typing
/*
00ss: Tổng quan 3 lợi ích of ts: 

1/static types (vars, params, return types, ...) -> đảm bảo tính nhất quán trước khi outputing
*/

//3. How TypeScript Helps Organization
/*
00ss: 2/organization -> giúp quản lý large codebase (classes in OOP, namespace, modules, interface ...) dễ hơn
*/

//4. How TypeScript Helps Tooling
/*
02ss: 3/ tooling support (IDEs, compiler, debugging ). Trong courrse này ta dùng VScode
*/

//Dir 02. Setting Up a TypeScript Development Environment ---
//0. How (Not) to Write Hello World in TypeScript
/*
done
*/

//1. Writing and Compiling TypeScript
/*
done
*/

//2. The Tools You Need
/*
00ss: 2 thứ: IDE (VS code, VS, Atom, ...), TSC (typescript compiler).

Cách đơn giản để dùng TSC là dùng Nodejs (hạ tầng của nodejs sử dụng các package supports: là các npm/yarn)

1m09ss: globally setup  ts: npm i -g typescript
check ver: tsc -v
check option tsc cli: tsc -h -> cli of tsc

-> mình đã setup sẵn
*/

//3. TypeScript Project Configuration
/*
40ss: in project, Nên tách ts - js/generated files, custom file paths, ..ect thông qua việc setup tsconfig.json file
*/

//Dir 3. Writing TypeScript Applications ---
//0. Explicit Types and Type Inference
/*

Chi tiết về các lợi ích về 3 thứ của typescript đã nói (at Folder 01)

1/Explicit type - reference type in static types

*/

//1. Defining TypeScript Classes
/*
2/organization

*/

//2. Working with Modules in TypeScript
/*
 done


*/

//3. TypeScript Next Steps
/*
done
*/

/* Folder 02.TypeScript 4 Getting Started ---*/
/* Dir 1. Installing TypeScript and Configuring a Project ---*/
//0. Version Check
/*
done
*/

//1. Introduction - done
/**/

//2. Course Overview - done
/**/

//3. Demo Project Overview
/*
12ss: Ts main doc: https://www.typescriptlang.org/

59ss: globally setup ts on your machine: https://www.typescriptlang.org/download

..\typescriptCore> npm install -g typescript

1m20ss: giới thiệu 1 số files in project

2ms31ss: 'add script tags here' -> nơi xử lý js logic và nó (js logic) được outputed by ts's compiler, see index.html
*/

//4. Demo Installing TypeScript and Running the Compiler
/*
moved to fileSrc1 folder (at v7); fileSrc1 =============

-> server main url: http://localhost:8080/fileSrc/

25ss: Installing/coding some fns, see app.ts

1m08ss: ...\typescriptCore\app>tsc app.ts

-> generating file named app.js compilered by ts 

2ms13ss: dùng npm of 'webpack-dev-server' + 'webpack-cli' để tạo 1 server ảo, see index.html

-> ..\typescriptCore> npm start

-> ok like ad, server ảo from http://localhost:8080/ -> demo ok, biết cách dùng 'webpack-dev-server' npm làm server ảo như nhiều cái đã học (json-webserver, ...Go live)
*/

//5. Using Project Files
/*
00ss: TS Project Files là các JSON test files named tsconfig.json

1m22ss: Tổng quan cách sử dụng syntax in tsconfig.json

Intro to the TSConfig Reference: https://www.typescriptlang.org/tsconfig
*/

//6. Demo Configuring Compiler Options in tsconfig.json
/*
fileSrc2 =============

15ss: chi tiết cách cấu hình 'Compiler Options' in tsconfig file via 'tsc CLI Options'

tsc CLI Options: https://www.typescriptlang.org/docs/handbook/compiler-options.html

TSConfig Reference for compilerOptions: https://www.typescriptlang.org/tsconfig#compilerOptions

1m04ss: thực hành, see video

1m45ss: tạo 1 tsconfig.json file tự động với 1 số options built-in

...\typescriptCore>tsc --init

2ms56ss: thay đổi 1 số Options in tsconfig file, see tsconfig.json 

cmt: 'module': 'commonjs', -> sẽ giải thích sau

un_cmt: 'sourceMap': true, -> cho phép debug ts in browser

'outDir': './js',  -> đồng thời thay đổi path output in index file, see index.html

'strict': true, 

cmt: 'esModuleInterop': true

add: 'watch': true, -> leaving the complier running for automatically re-compile source files as they're saved

add: 'files': [..] -> Specifies an allowlist of files to include in the program. An error occurs if any of the files can’t be found: https://www.typescriptlang.org/tsconfig#files

4ms50ss: nếu tại same folder mà nó (the ts compiler) ko tìm thấy 'tsconfig.json' thì nó sẽ move up to parent folder để tìm kiếm cho đến khi có, ko có sẽ báo lỗi.

vì sử dụng proj files (tsconfig.json) nên có thể passing anything to compiler, hoặc dùng đơn giản là 'tsc' for compiling: ..\typescriptCore> tsc

-> ok like ad, 1 số lỗi ( Object is possibly 'null', ..) là do 'strict' in tsconfig file báo lỗi -> fix: dùng Non-null assertion operator (!) cho ele, see app.ts

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

app.js.map file in js folder là do 'sourceMap' đã nói tạo ra 

7ms29ss: ...\typescriptCore>npm start -> ok like ad

7ms49ss: cách debug ts in 'sources' tab in your browser mà đã nói ('sourceMap'). CÓ khóa học debug ts riêng. 
*/

//7. Demo Configuration Inheritance and Glob Support in tsconfig.json
/*
move to fileSrc folder for managing files; main url: http://localhost:8080/fileSrc/

fileSrc3 =============

12ss: trong các large projs, thường chia ra nhiều tsconfig files, 1 file toàn bộ proj, các files kia cho các specific section -> thực hành

https://www.typescriptlang.org/docs/ -> search 'TSConfig Reference' -> https://www.typescriptlang.org/tsconfig

47ss: renaming tsconfig -> tsconfig.base, remove 'files' option, see tsconfig.base.json

in app folder, tạo section of tsconfig file để inherit tsconfig.base, sau đó ghi đè thêm các options ta muốn cho section này via 'extends', see app\tsconfig.json

2ms01ss: dùng glob thay cho  tsconfig's files để including many files 1 cách tổng quan hơn thay vì phải chỉ định cụ thể: https://www.typescriptlang.org/tsconfig#include

=> ./** /*, see tsconfig.json

.   -  current folder
**  -  search recursively through all subdirectories
*   -  nếu là *.ts is just finding ts files, nhưng vì sẽ có các extensions nên sẽ finding all files via *

2ms55ss: ...\fileSrc\app>tsc 

...\typescriptCore> npm start 

-> ok like ad

3ms46ss: tsconfig sections phù hợp cho các large projs
*/

//8. Demo Compiling with Webpack
/*
fileSrc4 =============

01ss: sau khi compiling into js files và bundle output, thì chúng được saved in webpack.config file trước khi được sent to browser: https://webpack.js.org/configuration/


-> giải thích các props in webpack.config file, see webpack.config.js

entry: nhận diện src file

devtool: proj's src map created inline for final bundle

module: chạy compiler of ts by 'ts-loader', process này được added to js bundle trước khi send to browser

resolve: sử dụng file exts

output: bundle's file webpack named bundle.js

devServer: {inline: false} -> giữ bundle file luôn mới

1m35ss: giải thích cách hoạt động webpack.config file

khi dùng webpack.config file thì nó sinh ra bundle.js file nên ko cần js folder trước đó (in app folder), cũng như update path in .html file , see index.html

-> bundle.js file ko được created mà nó được saved to memory và cung cấp cho browser

..\typescriptCore>npm start

-> in Network tab, bundle.js như 1 route được called

xx1: lỗi: bundle.js not found là do path ò .html sai => fix: /bundle.js, see index.html + vd at webpack.config.js

-> lý do lỗi là do có thêm folder named fileSrc nên cần thêm '/'  để entry trỏ vào bundle.js (tức sẽ là fileSrc/bundle.js); của ad thì ko có folder nên cũng k cần '/'
https://stackoverflow.com/questions/51614049/webpack-4-bundle-js-not-found
*/

//9. Summary - done
/**/

//Dir 2. Taking Advantage of Built-in Types ---
//0. Introduction and Overview - done
//v1. Basic Types and Variable Declarations
/*
done
*/

//v2. Type Annotations and Type Inference
/*
fileSrc5 =============

15ss: Annotations type: là 1 'return type' được placed sau dấu '2 chấm' 

Khi ko dùng Annotations type thì vẫn có 1 specific type, do TSC tham chiếu và nó sẽ tự suy ra dựa trên value. -> nên Annotations type để tường minh

vd1: let name: string = 'Phan DT';
name = 43 -> wrong

vd2: let name = 'Phan DT';
name = 43 -> wrong

1m34ss: Type Inference: func, obj, arr, ...

vd: let getVal = getValFn();
vd: let getVal: number = getValFn(); -> nên dùng
*/

//v3. Demo Using let and const with Type Annotations
/*done*/

//v4. Additional Built-in Types
/*
- 1 số 'special return types': 

Void: fn ko returns 1 value cụ thể

Null, undefined: là 1 type riêng, và cả có thể gán tới all types

never: gán cho values mà ko bao giờ xảy ra - ít dùng 
vd: 1 fn ko bh return: throws an exception, kicks of an loop event, trigger a fn event from client, ..

Any: dùng khi bạn ko chắc chắn 'return type' of value là gì, hoặc nó nằm ngoài phạm vi TSC.
*/

//v5. Union Types and the --strictNullChecks Compiler Option
/*
xx2: cmt 'strict' trước khi học bài này, see tsconfig.base.json

11ss: Union Types containing từ '2 return type' trở lên trong 1 var, các acceptable vals nằm trong phạm vi Union Types. Nhưng như đã biết (v4) type of null/undefined vẫn có thể gán cho Union Types (nói riêng), see app.ts

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

vd: let someVal: number | string;
someVal = 123;
someVal = 'PDT';
someVal = true // err
someVal = null;
someVal = undefined;

1m01ss: in tsconfig file, dùng 'strictNullChecks' = true: để khắc phục tình trạng null/undefined, tức là từ lúc này ko cho phép gán null/undefined tới các return typed vars, see tsconfig.base.json + app.ts

-> giúp tránh nhiều lỗi liên quan tới null/undefined

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#strictnullchecks-on


 2ms06ss: nhưng nếu Union Types dùng kèm với null/undefined thì ko báo err, see app.ts
*/

//v6. Type Assertions
/*
01ss: Type Assertions: type assertions are removed by the compiler and won’t affect the runtime behavior of your code -> dùng Type Assertions cho các vars/fns mà TSC ko biết rõ 'return type' hoặc chúng dùng type of any/unknown/...vv; 

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

Type Assertions syntax 1: <type-u-want>value, see app.ts

1m16ss: Type Assertions syntax 2: 'as' , see app.ts + 1m35ss (at v5)
*/

//v7. Demo Writing Better Code with the --strictNullChecks Option
/*
thực hành dùng strictNullChecks - done in prev videos
*/

//v8. Demo Understanding Control Flow Type Analysis
/*
14ss: 1 số tips nên hiểu về Control Flow Type Analysis thông qua tools built-in

Control Flow Analysis: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis

Playing with Control Flow Analysis: https://www.typescriptlang.org/play

29ss: 1/thông qua pop-up of fns/vars built-in để biết 'return type', từ đó có thể setup Control Flow Type, see video

-> Giúp hạn chế/thu hẹp và chỉ dùng specific types thông qua việc phân tích để loại các types ko cần thiết

2ms21ss: nhưng vẫn có thể mở rộng (rewiden) Control Flow Types trở lại 1 cách tự nhiên
*/

//v9. Summary
/*done*/

//Dir 3. Writing Better Functions with TypeScript ---
//v0. Introduction and Overview - done
//v1. Adding Type Annotations to Functions
/*
fileSrc6 =============
vẫn đang cmt 'strict' (at xx2)
*/

//v2. Using the --noImplicitAny Compiler Option
/*
20ss: in tsconfig file,  dùng 'noImplicitAny': true để cảnh báo các biểu thức (funns) đang dùng 'implicitly type' trong các params/agrs

-> tức là chúng ko dùng Annotations types thì báo lỗi, còn dùng 'any/unknown' type thì vẫn ok, see app.ts + tsconfig.base.json
*/

//v3. Default-initialized Parameters
/*
01ss: vd về Default-initialized Parameters, kết hợp'void' vì nó return nothing

-> lưu ý, Default-initialized Params phải được placed ở cuối param listed để tránh lỗi passing agrs to fn, see app.ts
*/

//v4. Demo Adding Type Annotations to Parameters and Return Values
/*
done at v2
*/

//v5. Demo Adding Type Annotations and Default Parameter Values
/*
done at v3 + 

1m35ss: kết hợp Type Assertion of HTMLInputElement, see app.ts
*/

//v6. Anatomy of an Arrow Function
/*
tìm hiểu Arrow Function: () => {...}
*/

//v7. Demo Converting a Traditional Function to an Arrow Function
/*
02ss: demo, see app.ts
*/

//v8. Demo Taking Advantage of Function Types
/*
04ss: demo, see app.ts

1m23ss: returning 'void' in fn -> như 1 func được khai báo, và có empty body , see app.ts

https://www.typescriptlang.org/docs/handbook/2/functions.html
*/

//v9. Summary - done
/**/

//Dir 4. Creating and Using Custom Types ---
//v0. Introduction and Overview - done
//v1. Interfaces vs. Classes
/*
fileSrc7 =============

02ss: so sánh interfaces - classes

2ms01ss: so sánh: tổng quát/hình dáng/shape of ngôi nhà (interfaces) - chi tiết thiết kế ngôi nhà (classes)
*/

//v2. Creating an Interface
/*
01ss: 'interface' key for an interface object.

interface's body phải là 1 empty body, tức là body ko có detail implementations. Cho đến khi 1 object cần triển khai interface này thì mới code logic (detail implementations)

28ss: interface kế thừa/mở rộng 1 interface khác via 'extends' key
*/

//v3. TypeScript's Structural Type System
/*
54ss: in ts's Structural Type System, nếu 1 instance muốn kế thừa/inherit (or implement/triển khai) 1 interface thì:

1/nó (instance) phải đáp ứng đầy đủ props (hoặc nhiều hơn) cho interface's props thì instance mới ko báo lỗi khi 1 interface.

2/nếu matching thì instance ko cần khai báo Annotation type

-> process name is called as duck typing
*/

//v4. Demo Creating Interfaces
/*
10ss: working on multi sources in a project: cách làm việc với 1 project chứa nhiều source files (ts, js, ..) by webpack -> mình đang dùng cách này rồi (fileSrc), see webpack.config.js + index.html + tsconfig.base.json

1m27ss: thuc hanh

tao interface result + person, see result.ts + person.ts

hover vào 'age' optional thì sẽ thấy return type là: number | undefined

formatName fn return 1 string

3ms39ss: tao instance of Result/Person interface, then bắt buộc dùng interface's props tương ứng, và thêm các new props nếu instance cần, see app.ts

Lưu ý, in interface thì dùng ';' cuối line, nhưng các object's instances thì dùng ',' mới ko báo lỗi, see 1m27ss + app.ts

5ms15ss: interface only check types in your code, not compile interface into js 

chứng minh: ..fileSrc\app>tsc
-> các interface's instance chỉ tạo ra các objects tương ứng từ .ts file, ko liên quan gì tới interface, see ..\fileSrc\js\app.js

chứng minh: ..fileSrc\app>tsc person.ts
-> in person.js  render nothing
*/

//v5. Class Members
/*
00ss: lý thuyết Class, và thứ interface ko có:

1/Class triển khai các methods/properties,
2/Class triển khai các properties, 
3/Class triển khai Accessors (getter, setter), 
4/Class triển khai Accessors (getter, setter), 
5/Access modifiers: public, private, protected, 

1m18ss: for examples

in class, default members là 'public' nên ko cần thêm key/prefix này

3ms02ss: in ts class, 'this' chính là class instance

3ms47ss: vấn đề với 'private' in js output

in ts, dùng 'private' ok, nhưng khi compile to js output thì gặp vấn đề là ta vẫn có thể truy cập được nếu có 1 số đoạn code cố tình truy cập nó in runtime js, vì js include all code from ts.

in ts ver > 3.8, dùng '#' in ts thì js runtime vẫn sẽ giữ this property/member as 'private' 
*/

//v6. Extending Classes and Implementing Interfaces
/*
00ss: Classes kế thừa/triển khai 1 class khác by 'extends' key, như giữa 2 interfaces trước đó

59ss: để class kế thừa/triển khai 1 interface thì cần dùng 'implement' key

-> lúc này, class's methods có thể code detail implementations

1m40ss: như đã biết, khi 1 instance (class) kế thừa interface thì phải khai báo/khởi tạo all interface's props
*/

//v7. Demo Creating Classes
/*
fileSrc8 =============

17ss: demo class - interface, see player.ts

1m46ss: triển khai class, see app.ts

Run a kind of emit: ...\fileSrc\app>tsc person.ts player.ts app.ts --outDir '../js'

Run a compile: ...\fileSrc\app>tsc -> render all to js folder pathed

3ms17ss: ...\typescriptCore>npm start 

lỗi in browser's sonsole: Uncaught ReferenceError: Player is not defined 

-> do js ouput ko được referenced anywhere in HTML -> fix in next demo
*/

//v8. Demo Configuring a Project with Multiple Source Files
/*
fix: tsc compile all files to a output file

01ss: khi tsc render ts files to js output thì đó là từng files độc lập ko liên quan đến nhau, và trong index.html cũng chỉ reference to path of app.js 

-> có thể .html file có thể reference to player.js, ...vv, nhưng sẽ dùng kỹ thuật nâng cao để áp dụng cho các large-size app

57ss: giải thích 'include' đã dùng trước đó: https://www.typescriptlang.org/tsconfig 

-> 'include': ['./** /* ',]: còn gọi là glob, nó include all files in dir/subdirs/..vv cho nên TSC ko báo lỗi Player class như đã xuất hiện trong browser ở prov video.

1m33ss: dùng 'files': ['./app.ts'], tsconfig.json

-> TSC lập tức báo lỗi 'Player' in app.ts file, vì lúc này TSC được instructed chỉ render app.ts file nên các rest of files ko tồn tại nên báo lỗi như 'Player'

2ms12ss: fix: dùng triple-slash-directives (///) để cung cấp/tham chiếu 1 chỉ dẫn/instruction to compiler, triple-slash-directives chỉ có valid/hiệu quả/tác dụng at top of a file

https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html

-> dùng triple-slash-directives of path (it' common) để fix case này -> ok like ad, 'Player' hết lỗi vì được referenced, tức là tạo 1 declaration of dependency between files, see app.ts

https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-path-

-> fix Person interface tương tự -> TSC hết err, see player.ts

4ms19ss: ..\fileSrc\app>tsc

-> chỉ dùng 'tsc' nhưng TSC cũng chỉ render app.js và các files liên đến app, ko render các files khác (result.ts) vì ta đã thay đổi instruction trước đó (at 1m33ss)

5ms23ss: nhưng vẫn lỗi 'Uncaught ReferenceError: Player is not defined' in browser

-> fix: 'outFile' opt để đảm bảo all files thành 1 file duy nhất in js output khi được compiled, see tsconfig.json

https://www.typescriptlang.org/tsconfig#outFile
https://www.typescriptlang.org/docs/handbook/compiler-options.html

..\fileSrc\app>tsc 
-> lúc này, all files compiled into 1 file of app.js 

-> ok like ad, TSC và browser đều ko báo lỗi

6ms54ss: triple-slash-directives là cách đơn giản nhất để quản lý dependencies
*/

//v9. Static Members
/*
done
*/

//v10. Constructors
/*
54ss: in current class, dùng super() để gọi constructor of parent class từ 1 child class.

trong case này, WebDeveloper đang 'super' to Developer (parent class).

Nếu child class 'extends', đồng thời có constructor thì child class buộc phải call a super. 
*/

//v11. Demo Refactoring the Demo App with Classes
/*
fileSrc9 =============

13ss: utility class, see utility.ts

1m20ss: 'return type' là 1 arr of interface vì có nhiều players, see scoreboard.ts

in class, ko nên dùng arrow fns as class's methods, vì lúc TSC compile thì arrow fns sẽ thành 1 property, not method. Hover vào fn cũng sẽ thấy nó pop-up như vậy, see scoreboard.ts + app.js (after TSC compiled)

2msm19ss: game class, see game.ts

3ms05ss: shortcut syntax khi khai báo các constructor có params, see game.ts

6ms04ss: refactoring in app file, see app.ts

...\fileSrc\app>tsc
..\typescriptCore>npm start

-> test ok like ad
*/

//v12. Summary
/*done*/

//Dir 5. Creating and Consuming Modules ---
//v0. Introduction and Overview - done
//v1. Why Use Modules
/*
fileSrc10, webpack.config1.js =============
done
*/

//v2. Supporting Technologies
/*
JS hỗ trợ các techs mà TSC sẽ được thừa hưởng: 

JavaScript Modules
• AMD
• CommonJS
• UMD
• System
• ES2015

Loader/Bundler
• Node
• RequireJS
• SystemJS
• Webpack
*/

//v3. Exporting and Importing
/*
- Using modules in import/export
08ss: Exporting class, interface, vars, ...vv. 
*/

//v4. Demo Converting the Demo App to Use Modules
/*
03ss: remove 'outFile', '///' vì dùng cho only 1 output file before (index.html, app.js), còn Modules  using at global for all files -> using 'CommonJS' or anything format u want, see tsconfig.json

-> như vậy, ta đã converting a project from individual files to modules

1m03ss: conveting class to module for utility, see utility.ts

2ms24ss: conveting interface/class files to modules files, các '///', see utility.ts + person.ts + player.ts + scoreboard.ts + game.ts + app.ts

xx3: running -> lỗi: Uncaught ReferenceError: exports is not defined -> fix sau
*/

//v5. Relative vs. Non-relative Imports
/*
00ss: phân biệt Relative - Non-relative Imports

Relative Imports, thường là các your localtion files

vd: /..;   ./file_ext;    ../file_ext

1m02ss: Non-relative Imports: thường là các npm/built-in packages
import .. from 'moment'; -> built-in
import .. from 'lodash'; -> npm package
*/

//v6. Module Resolution Strategies
/*
00ss: in tsconfig file, nó dùng 'moduleResolution' để xử lý relative/Non-relative Imports, nhiều mode dùng this opt: 

overview - https://www.typescriptlang.org/tsconfig#moduleResolution
details - https://www.typescriptlang.org/docs/handbook/module-resolution.html

36ss: so sánh main moduleResolution mode: node - classic. Còn có mode of 'node16' or 'nodenext'
*/

//v7. Module Resolution Examples
/*
done
*/

//v8. Demo Configuring Module Resolution
/*
demo relative - non relative via 'moduleResolution' by person.ts file

11ss: 'moduleResolution': 'Node, see tsconfig.json

30ss: dungf non-relative to './person' bằng cách remove relative './', see player.ts

báo lỗi: Cannot find module 'person' or its corresponding type declarations.
 
-> fix: 'traceResolution': true - để mỗi module import is being resolved in tsc, see tsconfig.json

https://www.typescriptlang.org/tsconfig#traceResolution

..\fileSrc\app>tsc
-> in cli, báo lỗi tương tự như trong vscode: Cannot find module 'person' or its corresponding type declarations.

1m36ss: giải thích process at compiling module files in cli when warning: relative, looking for module, module was found, ...

trong đó, các lines lỗi: 
../typescriptCore/node_modules/person.ts' does not exist.
../typescriptCore/node_modules/person.tsx' does not exist.

-> trước đó, ta đã convert relative -> non-relative cho 'person' nên báo lỗi này 

2ms58ss: giả sử moving person.ts file to node_modules folder, see ..\node_modules\person.ts

-> vscode và cli hết báo lỗi.

-> phần lớn time, ta sẽ dùng non-relative (packages, libs, ...vv)

3ms42ss: nhưng ta sẽ move non-relative import of person.ts file to module folder để tách ra cho dễ quản lý, see ..c\app\modules\person.ts + 

setup: 'baseUrl': './modules' -> All non-relative imports lúc này sẽ move to module folder, see tsconfig.json

...fileSrc\app>tsc

-> in cli, lines:
Resolving module 'person' from '.../typescriptCore/fileSrc/app/player.ts'.

'baseUrl' option is set to '.../typescriptCore/fileSrc/app/modules', using this value to resolve non-relative module name 'person'.

../typescriptCore/fileSrc/app/modules/person.ts' exists - use it as a name resolution result.

-> như vậy, person.ts được used như 1 resolution result, hết báo lỗi in vscode/cli

5ms34ss: -> 'baseUrl' thuận tiên cho việc config a location ngoài node_modules

5ms50ss: https://www.typescriptlang.org/tsconfig#paths

- 'paths' option: paths work with baseUrl. Lưu ý, các location là các relative in baseUrl.

- vd: {'my_lib_tai': ['./customPath']};
my_lib_tai: module name
['./customPath']: arr of locations mà TSC lookup for module

- 'rootDirs' option: khi ta có các sources trải rộng/chéo tới các dirs mà bán muốn combine into a single dir at runtime.

- vd: 'rootDirs' option: ['module','src','ts/module'],
['module','src','ts/module']: các dir/folder sẽ được combined

=> If the compiler sees a relative import in a subdirectory of one of these directories, then it will search for the relatively referenced module in each of the configured root directories since they're expected to be combined at runtime.

7ms04ss: nhưng ta chỉ vd, chưa dùng tới nên sẽ cmt, see tsconfig.json

7ms12sss: demo ok -> move person.ts file back to app folder, edit lại relative import, then del modules folder, see player.ts
*/

//v9. Demo Configuring Webpack to Bundle Modules
/* 
fileSrc10, webpack.config2.js =============

01ss: cấu hình 1 module bundler để run new version of the app in modules (trước đó dùng single files (app.ts/js, ..) - at v4-10ss), steps:

48ss: cấu hình/sử dụng lại webpack.config file theo modules, see webpack.config.js

-> look for modules, and extension files (in ..extensions: ['.tsx', '.ts', '.js'],)

-> edit lại link of output in html file, see index.html

..\typescriptCore>npm start -> ok like ad
*/

//v10. Summary - done

//Dir 6. Being More Productive with Type Declaration Files ---
//v0. Introduction and Overview - done
//v1. What Are Type Declaration Files
/*
Type Declaration Files: còn gọi là type defination files or Type libraies.

Type Declaration Files dùng để khải báo types for the variables/func/object/..., đảm bảo TSC dùng đúng khi compiling.
*/

//v2. DefinitelyTyped
/*

00ss: đuôi Declaration Files: .d.ts 

18ss: 1 số repository of tyoe declaration files created by TS & JS called DefinitelyTyped: Github repo, ...
*/

//v3. Installing Type Declaration Files
/*
00ss: dùng npm để install Type Declaration Files vì bản thân các files are sourced (có nguồn gốc, được lấy/tạo) from DefinitelyTyped repo on Github

-> ...>npm install package --<options u want>
*/

//v4. Demo Installing and Using a Type Declaration File
/*
13ss: Cách searching/using Type Declaration Files in TS doc, see video

https://www.typescriptlang.org/tools

vd: setup lodash npm
...\typescriptCore>npm install lodash

có losdash, setup Type Declaration File of lodash
...\typescriptCore>npm install @types/loadsh

1m55ss: lodash và types/loadsh là các versions khác nhau, cách bảo trì/triển khai khác nhau nên ko phải lúc nào cũng là 100% in sync

2ms19ss: cách sử dụng both of lodash, see video
*/

//v5. Summary - done

/*02.Intermediate ---*/
/* Folder 01.Creating Object-oriented TypeScript Code ---*/
/* Dir 1. Introduction to Object-oriented Programming in TypeScript ---*/
//v0. Overview - done
//v1. Introduction - done
//v2. The Role of Objects - done
//v3. Object Creation Techniques - done
/**/

//v4. Object-oriented Concepts - done
/*
2ms03sS: OOP core (4 characteristics): Abstraction, Encapsulation, Inheritance, Polymorphism
*/

/* Dir 2. Classes and Objects ---*/
//v0. Introduction - done
//v1. The Role of Classes - done
/**/

//v2. Creating a Class - done
/*
src1, index1 =============
author source code: https://github.com/DanWahlin/TypeScriptDemos
*/

//v3. Adding Class Members
/*
06ss: 4 things are added to a class: Fields (public, private, set/get, ...), Properties (your names of vars), Constructor, fns/Methods

src1, checking-account1, main1, index1 =============

5ms09ss: thuc hanh, see checking-account.ts
*/

//v4. Creating a Class Instance
/*
29ss: Creating a Class Instance bằng cách import và khai báo class tới nơi bạn muốn, see main.ts
import { entity } from './decorators/entity';

3ms22ss: run webpack for outputting bundle file, see tsconfig.json 
..\typescriptCore>npm run webpack

nhưng nên dùng --watch for webpack để ko cần re-run bundle file after edited time: https://webpack.js.org/api/cli/#watch
..\typescriptCore>npm run webpack:w

running 'lite' server: ..\typescriptCore>npm start

-> ok like ad. Lưu ý, 'npm run webpack:w' và 'npm start' đều phải in live (sống/connected) thì mới có hiệu quả.

Lưu ý: thường các script ngoại đạo có npx (webpack:, ...) thì ta sẽ dùng 'npm run ...'
*/

//v5. Constructors and Properties
/*
13ss: class constructors ?

khi khai báo 1 class instance, ctor (constructor) luôn được khởi tạo đầu tiên, và sau super (nếu có) 

1m08ss: shortcut of ctor is called automatic properties: giúp coding ctor syntax ngắn gọn hơn khi sử dụng.

src1, checking-account2, main2, index1 =============

2ms22ss: thuc hanh automatic properties, see checking-account.ts

-> khi dùng ctor's params (initialization routines in a ctor) thì các class instances cũng phải sử dụng theo, see main.ts

5ms01ss: 2 things learned: initialization routine, automatic property
*/

//v6. Static Members
/*
1m12ss: vd về static, see renderer.ts + main.ts

2ms32ss: static sẽ giúp tạo 1 location memory of var/func/... -> ta ko cần tạo nhiều instance như trước đó để dùng các props. Nó giống như 1 mẫu số, 1 chuẩn chung của this class to class's instance  

6ms14ss: so sánh static - instance: tùy case, vì cái nào cũng có ưu - nhược

static: case of Utilities, or defaulted value/features/...vv
instance: ngược lại

6ms43ss: như đã biết (v5-2ms22ss), lần này với static, ta sẽ block ctor bằng cách dùng 'private' key để ko cho khởi tạo các instances of the class -> giúp bảo vệ/mật class, tránh bị edited, see renderer.ts + video
*/

//v7. Summary - done

/* Dir 3. Inheritance and Abstraction ---*/
//v0. Introduction - done /**/
//v1. The Role of inheritance
/*
giúp reuse code from class built, tránh duplicate code
*/

//v2. Inheriting from a Class
/*
src2, index2 =============

13ss: vd: class (child) kế thừa/inheriting 1 class (parent) khác via 'extends' key

1m14ss: super(): nếu parent class có ctor kèm params, child class cũng dùng ctor thì child có nhiệm vụ phải passing các params upto parent's ctor thông qua 'super' fn.

1m38ss: lưu ý, cách dùng 'super' in js khác với java nói riêng, và các langs khác nói chung.

Cách super hoạt động: giả sử ta 'new' 1 instance of child class (có kế thừa from parent), ta muốn passing 1 or more params to child ctor, nhưng các params này lại liên quan đến parent thì lúc này ta cần dùng 'super' để nó run trước, then child ctor mới được run.

-> điều này nghĩa là: super run trước để get info từ parent về, có parent info thì chuỗi logic (in child ctor) phía sau mới ko bị lỗi nếu chúng có sử dụng parent info.

2ms26ss: thuc hanh

3ms11ss: CheckingAccount extends BankAccount, see checking-account.ts

4ms10ss: SavingsAccount extends BankAccount, see savings-account.ts

4ms27ss: dùng 'enum' key for class để tạo ra 1 number list tự động, see enums.ts + savings-account.ts
  
5ms28ss: SavingsAccount extends BankAccount, và nó SavingsAccount (child) có dùng ctor, nên child sẽ phải dùng 'super' để getting props from parent, see savings-account.ts + bank-account.ts

5ms48ss: tương tự 5ms28ss, see checking-account.ts

7ms25ss: ta đã học cách kế thừa/inheritance; ctor - super
*/

//v3. The Role of Abstract Classes
/*
20ss: Lý thuyết Abstract Classes

-> Abstract Classes là base cho các class khác. VD bằng ti-vi

57ss: vd bằng class

- trong các demos trước đó, BankAccount (parent class) đóng vai trò là concrete class (tức là parent class be instantiated in child class). Còn giờ BankAccount được dùng như 1 Abstract class, tức là lúc này nó như 1 base/fns cho các child classes sử dụng mà ko cần tạo trực tiếp.
*/

//v4. Creating and Inheriting from an Abstract Class
/*
src3, index2 =============

00ss: nguyên tắc/cách dùng 1 Abstract Class

'Abstract' key to 1 Abstract Class -> các classes/vars khác sẽ sẽ ko thể khởi tạo class này, tức là các class/vars ko thể dùng  instances to this class

34ss: 2 member types ta có thể dùng trong Abstract Class

1/Abstract member: like Abstract of properties/fns; các Abstract fns thì ko có body. Abstract member chỉ được implemented by child classes. Ngược lại, nếu child classes (đã kế thừa Abstract parent class) ko implemente Abstract member (props/fns có 'abstract' key) thì sẽ báo lỗi.

2/Concrete member: có thể code body into fns in class Abstract nên child có thể kế thừa to use, nói đơn giản là như những fn xử lý logic thông thường normal class instances

1m48ss: thuc hanh

2ms50ss: 'abstract' for BankAccount class, see bank-account.ts

-> lúc này, ta ko thể initialized BankAccount instance được nữa, see main.ts

3ms49ss: using abstract member, see bank-account.ts 

test: in child, nếu ta cmt abstract members thì sẽ báo lỗi, see savings-account.ts

...Non-abstract class 'SavingsAccount' does not implement inherited abstract member 'accountType' from class 'BankAccount'.

4ms18ss: -> dùng abstract đơn giản hơn cách truyền thống (inheritance/ctor) khi ta triển khai logic/body in child classes để update values.

4ms38ss: using abstract fn, see bank-account.ts 

như 3ms49ss, báo lỗi nếu child ko implement abstract fn, in child thì abstract fn có thể implement body, see savings-account.ts

6ms48ss: vì parent (BankAccount) vừa cấu hình 1 abstract (at 4ms38ss) nên all child đều phải implement this abstract, not only SavingsAccount, see checking-account.ts

7ms11ss: như vậy, ko nhất thiết phải dùng abstract class vì concrete class có thể lo được, đặc biệt là complex cases. 

Tuy nhiên, in some cases of apps, ta muốn abstract cho các fns into a base class nhưng lại không muốn client khởi tạo/instantiate class instances thì abstract class là 1 greate way.

7ms44ss: 1 số abstract concrete built/used in abstract class of BankAccount như: withdrawal, deposit, balance, ..., see bank-account.ts
*/

//v5. Overriding Members
/*
08ss: Overriding Members: nghĩa là ta ko muốn sử dụng fn logic of parent class, thay vào đó ta tạo 1 fn named same to parent class's fn và sử dụng logic riêng in child, see savings-account.ts + main.ts

-> ok like ad

xx4: class array, see account-list.ts + main.ts
*/

//v6. Summary - done

/* Dir 4. Interfaces and Polymorphism ---*/
//v0. Introduction - done
/**/

//v1. The Role of Interfaces
/*
src4 =============

11ss: Interfaces là gì ?

Interfaces là nơi thiết lập các rules mà các interface's instances phải tuân theo, như kiểu 1 hợp đồng mà các bên phải tuân theo trước khi thực hiện.

-> interface giúp đảm bảo tính nhất quán của các instances mà dùng interface.

6ms45ss: so sánh class - interface

Class sinh ra body's code để tạo production, interface thì ko vì chỉ là 1 'hợp đồng' (no body, just having indications) giúp thống nhất các bên.
*/

//v2. Creating an Interface
/*
12ss: cách dùng Interface syntax. 

VỚi nhiều láng khác thì dùng thêm prefix of 'I' to name để tường minh -> nên dùng sau khi học để phân biệt class/interface/object vars 

1m48ss: Lợi ích khác của interface:

1/Tạo custom data types
2/Classes dùng interface để đảm bảo sự nhất quán
3/Interface chỉ được dùng trong dev env, ko tồn tại trong env of prod/compiled bundle file 

3ms16ss: thuc hanh

5ms01ss: generic interfaces (Có course riêng)

vd: AccountInfo<string, number> , see interfaces.ts
-> nghĩa là the routineNumber là string type, bankNumber là number 

=> vì ta ko biết nhiều cases có thể là string/object/boolean, nên cần dùng generic params để đáp ứng all input types, not hard-coded, see interfaces.ts

6ms40ss: interface (Account) kế thừa interface via 'extends' key để get rule info, see interfaces.ts

vd: export interface Account extends AccountSettings, DepositWithdrawal {}

-> '{}': đây là empty body in interface's fns như đã biết, nhưng child (Account) kế thừa parents nên child sẽ được implemented code in class instances dựa trên các interface rules
*/

//v3. Using Interfaces
/*
48ss: in class, class triển khai/implement interface via 'implements' key. Mô phỏng cách hoạt động.

-> sau khi 'implements' thì class buộc phải triển khai các interface rules, nếu thiếu sẽ báo lỗi.

1m53ss: Polymorphism (Đa hình) là gì ?

khi ta có set of objects mà cùng thể hiện 1 hành vi (vd: các hành vi/rules from interfaces) nhưng bên trong (body) lại xử lý khác nhau thì gọi là Polymorphism.

-> 1 cách dùng khác khi class kết hợp interface

vd: sendTo/sendBack fn: 

A - sendTo: 
1/ Info điểm đanh of nhân viên 'sendTo' Nhân sự 
2/ Nhân sự xử lý logic riêng (ngoài giờ, tiếp khách, đi trễ, ..vv), then 'sendTo' Kế toán
3/ Kế toán sự xử lý logic riêng (tính lương ngoài giờ, tiếp khách, đi trễ, ..vv), then 'sendTo' Giám đốc

B - sendBack:
1/Giám đốc ok thì ký duyệt, then Giám đốc 'sendBack' Kế toán
2/Kế toán ok thì 'sendBack' Nhân sự 
3/Nhân sự ok thì 'sendBack' Nhân viên
4/Nhân viên ok thì stop, not ok thì khiếu nại nên sẽ tiếp tục 'sendTo' lý do tới Nhân sự 

3ms26ss: thực hành dùng interface in different ways

..BankAccount implements Account, not DepositWithdrawal vì Account has full info, see bank-account.ts

4ms27ss: interface for ctor params để đảm bảo rule, thay 'any' type

constructor(accountSettings: AccountSettings) {..., see bank-account.ts

tương tự cho SavingsAccount, see savings-account.ts

5ms27ss: interface for funcs, see bank-account.ts

6ms31ss: nếu parent 'implements' interface thì child cũng sẽ được kế thừa interface đó.

-> ta có Polymorphism across in child (CheckingAccount & SavingsAccount)

6ms58ss: ATM ko có props (id, title, ...), nhưng nó muốn dùng 1 số interface fns, see atm.ts

constructor(private account: Account) {} -> ok, có tính Polymorphism (vì thay thế BankAccount); nhưng vì BankAccount là abstract class và nó dùng các 'return type' tường minh cho fn rõ ràng nên sẽ dùng của BankAccount

*/

//v4. Interfaces, Classes, and Polymorphism
/*
So sánh và cách sử dụng/design hài hòa Interfaces, Classes, and Polymorphism

12ss: nói chi tiết về Polymorphism

như vd trước đó (at v3-6ms58ss), nếu dùng Account interface thì sẽ có tính Polymorphism

1m39ss: Polymorphism in main file, see main.ts

2ms50ss: lên kế hoạch trước thiết kế project/app, để tận dụng abstract class or interfaces để chấp nhận nhiều kiểu object khác nhau, then gọi chúng thành các props/methods khác nhau mà chúng cung cấp.

3ms11ss: dùng Polymorphism hay ko phụ thuộc vào your app. 

Dùng Polymorphism khi app có similar family of objects/behaviors (vd: hệ thống phân cấp ngân hàng đã học vừa qua, hoặc hệ thống phân vùng các objects cùng thực hiện the same things) nhưng xử lý logic khác nhau (tức là chúng cùng 'implements' 1 interface nhưng logic trong từng child classes lại khác nhau) thì điều này  này dẫn ta đến all of these Polymorphic 
*/

//v5. Summary
/*
Tổng kết OOP và cách thiết kế hài hòa

OOP core (4 characteristics): Abstraction, Encapsulation, Inheritance, Polymorphism thông qua: class (concrete) - abstract class - interface - Polymorphism

1/Encapsulation
- class (concrete): dùng để khởi tạo các instances, xử lý logic in fn body (kể cả khi kế thừa parent abstract/interface) -> Encapsulated

- Dùng private of ctor nếu là 1 static class để tránh 'new' instance -> phù hợp cho các utility features

2/Abstraction
abstract class: ko cho 'new' instance of class, nhưng cho phép child kế thừa để sử dụng các props/fns of abstract 1 cách nhanh chóng ko cần khai báo type.

- Báo lỗi nếu child ko dùng các props/fns có kèm 'abstract' key như 1 kiểu bắt buộc để tránh thiếu sót. Các abstract fns cũng ko có body, body logic sẽ được xử lý in child class 
 
-> Abstraction như 1 sự kết hợp giữa static class + interface, khi nó buộc các child class phải sử dụng những abstract này như 1 'ruled base class' mà ko cần 'new' 1 class instance

3/Interface: ép các child/object/props/...vv kế thừa interface phải tuân theo rules, báo lỗi nếu child ko tuân theo -> đảm bảo tính đúng đắn; chính xác, tránh sai/thiếu sót.

4/Polymorphism: là sự kết hợp của nhiều object khác nhau, chúng có cùng hành vi (fns/props) nhưng trong body thì xử lý logic khác nhau in each of child classes.

- Polymorphic behaviors thường xuất hiện khi dùng abstract class, interface
*/

//Dir 5. Putting It All Together
//v0. Putting It All Together
/*
src5 =============

00ss: tổng hợp các kiến thức đã học về OOP thông qua project/app đã học. Sơ đồ mô phỏng cách hoạt động app.
*/

//v1. Reviewing the Code
/*
09ss: starting the whole app, see main.ts

32ss: Encapsulation from renderer prop in main file, see main.ts
*/

/* Folder 05.Creating and Using Generics in TypeScript 4 ---*/
/* Dir 1. Understanding and Applying Built-in Generics ---*/
//v0. Version Check - done
//v1. Introduction - done
//v2. Versions Used in the Course - done
/**/

//v3. What Are Generics
/*
11ss: Generics la gì ?

- reusable code mà làm việc với multiple types,

- có thể là fn, interface, classes, ..vv. 

- Chấp nhận các type params cho mỗi instance

syntax of generic: Feature-Name<param-name>

51ss: Thực hành dùng generic nhiều cách khác nhau

1/class with common generic type 

vd: export class Sheft<T> {...}

2ms06ss: có thể dùng any letters/names thay thế 'T' param, nhưng nên giữ nguyên để ngầm định rule of generic in Programming.

2ms26ss: khi đã tạo generic class, thì ta cần chỉ định type được dùng trong generic class instances

2ms41ss: generic param cũng có thể dùng như 1 Annotation type khi ta cần định nghĩa type for input/output (return type), ..vv in a generic class 

3ms00ss: 2/class with specified generic type

vd: let bookSheft: Sheft<Book> = new Sheft<Book>()

-> Book class thành 1 type param in generic

3ms56ss: bây giờ, 'bookSheft' chỉ chấp nhận các Book object/class như 1 input type 

-> generic type of 'T' chính là ưu điểm khi ta có thể dùng mọi nơi với class bạn muốn, ko như 3ms56ss
*/

//v4. Using Generic Arrays
/*
src1, main1 =============

Arrays thường được dùng nhiều trong việc store data, Generic Arrays còn lợi hại hơn.

1m14ss: let junkDrawer: any[]..., see main.ts

1m37ss: let companies: Array<string> ..., see main.ts

- arr dùng string generic (or also call Annotation type of string ), chỉ chấp nhận strings in the arr, nếu k thì báo lỗi

2ms02ss: hover onto 'Array' sẽ thấy đó là interface with 'T' param type

2ms13ss: righ-click 'Peek' -> 'Peek definition'

- type specified (cho arr at 1m37ss), thì khi ta dùng interface thì nó (type at 1m37ss) cũng được applied cho interface<T> thông qua object mà 'implements' interface này.

-> đây là lý do mà generic string arr chỉ chấp nhận string type.

2ms42ss: các interface's methods family (pop, push, reverse..) cũng sẽ xử lý tương tự cho instance đó.

3ms13ss: vd khác, see main.ts

4ms46ss: -> khi làm việc với các generic types in libs, fw, project, ... thì chỉ cần nhớ  type param in '<type-param-name>', từ đó bạn sẽ xử lý logic 1 cách hợp lý dựa trên generic type param đó.

5ms07ss: tổng kết Generic

1/reusable, type-safe <code>
2/recognize, type param 
3/Store data with Array<T>
*/

/*Dir 2. Generic Functions ---*/
//v0. Understanding Function Type Parameters
/*
34ss: mô phỏng/Giải thích Generic Functions

Generic of <T> đứng trước fn's name để cấu hình 1 Generic Functions

1m23ss: fn's param là T type; fn's return type là T type

Nếu fn có ko có 'return type', thì TSC sẽ dựa vào 'vars returned from return' để xác định Annotation type. Nhưng nên fn/vars có 'return type' để code tường minh.

1m53ss: calling the fn created

2ms20ss: vd phức tạp hơn về Generic Functions

Generic Function này có 2 param types nên fn's params được dùng cả 2 types này

2ms55ss: calling fn at 2ms20ss

3ms02ss: Generic ko giới hạn số lượng các type params in fns, objects, interfaces, trừ các single vars vì chúng chỉ chứa được 1 type/value

-> nhưng a single type param in generic là the most common case
*/

//v1. Creating Generic Functions
/*
src1, main2 =============

Generic func: https://www.typescriptlang.org/docs/handbook/2/generics.html#working-with-generic-type-variables

14ss: function shortenArray<T>(data: Array<T>)..., see main.ts

1st param input type là 1 arr of generic, not 'T' Annotation type như trước.

1m41ss: let stringArr..., see main.ts

2ms14ss: hover vào shortenArray<string>... called sẽ thấy 'T' được replaced by string do TSC biết được, see main.ts

2ms25ss: hover vào shortenArray(... called cũng sẽ thấy 'T' được replaced by string do TSC dự đoán, see main.ts

2ms47ss: bọc generic arr trong 1 variable -> TSC cũng có thể dự đoán Annotation type dù ta ko dùng, nhưng nên có Annotation type để tường minh , see main.ts

...\typescriptCore\src>tsc -> render all
...\typescriptCore\src>tsc main.ts --watch
...\typescriptCore\src>node main.js

-> shorthand: ...\typescriptCore\src>tsc main.ts --watch && node main.js

3ms31ss: nhưng khi dùng kiểu shorthand of 2ms25ss thì ta sẽ ko có chỉ dẫn/indication về các params input type -> ko an toàn dữ liệu khi any type đều có thể được passed to param in generic fn, see main.ts

4ms04ss: nên ta sẽ sử dụng lại indication, see main.ts

=> nhận ra, 1st generic param in the fn sẽ quyết định đến generic fn's indication
*/

//v2. Applying Type Constraints to Generic Functions
/*
src2, main1 =============

19ss: tổng quan chức năng

1m04ss: arr of class, see conferenceRoom.ts

1m59ss: function getBigRooms..., see main.ts

3ms04ss: if (r.capacity > minSize) ... -> lỗi: Property 'capacity' does not exist on type 'T' at 

- nguyên nhân: do TSC ko thể dự đoán names of properties in a generic type (generic arr param in fn) nên sẽ báo lỗi nếu ta truy cập/access các defaulted props's names vì chúng ko tồn tại.

3ms40ss: fix bằng cách ràng buộc nó (generic) với 1 số type nhất định thông qua 'extends' key

cách dùng cho implements/extends: 
1/dùng 'implements' key: class-interface; 
2/dùng 'extends' key: interface-interface, class-class, 

generic constraints - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints

Cụ thể, ta sẽ ràng với 1 interface named 'MeetingResource' để thiết lập rules cho generic type này nói riêng, see main.ts

-> hết lỗi, lúc này 'capacity' đã tồn tại nhờ interface

4ms54ss: ...typescriptCore\src>tsc main.ts --watch
...\typescriptCore\src>node main.js

-> ok like ad

5ms23ss: thay bằng PartyTent/partyTentData, see main.ts

5ms41ss: thay bằng Building/buildingData sẽ lỗi vì class object ko thỏa dk capacity of MeetingResource , see main.ts

lỗi: Type 'Building' does not satisfy the constraint 'MeetingResource'.
  Type 'Building' is missing the following properties from type 'MeetingResource': name, capacity
*/

//v3. Using Generic Function Types
/*
src2, main2 =============

00ss: Generic Function Types có type riêng, như các non-Generic Function Types. CHo phép ta khai báo Generic Function Type dưới dạng 1 variable (với điều kiện là cùng signature), nhưng behaviors khác nhau.

Generic Types - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types

34ss: Giải thích lại generic fn with extending.

vd: function getBigRooms<T extends MeetingResource>(..

1m13ss: gán Generic Function Types tới variable bằng cách thay đổi ': of return type' of Generic Function Types thành '=>', see main.ts

1m43ss: đã có thể gán generic fn to 1 narrow variable generic vì giống signature

-> getLargeRooms = getBigRooms, see main.ts

1m51ss: khai báo các instance of 1 narrow variable generic để sử dụng, see main.ts

...typescriptCore\src>tsc main.ts --watch
...\typescriptCore\src>node main.js 

-> ok like ad -> demo trên chính là using Generic Function Types, 

2ms34ss: in Generic Function Types, ko nhất thiết phải đặt tên các param names giống nhau để tạo signature (at 1m13ss), chỉ cần giống cấu trúc là ok, see main.js 

3ms22ss: Tổng kết

1/Generic ko phải chỉ dùng cho classes (vì phần lớn các vd trên internet dùng class)
2/Bảo mật tốt hơn với ràng buộc
3/Xài linh hoạt khi chấp nhận any type
*/

/* Dir 3. Generic Interfaces and Classes ---*/
//v0. Understanding Generic Interfaces and Classes
/*
src3 =============

24ss: 1/khai báo syntax of Generic Interfaces

1m16ss: using the instance of Generic Interface

2ms09ss: 2/khai báo syntax of Generic Interfaces with Generic classes

2ms55ss: theo interface rule, vì class 'implements' interface nên class's instance sẽ phải dùng các types với props/methods from interface

- generic class param type phải giống với generic interface param type

3ms15ss: 1 generic class có thể dùng nhiều param types, nhưng ít nhất 1 trong số chúng phải matching với generic interface param type mà class 'implements'
*/

//v1. Creating a Generic Interface and Class
/*
11ss: Mô phỏng/Lý thuyết cách hoạt động của cấu trúc Stack (last in, first out) 

1m16ss: demo Generic Interface and Class to build a generic stack

Tạo generic interface of stack's methods, see stack.ts

2ms10ss: tạo generic class named stack for using stack's methods from stack interface
*/

//v2. Applying Type Constraints to a Generic Class
/*
00ss: tạo ràng buộc/Constraints cho các generic classes

1m07ss: static requestResource...

1m30ss: lỗi: Static members cannot reference class type parameters.

Nguyên nhân: Static chỉ áp dụng cho chính class đó - ko thể 'new' instance; còn generic class chỉ áp dụng cho các class's instances nên ko thể dùng generic on static member, nói cách khác: static ko thể dùng trong generic class

2ms02ss: fix: remove 'static' key

2ms30ss: Property 'name' does not exist on type 'T'. 

-> lỗi như đã biết (at v2-3ms04ss), ta sẽ tạo 1 interface constraint to the generic class này, see reservation.ts

...\typescriptCore\src>tsc main.ts --watch
...\typescriptCore\src>node main.js

4ms25ss: tổng kết

1/dùng generic interfaces với literals object hoặc generic classes

2/generic classes y/c các safe types dù kotriển khai interface đi nữa

3/Type Constraints tăng tính thực tế, an toàn in prod env
*/

/* Folder 06.Creating and Using TypeScript 3 Decorators ---*/
/* Dir 1. Introduction to TypeScript Decorators ---*/
//v0. Version Check - done
//v1. Overview - done
/*
Langs using Decorators: C#, java, Python, typescript, ...etc
*/

//v2. Understanding Decorators in TypeScript
/*
00ss: Decorators cung cấp một cách để thêm cả annotations và syntax for class declarations and members.

https://www.typescriptlang.org/docs/handbook/decorators.html

42ss: vd Decorators

1m32ss: vấn đề khi phát triển project: routes of authentication/validation/logging, logic rules, data-store -> tóm lại là logic phức tạp phía BE/OOP nên điều này rất khó thực hiện

2ms25ss: đó là lý do aspect-oriented programming (AOP) ra đời; AOP giúp tăng tính module hóa; AOP ko thay thế OOP, chỉ bổ sung cho OOP

https://www.meziantou.net/aspect-oriented-programming-in-typescript.htm

https://viblo.asia/p/aop-la-gi-uu-nhuoc-diem-cua-aop-aspect-oriented-programming-trong-java-3P0lPk2oZox

2ms43ss: Decorators/Annotations là gì ? 

1/Annotations are limited to setting metadata
2/Decorators are functions that can modify what they describe when executed
3/Traceur (from Google) provides support for annotations within JavaScript
4/Typescript supports decorators as an experimental feature

3ms31ss: 4 decorator types: decorator class/method/property/parameter. 
VD các decorator types này.
*/

//v3. Creating Decorators
/*
39ss: vd class decorators

1m14ss: vd method decorators

1m42ss: vd property decorators

2ms15ss: vd parameter decorators

2ms41ss: Nhiều cách dùng decorators, 2 main approaches: decorator Func, decorator factory (1 decorator Func that returns decorators)

3ms08ss: decorator approaches, 4 ways

1/Decorator functions must implement specific signatures based on use (4 types: decorators class/method/...etc)
2/Decorator factories enable you to receive parameters and construct the decorator
3/Decorators are called at runtime witheither approach
4/Decorators using factories need to haveparenthesis in declaration

3ms53ss: vd factory decorators (returning decorators)

4ms31ss: Multiple decorators

1/Multiple decorators can be applied in any of the four decorator types
2/Decorator expressions are evaluated in from top to bottom
3/Results of expressions are called as functions from bottom to top
4/This order makes sense if you envision them as nested functions

5ms10ss: vd Multiple decorators
*/

//v4. Implementing a Basic Decorator
/*
src1 =============

32ss: demo Decorator

setup npm env: ..\typescriptCore>npm init -> entry point named app.ts

setup a custom config file (ko dùng default config), then copy/paste apis from ad. Trong đó có 2 opts quan trọng cho Decorators, see tsconfig.json

1/"experimentalDecorators": true, -> supporting Decorators in ts; từ ts > 5.0 thì ko cần this flag
2/"emitDecoratorMetadata": true -> allow using Decorator Metadata 

1m19ss: Person class, see app.ts

1m53ss: tạo class decorator name logClass, then setup a decorator factory for this., see app.ts

https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

GIải thích syntax of 1 decorator class nói riêng:

- @logClass('Class decorator'): decorator(@); named(logClass); a param ('Class decorator', not a decorator parameter)

- function logClass(message: string): ClassDecorator {...}: a decorator factory: là 1 Class decorator vì nó returns a ClassDecorator type/signature built-in lib.

2ms50ss: adding a decorator property. Vì là property decorator nên sẽ nhận 2 params: target, propertyKey, see app.ts

3ms28ss: adding a decorator method, see app.ts

-> method decorator sẽ nhận 3 params: target, propertyKey, descriptor.

3ms46ss: adding a decorator parameter, see app.ts

-> ..@logParameter('Parameter Decorator')...

-> method decorator sẽ nhận 3 params: target, propertyKey, parameterIndex.

4ms01ss: dùng launch.json file để running by debugging decorators -> ok like ad, see .vscode\launch.json

4ms34ss: thêm 'Method Decorator 2' into multiple decorators, see app.ts

-> các decorators được xử lý từ trong ra ngoài (in -> out of class), trừ trên xuống dưới (in class), và theo bất đồng bộ (at 4ms34ss)
*/

//v5. Configuring Express Routes with Decorators
/*
src2 =============

00ss: áp dụng Decorators to a real project via Express Routes

08ss: Áp dụng các company globamantics sau đây cho mọi ts decorator projects:

1/Manufacturing company transitioning to TypeScript for internal API’s
2/Interested in using Decorators to define cross-cutting data rules (tức là các quy tắc logic handled).
3/Looking look automate route creation for data types using Node with Express
4/Looking to integrate data validation standards across all data types

40ss: học gì từ demo

52ss: Tổng quan cấu trúc project

1m22ss: cấu hình api server from Express lib: express, Middleware, CORS, ..vv, see APIServer.ts

2ms14ss: tạo file named app.ts (name file phải match với script in launch.json) và'new' instance of server để kết nối project to API server, see app.ts

-> test debug running in vsCode: Server is running on port 3000 -> ok like ad

2ms40ss: APIRoutes class để cấu hình routes, see app.ts

2ms58ss: cấu hình decorator/decorator factory of @route('get', '/')  for 1st route, see app.ts

3ms40ss: như đã biết, in decorator method thì dùng PropertyDescriptor param để bọc fn logic, nếu thỏa dk thì fn sau đó được passed to indexRoute. GIải thích login in fn, see app.ts

xx5: ad truy cập express's method (get, put, ...) bằng object's key nên hơi lạ mắt 1 xíu so với cách truyền thông: https://www.w3schools.com/js/js_objects.asp, see app.ts

vd: server.app[method](path, ...) === server.app.get(path, ...)

Tips: F12 tại 'app' (of server.app) trở về trước cho tới file named ..\express-serve-static-core\index.d.ts để thấy 'get' key mà ta passed

4ms41ss: testing.

1/turn on debug in vsCode -> Server is running on port 3000
2/Testing in thunder-client API app, see getHelloworld

Nhận ra: khi debug thì có chút lỗi (ko như của ad) nên ko thể xuất ra 'out' folder như ad, cho nên sử dụng ad's out folder.

5ms13ss: thêm @logRoute() (as a func) to public indexRoute... để getting statements khi calling API, see app.ts + getHelloworld

-> ok like ad: in DEBUG CONSOLE in vsCode, displays '/ GET Called' 

6ms19ss: @route('get', '/people') to public peopleRoute..., see app.ts

-> testing in API -> ok like ad, getting all peoplle, see getPeople

7ms01ss: thêm authenticaton. Giải thích, see app.ts

7ms53ss: dùng express Request/Response như 1 variable để sử dụng, see app.ts

-> ôn Type Assertions syntax 2: 'as' (v6-1m35ss)

8ms23ss: testing iun API -> ok like ad: , see getAuthPeople
console.log('headers.apikey ---', headers.apikey);
*/

//v6. Summary - done

/* Dir 2. Implementing TypeScript Decorators ---*/
//v0. Overview - done
/**/

//v1. Metadata and Reflection with Decorators
/*
Tìm hiểu chi tiết hơn về Decorator factory

10ss: 2 types of Decorator: 

1/actions: nơi thực hiện các actions
2/descriptions: mô tả 1 item for future use by project 

35ss: vd Decorator actions

49ss: Decorator Metadata là gì ?

-> Decorator Metadata mô tả chức năng mà nó đang đảm nhiệm (tức là các properties có trong Person class). Ví dụ

1m21ss: 4 đặc trưng của Decorator Metadata

1/TypeScript documentation recommends the reflect-metadata module (npm)

https://www.typescriptlang.org/docs/handbook/decorators.html#metadata

reflect-metadata API: https://www.npmjs.com/package/reflect-metadata#api

https://viblo.asia/p/typescript-decorator-va-metadata-reflection-m68Z0w2dKkG

-> reflect-metadata cho phép CRUD to entity (class) for modifies, giống như dùng ORMs (sequelize, Prisma, TypeORM, ...) để CRUD to db.

2/Metadata reflection is experimental and could change in a future release
3/Requires the emitDecoratorMetadata configuration value to be true
4/Enables you to store, read, and delete metadata for each decorator type

1m59ss: vd các Decorator Metadata inside a Person class (tức là các properties có trong Person class)
*/

//v2. Implementing the API Server
/*
src3, api-server-project-01 =============

using Decorators in API Server

01ss: 1 số notes trước khi dùng API Server

1/Utilizing jsonDB to mimic a production database
2/EntityRouter defines standard actions per entity based on REST standards
3/APIServer wraps express configuration for the server
4/BaseEntity is the base class for all of our entity types

51ss: tổng quan demo

1/Review initial project for API server
2/Review entity architecture to implementwith decorators

1m03ss: tổng quan các details of the project

dùng node-json-db npm (như kiểu 'json-server' npm) để tạo server ảo, then dùng node-json-db's APIs để CRUD to db, see app.ts + entityDatabase.json

https://www.npmjs.com/package/node-json-db

1m45ss: ....addEntity<Person>(Person) -> add a class named person as entity, see app.ts

-> Person class sẽ là 'entry point' - nơi mà ta sẽ add new ones, logic, models, ...vv, then để nó tự động tạo các routes và xử lý theo cross-cutting concerns (All logic business we handled) configured.

2ms09ss: details of Person/BaseEntity class, see Person.ts

3ms23ss:  details of api server - nơi (BE) kết nối db và client via express routes 

public addEntity... -> nơi cho ta add new entities type, see APIServer.ts

4ms04ss: details of routes - nơi cấu hình các routes mà client có thể sử dụng để tương tác (CRUD) tới server, see EntityRouter.ts
*/

//v3. Defining Entities with Decorators
/*
src3, api-server-project-02 =============

00ss: tổng quan demo

1/Creating decorators to define entity characteristics
2/Update BaseEntity to work with persistence objects
3/Update EntityRouter based on entity metadata
4/Update APIServer to work with entity typ

32ss: thuc hanh, tạo 1st decorator file named entity.ts

export function entity...(class decorator) -> define/storing 'entityname', this value sẽ dùng để set baseURL (parent route), see entity.ts + xx6

Như đã biết (v1-1m21ss), dùng defineMetadata API để tạo/define 1 property or obj for entity, see entity.ts

-> xx10: 'metadataKey' do ta tự đặt theo rule <name_u_want:passing_key_name>, miễn sao chúng đồng bộ to all related, và quan trọng nhất là naming sao cho coders hiểu fn đó có chức năng gì, see api-server-project-04 (entity.ts, BaseEntity.ts, EntityRouter.ts, ...) + xx15 (hiểu rõ b/c vẫn chỉ là getting class's props) 

https://stackoverflow.com/questions/42422094/where-do-i-find-the-metadatakey-values-used-in-reflect-metadata

-> xx12: Lưu ý, với 1 số 'passing_key_name' related to class's props/fns (exp: Person, ..etc) thì cần dùng chính xác name để nó có thể mapping, see api-server-project-04 (entity.ts, BaseEntity.ts, EntityRouter.ts, ...)

1m17ss: export function persist... (property decorator) -> get and store a property to the entity (class), see entity.ts

-> dùng getMetadata API để get all entity's props. So sánh, nếu 'objectProperties' don't match 'propertyKey' thì pushing a new property in.

-> Then, dùng lại defineMetadata để update các new props này to this entity (tức là define/store props to this entity/class)

1m45ss: export function id... (property decorator) -> define/setting id field to this entity'; 

-> 'id' cũng là 1 property in class, nhưng ta dùng decorator riêng để định nghĩa/xử lý logic riêng cho nó khác với các properties (dùng function persist) kia.

1m57ss: dùng import/export pattern for entity file, see index.ts
import { validator } from 'validator';
import { validate } from './decorators/validation';

2ms13ss: in Person class, apply entity file's decorators để tạo entity to this class, see Person.ts

xx9: params: target (class/object subject), propertyKey (props/keys in class or object) là các default params in decorators, vì đây là property decorators within a class nên cho phép ta tạo a list of props of this class, see entity.ts 

- Còn nếu custom decorators thì sẽ dùng params/agrs riêng cho decorator fn đó, see 32ss

xx8: 'type' là 1 Type Aliase: chấp nhận any types, thường dùng cho generic vars/fns, see validation.ts (project 4) + BaseEntity.ts

https://www.typescriptlang.org/docs/handbook/advanced-types.html

'type' ko phải interface nên ít khi dùng như interface dù có 1 số điểm chung: https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases

xx11: export type EntityTypeInstance<T> ...  => T: còn là 'narrow variable generic', see BaseEntity.ts, ôn (v3-1m13ss)

2ms40ss: static fromPersistenceObject... -> chức năng create an instance from POST, see BaseEntity.ts 

const persistedProperties: string[] = Reflect.getMetadata('entity:properties', output)..; -> getting existed entity's props by required decorator. Trong đó, output (target param) sẽ là entity/class is being passed from client. In this case là Person

const idProperty... -> get riêng 'id' by id decorator (vì nó được cấu hình decorator riêng)

const props.. -> get all keys/props (not values) từ client's object passed

if (persistedProperties.includes... -> so sánh existed and passed props (keys), nếu match gán client obj's value to output's key, then return output;

3ms41ss: getPersistenceObject(): any {... -> được dùng khi ta đã tạo/có an instance, see BaseEntity.ts 

vd: trước/sau khi POST 1 instance to db thì ta save 1 copy one for outputting to client's UI

const persistedProperties = Reflect.getMetadata('entity:properties', this);
-> target param dùng 'this' chính là Person, vì instance existed from Person (at 2ms40ss) trước đó

4ms14ss: in router file, private createEntity... -> Create a new instance (có kèm theo random id) by POST method from client, see EntityRouter.ts

let newEntity = EntityFactory.fromPersistenceObject<T>(req.body, this.classRef);

-> client passing data body to create a new instance obj. Trong đó, 'this.classRef' dùng 'xx11' để something is anything. In this case, classRef là Person class, then nó được passed ( gets/is passed) to ..fromPersistenceObject()

5ms45ss: private updateEntity... -> update data to an existed entity , see EntityRouter.ts

- in prod env, trước khi UPDATE thì phải có validators, but here is in lesson

6ms28ss: public addEntity... -> getting entity (class) by name, then passing configured routes to this entity via EntityRouter's ctor, then cấu hình Express for using router of API endpoints to this entity, see APIServer.ts + EntityRouter.ts

-> xx13: public addEntity<... biết được 'clazz' là gì để lấy ra 'name' là nhờ 'name/class-constructor' đã được defined trước đó in function entity..., see entity.ts + APIServer.ts

7ms11ss: testing

1/running debug -> check in DEBUG CONSOLE
2/test in API with POST: http://localhost:3000/people, see postAPeople + entityDatabase.json

xx6: http://localhost:3000/people là 1 parent route như đã biết (v3-32ss), vì 'people' là name of decorator entity/class, see Person.ts + EntityRouter.ts

vd: POST a people: http://localhost:3000/people 
vd: GET all people: http://localhost:3000/people 
vd: GET a people by id: http://localhost:3000/people/0365f3f5-468c-4abd-8232-bbdca6131e62
*/

//v4. Implementing Logging
/*
src3, api-server-project-03 =============

00ss: cấu hình log file để log API calls

38ss: cấu hình logRoute decorator. Giải thích, see log.ts

1m09ss: wrapping Request/Response's data thành các arguments mà được passed vào chúng (arguments), see log.ts

1m27ss: vì làm việc với PropertyDescriptor nên cần save original func để ref back to the original fn (tức là fn liên quan đến route is being calling) nếu ta modify it, see log.ts

-> in this case, ta sẽ modify (wrapping Request/Response's data...) nên sẽ call original fn với original args được passed in -> original.apply ..., see log.ts

-> có thể dùng logRoute decorator như 1 property nói riêng, not func như trước đó (v5-5ms13ss), see log.ts -> function logRoute2

1m46ss: console.log(`${req.ip}... -> logging statements, see log.ts

if (['PUT', 'POST']... nếu là các methods này thì output the body to client

2ms06ss:  in EntityRouter, dùng @logRoute to fns mà triển khai routes, see EntityRouter.ts

2ms26ss: testing

1/on debugging
2/test in API app, see postAPeople + DEBUG CONSOLE

xx7: lỗi: Cannot read properties of undefined (reading 'ip') -> do 1st running thì req/res là undefined nên báo lỗi at debugging -> cần ràng buộc kỹ hơn: if (req != undefined && res != undefined) {..., see log.ts
*/

//v5. Validating Entities with Decorators
/*
src3, api-server-project-4 =============

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

-> xx15: Lưu ý: mặc dù metadataKey named 'validation:properties' nhưng b/c vẫn là get all class's props, ta naming như vậy để coders nhìn vào hiểu đây là chức năng gì.

- let validators: ValidationRule[]... -> get về all 'property validators' dựa theo 'propertyKey' (class's property, 1 property có thể có nhiều validators). Then, push các client passing rules to 'validators' (existed rules) để check rules via 'ValidationRule' -> 'ValidationFunction', nếu ok thì return... như đã nói (at v5-1m59ss).

-> Sau đó define/setting lại all validators cho entity based on new ones -> entity sẽ nhận các new validators này.

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
src3, api-server-project-5 =============

-- remove '//' from 4

*/
