(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_enqueueEffects(managers, result.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.expect.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.expect.b, xhr)); });
		$elm$core$Maybe$isJust(request.tracker) && _Http_track(router, xhr, request.tracker.a);

		try {
			xhr.open(request.method, request.url, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.url));
		}

		_Http_configureRequest(xhr, request);

		request.body.a && xhr.setRequestHeader('Content-Type', request.body.a);
		xhr.send(request.body.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.headers; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.timeout.a || 0;
	xhr.responseType = request.expect.d;
	xhr.withCredentials = request.allowCookiesFromOtherDomains;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		url: xhr.responseURL,
		statusCode: xhr.status,
		statusText: xhr.statusText,
		headers: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			sent: event.loaded,
			size: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			received: event.loaded,
			size: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $elm$random$Random$maxInt = 2147483647;
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$random$Random$minInt = -2147483648;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Basics$round = _Basics_round;
var $elm$core$String$toLower = _String_toLower;
var $author$project$Api$init = function (_v0) {
	var user = _v0.user;
	var currentTime = _v0.currentTime;
	var initialSeed = _v0.initialSeed;
	return _Utils_Tuple2(
		{
			currentTime: $elm$time$Time$millisToPosix(currentTime),
			seed: $elm$random$Random$initialSeed(
				$elm$random$Random$minInt + $elm$core$Basics$round(initialSeed * ($elm$random$Random$maxInt * 2))),
			user: $elm$core$String$toLower(user)
		},
		$elm$core$Platform$Cmd$none);
};
var $author$project$Main$init = $author$project$Api$init;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Api$GotTime = function (a) {
	return {$: 'GotTime', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 'Nothing') {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.processes;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $author$project$Api$DeleteBudget = function (a) {
	return {$: 'DeleteBudget', a: a};
};
var $author$project$Api$DeleteSecret = function (a) {
	return {$: 'DeleteSecret', a: a};
};
var $author$project$Api$DeleteTodoEntry = function (a) {
	return {$: 'DeleteTodoEntry', a: a};
};
var $author$project$Api$ForceReset = {$: 'ForceReset'};
var $author$project$Api$GotInput = function (a) {
	return {$: 'GotInput', a: a};
};
var $author$project$Api$InsertBudget = function (a) {
	return {$: 'InsertBudget', a: a};
};
var $author$project$Api$InsertSecret = function (a) {
	return {$: 'InsertSecret', a: a};
};
var $author$project$Api$InsertTodoEntry = function (a) {
	return {$: 'InsertTodoEntry', a: a};
};
var $author$project$DTT$Data$Error$ParsingError = function (a) {
	return {$: 'ParsingError', a: a};
};
var $author$project$Api$SyncBudget = {$: 'SyncBudget'};
var $author$project$Api$SyncSecret = {$: 'SyncSecret'};
var $author$project$Api$SyncTodoEntry = {$: 'SyncTodoEntry'};
var $author$project$Api$ToggleTodoEntry = function (a) {
	return {$: 'ToggleTodoEntry', a: a};
};
var $author$project$Api$UpdateBudget = function (a) {
	return {$: 'UpdateBudget', a: a};
};
var $author$project$Api$UpdateTodoEntry = function (a) {
	return {$: 'UpdateTodoEntry', a: a};
};
var $author$project$DTT$Data$Error$WrongInputFormat = function (a) {
	return {$: 'WrongInputFormat', a: a};
};
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $author$project$DTT$Data$InputForm$InputForm = F5(
	function (page, action, id, content, amount) {
		return {action: action, amount: amount, content: content, id: id, page: page};
	});
var $miniBill$elm_codec$Codec$Codec = function (a) {
	return {$: 'Codec', a: a};
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $miniBill$elm_codec$Codec$buildObject = function (_v0) {
	var om = _v0.a;
	return $miniBill$elm_codec$Codec$Codec(
		{
			decoder: om.decoder,
			encoder: function (v) {
				return $elm$json$Json$Encode$object(
					om.encoder(v));
			}
		});
};
var $miniBill$elm_codec$Codec$ObjectCodec = function (a) {
	return {$: 'ObjectCodec', a: a};
};
var $miniBill$elm_codec$Codec$decoder = function (_v0) {
	var m = _v0.a;
	return m.decoder;
};
var $miniBill$elm_codec$Codec$encoder = function (_v0) {
	var m = _v0.a;
	return m.encoder;
};
var $elm$json$Json$Decode$map2 = _Json_map2;
var $miniBill$elm_codec$Codec$field = F4(
	function (name, getter, codec, _v0) {
		var ocodec = _v0.a;
		return $miniBill$elm_codec$Codec$ObjectCodec(
			{
				decoder: A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (f, x) {
							return f(x);
						}),
					ocodec.decoder,
					A2(
						$elm$json$Json$Decode$field,
						name,
						$miniBill$elm_codec$Codec$decoder(codec))),
				encoder: function (v) {
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							name,
							A2(
								$miniBill$elm_codec$Codec$encoder,
								codec,
								getter(v))),
						ocodec.encoder(v));
				}
			});
	});
var $miniBill$elm_codec$Codec$build = F2(
	function (encoder_, decoder_) {
		return $miniBill$elm_codec$Codec$Codec(
			{decoder: decoder_, encoder: encoder_});
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $miniBill$elm_codec$Codec$int = A2($miniBill$elm_codec$Codec$build, $elm$json$Json$Encode$int, $elm$json$Json$Decode$int);
var $elm$json$Json$Decode$map = _Json_map1;
var $miniBill$elm_codec$Codec$map = F3(
	function (go, back, codec) {
		return $miniBill$elm_codec$Codec$Codec(
			{
				decoder: A2(
					$elm$json$Json$Decode$map,
					go,
					$miniBill$elm_codec$Codec$decoder(codec)),
				encoder: function (v) {
					return A2(
						$miniBill$elm_codec$Codec$encoder,
						codec,
						back(v));
				}
			});
	});
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $miniBill$elm_codec$Codec$object = function (ctor) {
	return $miniBill$elm_codec$Codec$ObjectCodec(
		{
			decoder: $elm$json$Json$Decode$succeed(ctor),
			encoder: function (_v0) {
				return _List_Nil;
			}
		});
};
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $miniBill$elm_codec$Codec$maybe = function (codec) {
	return $miniBill$elm_codec$Codec$Codec(
		{
			decoder: $elm$json$Json$Decode$maybe(
				$miniBill$elm_codec$Codec$decoder(codec)),
			encoder: function (v) {
				if (v.$ === 'Nothing') {
					return $elm$json$Json$Encode$null;
				} else {
					var x = v.a;
					return A2($miniBill$elm_codec$Codec$encoder, codec, x);
				}
			}
		});
};
var $miniBill$elm_codec$Codec$optionalField = F4(
	function (name, getter, codec, _v0) {
		var ocodec = _v0.a;
		return $miniBill$elm_codec$Codec$ObjectCodec(
			{
				decoder: A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (f, x) {
							return f(x);
						}),
					ocodec.decoder,
					$elm$json$Json$Decode$maybe(
						A2(
							$elm$json$Json$Decode$field,
							name,
							$miniBill$elm_codec$Codec$decoder(codec)))),
				encoder: function (v) {
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							name,
							A2(
								$miniBill$elm_codec$Codec$encoder,
								$miniBill$elm_codec$Codec$maybe(codec),
								getter(v))),
						ocodec.encoder(v));
				}
			});
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $miniBill$elm_codec$Codec$string = A2($miniBill$elm_codec$Codec$build, $elm$json$Json$Encode$string, $elm$json$Json$Decode$string);
var $author$project$DTT$Data$InputForm$codec = $miniBill$elm_codec$Codec$buildObject(
	A4(
		$miniBill$elm_codec$Codec$optionalField,
		'amount',
		function ($) {
			return $.amount;
		},
		$miniBill$elm_codec$Codec$int,
		A4(
			$miniBill$elm_codec$Codec$optionalField,
			'content',
			function ($) {
				return $.content;
			},
			$miniBill$elm_codec$Codec$string,
			A4(
				$miniBill$elm_codec$Codec$optionalField,
				'id',
				function ($) {
					return $.id;
				},
				$miniBill$elm_codec$Codec$string,
				A4(
					$miniBill$elm_codec$Codec$field,
					'action',
					function ($) {
						return $.action;
					},
					A3($miniBill$elm_codec$Codec$map, $elm$core$String$toLower, $elm$core$String$toLower, $miniBill$elm_codec$Codec$string),
					A4(
						$miniBill$elm_codec$Codec$field,
						'page',
						function ($) {
							return $.page;
						},
						A3($miniBill$elm_codec$Codec$map, $elm$core$String$toLower, $elm$core$String$toLower, $miniBill$elm_codec$Codec$string),
						$miniBill$elm_codec$Codec$object($author$project$DTT$Data$InputForm$InputForm)))))));
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $miniBill$elm_codec$Codec$decodeValue = function (codec) {
	return $elm$json$Json$Decode$decodeValue(
		$miniBill$elm_codec$Codec$decoder(codec));
};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $author$project$Api$handleInput = A2(
	$elm$core$Basics$composeR,
	$miniBill$elm_codec$Codec$decodeValue($author$project$DTT$Data$InputForm$codec),
	A2(
		$elm$core$Basics$composeR,
		$elm$core$Result$mapError(
			A2($elm$core$Basics$composeR, $elm$json$Json$Decode$errorToString, $author$project$DTT$Data$Error$ParsingError)),
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Result$andThen(
				function (form) {
					var page = form.page;
					var action = form.action;
					var id = form.id;
					var content = form.content;
					var amount = form.amount;
					switch (page) {
						case 'admin':
							var _v1 = _Utils_Tuple2(
								action,
								_Utils_Tuple3(id, content, amount));
							if ((((_v1.a === 'reset') && (_v1.b.a.$ === 'Nothing')) && (_v1.b.b.$ === 'Nothing')) && (_v1.b.c.$ === 'Nothing')) {
								var _v2 = _v1.b;
								var _v3 = _v2.a;
								var _v4 = _v2.b;
								var _v5 = _v2.c;
								return $elm$core$Result$Ok($author$project$Api$ForceReset);
							} else {
								return $elm$core$Result$Err(
									$author$project$DTT$Data$Error$WrongInputFormat(form));
							}
						case 'todo':
							var _v6 = _Utils_Tuple2(
								action,
								_Utils_Tuple3(id, content, amount));
							_v6$5:
							while (true) {
								if (_v6.b.a.$ === 'Just') {
									if (_v6.b.b.$ === 'Just') {
										if ((_v6.a === 'update') && (_v6.b.c.$ === 'Nothing')) {
											var _v13 = _v6.b;
											var i = _v13.a.a;
											var message = _v13.b.a;
											var _v14 = _v13.c;
											return $elm$core$Result$Ok(
												$author$project$Api$UpdateTodoEntry(
													{id: i, message: message}));
										} else {
											break _v6$5;
										}
									} else {
										if (_v6.b.c.$ === 'Nothing') {
											switch (_v6.a) {
												case 'delete':
													var _v10 = _v6.b;
													var i = _v10.a.a;
													var _v11 = _v10.b;
													var _v12 = _v10.c;
													return $elm$core$Result$Ok(
														$author$project$Api$DeleteTodoEntry(i));
												case 'toggle':
													var _v15 = _v6.b;
													var i = _v15.a.a;
													var _v16 = _v15.b;
													var _v17 = _v15.c;
													return $elm$core$Result$Ok(
														$author$project$Api$ToggleTodoEntry(i));
												default:
													break _v6$5;
											}
										} else {
											break _v6$5;
										}
									}
								} else {
									if (_v6.b.b.$ === 'Just') {
										if ((_v6.a === 'insert') && (_v6.b.c.$ === 'Nothing')) {
											var _v7 = _v6.b;
											var _v8 = _v7.a;
											var message = _v7.b.a;
											var _v9 = _v7.c;
											return $elm$core$Result$Ok(
												$author$project$Api$InsertTodoEntry(message));
										} else {
											break _v6$5;
										}
									} else {
										if ((_v6.a === 'sync') && (_v6.b.c.$ === 'Nothing')) {
											var _v18 = _v6.b;
											var _v19 = _v18.a;
											var _v20 = _v18.b;
											var _v21 = _v18.c;
											return $elm$core$Result$Ok($author$project$Api$SyncTodoEntry);
										} else {
											break _v6$5;
										}
									}
								}
							}
							return $elm$core$Result$Err(
								$author$project$DTT$Data$Error$WrongInputFormat(form));
						case 'secrets':
							var _v22 = _Utils_Tuple2(
								action,
								_Utils_Tuple3(id, content, amount));
							_v22$3:
							while (true) {
								if (_v22.b.a.$ === 'Nothing') {
									if (_v22.b.b.$ === 'Just') {
										if (_v22.b.c.$ === 'Nothing') {
											switch (_v22.a) {
												case 'insert':
													var _v23 = _v22.b;
													var _v24 = _v23.a;
													var secret = _v23.b.a;
													var _v25 = _v23.c;
													return $elm$core$Result$Ok(
														$author$project$Api$InsertSecret(secret));
												case 'delete':
													var _v26 = _v22.b;
													var _v27 = _v26.a;
													var secret = _v26.b.a;
													var _v28 = _v26.c;
													return $elm$core$Result$Ok(
														$author$project$Api$DeleteSecret(secret));
												default:
													break _v22$3;
											}
										} else {
											break _v22$3;
										}
									} else {
										if ((_v22.a === 'sync') && (_v22.b.c.$ === 'Nothing')) {
											var _v29 = _v22.b;
											var _v30 = _v29.a;
											var _v31 = _v29.b;
											var _v32 = _v29.c;
											return $elm$core$Result$Ok($author$project$Api$SyncSecret);
										} else {
											break _v22$3;
										}
									}
								} else {
									break _v22$3;
								}
							}
							return $elm$core$Result$Err(
								$author$project$DTT$Data$Error$WrongInputFormat(form));
						case 'budget':
							var _v33 = _Utils_Tuple2(
								action,
								_Utils_Tuple3(id, content, amount));
							_v33$4:
							while (true) {
								if (_v33.b.a.$ === 'Just') {
									if (_v33.b.b.$ === 'Nothing') {
										if ((_v33.a === 'delete') && (_v33.b.c.$ === 'Nothing')) {
											var _v36 = _v33.b;
											var i = _v36.a.a;
											var _v37 = _v36.b;
											var _v38 = _v36.c;
											return $elm$core$Result$Ok(
												$author$project$Api$DeleteBudget(i));
										} else {
											break _v33$4;
										}
									} else {
										if ((_v33.a === 'update') && (_v33.b.c.$ === 'Just')) {
											var _v39 = _v33.b;
											var i = _v39.a.a;
											var reference = _v39.b.a;
											var cent = _v39.c.a;
											return $elm$core$Result$Ok(
												$author$project$Api$UpdateBudget(
													{cent: cent, id: i, reference: reference}));
										} else {
											break _v33$4;
										}
									}
								} else {
									if (_v33.b.b.$ === 'Just') {
										if ((_v33.a === 'insert') && (_v33.b.c.$ === 'Just')) {
											var _v34 = _v33.b;
											var _v35 = _v34.a;
											var reference = _v34.b.a;
											var cent = _v34.c.a;
											return $elm$core$Result$Ok(
												$author$project$Api$InsertBudget(
													{cent: cent, reference: reference}));
										} else {
											break _v33$4;
										}
									} else {
										if ((_v33.a === 'sync') && (_v33.b.c.$ === 'Nothing')) {
											var _v40 = _v33.b;
											var _v41 = _v40.a;
											var _v42 = _v40.b;
											var _v43 = _v40.c;
											return $elm$core$Result$Ok($author$project$Api$SyncBudget);
										} else {
											break _v33$4;
										}
									}
								}
							}
							return $elm$core$Result$Err(
								$author$project$DTT$Data$Error$WrongInputFormat(form));
						default:
							return $elm$core$Result$Err(
								$author$project$DTT$Data$Error$WrongInputFormat(form));
					}
				}),
			$author$project$Api$GotInput)));
