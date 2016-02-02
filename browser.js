importScripts('./octane/base.js');
importScripts('./octane/richards.js');
importScripts('./octane/deltablue.js');
importScripts('./octane/crypto.js');
importScripts('./octane/raytrace.js');
importScripts('./octane/earley-boyer.js');
importScripts('./octane/regexp.js');
importScripts('./octane/splay.js');
importScripts('./octane/navier-stokes.js');
importScripts('./octane/pdfjs.js');
importScripts('./octane/mandreel.js');
importScripts('./octane/gbemu-part1.js');
importScripts('./octane/gbemu-part2.js');
importScripts('./octane/code-load.js');
importScripts('./octane/box2d.js');
importScripts('./octane/zlib.js');
importScripts('./octane/zlib-data.js');
importScripts('./octane/typescript.js');
importScripts('./octane/typescript-input.js');
importScripts('./octane/typescript-compiler.js');

BenchmarkSuite.RunSuites({
  NotifyStart: function() { console.log('start', arguments); },
  NotifyError: function() { console.log('error', arguments); },
  NotifyResult: function() { console.log('result', arguments); },
  NotifyScore: function() { console.log('score', arguments); },
});
