
/*
import World from './world'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello World!!!')
world.sayHello(root)
*/


// ------変数の型定義------
//import {primitiveSample, notExistSample, anySample, unknownSample} from './basic'
// ------関数の型定義------
import {logMessage, logMessage5, logMessage6} from './function/basic'
import {isUserSignedIn, isUserSignedIn2} from './function/parameters'
// ------オブジェクトの型定義------
import objectSample from './object/object'
import typeAliasSample from './object/alias'
// ------配列の型定義------
import arraySample from './array/array'
import tupleSample from './array/tuple'

import callbackSample from './asynchronous/callback'

// ------変数の型定義------
//primitiveSample()
//notExistSample()
//anySample()
//unknownSample()

// ------関数の型定義------
// logMessage('hogehoge')
// isUserSignedIn('ABC', 'masashi')
// isUserSignedIn2('ABC')
// logMessage5('log5 です')
// logMessage6('log6 です')

// ------オブジェクトの型定義------
// objectSample()
// typeAliasSample()

// ------配列の型定義------
// arraySample()
// tupleSample()
callbackSample()