var $author$project$Api$subscriptions = function (toElm) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2($elm$time$Time$every, 10000, $author$project$Api$GotTime),
				toElm($author$project$Api$handleInput)
			]));
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Main$toElm = _Platform_incomingPort('toElm', $elm$json$Json$Decode$value);
var $author$project$Main$subscriptions = function (_v0) {
	return $author$project$Api$subscriptions($author$project$Main$toElm);
};
var $author$project$Main$fromElm = _Platform_outgoingPort('fromElm', $elm$core$Basics$identity);
var $author$project$Api$GotBudgetResponse = function (a) {
	return {$: 'GotBudgetResponse', a: a};
};
var $author$project$Api$GotSecretResponse = function (a) {
	return {$: 'GotSecretResponse', a: a};
};
var $author$project$Api$GotTodoResponse = function (a) {
	return {$: 'GotTodoResponse', a: a};
};
var $author$project$DTT$Data$Error$HttpError = function (a) {
	return {$: 'HttpError', a: a};
};
var $author$project$DTT$Page$Todo$HttpError = function (a) {
	return {$: 'HttpError', a: a};
};
var $author$project$DTT$Data$Error$IsMatched = {$: 'IsMatched'};
var $author$project$DTT$Data$Error$NoPermission = {$: 'NoPermission'};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $author$project$DTT$Data$OutputForm$empty = {budget: $elm$core$Maybe$Nothing, error: $elm$core$Maybe$Nothing, secrets: $elm$core$Maybe$Nothing, todo: $elm$core$Maybe$Nothing};
var $author$project$DTT$Data$OutputForm$budget = function (b) {
	return _Utils_update(
		$author$project$DTT$Data$OutputForm$empty,
		{
			budget: $elm$core$Maybe$Just(b)
		});
};
var $author$project$DTT$Data$OutputForm$OutputForm = F4(
	function (error, todo, secrets, budget) {
		return {budget: budget, error: error, secrets: secrets, todo: todo};
	});
var $author$project$DTT$Data$Budget$Budget = F2(
	function (totalCent, spendings) {
		return {spendings: spendings, totalCent: totalCent};
	});
var $author$project$DTT$Data$Budget$Spending = F5(
	function (id, user, cent, reference, lastUpdated) {
		return {cent: cent, id: id, lastUpdated: lastUpdated, reference: reference, user: user};
	});
var $author$project$DTT$Data$Id$codec = $miniBill$elm_codec$Codec$string;
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $author$project$DTT$Data$codecPosix = A3($miniBill$elm_codec$Codec$map, $elm$time$Time$millisToPosix, $elm$time$Time$posixToMillis, $miniBill$elm_codec$Codec$int);
var $author$project$DTT$Data$Budget$codecSpending = $miniBill$elm_codec$Codec$buildObject(
	A4(
		$miniBill$elm_codec$Codec$field,
		'lastUpdated',
		function ($) {
			return $.lastUpdated;
		},
		$author$project$DTT$Data$codecPosix,
		A4(
			$miniBill$elm_codec$Codec$field,
			'reference',
			function ($) {
				return $.reference;
			},
			$miniBill$elm_codec$Codec$string,
			A4(
				$miniBill$elm_codec$Codec$field,
				'cent',
				function ($) {
					return $.cent;
				},
				$miniBill$elm_codec$Codec$int,
				A4(
					$miniBill$elm_codec$Codec$field,
					'user',
					function ($) {
						return $.user;
					},
					$miniBill$elm_codec$Codec$string,
					A4(
						$miniBill$elm_codec$Codec$field,
						'id',
						function ($) {
							return $.id;
						},
						$author$project$DTT$Data$Id$codec,
						$miniBill$elm_codec$Codec$object($author$project$DTT$Data$Budget$Spending)))))));
