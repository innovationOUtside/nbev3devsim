var e={builtinFiles:{files:{"src/builtin/sys.js":'var $builtinmodule=function(){var b,a=Math.pow,c={},d=[],e=Sk.getSysArgv();for(b=0;b<e.length;++b)d.push(new Sk.builtin.str(e[b]));return c.argv=new Sk.builtins.list(d),c.copyright=Sk.builtin.str("Copyright 2009-2010 Scott Graham.\\nAll Rights Reserved.\\n"),Sk.__future__.python3?(c.version="3.7(ish) [Skulpt]",c.version_info=new Sk.builtin.tuple([new Sk.builtin.int_(3),new Sk.builtin.int_(7)])):(c.version="2.7(ish) [Skulpt]",c.version_info=new Sk.builtin.tuple([new Sk.builtin.int_(2),new Sk.builtin.int_(7)])),c.maxint=new Sk.builtin.int_(a(2,53)-1),c.maxsize=new Sk.builtin.int_(a(2,53)-1),c.modules=Sk.sysmodules,c.path=Sk.realsyspath,c.getExecutionLimit=new Sk.builtin.func(function(){return null===Sk.execLimit?Sk.builtin.none.none$:new Sk.builtin.int_(Sk.execLimit)}),c.setExecutionLimit=new Sk.builtin.func(function(a){if(null===Sk.execLimit)throw new Sk.builtin.NotImplementedError("Execution limiting is not enabled");void 0!==a&&(Sk.execLimit=Sk.builtin.asnum$(a))}),c.resetTimeout=new Sk.builtin.func(function(){Sk.execStart=new Date}),c.getYieldLimit=new Sk.builtin.func(function(){return null===Sk.yieldLimit?Sk.builtin.none.none$:new Sk.builtin.int_(Sk.yieldLimit)}),c.setYieldLimit=new Sk.builtin.func(function(a){if(null===Sk.yieldLimit)throw new Sk.builtin.NotImplementedError("Yielding is not enabled");void 0!==a&&(Sk.yieldLimit=Sk.builtin.asnum$(a))}),c.debug=new Sk.builtin.func(function(){return Sk.builtin.none.none$}),c.__stdout__=new Sk.builtin.file(new Sk.builtin.str("/dev/stdout"),new Sk.builtin.str("w")),c.__stdin__=new Sk.builtin.file(new Sk.builtin.str("/dev/stdin"),new Sk.builtin.str("r")),c.stdout=c.__stdout__,c.stdin=c.__stdin__,c};',"src/builtin/this.py":`s = """Gur Mra bs Clguba, ol Gvz Crgref

Ornhgvshy vf orggre guna htyl.
Rkcyvpvg vf orggre guna vzcyvpvg.
Fvzcyr vf orggre guna pbzcyrk.
Pbzcyrk vf orggre guna pbzcyvpngrq.
Syng vf orggre guna arfgrq.
Fcnefr vf orggre guna qrafr.
Ernqnovyvgl pbhagf.
Fcrpvny pnfrf nera'g fcrpvny rabhtu gb oernx gur ehyrf.
Nygubhtu cenpgvpnyvgl orngf chevgl.
Reebef fubhyq arire cnff fvyragyl.
Hayrff rkcyvpvgyl fvyraprq.
Va gur snpr bs nzovthvgl, ershfr gur grzcgngvba gb thrff.
Gurer fubhyq or bar-- naq cersrenoyl bayl bar --boivbhf jnl gb qb vg.
Nygubhtu gung jnl znl abg or boivbhf ng svefg hayrff lbh'er Qhgpu.
Abj vf orggre guna arire.
Nygubhtu arire vf bsgra orggre guna *evtug* abj.
Vs gur vzcyrzragngvba vf uneq gb rkcynva, vg'f n onq vqrn.
Vs gur vzcyrzragngvba vf rnfl gb rkcynva, vg znl or n tbbq vqrn.
Anzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber bs gubfr!"""

d = {}
for c in (65, 97):
    for i in range(26):
        d[chr(i+c)] = chr((i+13) % 26 + c)

print "".join([d.get(c, c) for c in s])
`,"src/lib/BaseHTTPServer.py":`raise NotImplementedError("BaseHTTPServer is not yet implemented in Skulpt")
`,"src/lib/Bastion.py":`raise NotImplementedError("Bastion is not yet implemented in Skulpt")
`,"src/lib/CGIHTTPServer.py":`raise NotImplementedError("CGIHTTPServer is not yet implemented in Skulpt")
`,"src/lib/ConfigParser.py":`raise NotImplementedError("ConfigParser is not yet implemented in Skulpt")
`,"src/lib/Cookie.py":`raise NotImplementedError("Cookie is not yet implemented in Skulpt")
`,"src/lib/DocXMLRPCServer.py":`raise NotImplementedError("DocXMLRPCServer is not yet implemented in Skulpt")
`,"src/lib/HTMLParser.py":`raise NotImplementedError("HTMLParser is not yet implemented in Skulpt")
`,"src/lib/MimeWriter.py":`raise NotImplementedError("MimeWriter is not yet implemented in Skulpt")
`,"src/lib/Queue.py":`raise NotImplementedError("Queue is not yet implemented in Skulpt")
`,"src/lib/SimpleHTTPServer.py":`raise NotImplementedError("SimpleHTTPServer is not yet implemented in Skulpt")
`,"src/lib/SimpleXMLRPCServer.py":`raise NotImplementedError("SimpleXMLRPCServer is not yet implemented in Skulpt")
`,"src/lib/SocketServer.py":`raise NotImplementedError("SocketServer is not yet implemented in Skulpt")
`,"src/lib/StringIO.py":`r"""File-like objects that read from or write to a string buffer.

This implements (nearly) all stdio methods.

f = StringIO()      # ready for writing
f = StringIO(buf)   # ready for reading
f.close()           # explicitly release resources held
flag = f.isatty()   # always false
pos = f.tell()      # get current position
f.seek(pos)         # set current position
f.seek(pos, mode)   # mode 0: absolute; 1: relative; 2: relative to EOF
buf = f.read()      # read until EOF
buf = f.read(n)     # read up to n bytes
buf = f.readline()  # read until end of line ('\\n') or EOF
list = f.readlines()# list of f.readline() results until EOF
f.truncate([size])  # truncate file at to at most size (default: current pos)
f.write(buf)        # write at current position
f.writelines(list)  # for line in list: f.write(line)
f.getvalue()        # return whole file's contents as a string

Notes:
- Using a real file is often faster (but less convenient).
- There's also a much faster implementation in C, called cStringIO, but
  it's not subclassable.
- fileno() is left unimplemented so that code which uses it triggers
  an exception early.
- Seeking far beyond EOF and then writing will insert real null
  bytes that occupy space in the buffer.
- There's a simple test set (see end of this file).
"""

__all__ = ["StringIO"]

def _complain_ifclosed(closed):
    if closed:
        raise ValueError("I/O operation on closed file")

class StringIO:
    """class StringIO([buffer])

    When a StringIO object is created, it can be initialized to an existing
    string by passing the string to the constructor. If no string is given,
    the StringIO will start empty.

    The StringIO object can accept either Unicode or 8-bit strings, but
    mixing the two may take some care. If both are used, 8-bit strings that
    cannot be interpreted as 7-bit ASCII (that use the 8th bit) will cause
    a UnicodeError to be raised when getvalue() is called.
    """
    def __init__(self, buf = ''):
        # Force self.buf to be a string or unicode
        if not isinstance(buf, str):
            buf = str(buf)
        self.buf = buf
        self.len = len(buf)
        self.buflist = []
        self.pos = 0
        self.closed = False
        self.softspace = 0

    def __iter__(self):
        return self

    def next(self):
        """A file object is its own iterator, for example iter(f) returns f
        (unless f is closed). When a file is used as an iterator, typically
        in a for loop (for example, for line in f: print line), the next()
        method is called repeatedly. This method returns the next input line,
        or raises StopIteration when EOF is hit.
        """
        _complain_ifclosed(self.closed)
        r = self.readline()
        if not r:
            raise StopIteration
        return r

    def close(self):
        """Free the memory buffer.
        """
        if not self.closed:
            self.closed = True
            self.buf = None
            self.pos = None

    def isatty(self):
        """Returns False because StringIO objects are not connected to a
        tty-like device.
        """
        _complain_ifclosed(self.closed)
        return False

    def seek(self, pos, mode = 0):
        """Set the file's current position.

        The mode argument is optional and defaults to 0 (absolute file
        positioning); other values are 1 (seek relative to the current
        position) and 2 (seek relative to the file's end).

        There is no return value.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        if mode == 1:
            pos += self.pos
        elif mode == 2:
            pos += self.len
        self.pos = max(0, pos)

    def tell(self):
        """Return the file's current position."""
        _complain_ifclosed(self.closed)
        return self.pos

    def read(self, n = -1):
        """Read at most size bytes from the file
        (less if the read hits EOF before obtaining size bytes).

        If the size argument is negative or omitted, read all data until EOF
        is reached. The bytes are returned as a string object. An empty
        string is returned when EOF is encountered immediately.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        if n is None or n < 0:
            newpos = self.len
        else:
            newpos = min(self.pos+n, self.len)
        r = self.buf[self.pos:newpos]
        self.pos = newpos
        return r

    def readline(self, length=None):
        r"""Read one entire line from the file.

        A trailing newline character is kept in the string (but may be absent
        when a file ends with an incomplete line). If the size argument is
        present and non-negative, it is a maximum byte count (including the
        trailing newline) and an incomplete line may be returned.

        An empty string is returned only when EOF is encountered immediately.

        Note: Unlike stdio's fgets(), the returned string contains null
        characters ('\\0') if they occurred in the input.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        i = self.buf.find('\\n', self.pos)
        if i < 0:
            newpos = self.len
        else:
            newpos = i+1
        if length is not None and length >= 0:
            if self.pos + length < newpos:
                newpos = self.pos + length
        r = self.buf[self.pos:newpos]
        self.pos = newpos
        return r

    def readlines(self, sizehint = 0):
        """Read until EOF using readline() and return a list containing the
        lines thus read.

        If the optional sizehint argument is present, instead of reading up
        to EOF, whole lines totalling approximately sizehint bytes (or more
        to accommodate a final whole line).
        """
        total = 0
        lines = []
        line = self.readline()
        while line:
            lines.append(line)
            total += len(line)
            if 0 < sizehint <= total:
                break
            line = self.readline()
        return lines

    def truncate(self, size=None):
        """Truncate the file's size.

        If the optional size argument is present, the file is truncated to
        (at most) that size. The size defaults to the current position.
        The current file position is not changed unless the position
        is beyond the new file size.

        If the specified size exceeds the file's current size, the
        file remains unchanged.
        """
        _complain_ifclosed(self.closed)
        if size is None:
            size = self.pos
        elif size < 0:
            raise IOError(22, "Negative size not allowed")
        elif size < self.pos:
            self.pos = size
        self.buf = self.getvalue()[:size]
        self.len = size

    def write(self, s):
        """Write a string to the file.

        There is no return value.
        """
        _complain_ifclosed(self.closed)
        if not s: return
        # Force s to be a string or unicode
        if not isinstance(s, str):
            s = str(s)
        spos = self.pos
        slen = self.len
        if spos == slen:
            self.buflist.append(s)
            self.len = self.pos = spos + len(s)
            return
        if spos > slen:
            self.buflist.append('\\0'*(spos - slen))
            slen = spos
        newpos = spos + len(s)
        if spos < slen:
            if self.buflist:
                self.buf += ''.join(self.buflist)
            self.buflist = [self.buf[:spos], s, self.buf[newpos:]]
            self.buf = ''
            if newpos > slen:
                slen = newpos
        else:
            self.buflist.append(s)
            slen = newpos
        self.len = slen
        self.pos = newpos

    def writelines(self, iterable):
        """Write a sequence of strings to the file. The sequence can be any
        iterable object producing strings, typically a list of strings. There
        is no return value.

        (The name is intended to match readlines(); writelines() does not add
        line separators.)
        """
        write = self.write
        for line in iterable:
            write(line)

    def flush(self):
        """Flush the internal buffer
        """
        _complain_ifclosed(self.closed)

    def getvalue(self):
        """
        Retrieve the entire contents of the "file" at any time before
        the StringIO object's close() method is called.

        The StringIO object can accept either Unicode or 8-bit strings,
        but mixing the two may take some care. If both are used, 8-bit
        strings that cannot be interpreted as 7-bit ASCII (that use the
        8th bit) will cause a UnicodeError to be raised when getvalue()
        is called.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        return self.buf
`,"src/lib/UserDict.py":`raise NotImplementedError("UserDict is not yet implemented in Skulpt")
`,"src/lib/UserList.py":`raise NotImplementedError("UserList is not yet implemented in Skulpt")
`,"src/lib/UserString.py":`raise NotImplementedError("UserString is not yet implemented in Skulpt")
`,"src/lib/_LWPCookieJar.py":`raise NotImplementedError("_LWPCookieJar is not yet implemented in Skulpt")
`,"src/lib/_MozillaCookieJar.py":`raise NotImplementedError("_MozillaCookieJar is not yet implemented in Skulpt")
`,"src/lib/__future__.py":`raise NotImplementedError("__future__ is not yet implemented in Skulpt")
`,"src/lib/__phello__.foo.py":`raise NotImplementedError("__phello__.foo is not yet implemented in Skulpt")
`,"src/lib/_abcoll.py":`raise NotImplementedError("_abcoll is not yet implemented in Skulpt")
`,"src/lib/_strptime.py":`raise NotImplementedError("_strptime is not yet implemented in Skulpt")
`,"src/lib/_threading_local.py":`raise NotImplementedError("_threading_local is not yet implemented in Skulpt")
`,"src/lib/abc.py":`raise NotImplementedError("abc is not yet implemented in Skulpt")
`,"src/lib/aifc.py":`raise NotImplementedError("aifc is not yet implemented in Skulpt")
`,"src/lib/antigravity.js":'window.open("https://xkcd.com/353/","_blank");',"src/lib/anydbm.py":`raise NotImplementedError("anydbm is not yet implemented in Skulpt")
`,"src/lib/array.js":`$builtinmodule=function(){var a={},b=["c","b","B","u","h","H","i","I","l","L","f","d"];return a.array=Sk.misceval.buildClass(a,function(a,c){c.__init__=new Sk.builtin.func(function(a,c,d){if(Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,3),-1==b.indexOf(Sk.ffi.remapToJs(c)))throw new Sk.builtin.ValueError("bad typecode (must be c, b, B, u, h, H, i, I, l, L, f or d)");if(d&&!Sk.builtin.checkIterable(d))throw new Sk.builtin.TypeError("iteration over non-sequence");if(a.$d.mp$ass_subscript(new Sk.builtin.str("typecode"),c),a.$d.mp$ass_subscript(new Sk.builtin.str("__module__"),new Sk.builtin.str("array")),a.typecode=c,void 0===d)a.internalIterable=new Sk.builtin.list;else if(d instanceof Sk.builtin.list)a.internalIterable=d;else for(a.internalIterable=new Sk.builtin.list,iter=Sk.abstr.iter(d),item=iter.tp$iternext();void 0!==item;item=iter.tp$iternext())Sk.misceval.callsimArray(a.internalIterable.append,[a.internalIterable,item])}),c.__repr__=new Sk.builtin.func(function(a){var b=Sk.ffi.remapToJs(a.typecode),c="";return Sk.ffi.remapToJs(a.internalIterable).length&&("c"==Sk.ffi.remapToJs(a.typecode)?c=", '"+Sk.ffi.remapToJs(a.internalIterable).join("")+"'":c=", "+Sk.ffi.remapToJs(Sk.misceval.callsimArray(a.internalIterable.__repr__,[a.internalIterable]))),new Sk.builtin.str("array('"+b+"'"+c+")")}),c.__str__=c.__repr__,c.__getattribute__=new Sk.builtin.func(function(a,b){return a.tp$getattr(b)}),c.append=new Sk.builtin.func(function(a,b){return Sk.misceval.callsimArray(a.internalIterable.append,[a.internalIterable,b]),Sk.builtin.none.none$}),c.extend=new Sk.builtin.func(function(a,b){if(Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,2),!Sk.builtin.checkIterable(b))throw new Sk.builtin.TypeError("iteration over non-sequence");for(iter=Sk.abstr.iter(b),item=iter.tp$iternext();void 0!==item;item=iter.tp$iternext())Sk.misceval.callsimArray(a.internalIterable.append,[a.internalIterable,item])})},"array",[]),a.__name__=new Sk.builtin.str("array"),a};`,"src/lib/ast.py":`raise NotImplementedError("ast is not yet implemented in Skulpt")
`,"src/lib/asynchat.py":`raise NotImplementedError("asynchat is not yet implemented in Skulpt")
`,"src/lib/asyncore.py":`raise NotImplementedError("asyncore is not yet implemented in Skulpt")
`,"src/lib/atexit.py":`raise NotImplementedError("atexit is not yet implemented in Skulpt")
`,"src/lib/audiodev.py":`raise NotImplementedError("audiodev is not yet implemented in Skulpt")
`,"src/lib/base64.py":`raise NotImplementedError("base64 is not yet implemented in Skulpt")
`,"src/lib/bdb.py":`raise NotImplementedError("bdb is not yet implemented in Skulpt")
`,"src/lib/binhex.py":`raise NotImplementedError("binhex is not yet implemented in Skulpt")
`,"src/lib/bisect.py":`"""Bisection algorithms."""

def insort_right(a, x, lo=0, hi=None):
    """Insert item x in list a, and keep it sorted assuming a is sorted.

    If x is already in a, insert it to the right of the rightmost x.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    a.insert(lo, x)

def bisect_right(a, x, lo=0, hi=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e <= x, and all e in
    a[i:] have e > x.  So if x already appears in the list, a.insert(x) will
    insert just after the rightmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    return lo

def insort_left(a, x, lo=0, hi=None):
    """Insert item x in list a, and keep it sorted assuming a is sorted.

    If x is already in a, insert it to the left of the leftmost x.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    a.insert(lo, x)


def bisect_left(a, x, lo=0, hi=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e < x, and all e in
    a[i:] have e >= x.  So if x already appears in the list, a.insert(x) will
    insert just before the leftmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    return lo

# Overwrite above definitions with a fast C implementation
try:
    from _bisect import *
except ImportError:
    pass

# Create aliases
bisect = bisect_right
insort = insort_right
`,"src/lib/bsddb/__init__.py":`raise NotImplementedError("bsddb is not yet implemented in Skulpt")
`,"src/lib/cProfile.py":`raise NotImplementedError("cProfile is not yet implemented in Skulpt")
`,"src/lib/calendar.py":`raise NotImplementedError("calendar is not yet implemented in Skulpt")
`,"src/lib/cgi.py":`raise NotImplementedError("cgi is not yet implemented in Skulpt")
`,"src/lib/cgitb.py":`raise NotImplementedError("cgitb is not yet implemented in Skulpt")
`,"src/lib/chunk.py":`raise NotImplementedError("chunk is not yet implemented in Skulpt")
`,"src/lib/cmd.py":`raise NotImplementedError("cmd is not yet implemented in Skulpt")
`,"src/lib/code.py":`raise NotImplementedError("code is not yet implemented in Skulpt")
`,"src/lib/codecs.py":`raise NotImplementedError("codecs is not yet implemented in Skulpt")
`,"src/lib/codeop.py":`raise NotImplementedError("codeop is not yet implemented in Skulpt")
`,"src/lib/collections.js":`var $builtinmodule=function(){return Sk.misceval.chain(Sk.importModule("keyword",!1,!0),function(a){var b={};b.defaultdict=function(a,c){if(!(this instanceof b.defaultdict))return new b.defaultdict(a,c);if(Sk.abstr.superConstructor(b.defaultdict,this,c),void 0===a)this.default_factory=Sk.builtin.none.none$;else{if(!Sk.builtin.checkCallable(a)&&!(a instanceof Sk.builtin.none))throw new Sk.builtin.TypeError("first argument must be callable");this.default_factory=a}return this.$d?this.$d.default_factory=this.default_factory:this.$d={default_factory:this.default_factory},this},Sk.abstr.setUpInheritance("defaultdict",b.defaultdict,Sk.builtin.dict),b.defaultdict.prototype.$r=function(){var a=Sk.misceval.objectRepr(this.default_factory).v,b=Sk.builtin.dict.prototype.$r.call(this).v;return new Sk.builtin.str("defaultdict("+a+", "+b+")")},b.defaultdict.prototype.__copy__=function(a){var c,d,e,f=[];for(d=Sk.abstr.iter(a),e=d.tp$iternext();void 0!==e;e=d.tp$iternext())c=a.mp$subscript(e),f.push(e),f.push(c);return new b.defaultdict(a.$d.default_factory,f)},b.defaultdict.prototype.__missing__=function(a){if(Sk.builtin.pyCheckArgsLen("__missing__",arguments.length,0,1),a)throw new Sk.builtin.KeyError(Sk.misceval.objectRepr(a));else return Sk.misceval.callsimArray(this.default_factory)},b.defaultdict.prototype.mp$subscript=function(a){try{return Sk.builtin.dict.prototype.mp$subscript.call(this,a)}catch(b){return this.default_factory instanceof Sk.builtin.none?this.__missing__(a):(ret=this.__missing__(),this.mp$ass_subscript(a,ret),ret)}},b.Counter=function(a){if(!(this instanceof b.Counter))return new b.Counter(a);if(a instanceof Sk.builtin.dict||void 0===a)Sk.abstr.superConstructor(b.Counter,this,a);else{if(!Sk.builtin.checkIterable(a))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object is not iterable");Sk.abstr.superConstructor(b.Counter,this);for(var c,d=new Sk.builtin.int_(1),e=a.tp$iter(),f=e.tp$iternext();void 0!==f;f=e.tp$iternext())c=this.mp$subscript(f),c=c.nb$add(d),this.mp$ass_subscript(f,c)}return this},Sk.abstr.setUpInheritance("Counter",b.Counter,Sk.builtin.dict),b.Counter.prototype.$r=function(){var a=0<this.size?Sk.builtin.dict.prototype.$r.call(this).v:"";return new Sk.builtin.str("Counter("+a+")")},b.Counter.prototype.mp$subscript=function(a){try{return Sk.builtin.dict.prototype.mp$subscript.call(this,a)}catch(a){return new Sk.builtin.int_(0)}},b.Counter.prototype.elements=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("elements",arguments.length,1,1);for(var b=[],c=a.tp$iter(),d=c.tp$iternext();void 0!==d;d=c.tp$iternext())for(var e=0;e<a.mp$subscript(d).v;e++)b.push(d);var f={tp$iter:function(){return f},$obj:this,$index:0,$elem:b,tp$iternext:function(){return f.$index>=f.$elem.length?void 0:f.$elem[f.$index++]}};return f}),b.Counter.prototype.most_common=new Sk.builtin.func(function(a,b){Sk.builtin.pyCheckArgsLen("most_common",arguments.length,1,2);var c=a.mp$length();if(void 0===b)b=c;else{if(!Sk.builtin.checkInt(b))if(b instanceof Sk.builtin.float_)throw new Sk.builtin.TypeError("integer argument expected, got float");else throw new Sk.builtin.TypeError("an integer is required");b=Sk.builtin.asnum$(b),b=b<=c?b:c,b=0<=b?b:0}for(var d=[],e=a.tp$iter(),f=e.tp$iternext();void 0!==f;f=e.tp$iternext())d.push([f,a.mp$subscript(f)]);d=d.sort(function(c,a){return c[1].v<a[1].v?1:c[1].v>a[1].v?-1:0});for(var g=[],h=0;h<b;h++)g.push(new Sk.builtin.tuple(d.shift()));return new Sk.builtin.list(g)}),b.Counter.prototype.update=new Sk.builtin.func(function(a,b){if(Sk.builtin.pyCheckArgsLen("update",arguments.length,1,2),b instanceof Sk.builtin.dict)for(var c,d=b.tp$iter(),e=d.tp$iternext();void 0!==e;e=d.tp$iternext())c=a.mp$subscript(e),a.mp$ass_subscript(e,c.nb$add(b.mp$subscript(e)));else if(void 0!==b){if(!Sk.builtin.checkIterable(b))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(b)+"' object is not iterable");for(var c,f=new Sk.builtin.int_(1),d=b.tp$iter(),e=d.tp$iternext();void 0!==e;e=d.tp$iternext())c=a.mp$subscript(e),a.mp$ass_subscript(e,c.nb$add(f))}}),b.Counter.prototype.subtract=new Sk.builtin.func(function(a,b){if(Sk.builtin.pyCheckArgsLen("subtract",arguments.length,1,2),b instanceof Sk.builtin.dict)for(var c,d=b.tp$iter(),e=d.tp$iternext();void 0!==e;e=d.tp$iternext())c=a.mp$subscript(e),a.mp$ass_subscript(e,c.nb$subtract(b.mp$subscript(e)));else if(void 0!==b){if(!Sk.builtin.checkIterable(b))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(b)+"' object is not iterable");for(var c,f=new Sk.builtin.int_(1),d=b.tp$iter(),e=d.tp$iternext();void 0!==e;e=d.tp$iternext())c=a.mp$subscript(e),a.mp$ass_subscript(e,c.nb$subtract(f))}}),b.OrderedDict=function(a){return this instanceof b.OrderedDict?(this.orderedkeys=[],Sk.abstr.superConstructor(b.OrderedDict,this,a),this):new b.OrderedDict(a)},Sk.abstr.setUpInheritance("OrderedDict",b.OrderedDict,Sk.builtin.dict),b.OrderedDict.prototype.$r=function(){var a,b,c,d,e=[];for(b=this.tp$iter(),c=b.tp$iternext();void 0!==c;c=b.tp$iternext())a=this.mp$subscript(c),void 0===a&&(a=null),e.push("("+Sk.misceval.objectRepr(c).v+", "+Sk.misceval.objectRepr(a).v+")");return d=e.join(", "),0<e.length&&(d="["+d+"]"),new Sk.builtin.str("OrderedDict("+d+")")},b.OrderedDict.prototype.mp$ass_subscript=function(a,b){var c=this.orderedkeys.indexOf(a);return-1==c&&this.orderedkeys.push(a),Sk.builtin.dict.prototype.mp$ass_subscript.call(this,a,b)},b.OrderedDict.prototype.mp$del_subscript=function(a){var b=this.orderedkeys.indexOf(a);return-1!=b&&this.orderedkeys.splice(b,1),Sk.builtin.dict.prototype.mp$del_subscript.call(this,a)},b.OrderedDict.prototype.__iter__=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("__iter__",arguments.length,0,0,!1,!0),b.OrderedDict.prototype.tp$iter.call(a)}),b.OrderedDict.prototype.tp$iter=function(){var a;return a={tp$iter:function(){return a},$obj:this,$index:0,$keys:this.orderedkeys.slice(0),tp$iternext:function(){return a.$index>=a.$keys.length?void 0:a.$keys[a.$index++]}},a},b.OrderedDict.prototype.ob$eq=function(a){var c,d,e,f,g;if(!(a instanceof b.OrderedDict))return Sk.builtin.dict.prototype.ob$eq.call(this,a);if(c=this.mp$length(),d=a.mp$length(),c!==d)return Sk.builtin.bool.false$;for(e=this.tp$iter(),otheriter=a.tp$iter(),f=e.tp$iternext(),otherk=otheriter.tp$iternext();void 0!==f;f=e.tp$iternext(),otherk=otheriter.tp$iternext()){if(!Sk.misceval.isTrue(Sk.misceval.richCompareBool(f,otherk,"Eq")))return Sk.builtin.bool.false$;if(g=this.mp$subscript(f),otherv=a.mp$subscript(otherk),!Sk.misceval.isTrue(Sk.misceval.richCompareBool(g,otherv,"Eq")))return Sk.builtin.bool.false$}return Sk.builtin.bool.true$},b.OrderedDict.prototype.ob$ne=function(a){var c,d,e,f,g;if(!(a instanceof b.OrderedDict))return Sk.builtin.dict.prototype.ob$ne.call(this,a);if(c=this.size,d=a.size,c!==d)return Sk.builtin.bool.true$;for(e=this.tp$iter(),otheriter=a.tp$iter(),f=e.tp$iternext(),otherk=otheriter.tp$iternext();void 0!==f;f=e.tp$iternext(),otherk=otheriter.tp$iternext()){if(!Sk.misceval.isTrue(Sk.misceval.richCompareBool(f,otherk,"Eq")))return Sk.builtin.bool.true$;if(g=this.mp$subscript(f),otherv=a.mp$subscript(otherk),!Sk.misceval.isTrue(Sk.misceval.richCompareBool(g,otherv,"Eq")))return Sk.builtin.bool.true$}return Sk.builtin.bool.false$},b.OrderedDict.prototype.pop=new Sk.builtin.func(function(a,b,c){var d;return Sk.builtin.pyCheckArgsLen("pop",arguments.length,2,3),d=a.orderedkeys.indexOf(b),-1!=d&&a.orderedkeys.splice(d,1),Sk.misceval.callsimArray(Sk.builtin.dict.prototype.pop,[a,b,c])}),b.OrderedDict.prototype.popitem=new Sk.builtin.func(function(a,b){var c,d,e;if(Sk.builtin.pyCheckArgsLen("popitem",arguments.length,1,2),0==a.orderedkeys.length)throw e=new Sk.builtin.str("dictionary is empty"),new Sk.builtin.KeyError(e.v);return c=a.orderedkeys[0],(void 0===b||Sk.misceval.isTrue(b))&&(c=a.orderedkeys[a.orderedkeys.length-1]),d=Sk.misceval.callsimArray(a.pop,[a,c]),Sk.builtin.tuple([c,d])}),b.deque=function(){throw new Sk.builtin.NotImplementedError("deque is not implemented")},b.namedtuples={};var c=function(b){for(var a=[],c=0;c<=b.length;c++)if(void 0===a[b[c]])a[b[c]]=1;else return!0;return!1},d=function(a,b){function c(){}c.prototype=b.prototype,a.superClass_=b.prototype,a.prototype=new c,a.prototype.constructor=a};return b.namedtuple=new Sk.builtin.func(function(e,f){if(Sk.ffi.remapToJs(Sk.misceval.callsimArray(a.$d.iskeyword,[e])))throw new Sk.builtin.ValueError("Type names and field names cannot be a keyword: "+e.v);var g=Sk.ffi.remapToJs(e);if(startsw=new RegExp(/^[0-9].*/),startsw2=new RegExp(/^[0-9_].*/),alnum=new RegExp(/^\\w*$/),startsw.test(g)||!alnum.test(g))throw new Sk.builtin.ValueError(" Bad type name "+g);var h=Sk.ffi.remapToJs(f);for("string"==typeof h&&(h=h.split(/\\s+/)),i=0;i<h.length;i++)if(Sk.ffi.remapToJs(Sk.misceval.callsimArray(a.$d.iskeyword,[Sk.ffi.remapToPy(h[i])]))||startsw2.test(h[i])||!alnum.test(h[i]))throw new Sk.builtin.ValueError("Type names and field names cannot be a keyword: "+h[i]);if(c(h))throw new Sk.builtin.ValueError("Field names must be unique.");var j=function(){var a;if(arguments.length!==h.length)throw new Sk.builtin.TypeError("Number of arguments must match");return this instanceof b.namedtuples[g]?void(this.__class__=b.namedtuples[g],this.v=Array.prototype.slice.call(arguments)):(a=Object.create(b.namedtuples[g].prototype),a.constructor.apply(a,arguments),a)};return b.namedtuples[g]=j,d(j,Sk.builtin.tuple),j.prototype.tp$name=g,j.prototype.ob$type=Sk.builtin.type.makeIntoTypeObj(g,b.namedtuples[g]),j.prototype.$r=function(){var a,b,c;if(0===this.v.length)return new Sk.builtin.str(g+"()");for(c=[],b=0;b<this.v.length;++b)c[b]=h[b]+"="+Sk.misceval.objectRepr(this.v[b]).v;return a=c.join(", "),1===this.v.length&&(a+=","),new Sk.builtin.str(g+"("+a+")")},j.prototype.tp$getattr=function(a){var b=a.$jsstr(),c=h.indexOf(b);return 0<=c?this.v[c]:void 0},j.prototype.tp$setattr=function(){throw new Sk.builtin.AttributeError("can't set attribute")},j}),b})};`,"src/lib/colorsys.py":`raise NotImplementedError("colorsys is not yet implemented in Skulpt")
`,"src/lib/commands.py":`raise NotImplementedError("commands is not yet implemented in Skulpt")
`,"src/lib/compileall.py":`raise NotImplementedError("compileall is not yet implemented in Skulpt")
`,"src/lib/compiler/__init__.py":`raise NotImplementedError("compiler is not yet implemented in Skulpt")
`,"src/lib/config/__init__.py":`raise NotImplementedError("config is not yet implemented in Skulpt")
`,"src/lib/contextlib.py":`raise NotImplementedError("contextlib is not yet implemented in Skulpt")
`,"src/lib/cookielib.py":`raise NotImplementedError("cookielib is not yet implemented in Skulpt")
`,"src/lib/copy.py":`"""
This file was modified from CPython.
Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
2011, 2012, 2013, 2014, 2015 Python Software Foundation; All Rights Reserved
"""
import types
class Error(Exception):
    pass
error = Error 
class _EmptyClass:
    pass

def copy(x):
    cls = type(x)
    if callable(x):
        return x
    copier = getattr(cls, "__copy__", None)
    if copier:
        return copier(x)
    if cls in (type(None), int, float, bool, long, str, tuple, type):
        return x
    if (cls == list) or (cls == dict) or (cls == set) or (cls == slice):
        return cls(x)
    try:
        getstate = getattr(x, "__getstate__", None)
        setstate = getattr(x, "__setstate__", None)
        initargs = getattr(x, "__getinitargs__", None)
    except:
        reductor = False
    if getstate or setstate or initargs:
        raise NotImplementedError("Skulpt does not yet support copying with user-defined __getstate__, __setstate__ or __getinitargs__()")
    reductor = getattr(x, "__reduce_ex__", None)
    if reductor:
        rv = reductor(4)
    else:
        reductor = getattr(x, "__reduce__", None)
        if reductor:
            rv = reductor()
        elif str(cls)[1:6] == "class":
            copier = _copy_inst
            return copier(x)
        else:
            raise Error("un(shallow)copyable object of type %s" % cls)
    if isinstance(rv, str):
        return x
    return _reconstruct(x, rv, 0)

def _copy_inst(x):
    if hasattr(x, '__copy__'):
        return x.__copy__()
    if hasattr(x, '__getinitargs__'):
        args = x.__getinitargs__()
        y = x.__class__(*args)
    else:
        y = _EmptyClass()
        y.__class__ = x.__class__
    if hasattr(x, '__getstate__'):
        state = x.__getstate__()
    else:
        state = x.__dict__
    if hasattr(y, '__setstate__'):
        y.__setstate__(state)
    else:
        y.__dict__.update(state)
    return y

d = _deepcopy_dispatch = {}

def deepcopy(x, memo=None, _nil=[]):
    """Deep copy operation on arbitrary Python objects.
    See the module's __doc__ string for more info.
    """
    if memo is None:
        memo = {}
    idx = id(x)
    y = memo.get(idx, _nil)
    if y is not _nil:
        return y
    cls = type(x)
    try:
        getstate = getattr(x, "__getstate__", None)
        setstate = getattr(x, "__setstate__", None)
        initargs = getattr(x, "__getinitargs__", None)
    except:
        reductor = False
    if getstate or setstate or initargs:
        raise NotImplementedError("Skulpt does not yet support copying with user-defined __getstate__, __setstate__ or __getinitargs__()")
    copier = _deepcopy_dispatch.get(cls)
    if copier:
        y = copier(x, memo)
    elif str(cls)[1:6] == "class":
        copier = _deepcopy_dispatch["InstanceType"]
        y = copier(x, memo)
    else:
        try:
            issc = issubclass(cls, type)
        except TypeError: # cls is not a class (old Boost; see SF #502085)
            issc = 0
        if issc:
            y = _deepcopy_atomic(x, memo)
        else:
            copier = getattr(x, "__deepcopy__", None)
            if copier:
                y = copier(memo)
            else:
                reductor = getattr(x, "__reduce_ex__", None)
                if reductor:
                    rv = reductor(2)
                else:
                    reductor = getattr(x, "__reduce__", None)
                    if reductor:
                        rv = reductor()
                    else:
                        raise Error(
                            "un(deep)copyable object of type %s" % cls)
                y = _reconstruct(x, rv, 1, memo)
    memo[idx] = y
    _keep_alive(x, memo) # Make sure x lives at least as long as d
    return y

def _deepcopy_atomic(x, memo):
    return x
d[type(None)] = _deepcopy_atomic
# d[type(Ellipsis)] = _deepcopy_atomic
d[type(NotImplemented)] = _deepcopy_atomic
d[int] = _deepcopy_atomic
d[float] = _deepcopy_atomic
d[bool] = _deepcopy_atomic
d[complex] = _deepcopy_atomic
# d[bytes] = _deepcopy_atomic
d[str] = _deepcopy_atomic
# try:
# d[types.CodeType] = _deepcopy_atomic
# except AttributeError:
#   pass
d[type] = _deepcopy_atomic
# d[types.BuiltinFunctionType] = _deepcopy_atomic
d[types.FunctionType] = _deepcopy_atomic
# d[weakref.ref] = _deepcopy_atomic

def _deepcopy_list(x, memo):
    y = []
    memo[id(x)] = y
    for a in x:
        y.append(deepcopy(a, memo))
    return y
d[list] = _deepcopy_list

def _deepcopy_set(x, memo):
    result = set([])  # make empty set
    memo[id(x)] = result  # register this set in the memo for loop checking
    for a in x:   # go through elements of set
        result.add(deepcopy(a, memo))  # add the copied elements into the new set
    return result # return the new set
d[set] = _deepcopy_set

def _deepcopy_tuple(x, memo):
    y = [deepcopy(a, memo) for a in x]
    # We're not going to put the tuple in the memo, but it's still important we
    # check for it, in case the tuple contains recursive mutable structures.
    try:
        return memo[id(x)]
    except KeyError:
        pass
    for k, j in zip(x, y):
        if k is not j:
            y = tuple(y)
            break
    else:
        y = x
    return y
d[tuple] = _deepcopy_tuple

def _deepcopy_dict(x, memo):
    y = {}
    memo[id(x)] = y
    for key, value in x.items():
        y[deepcopy(key, memo)] = deepcopy(value, memo)
    return y
d[dict] = _deepcopy_dict

# def _deepcopy_method(x, memo): # Copy instance methods
#     y = type(x)(x.im_func, deepcopy(x.im_self, memo), x.im_class);
#     return y
d[types.MethodType] = _deepcopy_atomic

def _deepcopy_inst(x, memo):
    if hasattr(x, '__deepcopy__'):
         return x.__deepcopy__(memo)
    if hasattr(x, '__getinitargs__'):
        args = x.__getinitargs__()
        args = deepcopy(args, memo)
        y = x.__class__(*args)
    else:
        y = _EmptyClass()
        y.__class__ = x.__class__
    memo[id(x)] = y
    if hasattr(x, '__getstate__'):
        state = x.__getstate__()
    else:
        state = x.__dict__
    state = deepcopy(state, memo)
    if hasattr(y, '__setstate__'):
        y.__setstate__(state)
    else:
        y.__dict__.update(state)
        return y
d["InstanceType"] = _deepcopy_inst

def _keep_alive(x, memo):
    """Keeps a reference to the object x in the memo.
    Because we remember objects by their id, we have
    to assure that possibly temporary objects are kept
    alive by referencing them.
    We store a reference at the id of the memo, which should
    normally not be used unless someone tries to deepcopy
    the memo itself...
    """
    try:
        memo[id(memo)].append(x)
    except KeyError:
        # aha, this is the first one :-)
        memo[id(memo)]=[x]

def _reconstruct(x, info, deep, memo=None):
    if isinstance(info, str):
        return x
    assert isinstance(info, tuple)
    if memo is None:
        memo = {}
    n = len(info)
    assert n in (2, 3, 4, 5)
    callable, args = info[:2]
    if n > 2:
        state = info[2]
    else:
        state = None
    if n > 3:
        listiter = info[3]
    else:
        listiter = None
    if n > 4:
        dictiter = info[4]
    else:
        dictiter = None
    if deep:
        args = deepcopy(args, memo)
    y = callable(*args)
    memo[id(x)] = y

    if state is not None:
        if deep:
            state = deepcopy(state, memo)
        if hasattr(y, '__setstate__'):
            y.__setstate__(state)
        else:
            if isinstance(state, tuple) and len(state) == 2:
                state, slotstate = state
            else:
                slotstate = None
            if state is not None:
                y.__dict__.update(state)
            if slotstate is not None:
                for key, value in slotstate.items():
                    setattr(y, key, value)

    if listiter is not None:
        for item in listiter:
            if deep:
                item = deepcopy(item, memo)
            y.append(item)
    if dictiter is not None:
        for key, value in dictiter:
            if deep:
                key = deepcopy(key, memo)
                value = deepcopy(value, memo)
            y[key] = value
    return y

del d

del types

# Helper for instance creation without calling __init__
class _EmptyClass:
    pass`,"src/lib/copy_reg.py":`raise NotImplementedError("copy_reg is not yet implemented in Skulpt")
`,"src/lib/csv.py":`raise NotImplementedError("csv is not yet implemented in Skulpt")
`,"src/lib/ctypes/__init__.py":`raise NotImplementedError("ctypes is not yet implemented in Skulpt")
`,"src/lib/ctypes/macholib/__init__.py":`raise NotImplementedError("macholib is not yet implemented in Skulpt")
`,"src/lib/curses/__init__.py":`raise NotImplementedError("curses is not yet implemented in Skulpt")
`,"src/lib/datetime.py":`"""Concrete date/time and related types -- prototype implemented in Python.

See http://www.zope.org/Members/fdrake/DateTimeWiki/FrontPage

See also http://dir.yahoo.com/Reference/calendars/

For a primer on DST, including many current DST rules, see
http://webexhibits.org/daylightsaving/

For more about DST than you ever wanted to know, see
ftp://elsie.nci.nih.gov/pub/

Sources for time zone and DST data: http://www.twinsun.com/tz/tz-link.htm

This was originally copied from the sandbox of the CPython CVS repository.
Thanks to Tim Peters for suggesting using it.

This was then copied from PyPy v5.1.0 into Skulpt by Meredydd Luff, removing
'from __future__ import division' (and replacing division operators accordingly)
and pickle support (which requires 'struct', which Skulpt does not currently
[as of 31/8/2016] have)
"""

import time as _time
import math as _math

# Python 2-vs-3 compat hack
import sys
unicode = unicode if sys.version_info < (3,) else str

_SENTINEL = object()

def _cmp(x, y):
    return 0 if x == y else 1 if x > y else -1

def _round(x):
    return int(_math.floor(x + 0.5) if x >= 0.0 else _math.ceil(x - 0.5))

MINYEAR = 1
MAXYEAR = 9999
_MINYEARFMT = 1900

_MAX_DELTA_DAYS = 999999999

# Utility functions, adapted from Python's Demo/classes/Dates.py, which
# also assumes the current Gregorian calendar indefinitely extended in
# both directions.  Difference:  Dates.py calls January 1 of year 0 day
# number 1.  The code here calls January 1 of year 1 day number 1.  This is
# to match the definition of the "proleptic Gregorian" calendar in Dershowitz
# and Reingold's "Calendrical Calculations", where it's the base calendar
# for all computations.  See the book for algorithms for converting between
# proleptic Gregorian ordinals and many other calendar systems.

_DAYS_IN_MONTH = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

_DAYS_BEFORE_MONTH = [-1]
dbm = 0
for dim in _DAYS_IN_MONTH[1:]:
    _DAYS_BEFORE_MONTH.append(dbm)
    dbm += dim
del dbm, dim

def _is_leap(year):
    "year -> 1 if leap year, else 0."
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def _days_before_year(year):
    "year -> number of days before January 1st of year."
    y = year - 1
    return y*365 + y//4 - y//100 + y//400

def _days_in_month(year, month):
    "year, month -> number of days in that month in that year."
    assert 1 <= month <= 12, month
    if month == 2 and _is_leap(year):
        return 29
    return _DAYS_IN_MONTH[month]

def _days_before_month(year, month):
    "year, month -> number of days in year preceding first day of month."
    assert 1 <= month <= 12, 'month must be in 1..12'
    return _DAYS_BEFORE_MONTH[month] + (month > 2 and _is_leap(year))

def _ymd2ord(year, month, day):
    "year, month, day -> ordinal, considering 01-Jan-0001 as day 1."
    assert 1 <= month <= 12, 'month must be in 1..12'
    dim = _days_in_month(year, month)
    assert 1 <= day <= dim, ('day must be in 1..%d' % dim)
    return (_days_before_year(year) +
            _days_before_month(year, month) +
            day)

_DI400Y = _days_before_year(401)    # number of days in 400 years
_DI100Y = _days_before_year(101)    #    "    "   "   " 100   "
_DI4Y   = _days_before_year(5)      #    "    "   "   "   4   "

# A 4-year cycle has an extra leap day over what we'd get from pasting
# together 4 single years.
assert _DI4Y == 4 * 365 + 1

# Similarly, a 400-year cycle has an extra leap day over what we'd get from
# pasting together 4 100-year cycles.
assert _DI400Y == 4 * _DI100Y + 1

# OTOH, a 100-year cycle has one fewer leap day than we'd get from
# pasting together 25 4-year cycles.
assert _DI100Y == 25 * _DI4Y - 1

_US_PER_US = 1
_US_PER_MS = 1000
_US_PER_SECOND = 1000000
_US_PER_MINUTE = 60000000
_SECONDS_PER_DAY = 24 * 3600
_US_PER_HOUR = 3600000000
_US_PER_DAY = 86400000000
_US_PER_WEEK = 604800000000

def _ord2ymd(n):
    "ordinal -> (year, month, day), considering 01-Jan-0001 as day 1."

    # n is a 1-based index, starting at 1-Jan-1.  The pattern of leap years
    # repeats exactly every 400 years.  The basic strategy is to find the
    # closest 400-year boundary at or before n, then work with the offset
    # from that boundary to n.  Life is much clearer if we subtract 1 from
    # n first -- then the values of n at 400-year boundaries are exactly
    # those divisible by _DI400Y:
    #
    #     D  M   Y            n              n-1
    #     -- --- ----        ----------     ----------------
    #     31 Dec -400        -_DI400Y       -_DI400Y -1
    #      1 Jan -399         -_DI400Y +1   -_DI400Y      400-year boundary
    #     ...
    #     30 Dec  000        -1             -2
    #     31 Dec  000         0             -1
    #      1 Jan  001         1              0            400-year boundary
    #      2 Jan  001         2              1
    #      3 Jan  001         3              2
    #     ...
    #     31 Dec  400         _DI400Y        _DI400Y -1
    #      1 Jan  401         _DI400Y +1     _DI400Y      400-year boundary
    n -= 1
    n400, n = divmod(n, _DI400Y)
    year = n400 * 400 + 1   # ..., -399, 1, 401, ...

    # Now n is the (non-negative) offset, in days, from January 1 of year, to
    # the desired date.  Now compute how many 100-year cycles precede n.
    # Note that it's possible for n100 to equal 4!  In that case 4 full
    # 100-year cycles precede the desired day, which implies the desired
    # day is December 31 at the end of a 400-year cycle.
    n100, n = divmod(n, _DI100Y)

    # Now compute how many 4-year cycles precede it.
    n4, n = divmod(n, _DI4Y)

    # And now how many single years.  Again n1 can be 4, and again meaning
    # that the desired day is December 31 at the end of the 4-year cycle.
    n1, n = divmod(n, 365)

    year += n100 * 100 + n4 * 4 + n1
    if n1 == 4 or n100 == 4:
        assert n == 0
        return year-1, 12, 31

    # Now the year is correct, and n is the offset from January 1.  We find
    # the month via an estimate that's either exact or one too large.
    leapyear = n1 == 3 and (n4 != 24 or n100 == 3)
    assert leapyear == _is_leap(year)
    month = (n + 50) >> 5
    preceding = _DAYS_BEFORE_MONTH[month] + (month > 2 and leapyear)
    if preceding > n:  # estimate is too large
        month -= 1
        preceding -= _DAYS_IN_MONTH[month] + (month == 2 and leapyear)
    n -= preceding
    assert 0 <= n < _days_in_month(year, month)

    # Now the year and month are correct, and n is the offset from the
    # start of that month:  we're done!
    return year, month, n+1

# Month and day names.  For localized versions, see the calendar module.
_MONTHNAMES = [None, "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
_DAYNAMES = [None, "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]


def _build_struct_time(y, m, d, hh, mm, ss, dstflag):
    wday = (_ymd2ord(y, m, d) + 6) % 7
    dnum = _days_before_month(y, m) + d
    return _time.struct_time((y, m, d, hh, mm, ss, wday, dnum, dstflag))

def _format_time(hh, mm, ss, us):
    # Skip trailing microseconds when us==0.
    result = "%02d:%02d:%02d" % (hh, mm, ss)
    if us:
        result += ".%06d" % us
    return result

# Correctly substitute for %z and %Z escapes in strftime formats.
def _wrap_strftime(object, format, timetuple):
    year = timetuple[0]
    if year < _MINYEARFMT:
        raise ValueError("year=%d is before %d; the datetime strftime() "
                         "methods require year >= %d" %
                         (year, _MINYEARFMT, _MINYEARFMT))
    # Don't call utcoffset() or tzname() unless actually needed.
    freplace = None  # the string to use for %f
    zreplace = None  # the string to use for %z
    Zreplace = None  # the string to use for %Z

    # Scan format for %z and %Z escapes, replacing as needed.
    newformat = []
    push = newformat.append
    i, n = 0, len(format)
    while i < n:
        ch = format[i]
        i += 1
        if ch == '%':
            if i < n:
                ch = format[i]
                i += 1
                if ch == 'f':
                    if freplace is None:
                        freplace = '%06d' % getattr(object,
                                                    'microsecond', 0)
                    newformat.append(freplace)
                elif ch == 'z':
                    if zreplace is None:
                        zreplace = ""
                        if hasattr(object, "_utcoffset"):
                            offset = object._utcoffset()
                            if offset is not None:
                                sign = '+'
                                if offset < 0:
                                    offset = -offset
                                    sign = '-'
                                h, m = divmod(offset, 60)
                                zreplace = '%c%02d%02d' % (sign, h, m)
                    assert '%' not in zreplace
                    newformat.append(zreplace)
                elif ch == 'Z':
                    if Zreplace is None:
                        Zreplace = ""
                        if hasattr(object, "tzname"):
                            s = object.tzname()
                            if s is not None:
                                # strftime is going to have at this: escape %
                                Zreplace = s.replace('%', '%%')
                    newformat.append(Zreplace)
                else:
                    push('%')
                    push(ch)
            else:
                push('%')
        else:
            push(ch)
    newformat = "".join(newformat)
    return _time.strftime(newformat, timetuple)

# Just raise TypeError if the arg isn't None or a string.
def _check_tzname(name):
    if name is not None and not isinstance(name, str):
        raise TypeError("tzinfo.tzname() must return None or string, "
                        "not '%s'" % type(name))

# name is the offset-producing method, "utcoffset" or "dst".
# offset is what it returned.
# If offset isn't None or timedelta, raises TypeError.
# If offset is None, returns None.
# Else offset is checked for being in range, and a whole # of minutes.
# If it is, its integer value is returned.  Else ValueError is raised.
def _check_utc_offset(name, offset):
    assert name in ("utcoffset", "dst")
    if offset is None:
        return
    if not isinstance(offset, timedelta):
        raise TypeError("tzinfo.%s() must return None "
                        "or timedelta, not '%s'" % (name, type(offset)))
    days = offset.days
    if days < -1 or days > 0:
        offset = 1440  # trigger out-of-range
    else:
        seconds = days * 86400 + offset.seconds
        minutes, seconds = divmod(seconds, 60)
        if seconds or offset.microseconds:
            raise ValueError("tzinfo.%s() must return a whole number "
                             "of minutes" % name)
        offset = minutes
    if not -1440 < offset < 1440:
        raise ValueError("%s()=%d, must be in -1439..1439" % (name, offset))
    return offset

def _check_int_field(value):
    if isinstance(value, int):
        return int(value)
    if not isinstance(value, float):
        try:
            value = value.__int__()
        except AttributeError:
            pass
        else:
            if isinstance(value, int):
                return int(value)
            elif isinstance(value, long):
                return int(long(value))
            raise TypeError('__int__ method should return an integer')
        raise TypeError('an integer is required')
    raise TypeError('integer argument expected, got float')

def _check_date_fields(year, month, day):
    year = _check_int_field(year)
    month = _check_int_field(month)
    day = _check_int_field(day)
    if not MINYEAR <= year <= MAXYEAR:
        raise ValueError('year must be in %d..%d' % (MINYEAR, MAXYEAR), year)
    if not 1 <= month <= 12:
        raise ValueError('month must be in 1..12', month)
    dim = _days_in_month(year, month)
    if not 1 <= day <= dim:
        raise ValueError('day must be in 1..%d' % dim, day)
    return year, month, day

def _check_time_fields(hour, minute, second, microsecond):
    hour = _check_int_field(hour)
    minute = _check_int_field(minute)
    second = _check_int_field(second)
    microsecond = _check_int_field(microsecond)
    if not 0 <= hour <= 23:
        raise ValueError('hour must be in 0..23', hour)
    if not 0 <= minute <= 59:
        raise ValueError('minute must be in 0..59', minute)
    if not 0 <= second <= 59:
        raise ValueError('second must be in 0..59', second)
    if not 0 <= microsecond <= 999999:
        raise ValueError('microsecond must be in 0..999999', microsecond)
    return hour, minute, second, microsecond

def _check_tzinfo_arg(tz):
    if tz is not None and not isinstance(tz, tzinfo):
        raise TypeError("tzinfo argument must be None or of a tzinfo subclass")


# Notes on comparison:  In general, datetime module comparison operators raise
# TypeError when they don't know how to do a comparison themself.  If they
# returned NotImplemented instead, comparison could (silently) fall back to
# the default compare-objects-by-comparing-their-memory-addresses strategy,
# and that's not helpful.  There are two exceptions:
#
# 1. For date and datetime, if the other object has a "timetuple" attr,
#    NotImplemented is returned.  This is a hook to allow other kinds of
#    datetime-like objects a chance to intercept the comparison.
#
# 2. Else __eq__ and __ne__ return False and True, respectively.  This is
#    so opertaions like
#
#        x == y
#        x != y
#        x in sequence
#        x not in sequence
#        dict[x] = y
#
#    don't raise annoying TypeErrors just because a datetime object
#    is part of a heterogeneous collection.  If there's no known way to
#    compare X to a datetime, saying they're not equal is reasonable.

def _cmperror(x, y):
    raise TypeError("can't compare '%s' to '%s'" % (
                    type(x).__name__, type(y).__name__))

def _normalize_pair(hi, lo, factor):
    if not 0 <= lo <= factor-1:
        inc, lo = divmod(lo, factor)
        hi += inc
    return hi, lo

def _normalize_datetime(y, m, d, hh, mm, ss, us, ignore_overflow=False):
    # Normalize all the inputs, and store the normalized values.
    ss, us = _normalize_pair(ss, us, 1000000)
    mm, ss = _normalize_pair(mm, ss, 60)
    hh, mm = _normalize_pair(hh, mm, 60)
    d, hh = _normalize_pair(d, hh, 24)
    y, m, d = _normalize_date(y, m, d, ignore_overflow)
    return y, m, d, hh, mm, ss, us

def _normalize_date(year, month, day, ignore_overflow=False):
    # That was easy.  Now it gets muddy:  the proper range for day
    # can't be determined without knowing the correct month and year,
    # but if day is, e.g., plus or minus a million, the current month
    # and year values make no sense (and may also be out of bounds
    # themselves).
    # Saying 12 months == 1 year should be non-controversial.
    if not 1 <= month <= 12:
        year, month = _normalize_pair(year, month-1, 12)
        month += 1
        assert 1 <= month <= 12

    # Now only day can be out of bounds (year may also be out of bounds
    # for a datetime object, but we don't care about that here).
    # If day is out of bounds, what to do is arguable, but at least the
    # method here is principled and explainable.
    dim = _days_in_month(year, month)
    if not 1 <= day <= dim:
        # Move day-1 days from the first of the month.  First try to
        # get off cheap if we're only one day out of range (adjustments
        # for timezone alone can't be worse than that).
        if day == 0:    # move back a day
            month -= 1
            if month > 0:
                day = _days_in_month(year, month)
            else:
                year, month, day = year-1, 12, 31
        elif day == dim + 1:    # move forward a day
            month += 1
            day = 1
            if month > 12:
                month = 1
                year += 1
        else:
            ordinal = _ymd2ord(year, month, 1) + (day - 1)
            year, month, day = _ord2ymd(ordinal)

    if not ignore_overflow and not MINYEAR <= year <= MAXYEAR:
        raise OverflowError("date value out of range")
    return year, month, day

def _accum(tag, sofar, num, factor, leftover):
    if isinstance(num, (int, long)):
        prod = num * factor
        rsum = sofar + prod
        return rsum, leftover
    if isinstance(num, float):
        fracpart, intpart = _math.modf(num)
        prod = int(intpart) * factor
        rsum = sofar + prod
        if fracpart == 0.0:
            return rsum, leftover
        assert isinstance(factor, (int, long))
        fracpart, intpart = _math.modf(factor * fracpart)
        rsum += int(intpart)
        return rsum, leftover + fracpart
    raise TypeError("unsupported type for timedelta %s component: %s" %
                    (tag, type(num)))

class timedelta(object):
    """Represent the difference between two datetime objects.

    Supported operators:

    - add, subtract timedelta
    - unary plus, minus, abs
    - compare to timedelta
    - multiply, divide by int/long

    In addition, datetime supports subtraction of two datetime objects
    returning a timedelta, and addition or subtraction of a datetime
    and a timedelta giving a datetime.

    Representation: (days, seconds, microseconds).  Why?  Because I
    felt like it.
    """
    __slots__ = '_days', '_seconds', '_microseconds', '_hashcode'

    def __new__(cls, days=_SENTINEL, seconds=_SENTINEL, microseconds=_SENTINEL,
                milliseconds=_SENTINEL, minutes=_SENTINEL, hours=_SENTINEL, weeks=_SENTINEL):
        x = 0
        leftover = 0.0
        if microseconds is not _SENTINEL:
            x, leftover = _accum("microseconds", x, microseconds, _US_PER_US, leftover)
        if milliseconds is not _SENTINEL:
            x, leftover = _accum("milliseconds", x, milliseconds, _US_PER_MS, leftover)
        if seconds is not _SENTINEL:
            x, leftover = _accum("seconds", x, seconds, _US_PER_SECOND, leftover)
        if minutes is not _SENTINEL:
            x, leftover = _accum("minutes", x, minutes, _US_PER_MINUTE, leftover)
        if hours is not _SENTINEL:
            x, leftover = _accum("hours", x, hours, _US_PER_HOUR, leftover)
        if days is not _SENTINEL:
            x, leftover = _accum("days", x, days, _US_PER_DAY, leftover)
        if weeks is not _SENTINEL:
            x, leftover = _accum("weeks", x, weeks, _US_PER_WEEK, leftover)
        if leftover != 0.0:
            x += _round(leftover)
        return cls._from_microseconds(x)

    @classmethod
    def _from_microseconds(cls, us):
        s, us = divmod(us, _US_PER_SECOND)
        d, s = divmod(s, _SECONDS_PER_DAY)
        return cls._create(d, s, us, False)

    @classmethod
    def _create(cls, d, s, us, normalize):
        if normalize:
            s, us = _normalize_pair(s, us, 1000000)
            d, s = _normalize_pair(d, s, 24*3600)

        if not -_MAX_DELTA_DAYS <= d <= _MAX_DELTA_DAYS:
            raise OverflowError("days=%d; must have magnitude <= %d" % (d, _MAX_DELTA_DAYS))

        self = object.__new__(cls)
        self._days = d
        self._seconds = s
        self._microseconds = us
        self._hashcode = -1
        return self

    def _to_microseconds(self):
        return ((self._days * _SECONDS_PER_DAY + self._seconds) * _US_PER_SECOND +
                self._microseconds)

    def __repr__(self):
        module = "datetime." if self.__class__ is timedelta else ""
        if self._microseconds:
            return "%s(%d, %d, %d)" % (module + self.__class__.__name__,
                                       self._days,
                                       self._seconds,
                                       self._microseconds)
        if self._seconds:
            return "%s(%d, %d)" % (module + self.__class__.__name__,
                                   self._days,
                                   self._seconds)
        return "%s(%d)" % (module + self.__class__.__name__, self._days)

    def __str__(self):
        mm, ss = divmod(self._seconds, 60)
        hh, mm = divmod(mm, 60)
        s = "%d:%02d:%02d" % (hh, mm, ss)
        if self._days:
            def plural(n):
                return n, abs(n) != 1 and "s" or ""
            s = ("%d day%s, " % plural(self._days)) + s
        if self._microseconds:
            s = s + ".%06d" % self._microseconds
        return s

    def total_seconds(self):
        """Total seconds in the duration."""
        return self._to_microseconds() / 10.0**6

    # Read-only field accessors
    @property
    def days(self):
        """days"""
        return self._days

    @property
    def seconds(self):
        """seconds"""
        return self._seconds

    @property
    def microseconds(self):
        """microseconds"""
        return self._microseconds

    def __add__(self, other):
        if isinstance(other, timedelta):
            # for CPython compatibility, we cannot use
            # our __class__ here, but need a real timedelta
            return timedelta._create(self._days + other._days,
                                     self._seconds + other._seconds,
                                     self._microseconds + other._microseconds,
                                     True)
        return NotImplemented

    def __sub__(self, other):
        if isinstance(other, timedelta):
            # for CPython compatibility, we cannot use
            # our __class__ here, but need a real timedelta
            return timedelta._create(self._days - other._days,
                                     self._seconds - other._seconds,
                                     self._microseconds - other._microseconds,
                                     True)
        return NotImplemented

    def __neg__(self):
        # for CPython compatibility, we cannot use
        # our __class__ here, but need a real timedelta
        return timedelta._create(-self._days,
                                 -self._seconds,
                                 -self._microseconds,
                                 True)

    def __pos__(self):
        # for CPython compatibility, we cannot use
        # our __class__ here, but need a real timedelta
        return timedelta._create(self._days,
                                 self._seconds,
                                 self._microseconds,
                                 False)

    def __abs__(self):
        if self._days < 0:
            return -self
        else:
            return self

    def __mul__(self, other):
        if not isinstance(other, (int, long)):
            return NotImplemented
        usec = self._to_microseconds()
        return timedelta._from_microseconds(usec * other)

    __rmul__ = __mul__

    def __div__(self, other):
        if not isinstance(other, (int, long)):
            return NotImplemented
        usec = self._to_microseconds()
        return timedelta._from_microseconds(usec // other)

    __floordiv__ = __div__

    # Comparisons of timedelta objects with other.

    def __eq__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) == 0
        else:
            return False

    def __ne__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) != 0
        else:
            return True

    def __le__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) <= 0
        else:
            _cmperror(self, other)

    def __lt__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) < 0
        else:
            _cmperror(self, other)

    def __ge__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) >= 0
        else:
            _cmperror(self, other)

    def __gt__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) > 0
        else:
            _cmperror(self, other)

    def _cmp(self, other):
        assert isinstance(other, timedelta)
        return _cmp(self._getstate(), other._getstate())

    def __hash__(self):
        if self._hashcode == -1:
            self._hashcode = hash(self._getstate())
        return self._hashcode

    def __nonzero__(self):
        return (self._days != 0 or
                self._seconds != 0 or
                self._microseconds != 0)

timedelta.min = timedelta(-_MAX_DELTA_DAYS)
timedelta.max = timedelta(_MAX_DELTA_DAYS, 24*3600-1, 1000000-1)
timedelta.resolution = timedelta(microseconds=1)

class date(object):
    """Concrete date type.

    Constructors:

    __new__()
    fromtimestamp()
    today()
    fromordinal()

    Operators:

    __repr__, __str__
    __cmp__, __hash__
    __add__, __radd__, __sub__ (add/radd only with timedelta arg)

    Methods:

    timetuple()
    toordinal()
    weekday()
    isoweekday(), isocalendar(), isoformat()
    ctime()
    strftime()

    Properties (readonly):
    year, month, day
    """
    __slots__ = '_year', '_month', '_day', '_hashcode'

    def __new__(cls, year, month=None, day=None):
        """Constructor.

        Arguments:

        year, month, day (required, base 1)
        """
        year, month, day = _check_date_fields(year, month, day)
        self = object.__new__(cls)
        self._year = year
        self._month = month
        self._day = day
        self._hashcode = -1
        return self

    # Additional constructors

    @classmethod
    def fromtimestamp(cls, t):
        "Construct a date from a POSIX timestamp (like time.time())."
        y, m, d, hh, mm, ss, weekday, jday, dst = _time.localtime(t)
        return cls(y, m, d)

    @classmethod
    def today(cls):
        "Construct a date from time.time()."
        t = _time.time()
        return cls.fromtimestamp(t)

    @classmethod
    def fromordinal(cls, n):
        """Contruct a date from a proleptic Gregorian ordinal.

        January 1 of year 1 is day 1.  Only the year, month and day are
        non-zero in the result.
        """
        y, m, d = _ord2ymd(n)
        return cls(y, m, d)

    # Conversions to string

    def __repr__(self):
        """Convert to formal string, for repr().

        >>> dt = datetime(2010, 1, 1)
        >>> repr(dt)
        'datetime.datetime(2010, 1, 1, 0, 0)'

        >>> dt = datetime(2010, 1, 1, tzinfo=timezone.utc)
        >>> repr(dt)
        'datetime.datetime(2010, 1, 1, 0, 0, tzinfo=datetime.timezone.utc)'
        """
        module = "datetime." if self.__class__ is date else ""
        return "%s(%d, %d, %d)" % (module + self.__class__.__name__,
                                   self._year,
                                   self._month,
                                   self._day)

    # XXX These shouldn't depend on time.localtime(), because that
    # clips the usable dates to [1970 .. 2038).  At least ctime() is
    # easily done without using strftime() -- that's better too because
    # strftime("%c", ...) is locale specific.

    def ctime(self):
        "Return ctime() style string."
        weekday = self.toordinal() % 7 or 7
        return "%s %s %2d 00:00:00 %04d" % (
            _DAYNAMES[weekday],
            _MONTHNAMES[self._month],
            self._day, self._year)

    def strftime(self, format):
        "Format using strftime()."
        return _wrap_strftime(self, format, self.timetuple())

    def __format__(self, fmt):
        if not isinstance(fmt, (str, unicode)):
            raise ValueError("__format__ expects str or unicode, not %s" %
                             fmt.__class__.__name__)
        if len(fmt) != 0:
            return self.strftime(fmt)
        return str(self)

    def isoformat(self):
        """Return the date formatted according to ISO.

        This is 'YYYY-MM-DD'.

        References:
        - http://www.w3.org/TR/NOTE-datetime
        - http://www.cl.cam.ac.uk/~mgk25/iso-time.html
        """
        return "%04d-%02d-%02d" % (self._year, self._month, self._day)

    __str__ = isoformat

    # Read-only field accessors
    @property
    def year(self):
        """year (1-9999)"""
        return self._year

    @property
    def month(self):
        """month (1-12)"""
        return self._month

    @property
    def day(self):
        """day (1-31)"""
        return self._day

    # Standard conversions, __cmp__, __hash__ (and helpers)

    def timetuple(self):
        "Return local time tuple compatible with time.localtime()."
        return _build_struct_time(self._year, self._month, self._day,
                                  0, 0, 0, -1)

    def toordinal(self):
        """Return proleptic Gregorian ordinal for the year, month and day.

        January 1 of year 1 is day 1.  Only the year, month and day values
        contribute to the result.
        """
        return _ymd2ord(self._year, self._month, self._day)

    def replace(self, year=None, month=None, day=None):
        """Return a new date with new values for the specified fields."""
        if year is None:
            year = self._year
        if month is None:
            month = self._month
        if day is None:
            day = self._day
        return date(year, month, day)

    # Comparisons of date objects with other.

    def __eq__(self, other):
        if isinstance(other, date):
            return self._cmp(other) == 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            return False

    def __ne__(self, other):
        if isinstance(other, date):
            return self._cmp(other) != 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            return True

    def __le__(self, other):
        if isinstance(other, date):
            return self._cmp(other) <= 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __lt__(self, other):
        if isinstance(other, date):
            return self._cmp(other) < 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __ge__(self, other):
        if isinstance(other, date):
            return self._cmp(other) >= 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __gt__(self, other):
        if isinstance(other, date):
            return self._cmp(other) > 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            _cmperror(self, other)

    def _cmp(self, other):
        assert isinstance(other, date)
        y, m, d = self._year, self._month, self._day
        y2, m2, d2 = other._year, other._month, other._day
        return _cmp((y, m, d), (y2, m2, d2))

    def __hash__(self):
        "Hash."
        if self._hashcode == -1:
            self._hashcode = hash(self._getstate())
        return self._hashcode

    # Computations

    def _add_timedelta(self, other, factor):
        y, m, d = _normalize_date(
            self._year,
            self._month,
            self._day + other.days * factor)
        return date(y, m, d)

    def __add__(self, other):
        "Add a date to a timedelta."
        if isinstance(other, timedelta):
            return self._add_timedelta(other, 1)
        return NotImplemented

    __radd__ = __add__

    def __sub__(self, other):
        """Subtract two dates, or a date and a timedelta."""
        if isinstance(other, date):
            days1 = self.toordinal()
            days2 = other.toordinal()
            return timedelta._create(days1 - days2, 0, 0, False)
        if isinstance(other, timedelta):
            return self._add_timedelta(other, -1)
        return NotImplemented

    def weekday(self):
        "Return day of the week, where Monday == 0 ... Sunday == 6."
        return (self.toordinal() + 6) % 7

    # Day-of-the-week and week-of-the-year, according to ISO

    def isoweekday(self):
        "Return day of the week, where Monday == 1 ... Sunday == 7."
        # 1-Jan-0001 is a Monday
        return self.toordinal() % 7 or 7

    def isocalendar(self):
        """Return a 3-tuple containing ISO year, week number, and weekday.

        The first ISO week of the year is the (Mon-Sun) week
        containing the year's first Thursday; everything else derives
        from that.

        The first week is 1; Monday is 1 ... Sunday is 7.

        ISO calendar algorithm taken from
        http://www.phys.uu.nl/~vgent/calendar/isocalendar.htm
        """
        year = self._year
        week1monday = _isoweek1monday(year)
        today = _ymd2ord(self._year, self._month, self._day)
        # Internally, week and day have origin 0
        week, day = divmod(today - week1monday, 7)
        if week < 0:
            year -= 1
            week1monday = _isoweek1monday(year)
            week, day = divmod(today - week1monday, 7)
        elif week >= 52:
            if today >= _isoweek1monday(year+1):
                year += 1
                week = 0
        return year, week+1, day+1

_date_class = date  # so functions w/ args named "date" can get at the class

date.min = date(1, 1, 1)
date.max = date(9999, 12, 31)
date.resolution = timedelta(days=1)

class tzinfo(object):
    """Abstract base class for time zone info classes.

    Subclasses must override the name(), utcoffset() and dst() methods.
    """
    __slots__ = ()

    def tzname(self, dt):
        "datetime -> string name of time zone."
        raise NotImplementedError("tzinfo subclass must override tzname()")

    def utcoffset(self, dt):
        "datetime -> minutes east of UTC (negative for west of UTC)"
        raise NotImplementedError("tzinfo subclass must override utcoffset()")

    def dst(self, dt):
        """datetime -> DST offset in minutes east of UTC.

        Return 0 if DST not in effect.  utcoffset() must include the DST
        offset.
        """
        raise NotImplementedError("tzinfo subclass must override dst()")

    def fromutc(self, dt):
        "datetime in UTC -> datetime in local time."

        if not isinstance(dt, datetime):
            raise TypeError("fromutc() requires a datetime argument")
        if dt.tzinfo is not self:
            raise ValueError("dt.tzinfo is not self")

        dtoff = dt.utcoffset()
        if dtoff is None:
            raise ValueError("fromutc() requires a non-None utcoffset() "
                             "result")

        # See the long comment block at the end of this file for an
        # explanation of this algorithm.
        dtdst = dt.dst()
        if dtdst is None:
            raise ValueError("fromutc() requires a non-None dst() result")
        delta = dtoff - dtdst
        if delta:
            dt = dt + delta
            dtdst = dt.dst()
            if dtdst is None:
                raise ValueError("fromutc(): dt.dst gave inconsistent "
                                 "results; cannot convert")
        if dtdst:
            return dt + dtdst
        else:
            return dt

_tzinfo_class = tzinfo

class time(object):
    """Time with time zone.

    Constructors:

    __new__()

    Operators:

    __repr__, __str__
    __cmp__, __hash__

    Methods:

    strftime()
    isoformat()
    utcoffset()
    tzname()
    dst()

    Properties (readonly):
    hour, minute, second, microsecond, tzinfo
    """
    __slots__ = '_hour', '_minute', '_second', '_microsecond', '_tzinfo', '_hashcode'

    def __new__(cls, hour=0, minute=0, second=0, microsecond=0, tzinfo=None):
        """Constructor.

        Arguments:

        hour, minute (required)
        second, microsecond (default to zero)
        tzinfo (default to None)
        """
        hour, minute, second, microsecond = _check_time_fields(
            hour, minute, second, microsecond)
        _check_tzinfo_arg(tzinfo)
        self = object.__new__(cls)
        self._hour = hour
        self._minute = minute
        self._second = second
        self._microsecond = microsecond
        self._tzinfo = tzinfo
        self._hashcode = -1
        return self

    # Read-only field accessors
    @property
    def hour(self):
        """hour (0-23)"""
        return self._hour

    @property
    def minute(self):
        """minute (0-59)"""
        return self._minute

    @property
    def second(self):
        """second (0-59)"""
        return self._second

    @property
    def microsecond(self):
        """microsecond (0-999999)"""
        return self._microsecond

    @property
    def tzinfo(self):
        """timezone info object"""
        return self._tzinfo

    # Standard conversions, __hash__ (and helpers)

    # Comparisons of time objects with other.

    def __eq__(self, other):
        if isinstance(other, time):
            return self._cmp(other) == 0
        else:
            return False

    def __ne__(self, other):
        if isinstance(other, time):
            return self._cmp(other) != 0
        else:
            return True

    def __le__(self, other):
        if isinstance(other, time):
            return self._cmp(other) <= 0
        else:
            _cmperror(self, other)

    def __lt__(self, other):
        if isinstance(other, time):
            return self._cmp(other) < 0
        else:
            _cmperror(self, other)

    def __ge__(self, other):
        if isinstance(other, time):
            return self._cmp(other) >= 0
        else:
            _cmperror(self, other)

    def __gt__(self, other):
        if isinstance(other, time):
            return self._cmp(other) > 0
        else:
            _cmperror(self, other)

    def _cmp(self, other):
        assert isinstance(other, time)
        mytz = self._tzinfo
        ottz = other._tzinfo
        myoff = otoff = None

        if mytz is ottz:
            base_compare = True
        else:
            myoff = self._utcoffset()
            otoff = other._utcoffset()
            base_compare = myoff == otoff

        if base_compare:
            return _cmp((self._hour, self._minute, self._second,
                         self._microsecond),
                        (other._hour, other._minute, other._second,
                         other._microsecond))
        if myoff is None or otoff is None:
            raise TypeError("can't compare offset-naive and offset-aware times")
        myhhmm = self._hour * 60 + self._minute - myoff
        othhmm = other._hour * 60 + other._minute - otoff
        return _cmp((myhhmm, self._second, self._microsecond),
                    (othhmm, other._second, other._microsecond))

    def __hash__(self):
        """Hash."""
        if self._hashcode == -1:
            tzoff = self._utcoffset()
            if not tzoff:  # zero or None
                self._hashcode = hash(self._getstate()[0])
            else:
                h, m = divmod(self.hour * 60 + self.minute - tzoff, 60)
                if 0 <= h < 24:
                    self._hashcode = hash(time(h, m, self.second, self.microsecond))
                else:
                    self._hashcode = hash((h, m, self.second, self.microsecond))
        return self._hashcode

    # Conversion to string

    def _tzstr(self, sep=":"):
        """Return formatted timezone offset (+xx:xx) or None."""
        off = self._utcoffset()
        if off is not None:
            if off < 0:
                sign = "-"
                off = -off
            else:
                sign = "+"
            hh, mm = divmod(off, 60)
            assert 0 <= hh < 24
            off = "%s%02d%s%02d" % (sign, hh, sep, mm)
        return off

    def __repr__(self):
        """Convert to formal string, for repr()."""
        if self._microsecond != 0:
            s = ", %d, %d" % (self._second, self._microsecond)
        elif self._second != 0:
            s = ", %d" % self._second
        else:
            s = ""
        module = "datetime." if self.__class__ is time else ""
        s= "%s(%d, %d%s)" % (module + self.__class__.__name__,
                             self._hour, self._minute, s)
        if self._tzinfo is not None:
            assert s[-1:] == ")"
            s = s[:-1] + ", tzinfo=%r" % self._tzinfo + ")"
        return s

    def isoformat(self):
        """Return the time formatted according to ISO.

        This is 'HH:MM:SS.mmmmmm+zz:zz', or 'HH:MM:SS+zz:zz' if
        self.microsecond == 0.
        """
        s = _format_time(self._hour, self._minute, self._second,
                         self._microsecond)
        tz = self._tzstr()
        if tz:
            s += tz
        return s

    __str__ = isoformat

    def strftime(self, format):
        """Format using strftime().  The date part of the timestamp passed
        to underlying strftime should not be used.
        """
        # The year must be >= _MINYEARFMT else Python's strftime implementation
        # can raise a bogus exception.
        timetuple = (1900, 1, 1,
                     self._hour, self._minute, self._second,
                     0, 1, -1)
        return _wrap_strftime(self, format, timetuple)

    def __format__(self, fmt):
        if not isinstance(fmt, (str, unicode)):
            raise ValueError("__format__ expects str or unicode, not %s" %
                             fmt.__class__.__name__)
        if len(fmt) != 0:
            return self.strftime(fmt)
        return str(self)

    # Timezone functions

    def utcoffset(self):
        """Return the timezone offset in minutes east of UTC (negative west of
        UTC)."""
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.utcoffset(None)
        offset = _check_utc_offset("utcoffset", offset)
        if offset is not None:
            offset = timedelta._create(0, offset * 60, 0, True)
        return offset

    # Return an integer (or None) instead of a timedelta (or None).
    def _utcoffset(self):
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.utcoffset(None)
        offset = _check_utc_offset("utcoffset", offset)
        return offset

    def tzname(self):
        """Return the timezone name.

        Note that the name is 100% informational -- there's no requirement that
        it mean anything in particular. For example, "GMT", "UTC", "-500",
        "-5:00", "EDT", "US/Eastern", "America/New York" are all valid replies.
        """
        if self._tzinfo is None:
            return None
        name = self._tzinfo.tzname(None)
        _check_tzname(name)
        return name

    def dst(self):
        """Return 0 if DST is not in effect, or the DST offset (in minutes
        eastward) if DST is in effect.

        This is purely informational; the DST offset has already been added to
        the UTC offset returned by utcoffset() if applicable, so there's no
        need to consult dst() unless you're interested in displaying the DST
        info.
        """
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.dst(None)
        offset = _check_utc_offset("dst", offset)
        if offset is not None:
            offset = timedelta._create(0, offset * 60, 0, True)
        return offset

    # Return an integer (or None) instead of a timedelta (or None).
    def _dst(self):
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.dst(None)
        offset = _check_utc_offset("dst", offset)
        return offset

    def replace(self, hour=None, minute=None, second=None, microsecond=None,
                tzinfo=True):
        """Return a new time with new values for the specified fields."""
        if hour is None:
            hour = self.hour
        if minute is None:
            minute = self.minute
        if second is None:
            second = self.second
        if microsecond is None:
            microsecond = self.microsecond
        if tzinfo is True:
            tzinfo = self.tzinfo
        return time(hour, minute, second, microsecond, tzinfo)

    def __nonzero__(self):
        if self.second or self.microsecond:
            return True
        offset = self._utcoffset() or 0
        return self.hour * 60 + self.minute != offset

_time_class = time  # so functions w/ args named "time" can get at the class

time.min = time(0, 0, 0)
time.max = time(23, 59, 59, 999999)
time.resolution = timedelta(microseconds=1)

class datetime(date):
    """datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])

    The year, month and day arguments are required. tzinfo may be None, or an
    instance of a tzinfo subclass. The remaining arguments may be ints or longs.
    """
    __slots__ = date.__slots__ + time.__slots__

    def __new__(cls, year, month=None, day=None, hour=0, minute=0, second=0,
                microsecond=0, tzinfo=None):
        year, month, day = _check_date_fields(year, month, day)
        hour, minute, second, microsecond = _check_time_fields(
            hour, minute, second, microsecond)
        _check_tzinfo_arg(tzinfo)
        self = object.__new__(cls)
        self._year = year
        self._month = month
        self._day = day
        self._hour = hour
        self._minute = minute
        self._second = second
        self._microsecond = microsecond
        self._tzinfo = tzinfo
        self._hashcode = -1
        return self

    # Read-only field accessors
    @property
    def hour(self):
        """hour (0-23)"""
        return self._hour

    @property
    def minute(self):
        """minute (0-59)"""
        return self._minute

    @property
    def second(self):
        """second (0-59)"""
        return self._second

    @property
    def microsecond(self):
        """microsecond (0-999999)"""
        return self._microsecond

    @property
    def tzinfo(self):
        """timezone info object"""
        return self._tzinfo

    @classmethod
    def fromtimestamp(cls, timestamp, tz=None):
        """Construct a datetime from a POSIX timestamp (like time.time()).

        A timezone info object may be passed in as well.
        """
        _check_tzinfo_arg(tz)
        converter = _time.localtime if tz is None else _time.gmtime
        self = cls._from_timestamp(converter, timestamp, tz)
        if tz is not None:
            self = tz.fromutc(self)
        return self

    @classmethod
    def utcfromtimestamp(cls, t):
        "Construct a UTC datetime from a POSIX timestamp (like time.time())."
        return cls._from_timestamp(_time.gmtime, t, None)

    @classmethod
    def _from_timestamp(cls, converter, timestamp, tzinfo):
        t_full = timestamp
        timestamp = int(_math.floor(timestamp))
        frac = t_full - timestamp
        us = _round(frac * 1e6)

        # If timestamp is less than one microsecond smaller than a
        # full second, us can be rounded up to 1000000.  In this case,
        # roll over to seconds, otherwise, ValueError is raised
        # by the constructor.
        if us == 1000000:
            timestamp += 1
            us = 0
        y, m, d, hh, mm, ss, weekday, jday, dst = converter(timestamp)
        ss = min(ss, 59)    # clamp out leap seconds if the platform has them
        return cls(y, m, d, hh, mm, ss, us, tzinfo)

    @classmethod
    def now(cls, tz=None):
        "Construct a datetime from time.time() and optional time zone info."
        t = _time.time()
        return cls.fromtimestamp(t, tz)

    @classmethod
    def utcnow(cls):
        "Construct a UTC datetime from time.time()."
        t = _time.time()
        return cls.utcfromtimestamp(t)

    @classmethod
    def combine(cls, date, time):
        "Construct a datetime from a given date and a given time."
        if not isinstance(date, _date_class):
            raise TypeError("date argument must be a date instance")
        if not isinstance(time, _time_class):
            raise TypeError("time argument must be a time instance")
        return cls(date.year, date.month, date.day,
                   time.hour, time.minute, time.second, time.microsecond,
                   time.tzinfo)

    def timetuple(self):
        "Return local time tuple compatible with time.localtime()."
        dst = self._dst()
        if dst is None:
            dst = -1
        elif dst:
            dst = 1
        return _build_struct_time(self.year, self.month, self.day,
                                  self.hour, self.minute, self.second,
                                  dst)

    def utctimetuple(self):
        "Return UTC time tuple compatible with time.gmtime()."
        y, m, d = self.year, self.month, self.day
        hh, mm, ss = self.hour, self.minute, self.second
        offset = self._utcoffset()
        if offset:  # neither None nor 0
            mm -= offset
            y, m, d, hh, mm, ss, _ = _normalize_datetime(
                y, m, d, hh, mm, ss, 0, ignore_overflow=True)
        return _build_struct_time(y, m, d, hh, mm, ss, 0)

    def date(self):
        "Return the date part."
        return date(self._year, self._month, self._day)

    def time(self):
        "Return the time part, with tzinfo None."
        return time(self.hour, self.minute, self.second, self.microsecond)

    def timetz(self):
        "Return the time part, with same tzinfo."
        return time(self.hour, self.minute, self.second, self.microsecond,
                    self._tzinfo)

    def replace(self, year=None, month=None, day=None, hour=None,
                minute=None, second=None, microsecond=None, tzinfo=True):
        """Return a new datetime with new values for the specified fields."""
        if year is None:
            year = self.year
        if month is None:
            month = self.month
        if day is None:
            day = self.day
        if hour is None:
            hour = self.hour
        if minute is None:
            minute = self.minute
        if second is None:
            second = self.second
        if microsecond is None:
            microsecond = self.microsecond
        if tzinfo is True:
            tzinfo = self.tzinfo
        return datetime(year, month, day, hour, minute, second, microsecond,
                        tzinfo)

    def astimezone(self, tz):
        if not isinstance(tz, tzinfo):
            raise TypeError("tz argument must be an instance of tzinfo")

        mytz = self.tzinfo
        if mytz is None:
            raise ValueError("astimezone() requires an aware datetime")

        if tz is mytz:
            return self

        # Convert self to UTC, and attach the new time zone object.
        myoffset = self.utcoffset()
        if myoffset is None:
            raise ValueError("astimezone() requires an aware datetime")
        utc = (self - myoffset).replace(tzinfo=tz)

        # Convert from UTC to tz's local time.
        return tz.fromutc(utc)

    # Ways to produce a string.

    def ctime(self):
        "Return ctime() style string."
        weekday = self.toordinal() % 7 or 7
        return "%s %s %2d %02d:%02d:%02d %04d" % (
            _DAYNAMES[weekday],
            _MONTHNAMES[self._month],
            self._day,
            self._hour, self._minute, self._second,
            self._year)

    def isoformat(self, sep='T'):
        """Return the time formatted according to ISO.

        This is 'YYYY-MM-DD HH:MM:SS.mmmmmm', or 'YYYY-MM-DD HH:MM:SS' if
        self.microsecond == 0.

        If self.tzinfo is not None, the UTC offset is also attached, giving
        'YYYY-MM-DD HH:MM:SS.mmmmmm+HH:MM' or 'YYYY-MM-DD HH:MM:SS+HH:MM'.

        Optional argument sep specifies the separator between date and
        time, default 'T'.
        """
        s = ("%04d-%02d-%02d%c" % (self._year, self._month, self._day, sep) +
             _format_time(self._hour, self._minute, self._second,
                          self._microsecond))
        off = self._utcoffset()
        if off is not None:
            if off < 0:
                sign = "-"
                off = -off
            else:
                sign = "+"
            hh, mm = divmod(off, 60)
            s += "%s%02d:%02d" % (sign, hh, mm)
        return s

    def __repr__(self):
        """Convert to formal string, for repr()."""
        L = [self._year, self._month, self._day,  # These are never zero
             self._hour, self._minute, self._second, self._microsecond]
        if L[-1] == 0:
            del L[-1]
        if L[-1] == 0:
            del L[-1]
        s = ", ".join(map(str, L))
        module = "datetime." if self.__class__ is datetime else ""
        s = "%s(%s)" % (module + self.__class__.__name__, s)
        if self._tzinfo is not None:
            assert s[-1:] == ")"
            s = s[:-1] + ", tzinfo=%r" % self._tzinfo + ")"
        return s

    def __str__(self):
        "Convert to string, for str()."
        return self.isoformat(sep=' ')

    @classmethod
    def strptime(cls, date_string, format):
        'string, format -> new datetime parsed from a string (like time.strptime()).'
        from _strptime import _strptime
        # _strptime._strptime returns a two-element tuple.  The first
        # element is a time.struct_time object.  The second is the
        # microseconds (which are not defined for time.struct_time).
        struct, micros = _strptime(date_string, format)
        return cls(*(struct[0:6] + (micros,)))

    def utcoffset(self):
        """Return the timezone offset in minutes east of UTC (negative west of
        UTC)."""
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.utcoffset(self)
        offset = _check_utc_offset("utcoffset", offset)
        if offset is not None:
            offset = timedelta._create(0, offset * 60, 0, True)
        return offset

    # Return an integer (or None) instead of a timedelta (or None).
    def _utcoffset(self):
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.utcoffset(self)
        offset = _check_utc_offset("utcoffset", offset)
        return offset

    def tzname(self):
        """Return the timezone name.

        Note that the name is 100% informational -- there's no requirement that
        it mean anything in particular. For example, "GMT", "UTC", "-500",
        "-5:00", "EDT", "US/Eastern", "America/New York" are all valid replies.
        """
        if self._tzinfo is None:
            return None
        name = self._tzinfo.tzname(self)
        _check_tzname(name)
        return name

    def dst(self):
        """Return 0 if DST is not in effect, or the DST offset (in minutes
        eastward) if DST is in effect.

        This is purely informational; the DST offset has already been added to
        the UTC offset returned by utcoffset() if applicable, so there's no
        need to consult dst() unless you're interested in displaying the DST
        info.
        """
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.dst(self)
        offset = _check_utc_offset("dst", offset)
        if offset is not None:
            offset = timedelta._create(0, offset * 60, 0, True)
        return offset

    # Return an integer (or None) instead of a timedelta (or None).
    def _dst(self):
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.dst(self)
        offset = _check_utc_offset("dst", offset)
        return offset

    # Comparisons of datetime objects with other.

    def __eq__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) == 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            return False

    def __ne__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) != 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            return True

    def __le__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) <= 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __lt__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) < 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __ge__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) >= 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __gt__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) > 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            _cmperror(self, other)

    def _cmp(self, other):
        assert isinstance(other, datetime)
        mytz = self._tzinfo
        ottz = other._tzinfo
        myoff = otoff = None

        if mytz is ottz:
            base_compare = True
        else:
            if mytz is not None:
                myoff = self._utcoffset()
            if ottz is not None:
                otoff = other._utcoffset()
            base_compare = myoff == otoff

        if base_compare:
            return _cmp((self._year, self._month, self._day,
                         self._hour, self._minute, self._second,
                         self._microsecond),
                        (other._year, other._month, other._day,
                         other._hour, other._minute, other._second,
                         other._microsecond))
        if myoff is None or otoff is None:
            raise TypeError("can't compare offset-naive and offset-aware datetimes")
        # XXX What follows could be done more efficiently...
        diff = self - other     # this will take offsets into account
        if diff.days < 0:
            return -1
        return diff and 1 or 0

    def _add_timedelta(self, other, factor):
        y, m, d, hh, mm, ss, us = _normalize_datetime(
            self._year,
            self._month,
            self._day + other.days * factor,
            self._hour,
            self._minute,
            self._second + other.seconds * factor,
            self._microsecond + other.microseconds * factor)
        return datetime(y, m, d, hh, mm, ss, us, tzinfo=self._tzinfo)

    def __add__(self, other):
        "Add a datetime and a timedelta."
        if not isinstance(other, timedelta):
            return NotImplemented
        return self._add_timedelta(other, 1)

    __radd__ = __add__

    def __sub__(self, other):
        "Subtract two datetimes, or a datetime and a timedelta."
        if not isinstance(other, datetime):
            if isinstance(other, timedelta):
                return self._add_timedelta(other, -1)
            return NotImplemented

        delta_d = self.toordinal() - other.toordinal()
        delta_s = (self._hour - other._hour) * 3600 + \\
                  (self._minute - other._minute) * 60 + \\
                  (self._second - other._second)
        delta_us = self._microsecond - other._microsecond
        base = timedelta._create(delta_d, delta_s, delta_us, True)
        if self._tzinfo is other._tzinfo:
            return base
        myoff = self._utcoffset()
        otoff = other._utcoffset()
        if myoff == otoff:
            return base
        if myoff is None or otoff is None:
            raise TypeError("can't subtract offset-naive and offset-aware datetimes")
        return base + timedelta(minutes = otoff-myoff)

    def __hash__(self):
        if self._hashcode == -1:
            tzoff = self._utcoffset()
            if tzoff is None:
                self._hashcode = hash(self._getstate()[0])
            else:
                days = _ymd2ord(self.year, self.month, self.day)
                seconds = self.hour * 3600 + (self.minute - tzoff) * 60 + self.second
                self._hashcode = hash(timedelta(days, seconds, self.microsecond))
        return self._hashcode



datetime.min = datetime(1, 1, 1)
datetime.max = datetime(9999, 12, 31, 23, 59, 59, 999999)
datetime.resolution = timedelta(microseconds=1)


def _isoweek1monday(year):
    # Helper to calculate the day number of the Monday starting week 1
    # XXX This could be done more efficiently
    THURSDAY = 3
    firstday = _ymd2ord(year, 1, 1)
    firstweekday = (firstday + 6) % 7  # See weekday() above
    week1monday = firstday - firstweekday
    if firstweekday > THURSDAY:
        week1monday += 7
    return week1monday

"""
Some time zone algebra.  For a datetime x, let
    x.n = x stripped of its timezone -- its naive time.
    x.o = x.utcoffset(), and assuming that doesn't raise an exception or
          return None
    x.d = x.dst(), and assuming that doesn't raise an exception or
          return None
    x.s = x's standard offset, x.o - x.d

Now some derived rules, where k is a duration (timedelta).

1. x.o = x.s + x.d
   This follows from the definition of x.s.

2. If x and y have the same tzinfo member, x.s = y.s.
   This is actually a requirement, an assumption we need to make about
   sane tzinfo classes.

3. The naive UTC time corresponding to x is x.n - x.o.
   This is again a requirement for a sane tzinfo class.

4. (x+k).s = x.s
   This follows from #2, and that datimetimetz+timedelta preserves tzinfo.

5. (x+k).n = x.n + k
   Again follows from how arithmetic is defined.

Now we can explain tz.fromutc(x).  Let's assume it's an interesting case
(meaning that the various tzinfo methods exist, and don't blow up or return
None when called).

The function wants to return a datetime y with timezone tz, equivalent to x.
x is already in UTC.

By #3, we want

    y.n - y.o = x.n                             [1]

The algorithm starts by attaching tz to x.n, and calling that y.  So
x.n = y.n at the start.  Then it wants to add a duration k to y, so that [1]
becomes true; in effect, we want to solve [2] for k:

   (y+k).n - (y+k).o = x.n                      [2]

By #1, this is the same as

   (y+k).n - ((y+k).s + (y+k).d) = x.n          [3]

By #5, (y+k).n = y.n + k, which equals x.n + k because x.n=y.n at the start.
Substituting that into [3],

   x.n + k - (y+k).s - (y+k).d = x.n; the x.n terms cancel, leaving
   k - (y+k).s - (y+k).d = 0; rearranging,
   k = (y+k).s - (y+k).d; by #4, (y+k).s == y.s, so
   k = y.s - (y+k).d

On the RHS, (y+k).d can't be computed directly, but y.s can be, and we
approximate k by ignoring the (y+k).d term at first.  Note that k can't be
very large, since all offset-returning methods return a duration of magnitude
less than 24 hours.  For that reason, if y is firmly in std time, (y+k).d must
be 0, so ignoring it has no consequence then.

In any case, the new value is

    z = y + y.s                                 [4]

It's helpful to step back at look at [4] from a higher level:  it's simply
mapping from UTC to tz's standard time.

At this point, if

    z.n - z.o = x.n                             [5]

we have an equivalent time, and are almost done.  The insecurity here is
at the start of daylight time.  Picture US Eastern for concreteness.  The wall
time jumps from 1:59 to 3:00, and wall hours of the form 2:MM don't make good
sense then.  The docs ask that an Eastern tzinfo class consider such a time to
be EDT (because it's "after 2"), which is a redundant spelling of 1:MM EST
on the day DST starts.  We want to return the 1:MM EST spelling because that's
the only spelling that makes sense on the local wall clock.

In fact, if [5] holds at this point, we do have the standard-time spelling,
but that takes a bit of proof.  We first prove a stronger result.  What's the
difference between the LHS and RHS of [5]?  Let

    diff = x.n - (z.n - z.o)                    [6]

Now
    z.n =                       by [4]
    (y + y.s).n =               by #5
    y.n + y.s =                 since y.n = x.n
    x.n + y.s =                 since z and y are have the same tzinfo member,
                                    y.s = z.s by #2
    x.n + z.s

Plugging that back into [6] gives

    diff =
    x.n - ((x.n + z.s) - z.o) =     expanding
    x.n - x.n - z.s + z.o =         cancelling
    - z.s + z.o =                   by #2
    z.d

So diff = z.d.

If [5] is true now, diff = 0, so z.d = 0 too, and we have the standard-time
spelling we wanted in the endcase described above.  We're done.  Contrarily,
if z.d = 0, then we have a UTC equivalent, and are also done.

If [5] is not true now, diff = z.d != 0, and z.d is the offset we need to
add to z (in effect, z is in tz's standard time, and we need to shift the
local clock into tz's daylight time).

Let

    z' = z + z.d = z + diff                     [7]

and we can again ask whether

    z'.n - z'.o = x.n                           [8]

If so, we're done.  If not, the tzinfo class is insane, according to the
assumptions we've made.  This also requires a bit of proof.  As before, let's
compute the difference between the LHS and RHS of [8] (and skipping some of
the justifications for the kinds of substitutions we've done several times
already):

    diff' = x.n - (z'.n - z'.o) =           replacing z'.n via [7]
            x.n  - (z.n + diff - z'.o) =    replacing diff via [6]
            x.n - (z.n + x.n - (z.n - z.o) - z'.o) =
            x.n - z.n - x.n + z.n - z.o + z'.o =    cancel x.n
            - z.n + z.n - z.o + z'.o =              cancel z.n
            - z.o + z'.o =                      #1 twice
            -z.s - z.d + z'.s + z'.d =          z and z' have same tzinfo
            z'.d - z.d

So z' is UTC-equivalent to x iff z'.d = z.d at this point.  If they are equal,
we've found the UTC-equivalent so are done.  In fact, we stop with [7] and
return z', not bothering to compute z'.d.

How could z.d and z'd differ?  z' = z + z.d [7], so merely moving z' by
a dst() offset, and starting *from* a time already in DST (we know z.d != 0),
would have to change the result dst() returns:  we start in DST, and moving
a little further into it takes us out of DST.

There isn't a sane case where this can happen.  The closest it gets is at
the end of DST, where there's an hour in UTC with no spelling in a hybrid
tzinfo class.  In US Eastern, that's 5:MM UTC = 0:MM EST = 1:MM EDT.  During
that hour, on an Eastern clock 1:MM is taken as being in standard time (6:MM
UTC) because the docs insist on that, but 0:MM is taken as being in daylight
time (4:MM UTC).  There is no local time mapping to 5:MM UTC.  The local
clock jumps from 1:59 back to 1:00 again, and repeats the 1:MM hour in
standard time.  Since that's what the local clock *does*, we want to map both
UTC hours 5:MM and 6:MM to 1:MM Eastern.  The result is ambiguous
in local time, but so it goes -- it's the way the local clock works.

When x = 5:MM UTC is the input to this algorithm, x.o=0, y.o=-5 and y.d=0,
so z=0:MM.  z.d=60 (minutes) then, so [5] doesn't hold and we keep going.
z' = z + z.d = 1:MM then, and z'.d=0, and z'.d - z.d = -60 != 0 so [8]
(correctly) concludes that z' is not UTC-equivalent to x.

Because we know z.d said z was in daylight time (else [5] would have held and
we would have stopped then), and we know z.d != z'.d (else [8] would have held
and we have stopped then), and there are only 2 possible values dst() can
return in Eastern, it follows that z'.d must be 0 (which it is in the example,
but the reasoning doesn't depend on the example -- it depends on there being
two possible dst() outcomes, one zero and the other non-zero).  Therefore
z' must be in standard time, and is the spelling we want in this case.

Note again that z' is not UTC-equivalent as far as the hybrid tzinfo class is
concerned (because it takes z' as being in standard time rather than the
daylight time we intend here), but returning it gives the real-life "local
clock repeats an hour" behavior when mapping the "unspellable" UTC hour into
tz.

When the input is 6:MM, z=1:MM and z.d=0, and we stop at once, again with
the 1:MM standard time spelling we want.

So how can this break?  One of the assumptions must be violated.  Two
possibilities:

1) [2] effectively says that y.s is invariant across all y belong to a given
   time zone.  This isn't true if, for political reasons or continental drift,
   a region decides to change its base offset from UTC.

2) There may be versions of "double daylight" time where the tail end of
   the analysis gives up a step too early.  I haven't thought about that
   enough to say.

In any case, it's clear that the default fromutc() is strong enough to handle
"almost all" time zones:  so long as the standard offset is invariant, it
doesn't matter if daylight time transition points change from year to year, or
if daylight time is skipped in some years; it doesn't matter how large or
small dst() may get within its bounds; and it doesn't even matter if some
perverse time zone returns a negative dst()).  So a breaking case must be
pretty bizarre, and a tzinfo subclass can override fromutc() if it is.
"""
`,"src/lib/dbhash.py":`raise NotImplementedError("dbhash is not yet implemented in Skulpt")
`,"src/lib/decimal.py":`raise NotImplementedError("decimal is not yet implemented in Skulpt")
`,"src/lib/difflib.py":`raise NotImplementedError("difflib is not yet implemented in Skulpt")
`,"src/lib/dircache.py":`raise NotImplementedError("dircache is not yet implemented in Skulpt")
`,"src/lib/dis.py":`raise NotImplementedError("dis is not yet implemented in Skulpt")
`,"src/lib/distutils/__init__.py":`raise NotImplementedError("distutils is not yet implemented in Skulpt")
`,"src/lib/distutils/command/__init__.py":`raise NotImplementedError("command is not yet implemented in Skulpt")
`,"src/lib/distutils/tests/__init__.py":`raise NotImplementedError("tests is not yet implemented in Skulpt")
`,"src/lib/doctest.py":`raise NotImplementedError("doctest is not yet implemented in Skulpt")
`,"src/lib/document.js":'var $builtinmodule=function(){var a,b={};return b.getElementById=new Sk.builtin.func(function(a){var c=document.getElementById(a.v);return c?Sk.misceval.callsimArray(b.Element,[c]):Sk.builtin.none.none$}),b.createElement=new Sk.builtin.func(function(a){var c=document.createElement(a.v);if(c)return Sk.misceval.callsimArray(b.Element,[c])}),b.getElementsByTagName=new Sk.builtin.func(function(a){for(var c=document.getElementsByTagName(a.v),d=[],e=c.length-1;0<=e;e--)d.push(Sk.misceval.callsimArray(b.Element,[c[e]]));return new Sk.builtin.list(d)}),b.getElementsByClassName=new Sk.builtin.func(function(a){for(var c=document.getElementsByClassName(a.v),d=[],e=0;e<c.length;e++)d.push(Sk.misceval.callsimArray(b.Element,[c[e]]));return new Sk.builtin.list(d)}),b.getElementsByName=new Sk.builtin.func(function(a){for(var c=document.getElementsByName(a.v),d=[],e=0;e<c.length;e++)d.push(Sk.misceval.callsimArray(b.Element,[c[e]]));return new Sk.builtin.list(d)}),b.currentDiv=new Sk.builtin.func(function(){if(void 0!==Sk.divid)return new Sk.builtin.str(Sk.divid);throw new Sk.builtin.AttributeError("There is no value set for divid")}),a=function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.v=b,a.innerHTML=b.innerHTML,a.innerText=b.innerText,void 0!==b.value&&(a.value=b.value,Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("value"),new Sk.builtin.str(a.value))),void 0!==b.checked&&(a.checked=b.checked,Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("checked"),new Sk.builtin.str(a.checked))),Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("innerHTML"),new Sk.builtin.str(a.innerHTML)),Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("innerText"),new Sk.builtin.str(a.innerText))}),b.tp$getattr=Sk.builtin.object.prototype.GenericGetAttr,b.__setattr__=new Sk.builtin.func(function(a,b,c){b=Sk.ffi.remapToJs(b),"innerHTML"===b&&(a.innerHTML=c,a.v.innerHTML=c.v,Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("innerHTML"),c)),"innerText"===b&&(a.innerText=c,a.v.innerText=c.v,Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("innerText"),c))}),b.appendChild=new Sk.builtin.func(function(a,b){a.v.appendChild(b.v)}),b.removeChild=new Sk.builtin.func(function(a,b){a.v.removeChild(b.v)}),b.getCSS=new Sk.builtin.func(function(a,b){return new Sk.builtin.str(a.v.style[b.v])}),b.setCSS=new Sk.builtin.func(function(a,b,c){a.v.style[b.v]=c.v}),b.getAttribute=new Sk.builtin.func(function(a,b){var c=a.v.getAttribute(b.v);return c?new Sk.builtin.str(c):Sk.builtin.none.none$}),b.setAttribute=new Sk.builtin.func(function(a,b,c){a.v.setAttribute(b.v,c.v)}),b.getProperty=new Sk.builtin.func(function(a,b){var c=a.v[b.v];return c?new Sk.builtin.str(c):Sk.builtin.none.none$}),b.__str__=new Sk.builtin.func(function(a){return console.log(a.v.tagName),new Sk.builtin.str(a.v.tagName)}),b.__repr__=new Sk.builtin.func(function(){return new Sk.builtin.str("[DOM Element]")})},b.Element=Sk.misceval.buildClass(b,a,"Element",[]),b};',"src/lib/dumbdbm.py":`raise NotImplementedError("dumbdbm is not yet implemented in Skulpt")
`,"src/lib/dummy_thread.py":`raise NotImplementedError("dummy_thread is not yet implemented in Skulpt")
`,"src/lib/dummy_threading.py":`raise NotImplementedError("dummy_threading is not yet implemented in Skulpt")
`,"src/lib/email/__init__.py":`raise NotImplementedError("email is not yet implemented in Skulpt")
`,"src/lib/email/mime/__init__.py":`raise NotImplementedError("mime is not yet implemented in Skulpt")
`,"src/lib/email/test/data/__init__.py":`raise NotImplementedError("data is not yet implemented in Skulpt")
`,"src/lib/encodings/__init__.py":`raise NotImplementedError("encodings is not yet implemented in Skulpt")
`,"src/lib/ev3dev2/__init__.py":"","src/lib/ev3dev2/motor.py":`import ev3dev2_glue, time

WAIT_RUNNING_TIMEOUT = 100

OUTPUT_A = 'outA'
OUTPUT_B = 'outB'
OUTPUT_C = 'outC'
OUTPUT_D = 'outD'

class SpeedValue:
  """
  The base class for the SpeedValue classes.
  Not meant to be used directly.
  Use SpeedNativeUnits, SpeedPercent, SpeedRPS, SpeedRPM, SpeedDPS, SpeedDPM
  """

  def __lt__(self, other):
    return self.to_native_units() < other.to_native_units()

  def __rmul__(self,other):
    return self.__mul__(other)

  def to_native_units(self):
    pass

  def __mul__(self, other):
    pass


class SpeedPercent(SpeedValue):
  """
  Speed as a percentage of the motor's maximum rated speed.
  Returns Tacho Counts via motor.max_speed
  """
  def __init__(self, percent):
    if -100 <= percent <= 100:
      self.percent = percent
    else:
      raise ValueError("Value must be between -100 and 100")

  def __str__(self):
    return str(self.percent) + '%'

  def __mul__(self,other):
    if isinstance(other, (float, int)):
      return SpeedPercent(self.percent * other)
    else:
      raise TypeError("Multiplier must be of int or float type.")

  def to_native_units(self, motor):
    return self.percent / 100.0 * motor.max_speed


class SpeedNativeUnits(SpeedValue):
  """
  Speed in tacho counts per second
  Returns no. of Tacho Counts
  """
  def __init__(self,native_counts):
    self.native_counts = native_counts

  def __str__(self):
    return str(self.native_counts) + "counts/sec"

  def __mul__(self, other):
    if isinstance(other, (float, int)):
      SpeedNativeUnits(self.native_counts * other)
    else:
      raise TypeError("Multiplier must be of int or float type.")

  def to_native_units(self,motor):
    return self.native_counts


class SpeedRPS(SpeedValue):
  """
  Speed in rotations-per-second
  Returns Tacho Counts via motor.max_rps
  """
  def __init__(self, rotations_per_second):
    self.rotations_per_second = rotations_per_second

  def __str__(self):
    return str(self.rotations_per_second) + " rot/sec"

  def __mul__(self, other):
    if isinstance(other, (float, int)):
      return SpeedRPS(self.rotations_per_second * other)
    else:
      raise TypeError("Multiplier must be of float or int type")

  def to_native_units(self, motor):
    if abs(self.rotations_per_second) <= motor.max_rps:
      return self.rotations_per_second/motor.max_rps * motor.max_speed
    else:
      raise ValueError("RPS value must be <= motor.max_rps")


class SpeedRPM(SpeedValue):
  """
  Speed in rotations-per-minute
  Returns RPM to Tacho Counts via motor.max_rpm
  """

  def __init__(self, rotations_per_minute):
    self.rotations_per_minute = rotations_per_minute

  def __str__(self):
    return str(self.rotations_per_minute) + " rot/min"

  def __mul__(self, other):
    if isinstance(other, (float, int)):
      return SpeedRPM(self.rotations_per_minute * other)
    else:
      raise TypeError("Multiplier must be of type float or int")

  def to_native_units(self, motor):
    if abs(self.rotations_per_minute) <= motor.max_rpm:
      return self.rotations_per_minute/motor.max_rpm * motor.max_speed
    else:
      raise ValueError("RPM Value must be <= motor.max_rpm")


class SpeedDPS(SpeedValue):
  """
  Speed in degrees-per-second.
  Converts to Tacho Counts via motor.max_dps
  """

  def __init__(self, degrees_per_second):
    self.degrees_per_second = degrees_per_second

  def __str__(self):
    return str(self.degrees_per_second) + " deg/sec"

  def __mul__(self, other):
    if isinstance(other, (float, int)):
      return SpeedDPS(self.degrees_per_second * other)
    else:
      raise TypeError("Multiplier must be of type float or int")

  def to_native_units(self, motor):
    if abs(self.degrees_per_second) <= motor.max_dps:
      return self.degrees_per_second/motor.max_dps * motor.max_speed
    else:
      raise ValueError("DPS Value must be <= motor.max_dps")


class SpeedDPM(SpeedValue):
  """
  Speed in degrees-per-min
  Returns Tacho Counts via motor.max_dpm
  """

  def __init__(self, degrees_per_minute):
    self.degrees_per_minute = degrees_per_minute

  def __str__(self):
    return str(self.degrees_per_minute) + " deg/min"

  def __mul__(self, other):
    if isinstance(other, (float, int)):
      return SpeedDPM(self.degrees_per_minute * other)
    else:
      raise TypeError("Multiplier must be of type float or int")

  def to_native_units(self, motor):
    if abs(self.degrees_per_minute) <= motor.max_dpm:
      return self.degrees_per_minute/motor.max_dpm * motor.max_speed
    else:
      raise ValueError("DPM Value must be <= motor.max_dpm")

class Motor:
  COMMAND_RESET = 'reset'
  COMMAND_RUN_DIRECT = 'run-direct'
  COMMAND_RUN_FOREVER = 'run-forever'
  COMMAND_RUN_TIMED = 'run-timed'
  COMMAND_RUN_TO_ABS_POS = 'run-to-abs-pos'
  COMMAND_RUN_TO_REL_POS = 'run-to-rel-pos'
  COMMAND_STOP = 'stop'
  ENCODER_POLARITY_INVERSED = 'inversed'
  ENCODER_POLARITY_NORMAL = 'normal'
  POLARITY_INVERSED = 'inversed'
  POLARITY_NORMAL = 'normal'
  STATE_HOLDING = 'holding'
  STATE_OVERLOADED = 'overloaded'
  STATE_RAMPING = 'ramping'
  STATE_RUNNING = 'running'
  STATE_STALLED = 'stalled'
  STOP_ACTION_BRAKE = 'brake'
  STOP_ACTION_COAST = 'coast'
  STOP_ACTION_HOLD = 'hold'

  _DRIVER_NAME = None

  def __init__(self, address=None):
    self.wheel = ev3dev2_glue.Motor(address)

    self.max_speed = 1050
    self.count_per_rot = 360
    self.max_rps = float(self.max_speed/self.count_per_rot)
    self.max_rpm = self.max_rps * 60
    self.max_dps = self.max_rps * 360
    self.max_dpm = self.max_rpm * 360

  @property
  def command(self):
    raise Exception("command is a write-only property!")

  @command.setter
  def command(self, value):
    self.wheel.command(value)
    return 0

  @property
  def duty_cycle(self):
    return self.wheel.speed()

  @property
  def duty_cycle_sp(self):
    return self._duty_cycle_sp

  @duty_cycle_sp.setter
  def duty_cycle_sp(self, value):
    self._duty_cycle_sp = value
    self.wheel.speed_sp(int(value))
    return 0

  @property
  def is_holding(self):
    return self.STATE_HOLDING in self.wheel.state()

  @property
  def is_overloaded(self):
    return self.STATE_OVERLOADED in self.wheel.state()

  @property
  def is_ramping(self):
    return self.STATE_RAMPING in self.wheel.state()

  @property
  def is_running(self):
    return self.STATE_RUNNING in self.wheel.state()

  @property
  def is_stalled(self):
    return self.STATE_STALLED in self.wheel.state()

  @property
  def polarity(self):
    return self.wheel.polarity()

  @polarity.setter
  def polarity(self, value):
    self.wheel.polarity(value)
    return 0

  @property
  def position(self):
    return self.wheel.pos()

  @position.setter
  def position(self, value):
    self.wheel.pos(int(value))
    return 0

  @property
  def position_d(self):
    return 1

  @position_d.setter
  def position_d(self, value):
    return 0

  @property
  def position_i(self):
    return 1

  @position_i.setter
  def position_i(self, value):
    return 0

  @property
  def position_p(self):
    return 1

  @position_p.setter
  def position_p(self, value):
    return 0

  @property
  def position_sp(self):
    return self.wheel.position_sp()

  @position_sp.setter
  def position_sp(self, value):
    self.wheel.position_sp(int(value))
    return 0

  @property
  def ramp_down_sp(self):
    return 1

  @ramp_down_sp.setter
  def ramp_down_sp(self, value):
    return 0

  @property
  def ramp_up_sp(self):
    return 1

  @ramp_up_sp.setter
  def ramp_up_sp(self, value):
    return 0

  @property
  def speed(self):
    return self.wheel.speed()

  @property
  def speed_d(self):
    return 1

  @speed_d.setter
  def speed_d(self, value):
    return 0

  @property
  def speed_i(self):
    return 1

  @speed_i.setter
  def speed_i(self, value):
    return 0

  @property
  def speed_p(self):
    return 1

  @speed_p.setter
  def speed_p(self, value):
    return 0

  @property
  def speed_sp(self):
    return self.wheel.speed_sp()

  @speed_sp.setter
  def speed_sp(self, value):
    self.wheel.speed_sp(int(value))
    return 0

  @property
  def state(self):
    return self.wheel.state()

  @property
  def stop_action(self):
    return self._stop_action

  @stop_action.setter
  def stop_action(self, value):
    self._stop_action = value
    return 0

  @property
  def time_sp(self):
    return self.wheel.speed_sp()

  @time_sp.setter
  def time_sp(self, value):
    self.wheel.time_sp(value)
    return 0

  def reset(self, **kwargs):
    """
    Resets the motor the default value. It will also stop the motor.
    """
    for k in kwargs:
      setattr(self, k, kwargs[k])
    self.command = 'reset'

  def run_direct(self, **kwargs):
    """
    Run the motor at the duty cycle specified by duty_cycle_sp.
    Unlike other run commands, changing duty_cycle_sp
    while running will take effect immediately.
    """
    for k in kwargs:
      setattr(self, k, kwargs[k])

  def run_forever(self, **kwargs):
    """
    Run the motor until another command is sent.
    """
    for k in kwargs:
      setattr(self, k, kwargs[k])
    self.command = 'run-forever'

  def run_timed(self, **kwargs):
    """
    Run for the amount of time specified in time_sp.
    Then, stop the motor as specified by stop_action.
    """
    for k in kwargs:
      setattr(self, k, kwargs[k])
    self.command = 'run-timed'

  def run_to_abs_pos(self, **kwargs):
    """
    Run to the absolute position as specified by position_sp.
    Then, stop the motor as specified by stop_action.
    """
    for k in kwargs:
      setattr(self, k, kwargs[k])
    self.command = 'run-to-abs-pos'

  def run_to_rel_pos(self, **kwargs):
    """
    Run to the relative position as specified by position_sp.
    New position will be current position + position_sp
    When the new position is reached, the motor will stop, as specified
    by stop_action.
    """
    for k in kwargs:
      setattr(self, k, kwargs[k])
    self.command = 'run-to-rel-pos'

  def stop(self, **kwargs):
    """
    Stop any of the run commands before they are complete using the
    action specified by stop_action.
    """
    for k in kwargs:
      setattr(self, k, kwargs[k])
    self.command = ''

  def wait(self, cond, timeout=None):
    """
    Blocks until \`\`cond(self.state)\`\` is \`\`True\`\`.  The condition is
    checked when there is an I/O event related to the \`\`state\`\` attribute.
    Exits early when \`\`timeout\`\` (in milliseconds) is reached.

    Returns \`\`True\`\` if the condition is met, and \`\`False\`\` if the timeout
    is reached.

    Valid flags for state attribute: running, ramping, holding,
    overloaded and stalled
    """
    if timeout != None:
      timeout = time.clock() + timeout / 1000.0
    while True:
      time.sleep(0.01)
      if cond(str(self.wheel.state())):
        return True
      if timeout != None and time.clock() >= timeout:
        return False

  def wait_until(self, s, timeout=None):
    """
    Blocks until \`\`s\`\` is in \`\`self.state\`\`.  The condition is checked when
    there is an I/O event related to the \`\`state\`\` attribute.  Exits early
    when \`\`timeout\`\` (in milliseconds) is reached.

    Returns \`\`True\`\` if the condition is met, and \`\`False\`\` if the timeout
    is reached.

    Example::
        m.wait_until('stalled')
    """
    return self.wait(lambda state: s in state, timeout)

  def wait_until_not_moving(self, timeout=None):
    """
    Blocks until one of the following conditions are met:
    - \`\`running\`\` is not in \`\`self.state\`\`
    - \`\`stalled\`\` is in \`\`self.state\`\`
    - \`\`holding\`\` is in \`\`self.state\`\`
    The condition is checked when there is an I/O event related to
    the \`\`state\`\` attribute.  Exits early when \`\`timeout\`\` (in
    milliseconds) is reached.

    Returns \`\`True\`\` if the condition is met, and \`\`False\`\` if the timeout
    is reached.

    Example::

        m.wait_until_not_moving()
    """
    return self.wait(lambda state: self.STATE_RUNNING not in state or self.STATE_STALLED in state, timeout)

  def wait_while(self, s, timeout=None):
    """
    Blocks until \`\`s\`\` is not in \`\`self.state\`\`.  The condition is checked
    when there is an I/O event related to the \`\`state\`\` attribute.  Exits
    early when \`\`timeout\`\` (in milliseconds) is reached.

    Returns \`\`True\`\` if the condition is met, and \`\`False\`\` if the timeout
    is reached.

    Example::

        m.wait_while('running')
    """
    return self.wait(lambda state: s not in state, timeout)

  def _set_rel_position_degrees_and_speed_sp(self, degrees, speed):
    degrees = degrees if speed >= 0 else -degrees
    speed = abs(speed)

    position_delta = int(round((degrees * self.count_per_rot)/360))
    speed_sp = int(round(speed))

    self.position_sp = position_delta
    self.speed_sp = speed_sp

  def on_for_rotations(self, speed, rotations, brake=True, block=True):
    """
    Rotate the motor at \`\`speed\`\` for \`\`rotations\`\`

    \`\`speed\`\` can be a percentage or a :class:\`ev3dev2.motor.SpeedValue\`
    object, enabling use of other units.
    """
    if not isinstance(speed, SpeedValue):
      if -100 <= speed <= 100:
        speed = SpeedPercent(speed)
        speed_sp = speed.to_native_units(self)
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      speed_sp = int(round(speed.to_native_units(self)))

    self._set_rel_position_degrees_and_speed_sp(rotations*360, speed_sp)

    if brake:
      self.stop_action = self.STOP_ACTION_HOLD
    else:
      self.stop_action = self.STOP_ACTION_COAST

    self.run_to_rel_pos()

    if block:
      self.wait_until('running', timeout=WAIT_RUNNING_TIMEOUT)
      self.wait_until_not_moving()

  def on_for_degrees(self, speed, degrees, brake=True, block=True):
    """
    Rotate the motor at \`\`speed\`\` for \`\`degrees\`\`

    \`\`speed\`\` can be a percentage or a :class:\`ev3dev2.motor.SpeedValue\`
    object, enabling use of other units.
    """
    if not isinstance(speed, SpeedValue):
      if -100 <= speed <= 100:
        speed = SpeedPercent(speed)
        speed_sp = speed.to_native_units(self)
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      speed_sp = int(round(speed.to_native_units(self)))

    self._set_rel_position_degrees_and_speed_sp(degrees, speed_sp)

    if brake:
      self.stop_action = self.STOP_ACTION_HOLD
    else:
      self.stop_action = self.STOP_ACTION_COAST

    self.run_to_rel_pos()

    if block:
      self.wait_until('running', timeout=WAIT_RUNNING_TIMEOUT)
      self.wait_until_not_moving()

  def on_to_position(self, speed, position, brake=True, block=True):
    """
    Rotate the motor at \`\`speed\`\` to \`\`position\`\`

    \`\`speed\`\` can be a percentage or a :class:\`ev3dev2.motor.SpeedValue\`
    object, enabling use of other units.
    """
    if not isinstance(speed, SpeedValue):
      if -100 <= speed <= 100:
        speed = SpeedPercent(speed)
        speed_sp = speed.to_native_units(self)
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      speed_sp = int(round(speed.to_native_units(self)))

    self.speed_sp = int(round(speed_sp))
    self.position_sp = position

    if brake:
      self.stop_action = self.STOP_ACTION_HOLD
    else:
      self.stop_action = self.STOP_ACTION_COAST

    self.run_to_abs_pos()

    if block:
      self.wait_until('running', timeout=WAIT_RUNNING_TIMEOUT)
      self.wait_until_not_moving()

  def on_for_seconds(self, speed, seconds, brake=True, block=True):
    """
    Rotate the motor at \`\`speed\`\` for \`\`seconds\`\`

    \`\`speed\`\` can be a percentage or a :class:\`ev3dev2.motor.SpeedValue\`
    object, enabling use of other units.
    """
    if seconds < 0:
      raise ValueError("Seconds is negative.")

    if not isinstance(speed, SpeedValue):
      if -100 <= speed <= 100:
        speed = SpeedPercent(speed)
        speed_sp = speed.to_native_units(self)
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      speed_sp = int(round(speed.to_native_units(self)))

    self.speed_sp = int(round(speed_sp))
    self.time_sp = seconds

    if brake:
      self.stop_action = self.STOP_ACTION_HOLD
    else:
      self.stop_action = self.STOP_ACTION_COAST

    self.run_timed()

    if block:
      self.wait_until('running', timeout=WAIT_RUNNING_TIMEOUT)
      self.wait_until_not_moving()

  def on(self, speed, brake=True, block=False):
    if not isinstance(speed, SpeedValue):
      if -100 <= speed <= 100:
        speed = SpeedPercent(speed)
        speed_sp = speed.to_native_units(self)
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      speed_sp = int(round(speed.to_native_units(self)))

    self.speed_sp = int(round(speed_sp))

    if brake:
      self.stop_action = self.STOP_ACTION_HOLD
    else:
      self.stop_action = self.STOP_ACTION_COAST

    self.run_forever()

    if block:
      self.wait_until('running', timeout=WAIT_RUNNING_TIMEOUT)
      self.wait_until_not_moving()

  def off(self, brake=True):

    if brake:
      self.stop_action = self.STOP_ACTION_HOLD
    else:
      self.stop_action = self.STOP_ACTION_COAST

    self.stop()


class LargeMotor(Motor):
  _DRIVER_NAME = 'lego-ev3-l-motor'


class MediumMotor(Motor):
  _DRIVER_NAME = 'lego-ev3-m-motor'


class MotorSet:
  def __init__(self, motor_specs, desc=None):
    self.motors = {}
    for motor_port in motor_specs.keys():
      motor_class = motor_specs[motor_port]
      self.motors[motor_port] = motor_class(motor_port)
      self.motors[motor_port].reset()
    self.desc = desc
    self.WAIT_RUNNING_TIMEOUT = 100

  def off(self, motors=None, brake=True):
    motors = motors if motors is not None else self.motors.values()

    for motor in motors:
      motor.stop()

  def stop(self, motors=None, brake=True):
    self.off(motors, brake)

  def _block(self):
    for motor in self.motors.values():
      motor.wait_until('running', timeout=WAIT_RUNNING_TIMEOUT)
      motor.wait_until_not_moving()

class MoveTank(MotorSet):
  def __init__(self, left_motor_port, right_motor_port, desc=None, motor_class=LargeMotor):
    motor_specs = {
      left_motor_port : motor_class,
      right_motor_port : motor_class,
      }
    MotorSet.__init__(self, motor_specs, desc)
    self.left_motor = self.motors[left_motor_port]
    self.right_motor = self.motors[right_motor_port]
    self.max_speed = self.left_motor.max_speed

  def on_for_degrees(self, left_speed, right_speed, degrees, brake=True, block=True):
    """
    Rotate the motors at 'left_speed' and 'right_speed' for 'degrees'.
    Speeds can be percentages or any SpeedValue implementation.

    If the left speed is not equal to the right speed (i.e., the robot will
    turn), the motor on the outside of the turn will rotate for the full
    \`\`degrees\`\` while the motor on the inside will have its requested
    distance calculated according to the expected turn.
    """
    if not isinstance(left_speed, SpeedValue):
      if -100 <= left_speed <= 100:
        left_speed_obj = SpeedPercent(left_speed)
        left_speed_var = int(round(left_speed_obj.to_native_units(self.left_motor)))
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      left_speed_var = int(round(left_speed.to_native_units(self.left_motor)))

    if not isinstance(right_speed, SpeedValue):
      if -100 <= right_speed <= 100:
        right_speed_obj = SpeedPercent(right_speed)
        right_speed_var = int(round(right_speed_obj.to_native_units(self.right_motor)))
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      right_speed_var = int(round(right_speed.to_native_units(self.right_motor)))

    if degrees == 0 or (left_speed_var == 0 and right_speed_var == 0):
      left_degrees = 0
      right_degrees = 0
    elif abs(left_speed_var) > abs(right_speed_var):
      left_degrees = degrees
      right_degrees = abs(right_speed_var / float(left_speed_var)) * degrees
    else:
      left_degrees = abs(left_speed_var / float(right_speed_var)) * degrees
      right_degrees = degrees

    left_degrees_in = round((left_degrees * self.left_motor.count_per_rot) / 360.0)
    right_degrees_in = round((right_degrees * self.right_motor.count_per_rot) / 360.0)

    self.left_motor.position_sp = left_degrees_in if left_speed_var >= 0 else -left_degrees_in
    self.left_motor.speed_sp = abs(left_speed_var)
    self.right_motor.position_sp = right_degrees_in if right_speed_var >= 0 else -right_degrees_in
    self.right_motor.speed_sp = abs(right_speed_var)

    self.left_motor.stop_action = self.left_motor.STOP_ACTION_HOLD if brake else self.left_motor.STOP_ACTION_COAST
    self.right_motor.stop_action = self.right_motor.STOP_ACTION_HOLD if brake else self.right_motor.STOP_ACTION_COAST

    self.left_motor.run_to_rel_pos()
    self.right_motor.run_to_rel_pos()

    if block:
      self._block()

  def on_for_rotations(self, left_speed, right_speed, rotations, brake=True, block=True):
    """
    Rotate the motors at 'left_speed' and 'right_speed' for 'rotations'.
    Speeds can be percentages or any SpeedValue implementation.

    If the left speed is not equal to the right speed (i.e., the robot will
    turn), the motor on the outside of the turn will rotate for the full
    \`\`rotations\`\` while the motor on the inside will have its requested
    distance calculated according to the expected turn.
    """
    MoveTank.on_for_degrees(self, left_speed, right_speed, rotations * 360, brake, block)

  def on_for_seconds(self, left_speed, right_speed, seconds, brake=True, block=True):
    """
    Rotate the motors at 'left_speed & right_speed' for 'seconds'.
    Speeds can be percentages or any SpeedValue implementation.
    """
    if seconds < 0:
      raise ValueError("Seconds is negative.")

    if not isinstance(left_speed, SpeedValue):
      if -100 <= left_speed <= 100:
        left_speed_obj = SpeedPercent(left_speed)
        left_speed_var = int(round(left_speed_obj.to_native_units(self.left_motor)))
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      left_speed_var = int(round(left_speed.to_native_units(self.left_motor)))


    if not isinstance(right_speed, SpeedValue):
      if -100 <= right_speed <= 100:
        right_speed_obj = SpeedPercent(right_speed)
        right_speed_var = int(round(right_speed_obj.to_native_units(self.right_motor)))
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      right_speed_var = int(round(right_speed.to_native_units(self.right_motor)))

    self.left_motor.speed_sp = left_speed_var
    self.left_motor.time_sp = seconds
    self.right_motor.speed_sp = right_speed_var
    self.right_motor.time_sp = seconds

    self.left_motor.stop_action = self.left_motor.STOP_ACTION_HOLD if brake else self.left_motor.STOP_ACTION_COAST
    self.right_motor.stop_action = self.right_motor.STOP_ACTION_HOLD if brake else self.right_motor.STOP_ACTION_COAST

    self.left_motor.run_timed()
    self.right_motor.run_timed()

    if block:
      self._block()

  def on(self, left_speed, right_speed):
    """
    Start rotating the motors according to \`\`left_speed\`\` and \`\`right_speed\`\` forever.
    Speeds can be percentages or any SpeedValue implementation.

    """
    if not isinstance(left_speed, SpeedValue):
      if -100 <= left_speed <= 100:
        left_speed_obj = SpeedPercent(left_speed)
        left_speed_var = int(round(left_speed_obj.to_native_units(self.left_motor)))
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      left_speed_var = int(round(left_speed.to_native_units(self.left_motor)))

    if not isinstance(right_speed, SpeedValue):
      if -100 <= right_speed <= 100:
        right_speed_obj = SpeedPercent(right_speed)
        right_speed_var = int(round(right_speed_obj.to_native_units(self.right_motor)))
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      right_speed_var = int(round(right_speed.to_native_units(self.right_motor)))

    self.left_motor.speed_sp = left_speed_var
    self.right_motor.speed_sp = right_speed_var
    self.left_motor.run_forever()
    self.right_motor.run_forever()


class MoveSteering(MoveTank):
  def get_speed_steering(self, steering, speed):
    if steering > 100 or steering < -100:
      raise ValueError("Invalid Steering Value. Between -100 and 100 (inclusive).")

    # Assumes left motor's speed stats are the same as the right motor's
    if not isinstance(speed, SpeedValue):
      if -100 <= speed <= 100:
        speed_obj = SpeedPercent(speed)
        speed_var = speed_obj.to_native_units(self.left_motor)
      else:
        raise Exception("Invalid Speed Percentage. Speed must be between -100 and 100)")
    else:
      speed_var = speed.to_native_units(self.left_motor)

    left_speed = speed_var
    right_speed = speed_var
    speed_factor = (50 - abs(float(steering))) / 50.0

    if steering >= 0:
      right_speed *= speed_factor
    else:
      left_speed *= speed_factor

    return(left_speed, right_speed)

  def on_for_rotations(self, steering, speed, rotations, brake=True, block=True):
    """
    Rotate the motors according to the provided \`\`steering\`\`.

    The distance each motor will travel follows the rules of :meth:\`MoveTank.on_for_rotations\`.
    """
    (left_speed, right_speed) = self.get_speed_steering(steering, speed)
    MoveTank.on_for_rotations(self, SpeedNativeUnits(left_speed), SpeedNativeUnits(right_speed), rotations, brake, block)

  def on_for_degrees(self, steering, speed, degrees, brake=True, block=True):
    """
    Rotate the motors according to the provided \`\`steering\`\`.

    The distance each motor will travel follows the rules of :meth:\`MoveTank.on_for_degrees\`.
    """
    (left_speed, right_speed) = self.get_speed_steering(steering, speed)
    MoveTank.on_for_degrees(self, SpeedNativeUnits(left_speed), SpeedNativeUnits(right_speed), degrees, brake, block)

  def on_for_seconds(self, steering, speed, seconds, brake=True, block=True):
    """
    Rotate the motors according to the provided \`\`steering\`\` for \`\`seconds\`\`.
    """
    (left_speed, right_speed) = self.get_speed_steering(steering, speed)
    MoveTank.on_for_seconds(self, SpeedNativeUnits(left_speed), SpeedNativeUnits(right_speed), seconds, brake, block)

  def on(self, steering, speed):
    """
    Start rotating the motors according to the provided \`\`steering\`\` and
    \`\`speed\`\` forever.
    """
    (left_speed, right_speed) = self.get_speed_steering(steering, speed)
    MoveTank.on(self, SpeedNativeUnits(left_speed), SpeedNativeUnits(right_speed))`,"src/lib/ev3dev2/sensor/__init__.py":`INPUT_1 = 'in1'
INPUT_2 = 'in2'
INPUT_3 = 'in3'
INPUT_4 = 'in4'`,"src/lib/ev3dev2/sensor/lego.py":`import ev3dev2_glue, time

# Needed to prevent loops from locking up the javascript thread
SENSOR_DELAY = 0.01

#cm to inches conversion
CM_TO_INCHES = 2.54

class ColorSensor:
  _DRIVER_NAME = 'lego-ev3-color'

  COLOR_NOCOLOR = 0 # HSV values from https://lego.fandom.com/wiki/Colour_Palette
  COLOR_BLACK = 1   # 0, 0, 0
  COLOR_BLUE = 2    # 207, 64, 78
  COLOR_GREEN = 3   # 120, 100, 60
  COLOR_YELLOW = 4  # 60, 100, 100
  COLOR_RED = 5     # 0, 100, 100
  COLOR_WHITE = 6   # 0, 0, 100
  COLOR_BROWN = 7   # 24, 79, 25

  COLORS = (
      'NoColor',
      'Black',
      'Blue',
      'Green',
      'Yellow',
      'Red',
      'White',
      'Brown',
    )

  MODE_COL_REFLECT = 'COL-REFLECT'
  MODE_COL_AMBIENT = 'COL-AMBIENT'
  MODE_COL_COLOR = 'COL-COLOR'
  MODE_REF_RAW = 'REF-RAW'
  MODE_RGB_RAW = 'RGB-RAW'

  def __init__(self, address=None):
    self.sensor = ev3dev2_glue.ColorSensor(address)

  @property
  def reflected_light_intensity(self):
    time.sleep(SENSOR_DELAY)
    return int(list(self.sensor.value())[0])

  @property
  def reflected_light_intensity_pc(self):
    time.sleep(SENSOR_DELAY)
    return 100. * int(list(self.sensor.value())[0]) / 255

  @property
  def full_reflected_light_intensity(self):
    time.sleep(SENSOR_DELAY)

    rgb = list(self.sensor.value())
    for i in range(3):
      rgb[i] = int(rgb[i])
    return 100.0 * sum(rgb) / 765
    
  @property
  def ambient_light_intensity(self):
    return 0

  @property
  def color(self):
    time.sleep(SENSOR_DELAY)
    hsv = self.hsv

    if hsv[1] < 20:
      if hsv[2] < 30:
        return self.COLOR_BLACK
      else:
        return self.COLOR_WHITE

    elif hsv[0] < 30:
      return self.COLOR_RED

    elif hsv[0] < 90:
      return self.COLOR_YELLOW

    elif hsv[0] < 163:
      return self.COLOR_GREEN

    elif hsv[0] < 283:
      return self.COLOR_BLUE

    else:
      return self.COLOR_RED

  @property
  def color_name(self):
    return self.COLORS[self.color]

  @property
  def raw(self):
    time.sleep(SENSOR_DELAY)
    return list(self.sensor.value())

  @property
  def calibrate_white(self):
    return 0

  @property
  def rgb(self):
    time.sleep(SENSOR_DELAY)
    rgb = list(self.sensor.value())
    for i in range(3):
      rgb[i] = int(rgb[i])
    return rgb

  @property
  def lab(self):
    time.sleep(SENSOR_DELAY)
    lab = list(self.sensor.valueLAB())
    for i in range(3):
      lab[i] = int(lab[i])
    return lab

  @property
  def hsv(self):
    time.sleep(SENSOR_DELAY)
    hsv = list(self.sensor.valueHSV())
    for i in range(3):
      hsv[i] = int(hsv[i])
    return hsv

  @property
  def hls(self):
    time.sleep(SENSOR_DELAY)
    hls = list(self.sensor.valueHLS())
    for i in range(3):
      hls[i] = int(hls[i])
    return hls

  @property
  def red(self):
    time.sleep(SENSOR_DELAY)
    return int(self.sensor.value()[0])

  @property
  def green(self):
    time.sleep(SENSOR_DELAY)
    return int(self.sensor.value()[1])

  @property
  def blue(self):
    time.sleep(SENSOR_DELAY)
    return int(self.sensor.value()[2])

class GyroSensor:
  _DRIVER_NAME = 'lego-ev3-gyro'

  MODE_GYRO_ANG = 'GYRO-ANG'
  MODE_GYRO_CAL = 'GYRO-CAL'
  MODE_GYRO_FAS = 'GYRO-FAS'
  MODE_GYRO_G_A = 'GYRO-G&A'
  MODE_GYRO_RATE = 'GYRO-RATE'
  MODE_TILT_ANG = 'TILT-ANGLE'
  MODE_TILT_RATE = 'TILT-RATE'

  def __init__(self, address=None):
    self.sensor = ev3dev2_glue.GyroSensor(address)

  @property
  def angle(self):
    time.sleep(SENSOR_DELAY)
    return self.angle_and_rate[0]

  @property
  def rate(self):
    time.sleep(SENSOR_DELAY)
    return self.angle_and_rate[1]

  @property
  def angle_and_rate(self):
    time.sleep(SENSOR_DELAY)
    angle_and_rate = list(self.sensor.angleAndRate())
    for i in range(2):
      angle_and_rate[i] = int(angle_and_rate[i])
    return angle_and_rate

  def wait_until_angle_changed_by(self, delta, direction_sensitive=False):
    if delta == 0:
      return True

    max_angle = self.angle + abs(delta)
    min_angle = self.angle - abs(delta)

    while True:
      time.sleep(0.01)
      if direction_sensitive and delta > 0:
        if self.angle >= max_angle:
          return True
      elif direction_sensitive and delta < 0:
        if self.angle <= min_angle:
          return True
      else:
        if self.angle >= max_angle or self.angle <= min_angle:
          return True

class UltrasonicSensor:
  _DRIVER_NAME = 'lego-ev3-us'

  MODE_US_DIST_CM = 'US-DIST-CM'
  MODE_US_DIST_IN = 'US-DIST-IN'
  MODE_US_LISTEN = 'US-LISTEN'
  MODE_US_SI_CM = 'US-SI-CM'
  MODE_US_SI_IN = 'US-SI-IN'

  def __init__(self, address=None):
    self.sensor = ev3dev2_glue.UltrasonicSensor(address)

  @property
  def distance_centimeters_continuous(self):
    time.sleep(SENSOR_DELAY)
    return int(self.sensor.dist()) / 10.0

  @property
  def distance_centimeters_ping(self):
    time.sleep(SENSOR_DELAY)
    return int(self.sensor.dist()) / 10.0

  @property
  def distance_centimeters(self):
    time.sleep(SENSOR_DELAY)
    return int(self.sensor.dist()) / 10.0

  @property
  def distance_inches_continuous(self):
    return self.distance_centimeters / CM_TO_INCHES

  @property
  def distance_inches_ping(self):
    return self.distance_centimeters / CM_TO_INCHES

  @property
  def distance_inches(self):
    return self.distance_centimeters / CM_TO_INCHES

  @property
  def other_sensor_present(self):
    time.sleep(SENSOR_DELAY)
    return False
`,"src/lib/ev3dev2/sound.py":`import ev3dev2_glue, time

# Needed to prevent loops from locking up the javascript thread
SENSOR_DELAY = 0.01

class Sound:
  PLAY_WAIT_FOR_COMPLETE = 0
  PLAY_NO_WAIT_FOR_COMPLETE = 1
  PLAY_LOOP = 2

  def __init__(self, address=None):
    self.sound = ev3dev2_glue.Sound()

  def set_volume(self, pct):
    self.sound.set_volume(pct)

  def get_volume(self, pct):
    return self.sound.get_volume()

  def speak(self, text, espeak_opts='-a 200 -s 130', volume=100, play_type=0):
    self.sound.set_volume(volume)
    if play_type == self.PLAY_NO_WAIT_FOR_COMPLETE:
      self.sound.speak(text)
    elif play_type == self.PLAY_WAIT_FOR_COMPLETE:
      self.sound.speak(text)
      while self.sound.isSpeaking():
        time.sleep(SENSOR_DELAY)
    elif play_type == self.PLAY_LOOP:
      while True:
        self.sound.speak(text)
        while self.sound.isSpeaking():
          time.sleep(SENSOR_DELAY)`,"src/lib/ev3dev2_glue.js":'var $builtinmodule=function(){var a=Math.round;sim=Sk.builtins.sim;var b={};return b.showme=new Sk.builtin.func(function(){return"okay?"}),b.pyState=new Sk.builtin.func(function(){return"undefined"==typeof sim.pyState?{}:sim.pyState}),b.get_clock=new Sk.builtin.func(function(){return sim.clock/sim.fps}),b.Motor=Sk.misceval.buildClass(b,function(a,b){this;b.__init__=new Sk.builtin.func(function(a,b){if("outB"==b.v)a.side="left",a.wheel=sim.robotStates.leftWheel;else if("outC"==b.v)a.side="right",a.wheel=sim.robotStates.rightWheel;else throw new Sk.builtin.TypeError("No motor connected to "+(b.v+""))}),b.command=new Sk.builtin.func(function(a,b){"run-timed"==b.v?(a.wheel.time_target=sim.clock+a.wheel.time_sp*sim.fps,a.wheel.state="running"):"run-to-rel-pos"==b.v?(a.wheel.position_target=a.wheel.pos+a.wheel.position_sp,a.wheel.state=a.wheel.position_target==a.wheel.pos?"":"running"):"run-to-abs-pos"==b.v?(a.wheel.position_target=a.wheel.position_sp,a.wheel.state=a.wheel.position_target==a.wheel.pos?"":"running"):"run-forever"==b.v&&(a.wheel.state="running"),a.wheel.command=b.v}),b.state=new Sk.builtin.func(function(a){return a.wheel.state}),b.speed_sp=new Sk.builtin.func(function(a,b){return"undefined"==typeof b?a.wheel.speed_sp:void(a.wheel.speed_sp=b.v)}),b.time_sp=new Sk.builtin.func(function(a,b){return"undefined"==typeof b?a.wheel.time_sp:void(a.wheel.time_sp=b.v)}),b.pos=new Sk.builtin.func(function(a,b){return"undefined"==typeof b?a.wheel.pos:void(a.wheel.pos=b.v)}),b.polarity=new Sk.builtin.func(function(a,b){return"undefined"==typeof b?a.wheel.polarity:void(a.wheel.polarity=b.v)}),b.position_sp=new Sk.builtin.func(function(a,b){return"undefined"==typeof b?a.wheel.position_sp:void(a.wheel.position_sp=b.v)}),b.speed=new Sk.builtin.func(function(a){return a.wheel.speed})},"Motor",[]),b.ColorSensor=Sk.misceval.buildClass(b,function(a,b){var c=Math.min,d=Math.max;this;b.__init__=new Sk.builtin.func(function(a,b){if("in2"==b.v)a.side="left";else if("in3"==b.v)a.side="right";else throw new Sk.builtin.TypeError("No color sensor connected to "+(b.v+""))}),b.value=new Sk.builtin.func(function(a){return"left"==a.side?sim.robotStates.sensor1:"right"==a.side?sim.robotStates.sensor2:[0,0,0]}),b.valueLAB=new Sk.builtin.func(function(a){var d,b=Math.pow,e=[0,0,0],f=[0,0,0];"left"==a.side?d=[...sim.robotStates.sensor1]:"right"==a.side&&(d=[...sim.robotStates.sensor2]);for(let e,c=0;3>c;c++)e=d[c]/255,d[c]=.04045<e?b((e+.055)/1.055,2.4):e/12.92;e[0]=(.4124*d[0]+.3576*d[1]+.1805*d[2])/.95047,e[1]=(.2126*d[0]+.7152*d[1]+.0722*d[2])/1,e[2]=(.0193*d[0]+.1192*d[1]+.9505*d[2])/1.08883;for(let c=0;3>c;c++)e[c]=.008856<e[c]?b(e[c],1/3):7.787*e[c]+16/116;return f[0]=116*e[1]-16,f[1]=500*(e[0]-e[1]),f[2]=200*(e[1]-e[2]),f}),b.valueHSV=new Sk.builtin.func(function(a){var b,e=[0,0,0];"left"==a.side?b=[...sim.robotStates.sensor1]:"right"==a.side&&(b=[...sim.robotStates.sensor2]);for(let c=0;3>c;c++)b[c]/=255;var f=d(...b),g=c(...b),h=f-g;return e[0]=f==g?0:f==b[0]?60*(b[1]-b[2])/h:f==b[1]?60*(2+(b[2]-b[0])/h):60*(4+(b[0]-b[1])/h),0>e[0]&&(e[0]+=360),e[1]=0==f?0:100*(h/f),e[2]=100*f,e}),b.valueHLS=new Sk.builtin.func(function(a){var e,b=Math.abs,f=[0,0,0];"left"==a.side?e=[...sim.robotStates.sensor1]:"right"==a.side&&(e=[...sim.robotStates.sensor2]);for(let b=0;3>b;b++)e[b]/=255;var g=d(...e),h=c(...e),i=g-h;return f[0]=g==h?0:g==e[0]?60*(e[1]-e[2])/i:g==e[1]?60*(2+(e[2]-e[0])/i):60*(4+(e[0]-e[1])/i),0>f[0]&&(f[0]+=360),f[2]=0==g||255==h?0:100*(i/(1-b(g+h-1))),f[1]=100*((g+h)/2),f})},"ColorSensor",[]),b.GyroSensor=Sk.misceval.buildClass(b,function(b,c){this;c.__init__=new Sk.builtin.func(function(a,b){if("in4"!=b.v)throw new Sk.builtin.TypeError("No gyro sensor connected to "+(b.v+""))}),c.angleAndRate=new Sk.builtin.func(function(){var b=[];return b[0]=a(sim.robotStates.gyro[0]),b[1]=a(sim.robotStates.gyro[1]),b})},"GyroSensor",[]),b.UltrasonicSensor=Sk.misceval.buildClass(b,function(b,c){this;c.__init__=new Sk.builtin.func(function(a,b){if("in1"!=b.v)throw new Sk.builtin.TypeError("No ultrasonic sensor connected to "+(b.v+""))}),c.dist=new Sk.builtin.func(function(){return a(sim.robotStates.ultrasonic)})},"UltrasonicSensor",[]),b.Sound=Sk.misceval.buildClass(b,function(a,b){this;b.__init__=new Sk.builtin.func(function(a){a.volume=1}),b.speak=new Sk.builtin.func(function(a,b){var c=new SpeechSynthesisUtterance(b.v);c.volume=a.volume,speechSynthesis.speak(c)}),b.set_volume=new Sk.builtin.func(function(a,b){a.volume=parseFloat(b.v)/100}),b.get_volume=new Sk.builtin.func(function(a){return a.volume}),b.isSpeaking=new Sk.builtin.func(function(){return speechSynthesis.speaking})},"Sound",[]),b};',"src/lib/filecmp.py":`raise NotImplementedError("filecmp is not yet implemented in Skulpt")
`,"src/lib/fileinput.py":`raise NotImplementedError("fileinput is not yet implemented in Skulpt")
`,"src/lib/fnmatch.py":`raise NotImplementedError("fnmatch is not yet implemented in Skulpt")
`,"src/lib/formatter.py":`raise NotImplementedError("formatter is not yet implemented in Skulpt")
`,"src/lib/fpformat.py":`raise NotImplementedError("fpformat is not yet implemented in Skulpt")
`,"src/lib/fractions.py":`raise NotImplementedError("fractions is not yet implemented in Skulpt")
`,"src/lib/ftplib.py":`raise NotImplementedError("ftplib is not yet implemented in Skulpt")
`,"src/lib/functools.py":`raise NotImplementedError("functools is not yet implemented in Skulpt")
`,"src/lib/genericpath.py":`raise NotImplementedError("genericpath is not yet implemented in Skulpt")
`,"src/lib/getopt.py":`raise NotImplementedError("getopt is not yet implemented in Skulpt")
`,"src/lib/getpass.py":`raise NotImplementedError("getpass is not yet implemented in Skulpt")
`,"src/lib/gettext.py":`raise NotImplementedError("gettext is not yet implemented in Skulpt")
`,"src/lib/glob.py":`raise NotImplementedError("glob is not yet implemented in Skulpt")
`,"src/lib/gzip.py":`raise NotImplementedError("gzip is not yet implemented in Skulpt")
`,"src/lib/hashlib.py":`raise NotImplementedError("hashlib is not yet implemented in Skulpt")
`,"src/lib/heapq.py":`raise NotImplementedError("heapq is not yet implemented in Skulpt")
`,"src/lib/hmac.py":`raise NotImplementedError("hmac is not yet implemented in Skulpt")
`,"src/lib/hotshot/__init__.py":`raise NotImplementedError("hotshot is not yet implemented in Skulpt")
`,"src/lib/htmlentitydefs.py":`raise NotImplementedError("htmlentitydefs is not yet implemented in Skulpt")
`,"src/lib/htmllib.py":`raise NotImplementedError("htmllib is not yet implemented in Skulpt")
`,"src/lib/httplib.py":`raise NotImplementedError("httplib is not yet implemented in Skulpt")
`,"src/lib/idlelib/Icons/__init__.py":`raise NotImplementedError("Icons is not yet implemented in Skulpt")
`,"src/lib/idlelib/__init__.py":`raise NotImplementedError("idlelib is not yet implemented in Skulpt")
`,"src/lib/ihooks.py":`raise NotImplementedError("ihooks is not yet implemented in Skulpt")
`,"src/lib/image.js":'var ImageMod,$builtinmodule;ImageMod||(ImageMod={},ImageMod.canvasLib=[]),$builtinmodule=function(){var a,b,c,d,e,f,g,h={};return h.Image=Sk.misceval.buildClass(h,function(a,b){var c=Math.floor;e=function(a){a.width=a.image.width,a.height=a.image.height,a.delay=0,a.updateCount=0,a.updateInterval=1,a.lastx=0,a.lasty=0,a.canvas=document.createElement("canvas"),a.canvas.height=a.height,a.canvas.width=a.width,a.ctx=a.canvas.getContext("2d"),a.ctx.drawImage(a.image,0,0),a.imagedata=a.ctx.getImageData(0,0,a.width,a.height)},b.__init__=new Sk.builtin.func(function(a,b){var c;Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,2);try{a.image=document.getElementById(Sk.ffi.remapToJs(b)),e(a)}catch(b){a.image=null}if(null==a.image)return c=new Sk.misceval.Suspension,c.resume=function(){if(c.data.error)throw new Sk.builtin.IOError(c.data.error.message)},c.data={type:"Sk.promise",promise:new Promise(function(c,d){var f=new Image;f.crossOrigin="",f.onerror=function(){d(Error("Failed to load URL: "+f.src))},f.onload=function(){a.image=this,e(a),c()},f.src=g(b)})},c}),g=function(a){var b,c,d="function"==typeof Sk.imageProxy?Sk.imageProxy:function(a){return b=document.createElement("a"),b.href=c,window.location.host===b.host?a:Sk.imageProxy+"/"+a};return c=Sk.ffi.remapToJs(a),c=d(c),c},f=function(a,b,c){if(0>b||0>c||b>=a.width||c>=a.height)throw new Sk.builtin.ValueError("Pixel index out of range.")};var i=function(a,b,c){var d;Sk.builtin.pyCheckArgsLen("setdelay",arguments.length,2,3),a.delay=Sk.ffi.remapToJs(b),d=Sk.builtin.asnum$(c),a.updateInterval=d?d:1};b.set_delay=new Sk.builtin.func(i),b.setDelay=new Sk.builtin.func(i);var j=function(a){var b,d=[];for(Sk.builtin.pyCheckArgsLen("getpixels",arguments.length,1,1),b=0;b<a.image.height*a.image.width;b++)d[b]=Sk.misceval.callsimArray(a.getPixel,[a,b%a.image.width,c(b/a.image.width)]);return new Sk.builtin.tuple(d)};b.get_pixels=new Sk.builtin.func(j),b.getPixels=new Sk.builtin.func(j),b.getData=new Sk.builtin.func(function(a){var b,d,e,g,h,j,k,l=[];for(Sk.builtin.pyCheckArgsLen("getData",arguments.length,1,1),b=0;b<a.image.height*a.image.width;b++)d=b%a.image.width,e=c(b/a.image.width),f(a,d,e),k=4*e*a.width+4*d,g=a.imagedata.data[k],h=a.imagedata.data[k+1],j=a.imagedata.data[k+2],l[b]=new Sk.builtin.tuple([new Sk.builtin.int_(g),new Sk.builtin.int_(h),new Sk.builtin.int_(j)]);return new Sk.builtin.list(l)});var k=function(a,b,c){var d,e,g,i;return Sk.builtin.pyCheckArgsLen("getpixel",arguments.length,3,3),b=Sk.builtin.asnum$(b),c=Sk.builtin.asnum$(c),f(a,b,c),i=4*c*a.width+4*b,d=a.imagedata.data[i],g=a.imagedata.data[i+1],e=a.imagedata.data[i+2],Sk.misceval.callsimArray(h.Pixel,[d,g,e,b,c])};b.get_pixel=new Sk.builtin.func(k),b.getPixel=new Sk.builtin.func(k),d=function(a,b,c){var d=new Sk.misceval.Suspension;return d.resume=function(){return Sk.builtin.none.none$},d.data={type:"Sk.promise",promise:new Promise(function(d){var e=Math.max,f=Math.abs,g=Math.min;a.updateCount++,0==a.updateCount%a.updateInterval?(a.lastx+a.updateInterval>=a.width?a.lastCtx.putImageData(a.imagedata,a.lastUlx,a.lastUly,0,a.lasty,a.width,2):a.lasty+a.updateInterval>=a.height?a.lastCtx.putImageData(a.imagedata,a.lastUlx,a.lastUly,a.lastx,0,2,a.height):a.lastCtx.putImageData(a.imagedata,a.lastUlx,a.lastUly,g(b,a.lastx),g(c,a.lasty),e(f(b-a.lastx),1),e(f(c-a.lasty),1)),a.lastx=b,a.lasty=c,0<a.delay?window.setTimeout(d,a.delay):d()):d()})},d};var l=function(a,b,c,e){var g;return Sk.builtin.pyCheckArgsLen("setpixel",arguments.length,4,4),b=Sk.builtin.asnum$(b),c=Sk.builtin.asnum$(c),f(a,b,c),g=4*c*a.width+4*b,a.imagedata.data[g]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getRed,[e])),a.imagedata.data[g+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getGreen,[e])),a.imagedata.data[g+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getBlue,[e])),a.imagedata.data[g+3]=255,d(a,b,c)};b.set_pixel=new Sk.builtin.func(l),b.setPixel=new Sk.builtin.func(l);var m=function(a,b,e){var g,h,i;return Sk.builtin.pyCheckArgsLen("setpixelat",arguments.length,3,3),b=Sk.builtin.asnum$(b),g=b%a.image.width,h=c(b/a.image.width),f(a,g,h),i=4*h*a.width+4*g,a.imagedata.data[i]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getRed,[e])),a.imagedata.data[i+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getGreen,[e])),a.imagedata.data[i+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getBlue,[e])),a.imagedata.data[i+3]=255,d(a,g,h)};b.set_pixel_at=new Sk.builtin.func(m),b.setPixelAt=new Sk.builtin.func(m);var n=function(a,b){var c,e,g;return Sk.builtin.pyCheckArgsLen("updatepixel",arguments.length,2,2),c=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getX,[b])),e=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getY,[b])),f(a,c,e),g=4*e*a.width+4*c,a.imagedata.data[g]=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getRed,[b])),a.imagedata.data[g+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getGreen,[b])),a.imagedata.data[g+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getBlue,[b])),a.imagedata.data[g+3]=255,d(a,c,e)};b.update_pixel=new Sk.builtin.func(n),b.updatePixel=new Sk.builtin.func(n);var o=function(a){return Sk.builtin.pyCheckArgsLen("getheight",arguments.length,1,1),new Sk.builtin.int_(a.height)};b.get_height=new Sk.builtin.func(o),b.getHeight=new Sk.builtin.func(o);var p=function(a){return Sk.builtin.pyCheckArgsLen("getwidth",arguments.length,1,1),new Sk.builtin.int_(a.width)};b.get_width=new Sk.builtin.func(p),b.getWidth=new Sk.builtin.func(p),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"height"===b)?Sk.builtin.assk$(a.height):"width"===b?Sk.builtin.assk$(a.width):void 0}),b.__setattr__=new Sk.builtin.func(function(a,b){if(b=Sk.ffi.remapToJs(b),"height"===b||"width"===b)throw new Sk.builtin.Exception("Cannot change height or width they can only be set on creation");else throw new Sk.builtin.Exception("Unknown attribute: "+b)}),b.draw=new Sk.builtin.func(function(a,b,c,d){var e;return Sk.builtin.pyCheckArgsLen("draw",arguments.length,2,4),e=new Sk.misceval.Suspension,e.resume=function(){return Sk.builtin.none.none$},e.data={type:"Sk.promise",promise:new Promise(function(e){var f,g;b=Sk.builtin.asnum$(b),c=Sk.builtin.asnum$(c),d=Sk.builtin.asnum$(d),f=Sk.misceval.callsimArray(b.getWin,[b]),g=f.getContext("2d"),void 0===c&&(c=0,d=0),a.lastUlx=c,a.lastUly=d,a.lastCtx=g,g.putImageData(a.imagedata,c,d),0<a.delay?window.setTimeout(e,a.delay):window.setTimeout(e,200)})},e})},"Image",[]),c=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c){Sk.builtin.pyCheckArgsLen("__init__",arguments.length,3,3),a.width=Sk.builtin.asnum$(b),a.height=Sk.builtin.asnum$(c),a.canvas=document.createElement("canvas"),a.ctx=a.canvas.getContext("2d"),a.canvas.height=a.height,a.canvas.width=a.width,a.imagedata=a.ctx.getImageData(0,0,a.width,a.height)})},h.EmptyImage=Sk.misceval.buildClass(h,c,"EmptyImage",[h.Image]),b=function(a,b){b.__init__=new Sk.builtin.func(function(a,c,d,e,b,f){Sk.builtin.pyCheckArgsLen("__init__",arguments.length,4,6),a.red=Sk.builtin.asnum$(c),a.green=Sk.builtin.asnum$(d),a.blue=Sk.builtin.asnum$(e),a.x=Sk.builtin.asnum$(b),a.y=Sk.builtin.asnum$(f)});var c=function(a){return Sk.builtin.pyCheckArgsLen("getred",arguments.length,1,1),Sk.builtin.assk$(a.red)};b.get_red=new Sk.builtin.func(c),b.getRed=new Sk.builtin.func(c);var d=function(a){return Sk.builtin.pyCheckArgsLen("getgreen",arguments.length,1,1),Sk.builtin.assk$(a.green)};b.get_green=new Sk.builtin.func(d),b.getGreen=new Sk.builtin.func(d);var e=function(a){return Sk.builtin.pyCheckArgsLen("getblue",arguments.length,1,1),Sk.builtin.assk$(a.blue)};b.get_blue=new Sk.builtin.func(e),b.getBlue=new Sk.builtin.func(e);var f=function(a){return Sk.builtin.pyCheckArgsLen("getx",arguments.length,1,1),Sk.builtin.assk$(a.x)};b.get_x=new Sk.builtin.func(f),b.getX=new Sk.builtin.func(f);var g=function(a){return Sk.builtin.pyCheckArgsLen("gety",arguments.length,1,1),Sk.builtin.assk$(a.y)};b.get_y=new Sk.builtin.func(g),b.getY=new Sk.builtin.func(g);var h=function(a,b){Sk.builtin.pyCheckArgsLen("setred",arguments.length,2,2),a.red=Sk.builtin.asnum$(b)};b.set_red=new Sk.builtin.func(h),b.setRed=new Sk.builtin.func(h);var i=function(a,b){Sk.builtin.pyCheckArgsLen("setgreen",arguments.length,2,2),a.green=Sk.builtin.asnum$(b)};b.set_green=new Sk.builtin.func(i),b.setGreen=new Sk.builtin.func(i);var j=function(a,c){Sk.builtin.pyCheckArgsLen("setblue",arguments.length,2,2),a.blue=Sk.builtin.asnum$(c)};b.set_blue=new Sk.builtin.func(j),b.setBlue=new Sk.builtin.func(j),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"red"===b)?Sk.builtin.assk$(a.red):"green"===b?Sk.builtin.assk$(a.green):"blue"===b?Sk.builtin.assk$(a.blue):void 0}),b.__setattr__=new Sk.builtin.func(function(a,b,c){b=Sk.ffi.remapToJs(b),("red"===b||"green"===b||"blue"===b)&&(a[b]=Sk.builtin.asnum$(c))});var k=function(a,b){Sk.builtin.pyCheckArgsLen("setx",arguments.length,2,2),a.x=Sk.builtin.asnum$(b)};b.set_x=new Sk.builtin.func(k),b.setX=new Sk.builtin.func(k);var l=function(a,b){Sk.builtin.pyCheckArgsLen("sety",arguments.length,2,2),a.y=Sk.builtin.asnum$(b)};b.set_y=new Sk.builtin.func(l),b.setY=new Sk.builtin.func(l),b.__getitem__=new Sk.builtin.func(function(a,b){return(b=Sk.builtin.asnum$(b),0===b)?a.red:1==b?a.green:2==b?a.blue:void 0}),b.__str__=new Sk.builtin.func(function(a){return Sk.ffi.remapToPy("["+a.red+","+a.green+","+a.blue+"]")}),b.getColorTuple=new Sk.builtin.func(function(){}),b.setRange=new Sk.builtin.func(function(a,b){a.max=Sk.builtin.asnum$(b)})},h.Pixel=Sk.misceval.buildClass(h,b,"Pixel",[]),a=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c){var d,e,f;Sk.builtin.pyCheckArgsLen("__init__",arguments.length,1,3),d=ImageMod.canvasLib[Sk.canvas],void 0===d?(e=document.createElement("canvas"),f=document.getElementById(Sk.canvas),a.theScreen=e,f.appendChild(e),ImageMod.canvasLib[Sk.canvas]=e,ImageMod.canvasLib[Sk.canvas]=a.theScreen):(a.theScreen=d,a.theScreen.height=a.theScreen.height),void 0===b?(Sk.availableHeight&&(a.theScreen.height=Sk.availableHeight),Sk.availableWidth&&(a.theScreen.width=Sk.availableWidth)):(a.theScreen.height=c.v,a.theScreen.width=b.v),a.theScreen.style.display="block"}),b.getWin=new Sk.builtin.func(function(a){return a.theScreen}),b.exitonclick=new Sk.builtin.func(function(a){var b=a.theScreen.id;a.theScreen.onclick=function(){document.getElementById(b).style.display="none",document.getElementById(b).onclick=null,delete ImageMod.canvasLib[b]}})},h.ImageWin=Sk.misceval.buildClass(h,a,"ImageWin",[]),h};',"src/lib/imaplib.py":`raise NotImplementedError("imaplib is not yet implemented in Skulpt")
`,"src/lib/imghdr.py":`raise NotImplementedError("imghdr is not yet implemented in Skulpt")
`,"src/lib/imputil.py":`raise NotImplementedError("imputil is not yet implemented in Skulpt")
`,"src/lib/io.py":`raise NotImplementedError("io is not yet implemented in Skulpt")
`,"src/lib/itertools.js":`Sk.builtin.itertools_gen=function(a,b,c,d,e){Sk.builtin.generator.call(this,a,b,c,d,e)},Sk.builtin.itertools_gen.prototype=Object.create(Sk.builtin.generator.prototype),Sk.builtin.itertools_gen.prototype.$r=function(){return new Sk.builtin.str("<itertools."+this.func_code.co_name.v+" object>")},Sk.builtin.itertools_repeat=function(a,b,c,d,e){Sk.builtin.generator.call(this,a,b,c,d,e)},Sk.builtin.itertools_repeat.prototype=Object.create(Sk.builtin.generator.prototype),Sk.builtin.itertools_repeat.prototype.$r=function(){return object_repr=this.gi$locals.object.$r().$jsstr(),times=this.gi$locals.times,times_repr=void 0===times?"":", "+times,new Sk.builtin.str(this.func_code.co_name.v+"("+object_repr+times_repr+")")},Sk.builtin.itertools_count=function(a,b,c,d,e){Sk.builtin.generator.call(this,a,b,c,d,e)},Sk.builtin.itertools_count.prototype=Object.create(Sk.builtin.generator.prototype),Sk.builtin.itertools_count.prototype.$r=function(){return start_repr=this.gi$locals.n.$r().$jsstr(),step_repr=this.gi$locals.step.$r().$jsstr(),step_repr="1"===step_repr?"":", "+step_repr,new Sk.builtin.str(this.func_code.co_name.v+"("+start_repr+step_repr+")")};var $builtinmodule=function(){var a={},b=function(a){const b=a.gi$locals.it,c=a.gi$locals.func;let d=a.gi$locals.total;const e=a.gi$locals.initial;return e?(d=Sk.builtin.checkNone(d)?b.tp$iternext():d,a.gi$locals.total=d,a.gi$locals.initial=!1,[,d]):(element=b.tp$iternext(),void 0===element?[,]:(d=c.tp$call?c.tp$call([d,element],void 0):Sk.misceval.applyOrSuspend(c,void 0,void 0,void 0,[d,element]),a.gi$locals.total=d,[,d]))},c=function(c,d,e){Sk.builtin.pyCheckArgsLen("accumulate",arguments.length,1,3,!0);const f=Sk.abstr.iter(c);return new Sk.builtin.itertools_gen(b,a,[f,d,e,!0])};const d=new Sk.builtin.func(function(c,a){return Sk.abstr.numberBinOp(c,a,"Add")});b.co_name=new Sk.builtin.str("accumulate"),b.co_varnames=["it","func","total","initial"],c.$defaults=[d],c.co_name=new Sk.builtin.str("accumulate"),c.co_argcount=2,c.co_kwonlyargcount=1,c.$kwdefs=[Sk.builtin.none.none$],c.co_varnames=["iterable","func","initial"],a.accumulate=new Sk.builtin.func(c),_chain_gen=function(a){const b=a.gi$locals.iterables;let c,d=a.gi$locals.current_it,e=a.gi$locals.made_iter;for(;void 0===c;){if(void 0===d)return[,];e||(d=Sk.abstr.iter(d),e=!0),c=d.tp$iternext(),void 0===c&&(d=b.tp$iternext(),e=!1)}return a.gi$locals.current_it=d,a.gi$locals.made_iter=e,[,c]},_chain=function(){let b=Array.from(arguments);b=Sk.abstr.iter(Sk.builtin.list(b));const c=b.tp$iternext();return new Sk.builtin.itertools_gen(_chain_gen,a,[b,c])},_chain_from_iterable=function(b){Sk.builtin.pyCheckArgsLen("from_iterable",arguments.length,1,1),b=Sk.abstr.iter(b);const c=b.tp$iternext();return new Sk.builtin.itertools_gen(_chain_gen,a,[b,c])},Sk.builtin.chain_func=function(a){Sk.builtin.func.call(this,a),this.$d.from_iterable=new Sk.builtin.func(_chain_from_iterable)},Sk.builtin.chain_func.prototype=Object.create(Sk.builtin.func.prototype),_chain_from_iterable.co_name=new Sk.builtin.str("from_iterable"),_chain.co_name=new Sk.builtin.str("chain"),_chain_gen.co_name=new Sk.builtin.str("chain"),_chain_gen.co_varnames=["iterables","current_it"],a.chain=new Sk.builtin.chain_func(_chain);var e=function(a){const b=a.gi$locals.indices,c=a.gi$locals.pool,d=a.gi$locals.n,e=a.gi$locals.r,f=a.gi$locals.initial;if(e>d)return[,];if(void 0===f)return a.gi$locals.initial=!1,[,Sk.builtin.tuple(c.slice(0,e))];let g,h=!1;for(g=e-1;0<=g;g--)if(b[g]!=g+d-e){h=!0;break}if(!h)return a.gi$locals.r=0,[,];b[g]++;for(let c=g+1;c<e;c++)b[c]=b[c-1]+1;const k=b.map(a=>c[a]);return[,Sk.builtin.tuple(k)]},f=function(b,c){if(Sk.builtin.pyCheckArgsLen("combinations",arguments.length,2,2),!Sk.builtin.checkIterable(b))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(b)+"' object is not iterable");if(Sk.builtin.pyCheckType("r","int",Sk.builtin.checkInt(c)),pool=Sk.builtin.tuple(b).v,n=pool.length,c=Sk.builtin.asnum$(c),0>c)throw new Sk.builtin.ValueError("r must be non-negative");return indices=Array(c).fill().map((a,b)=>b),new Sk.builtin.itertools_gen(e,a,[indices,pool,n,c])};e.co_name=new Sk.builtin.str("combinations"),e.co_varnames=["indices","pool","n","r"],f.co_name=new Sk.builtin.str("combinations"),f.co_varnames=["iterable","r"],a.combinations=new Sk.builtin.func(f);var g=function(a){const b=a.gi$locals.indices,c=a.gi$locals.pool,d=a.gi$locals.n,e=a.gi$locals.r,f=a.gi$locals.initial;if(e&&!d)return[,];if(void 0===f){const d=b.map(a=>c[a]);return a.gi$locals.initial=!1,[,Sk.builtin.tuple(d)]}let g,h=!1;for(g=e-1;0<=g;g--)if(b[g]!=d-1){h=!0;break}if(!h)return a.gi$locals.r=0,[,];const k=b[g]+1;for(let c=g;c<e;c++)b[c]=k;const l=b.map(a=>c[a]);return[,Sk.builtin.tuple(l)]},h=function(b,c){if(Sk.builtin.pyCheckArgsLen("combinations",arguments.length,2,2),!Sk.builtin.checkIterable(b))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(b)+"' object is not iterable");Sk.builtin.pyCheckType("r","int",Sk.builtin.checkInt(c));const d=Sk.builtin.tuple(b).v,e=d.length;if(c=Sk.builtin.asnum$(c),0>c)throw new Sk.builtin.ValueError("r must be non-negative");const f=Array(c).fill(0);return new Sk.builtin.itertools_gen(g,a,[f,d,e,c])};g.co_name=new Sk.builtin.str("combinations_with_replacement"),g.co_varnames=["indices","pool","n","r"],h.co_name=new Sk.builtin.str("combinations_with_replacement"),h.co_varnames=["iterable","r"],a.combinations_with_replacement=new Sk.builtin.func(h),_compress_gen=function(a){const b=a.gi$locals.data,c=a.gi$locals.selectors;let e=b.tp$iternext(),f=c.tp$iternext();for(;void 0!==e&&void 0!==f;){if(Sk.misceval.isTrue(f))return[,e];e=b.tp$iternext(),f=c.tp$iternext()}return[,]},_compress=function(b,c){return Sk.builtin.pyCheckArgsLen("compress",arguments.length,2,2),b=Sk.abstr.iter(b),c=Sk.abstr.iter(c),new Sk.builtin.itertools_gen(_compress_gen,a,[b,c])},_compress_gen.co_name=new Sk.builtin.str("compress"),_compress_gen.co_varnames=["data","selectors"],_compress.co_name=new Sk.builtin.str("compress"),_compress.co_varnames=["data","selectors"],a.compress=new Sk.builtin.func(_compress);var i=function(a){const b=a.gi$locals.n,c=a.gi$locals.step;try{return[,b]}finally{a.gi$locals.n=Sk.abstr.numberInplaceBinOp(b,c,"Add")}},k=function(b,c){if(Sk.builtin.pyCheckArgsLen("count",arguments.length,0,2),!Sk.builtin.checkNumber(b)&&!Sk.builtin.checkComplex(b))throw new Sk.builtin.TypeError("a number is required");if(!Sk.builtin.checkNumber(c)&&!Sk.builtin.checkComplex(c))throw new Sk.builtin.TypeError("a number is required");return new Sk.builtin.itertools_count(i,a,[b,c])};k.co_name=new Sk.builtin.str("count"),k.$defaults=[new Sk.builtin.int_(0),new Sk.builtin.int_(1)],k.co_varnames=["start","step"],i.co_name=new Sk.builtin.str("count"),i.co_varnames=["n","step"],a.count=new Sk.builtin.func(k);var l=function(a){let b,c,d;return b=a.gi$locals.iter,c=a.gi$locals.saved,d=b.tp$iternext(),void 0===d?c.length?(d=c.shift(),c.push(d),[,d]):[,]:(c.push(d),[,d])},m=function(b){Sk.builtin.pyCheckArgsLen("cycle",arguments.length,1,1),b=Sk.abstr.iter(b);return new Sk.builtin.itertools_gen(l,a,[b,[]])};m.co_name=new Sk.builtin.str("cycle"),l.co_name=new Sk.builtin.str("cycle"),l.co_varnames=["iter","saved"],a.cycle=new Sk.builtin.func(m);var o=function(a){const b=a.gi$locals.predicate,c=a.gi$locals.it,d=a.gi$locals.passed;let e=c.tp$iternext();for(;void 0===d&&void 0!==e;){const d=b.tp$call?b.tp$call([e],void 0):Sk.misceval.applyOrSuspend(b,void 0,void 0,void 0,[e]);if(!Sk.misceval.isTrue(d))return a.gi$locals.passed=!0,[,e];e=c.tp$iternext()}return[,e]};_dropwhile=function(b,c){Sk.builtin.pyCheckArgsLen("dropwhile",arguments.length,2,2);const d=Sk.abstr.iter(c);return new Sk.builtin.itertools_gen(o,a,[b,d])},o.co_name=new Sk.builtin.str("dropwhile"),o.co_varnames=["predicate","it"],_dropwhile.co_name=new Sk.builtin.str("dropwhile"),_dropwhile.co_varnames=["predicate","iterable"],a.dropwhile=new Sk.builtin.func(_dropwhile);var p=function(a){const b=a.gi$locals.predicate;let c=a.gi$locals.it;const d=a.gi$locals.initial;void 0===d&&(a.gi$locals.it=Sk.abstr.iter(c),c=a.gi$locals.it,a.gi$locals.initial=!1);let e=c.tp$iternext();if(void 0===e)return[,];for(let d=b.tp$call?b.tp$call([e],void 0):Sk.misceval.applyOrSuspend(b,void 0,void 0,void 0,[e]);Sk.misceval.isTrue(d);){if(e=c.tp$iternext(),void 0===e)return[,];d=b.tp$call?b.tp$call([e],void 0):Sk.misceval.applyOrSuspend(b,void 0,void 0,void 0,[e])}return[,e]};_filterfalse=function(b,c){if(Sk.builtin.pyCheckArgsLen("filterfalse",arguments.length,2,2),!Sk.builtin.checkIterable(c))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(c)+"' object is not iterable");return b=Sk.builtin.checkNone(b)?Sk.builtin.bool:b,new Sk.builtin.itertools_gen(p,a,[b,c])},p.co_name=new Sk.builtin.str("filterfalse"),p.co_varnames=["predicate","it"],_filterfalse.co_name=new Sk.builtin.str("filterfalse"),_filterfalse.co_varnames=["predicate","iterable"],a.filterfalse=new Sk.builtin.func(_filterfalse),_grouper=function(a){const b=a.gi$locals.groupby_gen,c=a.gi$locals.tgtkey,d=a.gi$locals.id;let e=b.gi$locals.currval,f=b.gi$locals.currkey;const g=b.gi$locals.keyfunc,h=b.gi$locals.it,i=b.gi$locals.id,k=Sk.misceval.richCompareBool(f,c,"Eq",!0);if(i===d&&k)try{return[,e]}finally{e=h.tp$iternext(),void 0!==e&&(f=g.tp$call?g.tp$call([e],void 0):Sk.misceval.applyOrSuspend(g,void 0,void 0,void 0,[e])),b.gi$locals.currkey=f,b.gi$locals.currval=e}return[,]},_groupby_gen=function(b){const c=b.gi$locals.tgtkey;let d=b.gi$locals.currval,e=b.gi$locals.currkey;const f=b.gi$locals.keyfunc,g=b.gi$locals.it;b.gi$locals.id={};for(let a=Sk.misceval.richCompareBool(e,c,"Eq",!0);a;){if(d=g.tp$iternext(),void 0===d)return[,];e=f.tp$call?f.tp$call([d],void 0):Sk.misceval.applyOrSuspend(f,void 0,void 0,void 0,[d]),a=Sk.misceval.richCompareBool(e,c,"Eq",!0)}b.gi$locals.tgtkey=b.gi$locals.currkey=e,b.gi$locals.currval=d;const h=new Sk.builtin.itertools_gen(_grouper,a,[b,b.gi$locals.tgtkey,b.gi$locals.id]);return[,Sk.builtin.tuple([e,h])]},_groupby=function(b,c){Sk.builtin.pyCheckArgsLen("groupby",arguments.length,1,2),b=Sk.abstr.iter(b),Sk.builtin.checkNone(c)&&(c=new Sk.builtin.func(function(a){return a}));const d=currkey=tgtkey=Sk.builtin.object();return new Sk.builtin.itertools_gen(_groupby_gen,a,[b,c,d,currkey,tgtkey])},_groupby_gen.co_name=new Sk.builtins.str("groupby"),_groupby_gen.co_varnames=["it","keyfunc","currval","currkey","tgtkey"],_groupby.co_name=new Sk.builtins.str("groupby"),_groupby.$defaults=[Sk.builtin.none.none$],_groupby.co_varnames=["iterable","key"],_grouper.co_name=new Sk.builtins.str("_grouper"),_grouper.co_varnames=["groupby_gen","tgtkey","id"],a.groupby=new Sk.builtin.func(_groupby);var q=function(a){let b,c,d,e,f;if(b=a.gi$locals.iter,c=a.gi$locals.previt,d=a.gi$locals.stop,e=a.gi$locals.step,f=a.gi$locals.initial,void 0===f){if(a.gi$locals.initial=!1,c>=d){for(let a=0;a<d;a++)b.tp$iternext();return[,]}for(let a=0;a<c;a++)b.tp$iternext();return[,b.tp$iternext()]}if(c+e>=d){for(let f=c+1;f<d;f++)a.gi$locals.previt=c+e,b.tp$iternext();return[,]}for(let d=c+1;d<c+e;d++)b.tp$iternext();return a.gi$locals.previt=c+e,[,b.tp$iternext()]},r=function(b,c,d,e){var f=Number.MAX_SAFE_INTEGER;if(Sk.builtin.pyCheckArgsLen("islice",arguments.length,2,4),b=Sk.abstr.iter(b),void 0===d?(d=c,c=Sk.builtin.none.none$,e=Sk.builtin.none.none$):void 0===e&&(e=Sk.builtin.none.none$),!(Sk.builtin.checkNone(d)||Sk.misceval.isIndex(d)))throw new Sk.builtin.ValueError("Stop for islice() must be None or an integer: 0 <= x <= sys.maxsize.");else if(d=Sk.builtin.checkNone(d)?f:Sk.misceval.asIndex(d),0>d||d>f)throw new Sk.builtin.ValueError("Stop for islice() must be None or an integer: 0 <= x <= sys.maxsize.");if(!(Sk.builtin.checkNone(c)||Sk.misceval.isIndex(c)))throw new Sk.builtin.ValueError("Indices for islice() must be None or an integer: 0 <= x <= sys.maxsize.");else if(c=Sk.builtin.checkNone(c)?0:Sk.misceval.asIndex(c),0>c||c>f)throw new Sk.builtin.ValueError("Indices for islice() must be None or an integer: 0 <= x <= sys.maxsize.");if(!(Sk.builtin.checkNone(e)||Sk.misceval.isIndex(e)))throw new Sk.builtin.ValueError("Step for islice() must be a positive integer or None");else if(e=Sk.builtin.checkNone(e)?1:Sk.misceval.asIndex(e),0>=e||e>f)throw new Sk.builtin.ValueError("Step for islice() must be a positive integer or None.");const g=c;return new Sk.builtin.itertools_gen(q,a,[b,g,d,e])};q.co_varnames=["iter","previt","stop","step"],q.co_name=new Sk.builtin.str("islice"),r.co_name=new Sk.builtin.str("islice"),a.islice=new Sk.builtin.func(r);var s=function(a){const b=a.gi$locals.indices,c=a.gi$locals.cycles,d=a.gi$locals.pool,e=a.gi$locals.n,f=a.gi$locals.r,g=a.gi$locals.initial;if(f>e)return[,];if(void 0===g)return a.gi$locals.initial=!1,[,Sk.builtin.tuple(d.slice(0,f))];for(let g=f-1;0<=g;g--)if(c[g]--,0==c[g])b.push(b.splice(g,1)[0]),c[g]=e-g;else{j=c[g],[b[g],b[e-j]]=[b[e-j],b[g]];const a=b.map(a=>d[a]).slice(0,f);return[,Sk.builtin.tuple(a)]}return a.gi$locals.r=0,[,]},t=function(b,c){if(Sk.builtin.pyCheckArgsLen("permutations",arguments.length,1,2),!Sk.builtin.checkIterable(b))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(b)+"' object is not iterable");const d=Sk.builtin.tuple(b).v,e=d.length;if(c=Sk.builtin.checkNone(c)?Sk.builtin.int_(e):c,Sk.builtin.pyCheckType("r","int",Sk.builtin.checkInt(c)),c=Sk.builtin.asnum$(c),0>c)throw new Sk.builtin.ValueError("r must be non-negative");const f=Array(e).fill().map((a,b)=>b),g=Array(c).fill().map((a,b)=>e-b);return new Sk.builtin.itertools_gen(s,a,[f,g,d,e,c])};s.co_name=new Sk.builtin.str("permutations"),s.co_varnames=["indices","cycles","pool","n","r"],t.co_name=new Sk.builtin.str("permutations"),t.co_varnames=["iterable","r"],t.$defaults=[Sk.builtin.none.none$],a.permutations=new Sk.builtin.func(t);var u=function(a){const b=a.gi$locals.pools,c=a.gi$locals.pool_sizes,d=a.gi$locals.n,e=a.gi$locals.indices,f=a.gi$locals.initial;if(void 0===f){a.gi$locals.initial=!1;const c=e.map((a,c)=>b[c][e[c]]);return c.some(a=>void 0===a)?(a.gi$locals.n=0,[,]):[,Sk.builtin.tuple(c)]}for(let b=d-1;0<=b&&b<d;)e[b]++,e[b]>=c[b]?(e[b]=-1,b--):b++;if(!d||e.every(a=>-1===a))return a.gi$locals.n=0,[,];else{const a=e.map((a,c)=>b[c][e[c]]);return[,Sk.builtin.tuple(a)]}},v=function(b,c){if(Sk.builtin.pyCheckArgsLen("product",arguments.length,0,1/0,!0),Sk.builtin.pyCheckType("repeat","integer",Sk.builtin.checkInt(b)),b=Sk.builtin.asnum$(b),0>b)throw new Sk.builtin.ValueError("repeat argument cannot be negative");c=c.v;for(let a=0;a<c.length;a++){if(!Sk.builtin.checkIterable(c[a]))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(c[a])+"' object is not iterable");c[a]=Sk.builtin.tuple(c[a]).v}const d=[].concat(...Array(b).fill(c)),e=d.length,f=d.map(a=>a.length),g=Array(e).fill(0);return new Sk.builtin.itertools_gen(u,a,[d,f,e,g])};u.co_name=new Sk.builtin.str("product"),u.co_varnames=["pools","pool_sizes","n","indices"],v.co_name=new Sk.builtin.str("product"),v.co_kwonlyargcount=1,v.co_argcount=0,v.co_varnames=["repeat"],v.co_varargs=1,v.$kwdefs=[Sk.builtin.int_(1)],a.product=new Sk.builtin.func(v);var w=function(a){const b=a.gi$locals.times,c=a.gi$locals.object;return void 0===b?[,c]:0<b?(a.gi$locals.times=b-1,[,c]):[,]},x=function(b,c){return Sk.builtin.pyCheckArgsLen("repeat",arguments.length,1,2),Sk.builtin.checkNone(c)?c=void 0:(Sk.builtin.pyCheckType("times","integer",Sk.builtin.checkInt(c)),c=Sk.builtin.asnum$(c),c=0>c?0:c),new Sk.builtin.itertools_repeat(w,a,[b,c])};w.co_varnames=["object","times"],w.co_name=new Sk.builtin.str("repeat"),x.co_varnames=["object","times"],x.co_name=new Sk.builtin.str("repeat"),x.$defaults=[Sk.builtin.none.none$],a.repeat=new Sk.builtin.func(x);var y=function(a){const b=a.gi$locals.func,c=a.gi$locals.it,d=[],e=c.tp$iternext();if(void 0===e)return[,];Sk.misceval.iterFor(Sk.abstr.iter(e),function(a){d.push(a)});const f=b.tp$call?b.tp$call(d,void 0):Sk.misceval.applyOrSuspend(b,void 0,void 0,void 0,d);return[,f]};_starmap=function(b,c){return Sk.builtin.pyCheckArgsLen("starmap",arguments.length,2,2),it=Sk.abstr.iter(c),b=Sk.builtin.checkNone(b)?Sk.builtin.bool:b,new Sk.builtin.itertools_gen(y,a,[b,it])},y.co_name=new Sk.builtin.str("starmap"),y.co_varnames=["func","it"],_starmap.co_name=new Sk.builtin.str("starmap"),_starmap.co_varnames=["func","iterable"],a.starmap=new Sk.builtin.func(_starmap);var z=function(a){const b=a.gi$locals.predicate,c=a.gi$locals.it,d=a.gi$locals.failed;let e=c.tp$iternext();if(void 0===d&&void 0!==e){const c=b.tp$call?b.tp$call([e],void 0):Sk.misceval.applyOrSuspend(b,void 0,void 0,void 0,[e]);if(Sk.misceval.isTrue(c))return[,e];a.gi$locals.failed=!0}return[,]};return _takewhile=function(b,c){return Sk.builtin.pyCheckArgsLen("takewhile",arguments.length,2,2),it=Sk.abstr.iter(c),new Sk.builtin.itertools_gen(z,a,[b,it])},z.co_name=new Sk.builtin.str("takewhile"),z.co_varnames=["predicate","it"],_takewhile.co_name=new Sk.builtin.str("takewhile"),_takewhile.co_varnames=["predicate","iterable"],a.takewhile=new Sk.builtin.func(_takewhile),a.tee=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("tee is not yet implemented in Skulpt")}),_zip_longest_gen=function(a){const b=a.gi$locals.its;let c=a.gi$locals.active;const d=a.gi$locals.fillvalue;if(!c)return[,];values=[];for(let e=0;e<b.length;e++){if(val=b[e].tp$iternext(),void 0===val){if(c--,a.gi$locals.active=c,!c)return[,];b[e]=x(d,Sk.builtin.none.none$),val=d}values.push(val)}return[,Sk.builtin.tuple(values)]},_zip_longest=function(b,c){Sk.builtin.pyCheckArgsLen("zip_longest",arguments.length,0,1/0),c=c.v;for(let a=0;a<c.length;a++){const b=c[a];if(!Sk.builtin.checkIterable(b))throw new Sk.builtin.TypeError("zip_longest argument #"+a+" must support iteration");c[a]=Sk.abstr.iter(b)}const d=c.length;return new Sk.builtin.itertools_gen(_zip_longest_gen,a,[c,d,b])},_zip_longest_gen.co_name=new Sk.builtin.str("zip_longest"),_zip_longest_gen.co_varnames=["its","active","fillvalue"],_zip_longest.co_name=new Sk.builtin.str("zip_longest"),_zip_longest.co_argcount=0,_zip_longest.co_kwonlyargcount=1,_zip_longest.$kwdefs=[Sk.builtin.none.none$],_zip_longest.co_varnames=["fillvalue"],_zip_longest.co_varargs=1,a.zip_longest=new Sk.builtin.func(_zip_longest),a.__doc__=new Sk.builtin.str("An implementation of the python itertools module in Skulpt"),a.__package__=new Sk.builtin.str(""),a};`,"src/lib/json/__init__.py":`raise NotImplementedError("json is not yet implemented in Skulpt")
`,"src/lib/json/tests/__init__.py":`raise NotImplementedError("tests is not yet implemented in Skulpt")
`,"src/lib/keyword.py":`
__all__ = ["iskeyword", "kwlist"]

kwlist = [
#--start keywords--
        'and',
        'as',
        'assert',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'exec',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'not',
        'or',
        'pass',
        'print',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield',
#--end keywords--
        ]

iskeyword = frozenset(kwlist).__contains__

`,"src/lib/lib-dynload/__init__.py":`raise NotImplementedError("lib-dynload is not yet implemented in Skulpt")
`,"src/lib/lib-tk/__init__.py":`raise NotImplementedError("lib-tk is not yet implemented in Skulpt")
`,"src/lib/lib2to3/__init__.py":`raise NotImplementedError("lib2to3 is not yet implemented in Skulpt")
`,"src/lib/lib2to3/fixes/__init__.py":`raise NotImplementedError("fixes is not yet implemented in Skulpt")
`,"src/lib/lib2to3/pgen2/__init__.py":`raise NotImplementedError("pgen2 is not yet implemented in Skulpt")
`,"src/lib/lib2to3/tests/__init__.py":`raise NotImplementedError("tests is not yet implemented in Skulpt")
`,"src/lib/linecache.py":`raise NotImplementedError("linecache is not yet implemented in Skulpt")
`,"src/lib/locale.py":`raise NotImplementedError("locale is not yet implemented in Skulpt")
`,"src/lib/logging/__init__.py":`raise NotImplementedError("logging is not yet implemented in Skulpt")
`,"src/lib/macpath.py":`raise NotImplementedError("macpath is not yet implemented in Skulpt")
`,"src/lib/macurl2path.py":`raise NotImplementedError("macurl2path is not yet implemented in Skulpt")
`,"src/lib/mailbox.py":`raise NotImplementedError("mailbox is not yet implemented in Skulpt")
`,"src/lib/mailcap.py":`raise NotImplementedError("mailcap is not yet implemented in Skulpt")
`,"src/lib/markupbase.py":`raise NotImplementedError("markupbase is not yet implemented in Skulpt")
`,"src/lib/math.js":`var $builtinmodule=function(){var a=Math.sqrt,b=Number.MAX_SAFE_INTEGER,c=Math.log,d=Math.exp,e=Math.pow,f=Math.log2,g=Number.isFinite,h=Math.floor,k=Math.abs,l=Math.E,m=Math.PI,n={pi:new Sk.builtin.float_(m),e:new Sk.builtin.float_(l),tau:new Sk.builtin.float_(2*m),nan:new Sk.builtin.float_(NaN),inf:new Sk.builtin.float_(1/0),ceil:new Sk.builtin.func(function(a){var b=Math.ceil;return(Sk.builtin.pyCheckArgsLen("ceil",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.__future__.ceil_floor_int)?new Sk.builtin.int_(b(Sk.builtin.asnum$(a))):new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))}),comb:new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.comb() is not yet implemented in Skulpt")})},o=function(a){return a=a?0>a?-1:1:0>1/a?-1:1,a};n.copysign=new Sk.builtin.func(function(a,b){Sk.builtin.pyCheckArgsLen("copysign",arguments.length,2,2),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(b));const c=Sk.builtin.asnum$(b),d=Sk.builtin.asnum$(a),e=o(d),f=o(c),g=Sk.builtin.int_(e*f);return new Sk.builtin.float_(Sk.abstr.numberBinOp(a,g,"Mult"))}),n.fabs=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("fabs",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b=Sk.builtin.asnum$(Sk.builtin.float_(a));return b=k(b),new Sk.builtin.float_(b)});return n.factorial=new Sk.builtin.func(function(a){function b(a){Sk.builtin.asnum$nofloat(a);return new Sk.builtin.biginteger(a)}Sk.builtin.pyCheckArgsLen("factorial",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let c=Sk.builtin.asnum$(a);if(a=h(c),a!=c)throw new Sk.builtin.ValueError("factorial() only accepts integral values");if(0>a)throw new Sk.builtin.ValueError("factorial() not defined for negative numbers");for(var d=1,e=2;e<=a&&18>=e;e++)d*=e;if(18>=a)return new Sk.builtin.int_(d);d=b(d);for(var f,e=19;e<=a;e++)f=b(e),d=d.multiply(f);return new Sk.builtin.lng(d)}),n.floor=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("floor",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.__future__.ceil_floor_int?new Sk.builtin.int_(h(Sk.builtin.asnum$(a))):new Sk.builtin.float_(h(Sk.builtin.asnum$(a)))}),n.fmod=new Sk.builtin.func(function(a,b){Sk.builtin.pyCheckArgsLen("fmod",arguments.length,2,2),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(b));const c=Sk.builtin.asnum$(Sk.builtin.float_(a)),d=Sk.builtin.asnum$(Sk.builtin.float_(b));if((d==1/0||d==-Infinity)&&isFinite(c))return new Sk.builtin.float_(c);const e=c%d;if(isNaN(e)&&!isNaN(c)&&!isNaN(d))throw new Sk.builtin.ValueError("math domain error");return Sk.builtin.float_(e)}),n.frexp=new Sk.builtin.func(function(a){var b=Math.max;Sk.builtin.pyCheckArgsLen("frexp",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const c=Sk.builtin.asnum$(a),d=[c,0];if(0!==c&&g(c)){const a=k(c);let g=b(-1023,h(f(a))+1),i=a*e(2,-g);for(;.5>i;)i*=2,g--;for(;1<=i;)i*=.5,g++;0>c&&(i=-i),d[0]=i,d[1]=g}return d[0]=new Sk.builtin.float_(d[0]),d[1]=new Sk.builtin.int_(d[1]),new Sk.builtin.tuple(d)}),n.fsum=new Sk.builtin.func(function(a){if(Sk.builtin.pyCheckArgsLen("fsum",arguments.length,1,1),!Sk.builtin.checkIterable(a))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object is not iterable");let b=[];a=Sk.abstr.iter(a);let c,d,e;for(let f=a.tp$iternext();void 0!==f;f=a.tp$iternext()){Sk.builtin.pyCheckType("","real number",Sk.builtin.checkNumber(f)),c=0,f=Sk.builtin.asnum$(Sk.builtin.float_(f));for(let a,g=0,h=b.length;g<h;g++){if(a=b[g],k(f)<k(a)){let b=f;f=a,a=b}d=f+a,e=a-(d-f),e&&(b[c]=e,c++),f=d}b=b.slice(0,c).concat([f])}const f=b.reduce(function(c,a){return c+a},0);return new Sk.builtin.float_(f)}),n.gcd=new Sk.builtin.func(function(c,a){function d(c,a){return 0==a?c:d(a,c%a)}function e(c,a){return 0===a.trueCompare(Sk.builtin.biginteger.ZERO)?c:e(a,c.remainder(a))}if(Sk.builtin.pyCheckArgsLen("gcd",arguments.length,2,2),Sk.builtin.pyCheckType("a","integer",Sk.builtin.checkInt(c)),Sk.builtin.pyCheckType("b","integer",Sk.builtin.checkInt(a)),c instanceof Sk.builtin.lng||a instanceof Sk.builtin.lng){let b=Sk.builtin.lng(c).biginteger,d=Sk.builtin.lng(a).biginteger,f=e(b,d);return f=f.abs(),new Sk.builtin.lng(f)}else{let b=k(Sk.builtin.asnum$(c)),e=k(Sk.builtin.asnum$(a)),f=d(b,e);return f=0>f?-f:f,new Sk.builtin.int_(f)}}),_isclose=function(c,a,b,d){Sk.builtin.pyCheckArgsLen("isclose",arguments.length,2,4,!0),Sk.builtin.pyCheckType("a","number",Sk.builtin.checkNumber(c)),Sk.builtin.pyCheckType("b","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("rel_tol","number",Sk.builtin.checkNumber(b)),Sk.builtin.pyCheckType("abs_tol","number",Sk.builtin.checkNumber(d));const e=Sk.builtin.asnum$(c),f=Sk.builtin.asnum$(a),g=Sk.builtin.asnum$(b),h=Sk.builtin.asnum$(d);if(0>g||0>h)throw new Sk.builtin.ValueError("tolerances must be non-negative");if(e==f)return Sk.builtin.bool.true$;if(e==1/0||e==-Infinity||f==1/0||f==-Infinity)return Sk.builtin.bool.false$;const i=k(f-e),j=i<=k(g*f)||i<=k(g*e)||i<=h;return new Sk.builtin.bool(j)},_isclose.co_name=new Sk.builtins.str("isclose"),_isclose.co_varnames=["a","b","rel_tol","abs_tol"],_isclose.co_argcount=2,_isclose.co_kwonlyargcount=2,_isclose.$kwdefs=[1e-9,0],n.isclose=new Sk.builtin.func(_isclose),n.isfinite=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("isfinite",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b=Sk.builtin.asnum$(a);return Sk.builtin.checkInt(a)?Sk.builtin.bool.true$:isFinite(b)?Sk.builtin.bool.true$:Sk.builtin.bool.false$}),n.isinf=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("isinf",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b=Sk.builtin.asnum$(a);return Sk.builtin.checkInt(a)?Sk.builtin.bool.false$:isFinite(b)||isNaN(b)?Sk.builtin.bool.false$:Sk.builtin.bool.true$}),n.isnan=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("isnan",arguments.length,1,1),Sk.builtin.pyCheckType("x","float",Sk.builtin.checkFloat(a));const b=Sk.builtin.asnum$(a);return isNaN(b)?Sk.builtin.bool.true$:Sk.builtin.bool.false$}),n.isqrt=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.isqrt() is not yet implemented in Skulpt")}),n.ldexp=new Sk.builtin.func(function(a,b){Sk.builtin.pyCheckArgsLen("ldexp",arguments.length,2,2),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("i","integer",Sk.builtin.checkInt(b));const c=Sk.builtin.asnum$(Sk.builtin.float_(a)),d=Sk.builtin.asnum$(b);if(c==1/0||c==-Infinity||0==c||isNaN(c))return a;const f=c*e(2,d);if(!isFinite(f))throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(f)}),n.modf=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("modf",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b=Sk.builtin.asnum$(a);if(!isFinite(b)){if(b==1/0)return new Sk.builtin.tuple([Sk.builtin.float_(0),Sk.builtin.float_(b)]);if(b==-Infinity)return new Sk.builtin.tuple([Sk.builtin.float_(-0),Sk.builtin.float_(b)]);if(isNaN(b))return new Sk.builtin.tuple([Sk.builtin.float_(b),Sk.builtin.float_(b)])}const c=o(b);b=k(b);const e=c*h(b),f=c*(b-h(b));return new Sk.builtin.tuple([Sk.builtin.float_(f),Sk.builtin.float_(e)])}),n.perm=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.perm() is not yet implemented in Skulpt")}),n.prod=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.prod() is not yet implemented in Skulpt")}),n.remainder=new Sk.builtin.func(function(a,b){if(Sk.builtin.pyCheckArgsLen("reamainder",arguments.length,2,2),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(b)),_x=Sk.builtin.asnum$(Sk.builtin.float_(a)),_y=Sk.builtin.asnum$(Sk.builtin.float_(b)),isFinite(_x)&&isFinite(_y)){let a,b,d,c,e;if(0==_y)throw new Sk.builtin.ValueError("math domain error");if(a=k(_x),b=k(_y),c=a%b,d=b-c,c<d)e=c;else if(c>d)e=-d;else{if(c!=d)throw new Sk.builtin.AssertionError;e=c-2*(.5*(a-c)%b)}return Sk.builtin.float_(o(_x)*e)}if(isNaN(_x))return a;if(isNaN(_y))return b;if(_x==1/0||_x==-Infinity)throw new Sk.builtin.ValueError("math domain error");if(_y!=1/0&&_y!=-Infinity)throw new Sk.builtin.AssertionError;return Sk.builtin.float_(a)}),n.trunc=new Sk.builtin.func(function(a){return(Sk.builtin.pyCheckArgsLen("trunc",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.checkInt(a))?a:new Sk.builtin.int_(0|Sk.builtin.asnum$(a))}),n.exp=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("exp",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const b=Sk.builtin.asnum$(Sk.builtin.float_(a));if(b==1/0||b==-Infinity||isNaN(b))return new Sk.builtin.float_(d(b));const c=d(b);if(!isFinite(c))throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(c)}),n.expm1=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("expm1",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const b=Sk.builtin.asnum$(a);if(.7>k(b)){const a=d(b);if(1==a)return Sk.builtin.float_(b);else{const d=(a-1)*b/c(a);return new Sk.builtin.float_(d)}}else{const a=d(b)-1;return new Sk.builtin.float_(a)}}),n.log=new Sk.builtin.func(function(a,d){Sk.builtin.pyCheckArgsLen("log",arguments.length,1,2),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let e,f,g=Sk.builtin.asnum$(a);if(0>=g)throw new Sk.builtin.ValueError("math domain error");if(void 0===d?e=l:(Sk.builtin.pyCheckType("base","number",Sk.builtin.checkNumber(d)),e=Sk.builtin.asnum$(d)),0>=e)throw new Sk.builtin.ValueError("math domain error");else if(Sk.builtin.checkFloat(a)||g<b)f=c(g)/c(e);else{g=Sk.builtin.str(a).$jsstr();const b=g.length,d=parseFloat("0."+g);f=(b*c(10)+c(d))/c(e)}return new Sk.builtin.float_(f)}),n.log1p=new Sk.builtin.func(function(a){var b=Number.EPSILON;Sk.builtin.pyCheckArgsLen("log1p",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const d=Sk.builtin.asnum$(new Sk.builtin.float_(a));if(-1>=d)throw new Sk.builtin.ValueError("math domain error");else{if(0==d)return new Sk.builtin.float_(d);if(k(d)<b/2)return new Sk.builtin.float_(d);if(-.5<=d&&1>=d){const a=1+d,b=c(a)-(a-1-d)/a;return new Sk.builtin.float_(b)}else{const a=c(1+d);return new Sk.builtin.float_(a)}}}),n.log2=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("log2",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let c,d=Sk.builtin.asnum$(a);if(0>d)throw new Sk.builtin.ValueError("math domain error");else if(Sk.builtin.checkFloat(a)||d<b)c=f(d);else{d=Sk.builtin.str(a).$jsstr();const b=d.length,e=parseFloat("0."+d);c=b*f(10)+f(e)}return new Sk.builtin.float_(c)}),n.log10=new Sk.builtin.func(function(a){var c=Math.log10;Sk.builtin.pyCheckArgsLen("log10",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let d,e=Sk.builtin.asnum$(a);if(0>e)throw new Sk.builtin.ValueError("math domain error");else if(Sk.builtin.checkFloat(a)||e<b)d=c(e);else{e=Sk.builtin.str(a).$jsstr();const b=e.length,f=parseFloat("0."+e);d=b+c(f)}return new Sk.builtin.float_(d)}),n.pow=new Sk.builtin.func(function(a,b){var c=Number.isInteger;Sk.builtin.pyCheckArgsLen("pow",arguments.length,2,2),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(b));const d=Sk.builtin.asnum$(Sk.builtin.float_(a)),f=Sk.builtin.asnum$(Sk.builtin.float_(b));if(0==d&&0>f)throw new Sk.builtin.ValueError("math domain error");else{if(1==d)return new Sk.builtin.float_(1);if(g(d)&&g(f)&&0>d&&!c(f))throw new Sk.builtin.ValueError("math domain error");else if(-1==d&&(f==-Infinity||f==1/0))return new Sk.builtin.float_(1)}const h=e(d,f);if(!g(d)||!g(f))return new Sk.builtin.float_(h);if(h==1/0||h==-Infinity)throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(h)}),n.sqrt=new Sk.builtin.func(function(b){return Sk.builtin.pyCheckArgsLen("sqrt",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(b)),new Sk.builtin.float_(a(Sk.builtin.asnum$(b)))}),n.asin=new Sk.builtin.func(function(a){var b=Math.asin;return Sk.builtin.pyCheckArgsLen("asin",arguments.length,1,1),Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))}),n.acos=new Sk.builtin.func(function(a){var b=Math.acos;return Sk.builtin.pyCheckArgsLen("acos",arguments.length,1,1),Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))}),n.atan=new Sk.builtin.func(function(a){var b=Math.atan;return Sk.builtin.pyCheckArgsLen("atan",arguments.length,1,1),Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))}),n.atan2=new Sk.builtin.func(function(a,b){var c=Math.atan2;return Sk.builtin.pyCheckArgsLen("atan2",arguments.length,2,2),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(b)),new Sk.builtin.float_(c(Sk.builtin.asnum$(a),Sk.builtin.asnum$(b)))}),n.sin=new Sk.builtin.func(function(a){var b=Math.sin;return Sk.builtin.pyCheckArgsLen("sin",arguments.length,1,1),Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))}),n.cos=new Sk.builtin.func(function(a){var b=Math.cos;return Sk.builtin.pyCheckArgsLen("cos",arguments.length,1,1),Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))}),n.tan=new Sk.builtin.func(function(a){var b=Math.tan;return Sk.builtin.pyCheckArgsLen("tan",arguments.length,1,1),Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))}),n.dist=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.dist() is not yet implemented in Skulpt")}),n.hypot=new Sk.builtin.func(function(b,c){return Sk.builtin.pyCheckArgsLen("hypot",arguments.length,2,2),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(b)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(c)),b=Sk.builtin.asnum$(b),c=Sk.builtin.asnum$(c),new Sk.builtin.float_(a(b*b+c*c))}),n.asinh=new Sk.builtin.func(function(b){Sk.builtin.pyCheckArgsLen("asinh",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(b)),b=Sk.builtin.asnum$(b);var d=b+a(b*b+1);return new Sk.builtin.float_(c(d))}),n.acosh=new Sk.builtin.func(function(b){Sk.builtin.pyCheckArgsLen("acosh",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(b)),b=Sk.builtin.asnum$(b);var d=b+a(b*b-1);return new Sk.builtin.float_(c(d))}),n.atanh=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("atanh",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),a=Sk.builtin.asnum$(a);var b=(1+a)/(1-a);return new Sk.builtin.float_(c(b)/2)}),n.sinh=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("sinh",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),a=Sk.builtin.asnum$(a);var b=e(l,a);return new Sk.builtin.float_((b-1/b)/2)}),n.cosh=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("cosh",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),a=Sk.builtin.asnum$(a);var b=e(l,a);return new Sk.builtin.float_((b+1/b)/2)}),n.tanh=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("tanh",arguments.length,1,1),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const b=Sk.builtin.asnum$(a);if(0===b)return Sk.builtin.float_(a);var c=e(l,b),d=1/c;return new Sk.builtin.float_((c-d)/2/((c+d)/2))}),n.radians=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("radians",arguments.length,1,1),Sk.builtin.pyCheckType("deg","number",Sk.builtin.checkNumber(a));var b=m/180*Sk.builtin.asnum$(a);return new Sk.builtin.float_(b)}),n.degrees=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("degrees",arguments.length,1,1),Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a));var b=180/m*Sk.builtin.asnum$(a);return new Sk.builtin.float_(b)}),n.erf=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.erf() is not yet implemented in Skulpt")}),n.erfc=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.erfc() is not yet implemented in Skulpt")}),n.gamma=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.gamma() is not yet implemented in Skulpt")}),n.lgamma=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("math.lgamma() is not yet implemented in Skulpt")}),n};`,"src/lib/md5.py":`raise NotImplementedError("md5 is not yet implemented in Skulpt")
`,"src/lib/mhlib.py":`raise NotImplementedError("mhlib is not yet implemented in Skulpt")
`,"src/lib/mimetools.py":`raise NotImplementedError("mimetools is not yet implemented in Skulpt")
`,"src/lib/mimetypes.py":`raise NotImplementedError("mimetypes is not yet implemented in Skulpt")
`,"src/lib/mimify.py":`raise NotImplementedError("mimify is not yet implemented in Skulpt")
`,"src/lib/modulefinder.py":`raise NotImplementedError("modulefinder is not yet implemented in Skulpt")
`,"src/lib/multifile.py":`raise NotImplementedError("multifile is not yet implemented in Skulpt")
`,"src/lib/multiprocessing/__init__.py":`raise NotImplementedError("multiprocessing is not yet implemented in Skulpt")
`,"src/lib/multiprocessing/dummy/__init__.py":`raise NotImplementedError("dummy is not yet implemented in Skulpt")
`,"src/lib/mutex.py":`raise NotImplementedError("mutex is not yet implemented in Skulpt")
`,"src/lib/netrc.py":`raise NotImplementedError("netrc is not yet implemented in Skulpt")
`,"src/lib/new.py":`raise NotImplementedError("new is not yet implemented in Skulpt")
`,"src/lib/nntplib.py":`raise NotImplementedError("nntplib is not yet implemented in Skulpt")
`,"src/lib/ntpath.py":`raise NotImplementedError("ntpath is not yet implemented in Skulpt")
`,"src/lib/nturl2path.py":`raise NotImplementedError("nturl2path is not yet implemented in Skulpt")
`,"src/lib/numbers.py":`Number = (int, float, complex)
Integral = int
Complex = complex
`,"src/lib/opcode.py":`raise NotImplementedError("opcode is not yet implemented in Skulpt")
`,"src/lib/operator.js":'var $builtinmodule=function(){var a={};return a.lt=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"Lt"))}),a.__lt__=a.lt,a.le=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"LtE"))}),a.__le__=a.le,a.eq=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"Eq"))}),a.__eq__=a.eq,a.ne=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"NotEq"))}),a.__ne__=a.ne,a.ge=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"GtE"))}),a.__ge__=a.ge,a.gt=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"Gt"))}),a.__gt__=a.gt,a.not_=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("operator.not_() is not yet implemented in Skulpt")}),a.truth=new Sk.builtin.func(function(a){return Sk.builtin.bool(a)}),a.is_=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"Is"))}),a.is_not=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"IsNot"))}),a.abs=new Sk.builtin.func(function(a){return Sk.misceval.callsimArray(Sk.builtin.abs,[a])}),a.__abs__=a.abs,a.add=new Sk.builtin.func(function(c,a){return Sk.abstr.objectAdd(c,a)}),a.__add__=a.add,a.and_=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"BitAnd")}),a.__and__=a.and_,a.div=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"Div")}),a.__div__=a.div,a.floordiv=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"FloorDiv")}),a.__floordiv__=a.floordiv,a.index=new Sk.builtin.func(function(b){return new Sk.builtin.int_(Sk.misceval.asIndex(b))}),a.__index__=a.index,a.inv=new Sk.builtin.func(function(a){return Sk.abstr.numberUnaryOp(a,"Invert")}),a.__inv__=a.inv,a.invert=a.inv,a.__invert__=a.inv,a.lshift=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"LShift")}),a.__lshift__=a.lshift,a.mod=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"Mod")}),a.__mod__=a.mod,a.divmod=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"DivMod")}),a.__divmod__=a.divmod,a.mul=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"Mult")}),a.__mul__=a.mul,a.neg=new Sk.builtin.func(function(a){return Sk.abstr.objectNegative(a)}),a.__neg__=a.neg,a.or_=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"BitOr")}),a.__or__=a.or_,a.pos=new Sk.builtin.func(function(a){return Sk.abstr.objectPositive(a)}),a.__pos__=a.pos,a.pow=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"Pow")}),a.__pow__=a.pow,a.rshift=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"RShift")}),a.__rshift__=a.rshift,a.sub=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"Sub")}),a.__sub__=a.sub,a.truediv=a.div,a.__truediv__=a.div,a.xor=new Sk.builtin.func(function(c,a){return Sk.abstr.binary_op_(c,a,"BitXor")}),a.__xor__=a.xor,a.concat=new Sk.builtin.func(function(c,a){return Sk.abstr.sequenceConcat(c,a)}),a.__concat__=a.concat,a.contains=new Sk.builtin.func(function(c,a){return Sk.builtin.bool(Sk.abstr.sequenceContains(c,a))}),a.__contains__=a.contains,a.countOf=new Sk.builtin.func(function(c,a){return Sk.abstr.sequenceGetCountOf(c,a)}),a.delitem=new Sk.builtin.func(function(c,a){return Sk.abstr.sequenceDelItem(c,a)}),a.__delitem__=a.delitem,a.getitem=new Sk.builtin.func(function(c,a){return Sk.abstr.sequenceGetItem(c,a)}),a.__getitem__=a.getitem,a.indexOf=new Sk.builtin.func(function(c,a){return Sk.abstr.sequenceGetIndexOf(c,a)}),a.setitem=new Sk.builtin.func(function(d,a,b){return Sk.abstr.sequenceSetItem(d,a,b)}),a.__setitem__=a.setitem,a};',"src/lib/optparse.py":`raise NotImplementedError("optparse is not yet implemented in Skulpt")
`,"src/lib/os.py":`raise NotImplementedError("os is not yet implemented in Skulpt")
`,"src/lib/os2emxpath.py":`raise NotImplementedError("os2emxpath is not yet implemented in Skulpt")
`,"src/lib/pdb.py":`raise NotImplementedError("pdb is not yet implemented in Skulpt")
`,"src/lib/pickle.py":`raise NotImplementedError("pickle is not yet implemented in Skulpt")
`,"src/lib/pickletools.py":`raise NotImplementedError("pickletools is not yet implemented in Skulpt")
`,"src/lib/pipes.py":`raise NotImplementedError("pipes is not yet implemented in Skulpt")
`,"src/lib/pkgutil.py":`raise NotImplementedError("pkgutil is not yet implemented in Skulpt")
`,"src/lib/platform.js":'var $builtinmodule=function(){var a={},b="undefined"!=typeof window&&"undefined"!=typeof window.navigator;return a.python_implementation=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("python_implementation",arguments.length,0,0),new Sk.builtin.str("Skulpt")}),a.node=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("node",arguments.length,0,0),new Sk.builtin.str("")}),a.version=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("version",arguments.length,0,0),new Sk.builtin.str("")}),a.python_version=new Sk.builtin.func(function(){var a;return Sk.builtin.pyCheckArgsLen("python_version",arguments.length,0,0),a=Sk.__future__.python_version?"3.2.0":"2.7.0",new Sk.builtin.str(a)}),a.system=new Sk.builtin.func(function(){var a;return Sk.builtin.pyCheckArgsLen("system",arguments.length,0,0),a=b?window.navigator.appCodeName:"",new Sk.builtin.str(a)}),a.machine=new Sk.builtin.func(function(){var a;return Sk.builtin.pyCheckArgsLen("machine",arguments.length,0,0),a=b?window.navigator.platform:"",new Sk.builtin.str(a)}),a.release=new Sk.builtin.func(function(){var a;return Sk.builtin.pyCheckArgsLen("release",arguments.length,0,0),a=b?window.navigator.appVersion:"",new Sk.builtin.str(a)}),a.architecture=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("architecture",arguments.length,0,0),new Sk.builtin.tuple([new Sk.builtin.str("64bit"),new Sk.builtin.str("")])}),a.processor=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("processor",arguments.length,0,0),new Sk.builtin.str("")}),a};',"src/lib/platform.py":`raise NotImplementedError("platform is not yet implemented in Skulpt")
`,"src/lib/playsound.js":"function say(a){speechSynthesis.speak(new SpeechSynthesisUtterance(a.$jsstr()))}var $builtinmodule=function(){var a={say:new Sk.builtin.func(function(a){return say(a),new Sk.builtin.none})};return a};","src/lib/plistlib.py":`raise NotImplementedError("plistlib is not yet implemented in Skulpt")
`,"src/lib/popen2.py":`raise NotImplementedError("popen2 is not yet implemented in Skulpt")
`,"src/lib/poplib.py":`raise NotImplementedError("poplib is not yet implemented in Skulpt")
`,"src/lib/posixfile.py":`raise NotImplementedError("posixfile is not yet implemented in Skulpt")
`,"src/lib/posixpath.py":`raise NotImplementedError("posixpath is not yet implemented in Skulpt")
`,"src/lib/pprint.py":`raise NotImplementedError("pprint is not yet implemented in Skulpt")
`,"src/lib/processing.js":`var $builtinmodule=function(){var b,c,d,e,f,g,h,a=Math.PI,j={},k=[],l=!0,m=null;return j.processing=null,j.p=null,j.X=new Sk.builtin.int_(0),j.Y=new Sk.builtin.int_(1),j.Z=new Sk.builtin.int_(2),j.R=new Sk.builtin.int_(3),j.G=new Sk.builtin.int_(4),j.B=new Sk.builtin.int_(5),j.A=new Sk.builtin.int_(6),j.U=new Sk.builtin.int_(7),j.V=new Sk.builtin.int_(8),j.NX=new Sk.builtin.int_(9),j.NY=new Sk.builtin.int_(10),j.NZ=new Sk.builtin.int_(11),j.EDGE=new Sk.builtin.int_(12),j.SR=new Sk.builtin.int_(13),j.SG=new Sk.builtin.int_(14),j.SB=new Sk.builtin.int_(15),j.SA=new Sk.builtin.int_(16),j.SW=new Sk.builtin.int_(17),j.TX=new Sk.builtin.int_(18),j.TY=new Sk.builtin.int_(19),j.TZ=new Sk.builtin.int_(20),j.VX=new Sk.builtin.int_(21),j.VY=new Sk.builtin.int_(22),j.VZ=new Sk.builtin.int_(23),j.VW=new Sk.builtin.int_(24),j.AR=new Sk.builtin.int_(25),j.AG=new Sk.builtin.int_(26),j.AB=new Sk.builtin.int_(27),j.DR=new Sk.builtin.int_(3),j.DG=new Sk.builtin.int_(4),j.DB=new Sk.builtin.int_(5),j.DA=new Sk.builtin.int_(6),j.SPR=new Sk.builtin.int_(28),j.SPG=new Sk.builtin.int_(29),j.SPB=new Sk.builtin.int_(30),j.SHINE=new Sk.builtin.int_(31),j.ER=new Sk.builtin.int_(32),j.EG=new Sk.builtin.int_(33),j.EB=new Sk.builtin.int_(34),j.BEEN_LIT=new Sk.builtin.int_(35),j.VERTEX_FIELD_COUNT=new Sk.builtin.int_(36),j.CENTER=new Sk.builtin.int_(3),j.RADIUS=new Sk.builtin.int_(2),j.CORNERS=new Sk.builtin.int_(1),j.CORNER=new Sk.builtin.int_(0),j.DIAMETER=new Sk.builtin.int_(3),j.BASELINE=new Sk.builtin.int_(0),j.TOP=new Sk.builtin.int_(101),j.BOTTOM=new Sk.builtin.int_(102),j.NORMAL=new Sk.builtin.int_(1),j.NORMALIZED=new Sk.builtin.int_(1),j.IMAGE=new Sk.builtin.int_(2),j.MODEL=new Sk.builtin.int_(4),j.SHAPE=new Sk.builtin.int_(5),j.AMBIENT=new Sk.builtin.int_(0),j.DIRECTIONAL=new Sk.builtin.int_(1),j.SPOT=new Sk.builtin.int_(3),j.RGB=new Sk.builtin.int_(1),j.ARGB=new Sk.builtin.int_(2),j.HSB=new Sk.builtin.int_(3),j.ALPHA=new Sk.builtin.int_(4),j.CMYK=new Sk.builtin.int_(5),j.TIFF=new Sk.builtin.int_(0),j.TARGA=new Sk.builtin.int_(1),j.JPEG=new Sk.builtin.int_(2),j.GIF=new Sk.builtin.int_(3),j.MITER=new Sk.builtin.str("miter"),j.BEVEL=new Sk.builtin.str("bevel"),j.ROUND=new Sk.builtin.str("round"),j.SQUARE=new Sk.builtin.str("butt"),j.PROJECT=new Sk.builtin.str("square"),j.P2D=new Sk.builtin.int_(1),j.JAVA2D=new Sk.builtin.int_(1),j.WEBGL=new Sk.builtin.int_(2),j.P3D=new Sk.builtin.int_(2),j.OPENGL=new Sk.builtin.int_(2),j.PDF=new Sk.builtin.int_(0),j.DXF=new Sk.builtin.int_(0),j.OTHER=new Sk.builtin.int_(0),j.WINDOWS=new Sk.builtin.int_(1),j.MAXOSX=new Sk.builtin.int_(2),j.LINUX=new Sk.builtin.int_(3),j.EPSILON=new Sk.builtin.float_(1e-4),j.MAX_FLOAT=new Sk.builtin.float_(34028235e31),j.MIN_FLOAT=new Sk.builtin.float_(-34028235e31),j.MAX_INT=new Sk.builtin.int_(2147483647),j.MIN_INT=new Sk.builtin.int_(-2147483648),j.HALF_PI=new Sk.builtin.float_(a/2),j.THIRD_PI=new Sk.builtin.float_(a/3),j.PI=new Sk.builtin.float_(a),j.TWO_PI=new Sk.builtin.float_(2*a),j.TAU=new Sk.builtin.float_(2*a),j.QUARTER_PI=new Sk.builtin.float_(a/4),j.DEG_TO_RAD=new Sk.builtin.float_(a/180),j.RAD_TO_DEG=new Sk.builtin.float_(180/a),j.WHITESPACE=Sk.builtin.str(" \\t\\n\\r\\f\\xA0"),j.POINT=new Sk.builtin.int_(2),j.POINTS=new Sk.builtin.int_(2),j.LINE=new Sk.builtin.int_(4),j.LINES=new Sk.builtin.int_(4),j.TRIANGLE=new Sk.builtin.int_(8),j.TRIANGLES=new Sk.builtin.int_(9),j.TRIANGLE_FAN=new Sk.builtin.int_(11),j.TRIANGLE_STRIP=new Sk.builtin.int_(10),j.QUAD=new Sk.builtin.int_(16),j.QUADS=new Sk.builtin.int_(16),j.QUAD_STRIP=new Sk.builtin.int_(17),j.POLYGON=new Sk.builtin.int_(20),j.PATH=new Sk.builtin.int_(21),j.RECT=new Sk.builtin.int_(30),j.ELLIPSE=new Sk.builtin.int_(31),j.ARC=new Sk.builtin.int_(32),j.SPHERE=new Sk.builtin.int_(40),j.BOX=new Sk.builtin.int_(41),j.GROUP=new Sk.builtin.int_(0),j.PRIMITIVE=new Sk.builtin.int_(1),j.GEOMETRY=new Sk.builtin.int_(3),j.VERTEX=new Sk.builtin.int_(0),j.BEZIER_VERTEX=new Sk.builtin.int_(1),j.CURVE_VERTEX=new Sk.builtin.int_(2),j.BREAK=new Sk.builtin.int_(3),j.CLOSESHAPE=new Sk.builtin.int_(4),j.REPLACE=new Sk.builtin.int_(0),j.BLEND=new Sk.builtin.int_(1),j.ADD=new Sk.builtin.int_(2),j.SUBTRACT=new Sk.builtin.int_(4),j.LIGHTEST=new Sk.builtin.int_(8),j.DARKEST=new Sk.builtin.int_(16),j.DIFFERENCE=new Sk.builtin.int_(32),j.EXCLUSION=new Sk.builtin.int_(64),j.MULTIPLY=new Sk.builtin.int_(128),j.SCREEN=new Sk.builtin.int_(256),j.OVERLAY=new Sk.builtin.int_(512),j.HARD_LIGHT=new Sk.builtin.int_(1024),j.SOFT_LIGHT=new Sk.builtin.int_(2048),j.DODGE=new Sk.builtin.int_(4096),j.BURN=new Sk.builtin.int_(8192),j.ALPHA_MASK=new Sk.builtin.int_(4278190080),j.RED_MASK=new Sk.builtin.int_(16711680),j.GREEN_MASK=new Sk.builtin.int_(65280),j.BLUE_MASK=new Sk.builtin.int_(255),j.CUSTOM=new Sk.builtin.int_(0),j.ORTHOGRAPHIC=new Sk.builtin.int_(2),j.PERSPECTIVE=new Sk.builtin.int_(3),j.ARROW=new Sk.builtin.str("default"),j.CROSS=new Sk.builtin.str("crosshair"),j.HAND=new Sk.builtin.str("pointer"),j.MOVE=new Sk.builtin.str("move"),j.TEXT=new Sk.builtin.str("text"),j.WAIT=new Sk.builtin.str("wait"),j.NOCURSOR=Sk.builtin.assk$("url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",Sk.builtin.nmber.str),j.DISABLE_OPENGL_2X_SMOOTH=new Sk.builtin.int_(1),j.ENABLE_OPENGL_2X_SMOOTH=new Sk.builtin.int_(-1),j.ENABLE_OPENGL_4X_SMOOTH=new Sk.builtin.int_(2),j.ENABLE_NATIVE_FONTS=new Sk.builtin.int_(3),j.DISABLE_DEPTH_TEST=new Sk.builtin.int_(4),j.ENABLE_DEPTH_TEST=new Sk.builtin.int_(-4),j.ENABLE_DEPTH_SORT=new Sk.builtin.int_(5),j.DISABLE_DEPTH_SORT=new Sk.builtin.int_(-5),j.DISABLE_OPENGL_ERROR_REPORT=new Sk.builtin.int_(6),j.ENABLE_OPENGL_ERROR_REPORT=new Sk.builtin.int_(-6),j.ENABLE_ACCURATE_TEXTURES=new Sk.builtin.int_(7),j.DISABLE_ACCURATE_TEXTURES=new Sk.builtin.int_(-7),j.HINT_COUNT=new Sk.builtin.int_(10),j.OPEN=new Sk.builtin.int_(1),j.CLOSE=new Sk.builtin.int_(2),j.BLUR=new Sk.builtin.int_(11),j.GRAY=new Sk.builtin.int_(12),j.INVERT=new Sk.builtin.int_(13),j.OPAQUE=new Sk.builtin.int_(14),j.POSTERIZE=new Sk.builtin.int_(15),j.THRESHOLD=new Sk.builtin.int_(16),j.ERODE=new Sk.builtin.int_(17),j.DILATE=new Sk.builtin.int_(18),j.BACKSPACE=new Sk.builtin.int_(8),j.TAB=new Sk.builtin.int_(9),j.ENTER=new Sk.builtin.int_(10),j.RETURN=new Sk.builtin.int_(13),j.ESC=new Sk.builtin.int_(27),j.DELETE=new Sk.builtin.int_(127),j.CODED=new Sk.builtin.int_(65535),j.SHIFT=new Sk.builtin.int_(16),j.CONTROL=new Sk.builtin.int_(17),j.ALT=new Sk.builtin.int_(18),j.CAPSLK=new Sk.builtin.int_(20),j.PGUP=new Sk.builtin.int_(33),j.PGDN=new Sk.builtin.int_(34),j.END=new Sk.builtin.int_(35),j.HOME=new Sk.builtin.int_(36),j.LEFT=new Sk.builtin.int_(37),j.UP=new Sk.builtin.int_(38),j.RIGHT=new Sk.builtin.int_(39),j.DOWN=new Sk.builtin.int_(40),j.F1=new Sk.builtin.int_(112),j.F2=new Sk.builtin.int_(113),j.F3=new Sk.builtin.int_(114),j.F4=new Sk.builtin.int_(115),j.F5=new Sk.builtin.int_(116),j.F6=new Sk.builtin.int_(117),j.F7=new Sk.builtin.int_(118),j.F8=new Sk.builtin.int_(119),j.F9=new Sk.builtin.int_(120),j.F10=new Sk.builtin.int_(121),j.F11=new Sk.builtin.int_(122),j.F12=new Sk.builtin.int_(123),j.NUMLK=new Sk.builtin.int_(144),j.META=new Sk.builtin.int_(157),j.INSERT=new Sk.builtin.int_(155),j.SINCOS_LENGTH=new Sk.builtin.int_(720),j.PRECISIONB=new Sk.builtin.int_(15),j.PRECISIONF=new Sk.builtin.int_(32768),j.PREC_MAXVAL=new Sk.builtin.int_(32767),j.PREC_ALPHA_SHIFT=new Sk.builtin.int_(9),j.PREC_RED_SHIFT=new Sk.builtin.int_(1),j.NORMAL_MODE_AUTO=new Sk.builtin.int_(0),j.NORMAL_MODE_SHAPE=new Sk.builtin.int_(1),j.NORMAL_MODE_VERTEX=new Sk.builtin.int_(2),j.MAX_LIGHTS=new Sk.builtin.int_(8),j.line=new Sk.builtin.func(function(a,b,c,d){j.processing.line(a.v,b.v,c.v,d.v)}),j.ellipse=new Sk.builtin.func(function(a,b,c,d){j.processing.ellipse(a.v,b.v,c.v,d.v)}),j.text=new Sk.builtin.func(function(a,b,c){j.processing.text(a.v,b.v,c.v)}),j.point=new Sk.builtin.func(function(a,b){j.processing.point(a.v,b.v)}),j.arc=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.arc(a.v,b.v,c.v,d.v,e.v,f.v)}),j.quad=new Sk.builtin.func(function(a,b,c,d,e,f,g,h){j.processing.quad(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v)}),j.rect=new Sk.builtin.func(function(a,b,c,d,e){"undefined"==typeof e?j.processing.rect(a.v,b.v,c.v,d.v):j.processing.rect(a.v,b.v,c.v,d.v,e.v)}),j.triangle=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.triangle(a.v,b.v,c.v,d.v,e.v,f.v)}),j.bezier=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i,k,l,m){"undefined"==typeof i?j.processing.bezier(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v):j.processing.bezier(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v,l.v,m.v)}),j.alpha=new Sk.builtin.func(function(a,c,d){return"undefined"==typeof c?new Sk.builtin.float_(j.processing.alpha(a.v)):"undefined"==typeof d?new Sk.builtin.float_(j.processing.alpha(a.v,c.v)):new Sk.builtin.float_(j.processing.alpha(a.v,c.v,d.v))}),j.ambient=new Sk.builtin.func(function(a,c,d){"undefined"==typeof c?j.processing.ambient(a.v):"undefined"==typeof d?j.processing.ambient(a.v,c.v):j.processing.ambient(a.v,c.v,d.v)}),j.ambientLight=new Sk.builtin.func(function(a,b,c,d,e,f){"undefined"==typeof d?j.processing.ambientLight(a.v,b.v,c.v):"undefined"==typeof e?j.processing.ambientLight(a.v,b.v,c.v,d.v):"undefined"==typeof f?j.processing.ambientLight(a.v,b.v,c.v,d.v,e.v):j.processing.ambientLight(a.v,b.v,c.v,d.v,e.v,f.v)}),j.beginCamera=new Sk.builtin.func(function(){j.processing.beginCamera()}),j.beginShape=new Sk.builtin.func(function(a){"undefined"==typeof a&&(a=j.POLYGON),j.processing.beginShape(a.v)}),j.bezierDetail=new Sk.builtin.func(function(a){a="undefined"==typeof a?20:a.v,j.processing.bezierDetail(a)}),j.bezierPoint=new Sk.builtin.func(function(e,a,b,c,d){j.processing.bezierPoint(e.v,a.v,b.v,c.v,d.v)}),j.bezierTangent=new Sk.builtin.func(function(e,a,b,c,d){j.processing.bezierTangent(e.v,a.v,b.v,c.v,d.v)}),j.bezierVertex=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i){"undefined"==typeof g?j.processing.bezierVertex(a.v,b.v,c.v,d.v,e.v,f.v):"undefined"==typeof h?j.processing.bezierVertex(a.v,b.v,c.v,d.v,e.v,f.v,g.v):"undefined"==typeof i?j.processing.bezierVertex(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v):j.processing.bezierVertex(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v)}),j.blend=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i,k){other instanceof Sk.builtin.int_||other instanceof Sk.builtin.float_?j.processing.blend(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v):j.processing.blend(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v)}),j.blendColor=new Sk.builtin.func(function(a,b,d){var e=Sk.misceval.callsimArray(j.color,[new Sk.builtin.int_(0),new Sk.builtin.int_(0),new Sk.builtin.int_(0)]);return e.v=j.processing.blendColor(a.v,b.v,d.v),e}),j.brightness=new Sk.builtin.func(function(a,c,d){return"undefined"==typeof c?new Sk.builtin.float_(j.processing.brightness(a.v)):"undefined"==typeof d?new Sk.builtin.float_(j.processing.brightness(a.v,c.v)):new Sk.builtin.float_(j.processing.brightness(a.v,c.v,d.v))}),j.camera=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i){"undefined"==typeof a?j.processing.camera():j.processing.camera(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v)}),j.constrain=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.constrain(a.v,b.v,c.v))}),j.copy=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i){other instanceof Sk.builtin.int_||other instanceof Sk.builtin.float_?j.processing.copy(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v):j.processing.copy(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v)}),j.createFont=new Sk.builtin.func(function(a,b,c,d){var e=Sk.misceval.callsimArray(j.PFont);return e.v="undefined"==typeof c?j.processing.createFont(a.v,b.v):"undefined"==typeof d?j.processing.createFont(a.v,b.v,c.v):j.processing.createFont(a.v,b.v,c.v,d.v),e}),j.createGraphics=new Sk.builtin.func(function(a,b,c,d){var e=Sk.misceval.callsimArray(j.PGraphics);return e.v="undefined"==typeof d?j.processing.createGraphics(a.v,b.v,c.v):j.processing.createGraphics(a.v,b.v,c.v,d.v),e}),j.createImage=new Sk.builtin.func(function(a,b,c){var d=Sk.misceval.callsimArray(j.PImage);return d.v=j.processing.createImage(a.v,b.v,c.v),d}),j.cursor=new Sk.builtin.func(function(a,b,c){"undefined"==typeof a?j.processing.cursor():"undefined"==typeof b?j.processing.cursor(a.v):"undefined"==typeof c?j.processing.cursor(a.v,b.v):j.processing.cursor(a.v,b.v,c.v)}),j.curve=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i,k,l,m){"undefined"==typeof i?j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v):"undefined"==typeof k?j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v):"undefined"==typeof l?j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v):"undefined"==typeof m?j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v,l.v):j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v,l.v,m.v)}),j.curveDetail=new Sk.builtin.func(function(a){j.processing.curveDetail(a.v)}),j.curvePoint=new Sk.builtin.func(function(e,a,b,c,d){j.processing.curvePoint(e.v,a.v,b.v,c.v,d.v)}),j.curveTangent=new Sk.builtin.func(function(e,a,b,c,d){j.processing.curveTangent(e.v,a.v,b.v,c.v,d.v)}),j.curveTightness=new Sk.builtin.func(function(a){j.processing.curveTightness(a.v)}),j.curveVertex=new Sk.builtin.func(function(a,b,c){"undefined"==typeof c?j.processing.curveVertex(a.v,b.v):j.processing.curveVertex(a.v,b.v,c.v)}),j.day=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.day())}),j.degrees=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.degrees(a.v))}),j.directionalLight=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.directionalLight(a.v,b.v,c.v,d.v,e.v,f.v)}),j.dist=new Sk.builtin.func(function(a,b,c,d,e,f){return"undefined"==typeof e?new Sk.builtin.float_(j.processing.dist(a.v,b.v,c.v,d.v)):"undefined"==typeof f?new Sk.builtin.float_(j.processing.dist(a.v,b.v,c.v,d.v,e.v)):new Sk.builtin.float_(j.processing.dist(a.v,b.v,c.v,d.v,e.v,f.v))}),j.emissive=new Sk.builtin.func(function(a,b,c){"undefined"==typeof b?j.processing.emissive(a.v):"undefined"==typeof c?j.processing.emissive(a.v,b.v):j.processing.emissive(a.v,b.v,c.v)}),j.endCamera=new Sk.builtin.func(function(){j.processing.endCamera()}),j.endShape=new Sk.builtin.func(function(a){"undefined"==typeof a?j.processing.endShape():j.processing.endShape(a.v)}),j.filter=new Sk.builtin.func(function(a,b){"undefined"==typeof b?j.processing.filter(a.v):j.processing.filter(a.v,b.v)}),j.frustum=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.frustum(a,b,c,d,e,f)}),j.hint=new Sk.builtin.func(function(a){j.processing.hint(a)}),j.hour=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.hour())}),j.hue=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.hue(a.v))}),j.imageMode=new Sk.builtin.func(function(a){j.processing.imageMode(a.v)}),j.lerp=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.lerp(a.v,b.v,c.v))}),j.lerpColor=new Sk.builtin.func(function(a,b,d){var e=Sk.misceval.callsimArray(j.color,[new Sk.builtin.int_(0),new Sk.builtin.int_(0),new Sk.builtin.int_(0)]);return e.v=j.processing.lerpColor(a.v,b.v,d.v),e}),j.lightFalloff=new Sk.builtin.func(function(a,b,c){j.processing.lightFalloff(a.v,b.v,c.v)}),j.lights=new Sk.builtin.func(function(){j.processing.lights()}),j.lightSpecular=new Sk.builtin.func(function(a,b,c){j.processing.lightSpecular(a.v,b.v,c.v)}),j.loadBytes=new Sk.builtin.func(function(a){return new Sk.builtin.list(j.processing.loadBytes(a.v))}),j.loadFont=new Sk.builtin.func(function(a){var b=Sk.misceval.callsimArray(j.PFont);return b.v=j.processing.loadFont(a.v),b}),j.loadShape=new Sk.builtin.func(function(a){var b=Sk.misceval.callsimArray(j.PShapeSVG,[new Sk.builtin.str("string"),a]);return b}),j.loadStrings=new Sk.builtin.func(function(a){return new Sk.builtin.list(j.processing.loadStrings(a.v))}),j.mag=new Sk.builtin.func(function(d,a,b){return"undefined"==typeof b?new Sk.builtin.float_(j.processing.mag(d.v,a.v)):new Sk.builtin.float_(j.processing.mag(d.v,a.v,b.v))}),j.map=new Sk.builtin.func(function(a,b,c,d,e){return new Sk.builtin.float_(j.processing.map(a.v,b.v,c.v,d.v,e.v))}),j.millis=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.millis())}),j.minute=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.minute())}),j.modelX=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.modelX(a.v,b.v,c.v))}),j.modelY=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.modelY(a.v,b.v,c.v))}),j.modelZ=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.modelZ(a.v,b.v,c.v))}),j.month=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.month())}),j.noCursor=new Sk.builtin.func(function(){j.processing.noCursor()}),j.noise=new Sk.builtin.func(function(a,b,c){return"undefined"==typeof b?new Sk.builtin.float_(j.processing.noise(a.v)):"undefined"==typeof c?new Sk.builtin.float_(j.processing.noise(a.v,b.v)):new Sk.builtin.float_(j.processing.noise(a.v,b.v,c.v))}),j.noiseDetail=new Sk.builtin.func(function(a,b){j.processing.noiseDetail(a.v,b.v)}),j.noiseSeed=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.noiseSeed(a.v))}),j.noLights=new Sk.builtin.func(function(){j.processing.noLights()}),j.norm=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.norm(a.v,b.v,c.v))}),j.normal=new Sk.builtin.func(function(a,b,c){j.processing.normal(a.v,b.v,c.v)}),j.noTint=new Sk.builtin.func(function(){j.processing.noTint()}),j.ortho=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.ortho(a.v,b.v,c.v,d.v,e.v,f.v)}),j.perspective=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof a?j.processing.perspective():"undefined"==typeof b?j.processing.perspective(a.v):"undefined"==typeof c?j.processing.perspective(a.v,b.v):"undefined"==typeof d?j.processing.perspective(a.v,b.v,c.v):j.processing.perspective(a.v,b.v,c.v,d.v)}),j.pointLight=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.pointLight(a.v,b.v,c.v,d.v,e.v,f.v)}),j.printCamera=new Sk.builtin.func(function(){j.processing.printCamera()}),j.println=new Sk.builtin.func(function(a){j.processing.println(a.v)}),j.printProjection=new Sk.builtin.func(function(){j.processing.printProjection()}),j.radians=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.radians(a.v))}),j.randomSeed=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.randomSeed(a.v))}),j.random=new Sk.builtin.func(function(a,b){return"undefined"==typeof a?new Sk.builtin.float_(j.processing.random()):"undefined"==typeof b?new Sk.builtin.float_(j.processing.random(a.v)):new Sk.builtin.float_(j.processing.random(a.v,b.v))}),j.requestImage=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PImage);return c.v="undefined"==typeof b?j.processing.requestImage(a.v):j.processing.requestImage(a.v,b.v),c}),j.saturation=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.saturation(a.v))}),j.save=new Sk.builtin.func(function(a){j.processing.save(a.v)}),j.saveFrame=new Sk.builtin.func(function(a){"undefined"==typeof a?j.processing.saveFrame():j.processing.saveFrame(a.v)}),j.saveStrings=new Sk.builtin.func(function(a,b){j.processing.saveStrings(a.v,b.v)}),j.screenX=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.screenX(a.v,b.v,c.v))}),j.screenY=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.screenY(a.v,b.v,c.v))}),j.screenZ=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.screenZ(a.v,b.v,c.v))}),j.second=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.second())}),j.shape=new Sk.builtin.func(function(a,b,c,d,e){"undefined"==typeof b?j.processing.shape(a.v):"undefined"==typeof c?j.processing.shape(a.v,b.v):"undefined"==typeof d?j.processing.shape(a.v,b.v,c.v):"undefined"==typeof e?j.processing.shape(a.v,b.v,c.v,d.v):j.processing.shape(a.v,b.v,c.v,d.v,e.v)}),j.shapeMode=new Sk.builtin.func(function(a){j.processing.shapeMode(a.v)}),j.shininess=new Sk.builtin.func(function(a){j.processing.shininess(a.v)}),j.specular=new Sk.builtin.func(function(a,b,c){"undefined"==typeof b?j.processing.specular(a.v):"undefined"==typeof c?j.processing.specular(a.v,b.v):j.processing.specular(a.v,b.v,c.v)}),j.spotLight=new Sk.builtin.func(function(a,b,c,d,e,f,g,h){j.processing.spotLight(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v)}),j.sq=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.sq(a))}),j.status=new Sk.builtin.func(function(a){j.processing.status(a.v)}),j.textAlign=new Sk.builtin.func(function(a,b){"undefined"==typeof b?j.processing.textAlign(a.v):j.processing.textAlign(a.v,b.v)}),j.textAscent=new Sk.builtin.func(function(){return new Sk.builtin.float_(j.processing.textAscent())}),j.textDescent=new Sk.builtin.func(function(){return new Sk.builtin.float_(j.processing.textDescent())}),j.textFont=new Sk.builtin.func(function(a,b){"undefined"==typeof b?j.processing.textFont(a.v):j.processing.textFont(a.v,b.v)}),j.textLeading=new Sk.builtin.func(function(a){j.processing.textLeading(a.v)}),j.textMode=new Sk.builtin.func(function(a){j.processing.textMode(a.v)}),j.textSize=new Sk.builtin.func(function(a){j.processing.textSize(a.v)}),j.texture=new Sk.builtin.func(function(a){j.processing.texture(a.v)}),j.textureMode=new Sk.builtin.func(function(a){j.processing.textureMode(a.v)}),j.textWidth=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.textWidth(a.v))}),j.tint=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof b?j.processing.tint(a.v):"undefined"==typeof c?j.processing.tint(a.v,b.v):"undefined"==typeof d?j.processing.tint(a.v,b.v,c.v):j.processing.tint(a.v,b.v,c.v,d.v)}),j.updatePixels=new Sk.builtin.func(function(){j.processing.updatePixels()}),j.vertex=new Sk.builtin.func(function(a,b,c,d,e){"undefined"==typeof c?j.processing.vertex(a.v,b.v):"undefined"==typeof d?j.processing.vertex(a.v,b.v,c.v):"undefined"==typeof e?j.processing.vertex(a.v,b.v,c.v,d.v):j.processing.vertex(a.v,b.v,c.v,d.v,e.v)}),j.year=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.year())}),j.box=new Sk.builtin.func(function(a){j.processing.box(a.v)}),j.sphere=new Sk.builtin.func(function(a){j.processing.sphere(a.v)}),j.sphereDetail=new Sk.builtin.func(function(a,b){"undefined"==typeof b?j.processing.sphereDetail(a.v):j.processing.sphereDetail(a.v,b.v)}),j.background=new Sk.builtin.func(function(a,c,d){"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),j.processing.background(a.v,c,d)}),j.fill=new Sk.builtin.func(function(a,c,d,e){"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),"undefined"!=typeof e&&(e=e.v),j.processing.fill(a.v,c,d,e)}),j.stroke=new Sk.builtin.func(function(a,c,d,e){"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),"undefined"!=typeof e&&(e=e.v),j.processing.stroke(a.v,c,d,e)}),j.noStroke=new Sk.builtin.func(function(){j.processing.noStroke()}),j.colorMode=new Sk.builtin.func(function(a,b,c,d,e){b="undefined"==typeof b?255:b.v,"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),"undefined"!=typeof e&&(e=e.v),j.processing.colorMode(a.v,b,c,d,e)}),j.noFill=new Sk.builtin.func(function(){j.processing.noFill()}),j.loop=new Sk.builtin.func(function(){if(null===j.processing)throw new Sk.builtin.Exception("loop() should be called after run()");l=!0,j.processing.loop()}),j.noLoop=new Sk.builtin.func(function(){if(null===j.processing)throw new Sk.builtin.Exception("noLoop() should be called after run()");l=!1,j.processing.noLoop()}),j.frameRate=new Sk.builtin.func(function(a){j.processing.frameRate(a.v)}),j.width=new Sk.builtin.int_(0),j.height=new Sk.builtin.int_(0),j.renderMode=j.P2D,j.size=new Sk.builtin.func(function(a,b,c){"undefined"==typeof c&&(c=j.P2D),j.processing.size(a.v,b.v,c.v),j.width=new Sk.builtin.int_(j.processing.width),j.height=new Sk.builtin.int_(j.processing.height),j.renderMode=c}),j.exitp=new Sk.builtin.func(function(){j.processing.exit()}),j.mouseX=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.mouseX)}),j.mouseY=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.mouseY)}),j.pmouseX=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.pmouseX)}),j.pmouseY=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.pmouseY)}),j.rectMode=new Sk.builtin.func(function(a){j.processing.rectMode(a.v)}),j.strokeWeight=new Sk.builtin.func(function(a){j.processing.strokeWeight(a.v)}),j.smooth=new Sk.builtin.func(function(){j.processing.smooth()}),j.noSmooth=new Sk.builtin.func(function(){j.processing.noSmooth()}),j.ellipseMode=new Sk.builtin.func(function(a){j.processing.ellipseMode(a.v)}),j.strokeCap=new Sk.builtin.func(function(a){j.processing.strokeCap(a.v)}),j.strokeJoin=new Sk.builtin.func(function(a){j.processing.strokeJoin(a.v)}),j.rotate=new Sk.builtin.func(function(a){j.processing.rotate(a.v)}),j.rotateX=new Sk.builtin.func(function(a){j.processing.rotateX(a.v)}),j.rotateY=new Sk.builtin.func(function(a){j.processing.rotateY(a.v)}),j.rotateZ=new Sk.builtin.func(function(a){j.processing.rotateZ(a.v)}),j.scale=new Sk.builtin.func(function(a,b,c){b="undefined"==typeof b?1:b.v,c="undefined"==typeof c?1:c.v,j.processing.scale(a.v,b,c)}),j.translate=new Sk.builtin.func(function(a,b,c){b="undefined"==typeof b?1:b.v,c="undefined"==typeof c?1:c.v,j.processing.translate(a.v,b,c)}),j.popMatrix=new Sk.builtin.func(function(){j.processing.popMatrix()}),j.pushMatrix=new Sk.builtin.func(function(){j.processing.pushMatrix()}),j.applyMatrix=new Sk.builtin.func(function(){var a,b=Array.prototype.slice.call(arguments,0,16);for(a=0;a<b.length;a++)b[a]="undefined"==typeof b[a]?0:b[a].v;j.processing.applyMatrix.apply(j.processing,b)}),j.resetMatrix=new Sk.builtin.func(function(){j.processing.resetMatrix()}),j.printMatrix=new Sk.builtin.func(function(){return Sk.ffi.remapToPy(j.processing.printMatrix())}),j.run=new Sk.builtin.func(function(){var a=document.getElementById(Sk.canvas);if(!a)throw new Error("Processing module: Canvas element not specified");if(window.Processing.logger={log:function(a){Sk.misceval.print_(a)}},m=window.Processing.getInstanceById(Sk.canvas),m&&m.exit(),j.p=new window.Processing(a,function(a){j.processing=a,a.draw=function(){var b=!1;for(var c in k)0===k[c].width&&(b=!0);if(!0==b)return!0===l?void 0:void a.loop();if(!1===l&&a.noLoop(),j.frameCount=a.frameCount,Sk.globals.draw)try{Sk.misceval.callsimArray(Sk.globals.draw)}catch(a){Sk.uncaughtException(a)}};var b=["setup","mouseMoved","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","keyPressed","keyReleased","keyTyped"];for(var c in b)Sk.globals[b[c]]&&(a[b[c]]=new Function("try {Sk.misceval.callsimArray(Sk.globals['"+b[c]+"']);} catch(e) {Sk.uncaughtException(e);}"))}),0===j.width.v&&0===j.height.v){var b=a.offsetWidth,c=a.offsetHeight;Sk.misceval.callsimArray(j.size,[new Sk.builtin.int_(b),new Sk.builtin.int_(c),j.renderMode])}}),g=function(a,b){b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"x"===b)?Sk.builtin.assk$(j.processing.mouseX):"y"===b?Sk.builtin.assk$(j.processing.mouseY):"px"===b?Sk.builtin.assk$(j.processing.pmouseX):"py"===b?Sk.builtin.assk$(j.processing.pmouseY):"pressed"===b?new Sk.builtin.bool(j.processing.__mousePressed):"button"===b?Sk.builtin.assk$(j.processing.mouseButton):void 0})},j.Mouse=Sk.misceval.buildClass(j,g,"Mouse",[]),j.mouse=Sk.misceval.callsimArray(j.Mouse),f=function(a,b){b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"key"===b)?new Sk.builtin.str(j.processing.key.toString()):"keyCode"===b?Sk.builtin.assk$(j.processing.keyCode):"keyPressed"===b?new Sk.builtin.str(j.processing.keyPressed):void 0})},j.Keyboard=Sk.misceval.buildClass(j,f,"Keyboard",[]),j.keyboard=Sk.misceval.callsimArray(j.Keyboard),e=function(a,b){b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"frameCount"===b)?Sk.builtin.assk$(j.processing.frameCount):"frameRate"===b?Sk.builtin.assk$(j.processing.frameRate):"height"===b?Sk.builtin.assk$(j.processing.height):"width"===b?Sk.builtin.assk$(j.processing.width):"online"===b?new Sk.builtin.bool(j.processing.online):"focused"===b?new Sk.builtin.bool(j.processing.focused):void 0})},j.Environment=Sk.misceval.buildClass(j,e,"Environment",[]),j.environment=Sk.misceval.callsimArray(j.Environment),d=function(a,b){b.__init__=new Sk.builtin.func(function(a){a.pixels=null}),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"height"===b)?Sk.builtin.assk$(j.processing.height):"width"===b?Sk.builtin.assk$(j.processing.width):("pixels"===b&&null==a.pixels&&(a.pixels=new Sk.builtin.list(j.processing.pixels.toArray())),a.pixels)})},j.Screen=Sk.misceval.buildClass(j,d,"Screen",[]),j.screen=Sk.misceval.callsimArray(j.Screen),j.loadPixels=new Sk.builtin.func(function(){j.processing.loadPixels()}),c=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d,e){"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),"undefined"!=typeof e&&(e=e.v),a.v=j.processing.color(b.v,c,d,e)})},j.color=Sk.misceval.buildClass(j,c,"color",[]),j.red=new Sk.builtin.func(function(a){return new Sk.builtin.int_(j.processing.red(a.v))}),j.green=new Sk.builtin.func(function(a){return new Sk.builtin.int_(j.processing.green(a.v))}),j.blue=new Sk.builtin.func(function(a){return new Sk.builtin.int_(j.processing.blue(a.v))}),b=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.v="undefined"==typeof b?new j.processing.PImage:"undefined"==typeof c?new j.processing.PImage(b.v):"undefined"==typeof d?new j.processing.PImage(b.v,c.v):new j.processing.PImage(b.v,c.v,d.v)}),b.__getattr__=new Sk.builtin.func(function(a,b){return b=Sk.ffi.remapToJs(b),"width"===b?Sk.builtin.assk$(a.v.width):"height"===b?Sk.builtin.assk$(a.v.height):void 0})},j.loadImage=new Sk.builtin.func(function(a){var b=j.processing.loadImage(a.v);k.push(b);var c=Sk.misceval.callsimArray(j.PImage);return c.v=b,c}),j.image=new Sk.builtin.func(function(a,b,c,d,e){"undefined"==typeof d?j.processing.image(a.v,b.v,c.v):j.processing.image(a.v,b.v,c.v,d.v,e.v)}),j.get=new Sk.builtin.func(function(a,b){var c=j.processing.get(a.v,b.v);return Sk.misceval.callsimArray(j.color,[new Sk.builtin.int_(j.processing.red(c)),new Sk.builtin.int_(j.processing.green(c)),new Sk.builtin.int_(j.processing.blue(c))])}),j.set=new Sk.builtin.func(function(a,b,c){j.processing.set(a.v,b.v,c.v)}),h=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.v="undefined"==typeof b?new j.processing.PVector:"undefined"==typeof d?new j.processing.PVector(b.v,c.v):new j.processing.PVector(b.v,c.v,d.v)}),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"x"===b)?Sk.builtin.assk$(a.v.x):"y"===b?Sk.builtin.assk$(a.v.y):"z"===b?Sk.builtin.assk$(a.v.z):void 0}),b.get=new Sk.builtin.func(function(a){var b=Sk.misceval.callsimArray(j.PVector);return b.v=a.v.get(),b}),b.set=new Sk.builtin.func(function(a,b,c,b){"undefined"==typeof z?a.v.set(b.v,c.v):a.v.set(b.v,c.v,z.v)}),b.mag=new Sk.builtin.func(function(a){return Sk.builtin.assk$(a.v.mag())}),b.add=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.add(b.v),c}),b.sub=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.sub(b.v),c}),b.mult=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.mult(b.v),c}),b.div=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.dic(b.v),c}),b.dist=new Sk.builtin.func(function(a,b){return Sk.builtin.assk$(a.v.dist(b.v))}),b.dot=new Sk.builtin.func(function(a,b,c,d){return"undefined"==typeof c?Sk.builtin.assk$(a.v.dot(b.v)):Sk.builtin.assk$(a.v.dot(b.v,c.v,d.v))}),b.cross=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.cross(b.v),c}),b.normalize=new Sk.builtin.func(function(a){a.v.normalize()}),b.limit=new Sk.builtin.func(function(a,b){a.v.limit(b.v)}),b.angleBetween=new Sk.builtin.func(function(a,b){return Sk.builtin.assk$(a.v.angleBetween(b.v))}),b.array=new Sk.builtin.func(function(a){return new Sk.builtin.list(a.v.array())})},fontClass=function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.v="undefined"==typeof b?new j.processing.PFont:new j.processing.PVector(b.v)}),b.list=new Sk.builtin.func(function(a){return new Sk.builtin.list(a.v.list())})},graphicsClass=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.v="undefined"==typeof b?new j.processing.PVector:"undefined"==typeof d?new j.processing.PVector(b.v,c.v):new j.processing.PVector(b.v,c.v,d.v)}),b.beginDraw=new Sk.builtin.func(function(a){a.v.beginDraw()}),b.endDraw=new Sk.builtin.func(function(a){a.v.endDraw()})},shapeClass=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.v="undefined"==typeof b?null:"undefined"==typeof c?new j.processing.PShapeSVG(b.v):"undefined"==typeof d?new j.processing.PShapeSVG(b.v,c.v):new j.processing.PShapeSVG(b.v,c.v,d.v)}),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"width"===b)?Sk.builtin.assk$(a.v.width):"height"===b?Sk.builtin.assk$(a.v.height):void 0}),b.isVisible=new Sk.builtin.func(function(a){return new Sk.builtin.bool(a.v.isVisible())}),b.setVisible=new Sk.builtin.func(function(a,b){a.v.setVisible(b.v)}),b.disableStyle=new Sk.builtin.func(function(a){a.v.disableStyle()}),b.enableStyle=new Sk.builtin.func(function(a){a.v.enableStyle()}),b.getChild=new Sk.builtin.func(function(a,b){var c=a.v.getChild(b.v);if(null!=c){var d=Sk.misceval.callsimArray(j.PShapeSVG);return d.v=c,d}return null}),b.translate=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof d?a.v.translate(b.v,c.v):a.v.translate(b.v,c.v,d.v)}),b.rotate=new Sk.builtin.func(function(a,b){a.v.rotate(b.v)}),b.rotateX=new Sk.builtin.func(function(a,b){a.v.rotateX(b.v)}),b.rotateY=new Sk.builtin.func(function(a){a.v.rotateY(angle.v)}),b.rotateZ=new Sk.builtin.func(function(a){a.v.rotateZ(angle.v)}),b.scale=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof c?a.v.scale(b.v):"undefined"==typeof d?a.v.scale(b.v,c.v):a.v.scale(b.v,c.v,d.v)})},j.PFont=Sk.misceval.buildClass(j,fontClass,"PFont",[]),j.PGraphics=Sk.misceval.buildClass(j,graphicsClass,"PGraphics",[]),j.PShapeSVG=Sk.misceval.buildClass(j,shapeClass,"PShapeSVG",[]),j.PVector=Sk.misceval.buildClass(j,h,"PVector",[]),j.PImage=Sk.misceval.buildClass(j,b,"PImage",[]),j};`,"src/lib/profile.py":`raise NotImplementedError("profile is not yet implemented in Skulpt")
`,"src/lib/pstats.py":`raise NotImplementedError("pstats is not yet implemented in Skulpt")
`,"src/lib/pty.py":`raise NotImplementedError("pty is not yet implemented in Skulpt")
`,"src/lib/py_compile.py":`raise NotImplementedError("py_compile is not yet implemented in Skulpt")
`,"src/lib/pyclbr.py":`raise NotImplementedError("pyclbr is not yet implemented in Skulpt")
`,"src/lib/pydoc.py":`raise NotImplementedError("pydoc is not yet implemented in Skulpt")
`,"src/lib/pydoc_topics.py":`raise NotImplementedError("pydoc_topics is not yet implemented in Skulpt")
`,"src/lib/pythonds/__init__.py":"","src/lib/pythonds/basic/__init__.py":`
#__all__ = ["stack"]


#from .stack import Stack
#from .queue import Queue



`,"src/lib/pythonds/basic/deque.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#deque.py\r
\r
\r
class Deque:\r
    def __init__(self):\r
        self.items = []\r
\r
    def isEmpty(self):\r
        return self.items == []\r
\r
    def addFront(self, item):\r
        self.items.append(item)\r
\r
    def addRear(self, item):\r
        self.items.insert(0,item)\r
\r
    def removeFront(self):\r
        return self.items.pop()\r
\r
    def removeRear(self):\r
        return self.items.pop(0)\r
\r
    def size(self):\r
        return len(self.items)\r
`,"src/lib/pythonds/basic/queue.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#queue.py\r
\r
class Queue:\r
    def __init__(self):\r
        self.items = []\r
\r
    def isEmpty(self):\r
        return self.items == []\r
\r
    def enqueue(self, item):\r
        self.items.insert(0,item)\r
\r
    def dequeue(self):\r
        return self.items.pop()\r
\r
    def size(self):\r
        return len(self.items)\r
`,"src/lib/pythonds/basic/stack.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#stack.py\r
\r
class Stack:\r
    def __init__(self):\r
        self.items = []\r
\r
    def isEmpty(self):\r
        return self.items == []\r
\r
    def push(self, item):\r
        self.items.append(item)\r
\r
    def pop(self):\r
        return self.items.pop()\r
\r
    def peek(self):\r
        return self.items[len(self.items)-1]\r
\r
    def size(self):\r
        return len(self.items)\r
\r
`,"src/lib/pythonds/graphs/__init__.py":`

from .adjGraph import Graph
from .adjGraph import Vertex
from .priorityQueue import PriorityQueue
`,"src/lib/pythonds/graphs/adjGraph.py":`#
#  adjGraph
#
#  Created by Brad Miller on 2005-02-24.
#  Copyright (c) 2005 Brad Miller, David Ranum, Luther College. All rights reserved.
#

import sys
import os
import unittest

class Graph:
    def __init__(self):
        self.vertices = {}
        self.numVertices = 0
        
    def addVertex(self,key):
        self.numVertices = self.numVertices + 1
        newVertex = Vertex(key)
        self.vertices[key] = newVertex
        return newVertex
    
    def getVertex(self,n):
        if n in self.vertices:
            return self.vertices[n]
        else:
            return None

    def __contains__(self,n):
        return n in self.vertices
    
    def addEdge(self,f,t,cost=0):
            if f not in self.vertices:
                nv = self.addVertex(f)
            if t not in self.vertices:
                nv = self.addVertex(t)
            self.vertices[f].addNeighbor(self.vertices[t],cost)
    
    def getVertices(self):
        return list(self.vertices.keys())
        
    def __iter__(self):
        return iter(self.vertices.values())
                
class Vertex:
    def __init__(self,num):
        self.id = num
        self.connectedTo = {}
        self.color = 'white'
        self.dist = sys.maxsize
        self.pred = None
        self.disc = 0
        self.fin = 0

    # def __lt__(self,o):
    #     return self.id < o.id
    
    def addNeighbor(self,nbr,weight=0):
        self.connectedTo[nbr] = weight
        
    def setColor(self,color):
        self.color = color
        
    def setDistance(self,d):
        self.dist = d

    def setPred(self,p):
        self.pred = p

    def setDiscovery(self,dtime):
        self.disc = dtime
        
    def setFinish(self,ftime):
        self.fin = ftime
        
    def getFinish(self):
        return self.fin
        
    def getDiscovery(self):
        return self.disc
        
    def getPred(self):
        return self.pred
        
    def getDistance(self):
        return self.dist
        
    def getColor(self):
        return self.color
    
    def getConnections(self):
        return self.connectedTo.keys()
        
    def getWeight(self,nbr):
        return self.connectedTo[nbr]
                
    def __str__(self):
        return str(self.id) + ":color " + self.color + ":disc " + str(self.disc) + ":fin " + str(self.fin) + ":dist " + str(self.dist) + ":pred \\n\\t[" + str(self.pred)+ "]\\n"
    
    def getId(self):
        return self.id

class adjGraphTests(unittest.TestCase):
    def setUp(self):
        self.tGraph = Graph()
        
    def testMakeGraph(self):
        gFile = open("test.dat")
        for line in gFile:
            fVertex, tVertex = line.split('|')
            fVertex = int(fVertex)
            tVertex = int(tVertex)
            self.tGraph.addEdge(fVertex,tVertex)
        for i in self.tGraph:
            adj = i.getAdj()
            for k in adj:
                print(i, k)

        
if __name__ == '__main__':
    unittest.main()
              
`,"src/lib/pythonds/graphs/priorityQueue.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
import unittest

# this implementation of binary heap takes key value pairs,
# we will assume that the keys are all comparable

class PriorityQueue:
    def __init__(self):
        self.heapArray = [(0,0)]
        self.currentSize = 0

    def buildHeap(self,alist):
        self.currentSize = len(alist)
        self.heapArray = [(0,0)]
        for i in alist:
            self.heapArray.append(i)
        i = len(alist) // 2            
        while (i > 0):
            self.percDown(i)
            i = i - 1
                        
    def percDown(self,i):
        while (i * 2) <= self.currentSize:
            mc = self.minChild(i)
            if self.heapArray[i][0] > self.heapArray[mc][0]:
                tmp = self.heapArray[i]
                self.heapArray[i] = self.heapArray[mc]
                self.heapArray[mc] = tmp
            i = mc
                
    def minChild(self,i):
        if i*2 > self.currentSize:
            return -1
        else:
            if i*2 + 1 > self.currentSize:
                return i*2
            else:
                if self.heapArray[i*2][0] < self.heapArray[i*2+1][0]:
                    return i*2
                else:
                    return i*2+1

    def percUp(self,i):
        while i // 2 > 0:
            if self.heapArray[i][0] < self.heapArray[i//2][0]:
               tmp = self.heapArray[i//2]
               self.heapArray[i//2] = self.heapArray[i]
               self.heapArray[i] = tmp
            i = i//2
 
    def add(self,k):
        self.heapArray.append(k)
        self.currentSize = self.currentSize + 1
        self.percUp(self.currentSize)

    def delMin(self):
        retval = self.heapArray[1][1]
        self.heapArray[1] = self.heapArray[self.currentSize]
        self.currentSize = self.currentSize - 1
        self.heapArray.pop()
        self.percDown(1)
        return retval
        
    def isEmpty(self):
        if self.currentSize == 0:
            return True
        else:
            return False

    def decreaseKey(self,val,amt):
        # this is a little wierd, but we need to find the heap thing to decrease by
        # looking at its value
        done = False
        i = 1
        myKey = 0
        while not done and i <= self.currentSize:
            if self.heapArray[i][1] == val:
                done = True
                myKey = i
            else:
                i = i + 1
        if myKey > 0:
            self.heapArray[myKey] = (amt,self.heapArray[myKey][1])
            self.percUp(myKey)
            
    def __contains__(self,vtx):
        for pair in self.heapArray:
            if pair[1] == vtx:
                return True
        return False
        
class TestBinHeap(unittest.TestCase):
    def setUp(self):
        self.theHeap = PriorityQueue()
        self.theHeap.add((2,'x'))
        self.theHeap.add((3,'y'))
        self.theHeap.add((5,'z'))
        self.theHeap.add((6,'a'))
        self.theHeap.add((4,'d'))


    def testInsert(self):
        assert self.theHeap.currentSize == 5

    def testDelmin(self):
        assert self.theHeap.delMin() == 'x'
        assert self.theHeap.delMin() == 'y'
    
    def testDecKey(self):
        self.theHeap.decreaseKey('d',1)
        assert self.theHeap.delMin() == 'd'
        
if __name__ == '__main__':
    unittest.main()
`,"src/lib/pythonds/trees/__init__.py":`
# from .binaryTree import BinaryTree
# from .balance import AVLTree
# from .bst import BinarySearchTree
# from .binheap import BinHeap


`,"src/lib/pythonds/trees/balance.py":`#!/bin/env python3.1
# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005, 2010
# 

from .bst import BinarySearchTree, TreeNode

class AVLTree(BinarySearchTree):
    '''
    Author:  Brad Miller
    Date:  1/15/2005
    Description:  Imlement a binary search tree with the following interface
                  functions:  
                  __contains__(y) <==> y in x
                  __getitem__(y) <==> x[y]
                  __init__()
                  __len__() <==> len(x)
                  __setitem__(k,v) <==> x[k] = v
                  clear()
                  get(k)
                  has_key(k)
                  items() 
                  keys() 
                  values()
                  put(k,v)
    '''


    def _put(self,key,val,currentNode):
        if key < currentNode.key:
            if currentNode.hasLeftChild():
                self._put(key,val,currentNode.leftChild)
            else:
                currentNode.leftChild = TreeNode(key,val,parent=currentNode)
                self.updateBalance(currentNode.leftChild)
        else:
            if currentNode.hasRightChild():
                self._put(key,val,currentNode.rightChild)
            else:
                currentNode.rightChild = TreeNode(key,val,parent=currentNode)
                self.updateBalance(currentNode.rightChild)                

    def updateBalance(self,node):
        if node.balanceFactor > 1 or node.balanceFactor < -1:
            self.rebalance(node)
            return
        if node.parent != None:
            if node.isLeftChild():
                node.parent.balanceFactor += 1
            elif node.isRightChild():
                node.parent.balanceFactor -= 1

            if node.parent.balanceFactor != 0:
                self.updateBalance(node.parent)

    def rebalance(self,node):
        if node.balanceFactor < 0:
            if node.rightChild.balanceFactor > 0:
                # Do an LR Rotation
                self.rotateRight(node.rightChild)
                self.rotateLeft(node)
            else:
                # single left
                self.rotateLeft(node)
        elif node.balanceFactor > 0:
            if node.leftChild.balanceFactor < 0:
                # Do an RL Rotation
                self.rotateLeft(node.leftChild)
                self.rotateRight(node)
            else:
                # single right
                self.rotateRight(node)

    def rotateLeft(self,rotRoot):
        newRoot = rotRoot.rightChild
        rotRoot.rightChild = newRoot.leftChild
        if newRoot.leftChild != None:
            newRoot.leftChild.parent = rotRoot
        newRoot.parent = rotRoot.parent
        if rotRoot.isRoot():
            self.root = newRoot
        else:
            if rotRoot.isLeftChild():
                rotRoot.parent.leftChild = newRoot
            else:
                rotRoot.parent.rightChild = newRoot
        newRoot.leftChild = rotRoot
        rotRoot.parent = newRoot
        rotRoot.balanceFactor = rotRoot.balanceFactor + 1 - min(newRoot.balanceFactor, 0)
        newRoot.balanceFactor = newRoot.balanceFactor + 1 + max(rotRoot.balanceFactor, 0)


    def rotateRight(self,rotRoot):
        newRoot = rotRoot.leftChild
        rotRoot.leftChild = newRoot.rightChild
        if newRoot.rightChild != None:
            newRoot.rightChild.parent = rotRoot
        newRoot.parent = rotRoot.parent
        if rotRoot.isRoot():
            self.root = newRoot
        else:
            if rotRoot.isRightChild():
                rotRoot.parent.rightChild = newRoot
            else:
                rotRoot.parent.leftChild = newRoot
        newRoot.rightChild = rotRoot
        rotRoot.parent = newRoot
        rotRoot.balanceFactor = rotRoot.balanceFactor - 1 - max(newRoot.balanceFactor, 0)
        newRoot.balanceFactor = newRoot.balanceFactor - 1 + min(rotRoot.balanceFactor, 0)
        
`,"src/lib/pythonds/trees/binaryTree.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 

class BinaryTree:
    """
    A recursive implementation of Binary Tree
    Using links and Nodes approach.
    """    
    def __init__(self,rootObj):
        self.key = rootObj
        self.leftChild = None
        self.rightChild = None

    def insertLeft(self,newNode):
        if self.leftChild == None:
            self.leftChild = BinaryTree(newNode)
        else:
            t = BinaryTree(newNode)
            t.left = self.leftChild
            self.leftChild = t
    
    def insertRight(self,newNode):
        if self.rightChild == None:
            self.rightChild = BinaryTree(newNode)
        else:
            t = BinaryTree(newNode)
            t.right = self.rightChild
            self.rightChild = t

    def isLeaf(self):
        return ((not self.leftChild) and (not self.rightChild))

    def getRightChild(self):
        return self.rightChild

    def getLeftChild(self):
        return self.leftChild

    def setRootVal(self,obj):
        self.key = obj

    def getRootVal(self,):
        return self.key

    def inorder(self):
        if self.leftChild:
            self.leftChild.inorder()
        print(self.key)
        if self.rightChild:
            self.rightChild.inorder()

    def postorder(self):
        if self.leftChild:
            self.leftChild.postorder()
        if self.rightChild:
            self.rightChild.postorder()
        print(self.key)


    def preorder(self):
        print(self.key)
        if self.leftChild:
            self.leftChild.preorder()
        if self.rightChild:
            self.rightChild.preorder()

    def printexp(self):
        if self.leftChild:
            print('(')
            self.leftChild.printexp()
        print(self.key)
        if self.rightChild:
            self.rightChild.printexp()
            print(')')

    def postordereval(self):
        opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv}
        res1 = None
        res2 = None
        if self.leftChild:
            res1 = self.leftChild.postordereval()  #// \\label{peleft}
        if self.rightChild:
            res2 = self.rightChild.postordereval() #// \\label{peright}
        if res1 and res2:
            return opers[self.key](res1,res2) #// \\label{peeval}
        else:
            return self.key

def inorder(tree):
    if tree != None:
        inorder(tree.getLeftChild())
        print(tree.getRootVal())
        inorder(tree.getRightChild())

def printexp(tree):
    if tree.leftChild:
        print('(')
        printexp(tree.getLeftChild())
    print(tree.getRootVal())
    if tree.rightChild:
        printexp(tree.getRightChild())
        print(')') 

def printexp(tree):
    sVal = ""
    if tree:
        sVal = '(' + printexp(tree.getLeftChild())
        sVal = sVal + str(tree.getRootVal())
        sVal = sVal + printexp(tree.getRightChild()) + ')'
    return sVal

def postordereval(tree):
    opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv}
    res1 = None
    res2 = None
    if tree:
        res1 = postordereval(tree.getLeftChild())  #// \\label{peleft}
        res2 = postordereval(tree.getRightChild()) #// \\label{peright}
        if res1 and res2:
            return opers[tree.getRootVal()](res1,res2) #// \\label{peeval}
        else:
            return tree.getRootVal()

def height(tree):
    if tree == None:
        return -1
    else:
        return 1 + max(height(tree.leftChild),height(tree.rightChild))

# t = BinaryTree(7)
# t.insertLeft(3)
# t.insertRight(9)
# inorder(t)
# import operator
# x = BinaryTree('*')
# x.insertLeft('+')
# l = x.getLeftChild()
# l.insertLeft(4)
# l.insertRight(5)
# x.insertRight(7)
# print(printexp(x))
# print(postordereval(x))
# print(height(x))
`,"src/lib/pythonds/trees/binheap.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 

# this heap takes key value pairs, we will assume that the keys are integers
class BinHeap:
    def __init__(self):
        self.heapList = [0]
        self.currentSize = 0


    def buildHeap(self,alist):
        i = len(alist) // 2
        self.currentSize = len(alist)
        self.heapList = [0] + alist[:]
        print(len(self.heapList), i)
        while (i > 0):
            print(self.heapList, i)
            self.percDown(i)
            i = i - 1
        print(self.heapList,i)
                        
    def percDown(self,i):
        while (i * 2) <= self.currentSize:
            mc = self.minChild(i)
            if self.heapList[i] > self.heapList[mc]:
                tmp = self.heapList[i]
                self.heapList[i] = self.heapList[mc]
                self.heapList[mc] = tmp
            i = mc
                
    def minChild(self,i):
        if i * 2 + 1 > self.currentSize:
            return i * 2
        else:
            if self.heapList[i * 2] < self.heapList[i * 2 + 1]:
                return i * 2
            else:
                return i * 2 + 1

    def percUp(self,i):
        while i // 2 > 0:
            if self.heapList[i] < self.heapList[i//2]:
               tmp = self.heapList[i // 2]
               self.heapList[i // 2] = self.heapList[i]
               self.heapList[i] = tmp
            i = i // 2
 
    def insert(self,k):
        self.heapList.append(k)
        self.currentSize = self.currentSize + 1
        self.percUp(self.currentSize)

    def delMin(self):
        retval = self.heapList[1]
        self.heapList[1] = self.heapList[self.currentSize]
        self.currentSize = self.currentSize - 1
        self.heapList.pop()
        self.percDown(1)
        return retval
        
    def isEmpty(self):
        if currentSize == 0:
            return True
        else:
            return False
`,"src/lib/pythonds/trees/bst.py":`#!/bin/env python3.1
# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005, 2010
# 

class BinarySearchTree:
    '''
    Author:  Brad Miller
    Date:  1/15/2005
    Description:  Imlement a binary search tree with the following interface
                  functions:  
                  __contains__(y) <==> y in x
                  __getitem__(y) <==> x[y]
                  __init__()
                  __len__() <==> len(x)
                  __setitem__(k,v) <==> x[k] = v
                  clear()
                  get(k)
                  items() 
                  keys() 
                  values()
                  put(k,v)
                  in
                  del <==> 
    '''

    def __init__(self):
        self.root = None
        self.size = 0
    
    def put(self,key,val):
        if self.root:
            self._put(key,val,self.root)
        else:
            self.root = TreeNode(key,val)
        self.size = self.size + 1

    def _put(self,key,val,currentNode):
        if key < currentNode.key:
            if currentNode.hasLeftChild():
                self._put(key,val,currentNode.leftChild)
            else:
                currentNode.leftChild = TreeNode(key,val,parent=currentNode)
        else:
            if currentNode.hasRightChild():
                self._put(key,val,currentNode.rightChild)
            else:
                currentNode.rightChild = TreeNode(key,val,parent=currentNode)
            
    def __setitem__(self,k,v):
        self.put(k,v)

    def get(self,key):
        if self.root:
            res = self._get(key,self.root)
            if res:
                return res.payload
            else:
                return None
        else:
            return None
        
    def _get(self,key,currentNode):
        if not currentNode:
            return None
        elif currentNode.key == key:
            return currentNode
        elif key < currentNode.key:
            return self._get(key,currentNode.leftChild)
        else:
            return self._get(key,currentNode.rightChild)
            
        
    def __getitem__(self,key):
        res = self.get(key)
        if res:
            return res
        else:
            raise KeyError('Error, key not in tree')
            

    def __contains__(self,key):
        if self._get(key,self.root):
            return True
        else:
            return False
        
    def length(self):
        return self.size

    def __len__(self):
        return self.size

    def __iter__(self):
        return self.root.__iter__()
    
    def delete(self,key):
        if self.size > 1:
            nodeToRemove = self._get(key,self.root)
            if nodeToRemove:
                self.remove(nodeToRemove)
                self.size = self.size-1
            else:
                raise KeyError('Error, key not in tree')
        elif self.size == 1 and self.root.key == key:
            self.root = None
            self.size = self.size - 1
        else:
            raise KeyError('Error, key not in tree')

    def __delitem__(self,key):
        self.delete(key)
    
    def remove(self,currentNode):
        if currentNode.isLeaf(): #leaf
            if currentNode == currentNode.parent.leftChild:
                currentNode.parent.leftChild = None
            else:
                currentNode.parent.rightChild = None
        elif currentNode.hasBothChildren(): #interior
            succ = currentNode.findSuccessor()
            succ.spliceOut()
            currentNode.key = succ.key
            currentNode.payload = succ.payload
        else: # this node has one child
            if currentNode.hasLeftChild():
                if currentNode.isLeftChild():
                    currentNode.leftChild.parent = currentNode.parent
                    currentNode.parent.leftChild = currentNode.leftChild
                elif currentNode.isRightChild():
                    currentNode.leftChild.parent = currentNode.parent
                    currentNode.parent.rightChild = currentNode.leftChild
                else:
                    currentNode.replaceNodeData(currentNode.leftChild.key,
                                       currentNode.leftChild.payload,
                                       currentNode.leftChild.leftChild,
                                       currentNode.leftChild.rightChild)
            else:
                if currentNode.isLeftChild():
                    currentNode.rightChild.parent = currentNode.parent
                    currentNode.parent.leftChild = currentNode.rightChild
                elif currentNode.isRightChild():
                    currentNode.rightChild.parent = currentNode.parent
                    currentNode.parent.rightChild = currentNode.rightChild
                else:
                    currentNode.replaceNodeData(currentNode.rightChild.key,
                                       currentNode.rightChild.payload,
                                       currentNode.rightChild.leftChild,
                                       currentNode.rightChild.rightChild)

    def inorder(self):
        self._inorder(self.root)

    def _inorder(self,tree):
        if tree != None:
            self._inorder(tree.leftChild)
            print(tree.key)
            self._inorder(tree.rightChild)

    def postorder(self):
        self._postorder(self.root)

    def _postorder(self, tree):
        if tree:
            self._postorder(tree.rightChild)
            self._postorder(tree.leftChild)
            print(tree.key)            

    def preorder(self):
        self._preorder(self,self.root)

    def _preorder(self,tree):
        if tree:
            print(tree.key)            
            self._preorder(tree.leftChild)
            self._preorder(tree.rightChild)

                
class TreeNode:
    def __init__(self,key,val,left=None,right=None,parent=None):
        self.key = key
        self.payload = val
        self.leftChild = left
        self.rightChild = right
        self.parent = parent
        self.balanceFactor = 0
        
    def hasLeftChild(self):
        return self.leftChild

    def hasRightChild(self):
        return self.rightChild
    
    def isLeftChild(self):
        return self.parent and self.parent.leftChild == self

    def isRightChild(self):
        return self.parent and self.parent.rightChild == self

    def isRoot(self):
        return not self.parent

    def isLeaf(self):
        return not (self.rightChild or self.leftChild)

    def hasAnyChildren(self):
        return self.rightChild or self.leftChild

    def hasBothChildren(self):
        return self.rightChild and self.leftChild
    
    def replaceNodeData(self,key,value,lc,rc):
        self.key = key
        self.payload = value
        self.leftChild = lc
        self.rightChild = rc
        if self.hasLeftChild():
            self.leftChild.parent = self
        if self.hasRightChild():
            self.rightChild.parent = self
        
    def findSuccessor(self):
        succ = None
        if self.hasRightChild():
            succ = self.rightChild.findMin()
        else:
            if self.parent:
                if self.isLeftChild():
                    succ = self.parent
                else:
                    self.parent.rightChild = None
                    succ = self.parent.findSuccessor()
                    self.parent.rightChild = self
        return succ


    def spliceOut(self):
        if self.isLeaf():
            if self.isLeftChild():
                self.parent.leftChild = None
            else:
                self.parent.rightChild = None
        elif self.hasAnyChildren():
            if self.hasLeftChild():
                if self.isLeftChild():
                    self.parent.leftChild = self.leftChild
                else:
                    self.parent.rightChild = self.leftChild
                self.leftChild.parent = self.parent
            else:
                if self.isLeftChild():
                    self.parent.leftChild = self.rightChild
                else:
                    self.parent.rightChild = self.rightChild
                self.rightChild.parent = self.parent

    def findMin(self):
        current = self
        while current.hasLeftChild():
            current = current.leftChild
        return current

    def __iter__(self):
        """The standard inorder traversal of a binary tree."""
        if self:
            if self.hasLeftChild():
                for elem in self.leftChild:
                    yield elem
            yield self.key
            if self.hasRightChild():
                for elem in self.rightChild:
                    yield elem

            
`,"src/lib/quopri.py":`raise NotImplementedError("quopri is not yet implemented in Skulpt")
`,"src/lib/random.js":'var MersenneTwister=function(a){a==null&&(a=new Date().getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=Array(this.N),this.mti=this.N+1,this.init_genrand(a)};MersenneTwister.prototype.init_genrand=function(a){for(this.mt[0]=a>>>0,this.mti=1;this.mti<this.N;this.mti++){var a=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&a)>>>16)<<16)+1812433253*(65535&a)+this.mti,this.mt[this.mti]>>>=0}},MersenneTwister.prototype.init_by_array=function(a,b){var d,e,f;for(this.init_genrand(19650218),d=1,e=0,f=this.N>b?this.N:b;f;f--){var g=this.mt[d-1]^this.mt[d-1]>>>30;this.mt[d]=(this.mt[d]^(1664525*((4294901760&g)>>>16)<<16)+1664525*(65535&g))+a[e]+e,this.mt[d]>>>=0,d++,e++,d>=this.N&&(this.mt[0]=this.mt[this.N-1],d=1),e>=b&&(e=0)}for(f=this.N-1;f;f--){var g=this.mt[d-1]^this.mt[d-1]>>>30;this.mt[d]=(this.mt[d]^(1566083941*((4294901760&g)>>>16)<<16)+1566083941*(65535&g))-d,this.mt[d]>>>=0,d++,d>=this.N&&(this.mt[0]=this.mt[this.N-1],d=1)}this.mt[0]=2147483648},MersenneTwister.prototype.genrand_int32=function(){var a,b=[0,this.MATRIX_A];if(this.mti>=this.N){var d;for(this.mti==this.N+1&&this.init_genrand(5489),d=0;d<this.N-this.M;d++)a=this.mt[d]&this.UPPER_MASK|this.mt[d+1]&this.LOWER_MASK,this.mt[d]=this.mt[d+this.M]^a>>>1^b[1&a];for(;d<this.N-1;d++)a=this.mt[d]&this.UPPER_MASK|this.mt[d+1]&this.LOWER_MASK,this.mt[d]=this.mt[d+(this.M-this.N)]^a>>>1^b[1&a];a=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^a>>>1^b[1&a],this.mti=0}return a=this.mt[this.mti++],a^=a>>>11,a^=2636928640&a<<7,a^=4022730752&a<<15,a^=a>>>18,a>>>0},MersenneTwister.prototype.genrand_int31=function(){return this.genrand_int32()>>>1},MersenneTwister.prototype.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},MersenneTwister.prototype.random=function(){return this.genrand_int32()*(1/4294967296)},MersenneTwister.prototype.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},MersenneTwister.prototype.genrand_res53=function(){var d=this.genrand_int32()>>>5,a=this.genrand_int32()>>>6;return(67108864*d+a)*(1/9007199254740992)};var $builtinmodule=function(){var a=Math.log,b=Math.sqrt,d={},e=new MersenneTwister,f=void 0;d.seed=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("seed",arguments.length,0,1),a=Sk.builtin.asnum$(a),e=0<arguments.length?new MersenneTwister(a):new MersenneTwister,Sk.builtin.none.none$}),d.random=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("random",arguments.length,0,0),new Sk.builtin.float_(e.genrand_res53())});var g=function(a){return 0|a},h=function(a,b,d){var f,h,i;if(!Sk.builtin.checkInt(a))throw new Sk.builtin.ValueError("non-integer first argument for randrange()");if(void 0===b)return i=g(e.genrand_res53()*a),new Sk.builtin.int_(i);if(!Sk.builtin.checkInt(b))throw new Sk.builtin.ValueError("non-integer stop for randrange()");if(void 0===d&&(d=1),f=b-a,1==d&&0<f)return i=a+g(e.genrand_res53()*f),new Sk.builtin.int_(i);if(1==d)throw new Sk.builtin.ValueError("empty range for randrange() ("+a+", "+b+", "+f+")");if(!Sk.builtin.checkInt(d))throw new Sk.builtin.ValueError("non-integer step for randrange()");if(0<d)h=g((f+d-1)/d);else if(0>d)h=g((f+d+1)/d);else throw new Sk.builtin.ValueError("zero step for randrange()");if(0>=h)throw new Sk.builtin.ValueError("empty range for randrange()");return i=a+d*g(e.genrand_res53()*h),new Sk.builtin.int_(i)};d.randint=new Sk.builtin.func(function(d,e){return Sk.builtin.pyCheckArgsLen("randint",arguments.length,2,2),d=Sk.builtin.asnum$(d),e=Sk.builtin.asnum$(e),h(d,e+1)}),d.randrange=new Sk.builtin.func(function(a,b,d){return Sk.builtin.pyCheckArgsLen("randrange",arguments.length,1,3),a=Sk.builtin.asnum$(a),b=Sk.builtin.asnum$(b),d=Sk.builtin.asnum$(d),h(a,b,d)}),d.uniform=new Sk.builtin.func(function(d,f){Sk.builtin.pyCheckArgsLen("uniform",arguments.length,2,2),d=Sk.builtin.asnum$(d),f=Sk.builtin.asnum$(f);var g=e.genrand_res53();return c=d+g*(f-d),new Sk.builtin.float_(c)}),d.triangular=new Sk.builtin.func(function(a,d,f){Sk.builtin.pyCheckArgsLen("triangular",arguments.length,2,3),Sk.builtin.pyCheckType("low","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("high","number",Sk.builtin.checkNumber(d));var g,h,i;return a=Sk.builtin.asnum$(a),d=Sk.builtin.asnum$(d),a>d&&(i=a,a=d,d=i),void 0===f||f instanceof Sk.builtin.none?f=(d-a)/2:(Sk.builtin.pyCheckType("mode","number",Sk.builtin.checkNumber(f)),f=Sk.builtin.asnum$(f)),g=e.genrand_res53(),h=g<(f-a)/(d-a)?a+b(g*(d-a)*(f-a)):d-b((1-g)*(d-a)*(d-f)),new Sk.builtin.float_(h)});var i=function(d,g){var k,l,m,n,o,h=Math.sin,i=Math.cos,j=Math.PI;return void 0===f?(k=e.genrand_res53(),l=e.genrand_res53(),m=b(-2*a(k)),n=2*j*l,o=m*i(n),f=m*h(n)):(o=f,f=void 0),d+g*o};return d.gauss=new Sk.builtin.func(function(a,b){return Sk.builtin.pyCheckArgsLen("gauss",arguments.length,2,2),Sk.builtin.pyCheckType("mu","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("sigma","number",Sk.builtin.checkNumber(b)),a=Sk.builtin.asnum$(a),b=Sk.builtin.asnum$(b),new Sk.builtin.float_(i(a,b))}),d.normalvariate=d.gauss,d.lognormvariate=new Sk.builtin.func(function(a,b){var d=Math.exp;return Sk.builtin.pyCheckArgsLen("lognormvariate",arguments.length,2,2),Sk.builtin.pyCheckType("mu","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("sigma","number",Sk.builtin.checkNumber(b)),a=Sk.builtin.asnum$(a),b=Sk.builtin.asnum$(b),new Sk.builtin.float_(d(i(a,b)))}),d.expovariate=new Sk.builtin.func(function(b){Sk.builtin.pyCheckArgsLen("expovariate",arguments.length,1,1),Sk.builtin.pyCheckType("lambd","number",Sk.builtin.checkNumber(b)),b=Sk.builtin.asnum$(b);var d=e.genrand_res53();return new Sk.builtin.float_(-a(d)/b)}),d.choice=new Sk.builtin.func(function(a){if(Sk.builtin.pyCheckArgsLen("choice",arguments.length,1,1),Sk.builtin.pyCheckType("seq","sequence",Sk.builtin.checkSequence(a)),void 0!==a.sq$length){var b=g(e.genrand_res53()*a.sq$length());return a.mp$subscript(b)}throw new Sk.builtin.TypeError("object has no length")}),d.shuffle=new Sk.builtin.func(function(a){if(Sk.builtin.pyCheckArgsLen("shuffle",arguments.length,1,1),Sk.builtin.pyCheckType("x","sequence",Sk.builtin.checkSequence(a)),void 0===a.sq$length)throw new Sk.builtin.TypeError("object has no length");else if(void 0!==a.mp$ass_subscript)for(var b=a.sq$length()-1;0<b;b-=1){var d=g(e.genrand_res53()*(b+1)),f=a.mp$subscript(d);a.mp$ass_subscript(d,a.mp$subscript(b)),a.mp$ass_subscript(b,f)}else throw new Sk.builtin.TypeError("object is immutable");return Sk.builtin.none.none$}),d.sample=new Sk.builtin.func(function(a,b){var f,g,h,l,m,d=Math.floor;for(Sk.builtin.pyCheckArgsLen("sample",arguments.length,2,2),Sk.builtin.pyCheckType("population","iterable",Sk.builtin.checkIterable(a)),Sk.builtin.pyCheckType("k","integer",Sk.builtin.checkInt(b)),b=Sk.builtin.asnum$(b),m=[],h=Sk.abstr.iter(a),(f=0,l=h.tp$iternext());void 0!==l;f++,l=h.tp$iternext())g=d(e.genrand_res53()*(f+1)),f<b?(g<f&&(m[f]=m[g]),m[g]=l):g<b&&(m[g]=l);if(f<b)throw new Sk.builtin.ValueError("sample larger than population");return Sk.builtin.list(m)}),d};',"src/lib/re.js":`var $builtinmodule=function(name){var validGroups,convert,getFlags,_split,_findall,matchobj,_search,_match,regexobj,mod={};return mod.I=2,mod.IGNORECASE=2,mod.M=8,mod.MULTILINE=8,validGroups=["(?:","(?=","(?!"],convert=function(a){var b,c,d;if(c=a.match(/\\(\\?./g),c)for(d=0;d<c.length;d++)if(-1==validGroups.indexOf(c[d]))throw new Sk.builtin.ValueError("Disallowed group in pattern: '"+c[d]+"'");return b=a.replace("/\\\\/g","\\\\\\\\"),b=a.replace(/([^\\\\]){,(?![^\\[]*\\])/g,"$1{0,"),b},getFlags=function(a){var b="g";return(a&mod.IGNORECASE)==mod.IGNORECASE&&(b+="i"),(a&mod.MULTILINE)==mod.MULTILINE&&(b+="m"),b},_split=function(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(Sk.builtin.pyCheckArgsLen("split",arguments.length,2,4),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("string must be a string");if(void 0===c&&(c=0),!Sk.builtin.checkNumber(c))throw new Sk.builtin.TypeError("maxsplit must be a number");if(void 0===d&&(d=0),!Sk.builtin.checkNumber(d))throw new Sk.builtin.TypeError("flags must be a number");for(c=Sk.builtin.asnum$(c),e=Sk.ffi.unwrapo(a),f=Sk.ffi.unwrapo(b),e=convert(e),g=null!==e.match(/^\\(.*\\)$/),h=getFlags(d),i=new RegExp(e,h),j=[],k,l=0,m=0;null!=(k=i.exec(f))&&k.index!==i.lastIndex&&(j.push(new Sk.builtin.str(f.substring(l,k.index))),g&&j.push(new Sk.builtin.str(k[0])),l=i.lastIndex,m+=1,!(c&&m>=c)););return j.push(new Sk.builtin.str(f.substring(l))),new Sk.builtin.list(j)},_split.co_varnames=["pattern","string","maxsplit","flags"],_split.$defaults=[new Sk.builtin.int_(0),new Sk.builtin.int_(0)],mod.split=new Sk.builtin.func(_split),_findall=function(a,b,c){var d,e,f,g,h,j;if(Sk.builtin.pyCheckArgsLen("findall",arguments.length,2,3),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("string must be a string");if(void 0===c&&(c=0),!Sk.builtin.checkNumber(c))throw new Sk.builtin.TypeError("flags must be a number");if(d=Sk.ffi.unwrapo(a),e=Sk.ffi.unwrapo(b),d=convert(d),f=getFlags(c),g=new RegExp(d,f),d.match(/\\$/)){var k=new RegExp(/\\n$/);e.match(k)&&(e=e.slice(0,-1))}for(h=[],j;null!=(j=g.exec(e));){if(2>j.length)h.push(new Sk.builtin.str(j[0]));else if(2==j.length)h.push(new Sk.builtin.str(j[1]));else{for(var l=[],m=1;m<j.length;m++)l.push(new Sk.builtin.str(j[m]));h.push(new Sk.builtin.tuple(l))}j.index===g.lastIndex&&(g.lastIndex+=1)}return new Sk.builtin.list(h)},_findall.co_varnames=["pattern","string","flags"],_findall.$defaults=[new Sk.builtin.int_(0)],mod.findall=new Sk.builtin.func(_findall),matchobj=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.thematch=b,a.re=c,a.string=d}),b.groups=new Sk.builtin.func(function(a){var b=a.thematch.v.slice(1);return new Sk.builtin.tuple(b)}),b.group=new Sk.builtin.func(function(a,b){if(b=void 0===b?0:Sk.builtin.asnum$(b),b>=a.thematch.v.length)throw new Sk.builtin.IndexError("Index out of range: "+b);return a.thematch.v[b]})},mod.MatchObject=Sk.misceval.buildClass(mod,matchobj,"MatchObject",[]),mod._findre=function(res,string){res=res.replace(/([^\\\\]){,(?![^\\[]*\\])/g,"$1{0,");var matches,sitem,retval,re=eval(res),patt=/\\n$/,str=Sk.ffi.remapToJs(string);if(matches=str.match(patt)?str.slice(0,-1).match(re):str.match(re),retval=new Sk.builtin.list,null==matches)return retval;for(var i=0;i<matches.length;++i)sitem=new Sk.builtin.str(matches[i]),retval.v.push(sitem);return retval},_search=function(a,b,c){var d,e;if(Sk.builtin.pyCheckArgsLen("search",arguments.length,2,3),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("string must be a string");if(void 0===c&&(c=0),!Sk.builtin.checkNumber(c))throw new Sk.builtin.TypeError("flags must be a number");return(e="/"+a.v.replace(/\\//g,"\\\\/")+"/",lst=mod._findre(e,b),1>lst.v.length)?Sk.builtin.none.none$:(d=Sk.misceval.callsimArray(mod.MatchObject,[lst,a,b]),d)},_search.co_varnames=["pattern","string","flags"],_search.$defaults=[new Sk.builtin.int_(0)],mod.search=new Sk.builtin.func(_search),_match=function(a,b,c){var d,e;if(Sk.builtin.pyCheckArgsLen("match",arguments.length,2,3),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("string must be a string");if(void 0===c&&(c=0),!Sk.builtin.checkNumber(c))throw new Sk.builtin.TypeError("flags must be a number");return(pat=Sk.ffi.remapToJs(a),e="/^"+pat.replace(/\\//g,"\\\\/")+"/",lst=mod._findre(e,b),1>Sk.ffi.remapToJs(lst).length)?Sk.builtin.none.none$:(d=Sk.misceval.callsimArray(mod.MatchObject,[lst,a,b]),d)},_match.co_varnames=["pattern","string","flags"],_match.$defaults=[new Sk.builtin.int_(0)],mod.match=new Sk.builtin.func(_match),regexobj=function(a,b){var c,d,e,f,g,h;b.__init__=new Sk.builtin.func(function(a,b,c){a.re=b,a.flags=void 0===c?0:c}),h=new Sk.builtin.func(function(a){var b="re.compile('"+Sk.ffi.remapToPy(a.re)+"')";return Sk.ffi.remapToPy(b.substring(0,212))}),b.__str__=h,b.__repr__=h,c=function(a,b,c){var d=Sk.ffi.remapToJs(a),e=null==b?0:Sk.ffi.remapToJs(b),f=null==c?d.length:Sk.ffi.remapToJs(c);return"^"==e&&(e=d.indexOf("\\n")+1),f==Sk.builtin.none.none$&&(f=d.length),Sk.ffi.remapToPy(d.substring(e,f))},d=function(a,b,d,e){Sk.builtin.pyCheckArgsLen("search",arguments.length,2,4);var f=c(b,d,e);return _search(a.re,f,a.flags)},d.co_varnames=["self","string","pos","endpos"],d.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],b.search=new Sk.builtin.func(d),e=function(a,b,d,e){Sk.builtin.pyCheckArgsLen("match",arguments.length,2,4);var f=c(b,d,e);return _match(a.re,f,a.flags)},e.co_varnames=["self","string","pos","endpos"],e.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],b.match=new Sk.builtin.func(e),f=function(a,b,c){if(Sk.builtin.pyCheckArgsLen("split",arguments.length,2,3),void 0===c&&(c=0),!Sk.builtin.checkInt(c))throw new Sk.builtin.TypeError("maxsplit must be an integer");return _split(a.re,b,c,a.flags)},f.co_varnames=["self","string","maxsplit"],f.$defaults=[new Sk.builtin.int_(0)],b.split=new Sk.builtin.func(f),g=function(a,b,d,e){Sk.builtin.pyCheckArgsLen("findall",arguments.length,2,4);var f=c(b,d,e);return _findall(a.re,f,a.flags)},g.co_varnames=["self","string","pos","endpos"],g.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],b.findall=new Sk.builtin.func(g)},mod.RegexObject=Sk.misceval.buildClass(mod,regexobj,"RegexObject",[]),mod.compile=new Sk.builtin.func(function(a,b){var c;if(Sk.builtin.pyCheckArgsLen("compile",arguments.length,1,2),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(void 0===b&&(b=0),!Sk.builtin.checkNumber(b))throw new Sk.builtin.TypeError("flags must be a number");return c=Sk.misceval.callsimArray(mod.RegexObject,[a,b]),c}),mod.purge=new Sk.builtin.func(function(){}),mod};`,"src/lib/repr.py":`raise NotImplementedError("repr is not yet implemented in Skulpt")
`,"src/lib/rexec.py":`raise NotImplementedError("rexec is not yet implemented in Skulpt")
`,"src/lib/rfc822.py":`raise NotImplementedError("rfc822 is not yet implemented in Skulpt")
`,"src/lib/rlcompleter.py":`raise NotImplementedError("rlcompleter is not yet implemented in Skulpt")
`,"src/lib/robotparser.py":`raise NotImplementedError("robotparser is not yet implemented in Skulpt")
`,"src/lib/runpy.py":`raise NotImplementedError("runpy is not yet implemented in Skulpt")
`,"src/lib/sched.py":`raise NotImplementedError("sched is not yet implemented in Skulpt")
`,"src/lib/sets.py":`raise NotImplementedError("sets is not yet implemented in Skulpt")
`,"src/lib/sgmllib.py":`raise NotImplementedError("sgmllib is not yet implemented in Skulpt")
`,"src/lib/sha.py":`raise NotImplementedError("sha is not yet implemented in Skulpt")
`,"src/lib/shelve.py":`raise NotImplementedError("shelve is not yet implemented in Skulpt")
`,"src/lib/shlex.py":`raise NotImplementedError("shlex is not yet implemented in Skulpt")
`,"src/lib/shutil.py":`raise NotImplementedError("shutil is not yet implemented in Skulpt")
`,"src/lib/signal.js":'var $builtinmodule=function(){var a={SIG_DFL:new Sk.builtin.int_(0),SIG_IGN:new Sk.builtin.int_(1),CTRL_C_EVENT:new Sk.builtin.int_(0),CTRL_BREAK_EVENT:new Sk.builtin.int_(0),NSIG:new Sk.builtin.int_(23),SIGHUP:new Sk.builtin.int_(1),SIGNINT:new Sk.builtin.int_(2),SIGILL:new Sk.builtin.int_(4),SIGFPE:new Sk.builtin.int_(8),SIGKILL:new Sk.builtin.int_(9),SIGSEGV:new Sk.builtin.int_(11),SIGTERM:new Sk.builtin.int_(15),SIGBREAK:new Sk.builtin.int_(21),SIGABRT:new Sk.builtin.int_(22),pause:new Sk.builtin.func(function(){Sk.builtin.pyCheckArgsLen("pause",arguments.length,0,0);var a=new Sk.misceval.Suspension;return a.resume=function(){return Sk.builtin.none.none$},a.data={type:"Sk.promise",promise:new Promise(function(a){if(null!=Sk.signals&&Sk.signals.addEventListener){function b(){Sk.signals.removeEventListener(b),a()}Sk.signals.addEventListener(b)}else console.warn("signal.pause() not supported"),Sk.misceval.print_("signal.pause() not supported"),a()})},a}),signal:new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("signal.signal is not supported.")})};return a};',"src/lib/site.py":`raise NotImplementedError("site is not yet implemented in Skulpt")
`,"src/lib/smtpd.py":`raise NotImplementedError("smtpd is not yet implemented in Skulpt")
`,"src/lib/smtplib.py":`raise NotImplementedError("smtplib is not yet implemented in Skulpt")
`,"src/lib/sndhdr.py":`raise NotImplementedError("sndhdr is not yet implemented in Skulpt")
`,"src/lib/socket.py":`raise NotImplementedError("socket is not yet implemented in Skulpt")
`,"src/lib/sqlite3/__init__.py":`raise NotImplementedError("sqlite3 is not yet implemented in Skulpt")
`,"src/lib/sre.py":`raise NotImplementedError("sre is not yet implemented in Skulpt")
`,"src/lib/sre_compile.py":`raise NotImplementedError("sre_compile is not yet implemented in Skulpt")
`,"src/lib/sre_constants.py":`raise NotImplementedError("sre_constants is not yet implemented in Skulpt")
`,"src/lib/sre_parse.py":`raise NotImplementedError("sre_parse is not yet implemented in Skulpt")
`,"src/lib/ssl.py":`raise NotImplementedError("ssl is not yet implemented in Skulpt")
`,"src/lib/stat.py":`raise NotImplementedError("stat is not yet implemented in Skulpt")
`,"src/lib/statvfs.py":`raise NotImplementedError("statvfs is not yet implemented in Skulpt")
`,"src/lib/string.js":'var $builtinmodule=function(){var a={};return a.ascii_lowercase=Sk.builtin.str("abcdefghijklmnopqrstuvwxyz"),a.ascii_uppercase=Sk.builtin.str("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),a.ascii_letters=Sk.builtin.str(a.ascii_lowercase.v+a.ascii_uppercase.v),a.lowercase=Sk.builtin.str("abcdefghijklmnopqrstuvwxyz"),a.uppercase=Sk.builtin.str("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),a.letters=Sk.builtin.str(a.lowercase.v+a.uppercase.v),a.digits=Sk.builtin.str("0123456789"),a.hexdigits=Sk.builtin.str("0123456789abcdefABCDEF"),a.octdigits=Sk.builtin.str("01234567"),a.punctuation=Sk.builtin.str("!\\"#$%&\'()*+,-./:;<=>?@[\\\\]^_`{|}~"),a.whitespace=Sk.builtin.str("\\t\\n\\x0B\\f\\r "),a.printable=Sk.builtin.str(a.digits.v+a.letters.v+a.punctuation.v+" \\t\\n\\r\\x0B\\f"),a.split=new Sk.builtin.func(function(a,b,c){return Sk.misceval.callsimArray(Sk.builtin.str.prototype.split,[a,b,c])}),a.capitalize=new Sk.builtin.func(function(a){return Sk.misceval.callsimArray(Sk.builtin.str.prototype.capitalize,[a])}),a.join=new Sk.builtin.func(function(a,b){return void 0===b&&(b=Sk.builtin.str(" ")),Sk.misceval.callsimArray(Sk.builtin.str.prototype.join,[b,a])}),a.capwords=new Sk.builtin.func(function(b,c){if(Sk.builtin.pyCheckArgsLen("capwords",arguments.length,1,2),!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("s must be a string");if(void 0===c&&(c=Sk.builtin.str(" ")),!Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("sep must be a string");for(var d=Sk.misceval.callsimArray(a.split,[b,c]),e=[],f=0;f<d.v.length;f++){var g=Sk.builtin.list.prototype.list_subscript_.call(d,f),h=Sk.misceval.callsimArray(a.capitalize,[g]);e.push(h)}return Sk.misceval.callsimArray(a.join,[new Sk.builtin.list(e),c])}),a};',"src/lib/string.py":`raise NotImplementedError("string is not yet implemented in Skulpt")
`,"src/lib/stringold.py":`raise NotImplementedError("stringold is not yet implemented in Skulpt")
`,"src/lib/stringprep.py":`raise NotImplementedError("stringprep is not yet implemented in Skulpt")
`,"src/lib/struct.py":`raise NotImplementedError("struct is not yet implemented in Skulpt")
`,"src/lib/subprocess.py":`raise NotImplementedError("subprocess is not yet implemented in Skulpt")
`,"src/lib/sunau.py":`raise NotImplementedError("sunau is not yet implemented in Skulpt")
`,"src/lib/sunaudio.py":`raise NotImplementedError("sunaudio is not yet implemented in Skulpt")
`,"src/lib/symbol.py":`raise NotImplementedError("symbol is not yet implemented in Skulpt")
`,"src/lib/symtable.py":`raise NotImplementedError("symtable is not yet implemented in Skulpt")
`,"src/lib/tabnanny.py":`raise NotImplementedError("tabnanny is not yet implemented in Skulpt")
`,"src/lib/tarfile.py":`raise NotImplementedError("tarfile is not yet implemented in Skulpt")
`,"src/lib/telnetlib.py":`raise NotImplementedError("telnetlib is not yet implemented in Skulpt")
`,"src/lib/tempfile.py":`raise NotImplementedError("tempfile is not yet implemented in Skulpt")
`,"src/lib/test/__init__.py":`__author__ = 'bmiller'

def testEqual(actual, expected):
    if type(expected) == type(1):
        if actual == expected:
            print('Pass')
            return True
    elif type(expected) == type(1.11):
        if abs(actual-expected) < 0.00001:
            print('Pass')
            return True
    else:
        if actual == expected:
            print('Pass')
            return True
    print('Test Failed: expected ' + str(expected) + ' but got ' + str(actual))
    return False

def testNotEqual(actual, expected):
    pass

`,"src/lib/test/decimaltestdata/__init__.py":`raise NotImplementedError("decimaltestdata is not yet implemented in Skulpt")
`,"src/lib/test/test_support.py":`"""Supporting definitions for the Python regression tests."""

if __name__ != 'test.test_support':
    raise ImportError('test_support must be imported from the test package')

import unittest


# def run_unittest(*classes):
#     """Run tests from unittest.TestCase-derived classes."""
#     valid_types = (unittest.TestSuite, unittest.TestCase)
#     suite = unittest.TestSuite()
#     for cls in classes:
#         if isinstance(cls, str):
#             if cls in sys.modules:
#                 suite.addTest(unittest.findTestCases(sys.modules[cls]))
#             else:
#                 raise ValueError("str arguments must be keys in sys.modules")
#         elif isinstance(cls, valid_types):
#             suite.addTest(cls)
#         else:
#             suite.addTest(unittest.makeSuite(cls))
#     _run_suite(suite)

def run_unittest(*classes):
    """Run tests from unittest.TestCase-derived classes."""
    for cls in classes:
        print cls
        if issubclass(cls, unittest.TestCase):
            cls().main()
        else:
            print "Don't know what to do with ", cls
`,"src/lib/textwrap.py":`"""Text wrapping and filling.
"""

# Copyright (C) 1999-2001 Gregory P. Ward.
# Copyright (C) 2002, 2003 Python Software Foundation.
# Written by Greg Ward <gward@python.net>

import re, string

__all__ = ['TextWrapper', 'wrap', 'fill', 'dedent', 'indent', 'shorten']

# Hardcode the recognized whitespace characters to the US-ASCII
# whitespace characters.  The main reason for doing this is that
# some Unicode spaces (like \\u00a0) are non-breaking whitespaces.
_whitespace = '\\t\\n\\x0b\\x0c\\r '

class TextWrapper:
    """
    Object for wrapping/filling text.  The public interface consists of
    the wrap() and fill() methods; the other methods are just there for
    subclasses to override in order to tweak the default behaviour.
    If you want to completely replace the main wrapping algorithm,
    you'll probably have to override _wrap_chunks().
    Several instance attributes control various aspects of wrapping:
      width (default: 70)
        the maximum width of wrapped lines (unless break_long_words
        is false)
      initial_indent (default: "")
        string that will be prepended to the first line of wrapped
        output.  Counts towards the line's width.
      subsequent_indent (default: "")
        string that will be prepended to all lines save the first
        of wrapped output; also counts towards each line's width.
      expand_tabs (default: true)
        Expand tabs in input text to spaces before further processing.
        Each tab will become 0 .. 'tabsize' spaces, depending on its position
        in its line.  If false, each tab is treated as a single character.
      tabsize (default: 8)
        Expand tabs in input text to 0 .. 'tabsize' spaces, unless
        'expand_tabs' is false.
      replace_whitespace (default: true)
        Replace all whitespace characters in the input text by spaces
        after tab expansion.  Note that if expand_tabs is false and
        replace_whitespace is true, every tab will be converted to a
        single space!
      fix_sentence_endings (default: false)
        Ensure that sentence-ending punctuation is always followed
        by two spaces.  Off by default because the algorithm is
        (unavoidably) imperfect.
      break_long_words (default: true)
        Break words longer than 'width'.  If false, those words will not
        be broken, and some lines might be longer than 'width'.
      break_on_hyphens (default: true)
        Allow breaking hyphenated words. If true, wrapping will occur
        preferably on whitespaces and right after hyphens part of
        compound words.
      drop_whitespace (default: true)
        Drop leading and trailing whitespace from lines.
      max_lines (default: None)
        Truncate wrapped lines.
      placeholder (default: ' [...]')
        Append to the last line of truncated text.
    """

    unicode_whitespace_trans = {}
    # uspace = ord(' ')
    uspace = ' '
    for x in _whitespace:
        # unicode_whitespace_trans[ord(x)] = uspace
        unicode_whitespace_trans[x] = uspace

    # This funky little regex is just the trick for splitting
    # text up into word-wrappable chunks.  E.g.
    #   "Hello there -- you goof-ball, use the -b option!"
    # splits into
    #   Hello/ /there/ /--/ /you/ /goof-/ball,/ /use/ /the/ /-b/ /option!
    # (after stripping out empty strings).
    wordsep_re = re.compile(
        r'(\\s+|'                                  # any whitespace
        r'[^\\s\\w]*\\w+[^0-9\\W]-(?=\\w+[^0-9\\W]))')  # hyphenated words
    em_dash = re.compile(r'(\\s+|'                                  # any whitespace
                         r'[^\\s\\w]*\\w+[^0-9\\W]-(?=\\w+[^0-9\\W])|'   # hyphenated words
                         r'(?!^)-{2,}(?=\\w))')                     # em-dash

                         
    # This less funky little regex just split on recognized spaces. E.g.
    #   "Hello there -- you goof-ball, use the -b option!"
    # splits into
    #   Hello/ /there/ /--/ /you/ /goof-ball,/ /use/ /the/ /-b/ /option!/
    wordsep_simple_re = re.compile(r'(\\s+)')


    # XXX this is not locale- or charset-aware -- string.lowercase
    # is US-ASCII only (and therefore English-only)
    sentence_end_re = re.compile(r'[a-z]'             # lowercase letter
                                 r'[\\.\\!\\?]'          # sentence-ending punct.
                                 r'[\\"\\']?'           # optional end-of-quote
                                 r'\\Z')               # end of chunk
    sentence_end_re = r'[a-z][\\.\\!\\?][\\"\\']?'

    def __init__(self,
                 width=70,
                 initial_indent="",
                 subsequent_indent="",
                 expand_tabs=True,
                 replace_whitespace=True,
                 fix_sentence_endings=False,
                 break_long_words=True,
                 drop_whitespace=True,
                 break_on_hyphens=True,
                 tabsize=8,
                 max_lines=None,
                 placeholder=' [...]'):
        self.width = width
        self.initial_indent = initial_indent
        self.subsequent_indent = subsequent_indent
        self.expand_tabs = expand_tabs
        self.replace_whitespace = replace_whitespace
        self.fix_sentence_endings = fix_sentence_endings
        self.break_long_words = break_long_words
        self.drop_whitespace = drop_whitespace
        self.break_on_hyphens = break_on_hyphens
        self.tabsize = tabsize
        self.max_lines = max_lines
        self.placeholder = placeholder


    # -- Private methods -----------------------------------------------
    # (possibly useful for subclasses to override)

    def _munge_whitespace(self, text):
        """_munge_whitespace(text : string) -> string
        Munge whitespace in text: expand tabs and convert all other
        whitespace characters to spaces.  Eg. " foo\\\\tbar\\\\n\\\\nbaz"
        becomes " foo    bar  baz".
        """
        if self.expand_tabs:
            text = text.expandtabs(self.tabsize)
        if self.replace_whitespace:
            for key, val in self.unicode_whitespace_trans.items():
                text = text.replace(key, val)
        return text


    def _split(self, text):
        """_split(text : string) -> [string]
        Split the text to wrap into indivisible chunks.  Chunks are
        not quite the same as words; see _wrap_chunks() for full
        details.  As an example, the text
          Look, goof-ball -- use the -b option!
        breaks into the following chunks:
          'Look,', ' ', 'goof-', 'ball', ' ', '--', ' ',
          'use', ' ', 'the', ' ', '-b', ' ', 'option!'
        if break_on_hyphens is True, or in:
          'Look,', ' ', 'goof-ball', ' ', '--', ' ',
          'use', ' ', 'the', ' ', '-b', ' ', option!'
        otherwise.
        """
        if self.break_on_hyphens is True:
            chunks = self.wordsep_re.split(text)
            if "--" in text:
                chunks = [item 
                            for sublist in [self.em_dash.split(chunk) for chunk in chunks] 
                                for item in sublist]
        else:
            chunks = self.wordsep_simple_re.split(text)
        chunks = [c for c in chunks if c]
        return chunks

    def _fix_sentence_endings(self, chunks):
        """_fix_sentence_endings(chunks : [string])
        Correct for sentence endings buried in 'chunks'.  Eg. when the
        original text contains "... foo.\\\\nBar ...", munge_whitespace()
        and split() will convert that to [..., "foo.", " ", "Bar", ...]
        which has one too few spaces; this method simply changes the one
        space to two.
        """
        i = 0
        # patsearch = self.sentence_end_re.search
        while i < len(chunks)-1:
            if chunks[i+1] == " " and re.search(self.sentence_end_re, chunks[i]) and chunks[i][-1] in ".!?\\"\\'":
                chunks[i+1] = "  "
                i += 2
            else:
                i += 1

    def _handle_long_word(self, reversed_chunks, cur_line, cur_len, width):
        """_handle_long_word(chunks : [string],
                             cur_line : [string],
                             cur_len : int, width : int)
        Handle a chunk of text (most likely a word, not whitespace) that
        is too long to fit in any line.
        """
        # Figure out when indent is larger than the specified width, and make
        # sure at least one character is stripped off on every pass
        if width < 1:
            space_left = 1
        else:
            space_left = width - cur_len

        # If we're allowed to break long words, then do so: put as much
        # of the next chunk onto the current line as will fit.
        if self.break_long_words:
            cur_line.append(reversed_chunks[-1][:space_left])
            reversed_chunks[-1] = reversed_chunks[-1][space_left:]

        # Otherwise, we have to preserve the long word intact.  Only add
        # it to the current line if there's nothing already there --
        # that minimizes how much we violate the width constraint.
        elif not cur_line:
            cur_line.append(reversed_chunks.pop())

        # If we're not allowed to break long words, and there's already
        # text on the current line, do nothing.  Next time through the
        # main loop of _wrap_chunks(), we'll wind up here again, but
        # cur_len will be zero, so the next line will be entirely
        # devoted to the long word that we can't handle right now.

    def _wrap_chunks(self, chunks):
        """_wrap_chunks(chunks : [string]) -> [string]
        Wrap a sequence of text chunks and return a list of lines of
        length 'self.width' or less.  (If 'break_long_words' is false,
        some lines may be longer than this.)  Chunks correspond roughly
        to words and the whitespace between them: each chunk is
        indivisible (modulo 'break_long_words'), but a line break can
        come between any two chunks.  Chunks should not have internal
        whitespace; ie. a chunk is either all whitespace or a "word".
        Whitespace chunks will be removed from the beginning and end of
        lines, but apart from that whitespace is preserved.
        """
        lines = []
        if self.width <= 0:
            raise ValueError("invalid width %r (must be > 0)" % self.width)
        if self.max_lines is not None:
            if self.max_lines > 1:
                indent = self.subsequent_indent
            else:
                indent = self.initial_indent
            if len(indent) + len(self.placeholder.lstrip()) > self.width:
                raise ValueError("placeholder too large for max width")

        # Arrange in reverse order so items can be efficiently popped
        # from a stack of chucks.
        chunks.reverse()

        while chunks:

            # Start the list of chunks that will make up the current line.
            # cur_len is just the length of all the chunks in cur_line.
            cur_line = []
            cur_len = 0

            # Figure out which static string will prefix this line.
            if lines:
                indent = self.subsequent_indent
            else:
                indent = self.initial_indent

            # Maximum width for this line.
            width = self.width - len(indent)

            # First chunk on line is whitespace -- drop it, unless this
            # is the very beginning of the text (ie. no lines started yet).
            if self.drop_whitespace and chunks[-1].strip() == '' and lines:
                del chunks[-1]

            while chunks:
                l = len(chunks[-1])

                # Can at least squeeze this chunk onto the current line.
                if cur_len + l <= width:
                    cur_line.append(chunks.pop())
                    cur_len += l

                # Nope, this line is full.
                else:
                    break

            # The current line is full, and the next chunk is too big to
            # fit on *any* line (not just this one).
            if chunks and len(chunks[-1]) > width:
                self._handle_long_word(chunks, cur_line, cur_len, width)
                cur_len = sum(map(len, cur_line))

            # If the last chunk on this line is all whitespace, drop it.
            if self.drop_whitespace and cur_line and cur_line[-1].strip() == '':
                cur_len -= len(cur_line[-1])
                del cur_line[-1]

            if cur_line:
                if (self.max_lines is None or
                    len(lines) + 1 < self.max_lines or
                    (not chunks or
                     self.drop_whitespace and
                     len(chunks) == 1 and
                     not chunks[0].strip()) and cur_len <= width):
                    # Convert current line back to a string and store it in
                    # list of all lines (return value).
                    lines.append(indent + ''.join(cur_line))
                else:
                    while cur_line:
                        if (cur_line[-1].strip() and
                            cur_len + len(self.placeholder) <= width):
                            cur_line.append(self.placeholder)
                            lines.append(indent + ''.join(cur_line))
                            break
                        cur_len -= len(cur_line[-1])
                        del cur_line[-1]
                    else:
                        if lines:
                            prev_line = lines[-1].rstrip()
                            if (len(prev_line) + len(self.placeholder) <=
                                    self.width):
                                lines[-1] = prev_line + self.placeholder
                                break
                        lines.append(indent + self.placeholder.lstrip())
                    break

        return lines

    def _split_chunks(self, text):
        text = self._munge_whitespace(text)
        return self._split(text)

    # -- Public interface ----------------------------------------------

    def wrap(self, text):
        """wrap(text : string) -> [string]
        Reformat the single paragraph in 'text' so it fits in lines of
        no more than 'self.width' columns, and return a list of wrapped
        lines.  Tabs in 'text' are expanded with string.expandtabs(),
        and all other whitespace characters (including newline) are
        converted to space.
        """
        chunks = self._split_chunks(text)
        if self.fix_sentence_endings:
            self._fix_sentence_endings(chunks)
        return self._wrap_chunks(chunks)

    def fill(self, text):
        """fill(text : string) -> string
        Reformat the single paragraph in 'text' to fit in lines of no
        more than 'self.width' columns, and return a new string
        containing the entire wrapped paragraph.
        """
        return "\\n".join(self.wrap(text))


# -- Convenience interface ---------------------------------------------

def wrap(text, width=70, **kwargs):
    """Wrap a single paragraph of text, returning a list of wrapped lines.
    Reformat the single paragraph in 'text' so it fits in lines of no
    more than 'width' columns, and return a list of wrapped lines.  By
    default, tabs in 'text' are expanded with string.expandtabs(), and
    all other whitespace characters (including newline) are converted to
    space.  See TextWrapper class for available keyword args to customize
    wrapping behaviour.
    """
    w = TextWrapper(width=width, **kwargs)
    return w.wrap(text)

def fill(text, width=70, **kwargs):
    """Fill a single paragraph of text, returning a new string.
    Reformat the single paragraph in 'text' to fit in lines of no more
    than 'width' columns, and return a new string containing the entire
    wrapped paragraph.  As with wrap(), tabs are expanded and other
    whitespace characters converted to space.  See TextWrapper class for
    available keyword args to customize wrapping behaviour.
    """
    w = TextWrapper(width=width, **kwargs)
    return w.fill(text)

def shorten(text, width, **kwargs):
    """Collapse and truncate the given text to fit in the given width.
    The text first has its whitespace collapsed.  If it then fits in
    the *width*, it is returned as is.  Otherwise, as many words
    as possible are joined and then the placeholder is appended::
        >>> textwrap.shorten("Hello  world!", width=12)
        'Hello world!'
        >>> textwrap.shorten("Hello  world!", width=11)
        'Hello [...]'
    """
    w = TextWrapper(width=width, max_lines=1, **kwargs)
    return w.fill(' '.join(text.strip().split()))


# -- Loosely related functionality -------------------------------------

# _whitespace_only_re = re.compile('^[ \\t]+$', re.MULTILINE)
# _leading_whitespace_re = re.compile('(^[ \\t]*)(?:[^ \\t\\n])', re.MULTILINE)

def dedent(text):
    """Remove any common leading whitespace from every line in \`text\`.
    This can be used to make triple-quoted strings line up with the left
    edge of the display, while still presenting them in the source code
    in indented form.
    Note that tabs and spaces are both treated as whitespace, but they
    are not equal: the lines "  hello" and "\\\\thello" are
    considered to have no common leading whitespace.
    Entirely blank lines are normalized to a newline character.
    """
    # Look for the longest leading string of spaces and tabs common to
    # all lines.
    margin = None

    indents = re.findall(r'(^[ \\t]*)(?:[^ \\t\\n])',text, re.MULTILINE)
    for indent in indents:
        if margin is None:
            margin = indent

        # Current line more deeply indented than previous winner:
        # no change (previous winner is still on top).
        elif indent.startswith(margin):
            pass

        # Current line consistent with and no deeper than previous winner:
        # it's the new winner.
        elif margin.startswith(indent):
            margin = indent

        # Find the largest common whitespace between current line and previous
        # winner.
        else:
            for i, (x, y) in enumerate(zip(margin, indent)):
                if x != y:
                    margin = margin[:i]
                    break
    # sanity check (testing/debugging only)
    if 0 and margin:
        for line in text.split("\\n"):
            assert not line or line.startswith(margin), \\
                   "line = %r, margin = %r" % (line, margin)

    if margin:
        lines = [line[len(margin):] 
                    if line.strip()
                        else line.strip() 
                            for line in text.split("\\n")]
        text = "\\n".join(lines)
    return text


def indent(text, prefix, predicate=None):
    """Adds 'prefix' to the beginning of selected lines in 'text'.
    If 'predicate' is provided, 'prefix' will only be added to the lines
    where 'predicate(line)' is True. If 'predicate' is not provided,
    it will default to adding 'prefix' to all non-empty lines that do not
    consist solely of whitespace characters.
    """
    if predicate is None:
        def predicate(line):
            return line.strip()

    def prefixed_lines():
        for line in text.splitlines(True):
            yield (prefix + line if predicate(line) else line)
    return ''.join(prefixed_lines())


if __name__ == "__main__":
    #print dedent("\\tfoo\\n\\tbar")
    #print dedent("  \\thello there\\n  \\t  how are you?")
    print(dedent("Hello there.\\n  This is indented."))`,"src/lib/this.py":`raise NotImplementedError("this is not yet implemented in Skulpt")
`,"src/lib/threading.py":`raise NotImplementedError("threading is not yet implemented in Skulpt")
`,"src/lib/time.js":`var $builtinmodule=function(){function a(a){if(!(a instanceof m))throw new Sk.builtin.TypeError("Required argument 'struct_time' must be of type: 'struct_time'");var b,c=a.v.length,d=a.v;for(b=0;b<c;++b)if(!Sk.builtin.checkInt(d[b]))throw new Sk.builtin.TypeError("struct_time may only contain integers");return!0}function b(a,b,d){var c=a.toString();return Array(b-c.length+1).join(d||" ")+c}function c(a){return 0==(3&a)&&(0!=a%100||0==a%400)}function d(a,b){b=b||!1;var d=b?a.getUTCMonth():a.getMonth(),e=b?a.getUTCDate():a.getDate(),f=[0,31,59,90,120,151,181,212,243,273,304,334][d]+e;return 1<d&&c(b?a.getUTCFullYear():a.getFullYear())&&f++,f}function e(){var a=Math.max,b=new Date(2002,0,1),c=new Date(2002,6,1);return a(b.getTimezoneOffset(),c.getTimezoneOffset())}function f(a){return a.getTimezoneOffset()<e()}function g(a){var b,c=/\\((.*)\\)/.exec(a.toString());if(null!=this.navigator&&(b=this.navigator.userLanguage||this.navigator.language),c&&1<c.length)return c[1];if(void 0===b)return null;try{var d=a.toLocaleString(b,{timeZoneName:"short"});return c=d.split(" "),c[c.length-1]}catch(a){return null}}function h(a,b){return b=b||!1,new m([Sk.builtin.assk$(b?a.getUTCFullYear():a.getFullYear()),Sk.builtin.assk$((b?a.getUTCMonth():a.getMonth())+1),Sk.builtin.assk$(b?a.getUTCDate():a.getDate()),Sk.builtin.assk$(b?a.getUTCHours():a.getHours()),Sk.builtin.assk$(b?a.getUTCMinutes():a.getMinutes()),Sk.builtin.assk$(b?a.getUTCSeconds():a.getSeconds()),Sk.builtin.assk$(((b?a.getUTCDay():a.getDay())+6)%7),Sk.builtin.assk$(d(a,b)),Sk.builtin.assk$(b?0:f(a)?1:0)])}function i(a){Sk.builtin.pyCheckArgsLen("localtime",arguments.length,0,1);var b=new Date;if(a){Sk.builtin.pyCheckType("secs","number",Sk.builtin.checkNumber(a));var c=Sk.builtin.asnum$(a);b.setTime(1e3*c)}return h(b)}function j(a){if(!a||Sk.builtin.checkNone(a)?a=i():!(a instanceof m)&&(a=new m(a)),a instanceof Sk.builtin.tuple&&9==a.v.length){var c=[o[Sk.builtin.asnum$(a.v[6])],n[Sk.builtin.asnum$(a.v[1])-1],b(Sk.builtin.asnum$(a.v[2]).toString(),2,"0"),b(Sk.builtin.asnum$(a.v[3]).toString(),2,"0")+":"+b(Sk.builtin.asnum$(a.v[4]).toString(),2,"0")+":"+b(Sk.builtin.asnum$(a.v[5]).toString(),2,"0"),b(Sk.builtin.asnum$(a.v[0]).toString(),4,"0")];return Sk.builtin.str(c.join(" "))}}function k(a){if(a instanceof Sk.builtin.tuple&&9==a.v.length){var b=new Date(Sk.builtin.asnum$(a.v[0]),Sk.builtin.asnum$(a.v[1])-1,Sk.builtin.asnum$(a.v[2]),Sk.builtin.asnum$(a.v[3]),Sk.builtin.asnum$(a.v[4]),Sk.builtin.asnum$(a.v[5]));return Sk.builtin.assk$(b.getTime()/1e3,void 0)}throw new Sk.builtin.TypeError("mktime() requires a struct_time or 9-tuple")}var l={__file__:"/src/lib/time/__init__.js",__package__:Sk.builtin.none.none$},m=Sk.builtin.make_structseq("time","struct_time",{tm_year:"year, for example, 1993",tm_mon:"month of year, range [1, 12]",tm_mday:"day of month, range [1, 31]",tm_hour:"hours, range [0, 23]",tm_min:"minutes, range [0, 59]",tm_sec:"seconds, range [0, 61]",tm_wday:"day of week, range [0, 6], Monday is 0",tm_yday:"day of year, range [1, 366]",tm_isdst:"1 if summer time is in effect, 0 if not, and -1 if unknown"});l.struct_time=m,l.time=new Sk.builtin.func(function(){Sk.builtin.pyCheckArgsLen("time",arguments.length,0,0);var a=Date.now();return this.performance&&this.performance.now&&(a+=performance.now()%1),Sk.builtin.assk$(a/1e3,void 0)}),l.sleep=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("sleep",arguments.length,1,1),Sk.builtin.pyCheckType("delay","float",Sk.builtin.checkNumber(a)),new Sk.misceval.promiseToSuspension(new Promise(function(b){Sk.setTimeout(function(){b(Sk.builtin.none.none$)},1e3*Sk.ffi.remapToJs(a))}))}),l.localtime=new Sk.builtin.func(i),l.gmtime=new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("localtime",arguments.length,0,1);var b=new Date;if(a){Sk.builtin.pyCheckType("secs","number",Sk.builtin.checkNumber(a));var c=Sk.builtin.asnum$(a);b.setTime(1e3*c)}return h(b,!0)});var n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];return l.asctime=new Sk.builtin.func(j),l.ctime=new Sk.builtin.func(function(a){return j(i(a))}),l.mktime=new Sk.builtin.func(k),l.timezone=new Sk.builtin.int_(60*e()),l.altzone=new Sk.builtin.int_(60*function(){var a=Math.min,b=new Date(2002,0,1),c=new Date(2002,6,1);return a(b.getTimezoneOffset(),c.getTimezoneOffset())}()),l.daylight=new Sk.builtin.int_(f(new Date)?1:0),l.tzname=Sk.builtin.tuple(function(){var a=new Date(2002,0,1),b=new Date(2002,6,1);return f(a)?[Sk.builtin.str(g(b)),Sk.builtin.str(g(a))]:[Sk.builtin.str(g(a)),Sk.builtin.str(g(b))]}()),l.accept2dyear=Sk.builtin.assk$(1,Sk.builtin.nmber.int$),l.clock=new Sk.builtin.func(function(){var a=0;return a=this.performance&&this.performance.now?performance.now()/1e3:new Date().getTime()/1e3,new Sk.builtin.float_(a)}),l.strftime=new Sk.builtin.func(function(b,c){var d;if(Sk.builtin.pyCheckArgsLen("strftime",arguments.length,1,2),!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("format must be a string");return c?!(c instanceof m)&&(c=new m(c)):c=i(),a(c),d=Sk.ffi.remapToJs(b),Sk.ffi.remapToPy(strftime(d,new Date(1e3*k(c).v)))}),l.tzset=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("time.tzset() is not yet implemented")}),l.strptime=new Sk.builtin.func(function(a,b){Sk.builtin.pyCheckArgsLen("strptime",arguments.length,1,2),Sk.builtin.pyCheckType("string","string",Sk.builtin.checkString(a)),void 0===b?b=new Sk.builtin.str("%a %b %d %H:%M:%S %Y"):Sk.builtin.pyCheckType("format","string",Sk.builtin.checkString(b));let c=h(strptime(Sk.ffi.remapToJs(a),Sk.ffi.remapToJs(b),!0));return c.v[8]=new Sk.builtin.int_(-1),c}),l};`,"src/lib/timeit.py":`raise NotImplementedError("timeit is not yet implemented in Skulpt")
`,"src/lib/toaiff.py":`raise NotImplementedError("toaiff is not yet implemented in Skulpt")
`,"src/lib/token.py":`raise NotImplementedError("token is not yet implemented in Skulpt")
`,"src/lib/tokenize.py":`raise NotImplementedError("tokenize is not yet implemented in Skulpt")
`,"src/lib/trace.py":`raise NotImplementedError("trace is not yet implemented in Skulpt")
`,"src/lib/traceback.py":`raise NotImplementedError("traceback is not yet implemented in Skulpt")
`,"src/lib/tty.py":`raise NotImplementedError("tty is not yet implemented in Skulpt")
`,"src/lib/turtle.js":`var $builtinmodule=function(){"use strict";var e=function(){var e,t;for(e=Sk.TurtleGraphics&&Sk.TurtleGraphics.target||"turtle",t="string"==typeof e?document.getElementById(e):e;t.firstChild;)t.removeChild(t.firstChild);return t}();return e.turtleInstance?e.turtleInstance.reset():e.turtleInstance=function(e){var G=Math.round,H=Math.max,W=Math.sqrt,V=Math.min,K=Math.abs,j=Math.PI,J=Math.atan2,X=Math.sin,Y=Math.cos;function t(e){var t=te.assets,n="function"==typeof t?t(e):t[e];return"string"==typeof n?new Promise(function(t,r){var a=new Image;a.onload=function(){te.assets[e]=this,t(a)},a.onerror=function(){r(new Error("Missing asset: "+n))},a.src=n}):new r(void 0,n)}function r(e,t){this.lastResult=t,this.lastError=e}function n(){this.reset()}function a(){return ue||(ue=new n),ue}function s(){var t=this;for(var r in this._target=_(),this._managers={},this._handlers={mousedown:function(r){t.onEvent("mousedown",r)},mouseup:function(r){t.onEvent("mouseup",r)},mousemove:function(r){t.onEvent("mousemove",r)}},this._handlers)this._target.addEventListener(r,this._handlers[r])}function l(e,t){this._type=e,this._target=t,this._handlers=void 0,u().addManager(e,this)}function i(e){if(a().addTurtle(this),this._screen=c(),this._managers={},this._shape=e.v,!oe.hasOwnProperty(this._shape))throw Sk.builtin.ValueError("Shape:'"+this._shape+"' not in default shape, please check shape again!");this.reset()}function o(){var e,t;this._frames=1,this._delay=void 0,this._bgcolor="none",this._mode="standard",this._managers={},this._keyLogger={},e=(te.worldWidth||te.width||p())/2,t=(te.worldHeight||te.height||m())/2,this.setUpWorld(-e,-t,e,t)}function d(){return re||(re=Sk.misceval.callsimArray(ae.Turtle)),re.instance}function _(){return e}function c(){return ee||(ee=new o),ee}function u(){return ne||(ne=new s),ne}function p(){return 0|(ee&&ee._width||te.width||_().clientWidth||ce.width)}function m(){return 0|(ee&&ee._height||te.height||_().clientHeight||ce.height)}function g(e,t){var r,n=document.createElement("canvas"),a=p(),s=m(),l=_().firstChild?-s+"px":"0";return n.width=a,n.height=s,n.style.position="relative",n.style.display="block",n.style.setProperty("margin-top",l),n.style.setProperty("z-index",e),t&&(n.style.display="none"),_().appendChild(n),r=n.getContext("2d"),r.lineCap="round",r.lineJoin="round",h(c(),r),r}function f(){Q&&((window.cancelAnimationFrame||window.mozCancelAnimationFrame)(Q),Q=void 0),Z&&(window.clearTimeout(Z),Z=void 0)}function h(e,t){var r=e.llx,n=e.lly,a=e.urx,s=e.ury,l=e.xScale,i=e.yScale;t&&(v(t),t.restore(),t.save(),t.scale(1/l,1/i),0===n?t.translate(-r,n-(s-n)):0<n?t.translate(-r,2*-n):t.translate(-r,-s))}function $(e){var t,r,n;if(te.allowUndo&&e._bufferSize){for(e._undoBuffer||(e._undoBuffer=[]);e._undoBuffer.length>e._bufferSize;)e._undoBuffer.shift();for(r={},t=["x","y","angle","radians","color","fill","down","filling","shown","shape","size"],n=0;n<t.length;n++)r[t[n]]=e["_"+t[n]];return e._undoBuffer.push(r),e.addUpdate(function(){r.fillBuffer=this.fillBuffer?this.fillBuffer.slice():void 0,e._paper&&e._paper.canvas&&(r.image=e._paper.canvas.toDataURL())},!1)}}function w(e){var t;if(e._bufferSize&&e._undoBuffer&&(t=e._undoBuffer.pop(),!!t)){for(var r in t)"image"!=r&&"fillBuffer"!==r&&(e["_"+r]=t[r]);return e.addUpdate(function(){var e;t.image&&(pe.src=t.image,e=pe),v(this.context(),!1,pe),delete t.image},!0,t)}}function b(e){e&&e.canvas&&e.canvas.parentNode&&e.canvas.parentNode.removeChild(e.canvas)}function v(e,t,r){e&&(e.save(),e.setTransform(1,0,0,1,0,0),t?(e.fillStyle=t,e.fillRect(0,0,e.canvas.width,e.canvas.height)):e.clearRect(0,0,e.canvas.width,e.canvas.height),r&&e.drawImage(r,0,0),e.restore())}function k(e,t){var r,n,a,s=oe[e.shape],l=c(),o=p(),d=m(),_=l.xScale,u=l.yScale;if(t){if(r=Y(e.radians)/_,n=X(e.radians)/u,a=J(n,r)-j/2,t.save(),t.translate(e.x,e.y),t.scale(_,u),s.nodeName){var g=s.naturalWidth,f=s.naturalHeight;t.drawImage(s,0,0,g,f,-g/2,-f/2,g,f)}else{t.rotate(a),t.beginPath(),t.lineWidth=1,t.strokeStyle=e.color,t.fillStyle=e.fill,t.moveTo(-s[0][0],s[0][1]);for(var h=1;h<s.length;h++)t.lineTo(-s[h][0],s[h][1]);t.closePath(),t.fill(),t.stroke()}t.restore()}}function x(e,t){var r=this.context(),n=c(),a=n.xScale,s=n.yScale;r&&(r.beginPath(),r.moveTo(this.x,this.y),e*=V(K(a),K(s)),r.arc(this.x,this.y,e/2,0,i.RADIANS),r.closePath(),r.fillStyle=t||this.color,r.fill())}function T(e,t){return t&&(me.font=t),me.measureText(e).width}function A(e,t,r){var n=this.context();n&&(n.save(),r&&(n.font=r),t&&t.match(/^(left|right|center)$/)&&(n.textAlign=t),n.scale(1,-1),n.fillStyle=this.fill,n.fillText(e,this.x,-this.y),n.restore())}function L(e,t){var r=this.context();r&&(t&&(r.beginPath(),r.moveTo(this.x,this.y)),r.lineWidth=this.size*c().lineScale,r.strokeStyle=this.color,r.lineTo(e.x,e.y),r.stroke())}function S(){var e,t=this.context(),r=this.fillBuffer;if(t&&r&&r.length){for(t.save(),t.beginPath(),t.moveTo(r[0].x,r[0].y),e=1;e<r.length;e++)t.lineTo(r[e].x,r[e].y);for(t.closePath(),t.fillStyle=this.fill,t.fill(),e=1;e<r.length;e++)r[e].stroke&&(t.beginPath(),t.moveTo(r[e-1].x,r[e-1].y),t.lineWidth=r[e].size*c().lineScale,t.strokeStyle=r[e].color,t.lineTo(r[e].x,r[e].y),t.stroke());t.restore()}}function C(e,t,r,n,a){return function(){return e.addUpdate(function(e){this.down&&L.call(this,e,n)},a,{x:t,y:r},n)}}function R(e,t,n,s,l,o,d){var _,u=e._computed_speed,p=c(),m=K(p.xScale),g=K(p.yScale),f=t,h=n,$=W(s*s*m+l*l*g),w=u?G(H(1,$/u)):1,b=a().willRenderNext()?Promise.resolve():new r;for(e.addUpdate(function(){this.filling&&this.fillBuffer.push({x:this.x,y:this.y,stroke:this.down,color:this.color,size:this.size})},!1),_=0;_<w;_++)f=t+s/w*(_+1),h=n+l/w*(_+1),b=b.then(C(e,f,h,o,u||!d)),o=!1;return b.then(function(){return[t+s,n+l]})}function U(e,t,r,n){return function(){return e.addUpdate(void 0,n,{angle:t,radians:r})}}function M(e,t,n,s){var l,o=e._computed_speed,d=360*(n/e._fullCircle),_=o?G(H(1,K(d)/o)):1,c={},u=a().willRenderNext()?Promise.resolve():new r;for(l=0;l<_;l++)E(e,t+n/_*(l+1),c),u=u.then(U(e,c.angle,c.radians,o||!s));return u.then(function(){return E(e,t+n)})}function z(e,t){return void 0===t&&(t=e&&(e.y||e._y||e[1])||0,e=e&&(e.x||e._x||e[0])||0),{x:e,y:t}}function I(e){var t,r,n;return(t=/^rgba?\\((\\d+),(\\d+),(\\d+)(?:,([.\\d]+))?\\)$/.exec(e))?(n=[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])],t[4]&&n.push(parseFloat(t[4]))):/^#?[a-f\\d]{3}|[a-f\\d]{6}$/i.exec(e)?(4===e.length&&(e=e.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,function(e,t,r,n){return t+t+r+r+n+n})),r=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(e),n=[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]):n=e,n}function B(e,t,r,n,s){var a;if(void 0!==r&&(t=[t,r,n,s]),t.constructor===Array&&t.length){if(255===e){for(a=0;3>a;a++)if("number"==typeof t[a])t[a]=H(0,V(255,parseInt(t[a])));else throw new Sk.builtin.ValueError("bad color sequence");}else for(a=0;3>a;a++)if("number"!=typeof t[a])throw new Sk.builtin.ValueError("bad color sequence");else if(1>=t[a])t[a]=H(0,V(255,parseInt(255*t[a])));else throw new Sk.builtin.ValueError("bad color sequence");"number"==typeof t[a]?(t[3]=H(0,V(1,t[a])),t="rgba("+t.join(",")+")"):t="rgb("+t.slice(0,3).join(",")+")"}else if("string"==typeof t&&!t.match(/\\s*url\\s*\\(/i))t=t.replace(/\\s+/g,"");else return"black";return t}function E(e,t,r){var n=e._angle||0,a=e._radians||0;return r||(r={}),"number"==typeof t&&(e._isRadians?n=a=t%i.RADIANS:e._fullCircle?(n=t%e._fullCircle,a=n/e._fullCircle*i.RADIANS):n=a=0,0>n&&(n+=e._fullCircle,a+=i.RADIANS)),r.angle=n,r.radians=a,r}function O(e,t){return function(){var r=Array.prototype.slice.call(arguments),n=r.map(function(e){return Sk.ffi.remapToPy(e)});return"undefined"!=typeof t&&n.unshift(t),Sk.misceval.applyAsync(void 0,e,void 0,void 0,void 0,n).catch(Sk.uncaughtException)}}function F(e,t,n,a){var s,l=n.replace(/^\\$/,""),o=l.replace(/_\\$[a-z]+\\$$/i,""),d=e.prototype[n].length,_=e.prototype[n].minArgs,c=e.prototype[n].co_varnames||[],u=e.prototype[n].returnType,p=e.prototype[n].isSk;void 0===_&&(_=d),s=function(){var e,t,s,l,c,m=Array.prototype.slice.call(arguments,0),g=a?a():m.shift().instance;if(m.length<_||m.length>d)throw c=_===d?"exactly "+d:"between "+_+" and "+d,new Sk.builtin.TypeError(o+"() takes "+c+" positional argument(s) ("+m.length+" given)");for(e=m.length;0<=--e;)void 0!==m[e]&&(m[e]=m[e]instanceof Sk.builtin.func?O(m[e]):m[e]instanceof Sk.builtin.method?O(m[e].im_func,m[e].im_self):m[e]&&m[e].$d instanceof Sk.builtin.dict&&m[e].instance?m[e].instance:Sk.ffi.remapToJs(m[e]));var f=m.slice();for(m=[],e=f.length;0<=e;--e)null!==f[e]&&(m[e]=f[e]);try{t=g[n].apply(g,m)}catch(t){throw window&&window.console&&(window.console.log("wrapped method failed"),window.console.log(t.stack)),t}return t instanceof r&&(t=t.lastResult),t instanceof Promise?(t=t.catch(function(t){throw window&&window.console&&(window.console.log("promise failed"),window.console.log(t.stack)),t}),s=new Sk.misceval.Suspension,s.resume=function(){return void 0===l?Sk.builtin.none.none$:Sk.ffi.remapToPy(l)},s.data={type:"Sk.promise",promise:t.then(function(e){return l=e,e})},s):void 0===t?Sk.builtin.none.none$:p?t:"function"==typeof u?u(t):Sk.ffi.remapToPy(t)},s.co_varnames=c.slice(),s.$defaults=[];for(var m=_;m<c.length;m++)s.$defaults.push(Sk.builtin.none.none$);a||s.co_varnames.unshift("self"),t[l]=new Sk.builtin.func(s)}function D(e,t){Sk.builtin.pyCheckArgs("__init__",arguments,2,3,!1,!1),e.instance=new i(t),e.instance.skInstance=e}function P(e){return void 0!==e&&(le=!!e,le?_().focus():_().blur()),le}function q(){for(f(),c().reset(),a().reset();e.firstChild;)e.removeChild(e.firstChild);ne&&ne.reset(),se=0,ee=void 0,re=void 0,ne=void 0,de=0}function N(){f(),ne&&ne.reset(),se=0,ee=void 0,re=void 0,ne=void 0,de=0}var Q,Z,ee,te,re,ne,ae={},se=0,le=!0,ie=1e3/30,oe={},de=0,_e={},ce={target:"turtle",width:400,height:400,worldWidth:0,worldHeight:0,animate:!0,bufferSize:0,allowUndo:!0,assets:{}};e.hasAttribute("tabindex")||e.setAttribute("tabindex",0),_e.FLOAT=function(e){return Sk.builtin.float_(e)},_e.COLOR=function(e){if("string"==typeof e)return new Sk.builtin.str(e);for(var t=0;3>t;t++)e[t]=Sk.builtin.assk$(e[t]);return 4===e.length&&(e[3]=Sk.builtin.float_(e[3])),new Sk.builtin.tuple(e)},_e.TURTLE_LIST=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].skInstance);return new Sk.builtin.tuple(t)},oe.arrow=[[-10,0],[10,0],[0,10]],oe.square=[[10,-10],[10,10],[-10,10],[-10,-10]],oe.triangle=[[10,-5.77],[0,11.55],[-10,-5.77]],oe.classic=[[0,0],[-5,-9],[0,-7],[5,-9]],oe.turtle=[[0,16],[-2,14],[-1,10],[-4,7],[-7,9],[-9,8],[-6,5],[-7,1],[-5,-3],[-8,-6],[-6,-8],[-4,-5],[0,-7],[4,-5],[6,-8],[8,-6],[5,-3],[7,1],[6,5],[9,8],[7,9],[4,7],[1,10],[2,14]],oe.circle=[[10,0],[9.51,3.09],[8.09,5.88],[5.88,8.09],[3.09,9.51],[0,10],[-3.09,9.51],[-5.88,8.09],[-8.09,5.88],[-9.51,3.09],[-10,0],[-9.51,-3.09],[-8.09,-5.88],[-5.88,-8.09],[-3.09,-9.51],[-0,-10],[3.09,-9.51],[5.88,-8.09],[8.09,-5.88],[9.51,-3.09]],te=function(){for(var e in Sk.TurtleGraphics||(Sk.TurtleGraphics={}),ce)Sk.TurtleGraphics.hasOwnProperty(e)||(Sk.TurtleGraphics[e]=ce[e]);return Sk.TurtleGraphics}(),r.prototype.then=function(e){if(this.lastError)return this;try{this.lastResult=e(this.lastResult)}catch(t){this.lastResult=void 0,this.lastError=t}return this.lastResult instanceof Promise?this.lastResult:this},r.prototype.catch=function(e){if(this.lastError)try{this.lastResult=e(this.lastError),this.lastError=void 0}catch(t){this.lastResult=void 0,this.lastError=t}return this.lastResult instanceof Promise?this.lastResult:this};var ue;(function(e){function t(e){return te.animate?!e&&n?n:function(t){return Z=window.setTimeout(t,e||ie),Z}:function(e){e()}}var n;(function(e){e&&(n=function(t){return Q=e(t)})})(window.requestAnimationFrame||window.mozRequestAnimationFrame),e.willRenderNext=function(){return!!(this._buffer&&this._frameCount+1===this.frameBuffer())},e.turtles=function(){return this._turtles},e.addTurtle=function(e){this._turtles.push(e)},e.reset=function(){if(this._turtles)for(var e=this._turtles.length;0<=--e;)this._turtles[e].reset();this._turtles=[],this._frames=[],this._frameCount=0,this._buffer=1,this._rate=0,this._animationFrame=t()},e.addFrame=function(e,t){var n=!1;return t&&(this._frameCount+=1),this.frames().push(e),n=!te.animate||this._buffer&&this._frameCount===this.frameBuffer(),n?this.update():new r},e.frames=function(){return this._frames},e.frameBuffer=function(e){return"number"==typeof e&&(this._buffer=0|e,e&&e<=this._frameCount)?this.update():this._buffer},e.refreshInterval=function(e){return"number"==typeof e&&(this._rate=0|e,this._animationFrame=t(e)),this._rate},e.update=function(){return this._frames&&this._frames.length?this.requestAnimationFrame():new r},e.requestAnimationFrame=function(){var e,t,r=this._frames,n=this._animationFrame,a=this._turtles,s=c().spriteLayer();return this._frames=[],this._frameCount=0,new Promise(function(l){n(function(){for(t=0;t<r.length;t++)r[t]&&r[t]();for(v(s),t=0;t<a.length;t++)e=a[t],e.getState().shown&&k(e.getState(),s);l()})})}})(n.prototype),function(e){e.onEvent=function(t,r){function e(){if(!u){var e=c(),t=e.spriteLayer().canvas.getBoundingClientRect();n=0|r.clientX-t.left,a=0|r.clientY-t.top,s=n*e.xScale+e.llx,l=a*e.yScale+e.ury,u=!0}}var n,a,s,l,o,d=this._managers[t],_=this._managers.mousemove,u=!1;if(("mousedown"===t||"mouseup"===t)&&_&&_.length)for(e(),o=_.length;0<=--o;)_[o].test(n,a,s,l)&&_[o].canMove("mousedown"===t);if(d&&d.length)for(e(),o=d.length;0<=--o;)"mousemove"===t&&d[o].canMove()&&d[o].test(n,a,s,l)?d[o].trigger([s,l]):"mousedown"===t&&d[o].test(n,a,s,l)&&d[o].trigger([s,l])},e.reset=function(){this._managers={}},e.addManager=function(e,t){this._managers[e]||(this._managers[e]=[]),this._managers[e].push(t)}}(s.prototype),function(e){e.reset=function(){this._handlers=void 0},e.canMove=function(e){return!!(this._target&&this._target.hitTest)&&(void 0!==e&&(this._target.hitTest.hit=e),this._target.hitTest.hit)},e.test=function(e,t,r,n){return this._target&&this._target.hitTest?this._target.hitTest(e,t,r,n):!!this._target},e.trigger=function(e){var t,r=this._handlers;if(r&&r.length)for(t=0;t<r.length;t++)r[t].apply({},e)},e.addHandler=function(e,t){var r=this._handlers;if(!t&&r&&r.length)for(;r.shift(););return"function"==typeof e?void(!r&&(r=this._handlers=[]),r.push(e)):void(r&&!r.length&&this.reset())}}(l.prototype),i.RADIANS=2*j,function(e){function t(e,t,r){return function(){return e.addUpdate(void 0,!1,{angle:t,radians:r})}}function n(e,t,r,n,a,s){return function(){return e.translate(t,r,n,a,s,!0)}}e.hitTest=function(e,t){var r=c().hitTestLayer();v(r),k(this.getState(),r);var n=r.getImageData(e,t,1,1).data;return n[3]||n[0]||n[1]||n[2]},e.addUpdate=function(e,t,r){var n=this,s=this.getState(),l=Array.prototype.slice.call(arguments,r?2:3);return a().addFrame(function(){if(e&&e.apply(s,l),r)for(var t in r)s[t]=r[t]},t)},e.getState=function(){var e=this;return this._state||(this._state={x:this._x,y:this._y,angle:this._angle,radians:this._radians,shape:this._shape,color:this._color,fill:this._fill,filling:this._filling,size:this._size,speed:this._computed_speed,down:this._down,shown:this._shown,colorMode:this._colorMode,context:function(){return e.getPaper()}}),this._state},e.translate=function(e,t,r,n,a,s){var l=this;return R(this,e,t,r,n,a,s).then(function(e){l._x=e[0],l._y=e[1]})},e.rotate=function(e,t,r){var n=this;return M(this,e,t,r).then(function(e){n._angle=e.angle,n._radians=e.radians})},e.queueMoveBy=function(e,t,r,n){var a=Y(r)*n,s=X(r)*n;return this.translate(e,t,a,s,!0)},e.queueTurnTo=function(e,t){return t%=this._fullCircle,0>t&&(t+=this._fullCircle),this.rotate(e,t-e)},e.getManager=function(e){return this._managers[e]||(this._managers[e]=new l(e,this)),this._managers[e]},e.getPaper=function(){return this._paper||(this._paper=g(2))},e.reset=function(){for(var e in this._x=0,this._y=0,this._radians=0,this._angle=0,this._shown=!0,this._down=!0,this._color="black",this._fill="black",this._size=1,this._filling=!1,this._undoBuffer=[],this._speed=3,this._computed_speed=5,this._colorMode=1,this._state=void 0,this._managers)this._managers[e].reset();this._isRadians=!1,this._fullCircle=360,this._bufferSize="number"==typeof te.bufferSize?te.bufferSize:0,b(this._paper),this._paper=void 0},e.$degrees=function(e){return e="number"==typeof e?K(e):360,this._isRadians=!1,this._angle=e&&this._fullCircle?this._angle/this._fullCircle*e:this._radians=0,this._fullCircle=e,this.addUpdate(void 0,!1,{angle:this._angle,radians:this._radians})},e.$degrees.minArgs=0,e.$degrees.co_varnames=["fullcircle"],e.$degrees.returnType=_e.FLOAT,e.$radians=function(){return this._isRadians||(this._isRadians=!0,this._angle=this._radians,this._fullCircle=i.RADIANS),this._angle},e.$radians.returnType=_e.FLOAT,e.$position=e.$pos=function(){return[this.$xcor(),this.$ycor()]},e.$position.returnType=function(e){return new Sk.builtin.tuple([Sk.builtin.float_(e[0]),Sk.builtin.float_(e[1])])},e.$towards=function(e,t){var r=z(e,t),n=j+J(this._y-r.y,this._x-r.x),a=n*(this._fullCircle/i.RADIANS);return a},e.$towards.co_varnames=["x","y"],e.$towards.minArgs=1,e.$towards.returnType=_e.FLOAT,e.$distance=function(e,t){var r=z(e,t),n=r.x-this._x,a=r.y-this._y;return W(n*n+a*a)},e.$distance.co_varnames=["x","y"],e.$distance.minArgs=1,e.$distance.returnType=_e.FLOAT,e.$heading=function(){return 1e-13>K(this._angle)?0:this._angle},e.$heading.returnType=_e.FLOAT,e.$xcor=function(){return 1e-13>K(this._x)?0:this._x},e.$xcor.returnType=_e.FLOAT,e.$ycor=function(){return 1e-13>K(this._y)?0:this._y},e.$ycor.returnType=_e.FLOAT,e.$forward=e.$fd=function(e){return $(this),this.queueMoveBy(this._x,this._y,this._radians,e)},e.$forward.co_varnames=e.$fd.co_varnames=["distance"],e.$undo=function(){w(this)},e.$undobufferentries=function(){return this._undoBuffer.length},e.$setundobuffer=function(e){this._bufferSize="number"==typeof e?V(K(e),1e3):0},e.$setundobuffer.co_varnames=["size"],e.$backward=e.$back=e.$bk=function(e){return $(this),this.queueMoveBy(this._x,this._y,this._radians,-e)},e.$backward.co_varnames=e.$back.co_varnames=e.$bk.co_varnames=["distance"],e.$goto_$rw$=e.$setpos=e.$setposition=function(e,t){var r=z(e,t);return $(this),this.translate(this._x,this._y,r.x-this._x,r.y-this._y,!0)},e.$goto_$rw$.co_varnames=e.$setpos.co_varnames=e.$setposition.co_varnames=["x","y"],e.$goto_$rw$.minArgs=e.$setpos.minArgs=e.$setposition.minArgs=1,e.$setx=function(e){return this.translate(this._x,this._y,e-this._x,0,!0)},e.$setx.co_varnames=["x"],e.$sety=function(e){return this.translate(this._x,this._y,0,e-this._y,!0)},e.$sety.co_varnames=["y"],e.$home=function(){var e=this,t=this._angle;return $(this),e.translate(this._x,this._y,-this._x,-this._y,!0).then(function(){return e.queueTurnTo(t,0)}).then(function(){})},e.$right=e.$rt=function(e){return $(this),this.rotate(this._angle,-e)},e.$right.co_varnames=e.$rt.co_varnames=["angle"],e.$left=e.$lt=function(e){return $(this),this.rotate(this._angle,e)},e.$left.co_varnames=e.$lt.co_varnames=["angle"],e.$setheading=e.$seth=function(e){return $(this),this.queueTurnTo(this._angle,e)},e.$setheading.co_varnames=e.$seth.co_varnames=["angle"],e.$circle=function(e,s,o){var d,_,u,p,m,g,f,h,b,v=this,k=this._x,T=this._y,A=this._angle,L={},S=1/c().lineScale,C=!0;for($(this),void 0===s&&(s=v._fullCircle),void 0===o&&(_=K(s)/v._fullCircle,o=1+(0|V(11+K(e*S)/6,59)*_)),u=s/o,p=.5*u,m=2*e*X(u*j/v._fullCircle),0>e?(m=-m,u=-u,p=-p,d=A-s):d=A+s,b=a().willRenderNext()?Promise.resolve():new r,A+=p,g=0;g<o;g++)E(v,A+u*g,L),f=Y(L.radians)*m,h=X(L.radians)*m,b=b.then(t(v,L.angle,L.radians)).then(n(v,k,T,f,h,C)),k+=f,T+=h,C=!1;return b=b.then(function(){return E(v,d,L),v._angle=L.angle,v._radians=L.radians,v.addUpdate(void 0,!0,L)}),b},e.$circle.co_varnames=["radius","extent","steps"],e.$circle.minArgs=1,e.$penup=e.$up=e.$pu=function(){return this._down=!1,this.addUpdate(void 0,!1,{down:!1})},e.$pendown=e.$down=e.$pd=function(){return this._down=!0,this.addUpdate(void 0,!1,{down:!0})},e.$isdown=function(){return this._down},e.$speed=function(e){return void 0===e?this._speed:(this._speed=H(0,V(1e3,e)),this._computed_speed=H(0,2*e-1),this.addUpdate(void 0,!1,{speed:this._computed_speed}))},e.$speed.minArgs=0,e.$speed.co_varnames=["speed"],e.$pencolor=function(e,t,r,n){return void 0===e?I(this._color):(this._color=B(this._colorMode,e,t,r,n),this.addUpdate(void 0,this._shown,{color:this._color}))},e.$pencolor.co_varnames=["r","g","b","a"],e.$pencolor.minArgs=0,e.$pencolor.returnType=_e.COLOR,e.$fillcolor=function(e,t,r,n){return void 0===e?I(this._fill):(this._fill=B(this._colorMode,e,t,r,n),this.addUpdate(void 0,this._shown,{fill:this._fill}))},e.$fillcolor.co_varnames=["r","g","b","a"],e.$fillcolor.minArgs=0,e.$fillcolor.returnType=_e.COLOR,e.$color=function(e,t,r,n){return void 0===e?[this.$pencolor(),this.$fillcolor()]:(void 0===t||void 0!==r?(this._color=B(this._colorMode,e,t,r,n),this._fill=this._color):(this._color=B(this._colorMode,e),this._fill=B(this._colorMode,t)),this.addUpdate(void 0,this._shown,{color:this._color,fill:this._fill}))},e.$color.minArgs=0,e.$color.co_varnames=["color","fill","b","a"],e.$color.returnType=function(e){return new Sk.builtin.tuple([_e.COLOR(e[0]),_e.COLOR(e[1])])},e.$fill=function(e){this;return void 0===e?this._filling:(e=!!e,e===this._filling)?void 0:(this._filling=e,e?($(this),this.addUpdate(void 0,!1,{filling:!0,fillBuffer:[{x:this._x,y:this._y}]})):($(this),this.addUpdate(function(){this.fillBuffer.push(this),S.call(this)},!0,{filling:!1,fillBuffer:void 0})))},e.$fill.co_varnames=["flag"],e.$fill.minArgs=0,e.$begin_fill=function(){return this.$fill(!0)},e.$end_fill=function(){return this.$fill(!1)},e.$stamp=function(){return $(this),this.addUpdate(function(){k(this,this.context())},!0)},e.$dot=function(e,t,r,n,s){return $(this),e=Sk.builtin.asnum$(e),e="number"==typeof e?H(1,0|K(e)):H(this._size+4,2*this._size),t=void 0===t?this._color:B(this._colorMode,t,r,n,s),this.addUpdate(x,!0,void 0,e,t)},e.$dot.co_varnames=["size","color","g","b","a"],e.$write=function(e,t,r,n){var a,s,l,i,o,d=this;return $(this),e+="",n&&n.constructor===Array&&(s="string"==typeof n[0]?n[0]:"Arial",l=(n[1]||"12pt")+"",i="string"==typeof n[2]?n[2]:"normal",/^\\d+$/.test(l)&&(l+="pt"),n=[i,l,s].join(" ")),r||(r="left"),a=this.addUpdate(A,!0,void 0,e,r,n),t&&("left"===r||"center"===r)&&(o=T(e,n),"center"===r&&(o/=2),a=a.then(function(){var e=d.getState();return d.translate(e.x,e.y,o,0,!0)})),a},e.$write.co_varnames=["message","move","align","font"],e.$write.minArgs=1,e.$pensize=e.$width=function(e){return void 0===e?this._size:(this._size=e,this.addUpdate(void 0,this._shown,{size:e}))},e.$pensize.minArgs=e.$width.minArgs=0,e.$pensize.co_varnames=e.$width.co_varnames=["width"],e.$showturtle=e.$st=function(){return this._shown=!0,this.addUpdate(void 0,!0,{shown:!0})},e.$hideturtle=e.$ht=function(){return this._shown=!1,this.addUpdate(void 0,!0,{shown:!1})},e.$isvisible=function(){return this._shown},e.$shape=function(e){return e&&oe[e]?(this._shape=e,this.addUpdate(void 0,this._shown,{shape:e})):this._shape},e.$shape.minArgs=0,e.$shape.co_varnames=["name"],e.$colormode=function(e){return void 0===e?this._colorMode:(this._colorMode=255===e?255:1,this.addUpdate(void 0,this._shown,{colorMode:this._colorMode}))},e.$colormode.minArgs=0,e.$colormode.co_varnames=["cmode"],e.$colormode.returnType=function(e){return 255===e?Sk.builtin.int_(255):Sk.builtin.float_(1)},e.$window_width=function(){return this._screen.$window_width()},e.$window_height=function(){return this._screen.$window_height()},e.$tracer=function(e,t){return this._screen.$tracer(e,t)},e.$tracer.minArgs=0,e.$tracer.co_varnames=["n","delay"],e.$update=function(){return this._screen.$update()},e.$delay=function(e){return this._screen.$delay(e)},e.$delay.minArgs=0,e.$delay.co_varnames=["delay"],e.$reset=function(){return this.reset(),this.$clear()},e.$mainloop=e.$done=function(){return this._screen.$mainloop()},e.$clear=function(){return this.addUpdate(function(){v(this.context())},!0)},e.$dot.minArgs=0,e.$onclick=function(e,t,r){this.getManager("mousedown").addHandler(e,r)},e.$onclick.minArgs=1,e.$onclick.co_varnames=["method","btn","add"],e.$onrelease=function(e,t,r){this.getManager("mouseup").addHandler(e,r)},e.$onrelease.minArgs=1,e.$onrelease.co_varnames=["method","btn","add"],e.$ondrag=function(e,t,r){this.getManager("mousemove").addHandler(e,r)},e.$ondrag.minArgs=1,e.$ondrag.co_varnames=["method","btn","add"],e.$getscreen=function(){return Sk.misceval.callsimArray(ae.Screen)},e.$getscreen.isSk=!0,e.$clone=function(){var e=Sk.misceval.callsimOrSuspendArray(ae.Turtle);return e.instance._x=this._x,e.instance._y=this._y,e.instance._angle=this._angle,e.instance._radians=this._radians,e.instance._shape=this._shape,e.instance._color=this._color,e.instance._fill=this._fill,e.instance._filling=this._filling,e.instance._size=this._size,e.instance._computed_speed=this._computed_speed,e.instance._down=this._down,e.instance._shown=this._shown,e.instance._colorMode=this._colorMode,e.instance._isRadians=this._isRadians,e.instance._fullCircle=this._fullCircle,e.instance._bufferSize=this._bufferSize,e.instance._undoBuffer=this._undoBuffer,e._clonedFrom=this,e},e.$clone.returnType=function(e){return e},e.$getturtle=e.$getpen=function(){return this.skInstance},e.$getturtle.isSk=!0}(i.prototype),function(e){e.spriteLayer=function(){return this._sprites||(this._sprites=g(3))},e.bgLayer=function(){return this._background||(this._background=g(1))},e.hitTestLayer=function(){return this._hitTest||(this._hitTest=g(0,!0))},e.getManager=function(e){return this._managers[e]||(this._managers[e]=new l(e,this)),this._managers[e]},e.reset=function(){for(var e in this._keyListeners=void 0,this._keyLogger)window.clearInterval(this._keyLogger[e]),window.clearTimeout(this._keyLogger[e]),delete this._keyLogger[e];for(e in this._keyDownListener&&(_().removeEventListener("keydown",this._keyDownListener),this._keyDownListener=void 0),this._keyUpListener&&(_().removeEventListener("keyup",this._keyUpListener),this._keyUpListener=void 0),this._timer&&(window.clearTimeout(this._timer),this._timer=void 0),this._managers)this._managers[e].reset();this._mode="standard",b(this._sprites),this._sprites=void 0,b(this._background),this._background=void 0},e.setUpWorld=function(e,t,r,n){var a=this;a.llx=e,a.lly=t,a.urx=r,a.ury=n,a.xScale=(r-e)/p(),a.yScale=-1*(n-t)/m(),a.lineScale=V(K(a.xScale),K(a.yScale))},e.$setup=function(e,t,r,n){return isNaN(parseFloat(e))&&(e=p()),isNaN(parseFloat(t))&&(t=m()),1>=e&&(e=p()*e),1>=t&&(t=m()*t),this._width=e,this._height=t,this._xOffset=void 0===r||isNaN(parseInt(r))?0:parseInt(r),this._yOffset=void 0===n||isNaN(parseInt(n))?0:parseInt(n),"world"===this._mode?this._setworldcoordinates(this.llx,this.lly,this.urx,this.ury):this._setworldcoordinates(-e/2,-t/2,e/2,t/2)},e.$setup.minArgs=0,e.$setup.co_varnames=["width","height","startx","starty"],e.$register_shape=e.$addshape=function(e,r){return r?void(oe[e]=r):t(e).then(function(t){oe[e]=t})},e.$register_shape.minArgs=1,e.$getshapes=function(){return Object.keys(oe)},e.$tracer=function(e,t){return void 0!==e||void 0!==t?("number"==typeof t&&(this._delay=t,a().refreshInterval(t)),"number"==typeof e?(this._frames=e,a().frameBuffer(e)):void 0):this._frames},e.$tracer.co_varnames=["frames","delay"],e.$tracer.minArgs=0,e.$delay=function(e){return void 0===e?void 0===this._delay?ie:this._delay:this.$tracer(void 0,e)},e.$delay.co_varnames=["delay"],e._setworldcoordinates=function(e,t,r,n){var s=this,l=a().turtles();return this.setUpWorld(e,t,r,n),this._sprites&&h(this,this._sprites),this._background&&h(this,this._background),this.$clear()},e.$setworldcoordinates=function(e,t,r,n){return this._mode="world",this._setworldcoordinates(e,t,r,n)},e.$setworldcoordinates.co_varnames=["llx","lly","urx","ury"],e.minArgs=4,e.$clear=e.$clearscreen=function(){return this.reset(),this.$reset()},e.$update=function(){return a().update()},e.$reset=e.$resetscreen=function(){var e=this,t=a().turtles();return a().addFrame(function(){h(e,e._sprites),h(e,e._background);for(var r=0;r<t.length;r++)t[r].reset(),h(e,t[r]._paper)},!0)},e.$window_width=function(){return p()},e.$window_height=function(){return m()},e.$delay.minArgs=0,e.$turtles=function(){return a().turtles()},e.$turtles.returnType=_e.TURTLE_LIST,e.$bgpic=function(e){var r;return e?(r=this,t(e).then(function(e){v(r.bgLayer(),void 0,e)})):this._bgpic},e.$bgpic.minArgs=0,e.$bgpic.co_varnames=["name"],e.$bgcolor=function(e,t,r,n){return void 0===e?I(this._bgcolor):(this._bgcolor=B(this._colorMode,e,t,r,n),void v(this.bgLayer(),this._bgcolor))},e.$bgcolor.minArgs=0,e.$bgcolor.co_varnames=["color","g","b","a"],e.$bgcolor.returnType=_e.COLOR,e.$mainloop=e.$done=function(){},e.$bye=function(){return Sk.TurtleGraphics.reset()},e.$exitonclick=function(){return this._exitOnClick=!0,this.getManager("mousedown").addHandler(function(){q()},!1)},e.$onclick=function(e,t,r){this._exitOnClick||this.getManager("mousedown").addHandler(e,r)},e.$onclick.minArgs=1,e.$onclick.co_varnames=["method","btn","add"];var r={8:/^back(space)?$/i,9:/^tab$/i,13:/^(enter|return)$/i,16:/^shift$/i,17:/^(ctrl|control)$/i,18:/^alt$/i,27:/^esc(ape)?$/i,32:/^space$/i,33:/^page[\\s\\-]?up$/i,34:/^page[\\s\\-]?down$/i,35:/^end$/i,36:/^home$/i,37:/^left([\\s\\-]?arrow)?$/i,38:/^up([\\s\\-]?arrow)?$/i,39:/^right([\\s\\-]?arrow)?$/i,40:/^down([\\s\\-]?arrow)?$/i,45:/^insert$/i,46:/^del(ete)?$/i};e._createKeyRepeater=function(e,t){var r=this;r._keyLogger[t]=window.setTimeout(function(){r._keyListeners[e](),r._keyLogger[t]=window.setInterval(function(){r._keyListeners[e]()},50)},333)},e._createKeyDownListener=function(){var t=this;this._keyDownListener||(this._keyDownListener=function(n){var e=String.fromCharCode;if(P()){var a,s,l=n.charCode||n.keyCode,i=e(l).toLowerCase();if(!t._keyLogger[l])for(a in t._keyListeners)if(s=1<a.length&&r[l]&&r[l].test(a),a===i||s){t._keyListeners[a](),t._createKeyRepeater(a,l),n.preventDefault();break}}},_().addEventListener("keydown",this._keyDownListener))},e._createKeyUpListener=function(){var t=this;this._keyUpListener||(this._keyUpListener=function(r){var e=t._keyLogger[r.charCode||r.keyCode];void 0!==e&&(r.preventDefault(),window.clearInterval(e),window.clearTimeout(e),delete t._keyLogger[r.charCode||r.keyCode])},_().addEventListener("keyup",this._keyUpListener))},e.$listen=function(){this._createKeyUpListener(),this._createKeyDownListener()},e.$onkey=function(e,t){if("function"==typeof t){var r=e;e=t,t=r}t=(t+"").toLowerCase(),e&&"function"==typeof e?(!this._keyListeners&&(this._keyListeners={}),this._keyListeners[t]=e):delete this._keyListeners[t]},e.$onkey.minArgs=2,e.$onkey.co_varnames=["method","keyValue"],e.$onscreenclick=function(e,t,r){this.getManager("mousedown").addHandler(e,r)},e.$onscreenclick.minArgs=1,e.$onscreenclick.co_varnames=["method","btn","add"],e.$ontimer=function(e,t){this._timer&&(window.clearTimeout(this._timer),this._timer=void 0),e&&"number"==typeof t&&(this._timer=window.setTimeout(e,H(0,0|t)))},e.$ontimer.minArgs=0,e.$ontimer.co_varnames=["method","interval"]}(o.prototype);var pe=new Image,me=document.createElement("canvas").getContext("2d");for(var ge in D.co_varnames=["self","shape"],D.co_name=Sk.builtin.str("Turtle"),D.co_argcount=2,D.$defaults=[Sk.builtin.none.none$,Sk.builtin.str("classic")],i.prototype)/^\\$[a-z_]+/.test(ge)&&F(i,ae,ge,d);return F(o,ae,"$mainloop",c),F(o,ae,"$done",c),F(o,ae,"$bye",c),F(o,ae,"$tracer",c),F(o,ae,"$update",c),F(o,ae,"$delay",c),F(o,ae,"$window_width",c),F(o,ae,"$window_height",c),ae.Turtle=Sk.misceval.buildClass(ae,function(e,t){for(var r in t.__init__=new Sk.builtin.func(D),i.prototype)/^\\$[a-z_]+/.test(r)&&F(i,t,r)},"Turtle",[]),ae.Screen=Sk.misceval.buildClass(ae,function(e,t){for(var r in t.__init__=new Sk.builtin.func(function(e){e.instance=c()}),o.prototype)/^\\$[a-z_]+/.test(r)&&F(o,t,r)},"Screen",[]),{skModule:ae,reset:q,stop:N,focus:P,Turtle:i,Screen:o}}(e),Sk.TurtleGraphics.module=e.turtleInstance.skModule,Sk.TurtleGraphics.reset=e.turtleInstance.reset,Sk.TurtleGraphics.stop=e.turtleInstance.stop,Sk.TurtleGraphics.focus=e.turtleInstance.focus,Sk.TurtleGraphics.raw={Turtle:e.turtleInstance.Turtle,Screen:e.turtleInstance.Screen},e.turtleInstance.skModule};`,"src/lib/types.py":`"""
This file was modified from CPython.
Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
2011, 2012, 2013, 2014, 2015 Python Software Foundation; All Rights Reserved
"""
"""Define names for all type symbols known in the standard interpreter.
Types that are part of optional modules (e.g. array) are not listed.
"""
import sys

# Iterators in Python aren't a matter of type but of protocol.  A large
# and changing number of builtin types implement *some* flavor of
# iterator.  Don't check the type!  Use hasattr to check for both
# "__iter__" and "next" attributes instead.

NoneType = type(None)
TypeType = type
ObjectType = object
IntType = int
LongType = long
FloatType = float
BooleanType = bool
try:
    ComplexType = complex
except NameError:
    pass
StringType = str

# StringTypes is already outdated.  Instead of writing "type(x) in
# types.StringTypes", you should use "isinstance(x, basestring)".  But
# we keep around for compatibility with Python 2.2.
try:
    UnicodeType = unicode
    StringTypes = (StringType, UnicodeType)
except NameError:
    StringTypes = (StringType,)

BufferType = buffer

TupleType = tuple
ListType = list
DictType = DictionaryType = dict

def _f(): pass
FunctionType = type(_f)
LambdaType = type(lambda: None)         # Same as FunctionType
#CodeType = type(_f.func_code)

def _g():
    yield 1
GeneratorType = type(_g())

class _C:
    def _m(self): pass
ClassType = type(_C)
UnboundMethodType = type(_C._m)         # Same as MethodType
_x = _C()
InstanceType = type(_x)
MethodType = type(_x._m)
BuiltinFunctionType = type(len)
BuiltinMethodType = type([].append)     # Same as BuiltinFunctionType

ModuleType = type(sys)
FileType = file
try:
    XRangeType = xrange
except NameError:
    pass

# try:
#     raise TypeError
# except TypeError:
#     tb = sys.exc_info()[2]
#     TracebackType = type(tb)
#     FrameType = type(tb.tb_frame)
#     del tb

SliceType = slice
# EllipsisType = type(Ellipsis)

# DictProxyType = type(TypeType.__dict__)
NotImplementedType = type(NotImplemented)

# For Jython, the following two types are identical
# GetSetDescriptorType = type(FunctionType.func_code)
# MemberDescriptorType = type(FunctionType.func_globals)

del sys, _f, _g, _C, _x                           # Not for export
__all__ = list(n for n in globals() if n[:1] != '_')
`,"src/lib/unittest/__init__.py":`__author__ = 'bmiller'
'''
This is the start of something that behaves like
the unittest module from cpython.

'''


class _AssertRaisesContext:
    """A context manager used to implement TestCase.assertRaises* methods."""
    def __init__(self, expected, test_case):
        self.test_case = test_case
        self.expected = expected

    def _is_subtype(self, expected, basetype):
        if isinstance(expected, tuple):
            return all(_is_subtype(e, basetype) for e in expected)
        return isinstance(expected, type) and issubclass(expected, basetype)

    def handle(self, args, kwargs):
        """
        If args is empty, assertRaises is being used as a
        context manager, so return self.
        If args is not empty, call a callable passing positional and keyword
        arguments.
        """
        try:
            if not self._is_subtype(self.expected, BaseException):
                raise TypeError('assertRaises() arg 1 must be an exception type or tuple of exception types')
            if not args:
                return self

            callable_obj = args[0]
            args = args[1:]
            with self:
                callable_obj(*args, **kwargs) 

        finally:
            # bpo-23890: manually break a reference cycle
            self = None

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, tb):
        res = True
        feedback = ""
        try:
            act_exc = exc_type.__name__
        except AttributeError:
            act_exc = str(exc_type)
        try:
            exp_exc = self.expected.__name__
        except AttributeError:
            exp_exc = str(self.expected)

        if exc_type is None:
            res = False
            feedback = "{} not raised".format(exp_exc)
        elif not issubclass(exc_type, self.expected):
            res = False
            feedback = "Expected {} but got {}".format(exp_exc, act_exc)

        self.test_case.appendResult(res, act_exc, exp_exc, feedback)
        return True


class TestCase:
    def __init__(self):
        self.numPassed = 0
        self.numFailed = 0
        self.assertPassed = 0
        self.assertFailed = 0
        self.verbosity = 1
        self.tlist = []
        testNames = {}
        for name in dir(self):
            if name[:4] == 'test' and name not in testNames:
                self.tlist.append(getattr(self,name))
                testNames[name]=True

    def setUp(self):
        pass

    def tearDown(self):
        pass
    
    def cleanName(self,funcName):
    # work around skulpts lack of an __name__
        funcName = str(funcName)
        funcName = funcName[13:]
        funcName = funcName[:funcName.find('<')-3]
        return funcName

    def main(self):

        for func in self.tlist:
            if self.verbosity > 1:
                print('Running %s' % self.cleanName(func))
            try:
                self.setUp()
                self.assertPassed = 0
                self.assertFailed = 0
                func()
                self.tearDown()
                if self.assertFailed == 0:
                    self.numPassed += 1
                else:
                    self.numFailed += 1
                    print('Tests failed in %s ' % self.cleanName(func))
            except Exception as e:
                self.assertFailed += 1
                self.numFailed += 1
                print('Test threw exception in %s (%s)' % (self.cleanName(func), e))
        self.showSummary()

    def assertEqual(self, actual, expected, feedback=""):
        res = actual==expected
        if not res and feedback == "":
            feedback = "Expected %s to equal %s" % (str(actual),str(expected))
        self.appendResult(res, actual ,expected, feedback)

    def assertNotEqual(self, actual, expected, feedback=""):
        res = actual != expected
        if not res and feedback == "":
            feedback = "Expected %s to not equal %s" % (str(actual),str(expected))
        self.appendResult(res, actual, expected, feedback)

    def assertTrue(self,x, feedback=""):
        res = bool(x) is True
        if not res and feedback == "":
            feedback = "Expected %s to be True" % (str(x))
        self.appendResult(res, x, True, feedback)

    def assertFalse(self,x, feedback=""):
        res = not bool(x)
        if not res and feedback == "":
            feedback = "Expected %s to be False" % (str(x))
        self.appendResult(res, x, False, feedback)

    def assertIs(self,a,b, feedback=""):
        res = a is b
        if not res and feedback == "":
            feedback = "Expected %s to be the same object as %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsNot(self,a,b, feedback=""):
        res = a is not b
        if not res and feedback == "":
            feedback = "Expected %s to not be the same object as %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsNone(self,x, feedback=""):
        res = x is None
        if not res and feedback == "":
            feedback = "Expected %s to be None" % (str(x))
        self.appendResult(res, x, None, feedback)

    def assertIsNotNone(self,x, feedback=""):
        res = x is not None
        if not res and feedback == "":
            feedback = "Expected %s to not be None" % (str(x))
        self.appendResult(res, x, None, feedback)

    def assertIn(self, a, b, feedback=""):
        res = a in b
        if not res and feedback == "":
            feedback = "Expected %s to be in %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotIn(self, a, b, feedback=""):
        res = a not in b
        if not res and feedback == "":
            feedback = "Expected %s to not be in %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsInstance(self,a,b, feedback=""):
        res = isinstance(a,b)
        if not res and feedback == "":
            feedback = "Expected %s to be an instance of %s" % (str(a), str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotIsInstance(self,a,b, feedback=""):
        res = not isinstance(a,b)
        if not res and feedback == "":
            feedback = "Expected %s to not be an instance of %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertAlmostEqual(self, a, b, places=7, feedback="", delta=None):

        if delta is not None:
            res = abs(a-b) <= delta
        else:
            if places is None:
                places = 7
            res = round(a-b, places) == 0
        
        if not res and feedback == "":
            feedback = "Expected %s to equal %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotAlmostEqual(self, a, b, places=7, feedback="", delta=None):

        if delta is not None:
            res = not (a == b) and abs(a - b) > delta
        else:
            if places is None:
                places = 7

            res = round(a-b, places) != 0

        if not res and feedback == "":
            feedback = "Expected %s to not equal %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertGreater(self,a,b, feedback=""):
        res = a > b
        if not res and feedback == "":
            feedback = "Expected %s to be greater than %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertGreaterEqual(self,a,b, feedback=""):
        res = a >= b
        if not res and feedback == "":
            feedback = "Expected %s to be >= %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertLess(self, a, b, feedback=""):
        res = a < b
        if not res and feedback == "":
            feedback = "Expected %s to be less than %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertLessEqual(self,a,b, feedback=""):
        res = a <= b
        if not res and feedback == "":
            feedback = "Expected %s to be <= %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def appendResult(self,res,actual,expected,feedback):
        if res:
            msg = 'Pass'
            self.assertPassed += 1
        else:
            msg = 'Fail: ' +  feedback
            print(msg)
            self.assertFailed += 1

    def assertRaises(self, expected_exception, *args, **kwargs):
        context = _AssertRaisesContext(expected_exception, self)
        try:
            return context.handle(args, kwargs)
        finally:
            # bpo-23890: manually break a reference cycle
            context = None

    def fail(self, msg=None):
        if msg is None:
            msg = 'Fail'
        else:
            msg = 'Fail: ' + msg
        print(msg)
        self.assertFailed += 1

    def showSummary(self):
        pct = self.numPassed / (self.numPassed+self.numFailed) * 100
        print("Ran %d tests, passed: %d failed: %d\\n" % (self.numPassed+self.numFailed,
                                               self.numPassed, self.numFailed))



def main(verbosity=1):
    glob = globals() # globals() still needs work
    for name in glob:
        if type(glob[name]) == type and issubclass(glob[name], TestCase):
            try:
                tc = glob[name]()
                tc.verbosity = verbosity
                tc.main()
            except:
                print("Uncaught Error in: ", name)
`,"src/lib/unittest/gui.py":`import document
from unittest import TestCase

class TestCaseGui(TestCase):
     def __init__(self):
          TestCase.__init__(self)
          self.divid = document.currentDiv()
          self.mydiv = document.getElementById(self.divid)
          res = document.getElementById(self.divid+'_unit_results')
          if res:
              self.resdiv = res
              res.innerHTML = ''
          else:
              self.resdiv = document.createElement('div')
              self.resdiv.setAttribute('id',self.divid+'_unit_results')
              self.resdiv.setAttribute('class','unittest-results')
              self.mydiv.appendChild(self.resdiv)


     def main(self):
         t = document.createElement('table')
         self.resTable = t
         self.resdiv.appendChild(self.resTable)

         headers = ['Result','Actual Value','Expected Value','Notes']
         row = document.createElement('tr')
         for item in headers:
             head = document.createElement('th')
             head.setAttribute('class','ac-feedback')
             head.innerHTML = item
             head.setCSS('text-align','center')
             row.appendChild(head)
         self.resTable.appendChild(row)

         for func in self.tlist:
             try:
                 self.setUp()
                 func()
                 self.tearDown()
             except Exception as e:
                 self.appendResult('Error', None, None, e)
                 self.numFailed += 1
                 self.showSummary()

     def appendResult(self,res,actual,expected,param):
         trimActual = False
         if len(str(actual)) > 15:
             trimActual = True
             actualType = type(actual)
         trimExpected = False
         if len(str(expected)) > 15:
             trimExpected = True
             expectedType = type(expected)
         row = document.createElement('tr')
         err = False
         if res == 'Error':
             err = True
             msg = 'Error: %s' % param
             errorData = document.createElement('td')
             errorData.setAttribute('class','ac-feedback')
             errorData.innerHTML = 'ERROR'
             errorData.setCSS('background-color','#de8e96')
             errorData.setCSS('text-align','center')
             row.appendChild(errorData)
         elif res:
             passed = document.createElement('td')
             passed.setAttribute('class','ac-feedback')
             passed.innerHTML = 'Pass'
             passed.setCSS('background-color','#83d382')
             passed.setCSS('text-align','center')
             row.appendChild(passed)
             self.numPassed += 1
         else:
             fail = document.createElement('td')
             fail.setAttribute('class','ac-feedback')
             fail.innerHTML = 'Fail'
             fail.setCSS('background-color','#de8e96')
             fail.setCSS('text-align','center')
             row.appendChild(fail)
             self.numFailed += 1


         act = document.createElement('td')
         act.setAttribute('class','ac-feedback')
         if trimActual:
             actHTML = str(actual)[:5] + "..." + str(actual)[-5:]
             if actualType == str:
                 actHTML = repr(actHTML)
             act.innerHTML = actHTML
         else:
             act.innerHTML = repr(actual)
         act.setCSS('text-align','center')
         row.appendChild(act)

         expect = document.createElement('td')
         expect.setAttribute('class','ac-feedback')

         if trimExpected:
             expectedHTML = str(expected)[:5] + "..." + str(expected)[-5:]
             if expectedType == str:
                 expectedHTML = repr(expectedHTML)
             expect.innerHTML = expectedHTML
         else:
             expect.innerHTML = repr(expected)
         expect.setCSS('text-align','center')
         row.appendChild(expect)
         inp = document.createElement('td')
         inp.setAttribute('class','ac-feedback')

         if err:
             inp.innerHTML = msg
         else:
             inp.innerHTML = param
         inp.setCSS('text-align','center')
         row.appendChild(inp)
         self.resTable.appendChild(row)


     def showSummary(self):
         pct = self.numPassed / (self.numPassed+self.numFailed) * 100
         pTag = document.createElement('p')
         pTag.innerHTML = "You passed: " + str(pct) + "% of the tests"
         self.resdiv.appendChild(pTag)
`,"src/lib/urllib/__init__.js":"var $builtinmodule=function(){return{}};","src/lib/urllib/request/__init__.js":'var $builtinmodule=function(){var a={};return a.Response=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.data$=b.responseText,a.lineList=a.data$.split("\\n"),a.lineList=a.lineList.slice(0,-1);for(var c=0;c<a.lineList.length;c++)a.lineList[c]+="\\n";a.currentLine=0,a.pos$=0}),b.__str__=new Sk.builtin.func(function(){return Sk.ffi.remapToPy("<Response>")}),b.__iter__=new Sk.builtin.func(function(a){var b=a.lineList;return Sk.builtin.makeGenerator(function(){return this.$index>=this.$lines.length?void 0:new Sk.builtin.str(this.$lines[this.$index++])},{$obj:a,$index:0,$lines:b})}),b.read=new Sk.builtin.func(function(a,b){if(a.closed)throw new Sk.builtin.ValueError("I/O operation on closed file");var c=a.data$.length;void 0===b&&(b=c);var d=new Sk.builtin.str(a.data$.substr(a.pos$,b));return a.pos$+=b,a.pos$>=c&&(a.pos$=c),d}),b.readline=new Sk.builtin.func(function(a){var b="";return a.currentLine<a.lineList.length&&(b=a.lineList[a.currentLine],a.currentLine++),new Sk.builtin.str(b)}),b.readlines=new Sk.builtin.func(function(a){for(var b=[],c=a.currentLine;c<a.lineList.length;c++)b.push(new Sk.builtin.str(a.lineList[c]));return new Sk.builtin.list(b)})},"Response",[]),a.urlopen=new Sk.builtin.func(function(b,c){var d=new Promise(function(d){var e=new XMLHttpRequest;e.addEventListener("loadend",function(){d(Sk.misceval.callsimArray(a.Response,[e]))}),c?(e.open("POST",b.v),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.setRequestHeader("Content-length",c.v.length),e.send(c.v)):(e.open("GET",b.v),e.send(null))}),e=new Sk.misceval.Suspension;return e.resume=function(){return resolution},e.data={type:"Sk.promise",promise:d.then(function(a){return resolution=a,a},function(a){return resolution="",a})},e}),a};',"src/lib/urllib2.py":`raise NotImplementedError("urllib2 is not yet implemented in Skulpt")
`,"src/lib/urlparse.py":`raise NotImplementedError("urlparse is not yet implemented in Skulpt")
`,"src/lib/user.py":`raise NotImplementedError("user is not yet implemented in Skulpt")
`,"src/lib/uu.py":`raise NotImplementedError("uu is not yet implemented in Skulpt")
`,"src/lib/uuid.py":`raise NotImplementedError("uuid is not yet implemented in Skulpt")
`,"src/lib/warnings.py":`raise NotImplementedError("warnings is not yet implemented in Skulpt")
`,"src/lib/wave.py":`raise NotImplementedError("wave is not yet implemented in Skulpt")
`,"src/lib/weakref.py":`raise NotImplementedError("weakref is not yet implemented in Skulpt")
`,"src/lib/webbrowser.py":`raise NotImplementedError("webbrowser is not yet implemented in Skulpt")
`,"src/lib/webgl/__init__.js":`var $builtinmodule=function(){var a={},c=function(a){return"<table style=\\"background-color: #8CE; width: 100%; height: 100%;\\"><tr><td align=\\"center\\"><div style=\\"display: table-cell; vertical-align: middle;\\"><div style=\\"\\">"+a+"</div></div></td></tr></table>"},d="This page requires a browser that supports WebGL.<br/><a href=\\"http://get.webgl.org\\">Click here to upgrade your browser.</a>",e=function(a){for(var b=["webgl","experimental-webgl","webkit-3d","moz-webgl"],c=null,d=0;d<b.length;++d){try{c=a.getContext(b[d])}catch(a){}if(c)break}if(c){function b(){return!1}a.onselectstart=b,a.onmousedown=b}return c},f=function(a,f){var g=document.getElementById(a);if(f||(f=g.getElementsByTagName("canvas")[0]),!f)return void(g.innerHTML=c(d));var h=e(f);if(!h){var i=navigator.userAgent.match(/(\\w+\\/.*? )/g),j={};try{for(var k=0;k<i.length;++k){for(var l=i[k].match(/(\\w+)/g),m=[],n=1;n<l.length;++n)m.push(parseInt(l[n]));j[l[0]]=m}}catch(a){}g.innerHTML=j.Chrome&&(7<j.Chrome[0]||7==j.Chrome[0]&&0<j.Chrome[1]||7==j.Chrome[0]&&0==j.Chrome[1]&&521<=j.Chrome[2])?c("It doesn't appear your computer can support WebGL.<br/><a href=\\"http://get.webgl.org\\">Click here for more information.</a>"):c(d)}return h};return a.Context=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a,b){var c=document.getElementById(b.v),d=f(b.v,c);if(!d)throw new Error("Your browser does not appear to support WebGL.");for(var e in a.gl=d,d.__proto__)if("number"==typeof d.__proto__[e])Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str(e),d.__proto__[e]);else if("function"==typeof d.__proto__[e])switch(e){case"bufferData":break;case"clearColor":break;case"drawArrays":break;case"getAttribLocation":break;case"getUniformLocation":break;case"shaderSource":break;case"uniformMatrix4fv":break;case"vertexAttribPointer":break;case"viewport":break;default:(function(b){Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str(e),new Sk.builtin.func(function(){var a=d.__proto__[b];return a.apply(d,arguments)}))})(e);}d.clearColor(100/255,149/255,237/255,1),d.clear(d.COLOR_BUFFER_BIT)}),b.tp$getattr=Sk.builtin.object.prototype.GenericGetAttr,b.bufferData=new Sk.builtin.func(function(a,b,c,d){a.gl.bufferData(b,c.v,d)}),b.clearColor=new Sk.builtin.func(function(a,b,c,d,e){a.gl.clearColor(Sk.builtin.asnum$(b),Sk.builtin.asnum$(c),Sk.builtin.asnum$(d),Sk.builtin.asnum$(e))}),b.getAttribLocation=new Sk.builtin.func(function(a,b,c){return a.gl.getAttribLocation(b,c.v)}),b.getUniformLocation=new Sk.builtin.func(function(a,b,c){return a.gl.getUniformLocation(b,c.v)}),b.shaderSource=new Sk.builtin.func(function(a,b,c){a.gl.shaderSource(b,c.v)}),b.drawArrays=new Sk.builtin.func(function(a,b,c,d){a.gl.drawArrays(Sk.builtin.asnum$(b),Sk.builtin.asnum$(c),Sk.builtin.asnum$(d))}),b.vertexAttribPointer=new Sk.builtin.func(function(a,b,c,d,e,f,g){a.gl.vertexAttribPointer(b,Sk.builtin.asnum$(c),Sk.builtin.asnum$(d),e,Sk.builtin.asnum$(f),Sk.builtin.asnum$(g))}),b.viewport=new Sk.builtin.func(function(a,b,c,d,e){a.gl.viewport(Sk.builtin.asnum$(b),Sk.builtin.asnum$(c),Sk.builtin.asnum$(d),Sk.builtin.asnum$(e))}),b.uniformMatrix4fv=new Sk.builtin.func(function(a,b,c,d){a.gl.uniformMatrix4fv(Sk.builtin.asnum$(b),c,d.v)}),b.setDrawFunc=new Sk.builtin.func(function(a,b){var c=new Date().getTime(),d=setInterval(function(){Sk.misceval.callsimArray(b,[a,new Date().getTime()-c])},1e3/60)})},"Context",[]),a.Float32Array=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.v="number"==typeof b?new Float32Array(b):new Float32Array(Sk.ffi.remapToJs(b))}),b.__repr__=new Sk.builtin.func(function(a){for(var b=[],c=0;c<a.v.length;++c)b.push(a.v[c]);return new Sk.builtin.str("["+b.join(", ")+"]")})},"Float32Array",[]),a.Matrix4x4=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.v=new Float32Array(Sk.ffi.remapToJs(b))}),b.identity=new Sk.builtin.func(function(a){var b=a.v;b[0]=1,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=1,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1}),b.perspective=new Sk.builtin.func(function(b,c,d,e,g){var h=Math.tan,i=Math.PI,j=h(.5*i-.5*(Sk.builtin.asnum$(c)*i/180)),l=Sk.builtin.asnum$(d),a=Sk.builtin.asnum$(e),n=Sk.builtin.asnum$(g),f=1/(a-n),k=b.v;k[0]=j/l,k[1]=0,k[2]=0,k[3]=0,k[4]=0,k[5]=j,k[6]=0,k[7]=0,k[8]=0,k[9]=0,k[10]=(a+n)*f,k[11]=-1,k[12]=0,k[13]=0,k[14]=2*(a*n*f),k[15]=0}),b.translate=new Sk.builtin.func(function(a,b){var c=a.v,d=Sk.ffi.remapToJs(b);c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=d[0],c[13]=d[1],c[14]=d[2],c[15]=1}),b.__repr__=new Sk.builtin.func(function(a){for(var b=[],c=0;c<a.v.length;++c)b.push(a.v[c]);return new Sk.builtin.str("["+b.join(", ")+"]")})},"Matrix4x4",[]),a};`,"src/lib/webgl/math.js":'var $builtinmodule=function(){var a={};return a.Mat44=Sk.misceval.buildClass(a,function(b,c){var d=Math.sqrt;c.__init__=new Sk.builtin.func(function(a){Sk.misceval.callsimArray(c.loadIdentity,[a]),a.stack=[]}),c.push=new Sk.builtin.func(function(a){a.stack.push(a.elements.slice(0))}),c.pop=new Sk.builtin.func(function(a){a.elements=a.stack.pop()}),c.loadIdentity=new Sk.builtin.func(function(a){a.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}),c.transform3=new Sk.builtin.func(function(b,c){var d=b.elements;return Sk.misceval.callsimArray(a.Vec3,[d[0]*c.x+d[4]*c.y+d[8]*c.z,d[1]*c.x+d[5]*c.y+d[9]*c.z,d[2]*c.x+d[6]*c.y+d[10]*c.z])}),c.scale=new Sk.builtin.func(function(a,b,c,d){return a.elements[0]*=b,a.elements[1]*=b,a.elements[2]*=b,a.elements[3]*=b,a.elements[4]*=c,a.elements[5]*=c,a.elements[6]*=c,a.elements[7]*=c,a.elements[8]*=d,a.elements[9]*=d,a.elements[10]*=d,a.elements[11]*=d,a}),c.translate=new Sk.builtin.func(function(a,b,c,d){return a.elements[12]+=a.elements[0]*b+a.elements[4]*c+a.elements[8]*d,a.elements[13]+=a.elements[1]*b+a.elements[5]*c+a.elements[9]*d,a.elements[14]+=a.elements[2]*b+a.elements[6]*c+a.elements[10]*d,a.elements[15]+=a.elements[3]*b+a.elements[7]*c+a.elements[11]*d,a}),c.rotate=new Sk.builtin.func(function(b,c,e,f,g){var h=Math.cos,i=Math.sin,j=Math.PI,k=d(e*e+f*f+g*g),l=i(c*j/180),m=h(c*j/180);if(0<k){var n,o,p,q,r,s,t,u,v,w,A;e/=k,f/=k,g/=k,n=e*e,o=f*f,p=g*g,q=e*f,r=f*g,s=g*e,t=e*l,u=f*l,v=g*l,w=1-m,A=Sk.misceval.callsimArray(a.Mat44),A.elements[0]=w*n+m,A.elements[1]=w*q-v,A.elements[2]=w*s+u,A.elements[3]=0,A.elements[4]=w*q+v,A.elements[5]=w*o+m,A.elements[6]=w*r-t,A.elements[7]=0,A.elements[8]=w*s-u,A.elements[9]=w*r+t,A.elements[10]=w*p+m,A.elements[11]=0,A.elements[12]=0,A.elements[13]=0,A.elements[14]=0,A.elements[15]=1,A=A.multiply(b),b.elements=A.elements}return b}),c.multiply=new Sk.builtin.func(function(b,c){for(var d=Sk.misceval.callsimArray(a.Mat44),e=0;4>e;e++)d.elements[4*e+0]=b.elements[4*e+0]*c.elements[0]+b.elements[4*e+1]*c.elements[4]+b.elements[4*e+2]*c.elements[8]+b.elements[4*e+3]*c.elements[12],d.elements[4*e+1]=b.elements[4*e+0]*c.elements[1]+b.elements[4*e+1]*c.elements[5]+b.elements[4*e+2]*c.elements[9]+b.elements[4*e+3]*c.elements[13],d.elements[4*e+2]=b.elements[4*e+0]*c.elements[2]+b.elements[4*e+1]*c.elements[6]+b.elements[4*e+2]*c.elements[10]+b.elements[4*e+3]*c.elements[14],d.elements[4*e+3]=b.elements[4*e+0]*c.elements[3]+b.elements[4*e+1]*c.elements[7]+b.elements[4*e+2]*c.elements[11]+b.elements[4*e+3]*c.elements[15];return b.elements=d.elements,b}),c.lookAt=new Sk.builtin.func(function(b,c,e,f,g,h,i,j,k,l){var m=[c-g,e-h,f-i],n=d(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]);n&&(m[0]/=n,m[1]/=n,m[2]/=n);var o=[j,k,l],p=[];p[0]=o[1]*m[2]-o[2]*m[1],p[1]=-o[0]*m[2]+o[2]*m[0],p[2]=o[0]*m[1]-o[1]*m[0],o[0]=m[1]*p[2]-m[2]*p[1],o[1]=-m[0]*p[2]+m[2]*p[0],o[2]=m[0]*p[1]-m[1]*p[0],n=d(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]),n&&(p[0]/=n,p[1]/=n,p[2]/=n),n=d(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]),n&&(o[0]/=n,o[1]/=n,o[2]/=n);var q=Sk.misceval.callsimArray(a.Mat44);return q.elements[0]=p[0],q.elements[4]=p[1],q.elements[8]=p[2],q.elements[12]=0,q.elements[1]=o[0],q.elements[5]=o[1],q.elements[9]=o[2],q.elements[13]=0,q.elements[2]=m[0],q.elements[6]=m[1],q.elements[10]=m[2],q.elements[14]=0,q.elements[3]=0,q.elements[7]=0,q.elements[11]=0,q.elements[15]=1,q=q.multiply(b),b.elements=q.elements,b.translate(-c,-e,-f),b})},"Mat44",[]),a.Mat33=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a){Sk.misceval.callsimArray(b.loadIdentity,[a])}),b.loadIdentity=new Sk.builtin.func(function(a){a.elements=[1,0,0,0,1,0,0,0,1]})},"Mat33",[]),a.Vec3=Sk.misceval.buildClass(a,function(b,c){c.__init__=new Sk.builtin.func(function(a,b,c,d){a.x=b,a.y=c,a.z=d}),c.__sub__=new Sk.builtin.func(function(b,c){return Sk.misceval.callsimArray(a.Vec3,[b.x-c.x,b.y-c.y,b.z-c.z])})},"Vec3",[]),a.cross=new Sk.builtin.func(function(b,c){return Sk.asserts.assert(b instanceof a.Vec3&&c instanceof a.Vec3),Sk.misceval.callsimArray(a.Vec3,[b.y*c.z-b.z*c.y,b.z*c.x-b.x*c.z,b.x*c.y-b.y*c.x])}),a};',"src/lib/webgl/matrix4.js":"var $builtinmodule=function(){var a=Math.PI,b={},c=new Float32Array(3),d=new Float32Array(3),e=new Float32Array(3),f=new Float32Array(4),g=new Float32Array(4),h=new Float32Array(4),i=new Float32Array(16),j=new Float32Array(16),k=new Float32Array(16),l=function(b,c){for(var a=Math.sqrt,d=0,e=c.length,f=0;f<e;++f)d+=c[f]*c[f];if(d=a(d),1e-5<d)for(var f=0;f<e;++f)b[f]=c[f]/d;else for(var f=0;f<e;++f)b[f]=0;return b},m=function(c,d,a){return c[0]=d[1]*a[2]-d[2]*a[1],c[1]=d[2]*a[0]-d[0]*a[2],c[2]=d[0]*a[1]-d[1]*a[0],c},n=function(c,d,a){for(var b=d.length,e=0;e<b;++e)c[e]=d[e]-a[e];return c},o=function(c,a){return c[0]*a[0]+c[1]*a[1]+c[2]*a[2]};return b.lookAt=new Sk.builtin.func(function(a,b,f,g){var h=c,i=d,j=l(h,n(h,b.v,f.v)),k=l(i,m(i,g.v,j)),p=m(e,j,k),q=a.v;return q[0]=k[0],q[1]=p[0],q[2]=j[0],q[3]=0,q[4]=k[1],q[5]=p[1],q[6]=j[1],q[7]=0,q[8]=k[2],q[9]=p[2],q[10]=j[2],q[11]=0,q[12]=-o(k,b.v),q[13]=-o(p,b.v),q[14]=-o(j,b.v),q[15]=1,a}),b.perspective=new Sk.builtin.func(function(b,c,d,e,g){var h=Math.tan,i=h(.5*a-.5*(c*a/180)),f=1/(e-g),j=b.v;return j[0]=i/d,j[1]=0,j[2]=0,j[3]=0,j[4]=0,j[5]=i,j[6]=0,j[7]=0,j[8]=0,j[9]=0,j[10]=(e+g)*f,j[11]=-1,j[12]=0,j[13]=0,j[14]=2*(e*g*f),j[15]=0,b}),b.rotationY=new Sk.builtin.func(function(b,d){var e=Math.sin,f=Math.cos,g=b.v,h=f(d*a/180),c=e(d*a/180);return g[0]=h,g[1]=0,g[2]=-c,g[3]=0,g[4]=0,g[5]=1,g[6]=0,g[7]=0,g[8]=c,g[9]=0,g[10]=h,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,b}),b.identity=new Sk.builtin.func(function(a){var b=a.v;return b[0]=1,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=1,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,a}),b.mul=new Sk.builtin.func(function(c,d,e){var f=c.v,g=d.v,a=e.v,b=g[0],h=g[1],i=g[2],j=g[3],k=g[4],l=g[5],m=g[6],n=g[7],o=g[8],p=g[9],q=g[10],r=g[11],s=g[12],t=g[13],u=g[14],v=g[15],w=a[0],x=a[1],y=a[2],z=a[3],A=a[4],B=a[5],C=a[6],D=a[7],E=a[8],F=a[9],G=a[10],H=a[11],I=a[12],J=a[13],K=a[14],L=a[15];return f[0]=b*w+h*A+i*E+j*I,f[1]=b*x+h*B+i*F+j*J,f[2]=b*y+h*C+i*G+j*K,f[3]=b*z+h*D+i*H+j*L,f[4]=k*w+l*A+m*E+n*I,f[5]=k*x+l*B+m*F+n*J,f[6]=k*y+l*C+m*G+n*K,f[7]=k*z+l*D+m*H+n*L,f[8]=o*w+p*A+q*E+r*I,f[9]=o*x+p*B+q*F+r*J,f[10]=o*y+p*C+q*G+r*K,f[11]=o*z+p*D+q*H+r*L,f[12]=s*w+t*A+u*E+v*I,f[13]=s*x+t*B+u*F+v*J,f[14]=s*y+t*C+u*G+v*K,f[15]=s*z+t*D+u*H+v*L,c}),b.invert=new Sk.builtin.func(function(a,b){var c=a.v,e=b.v,f=e[0],g=e[1],h=e[2],i=e[3],j=e[4],k=e[5],l=e[6],m=e[7],n=e[8],o=e[9],p=e[10],q=e[11],r=e[12],s=e[13],t=e[14],u=e[15],v=p*u,w=t*q,x=l*u,y=t*m,z=l*q,A=p*m,B=h*u,C=t*i,D=h*q,E=p*i,F=h*m,G=l*i,H=n*s,I=r*o,J=j*s,K=r*k,L=j*o,M=n*k,N=f*s,O=r*g,P=f*o,Q=n*g,R=f*k,S=j*g,T=v*k+y*o+z*s-(w*k+x*o+A*s),U=w*g+B*o+E*s-(v*g+C*o+D*s),V=x*g+C*k+F*s-(y*g+B*k+G*s),W=A*g+D*k+G*o-(z*g+E*k+F*o),X=1/(f*T+j*U+n*V+r*W);return c[0]=X*T,c[1]=X*U,c[2]=X*V,c[3]=X*W,c[4]=X*(w*j+x*n+A*r-(v*j+y*n+z*r)),c[5]=X*(v*f+C*n+D*r-(w*f+B*n+E*r)),c[6]=X*(y*f+B*j+G*r-(x*f+C*j+F*r)),c[7]=X*(z*f+E*j+F*n-(A*f+D*j+G*n)),c[8]=X*(H*m+K*q+L*u-(I*m+J*q+M*u)),c[9]=X*(I*i+N*q+Q*u-(H*i+O*q+P*u)),c[10]=X*(J*i+O*m+R*u-(K*i+N*m+S*u)),c[11]=X*(M*i+P*m+S*q-(L*i+Q*m+R*q)),c[12]=X*(J*p+M*t+I*l-(L*t+H*l+K*p)),c[13]=X*(P*t+H*h+O*p-(N*p+Q*t+I*h)),c[14]=X*(N*l+S*t+K*h-(R*t+J*h+O*l)),c[15]=X*(R*p+L*h+Q*l-(P*l+S*p+M*h)),a}),b.transpose=new Sk.builtin.func(function(a,b){for(var c=a.v,d=b.v,e=0;4>e;++e)for(var f=0;4>f;++f)c[4*e+f]=d[4*f+e];return c}),b};","src/lib/webgl/models.js":'var $builtinmodule=function(a){var c={},d=function(a,c){var d=c||gl.ARRAY_BUFFER,e=gl.createBuffer();if(this.target=d,this.buf=e,this.set(a),this.numComponents_=a.numComponents,this.numElements_=a.numElements,this.totalComponents_=this.numComponents_*this.numElements_,a.buffer instanceof Float32Array)this.type_=gl.FLOAT;else if(a.buffer instanceof Uint8Array)this.type_=gl.UNSIGNED_BYTE;else if(a.buffer instanceof Int8Array)this.type_=gl._BYTE;else if(a.buffer instanceof Uint16Array)this.type_=gl.UNSIGNED_SHORT;else if(a.buffer instanceof Int16Array)this.type_=gl.SHORT;else throw"unhandled type:"+typeof a.buffer};return d.prototype.set=function(a){gl.bindBuffer(this.target,this.buf),gl.bufferData(this.target,a.buffer,gl.STATIC_DRAW)},d.prototype.type=function(){return this.type_},d.prototype.numComponents=function(){return this.numComponents_},d.prototype.numElements=function(){return this.numElements_},d.prototype.totalComponents=function(){return this.totalComponents_},d.prototype.buffer=function(){return this.buf},d.prototype.stride=function(){return 0},d.prototype.offset=function(){return 0},c.Model=Sk.misceval.buildClass(c,function(c,e){e.__init__=new Sk.builtin.func(function(c,e,f,g){c.buffers={};var h=function(a,e){var f="indices"==a?gl.ELEMENT_ARRAY_BUFFER:gl.ARRAY_BUFFER;b=c.buffers[a],b?b.set(e):b=new d(e,f),c.buffers[a]=b};for(a in f)h(a,f[a]);var i={},j=0;for(var k in g)i[k]=j++;c.mode=gl.TRIANGLES,c.textures=g.v,c.textureUnits=i,c.shader=e}),e.drawPrep=new Sk.builtin.func(function(a,c){var d=a.shader,e=a.buffers,f=a.textures;for(var g in c=Sk.ffi.remapToJs(c),Sk.misceval.callsimArray(d.use,[d]),e){var h=e[g];if("indices"==g)gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,h.buffer());else{var i=d.attrib[g];i&&i(h)}}for(var j in f){var k=a.textureUnits[j];d.setUniform$impl(d,textuer,k),f[j].bindToUnit(k)}for(var l in c)d.setUniform$impl(d,l,c[l])}),e.draw=new Sk.builtin.func(function(a,c,d){var e=a.shader;for(uniform in c=Sk.ffi.remapToJs(c),c)e.setUniform$impl(e,uniform,c[uniform]);if(d)for(var f in d){var g=a.textureUnits[f];e.setUniform$impl(e,f,g),d[f].bindToUnit(g)}var h=a.buffers;gl.drawElements(a.mode,h.indices.totalComponents(),gl.UNSIGNED_SHORT,0)})},"Model",[]),c};',"src/lib/webgl/primitives.js":'var $builtinmodule=function(){var a={},b=function(a,b,c){c=c||"Float32Array";var d=window[c];b.length?(this.buffer=new d(b),b=this.buffer.length/a,this.cursor=b):(this.buffer=new d(a*b),this.cursor=0),this.numComponents=a,this.numElements=b,this.type=c};return b.prototype.stride=function(){return 0},b.prototype.offset=function(){return 0},b.prototype.getElement=function(a){for(var b=a*this.numComponents,c=[],d=0;d<this.numComponents;++d)c.push(this.buffer[b+d]);return c},b.prototype.setElement=function(a,b){for(var c=a*this.numComponents,d=0;d<this.numComponents;++d)this.buffer[c+d]=b[d]},b.prototype.clone=function(){var a=new b(this.numComponents,this.numElements,this.type);return a.pushArray(this),a},b.prototype.push=function(a){this.setElement(this.cursor++,a)},b.prototype.pushArray=function(a){for(var b=0;b<a.numElements;++b)this.push(a.getElement(b))},b.prototype.pushArrayWithOffset=function(a,b){for(var c,d=0;d<a.numElements;++d){c=a.getElement(d);for(var e=0;e<b.length;++e)c[e]+=b[e];this.push(c)}},b.prototype.computeExtents=function(){for(var a=Math.max,b=Math.min,c,d=this.numElements,e=this.numComponents,f=this.getElement(0),g=this.getElement(0),h=1;h<d;++h){c=this.getElement(h);for(var i=0;i<e;++i)f[i]=b(f[i],c[i]),g[i]=a(g[i],c[i])}return{min:f,max:g}},a.createCube=new Sk.builtin.func(function(a){for(var c,d=[[3,7,5,1],[0,4,6,2],[6,7,3,2],[0,1,5,4],[5,7,6,4],[2,3,1,0]],e=a/2,g=[[-e,-e,-e],[+e,-e,-e],[-e,+e,-e],[+e,+e,-e],[-e,-e,+e],[+e,-e,+e],[-e,+e,+e],[+e,+e,+e]],h=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],i=[[0,0],[1,0],[1,1],[0,1]],j=24,k=new b(3,j),l=new b(3,j),m=new b(2,j),n=new b(3,12,"Uint16Array"),o=0;6>o;++o){c=d[o];for(var p=0;4>p;++p){var q=g[c[p]],r=h[o],s=i[p];k.push(q),l.push(r),m.push(s)}var t=4*o;n.push([t+0,t+1,t+2]),n.push([t+0,t+2,t+3])}return{position:k,normal:l,texCoord:m,indices:n}}),a};',"src/lib/whichdb.py":`raise NotImplementedError("whichdb is not yet implemented in Skulpt")
`,"src/lib/wsgiref/__init__.py":`raise NotImplementedError("wsgiref is not yet implemented in Skulpt")
`,"src/lib/xdrlib.py":`raise NotImplementedError("xdrlib is not yet implemented in Skulpt")
`,"src/lib/xml/__init__.py":`raise NotImplementedError("xml is not yet implemented in Skulpt")
`,"src/lib/xml/dom/__init__.py":`raise NotImplementedError("dom is not yet implemented in Skulpt")
`,"src/lib/xml/etree/__init__.py":`raise NotImplementedError("etree is not yet implemented in Skulpt")
`,"src/lib/xml/parsers/__init__.py":`raise NotImplementedError("parsers is not yet implemented in Skulpt")
`,"src/lib/xml/sax/__init__.py":`raise NotImplementedError("sax is not yet implemented in Skulpt")
`,"src/lib/xmllib.py":`raise NotImplementedError("xmllib is not yet implemented in Skulpt")
`,"src/lib/xmlrpclib.py":`raise NotImplementedError("xmlrpclib is not yet implemented in Skulpt")
`,"src/lib/zipfile.py":`raise NotImplementedError("zipfile is not yet implemented in Skulpt")
`}}};export{e as Sk};
