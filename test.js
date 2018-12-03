import validator from './validate.js'

const data = {
  username: 'w577186465',
  password: '159263asdf'
}

const constraints = {
  username: {
    rule: ['require', {max: 30}, {mix: 5}, {regexp: /[a-zA-Z0-9_]/i}],
    type: ['string']
  }
}

const message = {
  username: {
    rule: {
      require: '请输入用户名'
    }
  }
}

const validate = validator.validate(data, constraints, message)
if (validate !== true) {
  console.log(validate)
}