var $miniBill$elm_codec$Codec$composite = F3(
	function (enc, dec, _v0) {
		var codec = _v0.a;
		return $miniBill$elm_codec$Codec$Codec(
			{
				decoder: dec(codec.decoder),
				encoder: enc(codec.encoder)
			});
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $miniBill$elm_codec$Codec$list = A2($miniBill$elm_codec$Codec$composite, $elm$json$Json$Encode$list, $elm$json$Json$Decode$list);
var $author$project$DTT$Data$Budget$codec = $miniBill$elm_codec$Codec$buildObject(
	A4(
		$miniBill$elm_codec$Codec$field,
		'spendings',
		function ($) {
			return $.spendings;
		},
		$miniBill$elm_codec$Codec$list($author$project$DTT$Data$Budget$codecSpending),
		A4(
			$miniBill$elm_codec$Codec$field,
			'totalCent',
			function ($) {
				return $.totalCent;
			},
			$miniBill$elm_codec$Codec$int,
			$miniBill$elm_codec$Codec$object($author$project$DTT$Data$Budget$Budget))));
var $author$project$DTT$Data$Error$ErrorJson = F2(
	function (errorType, content) {
		return {content: content, errorType: errorType};
	});
var $author$project$DTT$Data$Error$codec = $miniBill$elm_codec$Codec$buildObject(
	A4(
		$miniBill$elm_codec$Codec$field,
		'content',
		function ($) {
			return $.content;
		},
		$miniBill$elm_codec$Codec$string,
		A4(
			$miniBill$elm_codec$Codec$field,
			'errorType',
			function ($) {
				return $.errorType;
			},
			A3($miniBill$elm_codec$Codec$map, $elm$core$String$toLower, $elm$core$String$toLower, $miniBill$elm_codec$Codec$string),
			$miniBill$elm_codec$Codec$object($author$project$DTT$Data$Error$ErrorJson))));
var $author$project$DTT$Data$Secret$Secret = F3(
	function (hash, user, raw) {
		return {hash: hash, raw: raw, user: user};
	});
var $author$project$DTT$Data$Secret$codec = $miniBill$elm_codec$Codec$buildObject(
	A4(
		$miniBill$elm_codec$Codec$field,
		'raw',
		function ($) {
			return $.raw;
		},
		$miniBill$elm_codec$Codec$maybe($miniBill$elm_codec$Codec$string),
		A4(
			$miniBill$elm_codec$Codec$field,
			'user',
			function ($) {
				return $.user;
			},
			$miniBill$elm_codec$Codec$string,
			A4(
				$miniBill$elm_codec$Codec$field,
				'hash',
				function ($) {
					return $.hash;
				},
				$miniBill$elm_codec$Codec$string,
				$miniBill$elm_codec$Codec$object($author$project$DTT$Data$Secret$Secret)))));
var $author$project$DTT$Data$TodoEntry$TodoEntry = F5(
	function (id, user, message, lastUpdated, checked) {
		return {checked: checked, id: id, lastUpdated: lastUpdated, message: message, user: user};
	});
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Encode$bool = _Json_wrap;
var $miniBill$elm_codec$Codec$bool = A2($miniBill$elm_codec$Codec$build, $elm$json$Json$Encode$bool, $elm$json$Json$Decode$bool);
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$DTT$Data$TodoEntry$codec = $miniBill$elm_codec$Codec$buildObject(
	A4(
		$miniBill$elm_codec$Codec$field,
		'checked',
		function ($) {
			return $.checked;
		},
		A3(
			$miniBill$elm_codec$Codec$map,
			$elm$core$Maybe$Just,
			$elm$core$Maybe$withDefault(false),
			$miniBill$elm_codec$Codec$bool),
		A4(
			$miniBill$elm_codec$Codec$field,
			'lastUpdated',
			function ($) {
				return $.lastUpdated;
			},
			$author$project$DTT$Data$codecPosix,
			A4(
				$miniBill$elm_codec$Codec$field,
				'message',
				function ($) {
					return $.message;
				},
				$miniBill$elm_codec$Codec$string,
				A4(
					$miniBill$elm_codec$Codec$field,
					'user',
					function ($) {
						return $.user;
					},
					$miniBill$elm_codec$Codec$string,
					A4(
						$miniBill$elm_codec$Codec$field,
						'id',
						function ($) {
							return $.id;
						},
						$author$project$DTT$Data$Id$codec,
						$miniBill$elm_codec$Codec$object($author$project$DTT$Data$TodoEntry$TodoEntry)))))));
var $author$project$DTT$Data$OutputForm$codec = $miniBill$elm_codec$Codec$buildObject(
	A4(
		$miniBill$elm_codec$Codec$field,
		'budget',
		function ($) {
			return $.budget;
		},
		$miniBill$elm_codec$Codec$maybe($author$project$DTT$Data$Budget$codec),
		A4(
			$miniBill$elm_codec$Codec$field,
			'secrets',
			function ($) {
				return $.secrets;
			},
			$miniBill$elm_codec$Codec$maybe(
				$miniBill$elm_codec$Codec$list($author$project$DTT$Data$Secret$codec)),
			A4(
				$miniBill$elm_codec$Codec$field,
				'todo',
				function ($) {
					return $.todo;
				},
				$miniBill$elm_codec$Codec$maybe(
					$miniBill$elm_codec$Codec$list($author$project$DTT$Data$TodoEntry$codec)),
				A4(
					$miniBill$elm_codec$Codec$field,
					'error',
					function ($) {
						return $.error;
					},
					$miniBill$elm_codec$Codec$maybe($author$project$DTT$Data$Error$codec),
					$miniBill$elm_codec$Codec$object($author$project$DTT$Data$OutputForm$OutputForm))))));
var $author$project$DTT$Page$Budget$HttpError = function (a) {
	return {$: 'HttpError', a: a};
};
var $author$project$DTT$Page$Budget$NoPermission = {$: 'NoPermission'};
var $author$project$DTT$String$budget = '/budget';
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 'BadStatus_', a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 'BadUrl_', a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 'GoodStatus_', a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 'NetworkError_'};
var $elm$http$Http$Receiving = function (a) {
	return {$: 'Receiving', a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 'Sending', a: a};
};
var $elm$http$Http$Timeout_ = {$: 'Timeout_'};
var $elm$core$Maybe$isJust = function (maybe) {
	if (maybe.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$emptyBody = _Http_emptyBody;
var $elm$http$Http$BadStatus = function (a) {
	return {$: 'BadStatus', a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 'BadUrl', a: a};
};
var $elm$http$Http$NetworkError = {$: 'NetworkError'};
var $elm$http$Http$Timeout = {$: 'Timeout'};
var $elm$http$Http$stringResolver = A2(_Http_expect, '', $elm$core$Basics$identity);
var $Orasund$elm_jsonstore$Jsonstore$resolveWhatever = $elm$http$Http$stringResolver(
	function (response) {
		switch (response.$) {
			case 'BadUrl_':
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 'Timeout_':
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 'NetworkError_':
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 'BadStatus_':
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.statusCode));
			default:
				return $elm$core$Result$Ok(_Utils_Tuple0);
		}
	});
var $elm$core$Task$fail = _Scheduler_fail;
var $elm$http$Http$resultToTask = function (result) {
	if (result.$ === 'Ok') {
		var a = result.a;
		return $elm$core$Task$succeed(a);
	} else {
		var x = result.a;
		return $elm$core$Task$fail(x);
	}
};
var $elm$http$Http$task = function (r) {
	return A3(
		_Http_toTask,
		_Utils_Tuple0,
		$elm$http$Http$resultToTask,
		{allowCookiesFromOtherDomains: false, body: r.body, expect: r.resolver, headers: r.headers, method: r.method, timeout: r.timeout, tracker: $elm$core$Maybe$Nothing, url: r.url});
};
var $Orasund$elm_jsonstore$Jsonstore$delete = function (url) {
	return $elm$http$Http$task(
		{body: $elm$http$Http$emptyBody, headers: _List_Nil, method: 'DELETE', resolver: $Orasund$elm_jsonstore$Jsonstore$resolveWhatever, timeout: $elm$core$Maybe$Nothing, url: url});
};
var $author$project$DTT$Data$url = 'https://www.jsonstore.io/ef32899156a024d90ab93b0bd506a4930cbcd4754609d6fd9c9f35a9fc4a04b3';
var $author$project$DTT$Data$Budget$deleteResponse = function (id) {
	return $Orasund$elm_jsonstore$Jsonstore$delete($author$project$DTT$Data$url + ($author$project$DTT$String$budget + ('/' + id)));
};
var $Orasund$elm_jsonstore$Jsonstore$decode = function (_v0) {
	var _v1 = _v0.a;
	var fun = _v1.a;
	return fun;
};
var $Orasund$elm_jsonstore$Jsonstore$Json = function (a) {
	return {$: 'Json', a: a};
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$json$Json$Encode$dict = F3(
	function (toKey, toValue, dictionary) {
		return _Json_wrap(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (key, value, obj) {
						return A3(
							_Json_addField,
							toKey(key),
							toValue(value),
							obj);
					}),
				_Json_emptyObject(_Utils_Tuple0),
				dictionary));
	});
var $Orasund$elm_jsonstore$Jsonstore$dict = function (_v0) {
	var _v1 = _v0.a;
	var d = _v1.a;
	var e = _v1.b;
	return $Orasund$elm_jsonstore$Jsonstore$Json(
		_Utils_Tuple2(
			$elm$json$Json$Decode$dict(d),
			A2($elm$json$Json$Encode$dict, $elm$core$Basics$identity, e)));
};
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$nullable = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder)
			]));
};
var $elm$http$Http$BadBody = function (a) {
	return {$: 'BadBody', a: a};
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $Orasund$elm_jsonstore$Jsonstore$resolve = function (decoder) {
	return $elm$http$Http$stringResolver(
		function (response) {
			switch (response.$) {
				case 'BadUrl_':
					var url = response.a;
					return $elm$core$Result$Err(
						$elm$http$Http$BadUrl(url));
				case 'Timeout_':
					return $elm$core$Result$Err($elm$http$Http$Timeout);
				case 'NetworkError_':
					return $elm$core$Result$Err($elm$http$Http$NetworkError);
				case 'BadStatus_':
					var metadata = response.a;
					return $elm$core$Result$Err(
						$elm$http$Http$BadStatus(metadata.statusCode));
				default:
					var body = response.b;
					var _v1 = A2($elm$json$Json$Decode$decodeString, decoder, body);
					if (_v1.$ === 'Ok') {
						var value = _v1.a;
						return $elm$core$Result$Ok(value);
					} else {
						var err = _v1.a;
						return $elm$core$Result$Err(
							$elm$http$Http$BadBody(
								$elm$json$Json$Decode$errorToString(err)));
					}
			}
		});
};
var $Orasund$elm_jsonstore$Jsonstore$get = F2(
	function (url, decoder) {
		return $elm$http$Http$task(
			{
				body: $elm$http$Http$emptyBody,
				headers: _List_Nil,
				method: 'GET',
				resolver: $Orasund$elm_jsonstore$Jsonstore$resolve(
					A2(
						$elm$json$Json$Decode$field,
						'result',
						$elm$json$Json$Decode$nullable(decoder))),
				timeout: $elm$core$Maybe$Nothing,
				url: url
			});
	});
var $Orasund$elm_jsonstore$Jsonstore$int = $Orasund$elm_jsonstore$Jsonstore$Json(
	_Utils_Tuple2($elm$json$Json$Decode$int, $elm$json$Json$Encode$int));
var $Orasund$elm_jsonstore$Jsonstore$string = $Orasund$elm_jsonstore$Jsonstore$Json(
	_Utils_Tuple2($elm$json$Json$Decode$string, $elm$json$Json$Encode$string));
var $author$project$DTT$Data$Id$json = $Orasund$elm_jsonstore$Jsonstore$string;
var $Orasund$elm_jsonstore$Jsonstore$map = F3(
	function (dFun, eFun, _v0) {
		var _v1 = _v0.a;
		var d = _v1.a;
		var e = _v1.b;
		return $Orasund$elm_jsonstore$Jsonstore$Json(
			_Utils_Tuple2(
				A2($elm$json$Json$Decode$map, dFun, d),
				A2($elm$core$Basics$composeR, eFun, e)));
	});
var $author$project$DTT$Data$jsonPosix = A3($Orasund$elm_jsonstore$Jsonstore$map, $elm$time$Time$millisToPosix, $elm$time$Time$posixToMillis, $Orasund$elm_jsonstore$Jsonstore$int);
var $Orasund$elm_jsonstore$Jsonstore$JsonObject = function (a) {
	return {$: 'JsonObject', a: a};
};
var $Orasund$elm_jsonstore$Jsonstore$object = function (fun) {
	return $Orasund$elm_jsonstore$Jsonstore$JsonObject(
		_Utils_Tuple2(
			$elm$json$Json$Decode$succeed(fun),
			_List_Nil));
};
var $Orasund$elm_jsonstore$Jsonstore$toJson = function (_v0) {
	var _v1 = _v0.a;
	var d = _v1.a;
	var e = _v1.b;
	return $Orasund$elm_jsonstore$Jsonstore$Json(
		_Utils_Tuple2(
			d,
			function (l) {
				return function (obj) {
					return $elm$json$Json$Encode$object(
						$elm$core$List$reverse(
							A2(
								$elm$core$List$map,
								function (_v2) {
									var name = _v2.a;
									var fun = _v2.b;
									return _Utils_Tuple2(
										name,
										fun(obj));
								},
								l)));
				};
			}(e)));
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $Orasund$elm_jsonstore$Jsonstore$with = F4(
	function (name, _v0, value, _v1) {
		var json = _v0.a;
		var _v2 = _v1.a;
		var d = _v2.a;
		var e = _v2.b;
		return $Orasund$elm_jsonstore$Jsonstore$JsonObject(
			_Utils_Tuple2(
				A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (f, fun) {
							return fun(f);
						}),
					A2($elm$json$Json$Decode$field, name, json.a),
					d),
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						name,
						function (o) {
							return json.b(
								value(o));
						}),
					e)));
	});
