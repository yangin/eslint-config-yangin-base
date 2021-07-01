module.exports = {
    env: {
      node: true
    },
  
    rules: {
        // 要求回调函数中有容错处理
        'handle-callback-err': [ 'error', '^(err|error)$' ],
        // 禁止调用 require 时使用 new 操作符
        'no-new-require': [ 'error' ],
        // 禁止对 __dirname 和 __filename 进行字符串连接
        'no-path-concat': [ 'error' ],
        
        // 'node/no-deprecated-api': [ 'error' ],
        // 'node/process-exit-as-throw': [ 'error' ],
    }
  };
  