var $author$project$DTT$Data$Budget$jsonSpending = $Orasund$elm_jsonstore$Jsonstore$toJson(
	A4(
		$Orasund$elm_jsonstore$Jsonstore$with,
		'lastUpdated',
		$author$project$DTT$Data$jsonPosix,
		function ($) {
			return $.lastUpdated;
		},
		A4(
			$Orasund$elm_jsonstore$Jsonstore$with,
			'reference',
			$Orasund$elm_jsonstore$Jsonstore$string,
			function ($) {
				return $.reference;
			},
			A4(
				$Orasund$elm_jsonstore$Jsonstore$with,
				'cent',
				$Orasund$elm_jsonstore$Jsonstore$int,
				function ($) {
					return $.cent;
				},
				A4(
					$Orasund$elm_jsonstore$Jsonstore$with,
					'user',
					$Orasund$elm_jsonstore$Jsonstore$string,
					function ($) {
						return $.user;
					},
					A4(
						$Orasund$elm_jsonstore$Jsonstore$with,
						'id',
						$author$project$DTT$Data$Id$json,
						function ($) {
							return $.id;
						},
						$Orasund$elm_jsonstore$Jsonstore$object($author$project$DTT$Data$Budget$Spending)))))));
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$DTT$Data$Budget$getBudgetResponse = function (configUser) {
	return A2(
		$elm$core$Task$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($elm$core$Dict$values),
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$withDefault(_List_Nil),
				function (list) {
					return {
						spendings: list,
						totalCent: A3(
							$elm$core$List$foldl,
							function (_v0) {
								var cent = _v0.cent;
								var user = _v0.user;
								return $elm$core$Basics$add(
									_Utils_eq(user, configUser) ? cent : (-cent));
							},
							0,
							list)
					};
				})),
		A2(
			$Orasund$elm_jsonstore$Jsonstore$get,
			_Utils_ap($author$project$DTT$Data$url, $author$project$DTT$String$budget),
			$Orasund$elm_jsonstore$Jsonstore$decode(
				$Orasund$elm_jsonstore$Jsonstore$dict($author$project$DTT$Data$Budget$jsonSpending))));
};
var $author$project$DTT$Data$Budget$getResponse = function (id) {
	return A2(
		$Orasund$elm_jsonstore$Jsonstore$get,
		$author$project$DTT$Data$url + ($author$project$DTT$String$budget + ('/' + id)),
		$Orasund$elm_jsonstore$Jsonstore$decode($author$project$DTT$Data$Budget$jsonSpending));
};
var $elm$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			$elm$core$Task$onError,
			A2($elm$core$Basics$composeL, $elm$core$Task$fail, convert),
			task);
	});
var $author$project$DTT$Page$Budget$delete = F2(
	function (config, id) {
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return A2(
					$elm$core$Task$mapError,
					$author$project$DTT$Page$Budget$HttpError,
					$author$project$DTT$Data$Budget$getBudgetResponse(config.user));
			},
			A2(
				$elm$core$Task$andThen,
				function (maybeEntry) {
					if (maybeEntry.$ === 'Just') {
						var user = maybeEntry.a.user;
						return _Utils_eq(user, config.user) ? A2(
							$elm$core$Task$mapError,
							$author$project$DTT$Page$Budget$HttpError,
							$author$project$DTT$Data$Budget$deleteResponse(id)) : $elm$core$Task$fail($author$project$DTT$Page$Budget$NoPermission);
					} else {
						return $elm$core$Task$succeed(_Utils_Tuple0);
					}
				},
				A2(
					$elm$core$Task$mapError,
					$author$project$DTT$Page$Budget$HttpError,
					$author$project$DTT$Data$Budget$getResponse(id))));
	});
var $author$project$DTT$Page$Secrets$HttpError = function (a) {
	return {$: 'HttpError', a: a};
};
var $author$project$DTT$Page$Secrets$IsMatched = {$: 'IsMatched'};
var $author$project$DTT$String$secrets = '/secrets';
var $author$project$DTT$Data$Secret$deleteResponse = function (hash) {
	return $Orasund$elm_jsonstore$Jsonstore$delete($author$project$DTT$Data$url + ($author$project$DTT$String$secrets + ('/' + hash)));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $Orasund$elm_jsonstore$Jsonstore$withMaybe = F4(
	function (name, _v0, value, _v1) {
		var json = _v0.a;
		var _v2 = _v1.a;
		var d = _v2.a;
		var e = _v2.b;
		return $Orasund$elm_jsonstore$Jsonstore$JsonObject(
			_Utils_Tuple2(
				A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (f, fun) {
							return fun(f);
						}),
					$elm$json$Json$Decode$maybe(
						A2($elm$json$Json$Decode$field, name, json.a)),
					d),
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(
						name,
						function (o) {
							return A2(
								$elm$core$Basics$composeR,
								$elm$core$Maybe$map(json.b),
								$elm$core$Maybe$withDefault($elm$json$Json$Encode$null))(
								value(o));
						}),
					e)));
	});
var $author$project$DTT$Data$Secret$json = $Orasund$elm_jsonstore$Jsonstore$toJson(
	A4(
		$Orasund$elm_jsonstore$Jsonstore$withMaybe,
		'raw',
		$Orasund$elm_jsonstore$Jsonstore$string,
		function ($) {
			return $.raw;
		},
		A4(
			$Orasund$elm_jsonstore$Jsonstore$with,
			'user',
			$Orasund$elm_jsonstore$Jsonstore$string,
			function ($) {
				return $.user;
			},
			A4(
				$Orasund$elm_jsonstore$Jsonstore$with,
				'hash',
				$Orasund$elm_jsonstore$Jsonstore$string,
				function ($) {
					return $.hash;
				},
				$Orasund$elm_jsonstore$Jsonstore$object($author$project$DTT$Data$Secret$Secret)))));
var $author$project$DTT$Data$Secret$getListResponse = A2(
	$elm$core$Task$map,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map($elm$core$Dict$values),
		$elm$core$Maybe$withDefault(_List_Nil)),
	A2(
		$Orasund$elm_jsonstore$Jsonstore$get,
		_Utils_ap($author$project$DTT$Data$url, $author$project$DTT$String$secrets),
		$Orasund$elm_jsonstore$Jsonstore$decode(
			$Orasund$elm_jsonstore$Jsonstore$dict($author$project$DTT$Data$Secret$json))));
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$DTT$Page$Secrets$getList = function (config) {
	return A2(
		$elm$core$Task$mapError,
		$author$project$DTT$Page$Secrets$HttpError,
		A2(
			$elm$core$Task$map,
			$elm$core$List$filter(
				function (_v0) {
					var user = _v0.user;
					var raw = _v0.raw;
					return _Utils_eq(user, config.user) || (!_Utils_eq(raw, $elm$core$Maybe$Nothing));
				}),
			$author$project$DTT$Data$Secret$getListResponse));
};
var $author$project$DTT$Data$Secret$getResponse = function (hash) {
	return A2(
		$Orasund$elm_jsonstore$Jsonstore$get,
		$author$project$DTT$Data$url + ($author$project$DTT$String$secrets + ('/' + hash)),
		$Orasund$elm_jsonstore$Jsonstore$decode($author$project$DTT$Data$Secret$json));
};
var $billstclair$elm_sha256$Sha256$initialHs = function (is224) {
	return is224 ? {a: 3238371032, b: 914150663, c: 812702999, d: 4144912697, e: 4290775857, f: 1750603025, g: 1694076839, h: 3204075428} : {a: 1779033703, b: 3144134277, c: 1013904242, d: 2773480762, e: 1359893119, f: 2600822924, g: 528734635, h: 1541459225};
};
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $billstclair$elm_sha256$Sha256$extra = _List_fromArray(
	[-2147483648, 8388608, 32768, 128]);
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $billstclair$elm_sha256$Sha256$get = F2(
	function (index, array) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Array$get, index, array));
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $billstclair$elm_sha256$Sha256$getAt = F2(
	function (index, list) {
		return A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm_community$list_extra$List$Extra$getAt, index, list));
	});
var $billstclair$elm_sha256$Sha256$getShift = F2(
	function (i, n) {
		return 8 * (3 - ((i + n) & 3));
	});
var $elm$core$Basics$not = _Basics_not;
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $billstclair$elm_sha256$Sha256$orIntoBlocks = F3(
	function (idx, val, blocks) {
		return A3(
			$elm$core$Array$set,
			idx,
			val | A2($billstclair$elm_sha256$Sha256$get, idx, blocks),
			blocks);
	});
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $billstclair$elm_sha256$Sha256$sl = F2(
	function (num, shift) {
		return num << shift;
	});
var $billstclair$elm_sha256$Sha256$sr = F2(
	function (num, shift) {
		return num >> shift;
	});
var $billstclair$elm_sha256$Sha256$indexLoop = F5(
	function (i, index, message, length, blocks) {
		indexLoop:
		while (true) {
			if (!((_Utils_cmp(index, length) < 0) && (i < 64))) {
				return _Utils_Tuple3(i, index, blocks);
			} else {
				var shift = $billstclair$elm_sha256$Sha256$getShift(i);
				var code = A2($billstclair$elm_sha256$Sha256$get, index, message);
				var _v0 = (code < 128) ? _Utils_Tuple3(
					1,
					0,
					A2(
						$billstclair$elm_sha256$Sha256$sl,
						code,
						shift(0))) : ((code < 2048) ? _Utils_Tuple3(
					2,
					0,
					A2(
						$billstclair$elm_sha256$Sha256$sl,
						128 | (code & 63),
						shift(1)) | A2(
						$billstclair$elm_sha256$Sha256$sl,
						192 | A2($billstclair$elm_sha256$Sha256$sr, code, 6),
						shift(0))) : (((code < 55296) || (code >= 57344)) ? _Utils_Tuple3(
					3,
					0,
					A2(
						$billstclair$elm_sha256$Sha256$sl,
						128 | (code & 63),
						shift(2)) | (A2(
						$billstclair$elm_sha256$Sha256$sl,
						128 | (A2($billstclair$elm_sha256$Sha256$sr, code, 6) & 63),
						shift(1)) | A2(
						$billstclair$elm_sha256$Sha256$sl,
						224 | A2($billstclair$elm_sha256$Sha256$sr, code, 12),
						shift(0)))) : _Utils_Tuple3(
					4,
					1,
					function () {
						var code2 = (A2($billstclair$elm_sha256$Sha256$get, index + 1, message) & 1023) | (65536 + A2($billstclair$elm_sha256$Sha256$sl, code & 1023, 10));
						return A2(
							$billstclair$elm_sha256$Sha256$sl,
							128 | (code2 & 63),
							shift(3)) | (A2(
							$billstclair$elm_sha256$Sha256$sl,
							128 | (A2($billstclair$elm_sha256$Sha256$sr, code2, 6) & 63),
							shift(2)) | (A2(
							$billstclair$elm_sha256$Sha256$sl,
							128 | ((code2 >> 12) & 63),
							shift(1)) | A2(
							$billstclair$elm_sha256$Sha256$sl,
							240 | (code2 >> 18),
							shift(0))));
					}())));
				var iInc = _v0.a;
				var idxInc = _v0.b;
				var val = _v0.c;
				var blocks2 = A3(
					$billstclair$elm_sha256$Sha256$orIntoBlocks,
					A2($billstclair$elm_sha256$Sha256$sr, i, 2),
					val,
					blocks);
				var $temp$i = i + iInc,
					$temp$index = (index + idxInc) + 1,
					$temp$message = message,
					$temp$length = length,
					$temp$blocks = blocks2;
				i = $temp$i;
				index = $temp$index;
				message = $temp$message;
				length = $temp$length;
				blocks = $temp$blocks;
				continue indexLoop;
			}
		}
	});
var $billstclair$elm_sha256$Sha256$srz = F2(
	function (num, shift) {
		return num >>> shift;
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $billstclair$elm_sha256$Sha256$jLoop1 = F2(
	function (j, blocks) {
		jLoop1:
		while (true) {
			var t2 = A2($billstclair$elm_sha256$Sha256$get, j - 2, blocks);
			var t1 = A2($billstclair$elm_sha256$Sha256$get, j - 15, blocks);
			var s1 = A2($billstclair$elm_sha256$Sha256$srz, t2, 10) ^ ((A2($billstclair$elm_sha256$Sha256$srz, t2, 19) | A2($billstclair$elm_sha256$Sha256$sl, t2, 13)) ^ (A2($billstclair$elm_sha256$Sha256$srz, t2, 17) | A2($billstclair$elm_sha256$Sha256$sl, t2, 15)));
			var s0 = A2($billstclair$elm_sha256$Sha256$srz, t1, 3) ^ ((A2($billstclair$elm_sha256$Sha256$srz, t1, 18) | A2($billstclair$elm_sha256$Sha256$sl, t1, 14)) ^ (A2($billstclair$elm_sha256$Sha256$srz, t1, 7) | A2($billstclair$elm_sha256$Sha256$sl, t1, 25)));
			var blocks2 = A3(
				$elm$core$Array$set,
				j,
				A2(
					$billstclair$elm_sha256$Sha256$sl,
					((A2($billstclair$elm_sha256$Sha256$get, j - 16, blocks) + s0) + A2($billstclair$elm_sha256$Sha256$get, j - 7, blocks)) + s1,
					0),
				blocks);
			if (j < 63) {
				var $temp$j = j + 1,
					$temp$blocks = blocks2;
				j = $temp$j;
				blocks = $temp$blocks;
				continue jLoop1;
			} else {
				return blocks2;
			}
		}
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $billstclair$elm_sha256$Sha256$ks = $elm$core$Array$fromList(
	_List_fromArray(
		[1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]));
var $elm$core$Bitwise$complement = _Bitwise_complement;
var $billstclair$elm_sha256$Sha256$lognot = $elm$core$Bitwise$complement;
var $billstclair$elm_sha256$Sha256$jLoopBody2 = F4(
	function (j, ab, hs, blocks) {
		var h = hs.h;
		var s1 = (A2($billstclair$elm_sha256$Sha256$srz, h, 25) | A2($billstclair$elm_sha256$Sha256$sl, h, 7)) ^ ((A2($billstclair$elm_sha256$Sha256$srz, h, 11) | A2($billstclair$elm_sha256$Sha256$sl, h, 21)) ^ (A2($billstclair$elm_sha256$Sha256$srz, h, 6) | A2($billstclair$elm_sha256$Sha256$sl, h, 26)));
		var g = hs.g;
		var f = hs.f;
		var e = hs.e;
		var d = hs.d;
		var s0 = (A2($billstclair$elm_sha256$Sha256$srz, d, 22) | A2($billstclair$elm_sha256$Sha256$sl, d, 10)) ^ ((A2($billstclair$elm_sha256$Sha256$srz, d, 13) | A2($billstclair$elm_sha256$Sha256$sl, d, 19)) ^ (A2($billstclair$elm_sha256$Sha256$srz, d, 2) | A2($billstclair$elm_sha256$Sha256$sl, d, 30)));
		var ch = ($billstclair$elm_sha256$Sha256$lognot(h) & f) ^ (h & e);
		var t1 = (((g + s1) + ch) + A2($billstclair$elm_sha256$Sha256$get, j + 1, $billstclair$elm_sha256$Sha256$ks)) + A2($billstclair$elm_sha256$Sha256$get, j + 1, blocks);
		var c = hs.c;
		var g2 = A2($billstclair$elm_sha256$Sha256$sl, c + t1, 0);
		var ch2 = (g2 & h) ^ ($billstclair$elm_sha256$Sha256$lognot(g2) & e);
		var s3 = (A2($billstclair$elm_sha256$Sha256$srz, g2, 25) | A2($billstclair$elm_sha256$Sha256$sl, g2, 7)) ^ ((A2($billstclair$elm_sha256$Sha256$srz, g2, 11) | A2($billstclair$elm_sha256$Sha256$sl, g2, 21)) ^ (A2($billstclair$elm_sha256$Sha256$srz, g2, 6) | A2($billstclair$elm_sha256$Sha256$sl, g2, 26)));
		var t3 = (((f + s3) + ch2) + A2($billstclair$elm_sha256$Sha256$get, j + 2, $billstclair$elm_sha256$Sha256$ks)) + A2($billstclair$elm_sha256$Sha256$get, j + 2, blocks);
		var b = hs.b;
		var f2 = A2($billstclair$elm_sha256$Sha256$sl, b + t3, 0);
		var ch3 = (f2 & g2) ^ ($billstclair$elm_sha256$Sha256$lognot(f2) & h);
		var s5 = (A2($billstclair$elm_sha256$Sha256$srz, f2, 25) | A2($billstclair$elm_sha256$Sha256$sl, f2, 7)) ^ ((A2($billstclair$elm_sha256$Sha256$srz, f2, 11) | A2($billstclair$elm_sha256$Sha256$sl, f2, 21)) ^ (A2($billstclair$elm_sha256$Sha256$srz, f2, 6) | A2($billstclair$elm_sha256$Sha256$sl, f2, 26)));
		var t5 = (((e + s5) + ch3) + A2($billstclair$elm_sha256$Sha256$get, j + 3, $billstclair$elm_sha256$Sha256$ks)) + A2($billstclair$elm_sha256$Sha256$get, j + 3, blocks);
		var a = hs.a;
		var da = d & a;
		var maj = ab ^ (da ^ (d & b));
		var t2 = s0 + maj;
		var c2 = A2($billstclair$elm_sha256$Sha256$sl, t1 + t2, 0);
		var cd = c2 & d;
		var s2 = (A2($billstclair$elm_sha256$Sha256$srz, c2, 22) | A2($billstclair$elm_sha256$Sha256$sl, c2, 10)) ^ ((A2($billstclair$elm_sha256$Sha256$srz, c2, 13) | A2($billstclair$elm_sha256$Sha256$sl, c2, 19)) ^ (A2($billstclair$elm_sha256$Sha256$srz, c2, 2) | A2($billstclair$elm_sha256$Sha256$sl, c2, 30)));
		var e2 = A2($billstclair$elm_sha256$Sha256$sl, a + t5, 0);
		var maj2 = da ^ (cd ^ (c2 & a));
		var t4 = s2 + maj2;
		var b2 = A2($billstclair$elm_sha256$Sha256$sl, t3 + t4, 0);
		var bc = b2 & c2;
		var maj3 = cd ^ (bc ^ (b2 & d));
		var s4 = (A2($billstclair$elm_sha256$Sha256$srz, b2, 22) | A2($billstclair$elm_sha256$Sha256$sl, b2, 10)) ^ ((A2($billstclair$elm_sha256$Sha256$srz, b2, 13) | A2($billstclair$elm_sha256$Sha256$sl, b2, 19)) ^ (A2($billstclair$elm_sha256$Sha256$srz, b2, 2) | A2($billstclair$elm_sha256$Sha256$sl, b2, 30)));
		var t6 = s4 + maj3;
		var a2 = A2($billstclair$elm_sha256$Sha256$sl, t5 + t6, 0);
		return {a: a2, b: b2, c: c2, d: d, e: e2, f: f2, g: g2, h: h};
	});
var $billstclair$elm_sha256$Sha256$jLoop2 = F5(
	function (j, first, is224, hs, blocks) {
		jLoop2:
		while (true) {
			var jp4 = j + 4;
			var first2 = false;
			var _v0 = function () {
				if (first) {
					if (is224) {
						var t1 = A2($billstclair$elm_sha256$Sha256$get, 0, blocks) - 1413257819;
						return _Utils_Tuple3(
							300032,
							A2($billstclair$elm_sha256$Sha256$sl, t1 - 150054599, 0),
							A2($billstclair$elm_sha256$Sha256$sl, t1 + 24177077, 0));
					} else {
						var t2 = A2($billstclair$elm_sha256$Sha256$get, 0, blocks) - 210244248;
						return _Utils_Tuple3(
							704751109,
							A2($billstclair$elm_sha256$Sha256$sl, t2 - 1521486534, 0),
							A2($billstclair$elm_sha256$Sha256$sl, t2 + 143694565, 0));
					}
				} else {
					var s1 = (A2($billstclair$elm_sha256$Sha256$srz, hs.e, 25) | A2($billstclair$elm_sha256$Sha256$sl, hs.e, 7)) ^ ((A2($billstclair$elm_sha256$Sha256$srz, hs.e, 11) | A2($billstclair$elm_sha256$Sha256$sl, hs.e, 21)) ^ (A2($billstclair$elm_sha256$Sha256$srz, hs.e, 6) | A2($billstclair$elm_sha256$Sha256$sl, hs.e, 26)));
					var s0 = (A2($billstclair$elm_sha256$Sha256$srz, hs.a, 22) | A2($billstclair$elm_sha256$Sha256$sl, hs.a, 10)) ^ ((A2($billstclair$elm_sha256$Sha256$srz, hs.a, 13) | A2($billstclair$elm_sha256$Sha256$sl, hs.a, 19)) ^ (A2($billstclair$elm_sha256$Sha256$srz, hs.a, 2) | A2($billstclair$elm_sha256$Sha256$sl, hs.a, 30)));
					var ch = (hs.e & hs.f) ^ ($billstclair$elm_sha256$Sha256$lognot(hs.e) & hs.g);
					var t3 = (((hs.h + s1) + ch) + A2($billstclair$elm_sha256$Sha256$get, j, $billstclair$elm_sha256$Sha256$ks)) + A2($billstclair$elm_sha256$Sha256$get, j, blocks);
					var ab2 = hs.a & hs.b;
					var maj = (hs.b & hs.c) ^ (ab2 ^ (hs.a & hs.c));
					var t4 = s0 + maj;
					return _Utils_Tuple3(
						ab2,
						A2($billstclair$elm_sha256$Sha256$sl, hs.d + t3, 0),
						A2($billstclair$elm_sha256$Sha256$sl, t3 + t4, 0));
				}
			}();
			var ab = _v0.a;
			var h = _v0.b;
			var d = _v0.c;
			var hs2 = _Utils_update(
				hs,
				{d: d, h: h});
			var hs3 = A4($billstclair$elm_sha256$Sha256$jLoopBody2, j, ab, hs2, blocks);
			if (jp4 < 64) {
				var $temp$j = jp4,
					$temp$first = first2,
					$temp$is224 = is224,
					$temp$hs = hs3,
					$temp$blocks = blocks;
				j = $temp$j;
				first = $temp$first;
				is224 = $temp$is224;
				hs = $temp$hs;
				blocks = $temp$blocks;
				continue jLoop2;
			} else {
				return hs3;
			}
		}
	});
var $elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			$elm$core$Array$initialize,
			n,
			function (_v0) {
				return e;
			});
	});
var $billstclair$elm_sha256$Sha256$makeBlocks = function (block) {
	return A3(
		$elm$core$Array$set,
		0,
		block,
		A2($elm$core$Array$repeat, 64, 0));
};
var $billstclair$elm_sha256$Sha256$sumHS = F2(
	function (hs1, hs2) {
		return {
			a: A2($billstclair$elm_sha256$Sha256$sl, hs1.a + hs2.a, 0),
			b: A2($billstclair$elm_sha256$Sha256$sl, hs1.b + hs2.b, 0),
			c: A2($billstclair$elm_sha256$Sha256$sl, hs1.c + hs2.c, 0),
			d: A2($billstclair$elm_sha256$Sha256$sl, hs1.d + hs2.d, 0),
			e: A2($billstclair$elm_sha256$Sha256$sl, hs1.e + hs2.e, 0),
			f: A2($billstclair$elm_sha256$Sha256$sl, hs1.f + hs2.f, 0),
			g: A2($billstclair$elm_sha256$Sha256$sl, hs1.g + hs2.g, 0),
			h: A2($billstclair$elm_sha256$Sha256$sl, hs1.h + hs2.h, 0)
		};
	});
var $billstclair$elm_sha256$Sha256$outerLoop = F9(
	function (first, hs, block, start, bytes, index, is224, message, length) {
		outerLoop:
		while (true) {
			var blocks = $billstclair$elm_sha256$Sha256$makeBlocks(block);
			var _v0 = A5($billstclair$elm_sha256$Sha256$indexLoop, start, index, message, length, blocks);
			var i = _v0.a;
			var index2 = _v0.b;
			var blocks2 = _v0.c;
			var bytes2 = (bytes + i) - start;
			var start2 = i - 64;
			var _v1 = _Utils_eq(index2, length) ? _Utils_Tuple2(
				A3(
					$billstclair$elm_sha256$Sha256$orIntoBlocks,
					A2($billstclair$elm_sha256$Sha256$sr, i, 2),
					A2($billstclair$elm_sha256$Sha256$getAt, i & 3, $billstclair$elm_sha256$Sha256$extra),
					blocks2),
				index2 + 1) : _Utils_Tuple2(blocks2, index2);
			var blocks3 = _v1.a;
			var index3 = _v1.b;
			var block2 = A2($billstclair$elm_sha256$Sha256$get, 16, blocks3);
			var _v2 = ((_Utils_cmp(index3, length) > 0) && (i < 56)) ? _Utils_Tuple2(
				true,
				A3(
					$elm$core$Array$set,
					15,
					A2($billstclair$elm_sha256$Sha256$sl, bytes2, 3),
					blocks3)) : _Utils_Tuple2(false, blocks3);
			var end = _v2.a;
			var blocks4 = _v2.b;
			var blocks5 = A2($billstclair$elm_sha256$Sha256$jLoop1, 16, blocks4);
			var hs2 = A5($billstclair$elm_sha256$Sha256$jLoop2, 0, first, is224, hs, blocks5);
			var hs3 = A2($billstclair$elm_sha256$Sha256$sumHS, hs, hs2);
			if (!end) {
				var $temp$first = false,
					$temp$hs = hs3,
					$temp$block = block2,
					$temp$start = start2,
					$temp$bytes = bytes2,
					$temp$index = index3,
					$temp$is224 = is224,
					$temp$message = message,
					$temp$length = length;
				first = $temp$first;
				hs = $temp$hs;
				block = $temp$block;
				start = $temp$start;
				bytes = $temp$bytes;
				index = $temp$index;
				is224 = $temp$is224;
				message = $temp$message;
				length = $temp$length;
				continue outerLoop;
			} else {
				return hs3;
			}
		}
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $billstclair$elm_sha256$Sha256$stringToMessage = function (string) {
	return $elm$core$Array$fromList(
		A2(
			$elm$core$List$map,
			$elm$core$Char$toCode,
			$elm$core$String$toList(string)));
};
var $elm$core$String$fromList = _String_fromList;
var $elm$core$Char$fromCode = _Char_fromCode;
var $billstclair$elm_sha256$Sha256$toHex1 = function (x) {
	var x2 = x & 15;
	return $elm$core$Char$fromCode(
		x2 + ((x2 < 10) ? $elm$core$Char$toCode(
			_Utils_chr('0')) : ((-10) + $elm$core$Char$toCode(
			_Utils_chr('a')))));
};
var $billstclair$elm_sha256$Sha256$toHex8 = function (x) {
	return $elm$core$String$fromList(
		A2(
			$elm$core$List$map,
			function (shift) {
				return $billstclair$elm_sha256$Sha256$toHex1(
					A2($billstclair$elm_sha256$Sha256$sr, x, shift));
			},
			_List_fromArray(
				[28, 24, 20, 16, 12, 8, 4, 0])));
};
var $billstclair$elm_sha256$Sha256$toHex56 = function (hs) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Basics$append,
		'',
		A2(
			$elm$core$List$map,
			$billstclair$elm_sha256$Sha256$toHex8,
			_List_fromArray(
				[hs.a, hs.b, hs.c, hs.d, hs.e, hs.f, hs.g])));
};
var $billstclair$elm_sha256$Sha256$toHex64 = function (hs) {
	return _Utils_ap(
		$billstclair$elm_sha256$Sha256$toHex56(hs),
		$billstclair$elm_sha256$Sha256$toHex8(hs.h));
};
var $billstclair$elm_sha256$Sha256$hash = F2(
	function (string, is224) {
		var start = 0;
		var message = $billstclair$elm_sha256$Sha256$stringToMessage(string);
		var length = $elm$core$Array$length(message);
		var index = 0;
		var hs = $billstclair$elm_sha256$Sha256$initialHs(is224);
		var bytes = 0;
		var block = 0;
		var hs2 = A9($billstclair$elm_sha256$Sha256$outerLoop, true, hs, block, start, bytes, index, is224, message, length);
		return is224 ? $billstclair$elm_sha256$Sha256$toHex56(hs2) : $billstclair$elm_sha256$Sha256$toHex64(hs2);
	});
var $billstclair$elm_sha256$Sha256$sha224 = function (string) {
	return A2($billstclair$elm_sha256$Sha256$hash, string, true);
};
var $author$project$DTT$Page$Secrets$delete = function (config) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$String$toLower,
		A2(
			$elm$core$Basics$composeR,
			$billstclair$elm_sha256$Sha256$sha224,
			function (hash) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $author$project$DTT$Page$Secrets$getList(config);
					},
					A2(
						$elm$core$Task$andThen,
						function (maybeEntry) {
							if (maybeEntry.$ === 'Just') {
								var user = maybeEntry.a.user;
								var raw = maybeEntry.a.raw;
								return _Utils_eq(raw, $elm$core$Maybe$Nothing) ? (_Utils_eq(user, config.user) ? A2(
									$elm$core$Task$mapError,
									$author$project$DTT$Page$Secrets$HttpError,
									$author$project$DTT$Data$Secret$deleteResponse(hash)) : $elm$core$Task$succeed(_Utils_Tuple0)) : $elm$core$Task$fail($author$project$DTT$Page$Secrets$IsMatched);
							} else {
								return $elm$core$Task$succeed(_Utils_Tuple0);
							}
						},
						A2(
							$elm$core$Task$mapError,
							$author$project$DTT$Page$Secrets$HttpError,
							$author$project$DTT$Data$Secret$getResponse(hash))));
			}));
};
var $author$project$DTT$Page$Todo$NoPermission = {$: 'NoPermission'};
var $author$project$DTT$String$todo = '/todo';
var $author$project$DTT$Data$TodoEntry$deleteResponse = function (id) {
	return $Orasund$elm_jsonstore$Jsonstore$delete($author$project$DTT$Data$url + ($author$project$DTT$String$todo + ('/' + id)));
};
var $Orasund$elm_jsonstore$Jsonstore$bool = $Orasund$elm_jsonstore$Jsonstore$Json(
	_Utils_Tuple2($elm$json$Json$Decode$bool, $elm$json$Json$Encode$bool));
var $author$project$DTT$Data$TodoEntry$json = $Orasund$elm_jsonstore$Jsonstore$toJson(
	A4(
		$Orasund$elm_jsonstore$Jsonstore$withMaybe,
		'checked',
		$Orasund$elm_jsonstore$Jsonstore$bool,
		function ($) {
			return $.checked;
		},
		A4(
			$Orasund$elm_jsonstore$Jsonstore$with,
			'lastUpdated',
			$author$project$DTT$Data$jsonPosix,
			function ($) {
				return $.lastUpdated;
			},
			A4(
				$Orasund$elm_jsonstore$Jsonstore$with,
				'message',
				$Orasund$elm_jsonstore$Jsonstore$string,
				function ($) {
					return $.message;
				},
				A4(
					$Orasund$elm_jsonstore$Jsonstore$with,
					'user',
					$Orasund$elm_jsonstore$Jsonstore$string,
					function ($) {
						return $.user;
					},
					A4(
						$Orasund$elm_jsonstore$Jsonstore$with,
						'id',
						$author$project$DTT$Data$Id$json,
						function ($) {
							return $.id;
						},
						$Orasund$elm_jsonstore$Jsonstore$object($author$project$DTT$Data$TodoEntry$TodoEntry)))))));
var $author$project$DTT$Data$TodoEntry$getListResponse = A2(
	$elm$core$Task$map,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map($elm$core$Dict$values),
		$elm$core$Maybe$withDefault(_List_Nil)),
	A2(
		$Orasund$elm_jsonstore$Jsonstore$get,
		_Utils_ap($author$project$DTT$Data$url, $author$project$DTT$String$todo),
		$Orasund$elm_jsonstore$Jsonstore$decode(
			$Orasund$elm_jsonstore$Jsonstore$dict($author$project$DTT$Data$TodoEntry$json))));
var $author$project$DTT$Data$TodoEntry$getResponse = function (id) {
	return A2(
		$Orasund$elm_jsonstore$Jsonstore$get,
		$author$project$DTT$Data$url + ($author$project$DTT$String$todo + ('/' + id)),
		$Orasund$elm_jsonstore$Jsonstore$decode($author$project$DTT$Data$TodoEntry$json));
};
var $author$project$DTT$Page$Todo$deleteEntry = F2(
	function (config, id) {
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return A2($elm$core$Task$mapError, $author$project$DTT$Page$Todo$HttpError, $author$project$DTT$Data$TodoEntry$getListResponse);
			},
			A2(
				$elm$core$Task$andThen,
				function (maybeEntry) {
					if (maybeEntry.$ === 'Just') {
						var user = maybeEntry.a.user;
						return _Utils_eq(user, config.user) ? A2(
							$elm$core$Task$mapError,
							$author$project$DTT$Page$Todo$HttpError,
							$author$project$DTT$Data$TodoEntry$deleteResponse(id)) : $elm$core$Task$fail($author$project$DTT$Page$Todo$NoPermission);
					} else {
						return $elm$core$Task$succeed(_Utils_Tuple0);
					}
				},
				A2(
					$elm$core$Task$mapError,
					$author$project$DTT$Page$Todo$HttpError,
					$author$project$DTT$Data$TodoEntry$getResponse(id))));
	});
var $miniBill$elm_codec$Codec$encodeToValue = function (codec) {
	return $miniBill$elm_codec$Codec$encoder(codec);
};
var $author$project$DTT$Data$OutputForm$error = function (err) {
	return _Utils_update(
		$author$project$DTT$Data$OutputForm$empty,
		{
			error: $elm$core$Maybe$Just(err)
		});
};
var $author$project$DTT$Page$Budget$get = function (config) {
	return A2(
		$elm$core$Task$mapError,
		$author$project$DTT$Page$Budget$HttpError,
		$author$project$DTT$Data$Budget$getBudgetResponse(config.user));
};
var $author$project$DTT$Page$Todo$getList = A2($elm$core$Task$mapError, $author$project$DTT$Page$Todo$HttpError, $author$project$DTT$Data$TodoEntry$getListResponse);
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $elm$random$Random$map = F2(
	function (func, _v0) {
		var genA = _v0.a;
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v1 = genA(seed0);
				var a = _v1.a;
				var seed1 = _v1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var $author$project$DTT$Data$Id$generate = A2(
	$elm$random$Random$map,
	$elm$core$String$fromInt,
	A2($elm$random$Random$int, 0, $elm$random$Random$maxInt));
var $Orasund$elm_jsonstore$Jsonstore$encode = function (_v0) {
	var _v1 = _v0.a;
	var fun = _v1.b;
	return fun;
};
var $elm$http$Http$jsonBody = function (value) {
	return A2(
		_Http_pair,
		'application/json',
		A2($elm$json$Json$Encode$encode, 0, value));
};
var $Orasund$elm_jsonstore$Jsonstore$insert = F2(
	function (url, value) {
		return $elm$http$Http$task(
			{
				body: $elm$http$Http$jsonBody(value),
				headers: _List_Nil,
				method: 'POST',
				resolver: $Orasund$elm_jsonstore$Jsonstore$resolveWhatever,
				timeout: $elm$core$Maybe$Nothing,
				url: url
			});
	});
var $author$project$DTT$Data$Budget$insertResponse = function (entry) {
	return A2(
		$Orasund$elm_jsonstore$Jsonstore$insert,
		$author$project$DTT$Data$url + ($author$project$DTT$String$budget + ('/' + entry.id)),
		A2($Orasund$elm_jsonstore$Jsonstore$encode, $author$project$DTT$Data$Budget$jsonSpending, entry));
};
var $author$project$DTT$Page$Budget$insert = F2(
	function (config, _v0) {
		var cent = _v0.cent;
		var reference = _v0.reference;
		return A2(
			$elm$random$Random$map,
			function (id) {
				return A2(
					$elm$core$Task$mapError,
					$author$project$DTT$Page$Budget$HttpError,
					A2(
						$elm$core$Task$andThen,
						function (_v1) {
							return $author$project$DTT$Data$Budget$getBudgetResponse(config.user);
						},
						$author$project$DTT$Data$Budget$insertResponse(
							{cent: cent, id: id, lastUpdated: config.currentTime, reference: reference, user: config.user})));
			},
			$author$project$DTT$Data$Id$generate);
	});
var $author$project$DTT$Data$Secret$insertResponse = function (entry) {
	return A2(
		$Orasund$elm_jsonstore$Jsonstore$insert,
		$author$project$DTT$Data$url + ($author$project$DTT$String$secrets + ('/' + entry.hash)),
		A2($Orasund$elm_jsonstore$Jsonstore$encode, $author$project$DTT$Data$Secret$json, entry));
};
var $author$project$DTT$String$raw = '/raw';
var $author$project$DTT$Data$Secret$updateRawResponse = function (_v0) {
	var hash = _v0.hash;
	var raw = _v0.raw;
	if (raw.$ === 'Just') {
		var r = raw.a;
		return A2(
			$Orasund$elm_jsonstore$Jsonstore$insert,
			$author$project$DTT$Data$url + ($author$project$DTT$String$secrets + ('/' + (hash + $author$project$DTT$String$raw))),
			A2($Orasund$elm_jsonstore$Jsonstore$encode, $Orasund$elm_jsonstore$Jsonstore$string, r));
	} else {
		return $Orasund$elm_jsonstore$Jsonstore$delete($author$project$DTT$Data$url + ($author$project$DTT$String$secrets + ('/' + (hash + $author$project$DTT$String$raw))));
	}
};
var $author$project$DTT$Page$Secrets$insert = F2(
	function (config, raw) {
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $author$project$DTT$Page$Secrets$getList(config);
			},
			A2(
				$elm$core$Task$mapError,
				$author$project$DTT$Page$Secrets$HttpError,
				function (hash) {
					return A2(
						$elm$core$Task$andThen,
						function (maybeEntry) {
							if (maybeEntry.$ === 'Just') {
								var user = maybeEntry.a.user;
								return _Utils_eq(user, config.user) ? $elm$core$Task$succeed(_Utils_Tuple0) : $author$project$DTT$Data$Secret$updateRawResponse(
									{
										hash: hash,
										raw: $elm$core$Maybe$Just(raw)
									});
							} else {
								return $author$project$DTT$Data$Secret$insertResponse(
									{hash: hash, raw: $elm$core$Maybe$Nothing, user: config.user});
							}
						},
						$author$project$DTT$Data$Secret$getResponse(hash));
				}(
					$billstclair$elm_sha256$Sha256$sha224(
						$elm$core$String$toLower(raw)))));
	});
var $author$project$DTT$Data$TodoEntry$insertResponse = function (entry) {
	return A2(
		$Orasund$elm_jsonstore$Jsonstore$insert,
		$author$project$DTT$Data$url + ($author$project$DTT$String$todo + ('/' + entry.id)),
		A2($Orasund$elm_jsonstore$Jsonstore$encode, $author$project$DTT$Data$TodoEntry$json, entry));
};
var $author$project$DTT$Page$Todo$insertEntry = F2(
	function (config, message) {
		return A2(
			$elm$random$Random$map,
			function (id) {
				return A2(
					$elm$core$Task$mapError,
					$author$project$DTT$Page$Todo$HttpError,
					A2(
						$elm$core$Task$andThen,
						function (_v0) {
							return $author$project$DTT$Data$TodoEntry$getListResponse;
						},
						$author$project$DTT$Data$TodoEntry$insertResponse(
							{
								checked: $elm$core$Maybe$Just(false),
								id: id,
								lastUpdated: config.currentTime,
								message: message,
								user: config.user
							})));
			},
			$author$project$DTT$Data$Id$generate);
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $author$project$DTT$Data$OutputForm$secrets = function (list) {
	return _Utils_update(
		$author$project$DTT$Data$OutputForm$empty,
		{
			secrets: $elm$core$Maybe$Just(list)
		});
};
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $miniBill$elm_codec$Codec$encodeToString = F2(
	function (indentation, codec) {
		return A2(
			$elm$core$Basics$composeR,
			$miniBill$elm_codec$Codec$encoder(codec),
			$elm$json$Json$Encode$encode(indentation));
	});
var $author$project$DTT$Data$Error$toJsError = function (err) {
	switch (err.$) {
		case 'HttpError':
			switch (err.a.$) {
				case 'BadUrl':
					var string = err.a.a;
					return {content: string, errorType: 'bad-url'};
				case 'Timeout':
					var _v1 = err.a;
					return {content: '', errorType: 'timeout'};
				case 'NetworkError':
					var _v2 = err.a;
					return {content: '', errorType: 'network-error'};
				case 'BadStatus':
					var _int = err.a.a;
					return {
						content: $elm$core$String$fromInt(_int),
						errorType: 'bad-status'
					};
				default:
					var string = err.a.a;
					return {content: string, errorType: 'bad-body'};
			}
		case 'WrongInputFormat':
			var inputForm = err.a;
			return {
				content: A3($miniBill$elm_codec$Codec$encodeToString, 2, $author$project$DTT$Data$InputForm$codec, inputForm),
				errorType: 'wrong-input-format'
			};
		case 'ParsingError':
			var string = err.a;
			return {content: string, errorType: 'parsingError'};
		case 'IsMatched':
			return {content: '', errorType: 'is-matched'};
		default:
			return {content: '', errorType: 'no-permission'};
	}
};
var $author$project$DTT$Data$OutputForm$todo = function (list) {
	return _Utils_update(
		$author$project$DTT$Data$OutputForm$empty,
		{
			todo: $elm$core$Maybe$Just(list)
		});
};
var $author$project$DTT$String$checked = '/checked';
var $author$project$DTT$Data$TodoEntry$toggleResponse = function (id) {
	return A2(
		$elm$core$Task$andThen,
		function (maybeTodoEntry) {
			if (maybeTodoEntry.$ === 'Just') {
				var checked = maybeTodoEntry.a.checked;
				return A2(
					$Orasund$elm_jsonstore$Jsonstore$insert,
					$author$project$DTT$Data$url + ($author$project$DTT$String$todo + ('/' + (id + $author$project$DTT$String$checked))),
					A2(
						$Orasund$elm_jsonstore$Jsonstore$encode,
						$Orasund$elm_jsonstore$Jsonstore$bool,
						!A2($elm$core$Maybe$withDefault, false, checked)));
			} else {
				return $elm$core$Task$succeed(_Utils_Tuple0);
			}
		},
		$author$project$DTT$Data$TodoEntry$getResponse(id));
};
var $author$project$DTT$Page$Todo$toggle = F2(
	function (config, id) {
		return A2(
			$elm$core$Task$andThen,
			function (_v0) {
				return A2($elm$core$Task$mapError, $author$project$DTT$Page$Todo$HttpError, $author$project$DTT$Data$TodoEntry$getListResponse);
			},
			A2(
				$elm$core$Task$mapError,
				$author$project$DTT$Page$Todo$HttpError,
				$author$project$DTT$Data$TodoEntry$toggleResponse(id)));
	});
var $author$project$DTT$Page$Budget$update = F2(
	function (config, _v0) {
		var id = _v0.id;
		var cent = _v0.cent;
		var reference = _v0.reference;
		return A2(
			$elm$core$Task$andThen,
			function (_v2) {
				return A2(
					$elm$core$Task$mapError,
					$author$project$DTT$Page$Budget$HttpError,
					$author$project$DTT$Data$Budget$getBudgetResponse(config.user));
			},
			A2(
				$elm$core$Task$andThen,
				function (maybeSpending) {
					if (maybeSpending.$ === 'Just') {
						var entry = maybeSpending.a;
						var user = entry.user;
						return _Utils_eq(user, config.user) ? A2(
							$elm$core$Task$mapError,
							$author$project$DTT$Page$Budget$HttpError,
							$author$project$DTT$Data$Budget$insertResponse(
								_Utils_update(
									entry,
									{cent: cent, lastUpdated: config.currentTime, reference: reference}))) : $elm$core$Task$fail($author$project$DTT$Page$Budget$NoPermission);
					} else {
						return $elm$core$Task$succeed(_Utils_Tuple0);
					}
				},
				A2(
					$elm$core$Task$mapError,
					$author$project$DTT$Page$Budget$HttpError,
					$author$project$DTT$Data$Budget$getResponse(id))));
	});
var $author$project$DTT$Page$Todo$updateEntry = F2(
	function (config, _v0) {
		var id = _v0.id;
		var message = _v0.message;
		return A2(
			$elm$core$Task$andThen,
			function (_v2) {
				return A2($elm$core$Task$mapError, $author$project$DTT$Page$Todo$HttpError, $author$project$DTT$Data$TodoEntry$getListResponse);
			},
			A2(
				$elm$core$Task$andThen,
				function (maybeEntry) {
					if (maybeEntry.$ === 'Just') {
						var entry = maybeEntry.a;
						var user = entry.user;
						return _Utils_eq(user, config.user) ? A2(
							$elm$core$Task$mapError,
							$author$project$DTT$Page$Todo$HttpError,
							$author$project$DTT$Data$TodoEntry$insertResponse(
								_Utils_update(
									entry,
									{lastUpdated: config.currentTime, message: message}))) : $elm$core$Task$fail($author$project$DTT$Page$Todo$NoPermission);
					} else {
						return $elm$core$Task$succeed(_Utils_Tuple0);
					}
				},
				A2(
					$elm$core$Task$mapError,
					$author$project$DTT$Page$Todo$HttpError,
					$author$project$DTT$Data$TodoEntry$getResponse(id))));
	});
var $author$project$Api$update = F4(
	function (fromElm, wrapper, msg, model) {
		switch (msg.$) {
			case 'GotTime':
				var posix = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{currentTime: posix}),
					$elm$core$Platform$Cmd$none);
			case 'GotTodoResponse':
				var result = msg.a;
				if (result.$ === 'Ok') {
					var list = result.a;
					return _Utils_Tuple2(
						model,
						fromElm(
							A2(
								$miniBill$elm_codec$Codec$encodeToValue,
								$author$project$DTT$Data$OutputForm$codec,
								$author$project$DTT$Data$OutputForm$todo(list))));
				} else {
					var err = result.a;
					return _Utils_Tuple2(
						model,
						fromElm(
							A2(
								$miniBill$elm_codec$Codec$encodeToValue,
								$author$project$DTT$Data$OutputForm$codec,
								$author$project$DTT$Data$OutputForm$error(
									$author$project$DTT$Data$Error$toJsError(
										function () {
											if (err.$ === 'HttpError') {
												var e = err.a;
												return $author$project$DTT$Data$Error$HttpError(e);
											} else {
												return $author$project$DTT$Data$Error$NoPermission;
											}
										}())))));
				}
			case 'GotBudgetResponse':
				var result = msg.a;
				if (result.$ === 'Ok') {
					var budget = result.a;
					return _Utils_Tuple2(
						model,
						fromElm(
							A2(
								$miniBill$elm_codec$Codec$encodeToValue,
								$author$project$DTT$Data$OutputForm$codec,
								$author$project$DTT$Data$OutputForm$budget(budget))));
				} else {
					var err = result.a;
					return _Utils_Tuple2(
						model,
						fromElm(
							A2(
								$miniBill$elm_codec$Codec$encodeToValue,
								$author$project$DTT$Data$OutputForm$codec,
								$author$project$DTT$Data$OutputForm$error(
									$author$project$DTT$Data$Error$toJsError(
										function () {
											if (err.$ === 'HttpError') {
												var e = err.a;
												return $author$project$DTT$Data$Error$HttpError(e);
											} else {
												return $author$project$DTT$Data$Error$NoPermission;
											}
										}())))));
				}
			case 'GotSecretResponse':
				var result = msg.a;
				if (result.$ === 'Ok') {
					var list = result.a;
					return _Utils_Tuple2(
						model,
						fromElm(
							A2(
								$miniBill$elm_codec$Codec$encodeToValue,
								$author$project$DTT$Data$OutputForm$codec,
								$author$project$DTT$Data$OutputForm$secrets(list))));
				} else {
					var err = result.a;
					return _Utils_Tuple2(
						model,
						fromElm(
							A2(
								$miniBill$elm_codec$Codec$encodeToValue,
								$author$project$DTT$Data$OutputForm$codec,
								$author$project$DTT$Data$OutputForm$error(
									$author$project$DTT$Data$Error$toJsError(
										function () {
											if (err.$ === 'HttpError') {
												var e = err.a;
												return $author$project$DTT$Data$Error$HttpError(e);
											} else {
												return $author$project$DTT$Data$Error$IsMatched;
											}
										}())))));
				}
			default:
				var result = msg.a;
				if (result.$ === 'Ok') {
					var input = result.a;
					switch (input.$) {
						case 'InsertTodoEntry':
							var message = input.a;
							var _v9 = A2(
								$elm$random$Random$step,
								A2($author$project$DTT$Page$Todo$insertEntry, model, message),
								model.seed);
							var cmd = _v9.a;
							var seed = _v9.b;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{seed: seed}),
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2($elm$core$Task$attempt, $author$project$Api$GotTodoResponse, cmd)));
						case 'SyncTodoEntry':
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2($elm$core$Task$attempt, $author$project$Api$GotTodoResponse, $author$project$DTT$Page$Todo$getList)));
						case 'ToggleTodoEntry':
							var id = input.a;
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotTodoResponse,
										A2($author$project$DTT$Page$Todo$toggle, model, id))));
						case 'DeleteTodoEntry':
							var id = input.a;
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotTodoResponse,
										A2($author$project$DTT$Page$Todo$deleteEntry, model, id))));
						case 'UpdateTodoEntry':
							var _arguments = input.a;
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotTodoResponse,
										A2($author$project$DTT$Page$Todo$updateEntry, model, _arguments))));
						case 'InsertSecret':
							var secret = input.a;
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotSecretResponse,
										A2($author$project$DTT$Page$Secrets$insert, model, secret))));
						case 'DeleteSecret':
							var secret = input.a;
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotSecretResponse,
										A2($author$project$DTT$Page$Secrets$delete, model, secret))));
						case 'SyncSecret':
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotSecretResponse,
										$author$project$DTT$Page$Secrets$getList(model))));
						case 'InsertBudget':
							var struct = input.a;
							var _v10 = A2(
								$elm$random$Random$step,
								A2($author$project$DTT$Page$Budget$insert, model, struct),
								model.seed);
							var cmd = _v10.a;
							var seed = _v10.b;
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{seed: seed}),
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2($elm$core$Task$attempt, $author$project$Api$GotBudgetResponse, cmd)));
						case 'DeleteBudget':
							var id = input.a;
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotBudgetResponse,
										A2($author$project$DTT$Page$Budget$delete, model, id))));
						case 'UpdateBudget':
							var struct = input.a;
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotBudgetResponse,
										A2($author$project$DTT$Page$Budget$update, model, struct))));
						case 'SyncBudget':
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotBudgetResponse,
										$author$project$DTT$Page$Budget$get(model))));
						default:
							return _Utils_Tuple2(
								model,
								A2(
									$elm$core$Platform$Cmd$map,
									wrapper,
									A2(
										$elm$core$Task$attempt,
										$author$project$Api$GotTodoResponse,
										A2(
											$elm$core$Task$andThen,
											function (_v11) {
												return $author$project$DTT$Page$Todo$getList;
											},
											A2(
												$elm$core$Task$mapError,
												$author$project$DTT$Page$Todo$HttpError,
												$Orasund$elm_jsonstore$Jsonstore$delete($author$project$DTT$Data$url))))));
					}
				} else {
					var err = result.a;
					return _Utils_Tuple2(
						model,
						fromElm(
							A2(
								$miniBill$elm_codec$Codec$encodeToValue,
								$author$project$DTT$Data$OutputForm$codec,
								$author$project$DTT$Data$OutputForm$error(
									$author$project$DTT$Data$Error$toJsError(err)))));
				}
		}
	});
var $author$project$Main$update = A2($author$project$Api$update, $author$project$Main$fromElm, $elm$core$Basics$identity);
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Main$main = $elm$core$Platform$worker(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (user) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (initialSeed) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (currentTime) {
							return $elm$json$Json$Decode$succeed(
								{currentTime: currentTime, initialSeed: initialSeed, user: user});
						},
						A2($elm$json$Json$Decode$field, 'currentTime', $elm$json$Json$Decode$int));
				},
				A2($elm$json$Json$Decode$field, 'initialSeed', $elm$json$Json$Decode$float));
		},
		A2($elm$json$Json$Decode$field, 'user', $elm$json$Json$Decode$string)))(0)}});}(this));